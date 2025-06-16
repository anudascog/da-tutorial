import type { Components, JSX } from "../../types/components";

interface AtomicNoResults extends Components.AtomicNoResults, HTMLElement {}
export const AtomicNoResults: {
    prototype: AtomicNoResults;
    new (): AtomicNoResults;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
