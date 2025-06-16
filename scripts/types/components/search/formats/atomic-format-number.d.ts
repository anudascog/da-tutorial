/**
 * The `atomic-format-number` component is used for number formatting.
 * The numerical format of compatible parents will be set according to the properties of this component.
 */
export declare class AtomicFormatNumber {
    private host;
    error: Error;
    /**
     * The minimum number of integer digits to use.
     */
    minimumIntegerDigits?: number;
    /**
     * The minimum number of fraction digits to use.
     */
    minimumFractionDigits?: number;
    /**
     * The maximum number of fraction digits to use.
     */
    maximumFractionDigits?: number;
    /**
     * The minimum number of significant digits to use.
     */
    minimumSignificantDigits?: number;
    /**
     * The maximum number of significant digits to use.
     */
    maximumSignificantDigits?: number;
    componentWillLoad(): void;
    private format;
    render(): any;
}
