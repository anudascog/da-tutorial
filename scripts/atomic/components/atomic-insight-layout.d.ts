import type { Components, JSX } from "../../types/components";

interface AtomicInsightLayout extends Components.AtomicInsightLayout, HTMLElement {}
export const AtomicInsightLayout: {
    prototype: AtomicInsightLayout;
    new (): AtomicInsightLayout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
