#!/bin/bash

# Simplified Coveo Headless SDK Download Script for AEM Edge Delivery Services
# Place this file in the plugin folder: /c/aem-live/da-tutorial-main/plugin/download-coveo.sh
# This script will download files to: /c/aem-live/da-tutorial-main/scripts/coveo/

set -e  # Exit on any error

# Configuration
DOWNLOAD_DIR="../scripts/coveo"
NPM_REGISTRY_URL="https://registry.npmjs.org/@coveo/headless/latest"
COVEO_CDN_BASE="https://static.cloud.coveo.com/headless"

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

# Function to get the latest version from npm registry
get_latest_version() {
    print_status "Fetching latest Coveo Headless version from npm registry..."
    
    local version_info
    local latest_version
    
    if command_exists curl; then
        version_info=$(curl -s "$NPM_REGISTRY_URL")
    elif command_exists wget; then
        version_info=$(wget -qO- "$NPM_REGISTRY_URL")
    else
        print_error "Neither curl nor wget is available for fetching version info."
        exit 1
    fi
    
    if [ $? -ne 0 ] || [ -z "$version_info" ]; then
        print_error "Failed to fetch version information from npm registry."
        exit 1
    fi
    
    # Extract version using different methods (jq, python, or basic text processing)
    if command_exists jq; then
        latest_version=$(echo "$version_info" | jq -r '.version')
    elif command_exists python3; then
        latest_version=$(echo "$version_info" | python3 -c "
import sys, json
data = json.load(sys.stdin)
print(data.get('version', ''))
")
    elif command_exists python; then
        latest_version=$(echo "$version_info" | python -c "
import sys, json
data = json.load(sys.stdin)
print(data.get('version', ''))
")
    else
        # Fallback to basic text processing
        latest_version=$(echo "$version_info" | grep -o '"version":"[^"]*' | cut -d'"' -f4 | head -1)
    fi
    
    if [ -z "$latest_version" ]; then
        print_error "Could not parse version information. Using fallback to v2."
        latest_version="2"
    fi
    
    print_success "Latest version found: $latest_version"
    echo "$latest_version"
}

# Check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    if ! command_exists curl && ! command_exists wget; then
        print_error "Neither curl nor wget is available. Please install one of them."
        exit 1
    fi
    
    if ! command_exists jq && ! command_exists python3 && ! command_exists python; then
        print_warning "jq, python3, or python not found. Will use basic text processing for JSON parsing."
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
    print_status "Downloading Coveo Headless SDK..."
    
    # Get the latest version
    local latest_version
    latest_version=$(get_latest_version)
    
    # Extract major version for URL construction (e.g., "2.70.0" -> "v2")
    local major_version
    major_version="v$(echo "$latest_version" | cut -d'.' -f1)"
    
    # Construct URLs
    local headless_url="${COVEO_CDN_BASE}/${major_version}/headless.esm.js"
    local headless_map_url="${COVEO_CDN_BASE}/${major_version}/headless.esm.js.map"
    
    print_status "Using Coveo Headless SDK version: $latest_version"
    print_status "CDN URLs:"
    print_status "  Main: $headless_url"
    print_status "  Source Map: $headless_map_url"
    
    local download_cmd
    local headless_file="$DOWNLOAD_DIR/headless.esm.js"
    local map_file="$DOWNLOAD_DIR/headless.esm.js.map"
    
    # Choose download command
    if command_exists curl; then
        download_cmd="curl -L -o"
    elif command_exists wget; then
        download_cmd="wget -O"
    fi
    
    # Download main headless SDK file
    print_status "Downloading headless.esm.js..."
    if $download_cmd "$headless_file" "$headless_url"; then
        print_success "Downloaded headless.esm.js (version $latest_version)"
    else
        print_error "Failed to download headless.esm.js from $headless_url"
        print_status "Trying alternative download method..."
        
        # Try with specific version in URL path
        local alt_url="${COVEO_CDN_BASE}/${latest_version}/headless.esm.js"
        print_status "Attempting download from: $alt_url"
        
        if $download_cmd "$headless_file" "$alt_url"; then
            print_success "Downloaded headless.esm.js from alternative URL"
        else
            print_error "Failed to download from alternative URL. Please check Coveo CDN availability."
            exit 1
        fi
    fi
    
    # Download source map (optional but recommended for development)
    print_status "Downloading source map..."
    if $download_cmd "$map_file" "$headless_map_url"; then
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
            print_success "  File: $headless_file"
            print_success "  Size: ${file_size} bytes"
        else
            print_error "Downloaded file seems too small (${file_size} bytes)"
            exit 1
        fi
    else
        print_error "headless.esm.js not found"
        exit 1
    fi
}

# Main execution
main() {
    echo "=================================================="
    echo "  Coveo Headless SDK Download (Latest Version)"
    echo "=================================================="
    echo
    
    check_prerequisites
    create_directories
    download_coveo_sdk
    verify_downloads
    
    echo
    print_success "Coveo Headless SDK download completed!"
    echo
    echo "Downloaded files:"
    echo "  - /c/aem-live/da-tutorial-main/scripts/coveo/headless.esm.js (latest version)"
    echo "  - /c/aem-live/da-tutorial-main/scripts/coveo/headless.esm.js.map (source map)"
    echo
    echo "The file is ready to be imported in your AEM Edge Delivery project:"
    echo "  import * as coveo from '/scripts/coveo/headless.esm.js';"
    echo
}

# Run main function
main "$@"