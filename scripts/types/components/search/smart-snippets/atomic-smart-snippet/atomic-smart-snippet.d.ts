import { InlineLink, SmartSnippet, SmartSnippetState, TabManager, TabManagerState } from '@coveo/headless';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-smart-snippet` component displays the excerpt of a document that would be most likely to answer a particular query.
 *
 * You can style the snippet by inserting a template element as follows:
 * ```html
 * <atomic-smart-snippet>
 *   <template>
 *     <style>
 *       b {
 *         color: blue;
 *       }
 *     </style>
 *   </template>
 * </atomic-smart-snippet>
 * ```
 *
 * @slot source-anchor-attributes - Lets you pass [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes) down to anchor elements, overriding other attributes.
 * To be used exclusively in anchor elements, such as: `<a slot="source-anchor-attributes" target="_blank"></a>`.
 *
 * @part smart-snippet - The wrapper of the entire smart snippet.
 * @part question - The header displaying the question that is answered by the found document excerpt.
 * @part answer - The container displaying the full document excerpt.
 * @part truncated-answer - The container displaying only part of the answer.
 * @part show-more-button - The show more button.
 * @part show-less-button - The show less button.
 * @part body - The body of the smart snippet, containing the truncated answer and the show more or show less button.
 * @part footer - The footer underneath the answer.
 * @part source-url - The URL to the document the excerpt is from.
 * @part source-title - The title of the document the excerpt is from.
 * @part feedback-banner - The feedback banner underneath the source.
 * @part feedback-inquiry-and-buttons - A wrapper around the feedback inquiry and the feedback buttons.
 * @part feedback-inquiry - The message asking the end user to provide feedback on whether the excerpt was useful.
 * @part feedback-buttons - The wrapper around the buttons after the inquiry.
 * @part feedback-like-button - The button allowing the end user to signal that the excerpt was useful.
 * @part feedback-dislike-button - The button allowing the end user to signal that the excerpt wasn't useful.
 * @part feedback-thank-you-container - The wrapper around the 'thank you' message and feedback button.
 * @part feedback-thank-you - The message thanking the end user for providing feedback.
 * @part feedback-explain-why-button - The button a user can press to provide detailed feedback.
 */
export declare class AtomicSmartSnippet implements InitializableComponent {
    bindings: Bindings;
    smartSnippet: SmartSnippet;
    smartSnippetState: SmartSnippetState;
    tabManager: TabManager;
    tabManagerState: TabManagerState;
    error: Error;
    private host;
    private id;
    connectedCallback(): void;
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
    /**
     * The tabs on which the smart snippet can be displayed. This property should not be used at the same time as `tabs-excluded`.
     *
     * Set this property as a stringified JSON array, e.g.,
     * ```html
     *  <atomic-smart-snippet tabs-included='["tabIDA", "tabIDB"]'></atomic-smart-snippet snippet>
     * ```
     * If you don't set this property, the smart snippet can be displayed on any tab. Otherwise, the smart snippet can only be displayed on the specified tabs.
     */
    tabsIncluded: string[] | string;
    /**
     * The tabs on which this smart snippet must not be displayed. This property should not be used at the same time as `tabs-included`.
     *
     * Set this property as a stringified JSON array, e.g.,
     * ```html
     *  <atomic-smart-snippet tabs-excluded='["tabIDA", "tabIDB"]'></atomic-smart-snippet>
     * ```
     * If you don't set this property, the smart snippet can be displayed on any tab. Otherwise, the smart snippet won't be displayed on any of the specified tabs.
     */
    tabsExcluded: string[] | string;
    feedbackSent: boolean;
    snippetMaximumHeight?: number;
    snippetCollapsedHeight?: number;
    onSelectInlineLink(event: CustomEvent<InlineLink>): void;
    onBeginDelayedSelectInlineLink(event: CustomEvent<InlineLink>): void;
    onCancelPendingSelectInlineLink(event: CustomEvent<InlineLink>): void;
    initialize(): void;
    componentWillUpdate(): void;
    render(): any;
    private setModalRef;
    private setFeedbackSent;
    private get style();
    private loadModal;
}
