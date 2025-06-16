import { h } from '@stencil/core/internal/client';
import { B as Button } from './stencil-button.js';

const SmartSnippetFeedbackModalHeader = ({ i18n }) => {
    return h("h1", { slot: "header" }, i18n.t('smart-snippet-feedback-explain-why'));
};
const SmartSnippetFeedbackModalBody = ({ formId, onSubmit }, children) => {
    return (h("form", { part: "form", id: formId, slot: "body", onSubmit: onSubmit, class: "flex flex-col gap-8" }, children));
};
const SmartSnippetFeebackModalOptions = ({ i18n }, children) => {
    return (h("fieldset", null,
        h("legend", { part: "reason-title", class: "text-on-background text-lg font-bold" }, i18n.t('smart-snippet-feedback-select-reason')),
        children));
};
const SmartSnippetFeedbackModalOption = ({ correspondingAnswer, currentAnswer, i18n, id, localeKey, onChange }) => {
    return (h("div", { class: "flex items-center", key: id, part: "reason" },
        h("input", { part: "reason-radio", type: "radio", name: "answer", id: id, checked: currentAnswer === correspondingAnswer, onChange: onChange, class: "mr-2 h-4 w-4", required: true }),
        h("label", { part: "reason-label", htmlFor: id }, i18n.t(localeKey))));
};
const SmartSnippetFeedbackModalDetails = ({ currentAnswer, i18n, setDetailsInputRef }) => {
    if (currentAnswer !== 'other') {
        return;
    }
    return (h("fieldset", null,
        h("legend", { part: "details-title", class: "text-on-background text-lg font-bold" }, i18n.t('details')),
        h("textarea", { part: "details-input", name: "answer-details", ref: setDetailsInputRef, class: "border-neutral mt-2 w-full resize-none rounded border p-2 text-base leading-5", rows: 4, required: true })));
};
const SmartSnippetFeedbackModalFooter = ({ formId, i18n, onClick }) => {
    return (h("div", { part: "buttons", slot: "footer", class: "flex justify-end gap-2" },
        h(Button, { part: "cancel-button", style: "outline-neutral", class: "text-primary", onClick: onClick }, i18n.t('cancel')),
        h(Button, { part: "submit-button", style: "primary", type: "submit", form: formId }, i18n.t('feedback-send'))));
};
const smartSnippetFeedbackOptions = [
    {
        id: 'does-not-answer',
        localeKey: 'smart-snippet-feedback-reason-does-not-answer',
        correspondingAnswer: 'does_not_answer',
    },
    {
        id: 'partially-answers',
        localeKey: 'smart-snippet-feedback-reason-partially-answers',
        correspondingAnswer: 'partially_answers',
    },
    {
        id: 'was-not-a-question',
        localeKey: 'smart-snippet-feedback-reason-was-not-a-question',
        correspondingAnswer: 'was_not_a_question',
    },
    {
        id: 'other',
        localeKey: 'smart-snippet-feedback-reason-other',
        correspondingAnswer: 'other',
    },
];

export { SmartSnippetFeedbackModalHeader as S, SmartSnippetFeedbackModalBody as a, SmartSnippetFeebackModalOptions as b, SmartSnippetFeedbackModalOption as c, SmartSnippetFeedbackModalDetails as d, SmartSnippetFeedbackModalFooter as e, smartSnippetFeedbackOptions as s };

//# sourceMappingURL=smart-snippet-feedback-modal-common.js.map