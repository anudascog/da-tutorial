// tools/build-coveo.js - Enhanced version with inline patching
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
}

function copyAndPatchFile(src, dest, description, needsPatch = false) {
  try {
    const destPath = path.resolve(projectRoot, dest);
    ensureDir(path.dirname(destPath));
    
    let content = fs.readFileSync(src, 'utf8');
    
    // If this is a JS file that needs patching, add browser compatibility
    if (needsPatch && dest.endsWith('.js')) {
      console.log(`🔧 Adding browser compatibility to ${description}...`);
      
      // Add compatibility shims at the beginning
      content = `// Browser compatibility shims for Coveo Atomic
if (typeof exports === 'undefined') {
  var exports = {};
}
if (typeof module === 'undefined') {
  var module = { exports: exports };
}
if (typeof require === 'undefined') {
  var require = function(id) {
    console.warn('require() not available in browser for:', id);
    return {};
  };
}
if (typeof global === 'undefined') {
  var global = window;
}
if (typeof process === 'undefined') {
  var process = { env: {}, browser: true };
}

// Original Coveo content below:
${content}`;
    }
    
    fs.writeFileSync(destPath, content);
    
    const size = content.length;
    console.log(`✅ Copied and ${needsPatch ? 'patched ' : ''}${description}: ${path.basename(dest)} (${Math.round(size/1024)}KB)`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to copy ${description}:`, error.message);
    return false;
  }
}

function findAllFiles(dir, extension, minSize = 0) {
  const results = [];
  
  if (!fs.existsSync(dir)) return results;
  
  function searchRecursive(currentDir, depth = 0) {
    if (depth > 4) return; // Limit depth
    
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        try {
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.includes('node_modules')) {
            searchRecursive(fullPath, depth + 1);
          } else if (stat.isFile() && item.endsWith(extension) && stat.size > minSize) {
            results.push({
              path: fullPath,
              relativePath: path.relative(projectRoot, fullPath),
              size: stat.size,
              name: item
            });
          }
        } catch (error) {
          // Skip files we can't access
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  searchRecursive(dir);
  return results.sort((a, b) => b.size - a.size); // Sort by size, largest first
}

function findBestFile(packageDir, packageName, fileType) {
  console.log(`🔍 Finding ${fileType} files for ${packageName}...`);
  
  if (fileType === 'js') {
    const jsFiles = findAllFiles(packageDir, '.js', 100000); // Min 100KB
    
    console.log(`   Found ${jsFiles.length} JS files`);
    
    // Prioritize files based on naming and size
    const priorities = [
      file => file.name.includes('esm') && file.size > 500000,
      file => file.name.includes('atomic') && file.size > 300000,
      file => file.name.includes('headless') && file.size > 300000,
      file => file.name.includes('index') && file.size > 200000,
      file => file.size > 150000
    ];
    
    for (const priorityCheck of priorities) {
      const match = jsFiles.find(priorityCheck);
      if (match) {
        console.log(`   ✅ Selected: ${match.relativePath} (${Math.round(match.size/1024)}KB)`);
        return match.path;
      }
    }
    
    // Fallback to largest file
    if (jsFiles.length > 0) {
      const largest = jsFiles[0];
      console.log(`   ⚠️  Fallback to largest: ${largest.relativePath} (${Math.round(largest.size/1024)}KB)`);
      return largest.path;
    }
    
  } else if (fileType === 'css') {
    const cssFiles = findAllFiles(packageDir, '.css', 2000); // Min 20KB
    
    console.log(`   Found ${cssFiles.length} CSS files`);
    
    const cssMatch = cssFiles.find(file => 
      file.name.includes('atomic') || 
      file.name.includes('coveo') ||
      file.size > 50000
    );
    
    if (cssMatch) {
      console.log(`   ✅ Selected: ${cssMatch.relativePath} (${Math.round(cssMatch.size/1024)}KB)`);
      return cssMatch.path;
    }
    
    if (cssFiles.length > 0) {
      const largest = cssFiles[0];
      console.log(`   ⚠️  Fallback to largest: ${largest.relativePath} (${Math.round(largest.size/1024)}KB)`);
      return largest.path;
    }
  }
  
  console.log(`   ❌ No suitable ${fileType} file found`);
  return null;
}

function createCoveoLoader() {
  const loaderContent = `// Coveo Loader for AEM Block Collection
let coveoLoaded = false;
let loadingPromise = null;

export async function loadCoveo() {
  if (coveoLoaded) return true;
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      console.log('🔍 Loading Coveo components...');
      
      // Load CSS first
      await loadCoveoCSS();
      
      // Load patched JavaScript
      await loadCoveoJS();
      
      // Wait for components
      await waitForEssentialComponents();
      
      coveoLoaded = true;
      console.log('✅ Coveo loaded successfully');
      resolve(true);
    } catch (error) {
      console.error('❌ Failed to load Coveo:', error);
      loadingPromise = null;
      reject(error);
    }
  });

  return loadingPromise;
}

