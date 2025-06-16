import { InitializableComponent } from '../../../utils/initialization-utils';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @alpha
 * The `atomic-commerce-layout` helps organize elements in the commerce page.
 */
export declare class AtomicCommerceLayout implements InitializableComponent<CommerceBindings> {
    error: Error;
    private host;
    /**
     * CSS value that defines where the layout goes from mobile to desktop.
     * e.g., 800px, 65rem.
     */
    mobileBreakpoint: string;
    bindings: CommerceBindings;
    componentDidLoad(): void;
}
