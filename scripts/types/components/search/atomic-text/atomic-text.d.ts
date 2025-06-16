import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-text` component leverages the I18n translation module through the atomic-search-interface.
 */
export declare class AtomicText implements InitializableComponent {
    bindings: Bindings;
    private strings;
    error: Error;
    /**
     * The string key value.
     */
    value: string;
    /**
     * The count value used for plurals.
     */
    count?: number;
    connectedCallback(): void;
    render(): string;
}
