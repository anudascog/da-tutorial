import type { Components, JSX } from "../../types/components";

interface AtomicResultText extends Components.AtomicResultText, HTMLElement {}
export const AtomicResultText: {
    prototype: AtomicResultText;
    new (): AtomicResultText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
