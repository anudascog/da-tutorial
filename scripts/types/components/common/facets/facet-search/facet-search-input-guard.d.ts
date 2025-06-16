import { nothing } from 'lit';
import { Directive } from 'lit/directive.js';
export interface FacetSearchInputGuardProps {
    withSearch: boolean;
    canShowMoreValues: boolean;
    numberOfDisplayedValues: number;
}
declare class FacetSearchInputGuardDirective extends Directive {
    render({ canShowMoreValues, numberOfDisplayedValues, withSearch, }: FacetSearchInputGuardProps, content: () => unknown): import("lit-html").TemplateResult<1> | typeof nothing;
}
export declare const facetSearchInputGuard: (values_0: FacetSearchInputGuardProps, content: () => unknown) => import("lit-html/directive.js").DirectiveResult<typeof FacetSearchInputGuardDirective>;
export {};
