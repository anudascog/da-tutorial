/**
 * The `atomic-result-badge` element renders a badge to highlight special features of a result.
 *
 * A badge can either display:
 * * Text:
 * ```html
 * <atomic-result-badge label="trending"></atomic-result-badge>
 * ```
 * * The contents of a single-value field:
 * ```html
 * <atomic-result-badge field="objecttype"></atomic-result-badge>
 * ```
 * * An icon:
 * ```html
 * <atomic-result-badge icon="https://my-website.fake/star.svg"></atomic-result-badge>
 * ```
 * * Slotted elements:
 * ```html
 * <atomic-result-badge icon="https://my-website.fake/stopwatch.svg">
 *     Deal ends in <my-dynamic-countdown></my-dynamic-countdown>
 * </atomic-result-badge>
 * ```
 *
 * The contents of a multi-value field can be displayed as in the following example:
 * ```html
 * <atomic-result-badge icon="https://my-website.fake/language.svg">
 *    <atomic-result-multi-value-text field="language"></atomic-result-multi-value-text>
 * </atomic-result-badge>
 * ```
 *
 * @part result-badge-element - The decorative outer-most element with the background color and text color.
 * @part result-badge-icon - The icon displayed at the left-end of the badge, if present.
 * @part result-badge-label - The wrapper around the contents at the right-end of the badge. This may be text, a field or slotted elements depending on which was configured.
 * @slot default - The element(s) to display inside the badge, instead of a field or label.
 */
export declare class AtomicResultBadge {
    private result;
    host: HTMLElement;
    /**
     * The field to display in the badge.
     *
     * Not compatible with `label`, slotted elements nor multi-value fields.
     */
    field?: string;
    /**
     * The text to display in the badge.
     *
     * Not compatible with `field` nor slotted elements.
     */
    label?: string;
    /**
     * Specifies an icon to display at the left-end of the badge.
     * This can be used in conjunction with `field`, `label` or slotted elements.
     *
     * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
     * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
     * - Use a stringified SVG to display it directly
     */
    icon?: string;
    private renderIcon;
    private getTextContent;
    private renderText;
    private renderBadge;
    componentWillRender(): void;
    render(): any;
}
