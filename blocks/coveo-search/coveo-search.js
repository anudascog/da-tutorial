// blocks/coveo-search/coveo-search.js
import { loadCoveo } from '../../scripts/coveo-loader.js';

export default async function decorate(block) {
  // Show loading state while Coveo loads
  block.innerHTML = '<div class="coveo-loading"> Loading search interface...</div>';

  try {
    // Load Coveo components first (replaces CDN loading)
    console.log('Loading Coveo components locally...');
    await loadCoveo();
    
    // Small delay to ensure components are fully registered
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Default configuration using Coveo's demo environment
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
      }
    });

    // Clear the configuration content from display
    block.innerHTML = '';

    // Create search interface programmatically
    await createSearchInterface(block, config);
    
  } catch (error) {
    console.error('Failed to load Coveo search:', error);
    block.innerHTML = `
      <div class="coveo-error">
        <h3>Search Temporarily Unavailable</h3>
        <p>Unable to load search interface. Please refresh the page and try again.</p>
        ${config && (config.debug === 'true' || config.debug === true) ? `
          <details>
            <summary>Technical Details (Debug Mode)</summary>
            <pre>${error.message}</pre>
          </details>
        ` : ''}
      </div>
    `;
  }
}

async function createSearchInterface(block, config) {
  // Wait for all required Coveo components to be defined
  const requiredComponents = [
    'atomic-search-interface',
    'atomic-search-layout',
    'atomic-layout-section',
    'atomic-search-box',
    'atomic-facet-manager',
    'atomic-facet',
    'atomic-result-list',
    'atomic-result-template'
  ];

  // Ensure all components are registered
  for (const component of requiredComponents) {
    if (!customElements.get(component)) {
      await customElements.whenDefined(component);
    }
  }

  const searchInterface = document.createElement('atomic-search-interface');
  
  if (config.fieldsToInclude) {
    searchInterface.setAttribute('fields-to-include', config.fieldsToInclude);
  }

  // Create the complete search layout (programmatically)
  const searchLayout = `
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

  searchInterface.innerHTML = searchLayout;
  block.appendChild(searchInterface);

  // Initialize Coveo programmatically
  await initializeCoveo(searchInterface, config);
}

async function initializeCoveo(searchInterface, config) {
  try {
    // Ensure the search interface is fully ready
    await customElements.whenDefined('atomic-search-interface');
    
    // Wait a bit for the interface to be fully constructed
    await new Promise(resolve => setTimeout(resolve, 100));

    if (config.debug === 'true' || config.debug === true) {
      console.log('Initializing Coveo with config:', config);
    }

    // Initialize with the provided configuration (programmatic initialization)
    await searchInterface.initialize({
      accessToken: config.accessToken,
      organizationId: config.organizationId,
      environment: config.environment || 'demo'
    });

    // Add custom translations/captions (programmatic setup)
    if (searchInterface.i18n && searchInterface.i18n.addResourceBundle) {
      searchInterface.i18n.addResourceBundle('en', 'caption-filetype', {
        '.html': 'HTML Document',
        '.pdf': 'PDF Document',
        '.doc': 'Word Document',
        '.txt': 'Text File'
      });
    }

    // Execute first search (programmatic execution)
    await searchInterface.executeFirstSearch();
    
    if (config.debug === 'true' || config.debug === true) {
      console.log('Coveo search initialized successfully (local implementation)');
    }

  } catch (error) {
    console.error('Error initializing Coveo:', error);
    
    // Show user-friendly error message
    searchInterface.innerHTML = `
      <div class="coveo-error">
        <h3>Search Temporarily Unavailable</h3>
        <p>Unable to initialize search interface. Please try again later.</p>
        ${config.debug === 'true' || config.debug === true ? `
          <details>
            <summary>Technical Details (Debug Mode)</summary>
            <pre>${error.message}</pre>
          </details>
        ` : ''}
      </div>
    `;
  }
}