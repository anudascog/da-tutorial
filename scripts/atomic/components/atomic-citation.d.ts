import type { Components, JSX } from "../../types/components";

interface AtomicCitation extends Components.AtomicCitation, HTMLElement {}
export const AtomicCitation: {
    prototype: AtomicCitation;
    new (): AtomicCitation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
