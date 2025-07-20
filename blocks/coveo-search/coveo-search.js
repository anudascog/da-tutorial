<<<<<<< HEAD
<<<<<<< HEAD
// blocks/coveo-search/coveo-search.js - Robust version with better error handling
import { loadCoveo, debugCoveoStatus, resetCoveoLoader } from '../../scripts/coveo-loader.js';

export default async function decorate(block) {
  console.log('🔍 Initializing Coveo search block...');
=======
// blocks/coveo-search/coveo-search.js - Fixed syntax errors
=======
// blocks/coveo-search/coveo-search.js - Simplified and robust version
>>>>>>> parent of 187890f (all the atomic files in localrepo)
import { loadCoveo, debugCoveoStatus, resetCoveoLoader } from '../../scripts/coveo-loader.js';

export default async function decorate(block) {
  console.log('🔍 Initializing Coveo search block...');
  
  // Parse configuration first
  const config = parseConfiguration(block);
  console.log('📋 Configuration:', { ...config, accessToken: config.accessToken.substring(0, 10) + '...' });
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
  
  // Show loading state
  block.innerHTML = '<div class="coveo-loading">🔍 Loading search interface...</div>';

  try {
<<<<<<< HEAD
<<<<<<< HEAD
    // Parse configuration first
    const config = parseConfiguration(block);
    console.log('📋 Configuration parsed:', config);
    
    // Clear the configuration content from display
    block.innerHTML = '<div class="coveo-loading">🔍 Loading Coveo components...</div>';
    
    // Load Coveo with timeout and retry logic
    await loadCoveoWithRetry();
    
    // Update loading message
    block.innerHTML = '<div class="coveo-loading">🔍 Creating search interface...</div>';
    
    // Create search interface
    await createSearchInterface(block, config);
    
=======
    // Debug: Show initial state
    console.log('🐛 Initial debug status:');
    debugCoveoStatus();
    
    // Load Coveo components with detailed logging
    console.log('📦 Starting Coveo loading process...');
=======
    // Load Coveo components
    console.log('📦 Loading Coveo components...');
>>>>>>> parent of 187890f (all the atomic files in localrepo)
    await loadCoveo();
    
    // Create search interface
    console.log('🏗️ Creating search interface...');
    await createSearchInterface(block, config);
    
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
    console.log('✅ Coveo search block initialized successfully');
    
  } catch (error) {
    console.error('❌ Failed to initialize Coveo search:', error);
<<<<<<< HEAD
    
<<<<<<< HEAD
    // Show detailed error information
    const debugInfo = debugCoveoStatus();
    showErrorState(block, error, config, debugInfo);
=======
    // Enhanced error reporting
    console.log('🐛 Error state debug status:');
    debugCoveoStatus();
    
    showDetailedErrorState(block, error, config);
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
=======
    showErrorState(block, error, config);
>>>>>>> parent of 187890f (all the atomic files in localrepo)
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
  [...block.children].forEach((row) => {
    if (row.children.length >= 2) {
      const key = row.children[0]?.textContent?.trim();
      const value = row.children[1]?.textContent?.trim();
      
      if (key && value) {
        config[key] = value;
      }
<<<<<<< HEAD
    }
  });
=======
    });
  } catch (parseError) {
    console.warn('⚠️ Error parsing configuration, using defaults:', parseError);
  }
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)

  return config;
}

<<<<<<< HEAD
<<<<<<< HEAD
async function loadCoveoWithRetry() {
=======
async function createSearchInterfaceWithChecks(block, config) {
=======
async function createSearchInterface(block, config) {
>>>>>>> parent of 187890f (all the atomic files in localrepo)
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

<<<<<<< HEAD
async function initializeCoveoWithRetries(searchInterface, config) {
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
  const maxRetries = 3;
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
<<<<<<< HEAD
      console.log(`🔄 Loading Coveo (attempt ${attempt}/${maxRetries})...`);
      
      if (attempt > 1) {
        // Reset loader state for retry
        resetCoveoLoader();
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait before retry
      }
      
      await loadCoveo();
      console.log(`✅ Coveo loaded successfully on attempt ${attempt}`);
      return;
      
    } catch (error) {
      lastError = error;
      console.warn(`⚠️ Attempt ${attempt} failed:`, error.message);
      
      if (attempt < maxRetries) {
        console.log(`🔄 Retrying in ${attempt * 1000}ms...`);
=======
      console.log('🔧 Coveo initialization attempt ' + attempt + '/' + maxRetries + '...');
      
      // Wait for element to be fully connected
      if (!searchInterface.isConnected) {
        console.log('⏳ Waiting for element to be connected to DOM...');
        await new Promise(resolve => setTimeout(resolve, 1000));
=======
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
>>>>>>> parent of 187890f (all the atomic files in localrepo)
      }
    } catch (i18nError) {
      console.warn('⚠️ Could not add custom translations');
    }

<<<<<<< HEAD
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
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
        await new Promise(resolve => setTimeout(resolve, attempt * 1000));
      }
    }
  }
  
<<<<<<< HEAD
  throw lastError;
}

