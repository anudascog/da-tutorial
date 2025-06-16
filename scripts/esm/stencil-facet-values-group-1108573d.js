import { h } from './index-3f35faca.js';
import { F as FieldsetGroup } from './stencil-fieldset-group-5fa357cd.js';

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
    return h(FieldsetGroup, { label: groupLabel }, children);
};

export { FacetValuesGroup as F };

//# sourceMappingURL=stencil-facet-values-group-1108573d.js.map