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
    
    echo
    print_success "Coveo Headless SDK v3.27.4 download completed!"
    echo
    echo "Downloaded files:"
    echo "  - /c/aem-live/da-tutorial-main/scripts/coveo/headless.esm.js (v3.27.4)"
    echo "  - /c/aem-live/da-tutorial-main/scripts/coveo/headless.esm.js.map (source map)"
    echo
    echo "The file is ready to be imported in your AEM Edge Delivery project:"
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
}

# Run main function
main "$@"