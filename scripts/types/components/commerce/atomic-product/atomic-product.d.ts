import { Product, InteractiveProduct } from '@coveo/headless/commerce';
import { DisplayConfig } from '../../common/item-list/item-decorators';
import { ItemRenderingFunction } from '../../common/item-list/stencil-item-list-common';
import { ItemDisplayDensity, ItemDisplayImageSize, ItemDisplayLayout } from '../../common/layout/display-options';
import { CommerceStore } from '../atomic-commerce-interface/store';
import { CommerceRecommendationStore } from '../atomic-commerce-recommendation-interface/store';
import { InteractiveProductContextEvent, ProductContextEvent } from '../product-template-components/product-template-decorators';
/**
 * The `atomic-product` component is used internally by the `atomic-commerce-product-list` component.
 * @alpha
 */
export declare class AtomicProduct {
    private layout;
    host: HTMLElement;
    /**
     * Whether an atomic-product-link inside atomic-product should stop click event propagation.
     */
    stopPropagation?: boolean;
    /**
     * The product item.
     */
    product: Product;
    /**
     * The InteractiveProduct item.
     * @alpha
     */
    interactiveProduct: InteractiveProduct;
    /**
     * Global Atomic state.
     * @alpha
     */
    store?: CommerceStore | CommerceRecommendationStore;
    /**
     * The product content to display.
     */
    content?: ParentNode;
    /**
     * The product link to use when the product is clicked in a grid layout.
     *
     * @default - An `atomic-result-link` without any customization.
     */
    linkContent: ParentNode;
    /**
     * How products should be displayed.
     */
    display: ItemDisplayLayout;
    /**
     * How large or small products should be.
     */
    density: ItemDisplayDensity;
    /**
     * The size of the visual section in product list items.
     *
     * This is overwritten by the image size defined in the product content, if it exists.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * The classes to add to the product element.
     */
    classes: string;
    /**
     * @alpha
     */
    loadingFlag?: string;
    /**
     * Internal function used in advanced setups, which lets you bypass the standard HTML template system.
     * Particularly useful for Atomic React
     *
     * @alpha
     */
    renderingFunction: ItemRenderingFunction;
    private productRootRef?;
    private linkContainerRef?;
    private executedRenderingFunctionOnce;
    resolveProduct(event: ProductContextEvent): void;
    resolveInteractiveProduct(event: InteractiveProductContextEvent): void;
    resolveStopPropagation(event: CustomEvent): void;
    resolveProductDisplayConfig(event: ProductContextEvent<DisplayConfig>): void;
    connectedCallback(): void;
    private get isCustomRenderFunctionMode();
    private getContentHTML;
    private getLinkHTML;
    handleClick(event: MouseEvent): void;
    private shouldExecuteRenderFunction;
    render(): any;
    componentDidLoad(): void;
    componentDidRender(): void;
}
