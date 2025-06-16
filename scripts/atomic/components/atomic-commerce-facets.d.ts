import type { Components, JSX } from "../../types/components";

interface AtomicCommerceFacets extends Components.AtomicCommerceFacets, HTMLElement {}
export const AtomicCommerceFacets: {
    prototype: AtomicCommerceFacets;
    new (): AtomicCommerceFacets;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
