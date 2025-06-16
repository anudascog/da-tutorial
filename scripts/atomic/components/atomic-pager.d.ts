import type { Components, JSX } from "../../types/components";

interface AtomicPager extends Components.AtomicPager, HTMLElement {}
export const AtomicPager: {
    prototype: AtomicPager;
    new (): AtomicPager;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