async function loadCoveoCSS() {
  if (document.querySelector('link[href*="coveo.css"]')) {
    return;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/scripts/coveo.css';
  document.head.appendChild(link);
  console.log('✅ Coveo CSS loaded');
}

async function loadCoveoJS() {
  if (window.customElements && window.customElements.get('atomic-search-interface')) {
    console.log('✅ Coveo components already available');
    return;
  }

  // Try local patched file first
  try {
    await loadLocalAtomic();
    console.log('✅ Loaded local patched Coveo atomic');
    return;
  } catch (error) {
    console.warn('⚠️ Local atomic failed, trying CDN fallback:', error.message);
  }

  // Fallback to CDN
  try {
    await loadCDNAtomic();
    console.log('✅ Loaded CDN Coveo atomic');
  } catch (error) {
    throw new Error('Both local and CDN loading failed');
  }
}

function loadLocalAtomic() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/scripts/atomic.esm.js?v=' + Date.now(); // Cache busting
    
    const timeout = setTimeout(() => {
      reject(new Error('Local atomic loading timeout'));
    }, 8000);
    
    script.onload = () => {
      clearTimeout(timeout);
      // Give time for components to register
      setTimeout(() => {
        if (window.customElements && window.customElements.get('atomic-search-interface')) {
          resolve();
        } else {
          reject(new Error('Components not registered after local load'));
        }
      }, 2000);
    };
    
    script.onerror = () => {
      clearTimeout(timeout);
      reject(new Error('Failed to load local atomic script'));
    };
    
    document.head.appendChild(script);
  });
}

function loadCDNAtomic() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://static.cloud.coveo.com/atomic/v3/atomic.esm.js';
    
    const timeout = setTimeout(() => {
      reject(new Error('CDN loading timeout'));
    }, 12000);
    
    script.onload = () => {
      clearTimeout(timeout);
      setTimeout(() => {
        if (window.customElements && window.customElements.get('atomic-search-interface')) {
          resolve();
        } else {
          reject(new Error('CDN components not registered'));
        }
      }, 3000);
    };
    
    script.onerror = () => {
      clearTimeout(timeout);
      reject(new Error('CDN loading failed'));
    };
    
    document.head.appendChild(script);
  });
}

async function waitForEssentialComponents() {
  const components = ['atomic-search-interface', 'atomic-search-box', 'atomic-result-list'];
  const maxWait = 10000;
  const startTime = Date.now();

  for (const component of components) {
    while (!window.customElements || !window.customElements.get(component)) {
      if (Date.now() - startTime > maxWait) {
        throw new Error(\`Component not available: \${component}\`);
      }
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }
}

export function isCoveoLoaded() {
  return coveoLoaded;
}

export function resetCoveoLoader() {
  coveoLoaded = false;
  loadingPromise = null;
}

export function debugCoveoStatus() {
  const components = ['atomic-search-interface', 'atomic-search-box', 'atomic-result-list'];
  const status = {
    loaded: coveoLoaded,
    customElementsAvailable: !!window.customElements,
    components: window.customElements ? 
      components.map(name => ({ name, available: !!window.customElements.get(name) })) : []
  };
  console.log('🐛 Coveo Status:', status);
  return status;
}
`;

  const loaderPath = path.resolve(projectRoot, 'scripts/coveo-loader.js');
  ensureDir(path.dirname(loaderPath));
  fs.writeFileSync(loaderPath, loaderContent);
  console.log('✅ Created Coveo loader');
}

function buildCoveoAssets() {
  console.log('🔨 Building Coveo assets with automatic browser compatibility...\n');
  
  ensureDir(path.resolve(projectRoot, 'scripts'));
  
  const atomicDir = path.resolve(projectRoot, 'node_modules/@coveo/atomic');
  const headlessDir = path.resolve(projectRoot, 'node_modules/@coveo/headless');
  
  if (!fs.existsSync(atomicDir)) {
    console.error('❌ @coveo/atomic package not found');
    return;
  }
  
  if (!fs.existsSync(headlessDir)) {
    console.error('❌ @coveo/headless package not found');
    return;
  }
  
  let allCopied = true;
  
  // Find and copy Atomic JS file (with patching)
  const atomicJs = findBestFile(atomicDir, '@coveo/atomic', 'js');
  if (atomicJs) {
    if (!copyAndPatchFile(atomicJs, 'scripts/atomic.esm.js', 'Atomic JS', true)) {
      allCopied = false;
    }
  } else {
    allCopied = false;
  }
  
  console.log('');
  
  // Find and copy Atomic CSS file (no patching needed)
  const atomicCss = findBestFile(atomicDir, '@coveo/atomic', 'css');
  if (atomicCss) {
    if (!copyAndPatchFile(atomicCss, 'scripts/coveo.css', 'Atomic CSS', false)) {
      allCopied = false;
    }
  } else {
    allCopied = false;
  }
  
  console.log('');
  
  // Find and copy Headless JS file (optional)
  const headlessJs = findBestFile(headlessDir, '@coveo/headless', 'js');
  if (headlessJs) {
    copyAndPatchFile(headlessJs, 'scripts/headless.esm.js', 'Headless JS', false);
  }
  
  console.log('');
  
  if (allCopied) {
    createCoveoLoader();
    console.log('\n✅ Coveo build completed successfully with browser compatibility!');
    console.log('🎉 No more "exports is not defined" errors!');
  } else {
    console.error('\n❌ Some files failed to copy.');
    createCoveoLoader(); // Create loader anyway for CDN fallback
  }
}

buildCoveoAssets();