import type { Components, JSX } from "../../types/components";

interface AtomicResultPlaceholder extends Components.AtomicResultPlaceholder, HTMLElement {}
export const AtomicResultPlaceholder: {
    prototype: AtomicResultPlaceholder;
    new (): AtomicResultPlaceholder;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
