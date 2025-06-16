import type { Components, JSX } from "../../types/components";

interface AtomicTableElement extends Components.AtomicTableElement, HTMLElement {}
export const AtomicTableElement: {
    prototype: AtomicTableElement;
    new (): AtomicTableElement;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
