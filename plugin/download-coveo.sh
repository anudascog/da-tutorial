#!/bin/bash

# Coveo Headless SDK Download Script (v3.27.4) for AEM Edge Delivery Services
# Place this file in: /c/aem-live/da-tutorial-main/plugin/download-coveo.sh
# Downloads to: /c/aem-live/da-tutorial-main/scripts/coveo/

set -e  # Exit on any error

# Configuration
DOWNLOAD_DIR="../scripts/coveo"
HEADLESS_URL="https://static.cloud.coveo.com/headless/v3.27.4/headless.esm.js"
HEADLESS_MAP_URL="https://static.cloud.coveo.com/headless/v3.27.4/headless.esm.js.map"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    if ! command_exists curl && ! command_exists wget; then
        print_error "Neither curl nor wget is available. Please install one of them."
        exit 1
    fi
    
    print_success "Prerequisites check completed."
}

# Create directory structure
create_directories() {
    print_status "Creating directory structure..."
    
    # Create scripts/coveo directory from plugin folder (goes up one level first)
    mkdir -p "$DOWNLOAD_DIR"
    
    print_success "Directory structure created at: $(realpath "$DOWNLOAD_DIR" 2>/dev/null || echo "$DOWNLOAD_DIR")"
}

# Download Coveo headless SDK
download_coveo_sdk() {
    print_status "Downloading Coveo Headless SDK v3.27.4..."
    
    print_status "CDN URLs:"
    print_status "  Main: $HEADLESS_URL"
    print_status "  Source Map: $HEADLESS_MAP_URL"
    
    local download_cmd
    local headless_file="$DOWNLOAD_DIR/headless.esm.js"
    local map_file="$DOWNLOAD_DIR/headless.esm.js.map"
    
    # Choose download command
    if command_exists curl; then
        download_cmd="curl -L -o"
        print_status "Using curl for download..."
    elif command_exists wget; then
        download_cmd="wget -O"
        print_status "Using wget for download..."
    fi
    
    # Download main headless SDK file
    print_status "Downloading headless.esm.js..."
    if $download_cmd "$headless_file" "$HEADLESS_URL"; then
        print_success "Downloaded headless.esm.js (version 3.27.4)"
    else
        print_error "Failed to download headless.esm.js from $HEADLESS_URL"
        print_error "Please check your internet connection and try again."
        exit 1
    fi
    
    # Download source map (optional but recommended for development)
    print_status "Downloading source map..."
    if $download_cmd "$map_file" "$HEADLESS_MAP_URL"; then
        print_success "Downloaded headless.esm.js.map"
    else
        print_warning "Failed to download source map (not critical for production)"
    fi
}

# Verify downloads
verify_downloads() {
    print_status "Verifying downloads..."
    
    local headless_file="$DOWNLOAD_DIR/headless.esm.js"
    
    if [[ -f "$headless_file" ]]; then
        local file_size=$(stat -f%z "$headless_file" 2>/dev/null || stat -c%s "$headless_file" 2>/dev/null || echo "0")
        if [[ "$file_size" -gt 10000 ]]; then
            print_success "Coveo Headless SDK downloaded successfully"
            print_success "  File: $(realpath "$headless_file" 2>/dev/null || echo "$headless_file")"
            print_success "  Size: ${file_size} bytes"
            print_success "  Version: 3.27.4"
        else
            print_error "Downloaded file seems too small (${file_size} bytes)"
            exit 1
        fi
    else
        print_error "headless.esm.js not found at $headless_file"
        exit 1
    fi
}

