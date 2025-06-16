import type { Components, JSX } from "../../types/components";

interface AtomicResultLink extends Components.AtomicResultLink, HTMLElement {}
export const AtomicResultLink: {
    prototype: AtomicResultLink;
    new (): AtomicResultLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
