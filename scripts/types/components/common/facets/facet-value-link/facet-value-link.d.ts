import { FunctionalComponentWithChildren } from "../../../../utils/functional-component-utils";
import { TemplateResult } from 'lit';
import { FacetValuePropsBase } from '../facet-common';
export interface FacetValueLinkProps extends FacetValuePropsBase {
    subList?: TemplateResult;
}
export declare const renderFacetValueLink: FunctionalComponentWithChildren<FacetValueLinkProps>;
