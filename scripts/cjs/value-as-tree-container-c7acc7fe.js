'use strict';

const index = require('./index-757bc886.js');
const arrowLeftRounded = require('./arrow-left-rounded-87aa2218.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');
const fieldUtils = require('./field-utils-a715deca.js');
const stencilFacetValueLabelHighlight = require('./stencil-facet-value-label-highlight-c2421e8f.js');
const stencilFacetValueLink = require('./stencil-facet-value-link-e81ec312.js');

const CategoryFacetAllCategoryButton = ({ i18n, onClick }) => {
    const allCategories = i18n.t('all-categories');
    return (index.h(stencilButton.Button, { style: "text-neutral", part: "all-categories-button", onClick: () => {
            onClick();
        } },
        index.h("atomic-icon", { "aria-hidden": "true", icon: arrowLeftRounded.ArrowLeftIcon, part: "back-arrow" }),
        index.h("span", { class: "truncate" }, allCategories)));
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
    return (index.h(stencilFacetValueLink.FacetValueLink, { displayValue: displayValue, numberOfResults: numberOfResults, isSelected: isSelected, i18n: i18n, onClick: () => {
            onClick();
        }, searchQuery: searchQuery, part: partNames.join(' '), class: "contents", buttonRef: (btn) => setRef(btn), subList: children },
        index.h(stencilFacetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected })));
};

const CategoryFacetChildValueLink = (props, children) => {
    return (index.h(CategoryFacetValueLink, { ...props, isParent: false }, children));
};

const CategoryFacetChildrenAsTreeContainer = ({ className }, children) => {
    return (index.h("ul", { part: "values", class: className ?? '' }, children));
};

const CategoryFacetParentAsTreeContainer = ({ isTopLevel, className }, children) => {
    return (index.h("ul", { class: className ?? '', part: `${isTopLevel ? '' : 'sub-'}parents` }, children));
};

const CategoryFacetParentButton = ({ field, facetValue, i18n, onClick }) => {
    const displayValue = fieldUtils.getFieldValueCaption(field, facetValue.value, i18n);
    const ariaLabel = i18n.t('facet-value', {
        value: displayValue,
        count: facetValue.numberOfResults,
        formattedCount: facetValue.numberOfResults.toLocaleString(i18n.language),
    });
    return (index.h(stencilButton.Button, { style: "text-neutral", part: "parent-button", ariaPressed: "false", onClick: () => {
            onClick();
        }, ariaLabel: ariaLabel },
        index.h("atomic-icon", { icon: arrowLeftRounded.ArrowLeftIcon, part: "back-arrow", class: "back-arrow" }),
        index.h("span", { class: "truncate" }, displayValue)));
};

const CategoryFacetParentValueLink = (props, children) => {
    return (index.h(CategoryFacetValueLink, { ...props, isParent: true, isSelected: true }, children));
};

const CategoryFacetSearchResultsContainer = (_, children) => {
    return (index.h("ul", { part: "search-results", class: "mt-3" }, children));
};

const SEPARATOR = '/';
const ELLIPSIS = '...';
const PATH_MAX_LENGTH = 3;
const CategoryFacetSearchValue = ({ value, field, i18n, onClick, searchQuery }) => {
    const count = value.count.toLocaleString(i18n.language);
    const inLabel = i18n.t('in');
    const allCategories = i18n.t('all-categories');
    const localizedPath = value.path.length
        ? value.path.map((value) => fieldUtils.getFieldValueCaption(field, value, i18n))
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
            return index.h("span", { class: "truncate" }, `${inLabel} ${allCategories}`);
        }
        return [
            index.h("span", { class: "mr-0.5" }, inLabel),
            ellipsedPath(path).map((value, index$1) => [
                index$1 > 0 && index.h("span", { class: "mx-0.5" }, SEPARATOR),
                index.h("span", { class: value === ELLIPSIS ? '' : 'max-w-max flex-1 truncate' }, value),
            ]),
        ];
    }
    return (index.h("li", { key: value.displayValue },
        index.h(stencilButton.Button, { style: "text-neutral", part: "search-result", onClick: () => onClick(), class: "group flex w-full flex-col truncate px-2 py-2.5 focus-visible:outline-none", "aria-label": ariaLabel },
            index.h("div", { class: "flex w-full" },
                index.h(stencilFacetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: value.displayValue, isSelected: false, searchQuery: searchQuery }),
                index.h("span", { part: "value-count", class: "value-count" }, i18n.t('between-parentheses', {
                    text: count,
                }))),
            index.h("div", { part: "search-result-path", class: "text-neutral-dark group-focus:text-primary group-hover:text-primary mt-1 flex w-full" }, renderPath(localizedPath)))));
};

const CategoryFacetTreeValueContainer = (_, children) => {
    return index.h("li", { class: "contents" }, children);
};

exports.CategoryFacetAllCategoryButton = CategoryFacetAllCategoryButton;
exports.CategoryFacetChildValueLink = CategoryFacetChildValueLink;
exports.CategoryFacetChildrenAsTreeContainer = CategoryFacetChildrenAsTreeContainer;
exports.CategoryFacetParentAsTreeContainer = CategoryFacetParentAsTreeContainer;
exports.CategoryFacetParentButton = CategoryFacetParentButton;
exports.CategoryFacetParentValueLink = CategoryFacetParentValueLink;
exports.CategoryFacetSearchResultsContainer = CategoryFacetSearchResultsContainer;
exports.CategoryFacetSearchValue = CategoryFacetSearchValue;
exports.CategoryFacetTreeValueContainer = CategoryFacetTreeValueContainer;

//# sourceMappingURL=value-as-tree-container-c7acc7fe.js.map