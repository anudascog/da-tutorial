import type { Components, JSX } from "../../types/components";

interface AtomicProductRating extends Components.AtomicProductRating, HTMLElement {}
export const AtomicProductRating: {
    prototype: AtomicProductRating;
    new (): AtomicProductRating;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
