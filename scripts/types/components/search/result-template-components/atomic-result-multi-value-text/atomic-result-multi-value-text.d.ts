import { BreadcrumbManager } from '@coveo/headless';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-multi-value-text` component renders the values of a multi-value string field.
 * @part result-multi-value-text-list - The list of field values.
 * @part result-multi-value-text-separator - The separator to display between each of the field values.
 * @part result-multi-value-text-value - A field value.
 * @part result-multi-value-text-value-more - A label indicating some values were omitted.
 * @slot result-multi-value-text-value-* - A custom caption value that's specified for a given part of a multi-text field value. For example, if you want to use `Off-Campus Resident` as a caption value for `Off-campus apartment` in `Off-campus apartment;On-campus apartment`, you'd use `<span slot="result-multi-value-text-value-off-campus-apartment">Off-Campus Resident</span>`). The suffix of this slot corresponds with the field value, written in kebab case.
 */
export declare class AtomicResultMultiValueText {
    breadcrumbManager: BreadcrumbManager;
    bindings: Bindings;
    private result;
    host: HTMLElement;
    error: Error;
    /**
     * The field that the component should use.
     * The component will try to find this field in the `Result.raw` object unless it finds it in the `Result` object first.
     * Make sure this field is present in the `fieldsToInclude` property of the `atomic-search-interface` component.
     */
    field: string;
    /**
     * The maximum number of field values to display.
     * If there are _n_ more values than the specified maximum, the last displayed value will be "_n_ more...".
     */
    maxValuesToDisplay: number;
    /**
     * The delimiter used to separate values when the field isn't indexed as a multi value field.
     */
    delimiter: string | null;
    private sortedValues;
    initialize(): void;
    private get resultValues();
    private get facetSelectedValues();
    private updateSortedValues;
    private getShouldDisplayLabel;
    private getNumberOfValuesToDisplay;
    private renderValue;
    private renderSeparator;
    private renderMoreLabel;
    private renderListItems;
    componentWillRender(): void;
    render(): any;
}
