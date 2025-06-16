import type { Components, JSX } from "../../types/components";

interface AtomicFocusTrap extends Components.AtomicFocusTrap, HTMLElement {}
export const AtomicFocusTrap: {
    prototype: AtomicFocusTrap;
    new (): AtomicFocusTrap;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
