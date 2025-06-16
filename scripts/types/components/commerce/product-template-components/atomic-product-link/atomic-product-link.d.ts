import { InitializableComponent } from '../../../../utils/initialization-utils';
import { CommerceBindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @alpha
 * The `atomic-product-link` component automatically transforms a search product title into a clickable link that points to the original item.
 * @slot default - Lets you display alternative content inside the link.
 * @slot attributes - Lets you pass [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes) down to the link element, overriding other attributes. Use only with an "a" tag, e.g., `<a slot="attributes" target="_blank" download></a>`.
 *
 */
export declare class AtomicProductLink implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    error: Error;
    static isCompatibleWithProductList: boolean;
    private product;
    private interactiveProduct;
    private host;
    /**
     * The [template literal](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals) from which to generate the `href` attribute value
     *
     * The template literal can reference any number of product properties from the parent product. It can also reference the window object.
     *
     * For example, the following markup generates an `href` value such as `http://uri.com?id=itemTitle`, using the product's `clickUri` and `itemtitle` fields.
     * ```html
     * <atomic-product-link href-template='${clickUri}?id=${permanentId}'></atomic-product-link>
     * ```
     */
    hrefTemplate?: string;
    private hasDefaultSlot;
    private linkAttributes?;
    private stopPropagation?;
    private logWarningIfNeed;
    initialize(): void;
    connectedCallback(): void;
    render(): any;
}
