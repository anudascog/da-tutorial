import { NumericFacet } from '@coveo/headless/commerce';
import { CommerceBindings as Bindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
export type Range = {
    start: number;
    end: number;
};
/**
 * Internal component made to be integrated in a NumericFacet.
 * @alpha
 */
export declare class AtomicCommerceFacetNumberInput {
    private startRef;
    private endRef;
    private start?;
    private end?;
    bindings: Bindings;
    label: string;
    range?: Range;
    facet: NumericFacet;
    private applyInput;
    connectedCallback(): void;
    private apply;
    private get absoluteMinimum();
    private get minimumInputValue();
    private get maximumInputValue();
    render(): any;
}
