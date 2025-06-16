import { Context, ContextState } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { CommerceBindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @alpha
 * The `atomic-product-price` component renders the price of a product.
 */
export declare class AtomicProductPrice implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    error: Error;
    private product;
    context: Context;
    contextState: ContextState;
    initialize(): void;
    private formatValue;
    private parse;
    private getFormattedValue;
    private get hasPromotionalPrice();
    render(): any;
}
