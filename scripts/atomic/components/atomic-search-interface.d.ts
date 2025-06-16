import type { Components, JSX } from "../../types/components";

interface AtomicSearchInterface extends Components.AtomicSearchInterface, HTMLElement {}
export const AtomicSearchInterface: {
    prototype: AtomicSearchInterface;
    new (): AtomicSearchInterface;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
