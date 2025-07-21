#!/bin/bash

#################################################################
# Coveo Headless Core Libraries Download Script for AEM Edge Delivery Services
# 
# Description: Downloads and sets up Coveo Headless Core libraries only
# Location: Place this script in the 'plugin/' folder of your EDS project
# Author: AEM EDS Integration Team
# Version: 1.0.0
# Usage: ./download-coveo.sh [options]
#
# Expected Project Structure:
#   my-eds-project/
#   ├── plugin/
#   │   └── download-coveo.sh    ← This script
#   ├── blocks/                  ← Will create search-box here
#   ├── scripts/                 ← Will create coveo folder here
#   ├── fstab.yaml              ← EDS project marker
#   └── head.html               ← EDS project marker
#################################################################

set -e  # Exit on any error

# Configuration
SCRIPT_VERSION="1.0.0"
DEFAULT_VERSION="latest"
DEFAULT_CDN="unpkg"
DEFAULT_MODE="core"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Global variables
COVEO_VERSION=""
CDN_SOURCE=""
BASE_DIR=""
FORCE_DOWNLOAD=false
VERIFY_DOWNLOADS=true
CREATE_CONFIG=true
INCLUDE_TYPES=false
QUIET=false
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

#################################################################
# Helper Functions
#################################################################

detect_project_root() {
    local current_dir="$SCRIPT_DIR"
    local project_root=""
    
    # Check if we're in a plugin directory
    if [[ "$(basename "$current_dir")" == "plugin" ]]; then
        # We're in a plugin folder, so project root is parent directory
        project_root="$(dirname "$current_dir")"
        log_info "Detected script running from plugin directory"
        log_info "Project root: $project_root"
    else
        # We're in project root
        project_root="$current_dir"
    fi
    
    # Verify this looks like an EDS project
    if [[ -f "$project_root/fstab.yaml" ]] || [[ -f "$project_root/head.html" ]] || [[ -d "$project_root/blocks" ]]; then
        log_success "AEM EDS project detected at: $project_root"
        echo "$project_root"
    else
        log_warning "This doesn't appear to be an AEM EDS project root"
        log_info "Expected files: fstab.yaml, head.html, or blocks/ directory"
        echo "$project_root"
    fi
}

print_header() {
    echo -e "${CYAN}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║          Coveo Headless Core Libraries Downloader v${SCRIPT_VERSION}          ║"
    echo "║                 for AEM Edge Delivery Services                ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

print_usage() {
    cat << EOF
Usage: $0 [OPTIONS]

Download Coveo Headless Core Libraries for AEM Edge Delivery Services
Script should be placed in 'plugin/' folder within your EDS project root.

OPTIONS:
    -v, --version VERSION    Coveo Headless version (default: latest)
    -c, --cdn CDN           CDN source: unpkg|jsdelivr (default: unpkg)
    -d, --dir DIRECTORY     Override auto-detected project root directory
    -f, --force             Force re-download existing files
    --no-verify             Skip download verification
    --no-config             Skip creating configuration files
    --include-types         Include TypeScript definition files
    -q, --quiet             Quiet mode (minimal output)
    -h, --help              Show this help message

CORE LIBRARIES INCLUDED:
    ✓ headless.esm.js       Core search functionality (~600KB)
    ✓ headless.d.ts         TypeScript definitions (with --include-types)

EXPECTED PROJECT STRUCTURE:
    my-eds-project/         ← Project root (auto-detected)
    ├── plugin/
    │   └── download-coveo.sh   ← This script
    ├── blocks/             ← Will create search-box here
    ├── scripts/            ← Will create coveo folder here
    ├── fstab.yaml          ← EDS project marker
    └── head.html           ← EDS project marker

EXAMPLES:
    $0                              # Download core libraries (auto-detect project root)
    $0 --include-types              # Include TypeScript definitions
    $0 -v 3.25.0 --include-types   # Specific version with types
    $0 -d /custom/path              # Override project root detection

NOTES:
    • Script auto-detects AEM EDS project root from plugin directory
    • Creates files relative to project root, not plugin directory
    • Use -d option to override auto-detection if needed

EOF
}

log() {
    if [[ "$QUIET" == false ]]; then
        echo -e "$1"
    fi
}

log_info() {
    log "${BLUE}[INFO]${NC} $1"
}

log_success() {
    log "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    log "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
}

#################################################################
# Download Functions
#################################################################

get_cdn_base_url() {
    local version=$1
    case "$CDN_SOURCE" in
        "unpkg")
            echo "https://unpkg.com/@coveo/headless@${version}"
            ;;
        "jsdelivr")
            echo "https://cdn.jsdelivr.net/npm/@coveo/headless@${version}"
            ;;
        *)
            log_error "Unknown CDN source: $CDN_SOURCE"
            exit 1
            ;;
    esac
}

