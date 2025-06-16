import type { Components, JSX } from "../../types/components";

interface AtomicBreadbox extends Components.AtomicBreadbox, HTMLElement {}
export const AtomicBreadbox: {
    prototype: AtomicBreadbox;
    new (): AtomicBreadbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
