import { h } from '@stencil/core/internal/client';
import { F as FacetValueCheckbox } from './stencil-facet-value-checkbox.js';
import { F as FacetValueLabelHighlight } from './stencil-facet-value-label-highlight.js';
import { F as FacetValueLink } from './stencil-facet-value-link.js';
import { f as formatHumanReadable } from './formatter.js';
import { F as FacetValuesGroup } from './stencil-facet-values-group.js';

const NumericFacetValueLink = (props) => {
    const { facetValue, displayValuesAs, i18n, onClick } = props;
    const displayValue = formatHumanReadable(props);
    const isSelected = facetValue.state === 'selected';
    switch (displayValuesAs) {
        case 'checkbox':
            return (h(FacetValueCheckbox, { displayValue: displayValue, numberOfResults: facetValue.numberOfResults, isSelected: isSelected, i18n: i18n, onClick: () => onClick() },
                h(FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected })));
        case 'link':
            return (h(FacetValueLink, { displayValue: displayValue, numberOfResults: facetValue.numberOfResults, isSelected: isSelected, i18n: i18n, onClick: onClick },
                h(FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected })));
    }
};

const NumericFacetValuesContainer = ({ i18n, label }, children) => {
    return (h(FacetValuesGroup, { i18n: i18n, label: label },
        h("ul", { class: "mt-3", part: "values" }, children)));
};

export { NumericFacetValuesContainer as N, NumericFacetValueLink as a };

//# sourceMappingURL=values-container.js.map