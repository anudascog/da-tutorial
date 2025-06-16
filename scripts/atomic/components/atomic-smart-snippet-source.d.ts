import type { Components, JSX } from "../../types/components";

interface AtomicSmartSnippetSource extends Components.AtomicSmartSnippetSource, HTMLElement {}
export const AtomicSmartSnippetSource: {
    prototype: AtomicSmartSnippetSource;
    new (): AtomicSmartSnippetSource;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
