import { FunctionalComponent } from '../../../stencil-public-runtime';
import { HighlightKeywords, HighlightString } from './render-highlights';
export interface ItemTextHighlightedProps {
    textValue: string;
    highlightKeywords: HighlightKeywords[];
    onError: (error: Error) => void;
    highlightString: HighlightString;
}
export declare const ItemTextHighlighted: FunctionalComponent<ItemTextHighlightedProps>;
