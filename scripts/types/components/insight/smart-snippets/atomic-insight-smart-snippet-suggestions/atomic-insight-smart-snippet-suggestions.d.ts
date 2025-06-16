import { SmartSnippetQuestionsList as InsightSmartSnippetQuestionsList, SmartSnippetQuestionsListState as InsightSmartSnippetQuestionsListState } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { InsightBindings } from '../../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightSmartSnippetSuggestions implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    smartSnippetQuestionsList: InsightSmartSnippetQuestionsList;
    smartSnippetQuestionsListState: InsightSmartSnippetQuestionsListState;
    error: Error;
    host: HTMLElement;
    /**
     * The [heading level](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) to use for the "People also ask" heading over the snippets, from 1 to 5.
     */
    headingLevel: number;
    /**
     * Sets the style of the snippets.
     *
     * Example:
     * ```ts
     * smartSnippet.snippetStyle = `
     *   b {
     *     color: blue;
     *   }
     * `;
     * ```
     */
    snippetStyle?: string;
    private id;
    initialize(): void;
    render(): any;
    private renderRelatedQuestion;
    private renderAnswer;
    private renderSource;
    private get style();
    private toggleQuestion;
}
