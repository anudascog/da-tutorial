import { i18n } from 'i18next';
import { NumberFormatter } from '../../formats/format-common';
export interface FacetValueRange {
    endInclusive: boolean;
    start: number;
    end: number;
    label?: string;
    state: 'selected' | 'idle' | 'excluded';
}
export interface FormatFacetValueRange {
    field: string;
    facetValue: FacetValueRange & {
        numberOfResults: number;
    };
    manualRanges: FacetValueRange[];
    i18n: i18n;
    logger: Pick<Console, 'error'>;
    formatter: NumberFormatter;
}
export declare const formatHumanReadable: ({ manualRanges, field, i18n, facetValue, logger, formatter, }: FormatFacetValueRange) => string;
export declare const formatNumberLocalized: (value: number, i18n: FormatFacetValueRange["i18n"], logger: FormatFacetValueRange["logger"], formatter: FormatFacetValueRange["formatter"]) => string | number;
