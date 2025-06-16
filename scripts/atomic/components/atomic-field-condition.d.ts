import type { Components, JSX } from "../../types/components";

interface AtomicFieldCondition extends Components.AtomicFieldCondition, HTMLElement {}
export const AtomicFieldCondition: {
    prototype: AtomicFieldCondition;
    new (): AtomicFieldCondition;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
