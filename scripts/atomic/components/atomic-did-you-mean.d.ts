import type { Components, JSX } from "../../types/components";

interface AtomicDidYouMean extends Components.AtomicDidYouMean, HTMLElement {}
export const AtomicDidYouMean: {
    prototype: AtomicDidYouMean;
    new (): AtomicDidYouMean;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
