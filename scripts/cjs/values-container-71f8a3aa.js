'use strict';

const index = require('./index-757bc886.js');
const stencilFacetValueCheckbox = require('./stencil-facet-value-checkbox-3554634d.js');
const stencilFacetValueLabelHighlight = require('./stencil-facet-value-label-highlight-c2421e8f.js');
const stencilFacetValueLink = require('./stencil-facet-value-link-e81ec312.js');
const formatter = require('./formatter-a95ed36b.js');
const stencilFacetValuesGroup = require('./stencil-facet-values-group-07b50fc0.js');

const NumericFacetValueLink = (props) => {
    const { facetValue, displayValuesAs, i18n, onClick } = props;
    const displayValue = formatter.formatHumanReadable(props);
    const isSelected = facetValue.state === 'selected';
    switch (displayValuesAs) {
        case 'checkbox':
            return (index.h(stencilFacetValueCheckbox.FacetValueCheckbox, { displayValue: displayValue, numberOfResults: facetValue.numberOfResults, isSelected: isSelected, i18n: i18n, onClick: () => onClick() },
                index.h(stencilFacetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected })));
        case 'link':
            return (index.h(stencilFacetValueLink.FacetValueLink, { displayValue: displayValue, numberOfResults: facetValue.numberOfResults, isSelected: isSelected, i18n: i18n, onClick: onClick },
                index.h(stencilFacetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected })));
    }
};

const NumericFacetValuesContainer = ({ i18n, label }, children) => {
    return (index.h(stencilFacetValuesGroup.FacetValuesGroup, { i18n: i18n, label: label },
        index.h("ul", { class: "mt-3", part: "values" }, children)));
};

exports.NumericFacetValueLink = NumericFacetValueLink;
exports.NumericFacetValuesContainer = NumericFacetValuesContainer;

//# sourceMappingURL=values-container-71f8a3aa.js.map