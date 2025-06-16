import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-date` component renders the value of a date result field.
 */
export declare class AtomicResultDate implements InitializableComponent {
    bindings: Bindings;
    private result;
    host: HTMLElement;
    error: Error;
    /**
     * The result field which the component should use.
     * This will look for the field in the Result object first, and then in the Result.raw object.
     * It is important to include the necessary field in the `atomic-search-interface` component.
     */
    field: string;
    /**
     * Available formats: https://day.js.org/docs/en/display/format
     */
    format: string;
    /**
     * Whether the date should display in the [relative time format](https://day.js.org/docs/en/plugin/calendar).
     *
     * To modify the relative time string, use the [localization feature](https://docs.coveo.com/en/atomic/latest/usage/atomic-localization/).
     */
    relativeTime?: boolean;
    private dateToRender;
    private updateDateToRender;
    componentWillRender(): void;
    render(): string | undefined;
}
