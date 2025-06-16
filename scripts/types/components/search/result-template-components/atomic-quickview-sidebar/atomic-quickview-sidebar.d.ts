import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { i18n } from 'i18next';
import type { HighlightKeywords } from '../atomic-quickview-modal/atomic-quickview-modal';
import { QuickviewWordHighlight } from '../quickview-word-highlight/quickview-word-highlight';
export interface QuickviewSidebarProps {
    words: Record<string, QuickviewWordHighlight>;
    i18n: i18n;
    highlightKeywords: HighlightKeywords;
    onHighlightKeywords: (highlight: HighlightKeywords) => void;
    minimized: boolean;
    onMinimize: (minimize: boolean) => void;
}
export declare const QuickviewSidebar: FunctionalComponent<QuickviewSidebarProps>;
