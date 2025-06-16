import type { Components, JSX } from "../../types/components";

interface AtomicNotifications extends Components.AtomicNotifications, HTMLElement {}
export const AtomicNotifications: {
    prototype: AtomicNotifications;
    new (): AtomicNotifications;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
