import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-timespan` component renders a target result number field value as a duration.
 */
export declare class AtomicResultTimespan {
    bindings: Bindings;
    private result;
    error: Error;
    /**
     * The target result field.
     * The component first looks for the field in the Result object, and then in the Result.raw object.
     * It is important to include the necessary field in the `atomic-search-interface` component.
     */
    field: string;
    /**
     * The unit of measurement of the field value.
     * Available units: https://day.js.org/docs/en/durations/creating
     */
    unit: string;
    /**
     * The format to apply to the result field value.
     *
     * By default, the format is HH:mm:ss when the duration is under a day, and it is an approximation when longer (days, months or years).
     *
     * The string displayed when there is an approximation can be modified with [localization](https://docs.coveo.com/en/atomic/latest/usage/atomic-localization/).
     *
     * Available formats: https://day.js.org/docs/en/durations/format
     */
    format?: string;
    initialize(): void;
    render(): string;
    private get value();
}
