/**
 * @alpha
 *
 * This section is intended to render an informative summary of the product's description.
 *
 * Behavior:
 * * Has a fixed height of one to three lines, depending on the layout and density.
 * * Ellipses overflowing text.
 * * Exposes the `--line-height` CSS variable so child elements can adjust to the current line height.
 * * Has a defined CSS `color` property for text.
 */
export declare class AtomicProductSectionDescription {
    private host;
    componentDidRender(): void;
}
