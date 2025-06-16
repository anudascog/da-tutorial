import { ItemDisplayImageSize } from '../../../common/layout/display-options';
/**
 * This section provides visual information about the item.
 * For example, in Commerce, an image is a great shorthand for a product category.
 * An icon can quickly show the item type, or an avatar can help identify to whom it is related.
 *
 * Behavior:
 * * Has a fixed size that depends on the specified image size, the layout, the density, and the screen size.
 * ** When the image size is set to `icon`, this section stays very small.
 * ** You should ensure that elements inside of it take the available space.
 * * Always has a 1:1 aspect ratio.
 */
export declare class AtomicResultSectionVisual {
    private host;
    /**
     * How large or small the visual section of results using this template should be.
     */
    imageSize?: ItemDisplayImageSize;
    componentDidRender(): void;
}
