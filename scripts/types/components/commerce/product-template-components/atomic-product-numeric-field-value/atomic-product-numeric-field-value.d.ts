import { NumberFormatter } from '../../../common/formats/format-common';
import { CommerceBindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @alpha
 * The `atomic-product-numeric-field-value` component renders the value of a number product field.
 *
 * The number can be formatted by adding a `atomic-format-number`, `atomic-format-currency` or `atomic-format-unit` component into this component.
 */
export declare class AtomicProductNumericFieldValue {
    bindings: CommerceBindings;
    private product;
    host: HTMLElement;
    error: Error;
    /**
     * The field that the component should use.
     * The component will try to find this field in the `Product.additionalFields` object unless it finds it in the `Product` object first.
     */
    field: string;
    formatter: NumberFormatter;
    valueToDisplay: string | null;
    setFormat(event: CustomEvent<NumberFormatter>): void;
    private formatValue;
    private updateValueToDisplay;
    componentWillRender(): void;
    render(): string | undefined;
}
