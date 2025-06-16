import type { Components, JSX } from "../../types/components";

interface AtomicFacet extends Components.AtomicFacet, HTMLElement {}
export const AtomicFacet: {
    prototype: AtomicFacet;
    new (): AtomicFacet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
