import type { Components, JSX } from "../../types/components";

interface AtomicProductTemplate extends Components.AtomicProductTemplate, HTMLElement {}
export const AtomicProductTemplate: {
    prototype: AtomicProductTemplate;
    new (): AtomicProductTemplate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
