import { h } from './index-3f35faca.js';
import { g as getFieldValueCaption } from './field-utils-f0146383.js';
import { F as FacetValueBox } from './stencil-facet-value-box-7962f245.js';
import { F as FacetValueCheckbox } from './stencil-facet-value-checkbox-4acefc13.js';
import { F as FacetValueLabelHighlight } from './stencil-facet-value-label-highlight-b4083ffd.js';
import { F as FacetValueLink } from './stencil-facet-value-link-77d619b8.js';

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

//# sourceMappingURL=stencil-facet-value-b1eff024.js.map