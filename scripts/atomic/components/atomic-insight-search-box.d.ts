import type { Components, JSX } from "../../types/components";

interface AtomicInsightSearchBox extends Components.AtomicInsightSearchBox, HTMLElement {}
export const AtomicInsightSearchBox: {
    prototype: AtomicInsightSearchBox;
    new (): AtomicInsightSearchBox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
