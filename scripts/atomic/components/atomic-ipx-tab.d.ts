import type { Components, JSX } from "../../types/components";

interface AtomicIpxTab extends Components.AtomicIpxTab, HTMLElement {}
export const AtomicIpxTab: {
    prototype: AtomicIpxTab;
    new (): AtomicIpxTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
