import { GeneratedAnswer } from '@coveo/headless';
import { EventEmitter } from '../../../../stencil-public-runtime';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { AnyBindings } from '../../interface/bindings';
/**
 * @internal
 */
export declare class AtomicGeneratedAnswerFeedbackModal implements InitializableComponent<AnyBindings> {
    bindings: AnyBindings;
    host: HTMLElement;
    /**
     * Indicates whether the modal is open.
     */
    isOpen: boolean;
    /**
     * A `GeneratedAnswer` controller instance. It is used when the user interacts with the modal.
     */
    generatedAnswer: GeneratedAnswer;
    /**
     * Indicates whether the answer was helpful or not.
     */
    helpful: boolean;
    error: Error;
    private currentAnswer;
    feedbackSubmitted: boolean;
    answerEvaluationRequired: boolean;
    private readonly formId;
    private detailsInputRef?;
    private linkInputRef?;
    feedbackSent: EventEmitter;
    watchToggleOpen(isOpen: boolean): void;
    private static options;
    private getInitialAnswerState;
    private resetState;
    private clearInputRefs;
    private close;
    private updateBreakpoints;
    private setCurrentAnswer;
    sendFeedback(): void;
    private isAnyAnswerEvaluationUndefined;
    private handleSubmit;
    private renderHeader;
    private renderFeedbackOption;
    private renderAnswerEvaluation;
    private renderOptions;
    private renderLinkToCorrectAnswerField;
    private renderAddNotesField;
    private renderFeedbackForm;
    private renderSuccessMessage;
    private renderBody;
    private renderFeedbackFormFooter;
    private renderSuccessFormFooter;
    private renderFooter;
    render(): any;
}
