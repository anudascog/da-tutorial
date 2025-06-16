import type { Components, JSX } from "../../types/components";

interface AtomicResult extends Components.AtomicResult, HTMLElement {}
export const AtomicResult: {
    prototype: AtomicResult;
    new (): AtomicResult;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
