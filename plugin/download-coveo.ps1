# Coveo Headless Core Libraries Download Script for Windows
param(
    [string]$Version = "latest",
    [ValidateSet("unpkg", "jsdelivr")]
    [string]$CDN = "jsdelivr",
    [string]$Directory = "",
    [switch]$Force = $false,
    [switch]$IncludeTypes = $false,
    [switch]$Quiet = $false,
    [switch]$Help = $false
)

$SCRIPT_VERSION = "1.0.0"
$SCRIPT_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path

function Write-Log {
    param([string]$Message, [string]$Level = "INFO")
    
    if (-not $Quiet -or $Level -eq "ERROR") {
        $color = switch ($Level) {
            "INFO" { "Blue" }
            "SUCCESS" { "Green" }
            "WARNING" { "Yellow"  }
            "ERROR" { "Red" }
            default { "White" }
        }
        Write-Host "[$Level] $Message" -ForegroundColor $color
    }
}

function Get-ProjectRoot {
    $currentDir = $SCRIPT_DIR
    
    if ((Split-Path -Leaf $currentDir) -eq "plugin") {
        $projectRoot = Split-Path -Parent $currentDir
        Write-Log "Detected script running from plugin directory"
        Write-Log "Auto-detected project root: $projectRoot"
    } else {
        $projectRoot = $currentDir
    }
    
    # Verify EDS project
    $edsMarkers = @(
        (Test-Path (Join-Path $projectRoot "fstab.yaml")),
        (Test-Path (Join-Path $projectRoot "head.html")),
        (Test-Path (Join-Path $projectRoot "blocks"))
    )
    
    if ($edsMarkers -contains $true) {
        Write-Log "AEM EDS project detected at: $projectRoot" "SUCCESS"
    } else {
        Write-Log "This doesn't appear to be an AEM EDS project root" "WARNING"
    }
    
    return $projectRoot
}

function Get-LatestVersion {
    try {
        $response = Invoke-RestMethod -Uri "https://registry.npmjs.org/@coveo/headless/latest"
        return $response.version
    } catch {
        Write-Log "Could not fetch latest version, using fallback" "WARNING"
        return "3.27.4"
    }
}

function New-DirectoryStructure {
    param([string]$BaseDir)
    
    Write-Log "Creating directory structure..."
    
    $directories = @(
        "scripts\coveo\libs",
        "scripts\coveo\config",
        "blocks\search-box"
    )
    
    foreach ($dir in $directories) {
        $fullPath = Join-Path $BaseDir $dir
        if (-not (Test-Path $fullPath)) {
            New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
        }
    }
    
    Write-Log "Directory structure created" "SUCCESS"
}

function Download-CoveoFile {
    param(
        [string]$Url,
        [string]$OutputPath,
        [string]$Description
    )
    
    if ((Test-Path $OutputPath) -and (-not $Force)) {
        Write-Log "$Description already exists, skipping (use -Force to override)" "WARNING"
        return $true
    }
    
    Write-Log "Downloading $Description..."
    Write-Log "URL: $Url"
    
    try {
        # Ensure directory exists
        $directory = Split-Path -Parent $OutputPath
        if (-not (Test-Path $directory)) {
            New-Item -ItemType Directory -Path $directory -Force | Out-Null
        }
        
        # Download with PowerShell (better SSL handling)
        Invoke-WebRequest -Uri $Url -OutFile $OutputPath -TimeoutSec 300
        
        $fileSize = (Get-Item $OutputPath).Length
        Write-Log "$Description downloaded ($fileSize bytes)" "SUCCESS"
        return $true
    } catch {
        Write-Log "Failed to download $Description" "ERROR"
        Write-Log "Error: $($_.Exception.Message)" "ERROR"
        if (Test-Path $OutputPath) {
            Remove-Item $OutputPath -Force
        }
        return $false
    }
}

