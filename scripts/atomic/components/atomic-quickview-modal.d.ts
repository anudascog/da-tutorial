import type { Components, JSX } from "../../types/components";

interface AtomicQuickviewModal extends Components.AtomicQuickviewModal, HTMLElement {}
export const AtomicQuickviewModal: {
    prototype: AtomicQuickviewModal;
    new (): AtomicQuickviewModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
