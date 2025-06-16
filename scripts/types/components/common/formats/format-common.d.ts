export type NumberFormatter = (value: number, languages: string[]) => string;
export declare const dispatchNumberFormatEvent: (formatter: NumberFormatter, element: Element) => void;
export declare const defaultNumberFormatter: NumberFormatter;
export declare const defaultCurrencyFormatter: (currency: string) => NumberFormatter;
