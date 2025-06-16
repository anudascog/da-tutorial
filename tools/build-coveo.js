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

function copyFile(src, dest, description) {
  try {
    const destPath = path.resolve(projectRoot, dest);
    ensureDir(path.dirname(destPath));
    fs.copyFileSync(src, destPath);
    
    const size = fs.statSync(src).size;
    console.log(`✅ Copied ${description}: ${path.basename(src)} (${Math.round(size/1024)}KB)`);
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
    if (depth > 5) return; // Prevent infinite recursion
    
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

function readPackageJson(packagePath) {
  const packageJsonPath = path.join(packagePath, 'package.json');
  if (!fs.existsSync(packageJsonPath)) return null;
  
  try {
    return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  } catch (error) {
    return null;
  }
}

function findBestFile(packageDir, packageName, fileType) {
  console.log(`🔍 Auto-discovering ${fileType} for ${packageName}...`);
  
  const packageJson = readPackageJson(packageDir);
  
  if (packageJson) {
    console.log(`   Package version: ${packageJson.version}`);
    console.log(`   Main: ${packageJson.main || 'not specified'}`);
    console.log(`   Module: ${packageJson.module || 'not specified'}`);
    console.log(`   Browser: ${JSON.stringify(packageJson.browser) || 'not specified'}`);
  }
  
  if (fileType === 'js') {
    // Find JavaScript files
    const jsFiles = findAllFiles(packageDir, '.js', 50000); // Min 50KB
    
    console.log(`   Found ${jsFiles.length} JS files:`);
    jsFiles.slice(0, 5).forEach(file => {
      console.log(`     - ${file.relativePath} (${Math.round(file.size/1024)}KB)`);
    });
    
    // Prioritize files based on naming and size
    const priorities = [
      file => file.name.includes('esm') && file.size > 500000, // ESM files > 500KB
      file => file.name.includes('atomic') && file.size > 300000, // Atomic files > 300KB
      file => file.name.includes('headless') && file.size > 300000, // Headless files > 300KB
      file => file.name.includes('index') && file.size > 200000, // Index files > 200KB
      file => file.size > 100000 // Any large file > 100KB
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
    // Find CSS files
    const cssFiles = findAllFiles(packageDir, '.css', 100); // Min 10KB
    
    console.log(`   Found ${cssFiles.length} CSS files:`);
    cssFiles.forEach(file => {
      console.log(`     - ${file.relativePath} (${Math.round(file.size/1024)}KB)`);
    });
    
    // Prioritize CSS files
    const cssMatch = cssFiles.find(file => 
      file.name.includes('atomic') || 
      file.name.includes('coveo') ||
      file.size > 50000 // > 50KB
    );
    
    if (cssMatch) {
      console.log(`   ✅ Selected: ${cssMatch.relativePath} (${Math.round(cssMatch.size/1024)}KB)`);
      return cssMatch.path;
    }
    
    // Fallback to largest CSS
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
  const loaderContent = `// Coveo Loader for AEM Block Collection (Auto-Generated)
let coveoLoaded = false;
let loadingPromise = null;

export async function loadCoveo() {
  if (coveoLoaded) return true;
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      // Load CSS
      if (!document.querySelector('link[href*="coveo.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/scripts/coveo.css';
        document.head.appendChild(link);
      }

      // Load Atomic
      if (!window.customElements.get('atomic-search-interface')) {
        await import('./atomic.esm.js');
        console.log('✅ Coveo Atomic loaded (auto-discovered)');
      }

      coveoLoaded = true;
      resolve(true);
    } catch (error) {
      console.error('❌ Failed to load Coveo:', error);
      reject(error);
    }
  });

  return loadingPromise;
}

export function isCoveoLoaded() {
  return coveoLoaded;
}
`;

  const loaderPath = path.resolve(projectRoot, 'scripts/coveo-loader.js');
  ensureDir(path.dirname(loaderPath));
  fs.writeFileSync(loaderPath, loaderContent);
  console.log('✅ Created Coveo loader');
}

function buildCoveoAssets() {
  console.log('🔨 Building Coveo assets (Auto-Discovery Mode)...\n');
  
  ensureDir(path.resolve(projectRoot, 'scripts'));
  
  const atomicDir = path.resolve(projectRoot, 'node_modules/@coveo/atomic');
  const headlessDir = path.resolve(projectRoot, 'node_modules/@coveo/headless');
  
  if (!fs.existsSync(atomicDir)) {
    console.error('❌ @coveo/atomic package not found');
    console.log('💡 Run: npm install @coveo/atomic');
    return;
  }
  
  if (!fs.existsSync(headlessDir)) {
    console.error('❌ @coveo/headless package not found');
    console.log('💡 Run: npm install @coveo/headless');
    return;
  }
  
  let allCopied = true;
  
  // Find Atomic JS file
  const atomicJs = findBestFile(atomicDir, '@coveo/atomic', 'js');
  if (atomicJs) {
    if (!copyFile(atomicJs, 'scripts/atomic.esm.js', 'Atomic JS')) {
      allCopied = false;
    }
  } else {
    allCopied = false;
  }
  
  console.log(''); // Spacing
  
  // Find Atomic CSS file
  const atomicCss = findBestFile(atomicDir, '@coveo/atomic', 'css');
  if (atomicCss) {
    if (!copyFile(atomicCss, 'scripts/coveo.css', 'Atomic CSS')) {
      allCopied = false;
    }
  } else {
    allCopied = false;
  }
  
  console.log(''); // Spacing
  
  // Find Headless JS file
  const headlessJs = findBestFile(headlessDir, '@coveo/headless', 'js');
  if (headlessJs) {
    if (!copyFile(headlessJs, 'scripts/headless.esm.js', 'Headless JS')) {
      allCopied = false;
    }
  } else {
    allCopied = false;
  }
  
  console.log(''); // Spacing
  
  if (allCopied) {
    createCoveoLoader();
    console.log('\n✅ Coveo build completed successfully!');
    console.log('🎉 All files auto-discovered and copied!');
  } else {
    console.error('\n❌ Some files could not be found or copied.');
    console.log('\n🔍 Debug information:');
    console.log(`Atomic directory: ${atomicDir}`);
    console.log(`Headless directory: ${headlessDir}`);
    console.log('\n💡 Try running: node tools/find-coveo-files.js for detailed file analysis');
    process.exit(1);
  }
}

buildCoveoAssets();