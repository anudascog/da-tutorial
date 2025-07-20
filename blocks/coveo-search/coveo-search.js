// blocks/coveo-search/coveo-search.js - Fixed syntax errors
import { loadCoveo, debugCoveoStatus, resetCoveoLoader } from '../../scripts/coveo-loader.js';

export default async function decorate(block) {
  console.log('🔍 Initializing Coveo search block with enhanced debugging...');
  
  // Parse configuration first
  const config = parseConfiguration(block);
  console.log('📋 Configuration:', { ...config, accessToken: config.accessToken.substring(0, 10) + '...' });
  
  // Show loading state
  block.innerHTML = '<div class="coveo-loading">🔍 Loading search interface...</div>';

  try {
    // Debug: Show initial state
    console.log('🐛 Initial debug status:');
    debugCoveoStatus();
    
    // Load Coveo components with detailed logging
    console.log('📦 Starting Coveo loading process...');
    await loadCoveo();
    
    // Debug: Show state after loading
    console.log('🐛 Post-loading debug status:');
    debugCoveoStatus();
    
    // Create search interface with additional safety checks
    console.log('🏗️ Creating search interface...');
    await createSearchInterfaceWithChecks(block, config);
    
    console.log('✅ Coveo search block initialized successfully');
    
  } catch (error) {
    console.error('❌ Failed to initialize Coveo search:', error);
    
    // Enhanced error reporting
    console.log('🐛 Error state debug status:');
    debugCoveoStatus();
    
    showDetailedErrorState(block, error, config);
  }
}

function parseConfiguration(block) {
  const config = {
    accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
    organizationId: 'searchuisamples',
    fieldsToInclude: '["snrating", "sncost"]',
    environment: 'demo',
    debug: true
  };

  try {
    [...block.children].forEach((row) => {
      if (row.children && row.children.length >= 2) {
        const key = row.children[0]?.textContent?.trim();
        const value = row.children[1]?.textContent?.trim();
        
        if (key && value) {
          config[key] = value;
        }
      }
    });
  } catch (parseError) {
    console.warn('⚠️ Error parsing configuration, using defaults:', parseError);
  }

  return config;
}

async function createSearchInterfaceWithChecks(block, config) {
  try {
    // Pre-check: Verify components are available
    const requiredComponents = [
      'atomic-search-interface',
      'atomic-search-layout',
      'atomic-search-box'
    ];
    
    console.log('🔍 Pre-creation component check...');
    for (const comp of requiredComponents) {
      if (!window.customElements.get(comp)) {
        throw new Error('Required component not available: ' + comp);
      }
      console.log('✅ Verified: ' + comp);
    }
    
    // Create search interface element
    console.log('🏗️ Creating atomic-search-interface element...');
    const searchInterface = document.createElement('atomic-search-interface');
    
    if (config.fieldsToInclude) {
      searchInterface.setAttribute('fields-to-include', config.fieldsToInclude);
    }

    // Create simplified layout first to reduce complexity
    console.log('🏗️ Creating search layout...');
    const searchLayout = `
      <atomic-search-layout>
        <atomic-layout-section section="search">
          <atomic-search-box></atomic-search-box>
        </atomic-layout-section>
        <atomic-layout-section section="main">
          <atomic-layout-section section="status">
            <atomic-query-summary></atomic-query-summary>
            <atomic-sort-dropdown>
              <atomic-sort-expression label="relevance" expression="relevancy"></atomic-sort-expression>
              <atomic-sort-expression label="most-recent" expression="date descending"></atomic-sort-expression>
            </atomic-sort-dropdown>
          </atomic-layout-section>
          <atomic-layout-section section="results">
            <atomic-result-list>
              <atomic-result-template>
                <template>
                  <div class="result-item">
                    <atomic-result-link class="result-title"></atomic-result-link>
                    <atomic-result-text field="excerpt" class="result-excerpt"></atomic-result-text>
                    <div class="result-metadata">
                      <atomic-result-text field="author"></atomic-result-text>
                      <span> • </span>
                      <atomic-result-text field="date"></atomic-result-text>
                    </div>
                  </div>
                </template>
              </atomic-result-template>
            </atomic-result-list>
            <atomic-query-error></atomic-query-error>
            <atomic-no-results></atomic-no-results>
          </atomic-layout-section>
        </atomic-layout-section>
      </atomic-search-layout>
    `;

    searchInterface.innerHTML = searchLayout;
    
    // Clear loading and add interface
    console.log('🏗️ Adding interface to DOM...');
    block.innerHTML = '';
    block.appendChild(searchInterface);

    // Wait for DOM integration
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Initialize Coveo with enhanced error handling
    console.log('🔧 Initializing Coveo search interface...');
    await initializeCoveoWithRetries(searchInterface, config);
    
  } catch (error) {
    console.error('❌ Error creating search interface:', error);
    throw error;
  }
}

