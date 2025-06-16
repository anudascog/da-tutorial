import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-html` component renders the HTML value of a string.
 *
 * There is an inherent XSS security concern associated with the usage of this component.
 *
 * Use only with values for which you are certain the content is harmless.
 */
export declare class AtomicHtml implements InitializableComponent {
    bindings: Bindings;
    error: Error;
    /**
     * The string value containing HTML to display;
     */
    value: string;
    /**
     * Specify if the content should be sanitized, using [`DOMPurify`](https://www.npmjs.com/package/dompurify).
     */
    sanitize: boolean;
    connectedCallback(): void;
    render(): any;
}
