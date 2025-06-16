import type { SmartSnippetFeedback } from '@coveo/headless';
import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { i18n } from 'i18next';
export declare const SmartSnippetFeedbackModalHeader: FunctionalComponent<{
    i18n: i18n;
}>;
export declare const SmartSnippetFeedbackModalBody: FunctionalComponent<{
    formId: string;
    onSubmit: (e: Event) => void;
}>;
export declare const SmartSnippetFeebackModalOptions: FunctionalComponent<{
    i18n: i18n;
}>;
export declare const SmartSnippetFeedbackModalOption: FunctionalComponent<{
    correspondingAnswer: SmartSnippetFeedback | 'other';
    currentAnswer?: SmartSnippetFeedback | 'other';
    i18n: i18n;
    id: string;
    localeKey: string;
    onChange: (e: Event) => void;
}>;
export declare const SmartSnippetFeedbackModalDetails: FunctionalComponent<{
    currentAnswer?: SmartSnippetFeedback | 'other';
    i18n: i18n;
    setDetailsInputRef: (ref?: HTMLTextAreaElement) => void;
}>;
export declare const SmartSnippetFeedbackModalFooter: FunctionalComponent<{
    formId: string;
    i18n: i18n;
    onClick: (e: MouseEvent) => void;
}>;
export declare const smartSnippetFeedbackOptions: {
    id: string;
    localeKey: string;
    correspondingAnswer: SmartSnippetFeedback | 'other';
}[];
