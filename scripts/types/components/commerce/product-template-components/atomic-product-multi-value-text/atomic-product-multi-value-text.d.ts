import { BreadcrumbManager, ProductListing, Search } from '@coveo/headless/commerce';
import { CommerceBindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @alpha
 *
 * The `atomic-product-multi-value-text` component renders the values of a multi-value string field.
 * @part product-multi-value-text-list - The list of field values.
 * @part product-multi-value-text-separator - The separator to display between each of the field values.
 * @part product-multi-value-text-value - A field value.
 * @part product-multi-value-text-value-more - A label indicating some values were omitted.
 * @slot product-multi-value-text-value-* - A custom caption value that's specified for a given part of a multi-text field value. For example, if you want to use `Off-Campus Resident` as a caption value for `Off-campus apartment` in `Off-campus apartment;On-campus apartment`, you'd use `<span slot="product-multi-value-text-value-off-campus-apartment">Off-Campus Resident</span>`). The suffix of this slot corresponds with the field value, written in kebab case.
 */
export declare class AtomicProductMultiValueText {
    breadcrumbManager: BreadcrumbManager;
    searchOrListing: Search | ProductListing;
    bindings: CommerceBindings;
    private product;
    host: HTMLElement;
    error: Error;
    /**
     * The field that the component should use.
     * The component will try to find this field in the `Product.additionalFields` object unless it finds it in the `Product` object first.
     * Make sure this field is present in the `fieldsToInclude` property of the `atomic-commerce-interface` component.
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
    private get productValues();
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
