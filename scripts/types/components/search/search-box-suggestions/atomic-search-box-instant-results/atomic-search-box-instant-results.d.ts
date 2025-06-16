import { Result, SearchBox } from '@coveo/headless';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { ItemRenderingFunction } from '../../../common/item-list/stencil-item-list-common';
import { ItemDisplayDensity, ItemDisplayImageSize } from '../../../common/layout/display-options';
import { SearchBoxSuggestions, SearchBoxSuggestionsBindings } from '../../../common/suggestions/suggestions-common';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
export type AriaLabelGenerator = (bindings: Bindings, result: Result) => string | undefined;
/**
 * The `atomic-search-box-instant-results` component can be added as a child of an `atomic-search-box` component, allowing for the configuration of instant results behavior.
 *
 * This component does not support accessibility out-of-the-box. To do so, see [Instant Results Accessibility](https://docs.coveo.com/en/atomic/latest/usage/accessibility/#instant-results-accessibility).
 *
 * This component is not supported on mobile.
 *
 * @slot default - The default slot where the instant results are rendered.
 */
export declare class AtomicSearchBoxInstantResults implements InitializableComponent {
    bindings: SearchBoxSuggestionsBindings<SearchBox, Bindings>;
    private itemRenderingFunction;
    private results;
    private itemTemplateProvider;
    private instantResults;
    private display;
    host: HTMLElement;
    error: Error;
    private templateHasError;
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     *
     * @param resultRenderingFunction
     */
    setRenderFunction(resultRenderingFunction: ItemRenderingFunction): Promise<void>;
    /**
     * The maximum number of results to show.
     */
    maxResultsPerQuery: number;
    /**
     * The spacing of various elements in the result list, including the gap between results, the gap between parts of a result, and the font sizes of different parts in a result.
     */
    density: ItemDisplayDensity;
    /**
     * The expected size of the image displayed in the results.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * The callback to generate an [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) for a given result so that accessibility tools can fully describe what's visually rendered by a result.
     *
     * By default, or if an empty string is returned, `result.title` is used.
     */
    ariaLabelGenerator?: AriaLabelGenerator;
    componentWillLoad(): void;
    private getLink;
    private handleLinkClick;
    private renderItems;
    initialize(): SearchBoxSuggestions;
    private onSuggestedQueryChange;
    render(): any;
}
