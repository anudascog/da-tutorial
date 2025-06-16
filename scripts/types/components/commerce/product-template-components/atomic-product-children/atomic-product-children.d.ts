import { EventEmitter } from '../../../../stencil-public-runtime';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { CommerceBindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
import { SelectChildProductEventArgs } from './select-child-product-event';
/**
 * @alpha
 * The `atomic-product-children` component renders a section that allows the user to select a nested product (e.g., a color variant of a given product).
 *
 * This component leverages the [product grouping](https://docs.coveo.com/en/l78i2152/) feature.
 */
export declare class AtomicProductChildren implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    private product;
    hostElement: HTMLElement;
    private children;
    private activeChildId;
    error: Error;
    /**
     * The non-localized label to display for the product children section.
     *
     * Set this to an empty string if you do not want to render the label at all.
     */
    label: string;
    /**
     * The child product field to use to render product children images. Fields in the `additionalFields` property of the child products are supported.
     *
     * This field should be defined on each child product, and its value should be an image URL (or an array of image URLs, in which case the component will use the first one in the array).
     */
    field: string;
    /**
     * A fallback image URL to use when the specified `field` is not defined on a given child product, or when its value is invalid.
     */
    fallback: string;
    selectChildProduct: EventEmitter<SelectChildProductEventArgs>;
    constructor();
    connectedCallback(): void;
    private validateProps;
    private onSelectChild;
    private getImageUrl;
    private get activeChildClasses();
    private renderChild;
    private renderLabel;
    render(): any;
}
