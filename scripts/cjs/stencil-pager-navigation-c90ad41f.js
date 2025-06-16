'use strict';

const index = require('./index-757bc886.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');
const stencilRadioButton = require('./stencil-radio-button-0d881f57.js');

/**
 * @deprecated use the lit equivalent
 */
const PagerPreviousButton = (props) => {
    return (index.h(stencilButton.Button, { ...props, ariaLabel: props.i18n.t('previous'), style: "outline-primary", part: "previous-button", class: "flex min-h-10 min-w-10 items-center justify-center p-1" },
        index.h("atomic-icon", { icon: props.icon, part: "previous-button-icon", class: "w-5 align-middle" })));
};
/**
 * @deprecated use the lit equivalent
 */
const PagerNextButton = (props) => {
    return (index.h(stencilButton.Button, { ...props, ariaLabel: props.i18n.t('next'), style: "outline-primary", part: "next-button", class: "flex min-h-10 min-w-10 items-center justify-center p-1" },
        index.h("atomic-icon", { icon: props.icon, part: "next-button-icon", class: "w-5 align-middle" })));
};
/**
 * @deprecated use the lit equivalent
 */
const PagerPageButton = (props) => {
    return (index.h(stencilRadioButton.RadioButton, { ...props, selectWhenFocused: false, key: props.page, style: "outline-neutral", checked: props.isSelected, ariaCurrent: props.isSelected ? 'page' : 'false', class: "btn-page focus-visible:bg-neutral-light min-h-10 min-w-10 p-1", part: `page-button${props.isSelected ? ' active-page-button' : ''}` }));
};
/**
 * @deprecated use the lit equivalent
 */
const PagerPageButtons = (props, children) => {
    return (index.h("div", { part: "page-buttons", role: "radiogroup", "aria-label": props.i18n.t('pagination'), class: "contents" }, ...children));
};

/**
 * @deprecated use the lit equivalent
 */
const PagerNavigation = (props, children) => {
    return (index.h("nav", { "aria-label": props.i18n.t('pagination') },
        index.h("div", { part: "buttons", role: "toolbar", class: "flex flex-wrap gap-2" }, ...children)));
};

exports.PagerNavigation = PagerNavigation;
exports.PagerNextButton = PagerNextButton;
exports.PagerPageButton = PagerPageButton;
exports.PagerPageButtons = PagerPageButtons;
exports.PagerPreviousButton = PagerPreviousButton;

//# sourceMappingURL=stencil-pager-navigation-c90ad41f.js.map