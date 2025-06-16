import type { Components, JSX } from "../../types/components";

interface AtomicProductImage extends Components.AtomicProductImage, HTMLElement {}
export const AtomicProductImage: {
    prototype: AtomicProductImage;
    new (): AtomicProductImage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
