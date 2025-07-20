// scripts/coveo-loader.js - Simplified and more reliable version
let coveoLoaded = false;
let loadingPromise = null;

export async function loadCoveo() {
  if (coveoLoaded) return true;
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      console.log('🔍 Loading Coveo components...');
      
      // Load CSS
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

      
      // Load CSS
      await loadCoveoCSS();
      
      // Load JavaScript - use the most reliable method
      await loadCoveoJS();
      
      // Wait for components
      await waitForEssentialComponents();
      
      coveoLoaded = true;
      console.log('✅ Coveo loaded successfully');
      resolve(true);
    
      console.error('❌ Error occurred:', error);
      loadingPromise = null;
      reject(error);
    

      console.error('❌ Comprehensive loading failed:', error);
      loadingPromise = null;
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
      reject(error);

      console.error('❌ Failed to load Coveo:', error);
      loadingPromise = null; // Reset so we can try again
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

  if (document.querySelector('link[href*="coveo.css"]')) {
    console.log('✅ Coveo CSS already loaded');
    return;

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

async function loadCoveoJS() {
  // Check if already loaded
  if (window.customElements && window.customElements.get('atomic-search-interface')) {
    console.log('✅ Coveo components already available');
    return;
  }

  // Try local file first
  try {
    await loadLocalAtomic();
    console.log('✅ Loaded local Coveo atomic');
    return;
  } catch (error) {
    console.warn('⚠️ Local atomic failed, trying CDN fallback:', error.message);
  }

  // Fallback to CDN
  try {
    await loadCDNAtomic();
    console.log('✅ Loaded CDN Coveo atomic');
  } catch (error) {
    console.error('❌ Both local and CDN loading failed');
    throw error;
  }
}

function loadLocalAtomic() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/scripts/atomic.esm.js';
    
    const timeout = setTimeout(() => {
      reject(new Error('Local atomic loading timeout'));
    }, 10000); // 10 second timeout
    
    script.onload = () => {
      clearTimeout(timeout);
      // Give components time to register
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

      reject(new Error('Failed to load atomic entry script'));


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
    console.log(`⏳ Checking for ${component}...`);
    
    while (!window.customElements.get(component)) {
      if (Date.now() - startTime > maxWaitTotal) {
        throw new Error(`Component not available after ${maxWaitTotal}ms: ${component}`);
      }
      await new Promise(resolve => setTimeout(resolve, 500));

async function loadCDNFallback() {
  return new Promise((resolve, reject) => {
    // Load CDN CSS if local CSS failed
    if (!document.querySelector('link[href*="atomic.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://static.cloud.coveo.com/atomic/v3/atomic.css';
      document.head.appendChild(link);

    }

function loadCDNAtomic() {
  return new Promise((resolve, reject) => {

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://static.cloud.coveo.com/atomic/v3/atomic.esm.js';
    
    const timeout = setTimeout(() => {
      reject(new Error('CDN atomic loading timeout'));
    }, 15000); // 15 second timeout for CDN
    
    script.onload = () => {
      clearTimeout(timeout);
      // Give components time to register
      setTimeout(() => {
        if (window.customElements && window.customElements.get('atomic-search-interface')) {
          resolve();
        } else {
          reject(new Error('Components not registered after CDN load'));
        }
      }, 3000);
    };
    
    script.onerror = () => {
      clearTimeout(timeout);
      reject(new Error('Failed to load CDN atomic script'));
    };
    
    document.head.appendChild(script);
  });
}

async function waitForEssentialComponents() {
  const essentialComponents = [
    'atomic-search-interface',
    'atomic-search-layout',
    'atomic-search-box',
    'atomic-result-list'
  ];

  const maxWait = 10000; // 10 seconds
  const startTime = Date.now();

  for (const component of essentialComponents) {
    while (!window.customElements || !window.customElements.get(component)) {
      if (Date.now() - startTime > maxWait) {
        throw new Error(`Essential component not available: ${component}`);
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
}

export function isCoveoLoaded() {
  return coveoLoaded;
}

export function resetCoveoLoader() {
  coveoLoaded = false;
  loadingPromise = null;
  console.log('🔄 Coveo loader reset');
}


