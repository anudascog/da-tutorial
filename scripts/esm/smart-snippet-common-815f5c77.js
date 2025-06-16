import { h } from './index-3f35faca.js';
import { B as Button } from './stencil-button-45a5cdb4.js';
import { R as RadioButton } from './stencil-radio-button-a53ba264.js';
import { H as Heading } from './stencil-heading-2b28a9b9.js';

const Checkmark = `<svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" stroke="currentColor" stroke-linecap="round"/><path d="M4 7.07692L6 9L10 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const Cross = `<svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" stroke="currentColor" stroke-linecap="round"/><path d="M5 9L9 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const SmartSnippetFeedbackBanner = (props) => {
    const inquiryId = 'feedback-inquiry-' + props.id;
    const thankYouId = 'feedback-thank-you-' + props.id;
    const radioGroupName = 'feedback-options-' + props.id;
    const Inquiry = () => (h("span", { id: inquiryId, part: "feedback-inquiry", class: "shrink-0" }, props.i18n.t('smart-snippet-feedback-inquiry')));
    const Buttons = () => (h("div", { part: "feedback-buttons", class: "flex gap-x-4" },
        h("label", { part: "feedback-like-button", class: 'flex items-center gap-x-1.5 ' +
                (props.liked ? 'text-success' : 'cursor-pointer hover:underline') },
            h("atomic-icon", { icon: Checkmark, class: "w-3.5" }),
            h(RadioButton, { groupName: radioGroupName, text: props.i18n.t('yes'), checked: props.liked, onChecked: () => props.onLike(), class: "cursor-[inherit] text-[inherit]" })),
        h("label", { part: "feedback-dislike-button", class: 'flex items-center gap-x-1.5 ' +
                (props.disliked ? 'text-error' : 'cursor-pointer hover:underline') },
            h("atomic-icon", { icon: Cross, class: "w-3.5" }),
            h(RadioButton, { groupName: radioGroupName, text: props.i18n.t('no'), checked: props.disliked, onChecked: () => props.onDislike(), class: "cursor-[inherit] text-[inherit]" }))));
    const ThankYouMessage = () => (h("span", { id: thankYouId, part: "feedback-thank-you", class: "inline-flex" }, props.i18n.t('smart-snippet-feedback-thanks')));
    const ExplainWhyButton = () => (h(Button, { part: "feedback-explain-why-button", style: "text-primary", onClick: () => props.onPressExplainWhy(), ref: (element) => props.explainWhyRef?.(element) }, props.i18n.t('smart-snippet-feedback-explain-why')));
    const ThankYouContainer = ({ visible }) => visible ? (h("div", { part: "feedback-thank-you-wrapper", class: "flex flex-wrap gap-1" },
        h(ThankYouMessage, null),
        props.disliked && !props.feedbackSent ? (h(ExplainWhyButton, null)) : ([]))) : ([]);
    return (h("div", { part: "feedback-banner", class: "flex flex-wrap items-center gap-4 text-sm leading-4" },
        h("div", { part: "feedback-inquiry-and-buttons", role: "radiogroup", "aria-labelledby": inquiryId, class: "inline-flex flex-wrap gap-4" },
            h(Inquiry, null),
            h(Buttons, null)),
        h(ThankYouContainer, { visible: props.liked || props.disliked })));
};

const SmartSnippetWrapper = ({ headingLevel, i18n }, children) => {
    return (h("aside", null,
        h(Heading, { level: headingLevel ?? 0, class: "sr-only" }, i18n.t('smart-snippet')),
        h("article", { class: "bg-background border-neutral text-on-background rounded-lg border p-6 pb-4", part: "smart-snippet" }, children)));
};
const SmartSnippetQuestion = ({ headingLevel, question }) => {
    return (h(Heading, { level: headingLevel ? headingLevel + 1 : 0, class: "text-xl font-bold", part: "question" }, question));
};
const SmartSnippetTruncatedAnswer = ({ answer, style }) => {
    return (h("div", { part: "truncated-answer" },
        h("atomic-smart-snippet-answer", { exportparts: "answer", part: "body", htmlContent: answer, innerStyle: style })));
};
const SmartSnippetFooter = ({ i18n }, children) => {
    return (h("footer", { part: "footer", "aria-label": i18n.t('smart-snippet-source') }, children));
};

export { SmartSnippetQuestion as S, SmartSnippetFooter as a, SmartSnippetFeedbackBanner as b, SmartSnippetWrapper as c, SmartSnippetTruncatedAnswer as d };

//# sourceMappingURL=smart-snippet-common-815f5c77.js.map