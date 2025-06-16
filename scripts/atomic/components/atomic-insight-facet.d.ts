import type { Components, JSX } from "../../types/components";

interface AtomicInsightFacet extends Components.AtomicInsightFacet, HTMLElement {}
export const AtomicInsightFacet: {
    prototype: AtomicInsightFacet;
    new (): AtomicInsightFacet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
