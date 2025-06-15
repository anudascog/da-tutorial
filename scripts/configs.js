// Environment-based configuration management
const configs = {
  development: {
    accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
    organizationId: 'searchuisamples',
    environment: 'demo',
    debug: true
  },
  preview: {
    accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
    organizationId: 'searchuisamples',
    environment: 'demo',
    debug: false
  },
  production: {
    accessToken: 'your-production-token-here',
    organizationId: 'your-production-org-here',
    environment: 'production',
    debug: false
  }
};

export function getCoveoConfig() {
  const hostname = window.location.hostname;
  
  if (hostname.includes('localhost')) {
    return configs.development;
  } else if (hostname.includes('hlx.page')) {
    return configs.preview;
  } else {
    return configs.production;
  }
}

export function getEnvironment() {
  const hostname = window.location.hostname;
  
  if (hostname.includes('localhost')) {
    return 'development';
  } else if (hostname.includes('hlx.page')) {
    return 'preview';
  } else {
    return 'production';
  }
}