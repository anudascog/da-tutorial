import { g as getFieldValueCaption } from './field-utils.js';

const formatHumanReadable = ({ manualRanges, field, i18n, facetValue, logger, formatter, }) => {
    const manualRangeLabel = manualRanges.find((range) => areRangesEqual(range, facetValue))?.label;
    return manualRangeLabel
        ? getFieldValueCaption(field, manualRangeLabel, i18n)
        : i18n.t('to', {
            start: formatNumberLocalized(facetValue.start, i18n, logger, formatter),
            end: formatNumberLocalized(facetValue.end, i18n, logger, formatter),
        });
};
const formatNumberLocalized = (value, i18n, logger, formatter) => {
    try {
        return formatter(value, i18n.languages);
    }
    catch (error) {
        logger.error(`atomic-numeric-facet facet value "${value}" could not be formatted correctly.`, error);
        return value;
    }
};
const areRangesEqual = (firstRange, secondRange) => {
    return (firstRange.start === secondRange.start &&
        firstRange.end === secondRange.end &&
        firstRange.endInclusive === secondRange.endInclusive);
};

export { formatHumanReadable as f };

//# sourceMappingURL=formatter.js.map