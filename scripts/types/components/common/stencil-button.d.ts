import { FunctionalComponent } from '../../stencil-public-runtime';
import { ButtonStyle } from './stencil-button-style';
/**
 * @deprecated Should only be used for Stencil components; for Lit components, use ButtonProps interface instead
 */
export interface StencilButtonProps {
    style: ButtonStyle;
    onClick?(event?: MouseEvent): void;
    class?: string;
    text?: string;
    part?: string;
    type?: string;
    form?: string;
    role?: string;
    disabled?: boolean;
    ariaLabel?: string;
    ariaExpanded?: string;
    ariaPressed?: string;
    ariaChecked?: string;
    ariaCurrent?: string;
    ariaControls?: string;
    ariaHidden?: string;
    tabIndex?: string;
    title?: string;
    ref?(element?: HTMLButtonElement): void;
}
/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the button.ts file instead
 */
export declare const Button: FunctionalComponent<StencilButtonProps>;
