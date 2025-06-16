import type { Components, JSX } from "../../types/components";

interface AtomicRecsInterface extends Components.AtomicRecsInterface, HTMLElement {}
export const AtomicRecsInterface: {
    prototype: AtomicRecsInterface;
    new (): AtomicRecsInterface;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
