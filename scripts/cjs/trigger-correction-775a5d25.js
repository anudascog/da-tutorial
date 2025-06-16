'use strict';

const index = require('./index-757bc886.js');
const jsxUtils = require('./jsx-utils-f034a41c.js');

const AutoCorrection = ({ i18n, correctedTo, originalQuery, }) => {
    return (index.h(index.Fragment, null,
        index.h("p", { class: "text-on-background mb-1", part: "no-results" },
            index.h(jsxUtils.LocalizedString, { i18n: i18n, key: 'no-results-for-did-you-mean', params: { query: index.h("b", { part: "highlight" }, originalQuery) } })),
        index.h("p", { class: "text-on-background", part: "auto-corrected" },
            index.h(jsxUtils.LocalizedString, { i18n: i18n, key: 'query-auto-corrected-to', params: { query: index.h("b", { part: "highlight" }, correctedTo) } }))));
};

const Correction = ({ i18n, onClick, correctedQuery, }) => {
    return (index.h("p", { class: "text-on-background", part: "did-you-mean" },
        index.h(jsxUtils.LocalizedString, { i18n: i18n, key: "did-you-mean", params: {
                query: (index.h("button", { class: "text-primary hover:text-primary-light focus-visible:text-primary-light py-1 hover:underline focus-visible:underline", part: "correction-btn", onClick: () => onClick() }, correctedQuery)),
            } })));
};

const QueryCorrectionGuard = ({ hasCorrection }, children) => {
    if (!hasCorrection) {
        return;
    }
    return index.h(index.Fragment, null, children);
};

const TriggerCorrection = ({ i18n, correctedQuery, originalQuery, onClick, }) => {
    return (index.h(index.Fragment, null,
        index.h("p", { class: "text-on-background text-lg leading-6", part: "showing-results-for" },
            index.h(jsxUtils.LocalizedString, { i18n: i18n, key: 'showing-results-for', params: { query: index.h("b", { part: "highlight" }, correctedQuery) } })),
        index.h("p", { class: "text-on-background text-base leading-5", part: "search-instead-for" },
            index.h(jsxUtils.LocalizedString, { i18n: i18n, key: "search-instead-for", params: {
                    query: (index.h("button", { class: "text-primary hover:text-primary-light focus-visible:text-primary-light py-1 hover:underline focus-visible:underline", part: "undo-btn", onClick: () => onClick() }, originalQuery)),
                } }))));
};

exports.AutoCorrection = AutoCorrection;
exports.Correction = Correction;
exports.QueryCorrectionGuard = QueryCorrectionGuard;
exports.TriggerCorrection = TriggerCorrection;

//# sourceMappingURL=trigger-correction-775a5d25.js.map