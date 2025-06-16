import type { Components, JSX } from "../../types/components";

interface AtomicNumericFacet extends Components.AtomicNumericFacet, HTMLElement {}
export const AtomicNumericFacet: {
    prototype: AtomicNumericFacet;
    new (): AtomicNumericFacet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
