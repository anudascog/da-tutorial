import { multiClassMap } from "../../directives/multi-class-map";
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';
import { createRipple } from '../../utils/ripple';
import { getClassNameForButtonStyle, getRippleColorForButtonStyle, } from './button-style';
export const radioButton = ({ props }) => {
    const classNames = {
        'btn-radio': true,
        selected: Boolean(props.checked),
        ...(props.class && { [props.class]: true }),
        ...(props.style && { [getClassNameForButtonStyle(props.style)]: true }),
    };
    const onMouseDown = (e) => {
        if (props.style) {
            const rippleColor = getRippleColorForButtonStyle(props.style);
            createRipple(e, { color: rippleColor });
        }
    };
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
    const onChange = (e) => {
        const input = e.currentTarget;
        if (input.checked && props.onChecked) {
            props.onChecked();
        }
    };
    const radioButtonRef = props.ref ? ref(props.ref) : nothing;
    return html `
    <input
      type="radio"
      name=${props.groupName}
      class=${multiClassMap(classNames)}
      value=${ifDefined(props.text)}
      part=${ifDefined(props.part)}
      aria-label=${ifDefined(props.ariaLabel ?? props.text)}
      aria-current=${ifDefined(props.ariaCurrent)}
      ?checked=${Boolean(props.checked)}
      .key=${props.key}
      @change=${onChange}
      @keydown=${handleKeyDown}
      @mousedown=${onMouseDown}
      ${radioButtonRef}
    />
  `;
};
