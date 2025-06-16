// scripts/coveo-loader.js - Enhanced version with better component detection
let coveoLoaded = false;
let loadingPromise = null;

export async function loadCoveo() {
  if (coveoLoaded) return true;
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      console.log('🔍 Starting Coveo loading process...');
      
      // Load CSS first
      await loadCoveoCSS();
      
      // Load JavaScript components
      await loadCoveoComponents();
      
      // Verify components are available
      await verifyComponents();
      
      coveoLoaded = true;
      console.log('✅ Coveo loading completed successfully');
      resolve(true);
      
    } catch (error) {
      console.error('❌ Failed to load Coveo:', error);
      reject(error);
    }
  });

  return loadingPromise;
}

async function loadCoveoCSS() {
  if (!document.querySelector('link[href*="coveo.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/scripts/coveo.css';
    document.head.appendChild(link);
    console.log('✅ Coveo CSS loaded');
  }
}

async function loadCoveoComponents() {
  console.log('📦 Loading Coveo components...');
  
  // Method 1: Try direct script loading (most compatible)
  try {
    await loadViaScriptTag();
    console.log('✅ Coveo loaded via script tag');
    return;
  } catch (error) {
    console.warn('⚠️ Script tag method failed:', error.message);
  }
  
  // Method 2: Try ES module import with global setup
  try {
    await loadViaESModule();
    console.log('✅ Coveo loaded via ES module');
    return;
  } catch (error) {
    console.warn('⚠️ ES module method failed:', error.message);
  }
  
  // Method 3: Try CDN fallback
  try {
    await loadViaCDN();
    console.log('✅ Coveo loaded via CDN fallback');
    return;
  } catch (error) {
    console.warn('⚠️ CDN fallback failed:', error.message);
  }
  
  throw new Error('All loading methods failed');
}

function loadViaScriptTag() {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.customElements && window.customElements.get('atomic-search-interface')) {
      resolve();
      return;
    }
    
    // Remove any existing script to avoid conflicts
    const existingScript = document.querySelector('script[src*="atomic.esm.js"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/scripts/atomic.esm.js';
    
    script.onload = () => {
      console.log('📦 Atomic script loaded');
      // Give time for components to register
      setTimeout(() => {
        if (window.customElements && window.customElements.get('atomic-search-interface')) {
          resolve();
        } else {
          reject(new Error('Components not registered after script load'));
        }
      }, 1000);
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load atomic script'));
    };
    
    document.head.appendChild(script);
  });
}

async function loadViaESModule() {
  // Set up global environment for CommonJS compatibility
  if (!window.exports) window.exports = {};
  if (!window.module) window.module = { exports: window.exports };
  if (!window.require) {
    window.require = (id) => {
      throw new Error(`Module ${id} not found`);
    };
  }
  
  // Dynamic import
  await import('./atomic.esm.js');
  
  // Wait for registration
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  if (!window.customElements || !window.customElements.get('atomic-search-interface')) {
    throw new Error('Components not available after ES module import');
  }
}

function loadViaCDN() {
  return new Promise((resolve, reject) => {
    console.log('🌐 Attempting CDN fallback...');
    
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://static.cloud.coveo.com/atomic/v3/atomic.esm.js';
    
    script.onload = () => {
      console.log('📦 CDN Atomic script loaded');
      setTimeout(() => {
        if (window.customElements && window.customElements.get('atomic-search-interface')) {
          resolve();
        } else {
          reject(new Error('CDN components not registered'));
        }
      }, 2000);
    };
    
    script.onerror = () => {
      reject(new Error('CDN loading failed'));
    };
    
    document.head.appendChild(script);
  });
}

async function verifyComponents() {
  console.log('🔍 Verifying Coveo components...');
  
  const requiredComponents = [
    'atomic-search-interface',
    'atomic-search-box',
    'atomic-result-list',
    'atomic-search-layout'
  ];

  const maxWaitTime = 15000; // 15 seconds
  const startTime = Date.now();
  const checkInterval = 200; // Check every 200ms

  for (const componentName of requiredComponents) {
    console.log(`⏳ Waiting for ${componentName}...`);
    
    while (!window.customElements || !window.customElements.get(componentName)) {
      if (Date.now() - startTime > maxWaitTime) {
        // List what components ARE available for debugging
        console.error('🔍 Available custom elements:');
        if (window.customElements) {
          // Try to enumerate available elements (this is tricky but let's try)
          console.log('CustomElements registry exists');
          
          // Check common Coveo elements that might be loaded
          const commonElements = [
            'atomic-search-interface', 'atomic-search-box', 'atomic-result-list',
            'atomic-facet', 'atomic-layout-section', 'atomic-search-layout'
          ];
          
          const available = commonElements.filter(el => window.customElements.get(el));
          console.log('Available elements:', available);
        }
        
        throw new Error(`Timeout waiting for component: ${componentName}. Available components: ${window.customElements ? 'registry exists' : 'no registry'}`);
      }
      
      await new Promise(resolve => setTimeout(resolve, checkInterval));
    }
    
    console.log(`✅ Component available: ${componentName}`);
  }
  
  console.log('✅ All required components verified');
}

export function isCoveoLoaded() {
  return coveoLoaded;
}

export function resetCoveoLoader() {
  coveoLoaded = false;
  loadingPromise = null;
  console.log('🔄 Coveo loader reset');
}

// Debug function to check component status
export function debugCoveoStatus() {
  console.log('🐛 Coveo Debug Status:');
  console.log('- Loaded:', coveoLoaded);
  console.log('- CustomElements available:', !!window.customElements);
  
  if (window.customElements) {
    const components = [
      'atomic-search-interface', 'atomic-search-box', 'atomic-result-list',
      'atomic-facet', 'atomic-layout-section', 'atomic-search-layout'
    ];
    
    components.forEach(comp => {
      console.log(`- ${comp}:`, !!window.customElements.get(comp));
    });
  }
  
  return {
    loaded: coveoLoaded,
    customElementsAvailable: !!window.customElements,
    components: window.customElements ? 
      ['atomic-search-interface', 'atomic-search-box'].map(c => ({ 
        name: c, 
        available: !!window.customElements.get(c) 
      })) : []
  };
}