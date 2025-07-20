// Coveo Loader for AEM Block Collection
let coveoLoaded = false;
let loadingPromise = null;

export async function loadCoveo() {
  if (coveoLoaded) return true;
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      console.log('🔍 Loading Coveo components...');
      
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
      console.error('❌ Failed to load Coveo:', error);
      loadingPromise = null;
      reject(error);
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
  console.log('✅ Coveo CSS loaded');
}

async function loadCoveoJS() {
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
}

export function isCoveoLoaded() {
  return coveoLoaded;
}

export function resetCoveoLoader() {
  coveoLoaded = false;
  loadingPromise = null;
}

export function debugCoveoStatus() {
  const components = ['atomic-search-interface', 'atomic-search-box', 'atomic-result-list'];
  const status = {
    loaded: coveoLoaded,
    customElementsAvailable: !!window.customElements,
    components: window.customElements ? 
      components.map(name => ({ name, available: !!window.customElements.get(name) })) : []
  };
  console.log('🐛 Coveo Status:', status);
  return status;
}
