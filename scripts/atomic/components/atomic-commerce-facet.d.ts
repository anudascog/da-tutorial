import type { Components, JSX } from "../../types/components";

interface AtomicCommerceFacet extends Components.AtomicCommerceFacet, HTMLElement {}
export const AtomicCommerceFacet: {
    prototype: AtomicCommerceFacet;
    new (): AtomicCommerceFacet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
