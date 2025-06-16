import type { Components, JSX } from "../../types/components";

interface AtomicCategoryFacet extends Components.AtomicCategoryFacet, HTMLElement {}
export const AtomicCategoryFacet: {
    prototype: AtomicCategoryFacet;
    new (): AtomicCategoryFacet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
