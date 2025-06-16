/**
 * The `atomic-format-unit` component is used for formatting numbers with units.
 * The numerical format of compatible parents will be set according to the properties of this component.
 */
export declare class AtomicFormatUnit {
    private host;
    error: Error;
    /**
     * The unit to use in unit formatting.
     * Leverages the [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) constructor.
     * The unit must be [sanctioned unit identifier](https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier)
     */
    unit: string;
    /**
     * The unit formatting style to use in unit formatting.
     *
     * * "long" (e.g., 16 litres)
     * * "short" (e.g., 16 l)
     * * "narrow" (e.g., 16l)
     */
    unitDisplay?: 'long' | 'short' | 'narrow';
    componentWillLoad(): void;
    private format;
    render(): any;
}
