/*
import {
  createOptimizedPicture,
  decorateIcons,
  fetchPlaceholders,
} from '../../scripts/aem.js';

const searchParams = new URLSearchParams(window.location.search);

function findNextHeading(el) {
  let preceedingEl = el.parentElement.previousElement || el.parentElement.parentElement;
  let h = 'H2';
  while (preceedingEl) {
    const lastHeading = [...preceedingEl.querySelectorAll('h1, h2, h3, h4, h5, h6')].pop();
    if (lastHeading) {
      const level = parseInt(lastHeading.nodeName[1], 10);
      h = level < 6 ? `H${level + 1}` : 'H6';
      preceedingEl = false;
    } else {
      preceedingEl = preceedingEl.previousElement || preceedingEl.parentElement;
    }
  }
  return h;
}

function highlightTextElements(terms, elements) {
  elements.forEach((element) => {
    if (!element || !element.textContent) return;

    const matches = [];
    const { textContent } = element;
    terms.forEach((term) => {
      let start = 0;
      let offset = textContent.toLowerCase().indexOf(term.toLowerCase(), start);
      while (offset >= 0) {
        matches.push({ offset, term: textContent.substring(offset, offset + term.length) });
        start = offset + term.length;
        offset = textContent.toLowerCase().indexOf(term.toLowerCase(), start);
      }
    });

    if (!matches.length) {
      return;
    }

    matches.sort((a, b) => a.offset - b.offset);
    let currentIndex = 0;
    const fragment = matches.reduce((acc, { offset, term }) => {
      if (offset < currentIndex) return acc;
      const textBefore = textContent.substring(currentIndex, offset);
      if (textBefore) {
        acc.appendChild(document.createTextNode(textBefore));
      }
      const markedTerm = document.createElement('mark');
      markedTerm.textContent = term;
      acc.appendChild(markedTerm);
      currentIndex = offset + term.length;
      return acc;
    }, document.createDocumentFragment());
    const textAfter = textContent.substring(currentIndex);
    if (textAfter) {
      fragment.appendChild(document.createTextNode(textAfter));
    }
    element.innerHTML = '';
    element.appendChild(fragment);
  });
}

export async function fetchData(source) {
  const response = await fetch(source);
  if (!response.ok) {
    // eslint-disable-next-line no-console
    console.error('error loading API response', response);
    return null;
  }

  const json = await response.json();
  if (!json) {
    // eslint-disable-next-line no-console
    console.error('empty API response', source);
    return null;
  }

  return json.data;
}

function renderResult(result, searchTerms, titleTag) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = result.path;
  if (result.image) {
    const wrapper = document.createElement('div');
    wrapper.className = 'search-result-image';
    const pic = createOptimizedPicture(result.image, '', false, [{ width: '375' }]);
    wrapper.append(pic);
    a.append(wrapper);
  }
  if (result.title) {
    const title = document.createElement(titleTag);
    title.className = 'search-result-title';
    const link = document.createElement('a');
    link.href = result.path;
    link.textContent = result.title;
    highlightTextElements(searchTerms, [link]);
    title.append(link);
    a.append(title);
  }
  if (result.description) {
    const description = document.createElement('p');
    description.textContent = result.description;
    highlightTextElements(searchTerms, [description]);
    a.append(description);
  }
  li.append(a);
  return li;
}

function clearSearchResults(block) {
  const searchResults = block.querySelector('.search-results');
  searchResults.innerHTML = '';
}

function clearSearch(block) {
  clearSearchResults(block);
  if (window.history.replaceState) {
    const url = new URL(window.location.href);
    url.search = '';
    searchParams.delete('q');
    window.history.replaceState({}, '', url.toString());
  }
}

async function renderResults(block, config, filteredData, searchTerms) {
  clearSearchResults(block);
  const searchResults = block.querySelector('.search-results');
  const headingTag = searchResults.dataset.h;

  if (filteredData.length) {
    searchResults.classList.remove('no-results');
    filteredData.forEach((result) => {
      const li = renderResult(result, searchTerms, headingTag);
      searchResults.append(li);
    });
  } else {
    const noResultsMessage = document.createElement('li');
    searchResults.classList.add('no-results');
    noResultsMessage.textContent = config.placeholders.searchNoResults || 'No results found.';
    searchResults.append(noResultsMessage);
  }
}

function compareFound(hit1, hit2) {
  return hit1.minIdx - hit2.minIdx;
}

function filterData(searchTerms, data) {
  const foundInHeader = [];
  const foundInMeta = [];

  data.forEach((result) => {
    let minIdx = -1;

    searchTerms.forEach((term) => {
      const idx = (result.header || result.title).toLowerCase().indexOf(term);
      if (idx < 0) return;
      if (minIdx < idx) minIdx = idx;
    });

    if (minIdx >= 0) {
      foundInHeader.push({ minIdx, result });
      return;
    }

    const metaContents = `${result.title} ${result.description} ${result.path.split('/').pop()}`.toLowerCase();
    searchTerms.forEach((term) => {
      const idx = metaContents.indexOf(term);
      if (idx < 0) return;
      if (minIdx < idx) minIdx = idx;
    });

    if (minIdx >= 0) {
      foundInMeta.push({ minIdx, result });
    }
  });

  return [
    ...foundInHeader.sort(compareFound),
    ...foundInMeta.sort(compareFound),
  ].map((item) => item.result);
}

async function handleSearch(e, block, config) {
  const searchValue = e.target.value;
  searchParams.set('q', searchValue);
  if (window.history.replaceState) {
    const url = new URL(window.location.href);
    url.search = searchParams.toString();
    window.history.replaceState({}, '', url.toString());
  }

  if (searchValue.length < 3) {
    clearSearch(block);
    return;
  }
  const searchTerms = searchValue.toLowerCase().split(/\s+/).filter((term) => !!term);

  const data = await fetchData(config.source);
  const filteredData = filterData(searchTerms, data);
  await renderResults(block, config, filteredData, searchTerms);
}

function searchResultsContainer(block) {
  const results = document.createElement('ul');
  results.className = 'search-results';
  results.dataset.h = findNextHeading(block);
  return results;
}

function searchInput(block, config) {
  const input = document.createElement('input');
  input.setAttribute('type', 'search');
  input.className = 'search-input';

  const searchPlaceholder = config.placeholders.searchPlaceholder || 'Search...';
  input.placeholder = searchPlaceholder;
  input.setAttribute('aria-label', searchPlaceholder);

  input.addEventListener('input', (e) => {
    handleSearch(e, block, config);
  });

  input.addEventListener('keyup', (e) => { if (e.code === 'Escape') { clearSearch(block); } });

  return input;
}

function searchIcon() {
  const icon = document.createElement('span');
  icon.classList.add('icon', 'icon-search');
  return icon;
}

function searchBox(block, config) {
  const box = document.createElement('div');
  box.classList.add('search-box');
  box.append(
    searchIcon(),
    searchInput(block, config),
  );

  return box;
}

export default async function decorate(block) {
  const placeholders = await fetchPlaceholders();
  const source = block.querySelector('a[href]') ? block.querySelector('a[href]').href : '/query-index.json';
  block.innerHTML = '';
  block.append(
    searchBox(block, { source, placeholders }),
    searchResultsContainer(block),
  );

  if (searchParams.get('q')) {
    const input = block.querySelector('input');
    input.value = searchParams.get('q');
    input.dispatchEvent(new Event('input'));
  }

  decorateIcons(block);
}
*/

