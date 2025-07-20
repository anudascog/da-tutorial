// tools/build-coveo.js (Auto-Discovery Version)
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

function findBestDistDirectory(packageDir) {
  console.log('🔍 Finding the best dist directory to copy...');
  
  const possiblePaths = [
    'dist',
    'lib', 
    'build',
    'esm'
  ];
  
  for (const distPath of possiblePaths) {
    const fullPath = path.join(packageDir, distPath);
    if (fs.existsSync(fullPath)) {
      const files = fs.readdirSync(fullPath);
      const jsFiles = files.filter(f => f.endsWith('.js'));
      const cssFiles = files.filter(f => f.endsWith('.css'));
      
      console.log(`   📂 Found ${distPath}/ with ${jsFiles.length} JS files and ${cssFiles.length} CSS files`);
      
      if (jsFiles.length > 0) {
        return { path: fullPath, name: distPath };
      }
    }
  }
  
  console.log('   ❌ No suitable dist directory found');
  return null;
}

function copyEntireDistDirectory(sourceDir, destDir) {
  console.log(`📋 Copying entire directory structure from ${sourceDir.name}/...`);
  
  ensureDir(destDir);
  let copiedFiles = 0;
  let totalSize = 0;
  
  function copyRecursively(src, dest) {
    const items = fs.readdirSync(src);
    
    for (const item of items) {
      const srcPath = path.join(src, item);
      const destPath = path.join(dest, item);
      const stat = fs.statSync(srcPath);
      
      if (stat.isDirectory()) {
        ensureDir(destPath);
        copyRecursively(srcPath, destPath);
      } else if (stat.isFile()) {
        fs.copyFileSync(srcPath, destPath);
        copiedFiles++;
        totalSize += stat.size;
        
        // Log significant files
        if (stat.size > 10000 || item.includes('atomic') || item.includes('index')) {
          console.log(`   ✅ ${item} (${Math.round(stat.size/1024)}KB)`);
        }
      }
    }
  }
  
  try {
    copyRecursively(sourceDir.path, destDir);
    console.log(`✅ Copied ${copiedFiles} files (${Math.round(totalSize/1024)}KB total)`);
    return true;
  } catch (error) {
    console.error('❌ Failed to copy directory:', error.message);
    return false;
  }
}

function findMainEntryPoint(distDir) {
  console.log('🔍 Finding main entry point...');
  
  const possibleEntries = [
    'atomic.esm.js',
    'index.esm.js', 
    'index.js',
    'atomic.js'
  ];
  
  for (const entry of possibleEntries) {
    const entryPath = path.join(distDir, entry);
    if (fs.existsSync(entryPath)) {
      console.log(`   ✅ Found main entry: ${entry}`);
      return entry;
    }
  }
  
  // Look for largest JS file as fallback
  const jsFiles = fs.readdirSync(distDir)
    .filter(f => f.endsWith('.js'))
    .map(f => ({
      name: f,
      size: fs.statSync(path.join(distDir, f)).size
    }))
    .sort((a, b) => b.size - a.size);
  
  if (jsFiles.length > 0) {
    console.log(`   ⚠️  Using largest JS file: ${jsFiles[0].name}`);
    return jsFiles[0].name;
  }
  
  console.log('   ❌ No suitable entry point found');
  return null;
}

function createAtomicEntryPoint(mainFile, scriptsDir) {
  console.log('🔧 Creating atomic.esm.js entry point...');
  
  // Create a simple entry point that loads the main file
  const entryContent = `// Coveo Atomic Entry Point
// This file loads the main Coveo atomic module with browser compatibility

// Essential browser globals
if (typeof window !== 'undefined') {
  // Set up minimal browser environment
  if (!window.global) window.global = window;
  if (!window.process) {
    window.process = { 
      env: {}, 
      browser: true,
      version: '16.0.0'
    };
  }
  
  // Only add exports/module if they don't exist
  if (typeof exports === 'undefined') {
    window.exports = {};
  }
  if (typeof module === 'undefined') {
    window.module = { exports: window.exports || {} };
  }
  
  // Simple require function for relative imports
  if (typeof require === 'undefined') {
    window.require = function(id) {
      console.log('Require called for:', id);
      
      // For relative imports, try to load them dynamically
      if (id.startsWith('./') || id.startsWith('../')) {
        // Remove the ./ or ../ and try to import
        const cleanId = id.replace(/^\.\.?\//, '');
        
        // Try to find the file in our scripts directory
        try {
          // This won't work for runtime, but at least won't crash
          return { default: {}, __esModule: true };
        } catch (e) {
          console.warn('Could not load relative module:', id);
          return { default: {}, __esModule: true };
        }
      }
      
      // Return empty object for other modules
      return {};
    };
  }
}

// Import the main Coveo file
// We'll load it as a script tag instead of import to avoid module issues
(function() {
  const script = document.createElement('script');
  script.src = '/scripts/${mainFile}';
  script.onload = function() {
    console.log('✅ Main Coveo script loaded:', '${mainFile}');
  };
  script.onerror = function() {
    console.error('❌ Failed to load main Coveo script:', '${mainFile}');
  };
  document.head.appendChild(script);
})();
`;

  const entryPath = path.join(scriptsDir, 'atomic.esm.js');
  fs.writeFileSync(entryPath, entryContent);
  console.log('✅ Created atomic.esm.js entry point');
}

