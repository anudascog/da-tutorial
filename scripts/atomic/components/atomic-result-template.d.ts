import type { Components, JSX } from "../../types/components";

interface AtomicResultTemplate extends Components.AtomicResultTemplate, HTMLElement {}
export const AtomicResultTemplate: {
    prototype: AtomicResultTemplate;
    new (): AtomicResultTemplate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
