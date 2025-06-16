import { ItemDisplayImageSize } from '../../../common/layout/display-options';
/**
 * @alpha
 *
 * This section is intended to provide visual information about the product.
 * In commerce, an image is a great shorthand for a product category.
 *
 * Behavior:
 * * Has a fixed size that depends on the specified image size, the layout, the density, and the screen size.
 * ** You should ensure that elements inside of it take the available space.
 * * Always has a 1:1 aspect ratio.
 */
export declare class AtomicProductSectionVisual {
    private host;
    /**
     * How large or small the visual section of product using this template should be.
     */
    imageSize?: Omit<ItemDisplayImageSize, 'icon'>;
    componentDidRender(): void;
}
