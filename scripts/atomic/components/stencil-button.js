import { h } from '@stencil/core/internal/client';
import { c as createRipple } from './ripple.js';
import { a as getRippleColorForButtonStyle, g as getClassNameForButtonStyle } from './stencil-button-style.js';

/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the button.ts file instead
 */
const Button = (props, children) => {
    const rippleColor = getRippleColorForButtonStyle(props.style);
    const className = getClassNameForButtonStyle(props.style);
    const attributes = {
        class: props.class ? `${className} ${props.class}` : className,
        part: props.part,
        onClick: props.onClick,
        title: props.title,
        type: props.type,
        role: props.role,
        'aria-label': props.ariaLabel,
        'aria-expanded': props.ariaExpanded,
        'aria-pressed': props.ariaPressed,
        'aria-checked': props.ariaChecked,
        'aria-current': props.ariaCurrent,
        'aria-controls': props.ariaControls,
        'aria-hidden': props.ariaHidden,
        disabled: props.disabled,
        ref(buttonEl) {
            if (props.form) {
                buttonEl?.setAttribute('form', props.form);
            }
            if (props.ariaHidden) {
                buttonEl?.setAttribute('aria-hidden', props.ariaHidden);
            }
            if (props.tabIndex) {
                buttonEl?.setAttribute('tabindex', props.tabIndex);
            }
            props.ref?.(buttonEl);
        },
    };
    return (h("button", { ...attributes, onMouseDown: (e) => createRipple(e, { color: rippleColor }) },
        props.text ? h("span", { class: "truncate" }, props.text) : null,
        children));
};

export { Button as B };

//# sourceMappingURL=stencil-button.js.map