# Create integration documentation
create_documentation() {
    print_status "Creating integration documentation..."
    
    cat > "$DOWNLOAD_DIR/COVEO_INTEGRATION_GUIDE.md" << 'EOF'
# Coveo Integration Guide for AEM Edge Delivery Services

## Overview
This guide provides comprehensive instructions for integrating Coveo Headless SDK v3.27.4 into your AEM Edge Delivery Services project.

## Project Structure
```
/c/aem-live/da-tutorial-main/
├── plugin/
│   └── download-coveo.sh              # Download script
├── scripts/
│   └── coveo/
│       ├── headless.esm.js            # Coveo Headless SDK v3.27.4
│       ├── headless.esm.js.map        # Source map for debugging
│       └── COVEO_INTEGRATION_GUIDE.md # This documentation
```

## Getting Started

### 1. Basic Integration
Import the Coveo Headless SDK in your JavaScript files:

```javascript
// Import the SDK
import * as coveo from '/scripts/coveo/headless.esm.js';

// Initialize search engine
const { buildSearchEngine } = coveo;
const engine = buildSearchEngine({
  configuration: {
    organizationId: 'YOUR_COVEO_ORG_ID',
    accessToken: 'YOUR_COVEO_ACCESS_TOKEN',
    // Optional: Add environment if not production
    // environment: 'development'
  }
});
```

### 2. Basic Search Implementation

```javascript
// Import necessary components
import { 
  buildSearchEngine,
  buildSearchBox,
  buildResultList,
  buildPager
} from '/scripts/coveo/headless.esm.js';

// Initialize engine
const engine = buildSearchEngine({
  configuration: {
    organizationId: 'YOUR_COVEO_ORG_ID',
    accessToken: 'YOUR_COVEO_ACCESS_TOKEN',
  }
});

// Build search components
const searchBox = buildSearchBox(engine);
const resultList = buildResultList(engine);
const pager = buildPager(engine);

// Subscribe to state changes
searchBox.subscribe(() => renderSearchBox());
resultList.subscribe(() => renderResults());
pager.subscribe(() => renderPager());

// Example render functions
function renderSearchBox() {
  const state = searchBox.state;
  // Update your search input UI
  document.querySelector('#search-input').value = state.value;
}

function renderResults() {
  const state = resultList.state;
  const resultsContainer = document.querySelector('#search-results');
  
  resultsContainer.innerHTML = state.results.map(result => `
    <div class="search-result">
      <h3><a href="${result.clickUri}">${result.title}</a></h3>
      <p>${result.excerpt}</p>
      <span class="result-uri">${result.uri}</span>
    </div>
  `).join('');
}

function renderPager() {
  const state = pager.state;
  // Update pagination UI
  console.log('Current page:', state.currentPage);
  console.log('Total pages:', state.maxPage);
}

// Execute search
function performSearch(query) {
  searchBox.updateText(query);
  searchBox.submit();
}
```

### 3. AEM Edge Delivery Block Integration

Create a Coveo search block in your AEM project:

#### Create Block Directory Structure
```
blocks/
└── coveo-search/
    ├── coveo-search.js
    ├── coveo-search.css
```

#### JavaScript Block Implementation (`blocks/coveo-search/coveo-search.js`)
```javascript
import { 
  buildSearchEngine,
  buildSearchBox,
  buildResultList 
} from '/scripts/coveo/headless.esm.js';

export default async function decorate(block) {
  const orgId = block.dataset.orgId || 'YOUR_DEFAULT_ORG_ID';
  const accessToken = block.dataset.accessToken || 'YOUR_DEFAULT_ACCESS_TOKEN';
  
  try {
    // Initialize Coveo engine
    const engine = buildSearchEngine({
      configuration: {
        organizationId: orgId,
        accessToken: accessToken,
      }
    });
    
    // Build components
    const searchBox = buildSearchBox(engine);
    const resultList = buildResultList(engine);
    
    // Create UI
    const searchInterface = createSearchInterface();
    block.innerHTML = '';
    block.appendChild(searchInterface);
    
    // Set up event listeners and state subscriptions
    setupSearchInterface(searchBox, resultList);
    
  } catch (error) {
    console.error('Error initializing Coveo search:', error);
    block.innerHTML = '<p class="error">Error loading search functionality</p>';
  }
}

function createSearchInterface() {
  const container = document.createElement('div');
  container.className = 'coveo-search-container';
  
  container.innerHTML = `
    <div class="search-box">
      <input type="text" id="coveo-search-input" placeholder="Search..." class="search-input">
      <button id="coveo-search-button" class="search-button">Search</button>
    </div>
    <div class="search-loading" id="search-loading" style="display: none;">
      Searching...
    </div>
    <div class="search-results" id="coveo-search-results"></div>
    <div class="search-pagination" id="coveo-search-pagination"></div>
  `;
  
  return container;
}

function setupSearchInterface(searchBox, resultList) {
  const input = document.getElementById('coveo-search-input');
  const button = document.getElementById('coveo-search-button');
  const results = document.getElementById('coveo-search-results');
  const loading = document.getElementById('search-loading');
  
  // Handle search submission
  function performSearch() {
    const query = input.value.trim();
    if (query) {
      loading.style.display = 'block';
      searchBox.updateText(query);
      searchBox.submit();
    }
  }
  
  // Event listeners
  button.addEventListener('click', performSearch);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });
  
  // State subscriptions
  resultList.subscribe(() => {
    loading.style.display = 'none';
    const state = resultList.state;
    
    if (state.results.length === 0) {
      results.innerHTML = '<p class="no-results">No results found</p>';
    } else {
      results.innerHTML = state.results.map(result => `
        <article class="search-result">
          <h3><a href="${result.clickUri}" target="_blank">${result.title}</a></h3>
          <p class="excerpt">${result.excerpt || ''}</p>
          <span class="result-source">${result.source || result.uri}</span>
        </article>
      `).join('');
    }
  });
}
```

#### CSS Styles (`blocks/coveo-search/coveo-search.css`)
```css
.coveo-search-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.search-box {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  align-items: center;
}

.search-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.search-button {
  padding: 12px 24px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.search-button:hover {
  background-color: #0052a3;
}

.search-button:active {
  transform: translateY(1px);
}

.search-loading {
  text-align: center;
  padding: 20px;
  color: #666;
  font-style: italic;
}

.search-results {
  min-height: 200px;
}

.search-result {
  padding: 20px;
  border-bottom: 1px solid #e1e5e9;
  transition: background-color 0.2s ease;
}

.search-result:hover {
  background-color: #f8f9fa;
}

.search-result h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
}

.search-result h3 a {
  color: #0066cc;
  text-decoration: none;
}

.search-result h3 a:hover {
  text-decoration: underline;
}

.excerpt {
  margin: 8px 0;
  color: #555;
  line-height: 1.5;
}

.result-source {
  font-size: 14px;
  color: #28a745;
  font-weight: 500;
}

.no-results {
  text-align: center;
  padding: 40px 20px;
  color: #666;
  font-style: italic;
}

.error {
  text-align: center;
  padding: 20px;
  color: #dc3545;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 6px;
}

/* Responsive design */
@media (max-width: 768px) {
  .coveo-search-container {
    padding: 16px;
  }
  
  .search-box {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-button {
    margin-top: 8px;
  }
}
```

### 4. Usage in AEM Documents

Add the following to your AEM document to use the Coveo search block:

```
| coveo-search |
|--------------|
| data-org-id: your-actual-org-id |
| data-access-token: your-actual-access-token |
```

## Configuration

### Required Coveo Settings
1. **Organization ID**: Your unique Coveo organization identifier
2. **Access Token**: API token with search permissions
3. **CORS Configuration**: Ensure your domain is allowed in Coveo admin panel

### Environment-Specific Configuration

#### Development
```javascript
const engine = buildSearchEngine({
  configuration: {
    organizationId: 'YOUR_ORG_ID',
    accessToken: 'YOUR_DEV_ACCESS_TOKEN',
    environment: 'development'
  }
});
```

#### Production
```javascript
const engine = buildSearchEngine({
  configuration: {
    organizationId: 'YOUR_ORG_ID',
    accessToken: 'YOUR_PROD_ACCESS_TOKEN'
    // environment defaults to 'production'
  }
});
```

## Advanced Features

### 1. Faceted Search
```javascript
import { buildFacet } from '/scripts/coveo/headless.esm.js';

const authorFacet = buildFacet(engine, {
  options: {
    field: 'author'
  }
});

// Subscribe to facet state changes
authorFacet.subscribe(() => {
  const state = authorFacet.state;
  renderFacet(state);
});
```

### 2. Search Analytics
```javascript
import { buildSearchStatus } from '/scripts/coveo/headless.esm.js';

const searchStatus = buildSearchStatus(engine);
searchStatus.subscribe(() => {
  const state = searchStatus.state;
  console.log('Search duration:', state.duration);
  console.log('Total results:', state.totalNumberOfResults);
});
```

### 3. Query Suggestions
```javascript
import { buildQuerySuggest } from '/scripts/coveo/headless.esm.js';

const querySuggest = buildQuerySuggest(engine);

querySuggest.subscribe(() => {
  const state = querySuggest.state;
  renderSuggestions(state.completions);
});
```

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure your domain is added to allowed origins in Coveo admin
2. **Authentication Errors**: Verify your organization ID and access token
3. **No Results**: Check if your content is properly indexed in Coveo

### Debug Mode
Enable debug logging:

```javascript
const engine = buildSearchEngine({
  configuration: {
    organizationId: 'YOUR_ORG_ID',
    accessToken: 'YOUR_ACCESS_TOKEN',
  },
  loggerOptions: {
    level: 'debug'
  }
});
```

## Performance Optimization

### 1. Lazy Loading
```javascript
// Dynamically import Coveo only when needed
async function initializeSearch() {
  const coveo = await import('/scripts/coveo/headless.esm.js');
  // Initialize search components
}
```

### 2. Debounced Search
```javascript
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedSearch = debounce((query) => {
  searchBox.updateText(query);
  searchBox.submit();
}, 300);
```

## Resources

- [Coveo Headless SDK Documentation](https://docs.coveo.com/en/headless/)
- [AEM Edge Delivery Services Documentation](https://www.adobe.com/experience-manager/edge-delivery-services.html)
- [Coveo Platform Documentation](https://docs.coveo.com/)

## Support

For issues related to:
- **Coveo Headless SDK**: Check [Coveo Community](https://community.coveo.com/)
- **AEM Edge Delivery**: Consult Adobe documentation
- **This Integration**: Review this guide and verify configuration

---
*Generated by Coveo Integration Script v3.27.4*
EOF

    print_success "Integration documentation created at: $(realpath "$DOWNLOAD_DIR/COVEO_INTEGRATION_GUIDE.md" 2>/dev/null || echo "$DOWNLOAD_DIR/COVEO_INTEGRATION_GUIDE.md")"
}

# Main execution
main() {
    echo "======================================================="
    echo "  Coveo Headless SDK Download (v3.27.4)"
    echo "  Target: /c/aem-live/da-tutorial-main/scripts/coveo/"
    echo "======================================================="
    echo
    
    check_prerequisites
    create_directories
    download_coveo_sdk
    verify_downloads
    create_documentation
    
    echo
    print_success "Coveo Headless SDK v3.27.4 download and documentation completed!"
    echo
    echo "Downloaded files:"
    echo "  - /c/aem-live/da-tutorial-main/scripts/coveo/headless.esm.js (v3.27.4)"
    echo "  - /c/aem-live/da-tutorial-main/scripts/coveo/headless.esm.js.map (source map)"
    echo
    echo "Documentation created:"
    echo "  - /c/aem-live/da-tutorial-main/scripts/coveo/COVEO_INTEGRATION_GUIDE.md (comprehensive guide)"
    echo
    echo "Quick start - Import in your AEM Edge Delivery project:"
    echo "  import * as coveo from '/scripts/coveo/headless.esm.js';"
    echo
    echo "Example usage:"
    echo "  const { buildSearchEngine } = coveo;"
    echo "  const engine = buildSearchEngine({"
    echo "    configuration: {"
    echo "      organizationId: 'YOUR_ORG_ID',"
    echo "      accessToken: 'YOUR_ACCESS_TOKEN',"
    echo "    }"
    echo "  });"
    echo
    echo "📖 For detailed integration steps, see scripts/coveo/COVEO_INTEGRATION_GUIDE.md"
    echo
}

# Run main function
main "$@"