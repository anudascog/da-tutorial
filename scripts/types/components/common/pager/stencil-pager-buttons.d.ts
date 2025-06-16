import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
import { StencilButtonProps } from '../stencil-button';
import { StencilRadioButtonProps } from '../stencil-radio-button';
/**
 * @deprecated use the lit equivalent
 */
export interface PagerNavigationButtonProps extends Omit<StencilButtonProps, 'style' | 'part' | 'class'> {
    icon: string;
    i18n: i18n;
}
/**
 * @deprecated use the lit equivalent
 */
export interface PagerPageButtonProps extends Omit<StencilRadioButtonProps, 'part' | 'style' | 'checked' | 'ariaCurrent' | 'key' | 'class' | 'ref'> {
    page: number;
    isSelected: boolean;
    text: string;
}
/**
 * @deprecated use the lit equivalent
 */
export interface PagerPageButtonsProps {
    i18n: i18n;
}
/**
 * @deprecated use the lit equivalent
 */
export declare const PagerPreviousButton: FunctionalComponent<PagerNavigationButtonProps>;
/**
 * @deprecated use the lit equivalent
 */
export declare const PagerNextButton: FunctionalComponent<PagerNavigationButtonProps>;
/**
 * @deprecated use the lit equivalent
 */
export declare const PagerPageButton: FunctionalComponent<PagerPageButtonProps>;
/**
 * @deprecated use the lit equivalent
 */
export declare const PagerPageButtons: FunctionalComponent<PagerPageButtonsProps>;
