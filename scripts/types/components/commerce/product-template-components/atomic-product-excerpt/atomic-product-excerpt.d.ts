import { InitializableComponent } from '../../../../utils/initialization-utils';
import { TruncateAfter } from '../../../common/expandable-text/expandable-text';
import { CommerceBindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @alpha
 * The `atomic-product-excerpt` component renders the excerpt of a product generated at query time.
 */
export declare class AtomicProductExcerpt implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    private product;
    hostElement: HTMLElement;
    error: Error;
    private isExpanded;
    private isTruncated;
    private excerptText;
    private resizeObserver;
    /**
     * The number of lines after which the product excerpt should be truncated. A value of "none" will disable truncation.
     */
    truncateAfter: TruncateAfter;
    /**
     * Whether the excerpt should be collapsible after being expanded.
     */
    isCollapsible: boolean;
    constructor();
    private validateProps;
    componentDidLoad(): void;
    private onToggleExpand;
    disconnectedCallback(): void;
    render(): any;
}
