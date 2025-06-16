import type { Components, JSX } from "../../types/components";

interface AtomicAutomaticFacet extends Components.AtomicAutomaticFacet, HTMLElement {}
export const AtomicAutomaticFacet: {
    prototype: AtomicAutomaticFacet;
    new (): AtomicAutomaticFacet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
