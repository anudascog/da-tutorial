import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
import { SearchBoxSuggestionElement } from './suggestions-common.js';
interface Suggestion {
    highlightedValue: string;
    rawValue: string;
}
export declare const getPartialSearchBoxSuggestionElement: (suggestion: Suggestion, i18n: i18n) => Pick<SearchBoxSuggestionElement, "ariaLabel" | "key" | "query" | "part">;
export declare const QuerySuggestionContainer: FunctionalComponent;
interface QuerySuggestionIconProps {
    icon: string;
    hasSuggestion: boolean;
}
export declare const QuerySuggestionIcon: FunctionalComponent<QuerySuggestionIconProps>;
interface QuerySuggestionTextProps {
    suggestion: Suggestion;
    hasQuery: boolean;
}
export declare const QuerySuggestionText: FunctionalComponent<QuerySuggestionTextProps>;
export {};
