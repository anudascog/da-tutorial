import type { Components, JSX } from "../../types/components";

interface AtomicResultList extends Components.AtomicResultList, HTMLElement {}
export const AtomicResultList: {
    prototype: AtomicResultList;
    new (): AtomicResultList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
