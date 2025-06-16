import { NumericFilter, NumericFilterState } from '@coveo/headless';
import { AnyBindings } from '../../interface/bindings';
import { NumberInputType } from './number-input-type';
/**
 * Internal component made to be integrated in a NumericFacet.
 * @internal
 */
export declare class FacetNumberInput {
    private start?;
    private end?;
    private startRef;
    private endRef;
    bindings: AnyBindings;
    type: NumberInputType;
    filter: NumericFilter;
    filterState: NumericFilterState;
    label: string;
    private applyInput;
    connectedCallback(): void;
    private apply;
    render(): any;
}
