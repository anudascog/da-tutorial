import type { Components, JSX } from "../../types/components";

interface AtomicIpxEmbedded extends Components.AtomicIpxEmbedded, HTMLElement {}
export const AtomicIpxEmbedded: {
    prototype: AtomicIpxEmbedded;
    new (): AtomicIpxEmbedded;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
