import { EventEmitter } from '../../../stencil-public-runtime';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-relevance-inspector` component is used internally to offer insight on search page relevance, as well as information to help troubleshoot issues during development.
 */
export declare class AtomicRelevanceInspector {
    /**
     * The Atomic interface bindings, namely the headless search engine and i18n instances.
     */
    bindings: Bindings;
    open: boolean;
    closeRelevanceInspector: EventEmitter<null> | undefined;
    render(): any;
    private get adminHref();
}
