import type { Components, JSX } from "../../types/components";

interface AtomicExternal extends Components.AtomicExternal, HTMLElement {}
export const AtomicExternal: {
    prototype: AtomicExternal;
    new (): AtomicExternal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
