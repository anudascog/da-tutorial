import { DateFilterRange, DateRangeRequest } from '@coveo/headless';
import { AnyBindings } from '../../interface/bindings';
/**
 * Internal component made to be integrated in a TimeframeFacet.
 * @internal
 */
export declare class FacetDateInput {
    private start?;
    private end?;
    private startRef;
    private endRef;
    bindings: AnyBindings;
    rangeGetter: () => DateFilterRange | undefined;
    rangeSetter: (range: DateRangeRequest) => void;
    facetId: string;
    label: string;
    min?: string;
    max?: string;
    private applyInput;
    connectedCallback(): void;
    componentDidUpdate(): void;
    private apply;
    private formattedDateValue;
    render(): any;
}
