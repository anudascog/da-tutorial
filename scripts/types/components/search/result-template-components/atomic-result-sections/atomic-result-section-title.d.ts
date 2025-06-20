/**
 * This section identifies the item by its name, and its main use is to make the result list scannable.
 * This is usually the page title.
 *
 * Behavior:
 * * Has a fixed height of two lines on grid layouts.
 * * Exposes the `--line-height` CSS variable so child elements can adjust to the current line height.
 * * Has a defined CSS `color` property for text.
 */
export declare class AtomicResultSectionTitle {
    private host;
    componentDidRender(): void;
}
