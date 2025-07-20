<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// scripts/coveo-loader.js - Enhanced version with better component detection
=======
// Comprehensive Local Coveo Loader
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
=======
// Local Coveo Loader with Fallback
>>>>>>> parent of 187890f (all the atomic files in localrepo)
=======
// Coveo Loader for AEM Block Collection
>>>>>>> parent of de298b2 (updated the error handling)
let coveoLoaded = false;
let loadingPromise = null;

export async function loadCoveo() {
  if (coveoLoaded) return true;
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      console.log('🔍 Loading comprehensive local Coveo...');
=======
      console.log('🔍 Loading local Coveo components...');
>>>>>>> parent of 187890f (all the atomic files in localrepo)
=======
      console.log('🔍 Loading Coveo components...');
>>>>>>> parent of de298b2 (updated the error handling)
      
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
<<<<<<< HEAD
<<<<<<< HEAD
      console.error('❌ Comprehensive loading failed:', error);
      loadingPromise = null;
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
      reject(error);
=======
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
>>>>>>> parent of 187890f (all the atomic files in localrepo)
=======
      console.error('❌ Failed to load Coveo:', error);
      loadingPromise = null;
      reject(error);
>>>>>>> parent of de298b2 (updated the error handling)
    }
  });

  return loadingPromise;
}

async function loadCoveoCSS() {
<<<<<<< HEAD
  if (!document.querySelector('link[href*="coveo.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/scripts/coveo.css';
    document.head.appendChild(link);
    console.log('✅ Coveo CSS loaded');
=======
  if (document.querySelector('link[href*="coveo.css"]')) {
    return;
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/scripts/coveo.css';
  document.head.appendChild(link);
  console.log('✅ Coveo CSS loaded');
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
async function loadAtomicScript() {
=======
async function loadFixedAtomic() {
>>>>>>> parent of 187890f (all the atomic files in localrepo)
=======
async function loadCoveoJS() {
>>>>>>> parent of de298b2 (updated the error handling)
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
<<<<<<< HEAD
      reject(new Error('Failed to load atomic entry script'));
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
=======
      reject(new Error('Failed to load local atomic script'));
>>>>>>> parent of 187890f (all the atomic files in localrepo)
    };
    
    document.head.appendChild(script);
  });
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
=======
async function loadCDNFallback() {
  return new Promise((resolve, reject) => {
    // Load CDN CSS if local CSS failed
    if (!document.querySelector('link[href*="atomic.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://static.cloud.coveo.com/atomic/v3/atomic.css';
      document.head.appendChild(link);
>>>>>>> parent of 187890f (all the atomic files in localrepo)
    }
    
=======
function loadCDNAtomic() {
  return new Promise((resolve, reject) => {
>>>>>>> parent of de298b2 (updated the error handling)
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
        throw new Error(`Component not available: ${component}`);
      }
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }
<<<<<<< HEAD
  
  console.log('✅ All components verified!');
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
=======
>>>>>>> parent of 187890f (all the atomic files in localrepo)
}

export function isCoveoLoaded() {
  return coveoLoaded;
}

export function resetCoveoLoader() {
  coveoLoaded = false;
  loadingPromise = null;
<<<<<<< HEAD
  console.log('🔄 Coveo loader reset');
=======
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
}

// Debug function to check component status
export function debugCoveoStatus() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  const components = ['atomic-search-interface', 'atomic-search-box', 'atomic-result-list'];
=======
>>>>>>> parent of 187890f (all the atomic files in localrepo)
=======
  const components = ['atomic-search-interface', 'atomic-search-box', 'atomic-result-list'];
>>>>>>> parent of de298b2 (updated the error handling)
  const status = {
    loaded: coveoLoaded,
    customElementsAvailable: !!window.customElements,
    components: window.customElements ? 
      components.map(name => ({ name, available: !!window.customElements.get(name) })) : []
  };
  console.log('🐛 Coveo Status:', status);
  return status;
}
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
