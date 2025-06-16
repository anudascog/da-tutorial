import { SearchStatusState, FacetState } from '@coveo/headless';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { PopoverChildFacet } from '../../../common/facets/popover/popover-type';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-popover` component displays any facet as a popover menu.
 *
 * @slot default - The required slotted facet.
 * @part backdrop - The transparent backdrop hiding the content behind popover menu.
 * @part popover-button - The button to click to display or hide the popover menu.
 * @part value-label - The associated facet label.
 * @part value-count - Number of selected values for the facet
 * @part arrow-icon - The arrow icon on the button to display or hide the popover menu.
 * @part placeholder - The placeholder displayed when the facet is loading.
 * @part facet - The wrapper that contains the slotted 'facet'.
 */
export declare class AtomicPopover implements InitializableComponent {
    private host;
    private buttonRef;
    private popupRef;
    private popperInstance?;
    bindings: Bindings;
    private searchStatus;
    searchStatusState: SearchStatusState;
    facetState: FacetState;
    error: Error;
    private isOpen;
    private childFacet?;
    initialize(): void;
    initializePopover(event: CustomEvent<PopoverChildFacet>): void;
    handleKeyDown(e: KeyboardEvent): void;
    private get popoverId();
    private get label();
    private togglePopover;
    componentDidRender(): void;
    componentDidUpdate(): void;
    private renderDropdownButton;
    private renderBackdrop;
    private renderPopover;
    render(): any;
}
