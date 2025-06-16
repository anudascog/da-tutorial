import { FunctionalComponent } from '../../stencil-public-runtime';
import { RadioButtonProps } from './radio-button';
/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the RadioButtonProps from radio-button.ts instead.
 */
export interface StencilRadioButtonProps extends Omit<RadioButtonProps, 'ref'> {
    ref?(element?: HTMLInputElement): void;
}
/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the radioButton function instead.
 */
export declare const RadioButton: FunctionalComponent<StencilRadioButtonProps>;
