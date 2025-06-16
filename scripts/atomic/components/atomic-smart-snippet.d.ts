import type { Components, JSX } from "../../types/components";

interface AtomicSmartSnippet extends Components.AtomicSmartSnippet, HTMLElement {}
export const AtomicSmartSnippet: {
    prototype: AtomicSmartSnippet;
    new (): AtomicSmartSnippet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
