import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-search-layout` helps organize elements in the page.
 */
export declare class AtomicSearchLayout implements InitializableComponent<Bindings> {
    error: Error;
    private host;
    /**
     * CSS value that defines where the layout goes from mobile to desktop.
     * e.g., 800px, 65rem.
     */
    mobileBreakpoint: string;
    bindings: Bindings;
    componentDidLoad(): void;
}
