import { h, Fragment } from '@stencil/core/internal/client';
import { B as Button } from './stencil-button.js';
import { C as CloseIcon } from './close.js';

const ELLIPSIS = '...';
const SEPARATOR = ' / ';
function limitPath(path, pathLimit) {
    if (path.length <= pathLimit) {
        return path.join(SEPARATOR);
    }
    if (pathLimit === 1 && path.length > 1) {
        return [ELLIPSIS, path[path.length - 1]].join(SEPARATOR);
    }
    const ellipsedPath = [path[0], ELLIPSIS, ...path.slice(-(pathLimit - 1))];
    return ellipsedPath.join(SEPARATOR);
}
function joinBreadcrumbValues(breadcrumb) {
    return Array.isArray(breadcrumb.formattedValue)
        ? breadcrumb.formattedValue.join(SEPARATOR)
        : breadcrumb.formattedValue;
}
function getFirstBreadcrumbValue(breadcrumb, pathLimit) {
    return Array.isArray(breadcrumb.formattedValue)
        ? limitPath(breadcrumb.formattedValue, pathLimit)
        : breadcrumb.formattedValue;
}

const BreadcrumbButton = (props, children) => {
    const classNames = [
        'py-2',
        'px-3',
        'flex',
        'items-center',
        'rounded-xl',
        'group',
    ];
    const fullValue = joinBreadcrumbValues(props.breadcrumb);
    const value = getFirstBreadcrumbValue(props.breadcrumb, props.pathLimit);
    const title = `${props.breadcrumb.label}: ${fullValue}`;
    const isExclusion = props.breadcrumb.state === 'excluded';
    return (h("li", { class: "breadcrumb", key: value },
        h(Button, { ref: props.setRef, part: "breadcrumb-button", style: isExclusion ? 'outline-error' : 'outline-bg-neutral', class: classNames.join(' '), title: title, ariaLabel: props.i18n.t(isExclusion
                ? 'remove-exclusion-filter-on'
                : 'remove-inclusion-filter-on', {
                value: title,
            }), onClick: props.onSelectBreadcrumb }, children)));
};

const BreadcrumbClearAll = (props) => {
    return (h("li", { key: "clear-all" },
        h(Button, { ref: props.setRef, part: "clear", style: "text-primary", text: props.i18n.t('clear'), class: "rounded-xl p-2", ariaLabel: props.i18n.t('clear-all-filters'), onClick: props.onClick })));
};

const BreadcrumbContainer = (props, children) => {
    return (h("div", { part: "container", class: "text-on-background flex text-sm" },
        h("span", { part: "label", class: "py-2.5 pr-2 pl-0 font-bold" }, props.i18n.t('with-colon', {
            text: props.i18n.t('filters'),
        })),
        h("div", { part: "breadcrumb-list-container", class: "relative grow" },
            h("ul", { part: "breadcrumb-list", class: `flex gap-1 ${props.isCollapsed ? 'absolute w-full flex-nowrap' : 'flex-wrap'}` }, children))));
};

const BreadcrumbContent = (props) => {
    const value = getFirstBreadcrumbValue(props.breadcrumb, props.pathLimit);
    const isExclusion = props.breadcrumb.state === 'excluded';
    const activeColor = isExclusion ? 'error' : 'primary';
    return (h(Fragment, null,
        h("span", { part: "breadcrumb-label", class: `max-w-[30ch] truncate group-hover:text-${activeColor} group-focus-visible:text-${activeColor} ${props.breadcrumb.state}` }, props.i18n.t('with-colon', { text: props.breadcrumb.label })),
        h("span", { part: "breadcrumb-value", class: `ml-1 ${`max-w-[30ch] truncate ${props.breadcrumb.state}`}` }, value),
        h("atomic-icon", { part: "breadcrumb-clear", class: "mt-px ml-2 h-2.5 w-2.5", icon: CloseIcon })));
};

const BreadcrumbShowLess = (props) => {
    if (props.isCollapsed) {
        return;
    }
    return (h("li", { key: "show-less" },
        h(Button, { ref: props.setRef, part: "show-less", style: "outline-primary", text: props.i18n.t('show-less'), class: "rounded-xl p-2", onClick: props.onShowLess })));
};

const BreadcrumbShowMore = (props) => {
    if (!props.isCollapsed) {
        return;
    }
    return (h("li", { key: "show-more" },
        h(Button, { ref: props.setRef, part: "show-more", style: "outline-primary", class: "rounded-xl p-2 whitespace-nowrap", onClick: props.onShowMore, ariaLabel: props.i18n.t('show-n-more-filters', {
                value: props.numberOfCollapsedBreadcrumbs,
            }) })));
};

export { BreadcrumbButton as B, BreadcrumbContent as a, BreadcrumbContainer as b, BreadcrumbShowMore as c, BreadcrumbShowLess as d, BreadcrumbClearAll as e };

//# sourceMappingURL=stencil-breadcrumb-show-more.js.map