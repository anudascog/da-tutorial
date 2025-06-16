import type { Components, JSX } from "../../types/components";

interface AtomicTabPopover extends Components.AtomicTabPopover, HTMLElement {}
export const AtomicTabPopover: {
    prototype: AtomicTabPopover;
    new (): AtomicTabPopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
