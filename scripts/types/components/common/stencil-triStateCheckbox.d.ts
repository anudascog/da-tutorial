import { FacetValueState } from '@coveo/headless';
import { FunctionalComponent } from '../../stencil-public-runtime';
import { StencilCheckboxProps } from './stencil-checkbox';
export type TriStateCheckboxProps = Omit<StencilCheckboxProps, 'checked'> & {
    state: FacetValueState;
};
/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the triStateCheckbox.ts
 * This file is required to be in a tsx file to be able to use it in Stencil components.
 */
export declare const TriStateCheckbox: FunctionalComponent<TriStateCheckboxProps>;
