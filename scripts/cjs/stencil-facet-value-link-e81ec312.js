'use strict';

const index = require('./index-757bc886.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');

const FacetValueLink = (props, children) => {
    const count = props.numberOfResults.toLocaleString(props.i18n.language);
    const ariaLabel = props.i18n.t('facet-value', {
        value: props.displayValue,
        count: props.numberOfResults,
        formattedCount: count,
        interpolation: { escapeValue: false },
    });
    let part = props.part ?? `value-link${props.isSelected ? ' value-link-selected' : ''}`;
    if (props.additionalPart) {
        part += ` ${props.additionalPart}`;
    }
    return (index.h("li", { key: props.displayValue, class: props.class },
        index.h(stencilButton.Button, { style: "text-neutral", part: part, onClick: () => props.onClick(), class: "group flex w-full items-center truncate px-2 py-2.5 text-left focus-visible:outline-none", ariaPressed: props.isSelected.toString(), ariaLabel: ariaLabel, ref: props.buttonRef },
            children,
            index.h("span", { part: "value-count", class: "value-count" }, props.i18n.t('between-parentheses', {
                text: count,
            }))),
        props.subList));
};

exports.FacetValueLink = FacetValueLink;

//# sourceMappingURL=stencil-facet-value-link-e81ec312.js.map