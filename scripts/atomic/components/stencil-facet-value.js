import { h } from '@stencil/core/internal/client';
import { g as getFieldValueCaption } from './field-utils.js';
import { F as FacetValueBox } from './stencil-facet-value-box.js';
import { F as FacetValueCheckbox } from './stencil-facet-value-checkbox.js';
import { F as FacetValueLabelHighlight } from './stencil-facet-value-label-highlight.js';
import { F as FacetValueLink } from './stencil-facet-value-link.js';

const FacetValue = ({ facetSearchQuery, displayValuesAs, enableExclusion, facetCount, facetState, facetValue, field, i18n, onExclude, onSelect, setRef, }) => {
    const displayValue = getFieldValueCaption(field, facetValue, i18n);
    const isSelected = facetState === 'selected';
    const isExcluded = facetState === 'excluded';
    const triStateProps = enableExclusion
        ? {
            onExclude,
            state: facetState,
        }
        : {};
    switch (displayValuesAs) {
        case 'checkbox':
            return (h(FacetValueCheckbox, { ...triStateProps, displayValue: displayValue, numberOfResults: facetCount, isSelected: isSelected, i18n: i18n, onClick: onSelect, searchQuery: facetSearchQuery, buttonRef: (element) => {
                    setRef && setRef(element);
                } },
                h(FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, isExcluded: isExcluded, searchQuery: facetSearchQuery })));
        case 'link':
            return (h(FacetValueLink, { displayValue: displayValue, numberOfResults: facetCount, isSelected: isSelected, i18n: i18n, onClick: onSelect, searchQuery: facetSearchQuery, buttonRef: (element) => {
                    setRef && setRef(element);
                } },
                h(FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, searchQuery: facetSearchQuery })));
        case 'box':
            return (h(FacetValueBox, { displayValue: displayValue, numberOfResults: facetCount, isSelected: isSelected, i18n: i18n, onClick: onSelect, searchQuery: facetSearchQuery, buttonRef: (element) => {
                    setRef && setRef(element);
                } },
                h(FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, searchQuery: facetSearchQuery })));
    }
};

export { FacetValue as F };

//# sourceMappingURL=stencil-facet-value.js.map