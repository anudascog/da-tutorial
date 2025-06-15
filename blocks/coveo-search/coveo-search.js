export default function decorate(block) {
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

  // Create search interface
  createSearchInterface(block, config);
}

function createSearchInterface(block, config) {
  const searchInterface = document.createElement('atomic-search-interface');
  
  if (config.fieldsToInclude) {
    searchInterface.setAttribute('fields-to-include', config.fieldsToInclude);
  }

  // Create the complete search layout
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

  // Initialize Coveo
  initializeCoveo(searchInterface, config);
}

async function initializeCoveo(searchInterface, config) {
  try {
    // Wait for Coveo components to be defined
    await customElements.whenDefined('atomic-search-interface');

    if (config.debug === 'true' || config.debug === true) {
      console.log('Initializing Coveo with config:', config);
    }

    // Initialize with the provided configuration
    await searchInterface.initialize({
      accessToken: config.accessToken,
      organizationId: config.organizationId,
    });

    // Add custom translations/captions
    searchInterface.i18n.addResourceBundle('en', 'caption-filetype', {
      '.html': 'HTML Document',
      '.pdf': 'PDF Document',
      '.doc': 'Word Document',
      '.txt': 'Text File'
    });

    // Execute first search
    searchInterface.executeFirstSearch();
    
    if (config.debug === 'true' || config.debug === true) {
      console.log('Coveo search initialized successfully');
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