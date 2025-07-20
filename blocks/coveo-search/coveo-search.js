// blocks/coveo-search/coveo-search.js - Fixed version
import { loadCoveo, debugCoveoStatus, resetCoveoLoader } from '../../scripts/coveo-loader.js';

export default async function decorate(block) {
  console.log('🔍 Initializing Coveo search block...');
  
  // Parse configuration first (before any try/catch that might reference it)
  const config = parseConfiguration(block);
  console.log('📋 Configuration parsed:', config);
  
  // Show loading state
  block.innerHTML = '<div class="coveo-loading">🔍 Loading search interface...</div>';

  try {
    // Clear the configuration content from display
    block.innerHTML = '<div class="coveo-loading">🔍 Loading Coveo components...</div>';
    
    // Load Coveo with timeout and retry logic
    await loadCoveoWithRetry();
    
    // Update loading message
    block.innerHTML = '<div class="coveo-loading">🔍 Creating search interface...</div>';
    
    // Create search interface
    await createSearchInterface(block, config);
    
    console.log('✅ Coveo search block initialized successfully');
    
  } catch (error) {
    console.error('❌ Failed to initialize Coveo search:', error);
    
    // Show detailed error information (config is now defined)
    const debugInfo = debugCoveoStatus();
    showErrorState(block, error, config, debugInfo);
  }
}

