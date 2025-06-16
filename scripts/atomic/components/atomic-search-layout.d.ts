import type { Components, JSX } from "../../types/components";

interface AtomicSearchLayout extends Components.AtomicSearchLayout, HTMLElement {}
export const AtomicSearchLayout: {
    prototype: AtomicSearchLayout;
    new (): AtomicSearchLayout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
