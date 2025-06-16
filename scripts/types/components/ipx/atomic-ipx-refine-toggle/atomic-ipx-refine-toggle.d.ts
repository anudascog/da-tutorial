import { BreadcrumbManager, SearchStatus } from '@coveo/headless';
import { Bindings } from '../../search/atomic-search-interface/atomic-search-interface';
/**
 * @internal
 */
export declare class AtomicIPXRefineToggle {
    bindings: Bindings;
    host: HTMLElement;
    error: Error;
    private breadcrumbManagerState;
    private searchStatusState;
    /**
     * The number of expanded facets inside the refine modal.
     * Remaining facets are automatically collapsed.
     *
     * Using the value `0` collapses all facets.
     */
    collapseFacetsAfter: number;
    breadcrumbManager: BreadcrumbManager;
    searchStatus: SearchStatus;
    private modalRef?;
    private buttonRef?;
    private get numberOfBreadcrumbs();
    initialize(): void;
    private enableModal;
    private loadModal;
    render(): any;
}
