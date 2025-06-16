import { h } from './index-3f35faca.js';
import { B as Button } from './stencil-button-45a5cdb4.js';
import { R as RadioButton } from './stencil-radio-button-a53ba264.js';

/**
 * @deprecated use the lit equivalent
 */
const PagerPreviousButton = (props) => {
    return (h(Button, { ...props, ariaLabel: props.i18n.t('previous'), style: "outline-primary", part: "previous-button", class: "flex min-h-10 min-w-10 items-center justify-center p-1" },
        h("atomic-icon", { icon: props.icon, part: "previous-button-icon", class: "w-5 align-middle" })));
};
/**
 * @deprecated use the lit equivalent
 */
const PagerNextButton = (props) => {
    return (h(Button, { ...props, ariaLabel: props.i18n.t('next'), style: "outline-primary", part: "next-button", class: "flex min-h-10 min-w-10 items-center justify-center p-1" },
        h("atomic-icon", { icon: props.icon, part: "next-button-icon", class: "w-5 align-middle" })));
};
/**
 * @deprecated use the lit equivalent
 */
const PagerPageButton = (props) => {
    return (h(RadioButton, { ...props, selectWhenFocused: false, key: props.page, style: "outline-neutral", checked: props.isSelected, ariaCurrent: props.isSelected ? 'page' : 'false', class: "btn-page focus-visible:bg-neutral-light min-h-10 min-w-10 p-1", part: `page-button${props.isSelected ? ' active-page-button' : ''}` }));
};
/**
 * @deprecated use the lit equivalent
 */
const PagerPageButtons = (props, children) => {
    return (h("div", { part: "page-buttons", role: "radiogroup", "aria-label": props.i18n.t('pagination'), class: "contents" }, ...children));
};

/**
 * @deprecated use the lit equivalent
 */
const PagerNavigation = (props, children) => {
    return (h("nav", { "aria-label": props.i18n.t('pagination') },
        h("div", { part: "buttons", role: "toolbar", class: "flex flex-wrap gap-2" }, ...children)));
};

export { PagerNavigation as P, PagerPreviousButton as a, PagerPageButtons as b, PagerPageButton as c, PagerNextButton as d };

//# sourceMappingURL=stencil-pager-navigation-30cc379b.js.map