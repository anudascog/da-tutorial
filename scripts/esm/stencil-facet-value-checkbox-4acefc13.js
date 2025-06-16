import { h } from './index-3f35faca.js';
import { c as createRipple } from './ripple-81f137d8.js';
import { r as randomID } from './utils-0a01e06c.js';
import { T as Tick$1, S as StencilCheckbox } from './stencil-checkbox-9d8fe5f6.js';
import { C as CloseIcon } from './close-ff816971.js';

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
    return (h("button", { ...attributes, role: "button", onClick: () => props.onToggle?.(!isSelected), onMouseDown: (e) => props.onMouseDown?.(e) },
        h("atomic-icon", { style: { stroke: 'white', fill: 'white' }, class: `w-3/5 ${isSelected || isExcluded ? 'block' : 'hidden'}`, icon: isSelected ? Tick$1 : CloseIcon, part: props.iconPart })));
};

const Tick = `<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m18 2-1.8-2-7.1 7.1-7.1-7.1-2 2 7.1 7.1-7.1 7.1 2 1.8 7.1-6.9 7.1 6.9 1.8-1.8-6.9-7.1z"/></svg>`;

const FacetValueExclude = (props) => {
    return (h("button", { part: "value-exclude-button", "aria-label": props.ariaLabel, class: "value-exclude-button peer invisible absolute right-2 z-1 order-last ml-auto flex group-hover:visible", onClick: () => props.onClick?.() },
        h("atomic-icon", { class: "bg-neutral hover:bg-error order-last w-4 rounded p-1 hover:fill-white", icon: Tick })));
};

const FacetValueCheckbox = (props, children) => {
    const id = randomID('facet-value-');
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
            onMouseDown: (e) => createRipple(e, { color: 'neutral', parent: labelRef }),
            iconPart: 'value-checkbox-icon',
        };
        if (isTriStateCheckbox(props)) {
            return h(TriStateCheckbox, { ...attributes, state: props.state });
        }
        return h(StencilCheckbox, { ...attributes, checked: props.isSelected });
    };
    const renderExclusion = () => {
        if (isTriStateCheckbox(props)) {
            return (h(FacetValueExclude, { onClick: () => props.onExclude?.(), ariaLabel: excludedAriaLabel }));
        }
    };
    return (h("li", { key: props.displayValue, class: "group relative flex items-center" },
        renderCheckbox(),
        h("label", { ref: (ref) => (labelRef = ref), htmlFor: id, part: "value-checkbox-label", class: "items-center", onMouseDown: (e) => createRipple(e, { color: 'neutral' }), "aria-hidden": "true" },
            children,
            h("span", { part: "value-count", class: "value-count" }, props.i18n.t('between-parentheses', {
                text: count,
            }))),
        renderExclusion()));
};

export { FacetValueCheckbox as F };

//# sourceMappingURL=stencil-facet-value-checkbox-4acefc13.js.map