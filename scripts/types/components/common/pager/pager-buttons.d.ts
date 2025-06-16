import "../atomic-icon/atomic-icon";
import { FunctionalComponent, FunctionalComponentWithChildren } from "../../../utils/functional-component-utils";
import { i18n } from 'i18next';
import { ButtonProps } from '../button';
import { RadioButtonProps } from '../radio-button';
interface PagerNavigationButtonProps extends Omit<ButtonProps, 'style' | 'part' | 'class'> {
    icon: string;
    i18n: i18n;
}
export declare const pagerPreviousButton: FunctionalComponent<PagerNavigationButtonProps>;
export declare const pagerNextButton: FunctionalComponent<PagerNavigationButtonProps>;
interface PagerPageButtonProps extends Omit<RadioButtonProps, 'part' | 'style' | 'checked' | 'ariaCurrent' | 'key' | 'class'> {
    page: number;
    isSelected: boolean;
    text: string;
}
export declare const pagerPageButton: FunctionalComponent<PagerPageButtonProps>;
interface PagerPageButtonsProps {
    i18n: i18n;
}
export declare const pagerPageButtons: FunctionalComponentWithChildren<PagerPageButtonsProps>;
export {};