async function initializeCoveoWithRetries(searchInterface, config) {
  const maxRetries = 3;
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log('🔧 Coveo initialization attempt ' + attempt + '/' + maxRetries + '...');
      
      // Wait for element to be fully connected
      if (!searchInterface.isConnected) {
        console.log('⏳ Waiting for element to be connected to DOM...');
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Additional wait for component readiness
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));

      console.log('🔧 Calling searchInterface.initialize()...');
      await searchInterface.initialize({
        accessToken: config.accessToken,
        organizationId: config.organizationId,
        environment: config.environment || 'demo'
      });

      console.log('✅ Search interface initialized successfully');

      // Try to add custom translations (optional)
      try {
        if (searchInterface.i18n && searchInterface.i18n.addResourceBundle) {
          searchInterface.i18n.addResourceBundle('en', 'caption-filetype', {
            '.html': 'HTML Document',
            '.pdf': 'PDF Document',
            '.doc': 'Word Document',
            '.txt': 'Text File'
          });
          console.log('✅ Custom translations added');
        }
      } catch (i18nError) {
        console.warn('⚠️ Could not add custom translations:', i18nError.message);
      }

      // Execute first search
      console.log('🔍 Executing first search...');
      await searchInterface.executeFirstSearch();
      console.log('✅ First search executed successfully');
      
      return; // Success, exit retry loop
      
    } catch (error) {
      lastError = error;
      console.error('❌ Initialization attempt ' + attempt + ' failed:', error);
      
      if (attempt < maxRetries) {
        console.log('🔄 Retrying in ' + (attempt * 1000) + 'ms...');
        await new Promise(resolve => setTimeout(resolve, attempt * 1000));
      }
    }
  }
  
  // All retries failed
  throw new Error('All ' + maxRetries + ' initialization attempts failed. Last error: ' + lastError.message);
}

function showDetailedErrorState(block, error, config) {
  const isDebug = config && (config.debug === 'true' || config.debug === true);
  
  // Get current component status for debugging
  const debugStatus = debugCoveoStatus();
  
  const errorHTML = `
    <div class="coveo-error">
      <h3>🔍 Local Coveo Loading Issue</h3>
      <p>Unable to load the search interface from local files.</p>
      
      <div class="error-message">
        <strong>Error:</strong> ${error.message || 'Unknown error'}
      </div>
      
      <div class="error-actions">
        <button onclick="location.reload()" class="retry-button">
          🔄 Refresh Page
        </button>
        <button onclick="window.debugCoveo()" class="debug-button">
          🔍 Debug Console
        </button>
        ${isDebug ? `
          <button onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'" class="details-button">
            📋 Show Details
          </button>
          <div class="error-details" style="display: none;">
            <h4>Debug Information:</h4>
            <pre>${JSON.stringify({
              error: error.message,
              stack: error.stack ? error.stack.substring(0, 500) : 'No stack trace',
              customElementsAPI: !!window.customElements,
              availableComponents: debugStatus.components,
              timestamp: new Date().toISOString()
            }, null, 2)}</pre>
            
            <h4>Troubleshooting Steps:</h4>
            <ol>
              <li>Check browser console for detailed error messages</li>
              <li>Verify that atomic.esm.js file loads without errors</li>
              <li>Run <code>window.debugCoveo()</code> in console</li>
              <li>Check if custom elements are being defined</li>
              <li>Try in an incognito window to rule out extensions</li>
            </ol>
          </div>
        ` : ''}
      </div>
    </div>
  `;
  
  block.innerHTML = errorHTML;
}