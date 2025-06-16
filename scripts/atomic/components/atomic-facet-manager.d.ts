import type { Components, JSX } from "../../types/components";

interface AtomicFacetManager extends Components.AtomicFacetManager, HTMLElement {}
export const AtomicFacetManager: {
    prototype: AtomicFacetManager;
    new (): AtomicFacetManager;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
