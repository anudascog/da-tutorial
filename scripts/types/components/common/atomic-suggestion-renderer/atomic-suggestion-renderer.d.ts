import { i18n } from 'i18next';
import { SearchBoxSuggestionElement } from '../suggestions/suggestions-common';
/**
 * The `atomic-suggestion-renderer` component is used to render individual suggestions. It was created to isolate
 * the rendering logic of the 'content' property of the `SearchBoxSuggestionElement` interface. This property can be Stencil
 * VNode or native Element so there must be a Stencil component to render it. For Lit components using this component, they will
 * use native Elements.
 *
 * @internal
 */
export declare class AtomicSuggestionRenderer {
    i18n: i18n;
    id: string;
    suggestion: SearchBoxSuggestionElement;
    isSelected: boolean;
    side: 'left' | 'right';
    index: number;
    lastIndex: number;
    isDoubleList: boolean;
    onClick?: (e: Event) => void;
    onMouseOver?: (e: Event) => void;
    private get parts();
    private get classes();
    private get content();
    private ariaLabel;
    private ensureContentForRenderedSuggestion;
    private isHTMLElement;
    render(): any;
}
