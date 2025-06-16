'use strict';

const index = require('./index-757bc886.js');
const fieldUtils = require('./field-utils-a715deca.js');
const stencilFacetValueBox = require('./stencil-facet-value-box-87cb3490.js');
const stencilFacetValueCheckbox = require('./stencil-facet-value-checkbox-3554634d.js');
const stencilFacetValueLabelHighlight = require('./stencil-facet-value-label-highlight-c2421e8f.js');
const stencilFacetValueLink = require('./stencil-facet-value-link-e81ec312.js');

const FacetValue = ({ facetSearchQuery, displayValuesAs, enableExclusion, facetCount, facetState, facetValue, field, i18n, onExclude, onSelect, setRef, }) => {
    const displayValue = fieldUtils.getFieldValueCaption(field, facetValue, i18n);
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
            return (index.h(stencilFacetValueCheckbox.FacetValueCheckbox, { ...triStateProps, displayValue: displayValue, numberOfResults: facetCount, isSelected: isSelected, i18n: i18n, onClick: onSelect, searchQuery: facetSearchQuery, buttonRef: (element) => {
                    setRef && setRef(element);
                } },
                index.h(stencilFacetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, isExcluded: isExcluded, searchQuery: facetSearchQuery })));
        case 'link':
            return (index.h(stencilFacetValueLink.FacetValueLink, { displayValue: displayValue, numberOfResults: facetCount, isSelected: isSelected, i18n: i18n, onClick: onSelect, searchQuery: facetSearchQuery, buttonRef: (element) => {
                    setRef && setRef(element);
                } },
                index.h(stencilFacetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, searchQuery: facetSearchQuery })));
        case 'box':
            return (index.h(stencilFacetValueBox.FacetValueBox, { displayValue: displayValue, numberOfResults: facetCount, isSelected: isSelected, i18n: i18n, onClick: onSelect, searchQuery: facetSearchQuery, buttonRef: (element) => {
                    setRef && setRef(element);
                } },
                index.h(stencilFacetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, searchQuery: facetSearchQuery })));
    }
};

exports.FacetValue = FacetValue;

//# sourceMappingURL=stencil-facet-value-5f8a0792.js.map