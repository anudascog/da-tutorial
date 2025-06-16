import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../../search/atomic-search-interface/atomic-search-interface';
/**
 * @internal
 */
export declare class AtomicInsightFullSearchButton implements InitializableComponent {
    tooltip: string;
    bindings: Bindings;
    error: Error;
    render(): any;
}
