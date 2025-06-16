import type { Components, JSX } from "../../types/components";

interface AtomicColorFacet extends Components.AtomicColorFacet, HTMLElement {}
export const AtomicColorFacet: {
    prototype: AtomicColorFacet;
    new (): AtomicColorFacet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
