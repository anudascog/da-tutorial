#!/bin/bash

echo "=== DEBUG: Testing Coveo Download ==="

# Test 1: Basic connectivity
echo "1. Testing basic connectivity..."
curl -I "https://google.com" | head -1

# Test 2: Test Coveo URL
echo "2. Testing Coveo URL..."
curl -I "https://cdn.jsdelivr.net/npm/@coveo/headless@3.27.4/+esm" | head -1

# Test 3: Test file download with verbose output
echo "3. Testing actual download..."
cd /c/aem-live/da-tutorial-main/scripts/coveo/libs
curl -v -L --max-time 60 -o test-headless.esm.js "https://cdn.jsdelivr.net/npm/@coveo/headless@3.27.4/+esm"

# Check result
if [[ -f "test-headless.esm.js" && -s "test-headless.esm.js" ]]; then
    echo "✅ Download successful!"
    ls -la test-headless.esm.js
else
    echo "❌ Download failed!"
fi

echo "=== DEBUG COMPLETE ==="
