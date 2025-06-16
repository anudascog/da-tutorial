import { BreadcrumbManagerState, QuerySummary, QuerySummaryState } from '@coveo/headless';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../../search/atomic-search-interface/atomic-search-interface';
/**
 * @internal
 */
export declare class AtomicIPXRefineModal implements InitializableComponent {
    bindings: Bindings;
    host: HTMLElement;
    querySummaryState: QuerySummaryState;
    breadcrumbManagerState: BreadcrumbManagerState;
    error: Error;
    interfaceDimensions?: DOMRect;
    openButton?: HTMLElement;
    isOpen: boolean;
    /**
     * The number of expanded facets inside the refine modal.
     * Remaining facets are automatically collapsed.
     *
     * Using the value `0` collapses all facets.
     */
    collapseFacetsAfter: number;
    private breadcrumbManager;
    querySummary: QuerySummary;
    watchEnabled(isOpen: boolean): void;
    initialize(): void;
    private renderHeader;
    private renderBody;
    render(): any;
    componentDidLoad(): void;
}
