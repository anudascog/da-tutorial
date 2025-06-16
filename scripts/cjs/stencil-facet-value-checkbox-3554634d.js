'use strict';

const index = require('./index-757bc886.js');
const ripple = require('./ripple-fb3f3438.js');
const utils = require('./utils-b6642872.js');
const stencilCheckbox = require('./stencil-checkbox-81c51bbd.js');
const close = require('./close-20739950.js');

/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the triStateCheckbox.ts
 * This file is required to be in a tsx file to be able to use it in Stencil components.
 */
const TriStateCheckbox = (props) => {
    const isSelected = props.state === 'selected';
    const isExcluded = props.state === 'excluded';
    const partName = props.part ?? 'checkbox';
    const classNames = [
        'w-4 h-4 grid place-items-center rounded focus-visible:outline-none hover:border-primary-light focus-visible:border-primary-light',
    ];
    const parts = [partName];
    if (isSelected) {
        classNames.push('selected bg-primary hover:bg-primary-light focus-visible:bg-primary-light');
        parts.push(`${partName}-checked`);
    }
    else if (isExcluded) {
        classNames.push('excluded bg-error hover:bg-error focus-visible:bg-error hover:border-error focus-visible:border-error');
        parts.push(`${partName}-checked`);
    }
    else {
        classNames.push('border border-neutral-dark');
    }
    if (props.class) {
        classNames.push(props.class);
    }
    const attributes = {
        key: props.key,
        id: props.id,
        class: classNames.join(' '),
        part: parts.join(' '),
        'aria-pressed': isSelected ? 'true' : isExcluded ? 'mixed' : 'false',
        'aria-label': props.ariaLabel ?? props.text,
        value: props.text,
        ref: props.ref,
    };
    return (index.h("button", { ...attributes, role: "button", onClick: () => props.onToggle?.(!isSelected), onMouseDown: (e) => props.onMouseDown?.(e) },
        index.h("atomic-icon", { style: { stroke: 'white', fill: 'white' }, class: `w-3/5 ${isSelected || isExcluded ? 'block' : 'hidden'}`, icon: isSelected ? stencilCheckbox.Tick : close.CloseIcon, part: props.iconPart })));
};

const Tick = `<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m18 2-1.8-2-7.1 7.1-7.1-7.1-2 2 7.1 7.1-7.1 7.1 2 1.8 7.1-6.9 7.1 6.9 1.8-1.8-6.9-7.1z"/></svg>`;

const FacetValueExclude = (props) => {
    return (index.h("button", { part: "value-exclude-button", "aria-label": props.ariaLabel, class: "value-exclude-button peer invisible absolute right-2 z-1 order-last ml-auto flex group-hover:visible", onClick: () => props.onClick?.() },
        index.h("atomic-icon", { class: "bg-neutral hover:bg-error order-last w-4 rounded p-1 hover:fill-white", icon: Tick })));
};

const FacetValueCheckbox = (props, children) => {
    const id = utils.randomID('facet-value-');
    const count = props.numberOfResults.toLocaleString(props.i18n.language);
    const ariaLabelAttributes = {
        value: props.displayValue,
        count: props.numberOfResults,
        formattedCount: count,
        interpolation: { escapeValue: false },
    };
    const selectedAriaLabel = props.i18n.t('facet-value', ariaLabelAttributes);
    const excludedAriaLabel = props.i18n.t('facet-value-exclude', ariaLabelAttributes);
    let labelRef;
    const isTriStateCheckbox = (a) => {
        return 'state' in a && 'isSelected' in a;
    };
    const renderCheckbox = () => {
        const attributes = {
            id,
            onToggle: () => props.onClick(),
            part: 'value-checkbox',
            class: 'value-checkbox',
            ariaLabel: selectedAriaLabel,
            ref: props.buttonRef,
            onMouseDown: (e) => ripple.createRipple(e, { color: 'neutral', parent: labelRef }),
            iconPart: 'value-checkbox-icon',
        };
        if (isTriStateCheckbox(props)) {
            return index.h(TriStateCheckbox, { ...attributes, state: props.state });
        }
        return index.h(stencilCheckbox.StencilCheckbox, { ...attributes, checked: props.isSelected });
    };
    const renderExclusion = () => {
        if (isTriStateCheckbox(props)) {
            return (index.h(FacetValueExclude, { onClick: () => props.onExclude?.(), ariaLabel: excludedAriaLabel }));
        }
    };
    return (index.h("li", { key: props.displayValue, class: "group relative flex items-center" },
        renderCheckbox(),
        index.h("label", { ref: (ref) => (labelRef = ref), htmlFor: id, part: "value-checkbox-label", class: "items-center", onMouseDown: (e) => ripple.createRipple(e, { color: 'neutral' }), "aria-hidden": "true" },
            children,
            index.h("span", { part: "value-count", class: "value-count" }, props.i18n.t('between-parentheses', {
                text: count,
            }))),
        renderExclusion()));
};

exports.FacetValueCheckbox = FacetValueCheckbox;

//# sourceMappingURL=stencil-facet-value-checkbox-3554634d.js.map