import type { Components, JSX } from "../../types/components";

interface AtomicNumericRange extends Components.AtomicNumericRange, HTMLElement {}
export const AtomicNumericRange: {
    prototype: AtomicNumericRange;
    new (): AtomicNumericRange;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
