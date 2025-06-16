import type { Components, JSX } from "../../types/components";

interface AtomicAriaLive extends Components.AtomicAriaLive, HTMLElement {}
export const AtomicAriaLive: {
    prototype: AtomicAriaLive;
    new (): AtomicAriaLive;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
