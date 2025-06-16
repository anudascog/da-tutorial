// tools/find-coveo-files.js (ES Module version)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

function findFiles(dir, filename, results = []) {
  if (!fs.existsSync(dir)) return results;
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        findFiles(fullPath, filename, results);
      } else if (file === filename) {
        results.push(fullPath);
      }
    }
  } catch (error) {
    // Skip directories we can't read
  }
  
  return results;
}

function checkCoveoInstallation() {
  console.log('🔍 Checking Coveo installation...\n');
  
  // Check if packages exist
  const atomicDir = path.join(projectRoot, 'node_modules/@coveo/atomic');
  const headlessDir = path.join(projectRoot, 'node_modules/@coveo/headless');
  
  console.log('📁 Package directories:');
  console.log(`Atomic: ${fs.existsSync(atomicDir) ? '✅ EXISTS' : '❌ MISSING'} - ${atomicDir}`);
  console.log(`Headless: ${fs.existsSync(headlessDir) ? '✅ EXISTS' : '❌ MISSING'} - ${headlessDir}`);
  console.log('');
  
  if (fs.existsSync(atomicDir)) {
    console.log('📁 Contents of @coveo/atomic:');
    try {
      fs.readdirSync(atomicDir).forEach(item => {
        const itemPath = path.join(atomicDir, item);
        const isDir = fs.statSync(itemPath).isDirectory();
        console.log(`  ${isDir ? '📁' : '📄'} ${item}`);
      });
    } catch (error) {
      console.log(`  ❌ Could not read directory: ${error.message}`);
    }
    console.log('');
  }
  
  if (fs.existsSync(headlessDir)) {
    console.log('📁 Contents of @coveo/headless:');
    try {
      fs.readdirSync(headlessDir).forEach(item => {
        const itemPath = path.join(headlessDir, item);
        const isDir = fs.statSync(itemPath).isDirectory();
        console.log(`  ${isDir ? '📁' : '📄'} ${item}`);
      });
    } catch (error) {
      console.log(`  ❌ Could not read directory: ${error.message}`);
    }
    console.log('');
  }
  
  // Search for the specific files we need
  console.log('🔍 Searching for required files...\n');
  
  const searchFiles = [
    { name: 'atomic.esm.js', desc: 'Atomic ESM bundle' },
    { name: 'atomic.css', desc: 'Atomic CSS' },
    { name: 'headless.esm.js', desc: 'Headless ESM bundle' },
    { name: 'index.js', desc: 'Index files' },
    { name: 'atomic.js', desc: 'Atomic JS files' },
    { name: 'headless.js', desc: 'Headless JS files' }
  ];
  
  searchFiles.forEach(({ name, desc }) => {
    console.log(`Looking for ${desc} (${name}):`);
    const found = findFiles(path.join(projectRoot, 'node_modules/@coveo'), name);
    
    if (found.length > 0) {
      found.forEach(filePath => {
        const relativePath = path.relative(projectRoot, filePath);
        try {
          const size = fs.statSync(filePath).size;
          console.log(`  ✅ FOUND: ${relativePath} (${Math.round(size/1024)}KB)`);
        } catch (error) {
          console.log(`  ✅ FOUND: ${relativePath} (size unknown)`);
        }
      });
    } else {
      console.log(`  ❌ NOT FOUND`);
    }
    console.log('');
  });
  
  // Check package.json files to understand the structure
  console.log('📄 Package.json information:\n');
  
  [
    { dir: atomicDir, name: '@coveo/atomic' },
    { dir: headlessDir, name: '@coveo/headless' }
  ].forEach(({ dir, name }) => {
    const packageJsonPath = path.join(dir, 'package.json');
    
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        console.log(`${name}:`);
        console.log(`  Version: ${packageJson.version || 'unknown'}`);
        console.log(`  Main: ${packageJson.main || 'not specified'}`);
        console.log(`  Module: ${packageJson.module || 'not specified'}`);
        console.log(`  Browser: ${JSON.stringify(packageJson.browser) || 'not specified'}`);
        console.log(`  Exports: ${JSON.stringify(packageJson.exports) || 'not specified'}`);
        console.log('');
      } catch (error) {
        console.log(`${name}: Could not read package.json - ${error.message}`);
        console.log('');
      }
    } else {
      console.log(`${name}: package.json not found`);
      console.log('');
    }
  });
  
  // Additional file tree for better understanding
  console.log('🌳 Directory tree structure:\n');
  
  function showDirectoryTree(dir, prefix = '', maxDepth = 3, currentDepth = 0) {
    if (!fs.existsSync(dir) || currentDepth >= maxDepth) return;
    
    try {
      const items = fs.readdirSync(dir);
      items.forEach((item, index) => {
        const itemPath = path.join(dir, item);
        const isLast = index === items.length - 1;
        const connector = isLast ? '└── ' : '├── ';
        
        try {
          const isDir = fs.statSync(itemPath).isDirectory();
          console.log(`${prefix}${connector}${item}${isDir ? '/' : ''}`);
          
          if (isDir && currentDepth < maxDepth - 1) {
            const newPrefix = prefix + (isLast ? '    ' : '│   ');
            showDirectoryTree(itemPath, newPrefix, maxDepth, currentDepth + 1);
          }
        } catch (error) {
          console.log(`${prefix}${connector}${item} (access denied)`);
        }
      });
    } catch (error) {
      console.log(`${prefix}├── (could not read directory)`);
    }
  }
  
  if (fs.existsSync(path.join(projectRoot, 'node_modules/@coveo'))) {
    showDirectoryTree(path.join(projectRoot, 'node_modules/@coveo'));
  } else {
    console.log('❌ @coveo directory not found');
  }
}

checkCoveoInstallation();