// Modified blocks/search/search.js
// This integrates Coveo search with the existing DA Block Collection structure

import { decorateIcons } from '../../scripts/aem.js';

// Coveo configuration
const COVEO_CONFIG = {
  organizationId: 'searchuisamples',
  searchHub: 'default',
  pipeline: 'default',
  accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457'
};

const searchEndpoint = `https://${COVEO_CONFIG.organizationId}.org.coveo.com/rest/search/v2`;

// Enhanced search functionality with Coveo integration
async function performCoveoSearch(query, options = {}) {
  if (!query?.trim()) return null;

  const searchRequest = {
    q: query,
    numberOfResults: options.numberOfResults || 10,
    firstResult: options.firstResult || 0,
    searchHub: COVEO_CONFIG.searchHub,
    pipeline: COVEO_CONFIG.pipeline,
    enableDidYouMean: true,
    enableQuerySyntax: false,
    facets: [
      { field: 'filetype', numberOfValues: 8 },
      { field: 'author', numberOfValues: 6 },
      { field: 'source', numberOfValues: 5 }
    ],
    // Apply filters if provided
    aq: options.filters ? buildAdvancedQuery(options.filters) : ''
  };

  try {
    const response = await fetch(searchEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${COVEO_CONFIG.accessToken}`
      },
      body: JSON.stringify(searchRequest)
    });

    if (!response.ok) {
      throw new Error(`Coveo search failed: ${response.status}`);
    }

    const results = await response.json();
    
    // Track search analytics
    await trackSearchEvent(query, results);
    
    return results;
  } catch (error) {
    console.error('Coveo search error:', error);
    throw error;
  }
}

// Query suggestions using Coveo
async function getCoveoSuggestions(partialQuery) {
  if (!partialQuery || partialQuery.length < 2) return [];

  try {
    const suggestEndpoint = `https://${COVEO_CONFIG.organizationId}.org.coveo.com/rest/search/v2/querySuggest`;
    
    const response = await fetch(suggestEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${COVEO_CONFIG.accessToken}`
      },
      body: JSON.stringify({
        q: partialQuery,
        count: 5,
        searchHub: COVEO_CONFIG.searchHub,
        pipeline: COVEO_CONFIG.pipeline
      })
    });

    if (!response.ok) return [];

    const suggestions = await response.json();
    return suggestions.completions || [];
  } catch (error) {
    console.error('Suggestions error:', error);
    return [];
  }
}

// Utility functions
function buildAdvancedQuery(filters) {
  const conditions = [];
  Object.entries(filters).forEach(([field, value]) => {
    if (value) {
      conditions.push(`@${field}=="${value}"`);
    }
  });
  return conditions.join(' AND ');
}

function highlightSearchTerms(text, phrases) {
  if (!text || !phrases) return text;
  
  let highlighted = text;
  Object.keys(phrases).forEach(phrase => {
    const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
    highlighted = highlighted.replace(regex, `<mark>${phrase}</mark>`);
  });
  
  return highlighted;
}

async function trackSearchEvent(query, results) {
  try {
    const analyticsEndpoint = `https://${COVEO_CONFIG.organizationId}.org.coveo.com/rest/ua/v15/analytics/search`;
    
    await fetch(analyticsEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${COVEO_CONFIG.accessToken}`
      },
      body: JSON.stringify({
        searchQueryUid: results.searchUid,
        queryText: query,
        responseTime: results.duration,
        numberOfResults: results.totalCount,
        searchHub: COVEO_CONFIG.searchHub
      })
    });
  } catch (error) {
    console.error('Analytics tracking failed:', error);
  }
}

async function trackClickEvent(clickUri, resultIndex, searchUid) {
  try {
    const analyticsEndpoint = `https://${COVEO_CONFIG.organizationId}.org.coveo.com/rest/ua/v15/analytics/click`;
    
    await fetch(analyticsEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${COVEO_CONFIG.accessToken}`
      },
      body: JSON.stringify({
        documentUri: clickUri,
        documentPosition: resultIndex,
        searchQueryUid: searchUid
      })
    });
  } catch (error) {
    console.error('Click tracking failed:', error);
  }
}

// Enhanced search results display
function createCoveoResultItem(result, index, phrases, searchUid) {
  const title = highlightSearchTerms(result.title, phrases);
  const excerpt = highlightSearchTerms(result.excerpt || result.firstSentences || '', phrases);
  
  const resultItem = document.createElement('div');
  resultItem.className = 'search-result-item';
  resultItem.setAttribute('data-index', index);
  
  resultItem.innerHTML = `
    <div class="result-header">
      <h3 class="result-title">${title}</h3>
      <div class="result-url">${result.printableUri}</div>
    </div>
    <div class="result-content">
      <p class="result-excerpt">${excerpt}</p>
      <div class="result-meta">
        <span class="result-score">Relevance: ${result.percentScore.toFixed(1)}%</span>
        ${result.raw.filetype ? `<span class="result-type">${result.raw.filetype.toUpperCase()}</span>` : ''}
        ${result.raw.author ? `<span class="result-author">By: ${result.raw.author}</span>` : ''}
        ${result.raw.date ? `<span class="result-date">${new Date(result.raw.date).toLocaleDateString()}</span>` : ''}
      </div>
    </div>
  `;

  // Add click handler with analytics tracking
  resultItem.addEventListener('click', async () => {
    await trackClickEvent(result.clickUri, index, searchUid);
    window.open(result.clickUri, '_blank');
  });

  return resultItem;
}

// Enhanced facets display
function createFacetsSection(facets, onFacetClick) {
  if (!facets || facets.length === 0) return null;

  const facetsContainer = document.createElement('div');
  facetsContainer.className = 'search-facets';

  const facetsTitle = document.createElement('h4');
  facetsTitle.textContent = 'Refine Results';
  facetsContainer.appendChild(facetsTitle);

  facets.forEach(facet => {
    const facetGroup = document.createElement('div');
    facetGroup.className = 'facet-group';

    const facetTitle = document.createElement('h5');
    facetTitle.className = 'facet-title';
    facetTitle.textContent = facet.field.replace('@', '').charAt(0).toUpperCase() + 
                            facet.field.replace('@', '').slice(1);
    facetGroup.appendChild(facetTitle);

    const facetValues = document.createElement('div');
    facetValues.className = 'facet-values';

    facet.values.forEach(value => {
      const facetValue = document.createElement('div');
      facetValue.className = 'facet-value';
      facetValue.innerHTML = `
        <span class="facet-label">${value.value}</span>
        <span class="facet-count">(${value.numberOfResults})</span>
      `;
      
      facetValue.addEventListener('click', () => {
        onFacetClick(facet.field, value.value);
      });

      facetValues.appendChild(facetValue);
    });

    facetGroup.appendChild(facetValues);
    facetsContainer.appendChild(facetGroup);
  });

  return facetsContainer;
}

// Enhanced suggestions display
async function showSearchSuggestions(input, suggestionsContainer) {
  const query = input.value.trim();
  
  if (query.length < 2) {
    suggestionsContainer.style.display = 'none';
    return;
  }

  try {
    const suggestions = await getCoveoSuggestions(query);
    
    if (suggestions.length === 0) {
      suggestionsContainer.style.display = 'none';
      return;
    }

    suggestionsContainer.innerHTML = '';
    suggestions.forEach(suggestion => {
      const suggestionItem = document.createElement('div');
      suggestionItem.className = 'suggestion-item';
      suggestionItem.innerHTML = suggestion.highlighted;
      
      suggestionItem.addEventListener('click', () => {
        input.value = suggestion.expression;
        suggestionsContainer.style.display = 'none';
        
        // Trigger search
        const searchEvent = new CustomEvent('search', { 
          detail: { query: suggestion.expression } 
        });
        input.dispatchEvent(searchEvent);
      });

      suggestionsContainer.appendChild(suggestionItem);
    });

    suggestionsContainer.style.display = 'block';
  } catch (error) {
    console.error('Error showing suggestions:', error);
    suggestionsContainer.style.display = 'none';
  }
}

// Main decorate function - integrates with existing DA block structure
export default function decorate(block) {
  // Read configuration from block content (DA authoring)
  const config = {};
  const rows = [...block.children];
  
  // Parse configuration table if present
  rows.forEach(row => {
    const cells = [...row.children];
    if (cells.length >= 2) {
      const key = cells[0].textContent.trim().toLowerCase().replace(/\s+/g, '');
      const value = cells[1].textContent.trim();
      config[key] = value;
    }
  });

  // Extract configuration
  const defaultQuery = config.defaultquery || '';
  const resultsPerPage = parseInt(config.resultsperpage) || 10;
  const enableFacets = config.showfacets !== 'false';

  // Clear block and create enhanced search interface
  block.innerHTML = '';
  block.className = 'search-block coveo-enhanced';

  // Create search container with enhanced structure
  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';

  // Search input section
  const searchInputSection = document.createElement('div');
  searchInputSection.className = 'search-input-section';

  const searchForm = document.createElement('form');
  searchForm.className = 'search-form';

  const inputWrapper = document.createElement('div');
  inputWrapper.className = 'search-input-wrapper';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.className = 'search-input';
  searchInput.placeholder = 'Search for content...';
  searchInput.value = defaultQuery;
  
  const searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchButton.className = 'search-button';
  searchButton.innerHTML = '<span class="icon icon-search"></span>';

  const suggestionsContainer = document.createElement('div');
  suggestionsContainer.className = 'search-suggestions';
  suggestionsContainer.style.display = 'none';

  inputWrapper.appendChild(searchInput);
  inputWrapper.appendChild(suggestionsContainer);
  searchForm.appendChild(inputWrapper);
  searchForm.appendChild(searchButton);
  searchInputSection.appendChild(searchForm);

  // Results section
  const resultsSection = document.createElement('div');
  resultsSection.className = 'search-results-section';

  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'search-loading';
  loadingIndicator.style.display = 'none';
  loadingIndicator.innerHTML = '<div class="loading-spinner">Searching...</div>';

  const resultsContainer = document.createElement('div');
  resultsContainer.className = 'search-results';

  const facetsContainer = document.createElement('div');
  facetsContainer.className = 'search-facets-container';

  resultsSection.appendChild(loadingIndicator);
  resultsSection.appendChild(facetsContainer);
  resultsSection.appendChild(resultsContainer);

  // Assemble the complete interface
  searchContainer.appendChild(searchInputSection);
  searchContainer.appendChild(resultsSection);
  block.appendChild(searchContainer);

  // Decorate icons (DA block collection pattern)
  decorateIcons(searchButton);

  // State management
  let currentSearchUid = null;
  let currentFilters = {};

  // Search functionality
  async function executeSearch(query, options = {}) {
    if (!query?.trim()) return;

    // Show loading
    loadingIndicator.style.display = 'block';
    resultsContainer.innerHTML = '';
    facetsContainer.innerHTML = '';

    try {
      const searchOptions = {
        numberOfResults: resultsPerPage,
        firstResult: options.firstResult || 0,
        filters: currentFilters
      };

      const results = await performCoveoSearch(query, searchOptions);
      currentSearchUid = results.searchUid;

      // Hide loading
      loadingIndicator.style.display = 'none';

      // Display results
      if (!results.results || results.results.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">No results found</div>';
      } else {
        // Results header
        const resultsHeader = document.createElement('div');
        resultsHeader.className = 'results-header';
        resultsHeader.innerHTML = `<h3>Found ${results.totalCount.toLocaleString()} results</h3>`;
        resultsContainer.appendChild(resultsHeader);

        // Results list
        const resultsList = document.createElement('div');
        resultsList.className = 'results-list';

        results.results.forEach((result, index) => {
          const resultItem = createCoveoResultItem(result, index, results.phrasesToHighlight, results.searchUid);
          resultsList.appendChild(resultItem);
        });

        resultsContainer.appendChild(resultsList);

        // Display facets if enabled
        if (enableFacets && results.facets) {
          const facetsSection = createFacetsSection(results.facets, handleFacetClick);
          if (facetsSection) {
            facetsContainer.appendChild(facetsSection);
          }
        }
      }

      // Show query corrections if available
      if (results.queryCorrections && results.queryCorrections.length > 0) {
        const correction = results.queryCorrections[0];
        const correctionDiv = document.createElement('div');
        correctionDiv.className = 'query-correction';
        correctionDiv.innerHTML = `
          Did you mean: <a href="#" class="correction-link">${correction.correctedQuery}</a>?
        `;
        
        correctionDiv.querySelector('.correction-link').addEventListener('click', (e) => {
          e.preventDefault();
          searchInput.value = correction.correctedQuery;
          executeSearch(correction.correctedQuery);
        });

        resultsContainer.insertBefore(correctionDiv, resultsContainer.firstChild);
      }

    } catch (error) {
      loadingIndicator.style.display = 'none';
      resultsContainer.innerHTML = '<div class="search-error">Search failed. Please try again.</div>';
      console.error('Search execution error:', error);
    }
  }

  // Facet click handler
  function handleFacetClick(field, value) {
    currentFilters[field.replace('@', '')] = value;
    executeSearch(searchInput.value);
  }

  // Event listeners
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentFilters = {}; // Reset filters on new search
    executeSearch(searchInput.value);
  });

  // Debounced suggestions
  let suggestionTimeout;
  searchInput.addEventListener('input', () => {
    clearTimeout(suggestionTimeout);
    suggestionTimeout = setTimeout(() => {
      showSearchSuggestions(searchInput, suggestionsContainer);
    }, 300);
  });

  // Custom search event listener
  searchInput.addEventListener('search', (e) => {
    if (e.detail?.query) {
      executeSearch(e.detail.query);
    }
  });

  // Hide suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInputSection.contains(e.target)) {
      suggestionsContainer.style.display = 'none';
    }
  });

  // Load default search if specified
  if (defaultQuery) {
    executeSearch(defaultQuery);
  }
}

// Additional DA Block Collection compatibility
export { performCoveoSearch, getCoveoSuggestions };
