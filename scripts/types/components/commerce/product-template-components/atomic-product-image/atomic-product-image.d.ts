import { InitializableComponent } from '../../../../utils/initialization-utils';
import { CommerceBindings as Bindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-product-image` component renders an image from a product field.
 * @alpha
 */
export declare class AtomicProductImage implements InitializableComponent<Bindings> {
    bindings: Bindings;
    private product;
    private host;
    private useFallback;
    private currentImage;
    private images;
    error: Error;
    /**
     * The product field which the component should use. This will look for the field in the product object first, then in the product.additionalFields object.
     */
    field: string;
    /**
     * The product field that contains the alt text for the images. This will look for the field in the product object first, then in the product.additionalFields object.
     * If the product has multiple images, the value of the `imageAltField` will be used as the alt text for every image.
     *
     * If the field is not specified, or does not contain a valid value, the alt text will be set to "Image {index} out of {totalImages} for {productName}".
     * @type {string}
     */
    imageAltField?: string;
    /**
     * An fallback image URL that will be used in case the specified image is not available or an error is encountered.
     */
    fallback: string;
    /**
     * Moves to the previous image, when the carousel is activated.
     */
    previousImage(): Promise<void>;
    /**
     * Moves to the next image, when the carousel is activated.
     */
    nextImage(): Promise<void>;
    /**
     * Navigates to the specified image index.
     *
     * @param index - The index of the image to navigate to.
     */
    navigateToImage(index: number): Promise<void>;
    private logWarning;
    private handleImageError;
    private handleMissingFallback;
    private validateUrl;
    componentWillLoad(): void;
    private get imageUrls();
    private get imageAlt();
    private get numberOfImages();
    private renderCurrentImage;
    render(): any;
}
