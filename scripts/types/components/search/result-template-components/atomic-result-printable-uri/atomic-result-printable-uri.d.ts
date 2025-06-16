import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-printable-uri` component displays the URI, or path, to access a result.
 *
 * @slot attributes - Lets you pass [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes) down to anchor elements, overriding other attributes.
 * To be used exclusively in anchor elements, such as: `<a slot="attributes" target="_blank" download></a>`.
 */
export declare class AtomicResultPrintableUri {
    bindings: Bindings;
    private result;
    host: HTMLElement;
    listExpanded: boolean;
    error: Error;
    /**
     * The maximum number of Uri parts to display. This has to be over the minimum of `3` in order to be effective. Putting `Infinity` will disable the ellipsis.
     */
    maxNumberOfParts: number;
    private expandedPartFocus?;
    private interactiveResult;
    private linkAttributes?;
    private get focusTarget();
    connectedCallback(): void;
    initialize(): void;
    private getIndexOfEllipsis;
    private renderEllipsis;
    private get allParents();
    private renderSeparator;
    private renderParents;
    private renderLink;
    render(): any;
}