function Main {
    Write-Host "╔══════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "║          Coveo Headless Core Libraries Downloader v$SCRIPT_VERSION          ║" -ForegroundColor Cyan
    Write-Host "║                 for AEM Edge Delivery Services                ║" -ForegroundColor Cyan
    Write-Host "╚══════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
    
    if ($Help) {
        Write-Host @"
Usage: .\download-coveo.ps1 [OPTIONS]

OPTIONS:
    -Version <VERSION>      Coveo version (default: latest)
    -CDN <CDN>             CDN source: unpkg|jsdelivr (default: jsdelivr)
    -Directory <PATH>       Override project root
    -Force                  Force re-download
    -IncludeTypes          Include TypeScript definitions (if available)
    -Quiet                 Quiet mode
    -Help                  Show help

EXAMPLES:
    .\download-coveo.ps1
    .\download-coveo.ps1 -IncludeTypes -Version 3.27.4
"@
        return
    }
    
    # Auto-detect project root
    if ([string]::IsNullOrEmpty($Directory)) {
        $Directory = Get-ProjectRoot
    }
    
    Write-Log "Starting Coveo Headless Core download..."
    Write-Log "Project root: $Directory"
    Write-Log "Version: $Version"
    Write-Log "CDN: $CDN"
    
    # Resolve version
    if ($Version -eq "latest") {
        Write-Log "Fetching latest version..."
        $Version = Get-LatestVersion
        Write-Log "Resolved latest version: $Version"
    }
    
    # Create directories
    New-DirectoryStructure -BaseDir $Directory
    
    # Download main file
    Write-Log "Downloading core library..."
    $mainUrl = "https://cdn.jsdelivr.net/npm/@coveo/headless@$Version/+esm"
    $mainOutput = Join-Path $Directory "scripts\coveo\libs\headless.esm.js"
    
    if (Download-CoveoFile -Url $mainUrl -OutputPath $mainOutput -Description "Core Headless Library") {
        Write-Log "Download completed successfully!" "SUCCESS"
        
        # Create basic config
        $configPath = Join-Path $Directory "scripts\coveo\config\config.js"
        $configContent = @'
// Coveo Core Configuration for AEM EDS
export const coveoConfig = {
  organizationId: 'YOUR_ORG_ID',
  searchToken: 'YOUR_SEARCH_API_TOKEN',
  platformUrl: 'https://platform.cloud.coveo.com',
  searchHub: 'default',
  analytics: { trackingId: 'YOUR_TRACKING_ID', enabled: true }
};

export const getConfig = () => coveoConfig;
'@
        $configContent | Out-File -FilePath $configPath -Encoding UTF8
        
        # Create loader
        $loaderPath = Join-Path $Directory "scripts\coveo\loader.js"
        $loaderContent = @'
import { getConfig } from './config/config.js';

class CoveoLoader {
  constructor() {
    this.engine = null;
    this.config = getConfig();
  }

  async loadCoreEngine() {
    if (this.engine) return this.engine;
    const { buildSearchEngine } = await import('./libs/headless.esm.js');
    this.engine = buildSearchEngine({
      configuration: {
        organizationId: this.config.organizationId,
        accessToken: this.config.searchToken,
        platformUrl: this.config.platformUrl,
        searchHub: this.config.searchHub
      }
    });
    return this.engine;
  }

  async loadController(controllerType) {
    const engine = await this.loadCoreEngine();
    const coreModule = await import('./libs/headless.esm.js');
    
    switch (controllerType) {
      case 'searchBox': return coreModule.buildSearchBox(engine);
      case 'resultList': return coreModule.buildResultList(engine);
      case 'facet': return coreModule.buildFacet(engine);
      default: throw new Error(`Unknown controller: ${controllerType}`);
    }
  }
}

export const coveoLoader = new CoveoLoader();
'@
        $loaderContent | Out-File -FilePath $loaderPath -Encoding UTF8
        
        Write-Host ""
        Write-Host "Files Created:" -ForegroundColor Yellow
        Write-Host "  📁 $Directory\scripts\coveo\libs\headless.esm.js"
        Write-Host "  📁 $Directory\scripts\coveo\config\config.js"
        Write-Host "  📁 $Directory\scripts\coveo\loader.js"
        Write-Host ""
        Write-Host "Next Steps:" -ForegroundColor Yellow
        Write-Host "  1. Update configuration in config\config.js"
        Write-Host "  2. Use coveoLoader in your AEM EDS blocks"
        Write-Host ""
        Write-Host "Ready for Coveo search! 🔍" -ForegroundColor Green
        
    } else {
        Write-Log "Download failed!" "ERROR"
        exit 1
    }
}

# Run main function
Main