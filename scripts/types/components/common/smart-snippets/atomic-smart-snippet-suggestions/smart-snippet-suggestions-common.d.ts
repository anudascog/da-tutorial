import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { i18n } from 'i18next';
export declare const SmartSnippetSuggestionsWrapper: FunctionalComponent<{
    headingLevel: number;
    i18n: i18n;
}>;
export declare const SmartSnippetSuggestionsQuestionWrapper: FunctionalComponent<{
    expanded: boolean;
    key: string;
}>;
export declare const SmartSnippetSuggestionsQuestion: FunctionalComponent<{
    ariaControls: string;
    expanded: boolean;
    headingLevel?: number;
    onClick: (event: MouseEvent) => void;
    question: string;
}>;
export declare const SmartSnippetSuggestionsAnswerAndSourceWrapper: FunctionalComponent<{
    expanded: boolean;
    id: string;
}>;
export declare const SmartSnippetSuggestionsFooter: FunctionalComponent<{
    i18n: i18n;
}>;
export declare const getQuestionPart: (base: string, expanded: boolean) => string;
