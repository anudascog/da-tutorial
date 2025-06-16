import { SmartSnippet as InsightSmartSnippet, SmartSnippetFeedback as InsightSmartSnippetFeedback } from '@coveo/headless/insight';
import { EventEmitter } from '../../../../stencil-public-runtime';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { InsightBindings } from '../../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightSmartSnippetFeedbackModal implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    host: HTMLElement;
    smartSnippet: InsightSmartSnippet;
    error: Error;
    source?: HTMLElement;
    isOpen: boolean;
    currentAnswer?: InsightSmartSnippetFeedback | 'other' | undefined;
    private detailsInputRef?;
    private readonly formId;
    feedbackSent: EventEmitter;
    watchToggleOpen(isOpen: boolean): void;
    initialize(): void;
    render(): any;
    private close;
    private sendFeedback;
}
