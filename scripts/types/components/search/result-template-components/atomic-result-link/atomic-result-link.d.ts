import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-link` component automatically transforms a search result title into a clickable link that points to the original item.
 * @slot default - Lets you display alternative content inside the link
 * @slot attributes - Lets you pass [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes) down to the link element, overriding other attributes, to be used exclusively with an "a" tag such as `<a slot="attributes" target="_blank" download></a>`.
 */
export declare class AtomicResultLink implements InitializableComponent {
    bindings: Bindings;
    error: Error;
    private result;
    private interactiveResult;
    private host;
    /**
     * Specifies a template literal from which to generate the `href` attribute value (see
     * [Template literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)).
     *
     * The template literal can reference any number of result properties from the parent result. It can also reference the window object.
     *
     * For example, the following markup generates an `href` value such as `http://uri.com?id=itemTitle`, using the result's `clickUri` and `itemtitle` fields.
     * ```html
     * <atomic-result-link href-template='${clickUri}?id=${raw.itemtitle}'></atomic-result-link>
     * ```
     */
    hrefTemplate?: string;
    private hasDefaultSlot;
    private linkAttributes?;
    private stopPropagation?;
    initialize(): void;
    connectedCallback(): void;
    render(): any;
}
