import { h } from './index-3f35faca.js';
import { F as FacetValueCheckbox } from './stencil-facet-value-checkbox-4acefc13.js';
import { F as FacetValueLabelHighlight } from './stencil-facet-value-label-highlight-b4083ffd.js';
import { F as FacetValueLink } from './stencil-facet-value-link-77d619b8.js';
import { f as formatHumanReadable } from './formatter-d890aa7d.js';
import { F as FacetValuesGroup } from './stencil-facet-values-group-1108573d.js';

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

export { NumericFacetValueLink as N, NumericFacetValuesContainer as a };

//# sourceMappingURL=values-container-1c9b0146.js.map