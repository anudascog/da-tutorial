'use strict';

/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the button-style.ts
 * This file is required to be in a tsx file to be able to use it in Stencil components.
 */
function getClassNameForButtonStyle(buttonStyle) {
    switch (buttonStyle) {
        case 'primary':
            return 'btn-primary';
        case 'outline-primary':
            return 'btn-outline-primary';
        case 'outline-neutral':
            return 'btn-outline-neutral';
        case 'outline-error':
            return 'btn-outline-error';
        case 'outline-bg-neutral':
            return 'btn-outline-bg-neutral';
        case 'outline-bg-error':
            return 'btn-outline-bg-error';
        case 'text-primary':
            return 'btn-text-primary';
        case 'text-neutral':
            return 'btn-text-neutral';
        case 'text-transparent':
            return 'btn-text-transparent';
        case 'square-neutral':
            return 'btn-square-neutral';
    }
}
/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the button-style.ts
 * This file is required to be in a tsx file to be able to use it in Stencil components.
 */
function getRippleColorForButtonStyle(buttonStyle) {
    switch (buttonStyle) {
        case 'primary':
            return 'primary';
        case 'text-transparent':
            return 'neutral-light';
        default:
            return 'neutral';
    }
}

exports.getClassNameForButtonStyle = getClassNameForButtonStyle;
exports.getRippleColorForButtonStyle = getRippleColorForButtonStyle;

//# sourceMappingURL=stencil-button-style-ba779fe2.js.map