import type { Components, JSX } from "../../types/components";

interface AtomicFormatUnit extends Components.AtomicFormatUnit, HTMLElement {}
export const AtomicFormatUnit: {
    prototype: AtomicFormatUnit;
    new (): AtomicFormatUnit;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
