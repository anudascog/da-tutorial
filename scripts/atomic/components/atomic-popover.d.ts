import type { Components, JSX } from "../../types/components";

interface AtomicPopover extends Components.AtomicPopover, HTMLElement {}
export const AtomicPopover: {
    prototype: AtomicPopover;
    new (): AtomicPopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
