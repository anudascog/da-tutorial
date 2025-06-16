'use strict';

const index = require('./index-757bc886.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');
const stencilHeading = require('./stencil-heading-2faee1f7.js');

const SmartSnippetSuggestionsWrapper = ({ headingLevel, i18n }, children) => {
    return (index.h("aside", { part: "container", class: "bg-background border-neutral text-on-background overflow-hidden rounded-lg border" },
        index.h(stencilHeading.Heading, { level: headingLevel, part: "heading", class: "border-neutral border-b px-6 py-4 text-xl leading-8" }, i18n.t('smart-snippet-people-also-ask')),
        index.h("ul", { part: "questions", class: "divide-neutral divide-y" }, children)));
};
const SmartSnippetSuggestionsQuestionWrapper = ({ expanded, key }, children) => {
    return (index.h("li", { key: key, part: `question-answer-${expanded ? 'expanded' : 'collapsed'}`, class: "flex flex-col" },
        index.h("article", { class: "contents" }, children)));
};
const SmartSnippetSuggestionsQuestion = ({ ariaControls, expanded, headingLevel, onClick, question }, atomicIcon) => {
    return (index.h(stencilButton.Button, { style: "text-neutral", part: getQuestionPart('button', expanded), onClick: onClick, class: "flex items-center px-4", ariaExpanded: expanded ? 'true' : undefined, ariaControls: expanded ? ariaControls : undefined },
        atomicIcon,
        index.h(stencilHeading.Heading, { level: headingLevel ? headingLevel + 1 : 0, class: "py-4 text-left text-xl font-bold", part: getQuestionPart('text', expanded) }, question)));
};
const SmartSnippetSuggestionsAnswerAndSourceWrapper = ({ id }, children) => {
    return (index.h("div", { part: "answer-and-source", class: "pr-6 pb-6 pl-10", id: id }, children));
};
const SmartSnippetSuggestionsFooter = ({ i18n }, children) => {
    return (index.h("footer", { part: "footer", "aria-label": i18n.t('smart-snippet-source') }, children));
};
const getQuestionPart = (base, expanded) => `question-${base}-${expanded ? 'expanded' : 'collapsed'}`;

exports.SmartSnippetSuggestionsAnswerAndSourceWrapper = SmartSnippetSuggestionsAnswerAndSourceWrapper;
exports.SmartSnippetSuggestionsFooter = SmartSnippetSuggestionsFooter;
exports.SmartSnippetSuggestionsQuestion = SmartSnippetSuggestionsQuestion;
exports.SmartSnippetSuggestionsQuestionWrapper = SmartSnippetSuggestionsQuestionWrapper;
exports.SmartSnippetSuggestionsWrapper = SmartSnippetSuggestionsWrapper;
exports.getQuestionPart = getQuestionPart;

//# sourceMappingURL=smart-snippet-suggestions-common-d2c3e537.js.map