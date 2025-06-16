/**
 * This section provides badges that highlight special features of the item.
 *
 * Behavior:
 * * Exposes the `--line-height` CSS variable so child elements can adjust to the current line height.
 * ** You should ensure that elements inside of it have `height: var(--line-height)`.
 * * Is a wrapping flexbox with a gap.
 * * May appear over, next to, or beneath the visual section.
 */
export declare class AtomicResultSectionBadges {
    private host;
    componentDidRender(): void;
}
