import type { Components, JSX } from "../../types/components";

interface AtomicTab extends Components.AtomicTab, HTMLElement {}
export const AtomicTab: {
    prototype: AtomicTab;
    new (): AtomicTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
