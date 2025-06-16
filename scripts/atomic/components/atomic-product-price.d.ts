import type { Components, JSX } from "../../types/components";

interface AtomicProductPrice extends Components.AtomicProductPrice, HTMLElement {}
export const AtomicProductPrice: {
    prototype: AtomicProductPrice;
    new (): AtomicProductPrice;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
