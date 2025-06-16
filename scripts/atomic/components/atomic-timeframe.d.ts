import type { Components, JSX } from "../../types/components";

interface AtomicTimeframe extends Components.AtomicTimeframe, HTMLElement {}
export const AtomicTimeframe: {
    prototype: AtomicTimeframe;
    new (): AtomicTimeframe;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
