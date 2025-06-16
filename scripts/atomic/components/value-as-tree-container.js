import { h } from '@stencil/core/internal/client';
import { A as ArrowLeftIcon } from './arrow-left-rounded.js';
import { B as Button } from './stencil-button.js';
import { g as getFieldValueCaption } from './field-utils.js';
import { F as FacetValueLabelHighlight } from './stencil-facet-value-label-highlight.js';
import { F as FacetValueLink } from './stencil-facet-value-link.js';

const CategoryFacetAllCategoryButton = ({ i18n, onClick }) => {
    const allCategories = i18n.t('all-categories');
    return (h(Button, { style: "text-neutral", part: "all-categories-button", onClick: () => {
            onClick();
        } },
        h("atomic-icon", { "aria-hidden": "true", icon: ArrowLeftIcon, part: "back-arrow" }),
        h("span", { class: "truncate" }, allCategories)));
};

const CategoryFacetValueLink = ({ displayValue, numberOfResults, i18n, onClick, isParent, isSelected, searchQuery, isLeafValue, setRef, }, children) => {
    const partNames = [];
    if (isParent) {
        partNames.push('active-parent');
    }
    else {
        partNames.push(`value-link${isSelected ? ' value-link-selected' : ''}`);
    }
    if (isLeafValue) {
        partNames.push('leaf-value');
    }
    else {
        partNames.push('node-value');
    }
    return (h(FacetValueLink, { displayValue: displayValue, numberOfResults: numberOfResults, isSelected: isSelected, i18n: i18n, onClick: () => {
            onClick();
        }, searchQuery: searchQuery, part: partNames.join(' '), class: "contents", buttonRef: (btn) => setRef(btn), subList: children },
        h(FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected })));
};

const CategoryFacetChildValueLink = (props, children) => {
    return (h(CategoryFacetValueLink, { ...props, isParent: false }, children));
};

const CategoryFacetChildrenAsTreeContainer = ({ className }, children) => {
    return (h("ul", { part: "values", class: className ?? '' }, children));
};

const CategoryFacetParentAsTreeContainer = ({ isTopLevel, className }, children) => {
    return (h("ul", { class: className ?? '', part: `${isTopLevel ? '' : 'sub-'}parents` }, children));
};

const CategoryFacetParentButton = ({ field, facetValue, i18n, onClick }) => {
    const displayValue = getFieldValueCaption(field, facetValue.value, i18n);
    const ariaLabel = i18n.t('facet-value', {
        value: displayValue,
        count: facetValue.numberOfResults,
        formattedCount: facetValue.numberOfResults.toLocaleString(i18n.language),
    });
    return (h(Button, { style: "text-neutral", part: "parent-button", ariaPressed: "false", onClick: () => {
            onClick();
        }, ariaLabel: ariaLabel },
        h("atomic-icon", { icon: ArrowLeftIcon, part: "back-arrow", class: "back-arrow" }),
        h("span", { class: "truncate" }, displayValue)));
};

const CategoryFacetParentValueLink = (props, children) => {
    return (h(CategoryFacetValueLink, { ...props, isParent: true, isSelected: true }, children));
};

const CategoryFacetSearchResultsContainer = (_, children) => {
    return (h("ul", { part: "search-results", class: "mt-3" }, children));
};

const SEPARATOR = '/';
const ELLIPSIS = '...';
const PATH_MAX_LENGTH = 3;
const CategoryFacetSearchValue = ({ value, field, i18n, onClick, searchQuery }) => {
    const count = value.count.toLocaleString(i18n.language);
    const inLabel = i18n.t('in');
    const allCategories = i18n.t('all-categories');
    const localizedPath = value.path.length
        ? value.path.map((value) => getFieldValueCaption(field, value, i18n))
        : [allCategories];
    const ariaLabel = i18n.t('under', {
        child: i18n.t('facet-value', {
            count: value.count,
            formattedCount: count,
            value: value.displayValue,
        }),
        parent: localizedPath.join(', '),
    });
    function ellipsedPath(path) {
        if (path.length <= PATH_MAX_LENGTH) {
            return path;
        }
        const firstPart = path.slice(0, 1);
        const lastParts = path.slice(-PATH_MAX_LENGTH + 1);
        return firstPart.concat(ELLIPSIS, ...lastParts);
    }
    function renderPath(path) {
        if (!path.length) {
            return h("span", { class: "truncate" }, `${inLabel} ${allCategories}`);
        }
        return [
            h("span", { class: "mr-0.5" }, inLabel),
            ellipsedPath(path).map((value, index) => [
                index > 0 && h("span", { class: "mx-0.5" }, SEPARATOR),
                h("span", { class: value === ELLIPSIS ? '' : 'max-w-max flex-1 truncate' }, value),
            ]),
        ];
    }
    return (h("li", { key: value.displayValue },
        h(Button, { style: "text-neutral", part: "search-result", onClick: () => onClick(), class: "group flex w-full flex-col truncate px-2 py-2.5 focus-visible:outline-none", "aria-label": ariaLabel },
            h("div", { class: "flex w-full" },
                h(FacetValueLabelHighlight, { displayValue: value.displayValue, isSelected: false, searchQuery: searchQuery }),
                h("span", { part: "value-count", class: "value-count" }, i18n.t('between-parentheses', {
                    text: count,
                }))),
            h("div", { part: "search-result-path", class: "text-neutral-dark group-focus:text-primary group-hover:text-primary mt-1 flex w-full" }, renderPath(localizedPath)))));
};

const CategoryFacetTreeValueContainer = (_, children) => {
    return h("li", { class: "contents" }, children);
};

export { CategoryFacetTreeValueContainer as C, CategoryFacetAllCategoryButton as a, CategoryFacetParentAsTreeContainer as b, CategoryFacetParentButton as c, CategoryFacetParentValueLink as d, CategoryFacetChildrenAsTreeContainer as e, CategoryFacetChildValueLink as f, CategoryFacetSearchResultsContainer as g, CategoryFacetSearchValue as h };

//# sourceMappingURL=value-as-tree-container.js.map