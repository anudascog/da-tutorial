import type { Components, JSX } from "../../types/components";

interface AtomicInsightTabs extends Components.AtomicInsightTabs, HTMLElement {}
export const AtomicInsightTabs: {
    prototype: AtomicInsightTabs;
    new (): AtomicInsightTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
