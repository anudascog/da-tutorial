import { LitElement } from 'lit';
/**
 * The `atomic-component-error` component is used by other components to render and log errors.
 */
export declare class AtomicComponentError extends LitElement {
    element: HTMLElement;
    error: Error;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'atomic-component-error': AtomicComponentError;
    }
}
