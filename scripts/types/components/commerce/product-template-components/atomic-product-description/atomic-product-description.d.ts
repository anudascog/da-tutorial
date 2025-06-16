import { InitializableComponent } from '../../../../utils/initialization-utils';
import { TruncateAfter } from '../../../common/expandable-text/expandable-text';
import { CommerceBindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @alpha
 * The `atomic-product-description` component renders the description of a product.
 */
export declare class AtomicProductDescription implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    private product;
    hostElement: HTMLElement;
    error: Error;
    private isExpanded;
    private isTruncated;
    private descriptionText;
    private resizeObserver;
    /**
     * The number of lines after which the product description should be truncated. A value of "none" will disable truncation.
     */
    truncateAfter: TruncateAfter;
    /**
     * The name of the description field to use.
     */
    field: 'ec_description' | 'ec_shortdesc';
    /**
     * Whether the description should be collapsible after being expanded.
     */
    isCollapsible: boolean;
    constructor();
    private validateProps;
    componentDidLoad(): void;
    private onToggleExpand;
    disconnectedCallback(): void;
    render(): any;
}
