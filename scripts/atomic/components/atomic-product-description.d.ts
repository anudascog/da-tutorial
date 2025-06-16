import type { Components, JSX } from "../../types/components";

interface AtomicProductDescription extends Components.AtomicProductDescription, HTMLElement {}
export const AtomicProductDescription: {
    prototype: AtomicProductDescription;
    new (): AtomicProductDescription;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
