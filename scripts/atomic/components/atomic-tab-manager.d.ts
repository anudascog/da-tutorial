import type { Components, JSX } from "../../types/components";

interface AtomicTabManager extends Components.AtomicTabManager, HTMLElement {}
export const AtomicTabManager: {
    prototype: AtomicTabManager;
    new (): AtomicTabManager;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