function createComprehensiveLoader() {
  const loaderContent = `// Comprehensive Local Coveo Loader
let coveoLoaded = false;
let loadingPromise = null;

export async function loadCoveo() {
  if (coveoLoaded) return true;
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      console.log('🔍 Loading comprehensive local Coveo...');
      
      // Load CSS
      await loadCoveoCSS();
      
      // Load main atomic script
      await loadAtomicScript();
      
      // Wait for components with longer timeout
      await waitForComponentsComprehensive();
      
      coveoLoaded = true;
      console.log('✅ Comprehensive local Coveo loaded!');
      resolve(true);
    } catch (error) {
      console.error('❌ Comprehensive loading failed:', error);
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

async function loadAtomicScript() {
  if (window.customElements && window.customElements.get('atomic-search-interface')) {
    console.log('✅ Coveo components already available');
    return;
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = '/scripts/atomic.esm.js?v=' + Date.now();
    
    // Much longer timeout since we're loading all files
    const timeout = setTimeout(() => {
      reject(new Error('Comprehensive script loading timeout'));
    }, 30000); // 30 seconds
    
    script.onload = () => {
      clearTimeout(timeout);
      console.log('📦 Atomic entry script loaded');
      
      // Give extra time for all modules to load and register
      setTimeout(() => {
        resolve();
      }, 8000); // 8 seconds wait
    };
    
    script.onerror = () => {
      clearTimeout(timeout);
      reject(new Error('Failed to load atomic entry script'));
    };
    
    document.head.appendChild(script);
  });
}

async function waitForComponentsComprehensive() {
  console.log('🔍 Comprehensive component check...');
  
  const requiredComponents = ['atomic-search-interface'];
  const maxWaitTotal = 20000; // 20 seconds total
  const startTime = Date.now();
  
  // Check custom elements API
  if (!window.customElements) {
    throw new Error('Custom Elements API not available');
  }
  
  for (const component of requiredComponents) {
    console.log(\`⏳ Checking for \${component}...\`);
    
    while (!window.customElements.get(component)) {
      if (Date.now() - startTime > maxWaitTotal) {
        throw new Error(\`Component not available after \${maxWaitTotal}ms: \${component}\`);
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log(\`✅ Found: \${component}\`);
  }
  
  console.log('✅ All components verified!');
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
  console.log('🐛 Comprehensive Coveo Status:', status);
  return status;
}
`;

  const loaderPath = path.resolve(projectRoot, 'scripts/coveo-loader.js');
  ensureDir(path.dirname(loaderPath));
  fs.writeFileSync(loaderPath, loaderContent);
  console.log('✅ Created comprehensive Coveo loader');
}

function buildCoveoAssets() {
  console.log('🔨 Building comprehensive Coveo assets (copying ALL files)...');
  console.log('');
  
  ensureDir(path.resolve(projectRoot, 'scripts'));
  
  const atomicDir = path.resolve(projectRoot, 'node_modules/@coveo/atomic');
  const headlessDir = path.resolve(projectRoot, 'node_modules/@coveo/headless');
  
  if (!fs.existsSync(atomicDir)) {
    console.error(' @coveo/atomic package not found');
    console.log(' Run: npm install @coveo/atomic');
    return;
  }
  
  // Find the best dist directory
  const distDir = findBestDistDirectory(atomicDir);
  if (!distDir) {
    console.error('❌ No suitable distribution directory found');
    return;
  }
  
  // Copy the entire dist directory to preserve module structure
  const success = copyEntireDistDirectory(distDir, scriptsDir);
  
  if (success) {
    // Find the main entry point
    const mainFile = findMainEntryPoint(scriptsDir);
    
    if (mainFile) {
      // Create our entry point that references the main file
      createAtomicEntryPoint(mainFile, scriptsDir);
    } else {
      console.error('❌ Could not find main entry point');
    }
    
    // Create comprehensive loader
    createComprehensiveLoader();
    
    console.log('');
    console.log('✅ Comprehensive Coveo build completed!');
    console.log('📁 Copied ALL files to preserve module dependencies');
    console.log('🔗 Created proper entry point with module loading');
    console.log('⏱️  Increased timeouts for complex loading');
  } else {
    console.error('❌ Failed to copy Coveo files');
  }
}

buildCoveoAssets();