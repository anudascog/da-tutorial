// blocks/coveo-search/coveo-search.js - Simplified and robust version
import { loadCoveo, debugCoveoStatus, resetCoveoLoader } from '../../scripts/coveo-loader.js';

export default async function decorate(block) {
  console.log('🔍 Initializing Coveo search block...');
  
  // Parse configuration first
  const config = parseConfiguration(block);
  console.log('📋 Configuration:', { ...config, accessToken: config.accessToken.substring(0, 10) + '...' });
  
  // Show loading state
  block.innerHTML = '<div class="coveo-loading">🔍 Loading search interface...</div>';

  try {
    // Load Coveo components
    console.log('📦 Loading Coveo components...');
    await loadCoveo();
    
    // Create search interface
    console.log('🏗️ Creating search interface...');
    await createSearchInterface(block, config);
    
    console.log('✅ Coveo search block initialized successfully');
    
  } catch (error) {
    console.error('❌ Failed to initialize Coveo search:', error);
    showErrorState(block, error, config);
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

async function createSearchInterface(block, config) {
  try {
    // Create search interface element
    const searchInterface = document.createElement('atomic-search-interface');
    
    if (config.fieldsToInclude) {
      searchInterface.setAttribute('fields-to-include', config.fieldsToInclude);
    }

    // Create simplified but functional layout
    const searchLayout = `
      <atomic-search-layout>
        <atomic-layout-section section="search">
          <atomic-search-box></atomic-search-box>
        </atomic-layout-section>
        <atomic-layout-section section="facets">
          <atomic-facet-manager>
            <atomic-facet field="author" label="Authors"></atomic-facet>
            <atomic-facet field="source" label="Source"></atomic-facet>
            <atomic-facet field="filetype" label="File Type"></atomic-facet>
          </atomic-facet-manager>
        </atomic-layout-section>
        <atomic-layout-section section="main">
          <atomic-layout-section section="status">
            <atomic-query-summary></atomic-query-summary>
            <atomic-refine-toggle></atomic-refine-toggle>
            <atomic-sort-dropdown>
              <atomic-sort-expression label="relevance" expression="relevancy"></atomic-sort-expression>
              <atomic-sort-expression label="most-recent" expression="date descending"></atomic-sort-expression>
            </atomic-sort-dropdown>
            <atomic-did-you-mean></atomic-did-you-mean>
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
            <atomic-load-more-results></atomic-load-more-results>
          </atomic-layout-section>
        </atomic-layout-section>
      </atomic-search-layout>
    `;

    searchInterface.innerHTML = searchLayout;
    
    // Clear loading and add interface
    block.innerHTML = '';
    block.appendChild(searchInterface);

    // Initialize Coveo
    await initializeCoveo(searchInterface, config);
    
  } catch (error) {
    console.error('❌ Error creating search interface:', error);
    throw error;
  }
}

async function initializeCoveo(searchInterface, config) {
  try {
    console.log('🔧 Initializing Coveo search interface...');
    
    // Wait for the element to be in DOM
    await new Promise(resolve => {
      if (searchInterface.isConnected) {
        resolve();
      } else {
        setTimeout(resolve, 100);
      }
    });

    // Additional wait for component readiness
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (config.debug === 'true' || config.debug === true) {
      console.log('🔧 Initializing with config');
    }

    // Initialize search interface
    await searchInterface.initialize({
      accessToken: config.accessToken,
      organizationId: config.organizationId,
      environment: config.environment || 'demo'
    });

    console.log('✅ Search interface initialized');

    // Add custom translations (optional)
    try {
      if (searchInterface.i18n && searchInterface.i18n.addResourceBundle) {
        searchInterface.i18n.addResourceBundle('en', 'caption-filetype', {
          '.html': 'HTML Document',
          '.pdf': 'PDF Document',
          '.doc': 'Word Document',
          '.txt': 'Text File'
        });
      }
    } catch (i18nError) {
      console.warn('⚠️ Could not add custom translations');
    }

    // Execute first search
    await searchInterface.executeFirstSearch();
    console.log('✅ First search executed');
    
  } catch (error) {
    console.error('❌ Error during Coveo initialization:', error);
    
    if (error.message && error.message.includes('initialize')) {
      throw new Error(`Initialization failed: ${error.message}`);
    } else if (error.message && error.message.includes('executeFirstSearch')) {
      throw new Error(`Search execution failed: ${error.message}`);
    } else {
      throw new Error(`Unexpected error: ${error.message}`);
    }
  }
}

function showErrorState(block, error, config) {
  const isDebug = config && (config.debug === 'true' || config.debug === true);
  
  block.innerHTML = `
    <div class="coveo-error">
      <h3>🔍 Search Interface Error</h3>
      <p>Unable to load the search interface.</p>
      
      <div class="error-message">
        <strong>Error:</strong> ${error.message || 'Unknown error'}
      </div>
      
      <div class="error-actions">
        <button onclick="location.reload()" class="retry-button">
          🔄 Refresh Page
        </button>
        ${isDebug ? `
          <button onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'" class="debug-button">
            🔍 Debug Info
          </button>
          <div class="error-details" style="display: none;">
            <h4>Debug Information:</h4>
            <pre>${JSON.stringify({
              error: error.message,
              config: config,
              timestamp: new Date().toISOString()
            }, null, 2)}</pre>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}