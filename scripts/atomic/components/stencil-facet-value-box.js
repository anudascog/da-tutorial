import { h } from '@stencil/core/internal/client';
import { B as Button } from './stencil-button.js';

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
    return (h("li", { key: props.displayValue },
        h(Button, { style: "outline-bg-neutral", part: `value-box${props.isSelected ? ' value-box-selected' : ''}`, onClick: () => props.onClick(), class: `value-box group box-border h-full w-full items-center p-2 ${props.isSelected ? 'selected' : ''}`, ariaPressed: props.isSelected.toString(), ariaLabel: ariaLabel, ref: props.buttonRef },
            children,
            h("span", { title: count, part: "value-count", class: "value-box-count text-neutral-dark mt-1 w-full truncate text-sm" }, props.i18n.t('between-parentheses', {
                text: compactCount,
            })))));
};

export { FacetValueBox as F };

//# sourceMappingURL=stencil-facet-value-box.js.map