import type { Components, JSX } from "../../types/components";

interface AtomicSortExpression extends Components.AtomicSortExpression, HTMLElement {}
export const AtomicSortExpression: {
    prototype: AtomicSortExpression;
    new (): AtomicSortExpression;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
