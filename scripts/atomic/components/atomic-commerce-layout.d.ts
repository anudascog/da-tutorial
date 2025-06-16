import type { Components, JSX } from "../../types/components";

interface AtomicCommerceLayout extends Components.AtomicCommerceLayout, HTMLElement {}
export const AtomicCommerceLayout: {
    prototype: AtomicCommerceLayout;
    new (): AtomicCommerceLayout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
