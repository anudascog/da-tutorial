'use strict';

const interfaceCommonStencil = require('./interface-common-stencil-52961eca.js');

function augmentWithExternalMiddleware(event, payload, config) {
    if (config.analytics?.analyticsClientMiddleware) {
        return config.analytics.analyticsClientMiddleware(event, payload);
    }
    return payload;
}
function augmentAnalyticsWithAtomicVersion(payload) {
    if (payload.customData) {
        payload.customData.coveoAtomicVersion = interfaceCommonStencil.getAtomicEnvironment().version;
    }
    return payload;
}
function augmentAnalyticsConfigWithDocument() {
    return {
        documentLocation: document.location.href,
        ...(document.referrer && { originLevel3: document.referrer }),
    };
}
const versionMatcher = /^(\d+\.\d+\.\d+)/;
function augmentAnalyticsConfigWithAtomicVersion() {
    return {
        source: {
            '@coveo/atomic': versionMatcher.exec(interfaceCommonStencil.getAtomicEnvironment().version)?.[0] || '0.0.0',
        },
    };
}
function getNextAnalyticsConfig(searchEngineConfig, enabled) {
    const configuration = {
        enabled,
        documentLocation: document.location.href,
        ...(document.referrer && { originLevel3: document.referrer }),
    };
    const analyticsConfiguration = searchEngineConfig.analytics ?? {};
    Object.assign(analyticsConfiguration, augmentAnalyticsConfigWithAtomicVersion());
    Object.assign(configuration, analyticsConfiguration);
    return configuration;
}

exports.augmentAnalyticsConfigWithAtomicVersion = augmentAnalyticsConfigWithAtomicVersion;
exports.augmentAnalyticsConfigWithDocument = augmentAnalyticsConfigWithDocument;
exports.augmentAnalyticsWithAtomicVersion = augmentAnalyticsWithAtomicVersion;
exports.augmentWithExternalMiddleware = augmentWithExternalMiddleware;
exports.getNextAnalyticsConfig = getNextAnalyticsConfig;

//# sourceMappingURL=analytics-config-04b5842e.js.map