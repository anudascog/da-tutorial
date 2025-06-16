'use strict';

const index = require('./index-757bc886.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');

const LoadMoreContainer = (_, children) => {
    return (index.h("div", { class: "flex flex-col items-center", part: "container" }, children));
};

const LoadMoreGuard = ({ isLoaded, hasResults }, children) => {
    if (!isLoaded || !hasResults) {
        return;
    }
    return index.h(index.Fragment, null, children);
};

const LoadMoreProgressBar = ({ from, to }) => {
    const percentage = (from / to) * 100;
    const width = `${Math.ceil(percentage)}%`;
    return (index.h("div", { part: "progress-bar", class: "bg-neutral relative my-2 h-1 w-72 rounded" },
        index.h("div", { class: "progress-bar absolute top-0 left-0 z-1 h-full overflow-hidden rounded bg-linear-to-r", style: { width } })));
};

/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the button.ts file instead
 */
const LoadMoreButton = ({ i18n, onClick, moreAvailable, label }) => {
    if (!moreAvailable) {
        return;
    }
    return (index.h(stencilButton.Button, { style: "primary", text: i18n.t(label || 'load-more-results'), part: "load-more-results-button", class: "my-2 p-3 font-bold", onClick: () => onClick() }));
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
    return (index.h("div", { class: "text-neutral-dark my-2 text-lg", part: "showing-results", innerHTML: content }));
};

exports.LoadMoreButton = LoadMoreButton;
exports.LoadMoreContainer = LoadMoreContainer;
exports.LoadMoreGuard = LoadMoreGuard;
exports.LoadMoreProgressBar = LoadMoreProgressBar;
exports.LoadMoreSummary = LoadMoreSummary;

//# sourceMappingURL=summary-9bf9a2d2.js.map