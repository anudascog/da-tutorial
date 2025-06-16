import { TermsToHighlight } from '@coveo/headless';
export declare const HIGHLIGHT_PREFIX = "CoveoHighlight";
export declare class QuickviewWordHighlight {
    private stemmingInfoFromIndex;
    text: string;
    indexIdentifier: string;
    occurrences: number;
    color: string;
    focusedColor: string;
    previewBorderColor: string;
    elements: HTMLElement[];
    private currentNavigationPosition;
    constructor(stemmingInfoFromIndex: TermsToHighlight, keywordElementInIframe: HTMLElement);
    addElement(keywordElementInIframe: HTMLElement): void;
    navigateForward(): HTMLElement;
    navigateBackward(): HTMLElement;
    private isTaggedWord;
    private highlightNavigation;
    private putElementIntoView;
    private getText;
    private resolveOriginalTerm;
    private getHighlightedInnerText;
    private parseKeywordIdentifier;
    private getTextOfHTMLElement;
    private computeInvertedColor;
    private computeSaturatedColor;
    private extractRgb;
}
export declare const getWordsHighlights: (stemmingInfoFromIndex: TermsToHighlight, iframe?: HTMLIFrameElement) => Record<string, QuickviewWordHighlight>;
