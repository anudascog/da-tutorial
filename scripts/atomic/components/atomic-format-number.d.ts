import type { Components, JSX } from "../../types/components";

interface AtomicFormatNumber extends Components.AtomicFormatNumber, HTMLElement {}
export const AtomicFormatNumber: {
    prototype: AtomicFormatNumber;
    new (): AtomicFormatNumber;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
