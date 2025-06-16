import type { Components, JSX } from "../../types/components";

interface AtomicModal extends Components.AtomicModal, HTMLElement {}
export const AtomicModal: {
    prototype: AtomicModal;
    new (): AtomicModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