check_dependencies() {
    local missing_deps=()
    
    # Check required commands
    for cmd in curl; do
        if ! command -v "$cmd" &> /dev/null; then
            missing_deps+=("$cmd")
        fi
    done
    
    if [[ ${#missing_deps[@]} -gt 0 ]]; then
        log_error "Missing required dependencies: ${missing_deps[*]}"
        log_info "Please install missing dependencies:"
        for dep in "${missing_deps[@]}"; do
            case "$dep" in
                "curl") echo "  - Ubuntu/Debian: sudo apt-get install curl" ;;
            esac
        done
        exit 1
    fi
}

get_latest_version() {
    log_info "Fetching latest Coveo Headless version..."
    
    local latest_version
    latest_version=$(curl -s "https://registry.npmjs.org/@coveo/headless/latest" | grep -o '"version":"[^"]*"' | cut -d'"' -f4)
    
    if [[ -z "$latest_version" || "$latest_version" == "null" ]]; then
        log_warning "Could not fetch latest version, using fallback"
        echo "3.25.0"
    else
        echo "$latest_version"
    fi
}

verify_version_exists() {
    local version=$1
    local base_url
    base_url=$(get_cdn_base_url "$version")
    
    log_info "Verifying version $version exists..."
    
    if curl -s --head "$base_url/package.json" | head -n 1 | grep -q "200 OK"; then
        log_success "Version $version verified"
        return 0
    else
        log_error "Version $version not found"
        return 1
    fi
}

create_directory_structure() {
    local base_dir=$1
    
    log_info "Creating directory structure..."
    
    # Create main directories
    mkdir -p "$base_dir/scripts/coveo/libs"
    mkdir -p "$base_dir/scripts/coveo/engines"
    mkdir -p "$base_dir/scripts/coveo/controllers"
    mkdir -p "$base_dir/scripts/coveo/config"
    mkdir -p "$base_dir/blocks"
    mkdir -p "$base_dir/styles"
    
    log_success "Directory structure created"
}

download_file() {
    local url=$1
    local output_path=$2
    local description=$3
    
    if [[ -f "$output_path" && "$FORCE_DOWNLOAD" == false ]]; then
        log_warning "$description already exists, skipping (use -f to force)"
        return 0
    fi
    
    log_info "Downloading $description..."
    
    if curl -L --fail --silent --show-error -o "$output_path" "$url"; then
        local file_size
        if command -v stat >/dev/null 2>&1; then
            if stat -c%s "$output_path" >/dev/null 2>&1; then
                file_size=$(stat -c%s "$output_path")
            elif stat -f%z "$output_path" >/dev/null 2>&1; then
                file_size=$(stat -f%z "$output_path")
            else
                file_size="unknown"
            fi
        else
            file_size="unknown"
        fi
        log_success "$description downloaded (${file_size} bytes)"
        return 0
    else
        log_error "Failed to download $description from $url"
        rm -f "$output_path"
        return 1
    fi
}

verify_file_integrity() {
    local file_path=$1
    local description=$2
    
    if [[ "$VERIFY_DOWNLOADS" == false ]]; then
        return 0
    fi
    
    # Check if file exists and has content
    if [[ ! -f "$file_path" || ! -s "$file_path" ]]; then
        log_error "$description verification failed: file missing or empty"
        return 1
    fi
    
    log_success "$description verified"
    return 0
}

#################################################################
# File Definitions
#################################################################

get_core_files() {
    cat << 'EOF'
headless.esm.js|dist/headless.esm.js|Core Headless Library (ES Module)
EOF
}

get_core_files_with_types() {
    cat << 'EOF'
headless.esm.js|dist/headless.esm.js|Core Headless Library (ES Module)
headless.d.ts|dist/definitions/headless.d.ts|TypeScript Definitions
EOF
}

download_files() {
    local base_dir=$1
    local version=$2
    
    local base_url
    base_url=$(get_cdn_base_url "$version")
    
    local files_to_download=""
    
    if [[ "$INCLUDE_TYPES" == true ]]; then
        files_to_download=$(get_core_files_with_types)
        log_info "Downloading core libraries with TypeScript definitions"
    else
        files_to_download=$(get_core_files)
        log_info "Downloading core libraries only"
    fi
    
    local total_files
    total_files=$(echo "$files_to_download" | wc -l)
    local current_file=0
    
    log_info "Downloading $total_files files..."
    echo
    
    while IFS='|' read -r filename filepath description; do
        if [[ -n "$filename" ]]; then
            ((current_file++))
            
            local url="$base_url/$filepath"
            local output_path="$base_dir/scripts/coveo/libs/$filename"
            
            printf "[%2d/%2d] " "$current_file" "$total_files"
            
            if download_file "$url" "$output_path" "$description"; then
                verify_file_integrity "$output_path" "$description"
            else
                log_error "Failed to download $filename"
                exit 1
            fi
        fi
    done <<< "$files_to_download"
}

#################################################################
# Configuration File Creation
#################################################################

create_config_files() {
    local base_dir=$1
    local version=$2
    
    if [[ "$CREATE_CONFIG" == false ]]; then
        return 0
    fi
    
    log_info "Creating configuration files..."
    
    # Create version tracking file
    cat > "$base_dir/scripts/coveo/config/version.json" << EOF
{
  "version": "$version",
  "downloadDate": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "cdn": "$CDN_SOURCE",
  "type": "core",
  "includeTypes": $INCLUDE_TYPES,
  "files": [
EOF
    
    # Add downloaded files to version.json
    local first=true
    for file in "$base_dir"/scripts/coveo/libs/*.js; do
        if [[ -f "$file" ]]; then
            local basename_file
            basename_file=$(basename "$file")
            if [[ "$first" == true ]]; then
                first=false
            else
                echo "," >> "$base_dir/scripts/coveo/config/version.json"
            fi
            echo -n "    \"$basename_file\"" >> "$base_dir/scripts/coveo/config/version.json"
        fi
    done
    
    cat >> "$base_dir/scripts/coveo/config/version.json" << EOF

  ]
}
EOF
    
    # Create basic Coveo configuration
    cat > "$base_dir/scripts/coveo/config/config.js" << 'EOF'
// Coveo Core Configuration for AEM EDS
export const coveoConfig = {
  // Replace with your actual Coveo organization details
  organizationId: 'YOUR_ORG_ID',
  searchToken: 'YOUR_SEARCH_API_TOKEN',
  
  // Platform settings
  platformUrl: 'https://platform.cloud.coveo.com',
  searchHub: 'default',
  
  // Analytics settings
  analytics: {
    trackingId: 'YOUR_TRACKING_ID',
    enabled: true
  },
  
  // Core features
  features: {
    facets: true,
    sorting: true,
    pagination: true,
    analytics: true,
    querySuggestions: true
  }
};

// Environment-specific configurations
export const getConfig = () => {
  const hostname = window.location.hostname;
  
  if (hostname.includes('localhost') || hostname.includes('hlx.page')) {
    // Development configuration
    return {
      ...coveoConfig,
      // Add development-specific overrides
    };
  } else {
    // Production configuration
    return coveoConfig;
  }
};
EOF
    
    # Create loader utility
    cat > "$base_dir/scripts/coveo/loader.js" << 'EOF'
// Coveo Core Loader for AEM EDS
import { getConfig } from './config/config.js';

class CoveoLoader {
  constructor() {
    this.engine = null;
    this.controllers = new Map();
    this.config = getConfig();
  }

  async loadCoreEngine() {
    if (this.engine) {
      return this.engine;
    }

    const { buildSearchEngine } = await import('./libs/headless.esm.js');
    
    this.engine = buildSearchEngine({
      configuration: {
        organizationId: this.config.organizationId,
        accessToken: this.config.searchToken,
        platformUrl: this.config.platformUrl,
        searchHub: this.config.searchHub,
        analytics: this.config.analytics
      }
    });

    return this.engine;
  }

  async loadController(controllerType) {
    if (this.controllers.has(controllerType)) {
      return this.controllers.get(controllerType);
    }

    const engine = await this.loadCoreEngine();
    
    // Import controller builders from core library
    const coreModule = await import('./libs/headless.esm.js');
    
    let controller;
    switch (controllerType) {
      case 'searchBox':
        controller = coreModule.buildSearchBox(engine);
        break;
      case 'resultList':
        controller = coreModule.buildResultList(engine);
        break;
      case 'facet':
        controller = coreModule.buildFacet(engine);
        break;
      case 'pager':
        controller = coreModule.buildPager(engine);
        break;
      case 'sort':
        controller = coreModule.buildSort(engine);
        break;
      case 'queryError':
        controller = coreModule.buildQueryError(engine);
        break;
      case 'querySummary':
        controller = coreModule.buildQuerySummary(engine);
        break;
      default:
        throw new Error(`Unknown controller type: ${controllerType}`);
    }

    this.controllers.set(controllerType, controller);
    return controller;
  }

  async executeSearch() {
    const engine = await this.loadCoreEngine();
    const { loadSearchActions } = await import('./libs/headless.esm.js');
    const { executeSearch } = loadSearchActions(engine);
    
    engine.dispatch(executeSearch());
  }
}

// Global loader instance
export const coveoLoader = new CoveoLoader();

// Initialize Coveo when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await coveoLoader.loadCoreEngine();
    console.log('Coveo Headless Core initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Coveo Headless:', error);
  }
});
EOF
    
    # Create example block
    mkdir -p "$base_dir/blocks/search-box"
    cat > "$base_dir/blocks/search-box/search-box.js" << 'EOF'
import { coveoLoader } from '../../scripts/coveo/loader.js';

export default async function decorate(block) {
  try {
    // Load search box controller
    const searchBoxController = await coveoLoader.loadController('searchBox');
    
    // Create search interface
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search...';
    input.className = 'search-input';
    
    input.addEventListener('input', (e) => {
      searchBoxController.updateText(e.target.value);
    });
    
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        searchBoxController.submit();
      }
    });
    
    searchContainer.appendChild(input);
    block.innerHTML = '';
    block.appendChild(searchContainer);
    
  } catch (error) {
    console.error('Failed to initialize search box:', error);
    block.innerHTML = '<div class="error">Search unavailable</div>';
  }
}
EOF

    cat > "$base_dir/blocks/search-box/search-box.css" << 'EOF'
.search-container {
  margin: 20px 0;
}

.search-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.error {
  color: #dc3545;
  padding: 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
}
EOF
    
    # Create README
    cat > "$base_dir/scripts/coveo/README.md" << EOF
# Coveo Headless Core Libraries for AEM EDS

## Installation Summary

- **Version**: $version
- **Download Date**: $(date -u +"%Y-%m-%d %H:%M:%S UTC")
- **CDN Source**: $CDN_SOURCE
- **Type**: Core Libraries Only
- **Include Types**: $INCLUDE_TYPES

## Core Files Downloaded

$(ls -la "$base_dir/scripts/coveo/libs/" 2>/dev/null | grep -E '\.(js|ts)$' | awk '{print "- " $9 " (" $5 " bytes)"}' || echo "- Files will be listed after download")

## What's Included

The core library (\`headless.esm.js\`) provides everything needed for basic search:

✅ **Search Engine** - Core search functionality
✅ **Search Box** - Input and query suggestions  
✅ **Results Display** - Search results and interaction
✅ **Faceted Search** - Filters and refinements
✅ **Pagination** - Page navigation controls
✅ **Sorting** - Sort options for results
✅ **Analytics** - Usage tracking and insights

## Quick Start

1. Update configuration in \`config/config.js\` with your Coveo credentials:
   \`\`\`javascript
   organizationId: 'your-org-id',
   searchToken: 'your-api-token'
   \`\`\`

2. Use the loader in your AEM EDS blocks:
   \`\`\`javascript
   import { coveoLoader } from '../../scripts/coveo/loader.js';
   const searchBox = await coveoLoader.loadController('searchBox');
   \`\`\`

3. Review the example search-box block implementation

## Available Controllers

- \`searchBox\` - Search input and suggestions
- \`resultList\` - Display search results  
- \`facet\` - Faceted search filters
- \`pager\` - Pagination controls
- \`sort\` - Sort options
- \`queryError\` - Error handling
- \`querySummary\` - Results summary

## Next Steps

- Configure your Coveo organization credentials
- Customize the search interface blocks
- Add additional controllers as needed
- Test search functionality on your AEM EDS site

## Documentation

- [Coveo Headless Documentation](https://docs.coveo.com/en/headless/latest/)
- [AEM EDS Documentation](https://www.aem.live/docs/)

## File Size Optimization

This core-only approach provides:
- **Small footprint**: ~600KB vs 2.5MB full SDK
- **Fast loading**: Essential functionality only
- **Easy maintenance**: Single library file
- **Full functionality**: Complete search capabilities
EOF
    
    log_success "Configuration files created"
}

#################################################################
# Update Functions
#################################################################

create_update_script() {
    local base_dir=$1
    
    cat > "$base_dir/update-coveo.sh" << 'EOF'
#!/bin/bash

# Coveo Headless Update Script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COVEO_DIR="$SCRIPT_DIR/scripts/coveo"

# Read current version
if [[ -f "$COVEO_DIR/config/version.json" ]]; then
    CURRENT_VERSION=$(grep -o '"version":"[^"]*"' "$COVEO_DIR/config/version.json" | cut -d'"' -f4)
    echo "Current version: $CURRENT_VERSION"
else
    echo "No version information found"
    exit 1
fi

# Check for updates
echo "Checking for updates..."
LATEST_VERSION=$(curl -s "https://registry.npmjs.org/@coveo/headless/latest" | grep -o '"version":"[^"]*"' | cut -d'"' -f4)

if [[ "$CURRENT_VERSION" != "$LATEST_VERSION" ]]; then
    echo "Update available: $CURRENT_VERSION -> $LATEST_VERSION"
    read -p "Do you want to update? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Running update..."
        
        # Check if plugin directory exists and use it
        if [[ -d "$SCRIPT_DIR/plugin" && -f "$SCRIPT_DIR/plugin/download-coveo.sh" ]]; then
            cd "$SCRIPT_DIR/plugin"
            ./download-coveo.sh -v "$LATEST_VERSION" -f --include-types
        else
            echo "Error: Could not find plugin/download-coveo.sh"
            echo "Please run the download script manually"
        fi
    fi
else
    echo "Coveo Headless is up to date ($CURRENT_VERSION)"
fi
EOF
    
    chmod +x "$base_dir/update-coveo.sh"
    log_success "Update script created at: $base_dir/update-coveo.sh"
}

#################################################################
# Main Functions
#################################################################

parse_arguments() {
    while [[ $# -gt 0 ]]; do
        case $1 in
            -v|--version)
                COVEO_VERSION="$2"
                shift 2
                ;;
            -c|--cdn)
                CDN_SOURCE="$2"
                shift 2
                ;;
            -d|--dir)
                BASE_DIR="$2"
                shift 2
                ;;
            -f|--force)
                FORCE_DOWNLOAD=true
                shift
                ;;
            --no-verify)
                VERIFY_DOWNLOADS=false
                shift
                ;;
            --no-config)
                CREATE_CONFIG=false
                shift
                ;;
            --include-types)
                INCLUDE_TYPES=true
                shift
                ;;
            -q|--quiet)
                QUIET=true
                shift
                ;;
            -h|--help)
                print_usage
                exit 0
                ;;
            *)
                log_error "Unknown option: $1"
                print_usage
                exit 1
                ;;
        esac
    done
    
    # Set defaults for unspecified options
    COVEO_VERSION=${COVEO_VERSION:-$DEFAULT_VERSION}
    CDN_SOURCE=${CDN_SOURCE:-$DEFAULT_CDN}
    
    # Auto-detect project root if BASE_DIR not specified
    if [[ -z "$BASE_DIR" ]]; then
        BASE_DIR=$(detect_project_root)
    fi
    
    # Validate arguments
    if [[ ! "$CDN_SOURCE" =~ ^(unpkg|jsdelivr)$ ]]; then
        log_error "Invalid CDN source: $CDN_SOURCE (must be 'unpkg' or 'jsdelivr')"
        exit 1
    fi
}

main() {
    print_header
    
    parse_arguments "$@"
    
    log_info "Starting Coveo Headless Core download..."
    log_info "Script location: $SCRIPT_DIR"
    log_info "Project root: $BASE_DIR"
    log_info "Version: $COVEO_VERSION"
    log_info "CDN: $CDN_SOURCE"
    log_info "Include Types: $INCLUDE_TYPES"
    echo
    
    # Check dependencies
    check_dependencies
    
    # Resolve version
    if [[ "$COVEO_VERSION" == "latest" ]]; then
        COVEO_VERSION=$(get_latest_version)
        log_info "Resolved latest version: $COVEO_VERSION"
    fi
    
    # Verify version exists
    if ! verify_version_exists "$COVEO_VERSION"; then
        exit 1
    fi
    
    # Create directory structure
    create_directory_structure "$BASE_DIR"
    
    # Download files
    download_files "$BASE_DIR" "$COVEO_VERSION"
    
    # Create configuration files
    create_config_files "$BASE_DIR" "$COVEO_VERSION"
    
    # Create update script
    create_update_script "$BASE_DIR"
    
    echo
    log_success "Coveo Headless Core download completed!"
    echo
    echo -e "${CYAN}Summary:${NC}"
    echo "  Version: $COVEO_VERSION"
    echo "  Project Root: $BASE_DIR"
    echo "  Script Location: $SCRIPT_DIR"
    echo "  Coveo Files: $BASE_DIR/scripts/coveo/"
    echo "  JavaScript: $(find "$BASE_DIR/scripts/coveo/libs" -name "*.js" 2>/dev/null | wc -l) files"
    if [[ "$INCLUDE_TYPES" == true ]]; then
        echo "  TypeScript: $(find "$BASE_DIR/scripts/coveo/libs" -name "*.d.ts" 2>/dev/null | wc -l) definition files"
    fi
    echo "  Size: $(du -sh "$BASE_DIR/scripts/coveo/libs" 2>/dev/null | cut -f1 || echo "Unknown")"
    echo
    echo -e "${YELLOW}Files Created:${NC}"
    echo "  📁 $BASE_DIR/scripts/coveo/libs/headless.esm.js"
    if [[ "$INCLUDE_TYPES" == true ]]; then
        echo "  📁 $BASE_DIR/scripts/coveo/libs/headless.d.ts"
    fi
    echo "  📁 $BASE_DIR/scripts/coveo/config/config.js"
    echo "  📁 $BASE_DIR/scripts/coveo/loader.js"
    echo "  📁 $BASE_DIR/blocks/search-box/"
    echo "  📁 $BASE_DIR/update-coveo.sh"
    echo
    echo -e "${YELLOW}Next Steps:${NC}"
    echo "  1. Update configuration: $BASE_DIR/scripts/coveo/config/config.js"
    echo "  2. Review example block: $BASE_DIR/blocks/search-box/"
    echo "  3. Read documentation: $BASE_DIR/scripts/coveo/README.md"
    echo "  4. To update later: $BASE_DIR/update-coveo.sh"
    echo
    echo -e "${GREEN}Ready for core search functionality! 🔍${NC}"
}

# Run main function with all arguments
main "$@"