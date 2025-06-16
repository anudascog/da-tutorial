import { FunctionalComponentWithChildren } from "../../../../utils/functional-component-utils";
import { i18n } from 'i18next';
export interface FacetValuesGroupProps {
    i18n: i18n;
    label?: string;
    query?: string;
}
export declare const renderFacetValuesGroup: FunctionalComponentWithChildren<FacetValuesGroupProps>;
