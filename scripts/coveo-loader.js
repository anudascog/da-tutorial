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
      
      // Load JavaScript - use the most reliable method
      await loadCoveoJS();
      
      // Wait for components
      await waitForEssentialComponents();
      
      coveoLoaded = true;
      console.log('✅ Coveo loaded successfully');
      resolve(true);
      
    } catch (error) {
      console.error('❌ Failed to load Coveo:', error);
      loadingPromise = null; // Reset so we can try again
      reject(error);
    }
  });

  return loadingPromise;
}

async function loadCoveoCSS() {
  if (document.querySelector('link[href*="coveo.css"]')) {
    console.log('✅ Coveo CSS already loaded');
    return;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/scripts/coveo.css';
  link.onload = () => console.log('✅ Coveo CSS loaded');
  link.onerror = () => console.warn('⚠️ Failed to load Coveo CSS');
  document.head.appendChild(link);
}

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
      reject(new Error('Failed to load local atomic script'));
    };
    
    document.head.appendChild(script);
  });
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
    console.log(`✅ Component available: ${component}`);
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

export function debugCoveoStatus() {
  const components = [
    'atomic-search-interface',
    'atomic-search-box', 
    'atomic-result-list',
    'atomic-search-layout'
  ];
  
  const status = {
    loaded: coveoLoaded,
    customElementsAvailable: !!window.customElements,
    components: []
  };
  
  if (window.customElements) {
    status.components = components.map(name => ({
      name,
      available: !!window.customElements.get(name)
    }));
  }
  
  console.log('🐛 Coveo Status:', status);
  return status;
}