import type { Components, JSX } from "../../types/components";

interface AtomicRefineModal extends Components.AtomicRefineModal, HTMLElement {}
export const AtomicRefineModal: {
    prototype: AtomicRefineModal;
    new (): AtomicRefineModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
