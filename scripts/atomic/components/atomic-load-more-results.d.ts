import type { Components, JSX } from "../../types/components";

interface AtomicLoadMoreResults extends Components.AtomicLoadMoreResults, HTMLElement {}
export const AtomicLoadMoreResults: {
    prototype: AtomicLoadMoreResults;
    new (): AtomicLoadMoreResults;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
