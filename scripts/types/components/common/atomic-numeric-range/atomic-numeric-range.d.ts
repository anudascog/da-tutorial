/**
 * The `atomic-numeric-range` component defines the range of an `atomic-numeric-facet`, and therefore must be defined within an `atomic-numeric-facet` component.
 */
export declare class AtomicNumericRange {
    host: HTMLElement;
    /**
     * The non-localized label for the facet. When defined, it will appear instead of the formatted value.
     * Used in the `atomic-breadbox` component through the bindings store.
     */
    label?: string;
    /**
     * The starting value for the numeric range.
     */
    start: number;
    /**
     * The ending value for the numeric range.
     */
    end: number;
    /**
     * Specifies whether the end value should be included in the range.
     */
    endInclusive: boolean;
}
