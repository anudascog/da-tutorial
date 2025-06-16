// Robust Coveo Loader - Handles ALL files and syntax fixes
let coveoLoaded = false;
let loadingPromise = null;

export async function loadCoveo() {
  if (coveoLoaded) return true;
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      console.log('🚀 Loading robust Coveo bundle (all files + syntax fixes)...');
      
      // Load ALL CSS files
      await loadAllCSSFiles();
      
      // Load comprehensive JS bundle with syntax fixes
      await loadFixedAtomicBundle();
      
      // Wait for components with comprehensive checking
      await waitForComponentsRobustly();
      
      coveoLoaded = true;
      console.log('🎉 Robust Coveo bundle loaded successfully!');
      resolve(true);
      
    } catch (error) {
      console.error('💥 Coveo bundle loading failed:', error);
      loadingPromise = null;
      reject(error);
    }
  });

  return loadingPromise;
}

async function loadAllCSSFiles() {
  console.log('🎨 Loading ALL CSS files...');
  
  const cssFiles = [
    '/scripts/coveo.css',  // Main bundle
    '/scripts/coveo-atomic.css',  // Individual files
    '/scripts/coveo-themes.css'
  ];
  
  for (const cssFile of cssFiles) {
    try {
      if (document.querySelector('link[href="' + cssFile + '"]')) {
        console.log('✅ CSS already loaded: ' + cssFile);
        continue;
      }
      
      await new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssFile;
        
        link.onload = () => {
          console.log('✅ CSS loaded: ' + cssFile);
          resolve();
        };
        
        link.onerror = () => {
          console.warn('⚠️ CSS not found: ' + cssFile);
          resolve(); // Continue even if some CSS files missing
        };
        
        document.head.appendChild(link);
      });
      
    } catch (error) {
      console.warn('⚠️ CSS loading error:', cssFile, error.message);
    }
  }
}

async function loadFixedAtomicBundle() {
  const maxRetries = 3;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log('🔄 Loading fixed atomic bundle (attempt ' + attempt + ')...');
      await loadAtomicScript();
      console.log('✅ Fixed atomic bundle loaded successfully');
      return;
    } catch (error) {
      console.warn('⚠️ Attempt ' + attempt + ' failed:', error.message);
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 3000));
      } else {
        throw error;
      }
    }
  }
}

function loadAtomicScript() {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.CoveoAtomic || (window.customElements && window.customElements.get('atomic-search-interface'))) {
      console.log('✅ Bundle already loaded');
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.src = '/scripts/atomic.esm.js?v=' + Date.now();
    script.async = false;
    script.defer = false;
    
    const timeout = setTimeout(() => {
      reject(new Error('Fixed bundle loading timeout (60s)'));
    }, 60000); // Extended timeout for comprehensive bundle
    
    script.onload = () => {
      clearTimeout(timeout);
      console.log('📦 Fixed bundle loaded, checking initialization...');
      
      // Give time for bundle to initialize
      setTimeout(() => {
        console.log('🔧 Bundle initialization complete');
        resolve();
      }, 2000);
    };
    
    script.onerror = () => {
      clearTimeout(timeout);
      reject(new Error('Fixed bundle failed to load'));
    };
    
    document.head.appendChild(script);
  });
}

async function waitForComponentsRobustly() {
  console.log('⏳ Waiting robustly for all components...');
  
  const maxWait = 60000; // 60 seconds for comprehensive bundle
  const checkInterval = 1000;
  const startTime = Date.now();
  
  if (!window.customElements) {
    throw new Error('CustomElements API not available');
  }
  
  const allComponents = [
    'atomic-search-interface', 'atomic-search-box', 'atomic-result-list',
    'atomic-search-layout', 'atomic-facet', 'atomic-query-summary',
    'atomic-pager', 'atomic-sort-dropdown', 'atomic-breadbox',
    'atomic-facet-manager', 'atomic-query-error', 'atomic-no-results'
  ];
  
  let lastProgressTime = 0;
  
  while (true) {
    const elapsed = Date.now() - startTime;
    
    // Check component availability
    const componentStatus = allComponents.map(comp => ({
      name: comp,
      available: !!window.customElements.get(comp)
    }));
    
    const availableCount = componentStatus.filter(comp => comp.available).length;
    const essentialComponents = componentStatus.slice(0, 3); // First 3 are essential
    const essentialReady = essentialComponents.every(comp => comp.available);
    
    if (essentialReady) {
      console.log('✅ Essential components ready! (' + availableCount + '/' + allComponents.length + ' total)');
      
      // Log all component status
      componentStatus.forEach(comp => {
        console.log('🧩 ' + comp.name + ': ' + (comp.available ? '✅' : '❌'));
      });
      
      return;
    }
    
    // Timeout check
    if (elapsed > maxWait) {
      console.error('💥 Component loading timeout after 60s');
      console.error('🐛 Final component status:');
      componentStatus.forEach(comp => {
        console.error('   ' + comp.name + ': ' + (comp.available ? '✅' : '❌'));
      });
      throw new Error('Essential components not ready after 60 seconds');
    }
    
    // Progress logging every 10 seconds
    if (elapsed - lastProgressTime > 10000) {
      console.log('⏳ Component loading progress: ' + availableCount + '/' + allComponents.length + ' (' + Math.round(elapsed/1000) + 's)');
      lastProgressTime = elapsed;
    }
    
    await new Promise(resolve => setTimeout(resolve, checkInterval));
  }
}

export function isCoveoLoaded() {
  return coveoLoaded;
}

export function resetCoveoLoader() {
  coveoLoaded = false;
  loadingPromise = null;
  console.log('🔄 Robust loader reset');
}

export function debugCoveoStatus() {
  const allComponents = [
    'atomic-search-interface', 'atomic-search-box', 'atomic-result-list',
    'atomic-search-layout', 'atomic-facet', 'atomic-query-summary',
    'atomic-pager', 'atomic-sort-dropdown', 'atomic-breadbox'
  ];
  
  const status = {
    loaded: coveoLoaded,
    customElementsAvailable: !!window.customElements,
    coveoNamespace: !!window.CoveoAtomic,
    timestamp: new Date().toISOString(),
    components: [],
    bundle: null
  };
  
  if (window.customElements) {
    status.components = allComponents.map(name => ({
      name: name,
      available: !!window.customElements.get(name)
    }));
  }
  
  if (window.debugCoveoBundle) {
    status.bundle = window.debugCoveoBundle();
  }
  
  console.log('🐛 Robust Coveo Status:', status);
  return status;
}

// Global debug access
if (typeof window !== 'undefined') {
  window.debugCoveo = debugCoveoStatus;
  window.resetCoveo = resetCoveoLoader;
}
