import type { Components, JSX } from "../../types/components";

interface AtomicRecsError extends Components.AtomicRecsError, HTMLElement {}
export const AtomicRecsError: {
    prototype: AtomicRecsError;
    new (): AtomicRecsError;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
