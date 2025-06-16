import { h, F as Fragment } from './index-3f35faca.js';
import { L as LocalizedString } from './jsx-utils-9ee1b6a7.js';

const NoItemsGuard = ({ firstSearchExecuted, isLoading, hasResults }, children) => {
    if (!firstSearchExecuted || isLoading || hasResults) {
        return;
    }
    return h(Fragment, null, children);
};

const NoItems = ({ i18n, query, i18nKey, }) => {
    const content = query ? (h(LocalizedString, { i18n: i18n, key: `${i18nKey}-for`, params: {
            query: (h("span", { class: "inline-block max-w-full truncate align-bottom font-bold whitespace-normal", part: "highlight" },
                h(LocalizedString, { key: "between-quotations", params: { text: query }, i18n: i18n }))),
        } })) : (i18n.t(i18nKey));
    return (h("div", { class: "my-2 max-w-full text-center text-2xl font-medium", part: "no-results" }, content));
};

const SearchTips = ({ i18n }) => {
    return (h("div", { class: "text-neutral-dark my-2 text-center text-lg", part: "search-tips" }, i18n.t('search-tips')));
};

export { NoItems as N, SearchTips as S, NoItemsGuard as a };

//# sourceMappingURL=tips-b34bca80.js.map