import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { i18n } from 'i18next';
export interface SmartSnippetQuestionProps {
    headingLevel?: number;
    question: string;
}
export declare const SmartSnippetWrapper: FunctionalComponent<{
    headingLevel?: number;
    i18n: i18n;
}>;
export declare const SmartSnippetQuestion: FunctionalComponent<{
    headingLevel?: number;
    question: string;
}>;
export declare const SmartSnippetTruncatedAnswer: FunctionalComponent<{
    answer: string;
    style?: string;
}>;
export declare const SmartSnippetFooter: FunctionalComponent<{
    i18n: i18n;
}>;
