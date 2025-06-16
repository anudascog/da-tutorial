// Comprehensive Local Coveo Loader
let coveoLoaded = false;
let loadingPromise = null;

export async function loadCoveo() {
  if (coveoLoaded) return true;
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      console.log('🔍 Loading comprehensive local Coveo...');
      
      // Load CSS
      await loadCoveoCSS();
      
      // Load main atomic script
      await loadAtomicScript();
      
      // Wait for components with longer timeout
      await waitForComponentsComprehensive();
      
      coveoLoaded = true;
      console.log('✅ Comprehensive local Coveo loaded!');
      resolve(true);
      
    } catch (error) {
      console.error('❌ Comprehensive loading failed:', error);
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

async function loadAtomicScript() {
  if (window.customElements && window.customElements.get('atomic-search-interface')) {
    console.log('✅ Coveo components already available');
    return;
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = '/scripts/atomic.esm.js?v=' + Date.now();
    
    // Much longer timeout since we're loading all files
    const timeout = setTimeout(() => {
      reject(new Error('Comprehensive script loading timeout'));
    }, 30000); // 30 seconds
    
    script.onload = () => {
      clearTimeout(timeout);
      console.log('📦 Atomic entry script loaded');
      
      // Give extra time for all modules to load and register
      setTimeout(() => {
        resolve();
      }, 8000); // 8 seconds wait
    };
    
    script.onerror = () => {
      clearTimeout(timeout);
      reject(new Error('Failed to load atomic entry script'));
    };
    
    document.head.appendChild(script);
  });
}

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
    }
    
    console.log(`✅ Found: ${component}`);
  }
  
  console.log('✅ All components verified!');
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
  console.log('🐛 Comprehensive Coveo Status:', status);
  return status;
}
