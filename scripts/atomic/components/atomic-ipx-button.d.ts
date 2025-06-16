import type { Components, JSX } from "../../types/components";

interface AtomicIpxButton extends Components.AtomicIpxButton, HTMLElement {}
export const AtomicIpxButton: {
    prototype: AtomicIpxButton;
    new (): AtomicIpxButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
