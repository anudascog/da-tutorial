'use strict';

const index = require('./index-757bc886.js');
const ripple = require('./ripple-fb3f3438.js');
const stencilButtonStyle = require('./stencil-button-style-ba779fe2.js');

/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the radioButton function instead.
 */
const RadioButton = (props) => {
    const classNames = ['btn-radio'];
    let onMouseDown;
    if (props.style) {
        const rippleColor = stencilButtonStyle.getRippleColorForButtonStyle(props.style);
        classNames.push(stencilButtonStyle.getClassNameForButtonStyle(props.style));
        onMouseDown = (e) => ripple.createRipple(e, { color: rippleColor });
    }
    if (props.checked) {
        classNames.push('selected');
    }
    if (props.class) {
        classNames.push(props.class);
    }
    const handleKeyDown = (event) => {
        if (props.selectWhenFocused !== false) {
            return;
        }
        const { key } = event;
        const radioGroup = event.currentTarget.parentNode;
        if (!radioGroup || !isArrowKey(key)) {
            return;
        }
        event.preventDefault();
        const buttons = getRadioButtons(radioGroup);
        const currentIndex = getCurrentIndex(buttons, event.currentTarget);
        const newIndex = getNewIndex(key, currentIndex, buttons.length);
        if (buttons[newIndex]) {
            buttons[newIndex].focus();
        }
    };
    const isArrowKey = (key) => {
        return ['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp'].includes(key);
    };
    const getRadioButtons = (radioGroup) => {
        return Array.from(radioGroup.querySelectorAll('[type="radio"]'));
    };
    const getCurrentIndex = (buttons, currentButton) => {
        return buttons.findIndex((button) => button === currentButton);
    };
    const getNewIndex = (key, currentIndex, length) => {
        switch (key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                return (currentIndex - 1 + length) % length;
            case 'ArrowRight':
            case 'ArrowDown':
                return (currentIndex + 1) % length;
            default:
                return currentIndex;
        }
    };
    const attributes = {
        name: props.groupName,
        key: props.key,
        checked: props.checked,
        class: classNames.join(' '),
        part: props.part,
        'aria-label': props.ariaLabel ?? props.text,
        'aria-current': props.ariaCurrent,
        value: props.text,
        ref: props.ref,
    };
    return (index.h("input", { onKeyDown: handleKeyDown, type: "radio", onChange: (e) => e.currentTarget.checked && props.onChecked?.(), onMouseDown: onMouseDown, ...attributes }));
};

exports.RadioButton = RadioButton;

//# sourceMappingURL=stencil-radio-button-0d881f57.js.map