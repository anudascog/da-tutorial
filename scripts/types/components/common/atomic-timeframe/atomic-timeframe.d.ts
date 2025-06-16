import { RelativeDateUnit } from '@coveo/headless';
import { Timeframe } from '../facets/timeframe-facet-common';
/**
 * The `atomic-timeframe` component defines a timeframe of an `atomic-timeframe-facet`, and therefore must be defined within an `atomic-timeframe-facet` component.
 *
 * A timeframe is a span of time from now to a specific time in the past.
 */
export declare class AtomicTimeframe implements Timeframe {
    /**
     * The relative period of time to now.
     */
    period: 'past' | 'next';
    /**
     * The unit used to define:
     * - the start date of the timeframe, if the period is `past`
     * - the end date of the timeframe, if the period is `future`
     */
    unit: RelativeDateUnit;
    /**
     * The amount of units from which to count.
     *
     * E.g., 10 days, 1 year, etc.
     */
    amount: number;
    /**
     * The non-localized label for the timeframe. When defined, it will appear instead of the formatted value.
     * Used in the `atomic-breadbox` component through the bindings store.
     */
    label?: string;
}
