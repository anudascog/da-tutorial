// Coveo Atomic Entry Point
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
        const cleanId = id.replace(/^..?//, '');
        
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
  script.src = '/scripts/atomic.esm.js';
  script.onload = function() {
    console.log('✅ Main Coveo script loaded:', 'atomic.esm.js');
  };
  script.onerror = function() {
    console.error('❌ Failed to load main Coveo script:', 'atomic.esm.js');
  };
  document.head.appendChild(script);
})();
