import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import { createRipple } from '../../utils/ripple';
import { getRippleColorForButtonStyle, getClassNameForButtonStyle, } from './button-style';
export const renderButton = ({ props }) => (children) => {
    const rippleColor = getRippleColorForButtonStyle(props.style);
    const className = getClassNameForButtonStyle(props.style);
    return html `<button
      type=${ifDefined(props.type)}
      title=${ifDefined(props.title)}
      tabindex=${ifDefined(props.tabIndex)}
      role=${ifDefined(props.role)}
      part=${ifDefined(props.part)}
      form=${ifDefined(props.form)}
      class=${props.class ? `${className} ${props.class}` : className}
      aria-pressed=${ifDefined(props.ariaPressed)}
      aria-label=${ifDefined(props.ariaLabel)}
      aria-hidden=${ifDefined(props.ariaHidden)}
      aria-expanded=${ifDefined(props.ariaExpanded)}
      aria-current=${ifDefined(props.ariaCurrent)}
      aria-controls=${ifDefined(props.ariaControls)}
      aria-checked=${ifDefined(props.ariaChecked)}
      @mousedown=${(e) => createRipple(e, { color: rippleColor })}
      @click=${props.onClick}
      ?disabled=${props.disabled}
      ${props.ref ? ref(props.ref) : nothing}
    >
      ${when(props.text, () => html `<span class="truncate">${props.text}</span>`)}
      ${children}
    </button>`;
};
