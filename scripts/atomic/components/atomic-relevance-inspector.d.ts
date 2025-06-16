import type { Components, JSX } from "../../types/components";

interface AtomicRelevanceInspector extends Components.AtomicRelevanceInspector, HTMLElement {}
export const AtomicRelevanceInspector: {
    prototype: AtomicRelevanceInspector;
    new (): AtomicRelevanceInspector;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
