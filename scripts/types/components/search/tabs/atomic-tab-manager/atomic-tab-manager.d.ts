import { TabManager } from '@coveo/headless';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-tab-manager` component manages a collection of tabs,
 * allowing users to switch between them. Each child `atomic-tab` represents an
 * individual tab within the manager.
 *
 * @part button-container - The container for the tab button.
 * @part button-container-active - The container for the active tab button.
 * @part tab-button - The tab button.
 * @part tab-button-active - The container for the active tab button.
 * @part dropdown-area - The dropdown area.
 * @part tab-area - The tab area.
 * @slot default
 */
export declare class AtomicTabManager {
    bindings: Bindings;
    private tabManagerState;
    private host;
    tabManager: TabManager;
    private tabs;
    /**
     * Whether to clear the filters when the active tab changes.
     */
    clearFiltersOnTabChange?: boolean;
    error: Error;
    initialize(): void;
    render(): any;
}
