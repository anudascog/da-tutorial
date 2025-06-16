import { FunctionalComponentWithChildren } from "../../utils/functional-component-utils";
import { RefOrCallback } from 'lit/directives/ref.js';
import { ButtonStyle } from './button-style';
export interface ButtonProps {
    style: ButtonStyle;
    onClick?(event?: MouseEvent): void;
    class?: string;
    text?: string;
    part?: string;
    type?: 'button' | 'submit' | 'reset' | 'menu';
    form?: string;
    role?: 'status' | 'application' | 'checkbox' | 'button' | 'dialog' | 'img' | 'radiogroup' | 'toolbar' | 'listitem' | 'list' | 'separator';
    disabled?: boolean;
    ariaLabel?: string;
    ariaExpanded?: 'true' | 'false';
    ariaPressed?: 'true' | 'false' | 'mixed';
    ariaChecked?: 'true' | 'false' | 'mixed';
    ariaCurrent?: 'page' | 'false';
    ariaControls?: string;
    ariaHidden?: 'true' | 'false';
    tabIndex?: number;
    title?: string;
    ref?: RefOrCallback;
}
export declare const renderButton: FunctionalComponentWithChildren<ButtonProps>;
