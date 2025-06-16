import { Summary } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-refine-toggle` component displays a button that opens a modal containing the facets and the sort components.
 *
 * When this component is added to the `atomic-commerce-search-interface`, an `atomic-commerce-refine-modal` component is automatically created.

 * @part button - The refine toggle button.
 *
 * @alpha
 */
export declare class AtomicCommerceRefineToggle implements InitializableComponent<CommerceBindings> {
    summary: Summary;
    private summaryState;
    host: HTMLElement;
    private modalRef?;
    private buttonRef?;
    bindings: CommerceBindings;
    error: Error;
    initialize(): void;
    private loadModal;
    private enableModal;
    render(): any;
}
