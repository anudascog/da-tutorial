export type ButtonStyle = 'primary' | 'outline-primary' | 'outline-neutral' | 'outline-error' | 'outline-bg-neutral' | 'outline-bg-error' | 'text-primary' | 'text-neutral' | 'text-transparent' | 'square-neutral';
/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the button-style.ts
 * This file is required to be in a tsx file to be able to use it in Stencil components.
 */
export declare function getClassNameForButtonStyle(buttonStyle: ButtonStyle): "btn-primary" | "btn-outline-primary" | "btn-outline-neutral" | "btn-outline-error" | "btn-outline-bg-neutral" | "btn-outline-bg-error" | "btn-text-primary" | "btn-text-neutral" | "btn-text-transparent" | "btn-square-neutral";
/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the button-style.ts
 * This file is required to be in a tsx file to be able to use it in Stencil components.
 */
export declare function getRippleColorForButtonStyle(buttonStyle: ButtonStyle): "primary" | "neutral-light" | "neutral";
