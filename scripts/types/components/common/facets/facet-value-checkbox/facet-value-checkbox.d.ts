import { FunctionalComponentWithChildren } from "../../../../utils/functional-component-utils";
import { FacetValuePropsBase } from '../facet-common';
export type TriStateFacetValueProps = Omit<FacetValuePropsBase, 'isSelected'> & {
    state: 'idle' | 'selected' | 'excluded';
    onExclude(): void;
};
export declare const renderFacetValueCheckbox: FunctionalComponentWithChildren<FacetValuePropsBase | TriStateFacetValueProps>;
