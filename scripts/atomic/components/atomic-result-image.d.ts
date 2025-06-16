import type { Components, JSX } from "../../types/components";

interface AtomicResultImage extends Components.AtomicResultImage, HTMLElement {}
export const AtomicResultImage: {
    prototype: AtomicResultImage;
    new (): AtomicResultImage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
