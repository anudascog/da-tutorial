import { Result } from '@coveo/headless';
/**
 * The `atomic-result-fields-list` component selectively renders its children to ensure they fit the parent element and adds dividers between them.
 * @slot default - The children to render.
 */
export declare class AtomicResultFieldsList {
    protected result: Result;
    private resizeObserver?;
    private updatingChildren;
    private rows;
    private host;
    connectedCallback(): void;
    disconnectedCallback(): void;
    componentDidRender(): void;
    update(): void;
    private get hostChildren();
    private get isOverflowing();
    private getSortedChildrenBySize;
    private hide;
    private show;
    private isChildHidden;
    private setHideDivider;
    private showChildren;
    private showDividers;
    private hideChildrenToFit;
    private hideDividersAtEndOfRows;
    render(): any;
}
