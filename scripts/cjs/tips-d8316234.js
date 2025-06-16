'use strict';

const index = require('./index-757bc886.js');
const jsxUtils = require('./jsx-utils-f034a41c.js');

const NoItemsGuard = ({ firstSearchExecuted, isLoading, hasResults }, children) => {
    if (!firstSearchExecuted || isLoading || hasResults) {
        return;
    }
    return index.h(index.Fragment, null, children);
};

const NoItems = ({ i18n, query, i18nKey, }) => {
    const content = query ? (index.h(jsxUtils.LocalizedString, { i18n: i18n, key: `${i18nKey}-for`, params: {
            query: (index.h("span", { class: "inline-block max-w-full truncate align-bottom font-bold whitespace-normal", part: "highlight" },
                index.h(jsxUtils.LocalizedString, { key: "between-quotations", params: { text: query }, i18n: i18n }))),
        } })) : (i18n.t(i18nKey));
    return (index.h("div", { class: "my-2 max-w-full text-center text-2xl font-medium", part: "no-results" }, content));
};

const SearchTips = ({ i18n }) => {
    return (index.h("div", { class: "text-neutral-dark my-2 text-center text-lg", part: "search-tips" }, i18n.t('search-tips')));
};

exports.NoItems = NoItems;
exports.NoItemsGuard = NoItemsGuard;
exports.SearchTips = SearchTips;

//# sourceMappingURL=tips-d8316234.js.map