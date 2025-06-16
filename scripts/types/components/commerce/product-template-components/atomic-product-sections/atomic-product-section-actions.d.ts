/**
 * @alpha
 *
 * This section is intended to display components that allow the user to perform an action on a product without having to view its details.
 * In commerce interface, the user can usually add the product to their cart or wish list.
 *
 * Behavior:
 * * Exposes the `--line-height` CSS variable so child elements can adjust to the current line height.
 * ** You should ensure that elements inside of it have `height: var(--line-height)`.
 * * Is a wrapping flexbox with a gap.
 * * May appear over, next to, or beneath the visual section.
 */
export declare class AtomicProductSectionActions {
    private host;
    componentDidRender(): void;
}
