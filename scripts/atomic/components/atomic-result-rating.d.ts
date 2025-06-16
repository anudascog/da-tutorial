import type { Components, JSX } from "../../types/components";

interface AtomicResultRating extends Components.AtomicResultRating, HTMLElement {}
export const AtomicResultRating: {
    prototype: AtomicResultRating;
    new (): AtomicResultRating;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
