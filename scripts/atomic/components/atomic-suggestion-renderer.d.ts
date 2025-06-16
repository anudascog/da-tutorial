import type { Components, JSX } from "../../types/components";

interface AtomicSuggestionRenderer extends Components.AtomicSuggestionRenderer, HTMLElement {}
export const AtomicSuggestionRenderer: {
    prototype: AtomicSuggestionRenderer;
    new (): AtomicSuggestionRenderer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
