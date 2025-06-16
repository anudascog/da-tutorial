import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-text` component renders the value of a string result field.
 */
export declare class AtomicResultText implements InitializableComponent {
    bindings: Bindings;
    private result;
    private host;
    error: Error;
    /**
     * The result field which the component should use.
     * This will look in the Result object first, and then in the Result.raw object for the fields.
     * It is important to include the necessary field in the `atomic-search-interface` component.
     */
    field: string;
    /**
     * When this is set to `true`, the component attempts to highlight text based on the highlighting properties provided by the search API response.
     */
    shouldHighlight: boolean;
    /**
     * The locale key for the text to display when the configured field has no value.
     */
    default?: string;
    render(): any;
}
