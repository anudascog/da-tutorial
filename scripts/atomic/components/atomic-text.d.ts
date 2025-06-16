import type { Components, JSX } from "../../types/components";

interface AtomicText extends Components.AtomicText, HTMLElement {}
export const AtomicText: {
    prototype: AtomicText;
    new (): AtomicText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
