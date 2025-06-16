import { i18n } from 'i18next';
import { SearchBoxSuggestionElement } from './suggestions-common';
export declare const getPartialInstantItemElement: (i18n: i18n, itemTitle: string, itemUniqueId: string) => Pick<SearchBoxSuggestionElement, "ariaLabel" | "key" | "part">;
export declare const getPartialInstantItemShowAllElement: (i18n: i18n) => Pick<SearchBoxSuggestionElement, "key" | "part" | "ariaLabel">;
interface InstantItemShowAllButtonProps {
    i18n: i18n;
}
export declare const renderInstantItemShowAllButton: ({ i18n, }: InstantItemShowAllButtonProps) => HTMLElement;
export {};
