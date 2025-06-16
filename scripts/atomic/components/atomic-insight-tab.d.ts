import type { Components, JSX } from "../../types/components";

interface AtomicInsightTab extends Components.AtomicInsightTab, HTMLElement {}
export const AtomicInsightTab: {
    prototype: AtomicInsightTab;
    new (): AtomicInsightTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
