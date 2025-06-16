import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-rating` element renders a star rating.
 *
 *  @part value-rating - The wrapper that contains the row of inactive stars and the row of active stars.
 *  @part value-rating-icon - The individual star icons used in the rating display.
 */
export declare class AtomicResultRating implements InitializableComponent {
    bindings: Bindings;
    private result;
    host: HTMLElement;
    /**
     * The field whose values you want to display as a rating.
     */
    field: string;
    /**
     * The maximum value of the field. This value is also used as the number of icons to be displayed.
     */
    maxValueInIndex: number;
    /**
     * The SVG icon to use to display the rating.
     *
     * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
     * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
     * - Use a stringified SVG to display it directly.
     *
     * When using a custom icon, at least part of your icon should have the color set to `fill="currentColor"`.
     * This part of the SVG will take on the colors set in the following [variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties):
     *
     * - `--atomic-rating-icon-active-color`
     * - `--atomic-rating-icon-inactive-color`
     */
    icon: string;
    error: Error;
    numberOfStars: number | null;
    private updateNumberOfStars;
    componentWillRender(): void;
    render(): any;
}
