import type { Components, JSX } from "../../types/components";

interface AtomicQuickview extends Components.AtomicQuickview, HTMLElement {}
export const AtomicQuickview: {
    prototype: AtomicQuickview;
    new (): AtomicQuickview;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