async function createSearchInterface(block, config) {
  // Wait for essential components with extended timeout
  const essentialComponents = [
    'atomic-search-interface',
    'atomic-search-layout',
    'atomic-search-box'
  ];

  console.log('⏳ Waiting for essential components...');
  await waitForComponents(essentialComponents, 20000); // 20 second timeout
  
  console.log('🏗️ Creating search interface...');
  
  const searchInterface = document.createElement('atomic-search-interface');
  
  if (config.fieldsToInclude) {
    searchInterface.setAttribute('fields-to-include', config.fieldsToInclude);
  }

  // Create the search layout
  const searchLayout = createSearchLayout();
  searchInterface.innerHTML = searchLayout;
  
  // Clear loading and add interface
  block.innerHTML = '';
  block.appendChild(searchInterface);

  // Initialize Coveo
  await initializeCoveo(searchInterface, config);
}

function createSearchLayout() {
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

async function waitForComponents(components, timeout = 15000) {
  const startTime = Date.now();
  
  for (const componentName of components) {
    while (!window.customElements || !window.customElements.get(componentName)) {
      if (Date.now() - startTime > timeout) {
        throw new Error(`Component ${componentName} not available after ${timeout}ms`);
      }
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    console.log(`✅ Component ready: ${componentName}`);
  }
}

async function initializeCoveo(searchInterface, config) {
  try {
    console.log('🔧 Initializing Coveo search interface...');
    
    // Wait a bit for the interface to be fully constructed
    await new Promise(resolve => setTimeout(resolve, 500));

    if (config.debug === 'true' || config.debug === true) {
      console.log('🔧 Initializing with config:', config);
    }

    // Initialize with configuration
    await searchInterface.initialize({
      accessToken: config.accessToken,
      organizationId: config.organizationId,
      environment: config.environment || 'demo'
    });

    // Add custom translations if available
    if (searchInterface.i18n && searchInterface.i18n.addResourceBundle) {
      searchInterface.i18n.addResourceBundle('en', 'caption-filetype', {
        '.html': 'HTML Document',
        '.pdf': 'PDF Document',
        '.doc': 'Word Document',
        '.txt': 'Text File'
      });
    }

    // Execute first search
    await searchInterface.executeFirstSearch();
    
    console.log('✅ Coveo search initialized and first search executed');
    
  } catch (error) {
    console.error('❌ Error during Coveo initialization:', error);
    throw error;
  }
}

function showErrorState(block, error, config, debugInfo) {
  const isDebug = config && (config.debug === 'true' || config.debug === true);
  
  block.innerHTML = `
    <div class="coveo-error">
      <h3>🔍 Search Temporarily Unavailable</h3>
      <p>We're having trouble loading the search interface. This might be a temporary issue.</p>
=======
  // All retries failed
  throw new Error('All ' + maxRetries + ' initialization attempts failed. Last error: ' + lastError.message);
=======
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
>>>>>>> parent of 187890f (all the atomic files in localrepo)
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
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
      
      <div class="error-actions">
        <button onclick="location.reload()" class="retry-button">
          🔄 Refresh Page
        </button>
<<<<<<< HEAD
<<<<<<< HEAD
        <button onclick="this.nextElementSibling.style.display='block'" class="debug-button">
          🔍 Show Details
=======
        <button onclick="window.debugCoveo()" class="debug-button">
          🔍 Debug Console
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
        </button>
=======
>>>>>>> parent of 187890f (all the atomic files in localrepo)
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
<<<<<<< HEAD
      
      <div class="error-details" style="display: none;">
        <h4>Error Details:</h4>
        <p><strong>Message:</strong> ${error.message}</p>
        
        ${isDebug ? `
          <h4>Debug Information:</h4>
          <ul>
            <li><strong>Coveo Loaded:</strong> ${debugInfo.loaded}</li>
            <li><strong>CustomElements Available:</strong> ${debugInfo.customElementsAvailable}</li>
            <li><strong>Components:</strong> ${JSON.stringify(debugInfo.components, null, 2)}</li>
          </ul>
          
          <h4>Troubleshooting:</h4>
          <ol>
            <li>Check browser console for additional errors</li>
            <li>Verify network connectivity</li>
            <li>Try refreshing the page</li>
            <li>Check if ad blockers are interfering</li>
          </ol>
        ` : ''}
      </div>
    </div>
  `;
=======
    </div>
  `;
<<<<<<< HEAD
  
  block.innerHTML = errorHTML;
>>>>>>> parent of 2d4bfee (all the atomic files in localrepo)
=======
>>>>>>> parent of 187890f (all the atomic files in localrepo)
}