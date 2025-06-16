import type { Components, JSX } from "../../types/components";

interface AtomicRecsList extends Components.AtomicRecsList, HTMLElement {}
export const AtomicRecsList: {
    prototype: AtomicRecsList;
    new (): AtomicRecsList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
