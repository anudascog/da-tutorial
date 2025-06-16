import { h, F as Fragment } from './index-3f35faca.js';
import { B as Button } from './stencil-button-45a5cdb4.js';

const LoadMoreContainer = (_, children) => {
    return (h("div", { class: "flex flex-col items-center", part: "container" }, children));
};

const LoadMoreGuard = ({ isLoaded, hasResults }, children) => {
    if (!isLoaded || !hasResults) {
        return;
    }
    return h(Fragment, null, children);
};

const LoadMoreProgressBar = ({ from, to }) => {
    const percentage = (from / to) * 100;
    const width = `${Math.ceil(percentage)}%`;
    return (h("div", { part: "progress-bar", class: "bg-neutral relative my-2 h-1 w-72 rounded" },
        h("div", { class: "progress-bar absolute top-0 left-0 z-1 h-full overflow-hidden rounded bg-linear-to-r", style: { width } })));
};

/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the button.ts file instead
 */
const LoadMoreButton = ({ i18n, onClick, moreAvailable, label }) => {
    if (!moreAvailable) {
        return;
    }
    return (h(Button, { style: "primary", text: i18n.t(label || 'load-more-results'), part: "load-more-results-button", class: "my-2 p-3 font-bold", onClick: () => onClick() }));
};

const LoadMoreSummary = ({ i18n, from, to, label, }) => {
    const wrapHighlight = (content) => {
        return `<span class="font-bold text-on-background" part="highlight">${content}</span>`;
    };
    const locale = i18n.language;
    const content = i18n.t(label || 'showing-results-of-load-more', {
        interpolation: { escapeValue: false },
        last: wrapHighlight(from.toLocaleString(locale)),
        total: wrapHighlight(to.toLocaleString(locale)),
    });
    return (h("div", { class: "text-neutral-dark my-2 text-lg", part: "showing-results", innerHTML: content }));
};

export { LoadMoreContainer as L, LoadMoreSummary as a, LoadMoreProgressBar as b, LoadMoreButton as c, LoadMoreGuard as d };

//# sourceMappingURL=summary-ff573e3f.js.map