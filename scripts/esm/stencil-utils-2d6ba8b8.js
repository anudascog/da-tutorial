import { h, F as Fragment } from './index-3f35faca.js';

const QuerySummaryContainer = ({ additionalClasses }, children) => {
    return (h("div", { class: `text-on-background${additionalClasses ? ` ${additionalClasses}` : ''}`, part: "container" }, children));
};

const QuerySummaryGuard = ({ hasResults, hasError, firstSearchExecuted }, children) => {
    if (hasError || (!hasResults && firstSearchExecuted)) {
        return;
    }
    if (!firstSearchExecuted) {
        return (h("div", { part: "placeholder", "aria-hidden": "true", class: "bg-neutral my-2 h-6 w-60 animate-pulse rounded" }));
    }
    return h(Fragment, null, children);
};

const WrapHighlight = (props, children) => {
    return (h("span", { class: "font-bold", part: `highlight${props.part ? ` ${props.part}` : ''}` }, children));
};
const getQuerySummaryI18nParameters = (props) => {
    return getQuerySummaryData(props, {
        loadingStatus: 'loading-results',
        itemsForQuery: 'showing-results-of-with-query',
        allItems: 'showing-results-of',
    });
};
const getProductQuerySummaryI18nParameters = (props) => {
    return getQuerySummaryData(props, {
        loadingStatus: 'loading-products',
        itemsForQuery: 'showing-products-of-with-query',
        allItems: 'showing-products-of',
    });
};
const getQuerySummaryData = ({ first, last, query, total, isLoading, i18n }, { allItems, itemsForQuery, loadingStatus }) => {
    const i18nKey = query !== '' ? itemsForQuery : allItems;
    const locale = i18n.language;
    const params = {
        first: first.toLocaleString(locale),
        last: last.toLocaleString(locale),
        total: total.toLocaleString(locale),
        query: query,
        count: last,
    };
    const highlights = {
        first: h(WrapHighlight, null, params.first),
        last: h(WrapHighlight, null, params.last),
        total: h(WrapHighlight, null, params.total),
        query: h(WrapHighlight, { part: "query" }, params.query),
    };
    const ariaLiveMessage = isLoading
        ? i18n.t(loadingStatus)
        : i18n.t(i18nKey, params);
    return { i18nKey, highlights, ariaLiveMessage };
};

export { QuerySummaryContainer as Q, QuerySummaryGuard as a, getQuerySummaryI18nParameters as b, getProductQuerySummaryI18nParameters as g };

//# sourceMappingURL=stencil-utils-2d6ba8b8.js.map