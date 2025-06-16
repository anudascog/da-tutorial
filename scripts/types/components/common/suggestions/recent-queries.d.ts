import { i18n } from 'i18next';
import { SearchBoxSuggestionElement } from './suggestions-common';
export declare const getPartialRecentQueryElement: (value: string, i18n: i18n) => Pick<SearchBoxSuggestionElement, "ariaLabel" | "key" | "query" | "part">;
export declare const getPartialRecentQueryClearElement: (i18n: i18n) => Pick<SearchBoxSuggestionElement, "ariaLabel" | "key" | "part" | "hideIfLast">;
export interface RecentQueriesContainerProps {
    icon: string;
    query: string;
    value: string;
}
export declare const renderRecentQuery: ({ icon, query, value, }: RecentQueriesContainerProps) => HTMLElement;
export declare const renderRecentQueryClear: ({ i18n }: {
    i18n: i18n;
}) => HTMLElement;
