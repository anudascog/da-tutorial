'use strict';

const index = require('./index-757bc886.js');
const ripple = require('./ripple-fb3f3438.js');
const stencilButtonStyle = require('./stencil-button-style-ba779fe2.js');

/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the button.ts file instead
 */
const Button = (props, children) => {
    const rippleColor = stencilButtonStyle.getRippleColorForButtonStyle(props.style);
    const className = stencilButtonStyle.getClassNameForButtonStyle(props.style);
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
    return (index.h("button", { ...attributes, onMouseDown: (e) => ripple.createRipple(e, { color: rippleColor }) },
        props.text ? index.h("span", { class: "truncate" }, props.text) : null,
        children));
};

exports.Button = Button;

//# sourceMappingURL=stencil-button-ac56f2c3.js.map