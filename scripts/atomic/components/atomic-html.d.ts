import type { Components, JSX } from "../../types/components";

interface AtomicHtml extends Components.AtomicHtml, HTMLElement {}
export const AtomicHtml: {
    prototype: AtomicHtml;
    new (): AtomicHtml;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
