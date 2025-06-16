import type { Components, JSX } from "../../types/components";

interface AtomicTabButton extends Components.AtomicTabButton, HTMLElement {}
export const AtomicTabButton: {
    prototype: AtomicTabButton;
    new (): AtomicTabButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
