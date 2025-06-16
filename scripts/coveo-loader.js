// Local Coveo Loader with Fallback
let coveoLoaded = false;
let loadingPromise = null;

export async function loadCoveo() {
  if (coveoLoaded) return true;
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      console.log('🔍 Loading local Coveo components...');
      
      // Load CSS
      await loadCoveoCSS();
      
      // Load fixed JavaScript
      await loadFixedAtomic();
      
      // Wait for components
      await waitForComponents();
      
      coveoLoaded = true;
      console.log('✅ Local Coveo loaded successfully');
      resolve(true);
      
    } catch (error) {
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
  console.log('✅ Local Coveo CSS loaded');
}

async function loadFixedAtomic() {
  if (window.customElements && window.customElements.get('atomic-search-interface')) {
    console.log('✅ Coveo components already available');
    return;
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = '/scripts/atomic.esm.js?v=' + Date.now();
    
    const timeout = setTimeout(() => {
      reject(new Error('Local atomic loading timeout'));
    }, 12000);
    
    script.onload = () => {
      clearTimeout(timeout);
      setTimeout(() => {
        if (window.customElements && window.customElements.get('atomic-search-interface')) {
          resolve();
        } else {
          reject(new Error('Components not registered after local load'));
        }
      }, 3000);
    };
    
    script.onerror = () => {
      clearTimeout(timeout);
      reject(new Error('Failed to load local atomic script'));
    };
    
    document.head.appendChild(script);
  });
}

async function loadCDNFallback() {
  return new Promise((resolve, reject) => {
    // Load CDN CSS if local CSS failed
    if (!document.querySelector('link[href*="atomic.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://static.cloud.coveo.com/atomic/v3/atomic.css';
      document.head.appendChild(link);
    }
    
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://static.cloud.coveo.com/atomic/v3/atomic.esm.js';
    
    const timeout = setTimeout(() => {
      reject(new Error('CDN fallback timeout'));
    }, 15000);
    
    script.onload = () => {
      clearTimeout(timeout);
      setTimeout(() => {
        if (window.customElements && window.customElements.get('atomic-search-interface')) {
          resolve();
        } else {
          reject(new Error('CDN components not registered'));
        }
      }, 2000);
    };
    
    script.onerror = () => {
      clearTimeout(timeout);
      reject(new Error('CDN fallback failed'));
    };
    
    document.head.appendChild(script);
  });
}

async function waitForComponents() {
  const components = ['atomic-search-interface'];
  const maxWait = 10000;
  const startTime = Date.now();

  for (const component of components) {
    while (!window.customElements || !window.customElements.get(component)) {
      if (Date.now() - startTime > maxWait) {
        throw new Error('Component not available: ' + component);
      }
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    console.log('✅ Component verified: ' + component);
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
  const status = {
    loaded: coveoLoaded,
    customElementsAvailable: !!window.customElements,
    searchInterface: window.customElements ? !!window.customElements.get('atomic-search-interface') : false
  };
  console.log('🐛 Coveo Status:', status);
  return status;
}
