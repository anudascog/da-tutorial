import { FunctionalComponent } from "../../utils/functional-component-utils";
import { RefOrCallback } from 'lit/directives/ref.js';
import './atomic-icon/atomic-icon';
export interface CheckboxProps {
    checked?: boolean;
    onToggle(checked: boolean): void;
    key?: string | number;
    id?: string;
    class?: string;
    text?: string;
    part?: string;
    iconPart?: string;
    ariaLabel?: string;
    ariaCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false';
    ref?: RefOrCallback;
    onMouseDown?(evt: MouseEvent): void;
}
export declare const renderCheckbox: FunctionalComponent<CheckboxProps>;
