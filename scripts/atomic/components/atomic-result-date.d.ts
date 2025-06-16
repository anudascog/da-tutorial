import type { Components, JSX } from "../../types/components";

interface AtomicResultDate extends Components.AtomicResultDate, HTMLElement {}
export const AtomicResultDate: {
    prototype: AtomicResultDate;
    new (): AtomicResultDate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
