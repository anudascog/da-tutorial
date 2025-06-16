import type { Components, JSX } from "../../types/components";

interface AtomicResultNumber extends Components.AtomicResultNumber, HTMLElement {}
export const AtomicResultNumber: {
    prototype: AtomicResultNumber;
    new (): AtomicResultNumber;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
