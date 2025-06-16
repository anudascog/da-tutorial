'use strict';

const index = require('./index-757bc886.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');
const stencilRadioButton = require('./stencil-radio-button-0d881f57.js');
const stencilHeading = require('./stencil-heading-2faee1f7.js');

const Checkmark = `<svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" stroke="currentColor" stroke-linecap="round"/><path d="M4 7.07692L6 9L10 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const Cross = `<svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" stroke="currentColor" stroke-linecap="round"/><path d="M5 9L9 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const SmartSnippetFeedbackBanner = (props) => {
    const inquiryId = 'feedback-inquiry-' + props.id;
    const thankYouId = 'feedback-thank-you-' + props.id;
    const radioGroupName = 'feedback-options-' + props.id;
    const Inquiry = () => (index.h("span", { id: inquiryId, part: "feedback-inquiry", class: "shrink-0" }, props.i18n.t('smart-snippet-feedback-inquiry')));
    const Buttons = () => (index.h("div", { part: "feedback-buttons", class: "flex gap-x-4" },
        index.h("label", { part: "feedback-like-button", class: 'flex items-center gap-x-1.5 ' +
                (props.liked ? 'text-success' : 'cursor-pointer hover:underline') },
            index.h("atomic-icon", { icon: Checkmark, class: "w-3.5" }),
            index.h(stencilRadioButton.RadioButton, { groupName: radioGroupName, text: props.i18n.t('yes'), checked: props.liked, onChecked: () => props.onLike(), class: "cursor-[inherit] text-[inherit]" })),
        index.h("label", { part: "feedback-dislike-button", class: 'flex items-center gap-x-1.5 ' +
                (props.disliked ? 'text-error' : 'cursor-pointer hover:underline') },
            index.h("atomic-icon", { icon: Cross, class: "w-3.5" }),
            index.h(stencilRadioButton.RadioButton, { groupName: radioGroupName, text: props.i18n.t('no'), checked: props.disliked, onChecked: () => props.onDislike(), class: "cursor-[inherit] text-[inherit]" }))));
    const ThankYouMessage = () => (index.h("span", { id: thankYouId, part: "feedback-thank-you", class: "inline-flex" }, props.i18n.t('smart-snippet-feedback-thanks')));
    const ExplainWhyButton = () => (index.h(stencilButton.Button, { part: "feedback-explain-why-button", style: "text-primary", onClick: () => props.onPressExplainWhy(), ref: (element) => props.explainWhyRef?.(element) }, props.i18n.t('smart-snippet-feedback-explain-why')));
    const ThankYouContainer = ({ visible }) => visible ? (index.h("div", { part: "feedback-thank-you-wrapper", class: "flex flex-wrap gap-1" },
        index.h(ThankYouMessage, null),
        props.disliked && !props.feedbackSent ? (index.h(ExplainWhyButton, null)) : ([]))) : ([]);
    return (index.h("div", { part: "feedback-banner", class: "flex flex-wrap items-center gap-4 text-sm leading-4" },
        index.h("div", { part: "feedback-inquiry-and-buttons", role: "radiogroup", "aria-labelledby": inquiryId, class: "inline-flex flex-wrap gap-4" },
            index.h(Inquiry, null),
            index.h(Buttons, null)),
        index.h(ThankYouContainer, { visible: props.liked || props.disliked })));
};

const SmartSnippetWrapper = ({ headingLevel, i18n }, children) => {
    return (index.h("aside", null,
        index.h(stencilHeading.Heading, { level: headingLevel ?? 0, class: "sr-only" }, i18n.t('smart-snippet')),
        index.h("article", { class: "bg-background border-neutral text-on-background rounded-lg border p-6 pb-4", part: "smart-snippet" }, children)));
};
const SmartSnippetQuestion = ({ headingLevel, question }) => {
    return (index.h(stencilHeading.Heading, { level: headingLevel ? headingLevel + 1 : 0, class: "text-xl font-bold", part: "question" }, question));
};
const SmartSnippetTruncatedAnswer = ({ answer, style }) => {
    return (index.h("div", { part: "truncated-answer" },
        index.h("atomic-smart-snippet-answer", { exportparts: "answer", part: "body", htmlContent: answer, innerStyle: style })));
};
const SmartSnippetFooter = ({ i18n }, children) => {
    return (index.h("footer", { part: "footer", "aria-label": i18n.t('smart-snippet-source') }, children));
};

exports.SmartSnippetFeedbackBanner = SmartSnippetFeedbackBanner;
exports.SmartSnippetFooter = SmartSnippetFooter;
exports.SmartSnippetQuestion = SmartSnippetQuestion;
exports.SmartSnippetTruncatedAnswer = SmartSnippetTruncatedAnswer;
exports.SmartSnippetWrapper = SmartSnippetWrapper;

//# sourceMappingURL=smart-snippet-common-001e499a.js.map