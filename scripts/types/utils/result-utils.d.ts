import { SearchEngine, Result } from '@coveo/headless';
import { RecsBindings } from '../components/recommendations/atomic-recs-interface/atomic-recs-interface';
import { Bindings } from '../components/search/atomic-search-interface/atomic-search-interface';
/**
 * Binds the logging of document
 * @returns An unbind function for the events
 * @param engine A headless search engine instance.
 * @param result The result object
 * @param resultElement Parent result element
 * @param selector Optional. Css selector that selects all links to the document. Default: "a" tags with the clickUri as "href" parameter.
 */
export declare function bindLogDocumentOpenOnResult(engine: SearchEngine, result: Result, resultElement: Element | ShadowRoot, selector?: string): () => void;
export declare function buildStringTemplateFromResult(template: string, result: Result, bindings: Bindings | RecsBindings): string;
export declare function getStringValueFromResultOrNull(result: Result, field: string): string | null;
