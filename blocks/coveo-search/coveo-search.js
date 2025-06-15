export default function decorate(block) {
  // Clear existing content
  block.innerHTML = '';

  // Create the search interface structure
  const searchInterface = document.createElement('atomic-search-interface');
  searchInterface.setAttribute('fields-to-include', '["snrating", "sncost"]');

  // Build the complete search layout
  const searchLayout = `
    <atomic-search-layout>
      <div class="header-bg"></div>
      <atomic-layout-section section="search">
        <atomic-search-box></atomic-search-box>
      </atomic-layout-section>
      <atomic-layout-section section="facets">
        <atomic-facet-manager>
          <atomic-category-facet field="geographicalhierarchy" label="World Atlas" with-search></atomic-category-facet>
          <atomic-facet field="author" label="Authors"></atomic-facet>
          <atomic-facet field="source" label="Source" display-values-as="link"></atomic-facet>
          <atomic-facet field="year" label="Year" display-values-as="box"></atomic-facet>
          <atomic-numeric-facet field="ytviewcount" label="Youtube Views" depends-on-filetype="YouTubeVideo" with-input="integer"></atomic-numeric-facet>
          <atomic-numeric-facet field="ytlikecount" label="Youtube Likes" depends-on-filetype="YouTubeVideo" display-values-as="link">
            <atomic-numeric-range start="0" end="1000" label="Unpopular"></atomic-numeric-range>
            <atomic-numeric-range start="1000" end="8000" label="Well liked"></atomic-numeric-range>
            <atomic-numeric-range start="8000" end="100000" label="Popular"></atomic-numeric-range>
            <atomic-numeric-range start="100000" end="999999999" label="Treasured"></atomic-numeric-range>
          </atomic-numeric-facet>
          <atomic-color-facet field="filetype" label="Files" number-of-values="6" sort-criteria="occurrences"></atomic-color-facet>
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
          <atomic-smart-snippet-suggestions></atomic-smart-snippet-suggestions>
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

  // Initialize Coveo after DOM is ready
  initializeCoveo(searchInterface);
}

async function initializeCoveo(searchInterface) {
  // Wait for Coveo components to be defined
  await customElements.whenDefined('atomic-search-interface');

  // Initialize with your credentials
  await searchInterface.initialize({
    accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457', // Replace with your token
    organizationId: 'searchuisamples', // Replace with your org ID
  });

  // Add translations if needed
  searchInterface.i18n.addResourceBundle('en', 'caption-filetype', {
    '.html': 'html',
  });

  // Execute first search
  searchInterface.executeFirstSearch();
}