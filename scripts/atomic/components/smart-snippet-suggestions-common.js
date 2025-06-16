import { h } from '@stencil/core/internal/client';
import { B as Button } from './stencil-button.js';
import { H as Heading } from './stencil-heading.js';

const SmartSnippetSuggestionsWrapper = ({ headingLevel, i18n }, children) => {
    return (h("aside", { part: "container", class: "bg-background border-neutral text-on-background overflow-hidden rounded-lg border" },
        h(Heading, { level: headingLevel, part: "heading", class: "border-neutral border-b px-6 py-4 text-xl leading-8" }, i18n.t('smart-snippet-people-also-ask')),
        h("ul", { part: "questions", class: "divide-neutral divide-y" }, children)));
};
const SmartSnippetSuggestionsQuestionWrapper = ({ expanded, key }, children) => {
    return (h("li", { key: key, part: `question-answer-${expanded ? 'expanded' : 'collapsed'}`, class: "flex flex-col" },
        h("article", { class: "contents" }, children)));
};
const SmartSnippetSuggestionsQuestion = ({ ariaControls, expanded, headingLevel, onClick, question }, atomicIcon) => {
    return (h(Button, { style: "text-neutral", part: getQuestionPart('button', expanded), onClick: onClick, class: "flex items-center px-4", ariaExpanded: expanded ? 'true' : undefined, ariaControls: expanded ? ariaControls : undefined },
        atomicIcon,
        h(Heading, { level: headingLevel ? headingLevel + 1 : 0, class: "py-4 text-left text-xl font-bold", part: getQuestionPart('text', expanded) }, question)));
};
const SmartSnippetSuggestionsAnswerAndSourceWrapper = ({ id }, children) => {
    return (h("div", { part: "answer-and-source", class: "pr-6 pb-6 pl-10", id: id }, children));
};
const SmartSnippetSuggestionsFooter = ({ i18n }, children) => {
    return (h("footer", { part: "footer", "aria-label": i18n.t('smart-snippet-source') }, children));
};
const getQuestionPart = (base, expanded) => `question-${base}-${expanded ? 'expanded' : 'collapsed'}`;

export { SmartSnippetSuggestionsWrapper as S, SmartSnippetSuggestionsQuestionWrapper as a, SmartSnippetSuggestionsQuestion as b, SmartSnippetSuggestionsAnswerAndSourceWrapper as c, SmartSnippetSuggestionsFooter as d, getQuestionPart as g };

//# sourceMappingURL=smart-snippet-suggestions-common.js.map