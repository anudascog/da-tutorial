import { AnalyticsConfiguration, SearchEngineConfiguration } from '@coveo/headless';
import { createSearchStore } from './store';
export declare function getAnalyticsConfig(searchEngineConfig: SearchEngineConfiguration, enabled: boolean, store: ReturnType<typeof createSearchStore>): AnalyticsConfiguration;
