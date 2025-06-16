import { g as getAtomicEnvironment } from './interface-common-stencil.js';

function augmentWithExternalMiddleware(event, payload, config) {
    if (config.analytics?.analyticsClientMiddleware) {
        return config.analytics.analyticsClientMiddleware(event, payload);
    }
    return payload;
}
function augmentAnalyticsWithAtomicVersion(payload) {
    if (payload.customData) {
        payload.customData.coveoAtomicVersion = getAtomicEnvironment().version;
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
            '@coveo/atomic': versionMatcher.exec(getAtomicEnvironment().version)?.[0] || '0.0.0',
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

export { augmentWithExternalMiddleware as a, augmentAnalyticsWithAtomicVersion as b, augmentAnalyticsConfigWithDocument as c, augmentAnalyticsConfigWithAtomicVersion as d, getNextAnalyticsConfig as g };

//# sourceMappingURL=analytics-config.js.map