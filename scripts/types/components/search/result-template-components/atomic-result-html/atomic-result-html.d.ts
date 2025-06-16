import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-html` component renders the HTML value of a string result field.
 *
 * There is an inherent XSS security concern associated with the usage of this component.
 *
 * Use only with fields for which you are certain the data is harmless.
 */
export declare class AtomicResultHtml implements InitializableComponent {
    bindings: Bindings;
    private result;
    private host;
    error: Error;
    /**
     *  The result field which the component should use.
     * If set, Atomic searches for the specified field in the `Result` object first.
     * If there's no such a field, Atomic searches through the `Result.raw` object.
     * It's important to include the necessary field in the `ResultList` component.
     */
    field: string;
    /**
     * Specify if the content should be sanitized, using [`DOMPurify`](https://www.npmjs.com/package/dompurify).
     */
    sanitize: boolean;
    render(): any;
}