function parseConfiguration(block) {
  // Default configuration
  const config = {
    accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
    organizationId: 'searchuisamples',
    fieldsToInclude: '["snrating", "sncost"]',
    environment: 'demo',
    debug: true
  };

  // Parse configuration from Document Authoring table
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

async function loadCoveoWithRetry() {
  const maxRetries = 2; // Reduced retries for faster feedback
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔄 Loading Coveo (attempt ${attempt}/${maxRetries})...`);
      
      if (attempt > 1) {
        resetCoveoLoader();
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      await loadCoveo();
      console.log(`✅ Coveo loaded successfully on attempt ${attempt}`);
      return;
      
    } catch (error) {
      lastError = error;
      console.warn(`⚠️ Attempt ${attempt} failed:`, error.message);
      
      if (attempt < maxRetries) {
        console.log(`🔄 Retrying in 1 second...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
  
  throw lastError;
}

async function createSearchInterface(block, config) {
  console.log('🏗️ Creating search interface...');
  
  try {
    // Create search interface element first
    const searchInterface = document.createElement('atomic-search-interface');
    
    if (config.fieldsToInclude) {
      searchInterface.setAttribute('fields-to-include', config.fieldsToInclude);
    }

    // Create a simplified layout for better compatibility
    const searchLayout = createSimpleSearchLayout();
    searchInterface.innerHTML = searchLayout;
    
    // Clear loading and add interface
    block.innerHTML = '';
    block.appendChild(searchInterface);

    // Initialize Coveo with better error handling
    await initializeCoveoSafely(searchInterface, config);
    
  } catch (error) {
    console.error('❌ Error creating search interface:', error);
    throw new Error(`Failed to create search interface: ${error.message}`);
  }
}

function createSimpleSearchLayout() {
  // Simplified layout that's more likely to work
  return `
    <atomic-search-layout>
      <atomic-layout-section section="search">
        <atomic-search-box></atomic-search-box>
      </atomic-layout-section>
      <atomic-layout-section section="main">
        <atomic-layout-section section="status">
          <atomic-query-summary></atomic-query-summary>
        </atomic-layout-section>
        <atomic-layout-section section="results">
          <atomic-result-list>
            <atomic-result-template>
              <template>
                <div class="result-item">
                  <atomic-result-link class="result-title"></atomic-result-link>
                  <atomic-result-text field="excerpt" class="result-excerpt"></atomic-result-text>
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
}

function createFullSearchLayout() {
  // Full layout - use this if simple layout works
  return `
    <atomic-search-layout>
      <div class="header-bg"></div>
      <atomic-layout-section section="search">
        <atomic-search-box></atomic-search-box>
      </atomic-layout-section>
      <atomic-layout-section section="facets">
        <atomic-facet-manager>
          <atomic-facet field="author" label="Authors"></atomic-facet>
          <atomic-facet field="source" label="Source" display-values-as="link"></atomic-facet>
          <atomic-facet field="filetype" label="File Type"></atomic-facet>
          <atomic-facet field="year" label="Year" display-values-as="box"></atomic-facet>
        </atomic-facet-manager>
      </atomic-layout-section>
      <atomic-layout-section section="main">
        <atomic-layout-section section="status">
          <atomic-breadbox></atomic-breadbox>
          <atomic-query-summary></atomic-query-summary>
          <atomic-refine-toggle></atomic-refine-toggle>
          <atomic-sort-dropdown>
            <atomic-sort-expression label="relevance" expression="relevancy"></atomic-sort-expression>
            <atomic-sort-expression label="most-recent" expression="date descending"></atomic-sort-expression>
          </atomic-sort-dropdown>
          <atomic-did-you-mean></atomic-did-you-mean>
          <atomic-notifications></atomic-notifications>
        </atomic-layout-section>
        <atomic-layout-section section="results">
          <atomic-smart-snippet></atomic-smart-snippet>
          <atomic-result-list>
            <atomic-result-template>
              <template>
                <atomic-result-section-visual>
                  <atomic-result-icon class="icon"></atomic-result-icon>
                </atomic-result-section-visual>
                <atomic-result-section-title>
                  <atomic-result-link></atomic-result-link>
                </atomic-result-section-title>
                <atomic-result-section-excerpt>
                  <atomic-result-text field="excerpt"></atomic-result-text>
                </atomic-result-section-excerpt>
                <atomic-result-section-bottom-metadata>
                  <atomic-result-fields-list>
                    <atomic-field-condition class="field" if-defined="author">
                      <span class="field-label">Author:</span>
                      <atomic-result-text field="author"></atomic-result-text>
                    </atomic-field-condition>
                    <atomic-field-condition class="field" if-defined="source">
                      <span class="field-label">Source:</span>
                      <atomic-result-text field="source"></atomic-result-text>
                    </atomic-field-condition>
                    <atomic-field-condition class="field" if-defined="filetype">
                      <span class="field-label">Type:</span>
                      <atomic-result-text field="filetype"></atomic-result-text>
                    </atomic-field-condition>
                  </atomic-result-fields-list>
                </atomic-result-section-bottom-metadata>
              </template>
            </atomic-result-template>
          </atomic-result-list>
          <atomic-query-error></atomic-query-error>
          <atomic-no-results></atomic-no-results>
        </atomic-layout-section>
        <atomic-layout-section section="pagination">
          <atomic-load-more-results></atomic-load-more-results>
        </atomic-layout-section>
      </atomic-layout-section>
    </atomic-search-layout>
  `;
}

async function initializeCoveoSafely(searchInterface, config) {
  try {
    console.log('🔧 Initializing Coveo search interface...');
    
    // Wait for the element to be connected to DOM
    await new Promise(resolve => {
      if (searchInterface.isConnected) {
        resolve();
      } else {
        const observer = new MutationObserver(() => {
          if (searchInterface.isConnected) {
            observer.disconnect();
            resolve();
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
      }
    });

    // Additional wait for component readiness
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (config.debug === 'true' || config.debug === true) {
      console.log('🔧 Initializing with config:', {
        accessToken: config.accessToken.substring(0, 10) + '...',
        organizationId: config.organizationId,
        environment: config.environment || 'demo'
      });
    }

    // Initialize with configuration
    await searchInterface.initialize({
      accessToken: config.accessToken,
      organizationId: config.organizationId,
      environment: config.environment || 'demo'
    });

    console.log('✅ Search interface initialized');

    // Try to add custom translations (optional, won't fail if not available)
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
    await searchInterface.executeFirstSearch();
    console.log('✅ First search executed');
    
  } catch (error) {
    console.error('❌ Error during Coveo initialization:', error);
    
    // More specific error message
    if (error.message && error.message.includes('initialize')) {
      throw new Error(`Coveo initialization failed: ${error.message}. Check your access token and organization ID.`);
    } else if (error.message && error.message.includes('executeFirstSearch')) {
      throw new Error(`Search execution failed: ${error.message}. The interface was initialized but the first search failed.`);
    } else {
      throw new Error(`Unexpected error during initialization: ${error.message}`);
    }
  }
}

function showErrorState(block, error, config, debugInfo) {
  const isDebug = config && (config.debug === 'true' || config.debug === true);
  
  block.innerHTML = `
    <div class="coveo-error">
      <h3>🔍 Search Interface Error</h3>
      <p>There was an issue loading the search interface.</p>
      
      <div class="error-message">
        <strong>Error:</strong> ${error.message || 'Unknown error occurred'}
      </div>
      
      <div class="error-actions">
        <button onclick="location.reload()" class="retry-button">
          🔄 Refresh Page
        </button>
        ${isDebug ? `<button onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'" class="debug-button">
          🔍 Toggle Debug Info
        </button>` : ''}
      </div>
      
      ${isDebug ? `
        <div class="error-details" style="display: none;">
          <h4>Debug Information:</h4>
          <pre>${JSON.stringify({
            error: error.message,
            stack: error.stack,
            config: config,
            debugInfo: debugInfo
          }, null, 2)}</pre>
        </div>
      ` : ''}
    </div>
  `;
}