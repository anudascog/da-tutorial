import { SmartSnippet as InsightSmartSnippet, SmartSnippetState as InsightSmartSnippetState } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { InsightBindings } from '../../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightSmartSnippet implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    smartSnippet: InsightSmartSnippet;
    smartSnippetState: InsightSmartSnippetState;
    error: Error;
    host: HTMLElement;
    private id;
    private modalRef?;
    /**
     * The [heading level](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) to use for the question at the top of the snippet, from 1 to 5.
     */
    headingLevel: number;
    /**
     * The maximum height (in pixels) a snippet can have before the component truncates it and displays a "show more" button.
     */
    maximumHeight: number;
    /**
     * When the answer is partly hidden, how much of its height (in pixels) should be visible.
     */
    collapsedHeight: number;
    /**
     * Sets the style of the snippet.
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
    feedbackSent: boolean;
    initialize(): void;
    private setModalRef;
    private setFeedbackSent;
    componentWillUpdate(): void;
    render(): any;
    private get style();
    private loadModal;
}
