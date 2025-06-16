import type { Components, JSX } from "../../types/components";

interface AtomicQueryError extends Components.AtomicQueryError, HTMLElement {}
export const AtomicQueryError: {
    prototype: AtomicQueryError;
    new (): AtomicQueryError;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
