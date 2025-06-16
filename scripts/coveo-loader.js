// Coveo Loader for AEM Block Collection (Auto-Generated)
let coveoLoaded = false;
let loadingPromise = null;

export async function loadCoveo() {
  if (coveoLoaded) return true;
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      // Load CSS
      if (!document.querySelector('link[href*="coveo.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/scripts/coveo.css';
        document.head.appendChild(link);
      }

      // Load Atomic
      if (!window.customElements.get('atomic-search-interface')) {
        await import('./atomic.esm.js');
        console.log('✅ Coveo Atomic loaded (auto-discovered)');
      }

      coveoLoaded = true;
      resolve(true);
    } catch (error) {
      console.error('❌ Failed to load Coveo:', error);
      reject(error);
    }
  });

  return loadingPromise;
}

export function isCoveoLoaded() {
  return coveoLoaded;
}
