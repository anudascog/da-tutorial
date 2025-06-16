import type { Components, JSX } from "../../types/components";

interface AtomicQuerySummary extends Components.AtomicQuerySummary, HTMLElement {}
export const AtomicQuerySummary: {
    prototype: AtomicQuerySummary;
    new (): AtomicQuerySummary;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
