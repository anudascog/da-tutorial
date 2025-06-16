import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
import { SearchBoxSuggestionElement } from './suggestions-common';
export declare const getPartialRecentQueryElement: (value: string, i18n: i18n) => Pick<SearchBoxSuggestionElement, "ariaLabel" | "key" | "query" | "part">;
export declare const getPartialRecentQueryClearElement: (i18n: i18n) => Pick<SearchBoxSuggestionElement, "ariaLabel" | "key" | "part" | "hideIfLast">;
export declare const RecentQueriesContainer: FunctionalComponent;
interface RecentQueryIconProps {
    icon: string;
}
export declare const RecentQueryIcon: FunctionalComponent<RecentQueryIconProps>;
interface RecentQueryTextProps {
    query: string;
    value: string;
}
export declare const RecentQueryText: FunctionalComponent<RecentQueryTextProps>;
interface RecentQueryClearProps {
    i18n: i18n;
}
export declare const RecentQueryClear: FunctionalComponent<RecentQueryClearProps>;
export {};
