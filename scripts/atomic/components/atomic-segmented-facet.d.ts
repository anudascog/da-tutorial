import type { Components, JSX } from "../../types/components";

interface AtomicSegmentedFacet extends Components.AtomicSegmentedFacet, HTMLElement {}
export const AtomicSegmentedFacet: {
    prototype: AtomicSegmentedFacet;
    new (): AtomicSegmentedFacet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
