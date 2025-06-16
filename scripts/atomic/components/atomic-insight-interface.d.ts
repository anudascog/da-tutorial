import type { Components, JSX } from "../../types/components";

interface AtomicInsightInterface extends Components.AtomicInsightInterface, HTMLElement {}
export const AtomicInsightInterface: {
    prototype: AtomicInsightInterface;
    new (): AtomicInsightInterface;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
