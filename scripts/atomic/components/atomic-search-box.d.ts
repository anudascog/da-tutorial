import type { Components, JSX } from "../../types/components";

interface AtomicSearchBox extends Components.AtomicSearchBox, HTMLElement {}
export const AtomicSearchBox: {
    prototype: AtomicSearchBox;
    new (): AtomicSearchBox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
