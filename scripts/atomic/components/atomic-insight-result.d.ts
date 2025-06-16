import type { Components, JSX } from "../../types/components";

interface AtomicInsightResult extends Components.AtomicInsightResult, HTMLElement {}
export const AtomicInsightResult: {
    prototype: AtomicInsightResult;
    new (): AtomicInsightResult;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
