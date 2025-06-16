import type { Components, JSX } from "../../types/components";

interface AtomicProductLink extends Components.AtomicProductLink, HTMLElement {}
export const AtomicProductLink: {
    prototype: AtomicProductLink;
    new (): AtomicProductLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
