// scripts/coveo-loader.js - Fixed version for ES module compatibility
let coveoLoaded = false;
let loadingPromise = null;

// Define exports globally to fix CommonJS compatibility
if (typeof window !== 'undefined' && !window.exports) {
  window.exports = {};
}

export async function loadCoveo() {
  if (coveoLoaded) return true;
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      // Load CSS first
      if (!document.querySelector('link[href*="coveo.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/scripts/coveo.css';
        document.head.appendChild(link);
        console.log('✅ Coveo CSS loaded');
      }

      // Define global exports and module if they don't exist
      if (typeof window.exports === 'undefined') {
        window.exports = {};
      }
      if (typeof window.module === 'undefined') {
        window.module = { exports: window.exports };
      }

      // Load Atomic with error handling
      if (!window.customElements || !window.customElements.get('atomic-search-interface')) {
        try {
          // Try loading as ES module first
          await import('./atomic.esm.js');
          console.log('✅ Coveo Atomic loaded as ES module');
        } catch (esError) {
          console.warn('ES module loading failed, trying alternative method:', esError.message);
          
          // Alternative: Load as script tag
          await loadAtomicAsScript();
          console.log('✅ Coveo Atomic loaded as script');
        }
      }

      // Wait for components to be defined
      await waitForCoveoComponents();

      coveoLoaded = true;
      resolve(true);
    } catch (error) {
      console.error('❌ Failed to load Coveo:', error);
      reject(error);
    }
  });

  return loadingPromise;
}

function loadAtomicAsScript() {
  return new Promise((resolve, reject) => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/scripts/atomic.esm.js';
    
    script.onload = () => {
      console.log('✅ Atomic script loaded successfully');
      resolve();
    };
    
    script.onerror = (error) => {
      console.error('❌ Failed to load atomic script:', error);
      reject(new Error('Failed to load atomic script'));
    };
    
    document.head.appendChild(script);
  });
}

async function waitForCoveoComponents() {
  const requiredComponents = [
    'atomic-search-interface',
    'atomic-search-box',
    'atomic-result-list'
  ];

  const maxWaitTime = 10000; // 10 seconds
  const startTime = Date.now();

  for (const componentName of requiredComponents) {
    while (!window.customElements.get(componentName)) {
      if (Date.now() - startTime > maxWaitTime) {
        throw new Error(`Timeout waiting for component: ${componentName}`);
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    console.log(`✅ Component ready: ${componentName}`);
  }
}

export function isCoveoLoaded() {
  return coveoLoaded;
}

// Cleanup function
export function resetCoveoLoader() {
  coveoLoaded = false;
  loadingPromise = null;
}