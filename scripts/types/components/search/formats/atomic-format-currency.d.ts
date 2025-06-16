/**
 * The `atomic-format-currency` component is used for formatting currencies.
 * The numerical format of compatible parents will be set according to the currency property of this component.
 */
export declare class AtomicFormatCurrency {
    private host;
    error: Error;
    /**
     * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB.
     * See the current [currency & funds code list](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency).
     */
    currency: string;
    private format;
    componentWillLoad(): void;
    render(): any;
}
