import { FacetManagerState } from '@coveo/headless';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-facet-manager` helps reorder facets and their values to match the most recent search response with the most relevant results.
 * @slot default - Facet components are slotted within to leverage this functionality.
 */
export declare class AtomicFacetManager implements InitializableComponent {
    bindings: Bindings;
    private facetManager;
    private host;
    facetManagerState: FacetManagerState;
    error: Error;
    /**
     * The number of expanded facets inside the manager.
     * Remaining facets are automatically collapsed.
     *
     * Using the value `0` collapses all facets.
     * Using the value `-1` disables the feature and keeps all facets expanded. Useful when you want to set the collapse state for each facet individually.
     */
    collapseFacetsAfter: number;
    initialize(): void;
    private sortFacets;
    private validateProps;
    private sortFacetsUsingManager;
    disconnectedCallback(): void;
    render(): any;
}
