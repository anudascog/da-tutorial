import type { Components, JSX } from "../../types/components";

interface AtomicProductChildren extends Components.AtomicProductChildren, HTMLElement {}
export const AtomicProductChildren: {
    prototype: AtomicProductChildren;
    new (): AtomicProductChildren;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
