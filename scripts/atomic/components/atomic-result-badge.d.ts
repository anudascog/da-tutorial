import type { Components, JSX } from "../../types/components";

interface AtomicResultBadge extends Components.AtomicResultBadge, HTMLElement {}
export const AtomicResultBadge: {
    prototype: AtomicResultBadge;
    new (): AtomicResultBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
