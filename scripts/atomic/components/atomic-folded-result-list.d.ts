import type { Components, JSX } from "../../types/components";

interface AtomicFoldedResultList extends Components.AtomicFoldedResultList, HTMLElement {}
export const AtomicFoldedResultList: {
    prototype: AtomicFoldedResultList;
    new (): AtomicFoldedResultList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
