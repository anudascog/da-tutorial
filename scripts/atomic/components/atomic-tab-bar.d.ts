import type { Components, JSX } from "../../types/components";

interface AtomicTabBar extends Components.AtomicTabBar, HTMLElement {}
export const AtomicTabBar: {
    prototype: AtomicTabBar;
    new (): AtomicTabBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
