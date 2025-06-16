import type { Components, JSX } from "../../types/components";

interface AtomicProductText extends Components.AtomicProductText, HTMLElement {}
export const AtomicProductText: {
    prototype: AtomicProductText;
    new (): AtomicProductText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
