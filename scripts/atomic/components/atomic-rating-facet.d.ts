import type { Components, JSX } from "../../types/components";

interface AtomicRatingFacet extends Components.AtomicRatingFacet, HTMLElement {}
export const AtomicRatingFacet: {
    prototype: AtomicRatingFacet;
    new (): AtomicRatingFacet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
