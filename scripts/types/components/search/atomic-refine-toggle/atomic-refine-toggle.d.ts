import { SearchStatus } from '@coveo/headless';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-refine-toggle` component displays a button that opens a modal containing the facets and the sort components.
 *
 * When this component is added to the `atomic-search-interface`, an `atomic-refine-modal` component is automatically created.
 * @part button - The refine toggle button.
 */
export declare class AtomicRefineToggle implements InitializableComponent {
    host: HTMLElement;
    searchStatus: SearchStatus;
    private modalRef?;
    private buttonRef?;
    bindings: Bindings;
    error: Error;
    private searchStatusState;
    /**
     * The number of expanded facets inside the refine modal.
     * Remaining facets are automatically collapsed.
     *
     * Using the value `0` collapses all facets.
     */
    collapseFacetsAfter: number;
    initialize(): void;
    private loadModal;
    private enableModal;
    render(): any;
}
