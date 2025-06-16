import { h, F as Fragment } from './index-3f35faca.js';
import { L as LocalizedString } from './jsx-utils-9ee1b6a7.js';

const AutoCorrection = ({ i18n, correctedTo, originalQuery, }) => {
    return (h(Fragment, null,
        h("p", { class: "text-on-background mb-1", part: "no-results" },
            h(LocalizedString, { i18n: i18n, key: 'no-results-for-did-you-mean', params: { query: h("b", { part: "highlight" }, originalQuery) } })),
        h("p", { class: "text-on-background", part: "auto-corrected" },
            h(LocalizedString, { i18n: i18n, key: 'query-auto-corrected-to', params: { query: h("b", { part: "highlight" }, correctedTo) } }))));
};

const Correction = ({ i18n, onClick, correctedQuery, }) => {
    return (h("p", { class: "text-on-background", part: "did-you-mean" },
        h(LocalizedString, { i18n: i18n, key: "did-you-mean", params: {
                query: (h("button", { class: "text-primary hover:text-primary-light focus-visible:text-primary-light py-1 hover:underline focus-visible:underline", part: "correction-btn", onClick: () => onClick() }, correctedQuery)),
            } })));
};

const QueryCorrectionGuard = ({ hasCorrection }, children) => {
    if (!hasCorrection) {
        return;
    }
    return h(Fragment, null, children);
};

const TriggerCorrection = ({ i18n, correctedQuery, originalQuery, onClick, }) => {
    return (h(Fragment, null,
        h("p", { class: "text-on-background text-lg leading-6", part: "showing-results-for" },
            h(LocalizedString, { i18n: i18n, key: 'showing-results-for', params: { query: h("b", { part: "highlight" }, correctedQuery) } })),
        h("p", { class: "text-on-background text-base leading-5", part: "search-instead-for" },
            h(LocalizedString, { i18n: i18n, key: "search-instead-for", params: {
                    query: (h("button", { class: "text-primary hover:text-primary-light focus-visible:text-primary-light py-1 hover:underline focus-visible:underline", part: "undo-btn", onClick: () => onClick() }, originalQuery)),
                } }))));
};

export { AutoCorrection as A, Correction as C, QueryCorrectionGuard as Q, TriggerCorrection as T };

//# sourceMappingURL=trigger-correction-d0c05aa4.js.map