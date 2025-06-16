import { i18n } from 'i18next';
import { SearchBoxSuggestionElement } from './suggestions-common.js';
interface Suggestion {
    highlightedValue: string;
    rawValue: string;
}
export declare const getPartialSearchBoxSuggestionElement: (suggestion: Suggestion, i18n: i18n) => Pick<SearchBoxSuggestionElement, "ariaLabel" | "key" | "query" | "part">;
export interface RenderQuerySuggestionOptions {
    icon: string;
    hasQuery: boolean;
    suggestion: Suggestion;
    hasMultipleKindOfSuggestions: boolean;
}
export declare const renderQuerySuggestion: ({ icon, hasQuery, suggestion, hasMultipleKindOfSuggestions, }: RenderQuerySuggestionOptions) => HTMLElement;
export {};
