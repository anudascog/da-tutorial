// tools/build-coveo.js - Local build with proper module handling
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

function findCoveoFiles(packageDir, fileType) {
  console.log(`🔍 Finding ${fileType} files in ${path.basename(packageDir)}...`);
  
  const results = [];
  
  function searchRecursively(dir, depth = 0) {
    if (depth > 4 || !fs.existsSync(dir)) return;
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        try {
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.includes('node_modules')) {
            searchRecursively(fullPath, depth + 1);
          } else if (stat.isFile()) {
            if (fileType === 'js' && item.endsWith('.js') && stat.size > 100000) {
              results.push({
                path: fullPath,
                size: stat.size,
                name: item,
                relativePath: path.relative(packageDir, fullPath)
              });
            } else if (fileType === 'css' && item.endsWith('.css') && stat.size > 2000) {
              results.push({
                path: fullPath,
                size: stat.size,
                name: item,
                relativePath: path.relative(packageDir, fullPath)
              });
            }
          }
        } catch (error) {
          // Skip files we can't access
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  searchRecursively(packageDir);
  
  // Sort by size (largest first)
  results.sort((a, b) => b.size - a.size);
  
  console.log(`   Found ${results.length} ${fileType} files`);
  results.slice(0, 3).forEach(file => {
    console.log(`     - ${file.relativePath} (${Math.round(file.size/1024)}KB)`);
  });
  
  return results;
}

function selectBestFile(files, fileType) {
  if (files.length === 0) {
    console.log(`   ❌ No ${fileType} files found`);
    return null;
  }
  
  if (fileType === 'js') {
    // Prefer files with specific names and avoid test/spec files
    const priorities = [
      file => file.name.includes('atomic') && file.name.includes('esm'),
      file => file.name.includes('index') && file.size > 50000,
      file => file.name.includes('atomic') && file.size > 30000,
      file => !file.name.includes('test') && !file.name.includes('spec') && file.size > 20000
    ];
    
    for (const priority of priorities) {
      const match = files.find(priority);
      if (match) {
        console.log(`   ✅ Selected: ${match.relativePath} (${Math.round(match.size/1024)}KB)`);
        return match;
      }
    }
  } else if (fileType === 'css') {
    // Prefer atomic or coveo named CSS files
    const preferred = files.find(file => 
      file.name.includes('atomic') || file.name.includes('coveo')
    );
    
    if (preferred) {
      console.log(`   ✅ Selected: ${preferred.relativePath} (${Math.round(preferred.size/1024)}KB)`);
      return preferred;
    }
  }
  
  // Fallback to largest file
  const largest = files[0];
  console.log(`   ⚠️  Using largest: ${largest.relativePath} (${Math.round(largest.size/1024)}KB)`);
  return largest;
}

function createFixedAtomicFile(sourceFile, destFile) {
  console.log('🔧 Creating browser-compatible atomic file...');
  
  try {
    let content = fs.readFileSync(sourceFile.path, 'utf8');
    
    // Create a comprehensive browser compatibility wrapper
    const fixedContent = `// Browser-Compatible Coveo Atomic
(function() {
  'use strict';
  
  // Browser environment setup
  if (typeof window !== 'undefined') {
    // Global variables for Node.js compatibility
    window.global = window.global || window;
    window.process = window.process || { 
      env: {}, 
      browser: true,
      version: '16.0.0',
      versions: { node: '16.0.0' }
    };
    
    // Module system setup
    const moduleRegistry = new Map();
    const exportRegistry = new Map();
    
    // Enhanced require function that handles relative paths
    window.require = function(moduleId) {
      // Handle relative paths by converting them to absolute-ish paths
      if (moduleId.startsWith('./') || moduleId.startsWith('../')) {
        // For relative requires, return a mock module
        console.log('Mock module loaded for:', moduleId);
        return {
          default: {},
          __esModule: true
        };
      }
      
      // Handle known Node.js modules
      const nodeModules = {
        'util': { inspect: () => '[Object]', inherits: () => {} },
        'events': { 
          EventEmitter: class EventEmitter {
            on() { return this; }
            emit() { return true; }
            removeListener() { return this; }
          }
        },
        'stream': { 
          Readable: class {}, 
          Writable: class {},
          Transform: class {}
        },
        'buffer': { 
          Buffer: { 
            from: () => new Uint8Array(), 
            isBuffer: () => false,
            alloc: () => new Uint8Array()
          }
        },
        'crypto': { 
          createHash: () => ({ 
            update: () => ({}), 
            digest: () => 'mock-hash' 
          }) 
        },
        'path': { 
          join: (...args) => args.join('/'),
          resolve: (...args) => '/' + args.join('/'),
          dirname: (p) => p.split('/').slice(0, -1).join('/'),
          basename: (p) => p.split('/').pop()
        },
        'fs': { 
          readFileSync: () => '', 
          writeFileSync: () => {},
          existsSync: () => false
        },
        'os': { 
          platform: () => 'browser', 
          arch: () => 'x64',
          tmpdir: () => '/tmp'
        }
      };
      
      if (nodeModules[moduleId]) {
        return nodeModules[moduleId];
      }
      
      // For unknown modules, return empty object
      console.log('Unknown module requested:', moduleId);
      return {};
    };
    
    // Set up exports and module
    window.exports = window.exports || {};
    window.module = window.module || { exports: window.exports };
    
    // Additional polyfills
    if (!window.setImmediate) {
      window.setImmediate = (fn) => setTimeout(fn, 0);
    }
    
    if (!window.clearImmediate) {
      window.clearImmediate = (id) => clearTimeout(id);
    }
  }
  
  // Wrap the original content in a try-catch to handle any remaining issues
  try {
${content}
  } catch (error) {
    console.error('Error in Coveo atomic content:', error);
    
    // Fallback: create minimal search interface
    if (typeof window !== 'undefined' && window.customElements && !window.customElements.get('atomic-search-interface')) {
      console.log('Creating fallback search interface...');
      
      class FallbackSearchInterface extends HTMLElement {
        connectedCallback() {
          this.innerHTML = '<div style="padding: 2rem; border: 1px solid #ddd; text-align: center;">Search interface is loading... Please wait or refresh the page.</div>';
        }
        
        async initialize(config) {
          console.log('Fallback interface initialized with config:', config);
          this.innerHTML = '<div style="padding: 2rem; border: 1px solid #ddd; text-align: center;">Search interface failed to load properly. Please check console for errors.</div>';
        }
        
        async executeFirstSearch() {
          console.log('Fallback search execution');
        }
      }
      
      window.customElements.define('atomic-search-interface', FallbackSearchInterface);
    }
  }
})();`;

    fs.writeFileSync(destFile, fixedContent);
    
    const newSize = fs.statSync(destFile).size;
    console.log(`✅ Created fixed atomic file: ${Math.round(newSize/1024)}KB`);
    return true;
    
  } catch (error) {
    console.error('❌ Failed to create fixed atomic file:', error.message);
    return false;
  }
}

function copyFile(sourceFile, destFile, description) {
  try {
    fs.copyFileSync(sourceFile.path, destFile);
    console.log(`✅ Copied ${description}: ${Math.round(sourceFile.size/1024)}KB`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to copy ${description}:`, error.message);
    return false;
  }
}

function createLocalCoveoLoader() {
  const loaderContent = `// Local Coveo Loader with Fallback
let coveoLoaded = false;
let loadingPromise = null;

export async function loadCoveo() {
  if (coveoLoaded) return true;
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      console.log('🔍 Loading local Coveo components...');
      
      // Load CSS
      await loadCoveoCSS();
      
      // Load fixed JavaScript
      await loadFixedAtomic();
      
      // Wait for components
      await waitForComponents();
      
      coveoLoaded = true;
      console.log('✅ Local Coveo loaded successfully');
      resolve(true);
    } catch (error) {
      console.error('❌ Local Coveo loading failed:', error);
      
      // Fallback to CDN if local fails
      try {
        console.log('🔄 Trying CDN fallback...');
        await loadCDNFallback();
        coveoLoaded = true;
        console.log('✅ CDN fallback successful');
        resolve(true);
      } catch (cdnError) {
        console.error('❌ CDN fallback also failed:', cdnError);
        loadingPromise = null;
        reject(cdnError);
      }
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
  console.log('✅ Local Coveo CSS loaded');
}

async function loadFixedAtomic() {
  if (window.customElements && window.customElements.get('atomic-search-interface')) {
    console.log('✅ Coveo components already available');
    return;
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = '/scripts/atomic.esm.js?v=' + Date.now();
    
    const timeout = setTimeout(() => {
      reject(new Error('Local atomic loading timeout'));
    }, 12000);
    
    script.onload = () => {
      clearTimeout(timeout);
      setTimeout(() => {
        if (window.customElements && window.customElements.get('atomic-search-interface')) {
          resolve();
        } else {
          reject(new Error('Components not registered after local load'));
        }
      }, 3000);
    };
    
    script.onerror = () => {
      clearTimeout(timeout);
      reject(new Error('Failed to load local atomic script'));
    };
    
    document.head.appendChild(script);
  });
}

async function loadCDNFallback() {
  return new Promise((resolve, reject) => {
    // Load CDN CSS if local CSS failed
    if (!document.querySelector('link[href*="atomic.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://static.cloud.coveo.com/atomic/v3/atomic.css';
      document.head.appendChild(link);
    }
    
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://static.cloud.coveo.com/atomic/v3/atomic.esm.js';
    
    const timeout = setTimeout(() => {
      reject(new Error('CDN fallback timeout'));
    }, 15000);
    
    script.onload = () => {
      clearTimeout(timeout);
      setTimeout(() => {
        if (window.customElements && window.customElements.get('atomic-search-interface')) {
          resolve();
        } else {
          reject(new Error('CDN components not registered'));
        }
      }, 2000);
    };
    
    script.onerror = () => {
      clearTimeout(timeout);
      reject(new Error('CDN fallback failed'));
    };
    
    document.head.appendChild(script);
  });
}

async function waitForComponents() {
  const components = ['atomic-search-interface'];
  const maxWait = 10000;
  const startTime = Date.now();

  for (const component of components) {
    while (!window.customElements || !window.customElements.get(component)) {
      if (Date.now() - startTime > maxWait) {
        throw new Error('Component not available: ' + component);
      }
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    console.log('✅ Component verified: ' + component);
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
  const status = {
    loaded: coveoLoaded,
    customElementsAvailable: !!window.customElements,
    searchInterface: window.customElements ? !!window.customElements.get('atomic-search-interface') : false
  };
  console.log('🐛 Coveo Status:', status);
  return status;
}
`;

  const loaderPath = path.resolve(projectRoot, 'scripts/coveo-loader.js');
  ensureDir(path.dirname(loaderPath));
  fs.writeFileSync(loaderPath, loaderContent);
  console.log('✅ Created local Coveo loader with CDN fallback');
}

function buildCoveoAssets() {
  console.log('🔨 Building local Coveo assets with proper module handling...');
  console.log('');
  
  ensureDir(path.resolve(projectRoot, 'scripts'));
  
  const atomicDir = path.resolve(projectRoot, 'node_modules/@coveo/atomic');
  const headlessDir = path.resolve(projectRoot, 'node_modules/@coveo/headless');
  
  if (!fs.existsSync(atomicDir)) {
    console.error(' @coveo/atomic package not found');
    console.log(' Run: npm install @coveo/atomic');
    return;
  }
  
  let success = true;
  
  // Find and process Atomic JS
  const jsFiles = findCoveoFiles(atomicDir, 'js');
  const bestJs = selectBestFile(jsFiles, 'js');
  
  if (bestJs) {
    const destPath = path.resolve(projectRoot, 'scripts/atomic.esm.js');
    if (!createFixedAtomicFile(bestJs, destPath)) {
      success = false;
    }
  } else {
    console.error('❌ No suitable JS file found');
    success = false;
  }
  
  console.log('');
  
  // Find and copy CSS
  const cssFiles = findCoveoFiles(atomicDir, 'css');
  const bestCss = selectBestFile(cssFiles, 'css');
  
  if (bestCss) {
    const destPath = path.resolve(projectRoot, 'scripts/coveo.css');
    if (!copyFile(bestCss, destPath, 'CSS')) {
      success = false;
    }
  } else {
    console.error('❌ No suitable CSS file found');
    success = false;
  }
  
  console.log('');
  
  // Create loader (with fallback)
  createLocalCoveoLoader();
  
  console.log('');
  if (success) {
    console.log('✅ Local Coveo build completed successfully!');
    console.log('🎉 Fixed module loading issues with local files');
    console.log('🔄 Includes CDN fallback if local files fail');
  } else {
    console.log('⚠️  Build completed with issues');
    console.log('🔄 CDN fallback will be used if needed');
  }
}

buildCoveoAssets();