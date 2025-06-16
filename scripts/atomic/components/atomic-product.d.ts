import type { Components, JSX } from "../../types/components";

interface AtomicProduct extends Components.AtomicProduct, HTMLElement {}
export const AtomicProduct: {
    prototype: AtomicProduct;
    new (): AtomicProduct;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
