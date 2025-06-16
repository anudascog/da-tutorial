'use strict';

const index = require('./index-757bc886.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');

const FacetValueBox = (props, children) => {
    const compactCount = new Intl.NumberFormat(props.i18n.language, {
        notation: 'compact',
    }).format(props.numberOfResults);
    const count = props.numberOfResults.toLocaleString(props.i18n.language);
    const ariaLabel = props.i18n.t('facet-value', {
        value: props.displayValue,
        count: props.numberOfResults,
        formattedCount: compactCount,
    });
    return (index.h("li", { key: props.displayValue },
        index.h(stencilButton.Button, { style: "outline-bg-neutral", part: `value-box${props.isSelected ? ' value-box-selected' : ''}`, onClick: () => props.onClick(), class: `value-box group box-border h-full w-full items-center p-2 ${props.isSelected ? 'selected' : ''}`, ariaPressed: props.isSelected.toString(), ariaLabel: ariaLabel, ref: props.buttonRef },
            children,
            index.h("span", { title: count, part: "value-count", class: "value-box-count text-neutral-dark mt-1 w-full truncate text-sm" }, props.i18n.t('between-parentheses', {
                text: compactCount,
            })))));
};

exports.FacetValueBox = FacetValueBox;

//# sourceMappingURL=stencil-facet-value-box-87cb3490.js.map