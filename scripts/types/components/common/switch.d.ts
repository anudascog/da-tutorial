import { FunctionalComponent } from '../../stencil-public-runtime';
export interface SwitchProps {
    checked?: boolean;
    onToggle?(checked: boolean): void;
    ariaLabel?: string;
    part?: string;
    tabIndex?: number;
    title?: string;
    withToggle?: boolean;
}
export declare const Switch: FunctionalComponent<SwitchProps>;
