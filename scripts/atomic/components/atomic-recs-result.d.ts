import type { Components, JSX } from "../../types/components";

interface AtomicRecsResult extends Components.AtomicRecsResult, HTMLElement {}
export const AtomicRecsResult: {
    prototype: AtomicRecsResult;
    new (): AtomicRecsResult;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
