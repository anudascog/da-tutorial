import { InlineLink } from '@coveo/headless';
import { EventEmitter } from '../../../../stencil-public-runtime';
import { AnyBindings } from '../../interface/bindings';
/**
 * @internal
 */
export declare class AtomicSmartSnippetExpandableAnswer {
    bindings: AnyBindings;
    error: Error;
    host: HTMLElement;
    expanded: boolean;
    htmlContent: string;
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
     * expandableAnswer.snippetStyle = `
     *   b {
     *     color: blue;
     *   }
     * `;
     * ```
     */
    snippetStyle?: string;
    fullHeight?: number;
    expand: EventEmitter;
    collapse: EventEmitter;
    selectInlineLink: EventEmitter<InlineLink>;
    beginDelayedSelectInlineLink: EventEmitter<InlineLink>;
    cancelPendingSelectInlineLink: EventEmitter<InlineLink>;
    private validateProps;
    initialize(): void;
    fullHeightUpdated(): void;
    private establishInitialHeight;
    private get showButton();
    private get isExpanded();
    componentWillLoad(): Promise<void>;
    renderAnswer(): any;
    renderButton(): any;
    render(): any;
}
