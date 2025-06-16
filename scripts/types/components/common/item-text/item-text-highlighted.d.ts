import { FunctionalComponent } from "../../../utils/functional-component-utils";
import { HighlightKeywords, HighlightString } from './render-highlights.js';
export interface ItemTextHighlightedProps {
    /**
     * The text value to display with highlights.
     */
    textValue: string;
    /**
     * The keywords to highlight in the text.
     */
    highlightKeywords: HighlightKeywords[];
    /**
     * The function used to highlight strings.
     */
    highlightString: HighlightString;
    /**
     * Error callback function.
     */
    onError?: (error: Error) => void;
}
/**
 * The renderItemTextHighlighted functional component renders text with highlighted keywords.
 */
export declare const renderItemTextHighlighted: FunctionalComponent<ItemTextHighlightedProps>;
