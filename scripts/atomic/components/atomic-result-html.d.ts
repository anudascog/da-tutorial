import type { Components, JSX } from "../../types/components";

interface AtomicResultHtml extends Components.AtomicResultHtml, HTMLElement {}
export const AtomicResultHtml: {
    prototype: AtomicResultHtml;
    new (): AtomicResultHtml;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
