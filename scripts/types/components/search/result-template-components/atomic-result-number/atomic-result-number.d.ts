import { NumberFormatter } from '../../../common/formats/format-common';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-number` component renders the value of a number result field.
 *
 * @slot default - The number can be formatted by adding a `atomic-format-number`, `atomic-format-currency` or `atomic-format-unit` component into this component.
 */
export declare class AtomicResultNumber {
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
    formatter: NumberFormatter;
    valueToDisplay: string | null;
    setFormat(event: CustomEvent<NumberFormatter>): void;
    private parseValue;
    private formatValue;
    private updateValueToDisplay;
    componentWillRender(): void;
    render(): string | undefined;
}
