import type { Components, JSX } from "../../types/components";

interface AtomicResultChildren extends Components.AtomicResultChildren, HTMLElement {}
export const AtomicResultChildren: {
    prototype: AtomicResultChildren;
    new (): AtomicResultChildren;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
