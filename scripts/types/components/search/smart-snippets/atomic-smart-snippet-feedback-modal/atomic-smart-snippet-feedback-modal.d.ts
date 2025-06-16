import { SmartSnippet, SmartSnippetFeedback } from '@coveo/headless';
import { EventEmitter } from '../../../../stencil-public-runtime';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-smart-snippet-feedback-modal` is automatically created as a child of the `atomic-search-interface` when the `atomic-smart-snippet` is initialized.
 *
 * When the modal is opened, the class `atomic-modal-opened` is added to the body, allowing further customization.
 *
 * @part backdrop - The transparent backdrop hiding the content behind the modal.
 * @part container - The modal's outermost container with the outline and background.
 * @part header-wrapper - The wrapper around the header.
 * @part header - The header of the modal, containing the title.
 * @part header-ruler - The horizontal ruler underneath the header.
 * @part body-wrapper - The wrapper around the body.
 * @part body - The body of the modal, between the header and the footer.
 * @part form - The wrapper around the reason and details.
 * @part reason-title - The title above the reason radio buttons.
 * @part reason - A wrapper around the radio button and the label of a reason.
 * @part reason-radio - A radio button representing a reason.
 * @part reason-label - A label linked to a radio button representing a reason.
 * @part details-title - The title above the details input.
 * @part details-input - The input to specify additional details.
 * @part footer-wrapper - The wrapper with a shadow around the footer.
 * @part footer - The footer at the bottom of the modal.
 * @part buttons - The wrapper around the cancel and submit buttons.
 * @part cancel-button - The cancel button.
 * @part submit-button - The submit button.
 */
export declare class AtomicSmartSnippetFeedbackModal implements InitializableComponent {
    bindings: Bindings;
    host: HTMLElement;
    smartSnippet: SmartSnippet;
    error: Error;
    source?: HTMLElement;
    isOpen: boolean;
    currentAnswer?: SmartSnippetFeedback | 'other' | undefined;
    private detailsInputRef?;
    private readonly formId;
    feedbackSent: EventEmitter;
    watchToggleOpen(isOpen: boolean): void;
    initialize(): void;
    render(): any;
    private close;
    private sendFeedback;
}
