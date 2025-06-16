import { QuickviewState, Quickview } from '@coveo/headless';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { FocusTargetController } from '../../../utils/stencil-accessibility-utils';
import { Bindings } from '../../search/atomic-search-interface/atomic-search-interface';
/**
 * @internal
 */
export declare class AtomicInsightResultQuickviewAction implements InitializableComponent {
    bindings: Bindings;
    private result;
    private buttonFocusTarget?;
    host: HTMLElement;
    error: Error;
    quickview: Quickview;
    quickviewState: QuickviewState;
    /**
     * The `sandbox` attribute to apply to the quickview iframe.
     *
     * The quickview is loaded inside an iframe with a [`sandbox`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox) attribute for security reasons.
     *
     * This attribute exists primarily to protect against potential XSS attacks that could originate from the document being displayed.
     *
     * By default, the sandbox attributes are: `allow-popups allow-top-navigation allow-same-origin`.
     *
     * `allow-same-origin` is not optional, and must always be included in the list of allowed capabilities for the component to function properly.
     */
    sandbox: string;
    protected quickviewAriaMessage: string;
    onNextQuickview(evt: Event): void;
    onPreviousQuickview(evt: Event): void;
    private quickviewModalRef?;
    get focusTarget(): FocusTargetController;
    initialize(): void;
    private addQuickviewModalIfNeeded;
    private updateModalContent;
    private onClick;
    private get shouldRenderQuickview();
    render(): any;
}
