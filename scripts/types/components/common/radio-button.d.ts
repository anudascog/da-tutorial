import { FunctionalComponent } from "../../utils/functional-component-utils";
import { RefOrCallback } from 'lit/directives/ref.js';
import { ButtonStyle } from './button-style';
export interface RadioButtonProps {
    groupName: string;
    selectWhenFocused?: boolean;
    onChecked?(): void;
    style?: ButtonStyle;
    key?: string | number;
    checked?: boolean;
    class?: string;
    text?: string;
    part?: string;
    ariaLabel?: string;
    ariaCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false';
    ref?: RefOrCallback;
}
export declare const radioButton: FunctionalComponent<RadioButtonProps>;
