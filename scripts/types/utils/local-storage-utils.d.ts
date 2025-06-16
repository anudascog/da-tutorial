import { StandaloneSearchBoxAnalytics } from '@coveo/headless';
export declare enum StorageItems {
    RECENT_QUERIES = "coveo-recent-queries",
    STANDALONE_SEARCH_BOX_DATA = "coveo-standalone-search-box-data",
    GENERATED_ANSWER_DATA = "coveo-generated-answer-data"
}
export interface StandaloneSearchBoxData {
    value: string;
    enableQuerySyntax?: boolean;
    analytics: StandaloneSearchBoxAnalytics;
}
export interface GeneratedAnswerData {
    isVisible: boolean;
}
export declare class SafeStorage implements Storage {
    constructor();
    clear(): void;
    getItem(key: StorageItems): string | null;
    getParsedJSON<T>(key: StorageItems, fallback: T): T;
    key(index: number): string | null;
    get length(): number;
    removeItem(key: StorageItems): void;
    setItem(key: StorageItems, value: string): void;
    setJSON(key: StorageItems, obj: unknown): void;
    private tryAccessLocalStorageOrWarn;
    private tryJSONOrWarn;
    private tryOrElse;
}
