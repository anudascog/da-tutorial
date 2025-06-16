import type { Components, JSX } from "../../types/components";

interface AtomicLayoutSection extends Components.AtomicLayoutSection, HTMLElement {}
export const AtomicLayoutSection: {
    prototype: AtomicLayoutSection;
    new (): AtomicLayoutSection;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
