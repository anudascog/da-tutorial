console.log('🔍 Testing Coveo download script on Windows...');
console.log('Current directory:', process.cwd());
console.log('Operating System:', process.platform);
console.log('Node.js version:', process.version);

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Windows-friendly path
const LIBS_DIR = path.join(__dirname, '..', 'libs', 'coveo');
console.log('Target directory:', LIBS_DIR);
console.log('Resolved path:', path.resolve(LIBS_DIR));

try {
  console.log('📁 Checking if directory exists...');
  
  if (!fs.existsSync(LIBS_DIR)) {
    console.log('📁 Creating libs directory...');
    fs.mkdirSync(LIBS_DIR, { recursive: true });
    console.log('✓ Directory created successfully');
  } else {
    console.log('📁 Directory already exists');
  }
  
  // Test file creation
  const testFile = path.join(LIBS_DIR, 'test.txt');
  fs.writeFileSync(testFile, 'Test file created on Windows');
  console.log('✓ Test file created:', testFile);
  
  // Verify file exists
  if (fs.existsSync(testFile)) {
    console.log('✓ File verification successful');
    fs.unlinkSync(testFile); // Clean up
    console.log('✓ Test file cleaned up');
  }
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error('Error code:', error.code);
  console.error('Error path:', error.path);
}

console.log('🎉 Windows test completed');