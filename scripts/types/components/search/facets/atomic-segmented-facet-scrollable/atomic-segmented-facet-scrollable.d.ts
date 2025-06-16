import { SearchStatus, SearchStatusState } from '@coveo/headless';
import { Bindings } from '../../../..';
import { InitializableComponent } from '../../../../utils/initialization-utils';
/**
 * The 'atomic-segmented-facet-scrollable' component wraps around one or several 'atomic-segmented-facet' to provide horizontal scrolling capabilities.
 *
 * @slot default - One or multiple atomic-segmented-facet components
 *
 * @part scrollable-container - The wrapper for the entire component including the horizontal-scroll container and the arrow buttons.
 * @part horizontal-scroll - The scrollable container for the segmented facets.
 * @part left-arrow-wrapper - The wrapper for the arrow button & fade on the left.
 * @part right-arrow-wrapper - The wrapper for the arrow button & fade on the right.
 * @part left-arrow-button - The arrow button used to scroll on the left.
 * @part right-arrow-button - The arrow button used to scroll on the right.
 * @part left-arrow-icon - The arrow icon on the left.
 * @part right-arrow-icon - The arrow icon on the right.
 * @part left-fade - The white to transparent gradient on the left.
 * @part right-fade - The white to transparent gradient on the right.
 */
export declare class AtomicSegmentedFacetScrollable implements InitializableComponent {
    private host;
    private horizontalScrollRef?;
    private arrowRef?;
    private observer;
    bindings: Bindings;
    searchStatus: SearchStatus;
    searchStatusState: SearchStatusState;
    error: Error;
    private hideLeftArrow;
    private hideRightArrow;
    initialize(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleScroll(): void;
    private slideHorizontally;
    private renderArrow;
    render(): any;
}
