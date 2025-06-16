'use strict';

const index = require('./index-757bc886.js');
const stencilFieldsetGroup = require('./stencil-fieldset-group-3b25c138.js');

const FacetValuesGroup = (props, children) => {
    if (!props.label) {
        return children;
    }
    const facetDisplayLabel = props.i18n.t(props.label);
    const groupLabel = props.query === undefined
        ? props.i18n.t('facet-values', { label: facetDisplayLabel })
        : props.i18n.t('facet-search-results', {
            query: props.query,
            label: facetDisplayLabel,
        });
    return index.h(stencilFieldsetGroup.FieldsetGroup, { label: groupLabel }, children);
};

exports.FacetValuesGroup = FacetValuesGroup;

//# sourceMappingURL=stencil-facet-values-group-07b50fc0.js.map