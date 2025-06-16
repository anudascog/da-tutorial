import { Quickview, QuickviewState } from '@coveo/headless';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { FocusTargetController } from '../../../../utils/stencil-accessibility-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-quickview` component renders a button which the end user can click to open a modal box containing a preview
 * about a result.
 *
 * The `atomic-quickview` is not meant to replace the `atomic-result-link` to access an item in a result template; it has certain limitations (e.g., custom styles and embedded
 * images/links may not work as expected in an `atomic-quickview`).
 *
 * @part button - The button that opens the quickview modal on click.
 * @part icon - The icon for the quickview button.
 */
export declare class AtomicQuickview implements InitializableComponent {
    bindings: Bindings;
    private result;
    private buttonFocusTarget?;
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
    componentWillUpdate(): void;
    render(): any;
}
