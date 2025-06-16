import type { Components, JSX } from "../../types/components";

interface AtomicRecsResultTemplate extends Components.AtomicRecsResultTemplate, HTMLElement {}
export const AtomicRecsResultTemplate: {
    prototype: AtomicRecsResultTemplate;
    new (): AtomicRecsResultTemplate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
