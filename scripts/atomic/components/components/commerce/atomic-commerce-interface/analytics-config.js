export function getAnalyticsConfig(commerceEngineConfig, enabled) {
    return {
        enabled,
        ...commerceEngineConfig.analytics,
    };
}
