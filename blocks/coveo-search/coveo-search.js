// blocks/coveo-search/coveo-search.js - Simplified and robust
import { loadCoveo, debugCoveoStatus } from '../../scripts/coveo-loader.js';

export default async function decorate(block) {
  console.log('🔍 Starting simple Coveo search initialization...');
  
  // Parse configuration
  const config = parseConfiguration(block);
  console.log('📋 Using configuration:', {
    accessToken: config.accessToken.substring(0, 10) + '...',
    organizationId: config.organizationId,
    environment: config.environment,
    debug: config.debug
  });
  
  // Show loading state
  block.innerHTML = '<div class="coveo-loading">🔍 Loading search interface...</div>';

  try {
    // Load Coveo components
    console.log('📦 Loading Coveo components...');
    await loadCoveo();
    
    // Show components status
    console.log('🐛 Components loaded, checking status:');
    debugCoveoStatus();
    
    // Create search interface
    console.log('🏗️ Creating search interface...');
    await createSimpleSearchInterface(block, config);
    
    console.log('✅ Coveo search initialization completed successfully!');
    
  } catch (error) {
    console.error('❌ Coveo search initialization failed:', error);
    showSimpleErrorState(block, error, config);
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
    console.warn('⚠️ Configuration parsing failed, using defaults:', parseError);
  }

  return config;
}

async function createSimpleSearchInterface(block, config) {
  try {
    // Verify essential component is available
    if (!window.customElements || !window.customElements.get('atomic-search-interface')) {
      throw new Error('atomic-search-interface component not available');
    }
    
    console.log('✅ atomic-search-interface verified');
    
    // Create search interface element
    const searchInterface = document.createElement('atomic-search-interface');
    
    if (config.fieldsToInclude) {
      searchInterface.setAttribute('fields-to-include', config.fieldsToInclude);
    }

    // Create basic layout that's most likely to work
    const basicLayout = `
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
                  <div class="simple-result">
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

    searchInterface.innerHTML = basicLayout;
    
    // Add to DOM
    block.innerHTML = '';
    block.appendChild(searchInterface);
    
    // Wait a moment for DOM integration
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Initialize with retry logic
    await initializeWithRetries(searchInterface, config);
    
  } catch (error) {
    console.error('❌ Failed to create search interface:', error);
    throw error;
  }
}

async function initializeWithRetries(searchInterface, config) {
  const maxRetries = 3;
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log('🔧 Initialization attempt ' + attempt + '/' + maxRetries);
      
      // Ensure element is connected
      if (!searchInterface.isConnected) {
        console.log('⏳ Waiting for DOM connection...');
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Wait based on attempt number
      await new Promise(resolve => setTimeout(resolve, 2000 * attempt));

      // Initialize
      console.log('🔧 Calling initialize...');
      await searchInterface.initialize({
        accessToken: config.accessToken,
        organizationId: config.organizationId,
        environment: config.environment || 'demo'
      });

      console.log('✅ Initialize completed');

      // Execute first search
      console.log('🔍 Executing first search...');
      await searchInterface.executeFirstSearch();
      console.log('✅ First search completed');
      
      return; // Success
      
    } catch (error) {
      lastError = error;
      console.error('❌ Attempt ' + attempt + ' failed:', error);
      
      if (attempt < maxRetries) {
        console.log('⏳ Waiting before retry...');
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    }
  }
  
  throw new Error('All initialization attempts failed. Last error: ' + lastError.message);
}

function showSimpleErrorState(block, error, config) {
  const isDebug = config && (config.debug === 'true' || config.debug === true);
  
  const errorMessage = `
    <div class="coveo-error">
      <h3>🔍 Search Loading Error</h3>
      <p>Unable to load the search interface.</p>
      
      <div class="error-details">
        <strong>Error:</strong> ${error.message}
      </div>
      
      <div class="error-actions">
        <button onclick="location.reload()" class="retry-button">
          🔄 Refresh Page
        </button>
        <button onclick="console.log('Debug info:'); window.debugCoveo && window.debugCoveo()" class="debug-button">
          🔍 Debug in Console
        </button>
      </div>
      
      ${isDebug ? `
        <div class="debug-info">
          <h4>Debug Information:</h4>
          <p><strong>Custom Elements API:</strong> ${window.customElements ? 'Available' : 'Not Available'}</p>
          <p><strong>Search Interface Component:</strong> ${window.customElements && window.customElements.get('atomic-search-interface') ? 'Available' : 'Not Available'}</p>
          <p><strong>Error Time:</strong> ${new Date().toISOString()}</p>
          
          <h4>Troubleshooting:</h4>
          <ul>
            <li>Check browser console for more details</li>
            <li>Try refreshing the page</li>
            <li>Verify network connectivity</li>
            <li>Check if browser supports Custom Elements</li>
          </ul>
        </div>
      ` : ''}
    </div>
  `;
  
  block.innerHTML = errorMessage;
}