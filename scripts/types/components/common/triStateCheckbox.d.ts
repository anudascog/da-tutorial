import { FunctionalComponent } from "../../utils/functional-component-utils";
import { FacetValueState } from '@coveo/headless';
import '../common/atomic-icon/atomic-icon';
import { CheckboxProps } from './checkbox';
export type TriStateCheckboxProps = Omit<CheckboxProps, 'checked'> & {
    state: FacetValueState;
};
export declare const renderTriStateCheckbox: FunctionalComponent<TriStateCheckboxProps>;
