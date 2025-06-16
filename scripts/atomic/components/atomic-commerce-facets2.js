import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { Schema, NumberValue } from '@coveo/bueno';
import { buildProductListing, buildSearch } from '@coveo/headless/commerce';
import { I as InitializeBindings, B as BindStateToController } from './initialization-utils.js';
import { F as FacetPlaceholder } from './facet-placeholder.js';
import { c as createAppLoadedListener } from './store.js';
import { d as defineCustomElement$6 } from './atomic-commerce-category-facet2.js';
import { d as defineCustomElement$5 } from './atomic-commerce-facet2.js';
import { d as defineCustomElement$4 } from './atomic-commerce-facet-number-input2.js';
import { d as defineCustomElement$3 } from './atomic-commerce-numeric-facet2.js';
import { d as defineCustomElement$2 } from './atomic-commerce-timeframe-facet2.js';
import { d as defineCustomElement$1 } from './facet-date-input.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AtomicCommerceFacets = /*@__PURE__*/ proxyCustomElement(class AtomicCommerceFacets extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * The maximum number of facets to expand.
         * Remaining facets are automatically collapsed.
         *
         * Using the value `0` collapses all facets.
         * Using the value `-1` disables the feature and keeps all facets expanded.
         */
        this.collapseFacetsAfter = 4;
        this.isAppLoaded = false;
        this.collapseFacetsAfter = 4;
        this.facetGeneratorState = undefined;
        this.error = undefined;
        this.isAppLoaded = false;
    }
    initialize() {
        this.validateProps();
        const { engine } = this.bindings;
        const controller = this.controllerBuilder(engine);
        this.facetGenerator = controller.facetGenerator();
        this.summary = controller.summary();
        createAppLoadedListener(this.bindings.store, (isAppLoaded) => {
            this.isAppLoaded = isAppLoaded;
        });
    }
    isProductListing() {
        return this.bindings.interfaceElement.type === 'product-listing';
    }
    get controllerBuilder() {
        return this.isProductListing() ? buildProductListing : buildSearch;
    }
    validateProps() {
        new Schema({
            collapseFacetAfter: new NumberValue({ min: -1, required: true }),
        }).validate({
            collapseFacetAfter: this.collapseFacetsAfter,
        });
    }
    shouldCollapseFacet(index) {
        if (this.collapseFacetsAfter === -1) {
            return false;
        }
        return this.collapseFacetsAfter
            ? index + 1 > this.collapseFacetsAfter
            : true;
    }
    render() {
        if (!this.isAppLoaded) {
            return [...Array.from({ length: this.collapseFacetsAfter })].map(() => (h(FacetPlaceholder, { isCollapsed: false, numberOfValues: 8 })));
        }
        return (h(Fragment, null, this.facetGenerator.facets.map((facet, index) => {
            if (facet.state.values.length === 0) {
                return;
            }
            const props = () => ({
                isCollapsed: this.shouldCollapseFacet(index),
                summary: this.summary,
                facet: facet,
                field: facet.state.field,
                key: facet.state.facetId,
            });
            switch (facet.state.type) {
                case 'regular':
                    return (h("atomic-commerce-facet", { ...props() }));
                case 'numericalRange':
                    return (h("atomic-commerce-numeric-facet", { ...props() }));
                case 'dateRange':
                    return (h("atomic-commerce-timeframe-facet", { ...props() }));
                case 'hierarchical':
                    return (h("atomic-commerce-category-facet", { ...props() }));
                default: {
                    // TODO COMHUB-291 support location facet
                    this.bindings.engine.logger.warn('Unexpected facet type.');
                    return;
                }
            }
        })));
    }
    get host() { return this; }
}, [0, "atomic-commerce-facets", {
        "collapseFacetsAfter": [514, "collapse-facets-after"],
        "facetGeneratorState": [32],
        "error": [32],
        "isAppLoaded": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicCommerceFacets.prototype, "bindings", void 0);
__decorate([
    BindStateToController('facetGenerator')
], AtomicCommerceFacets.prototype, "facetGeneratorState", void 0);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-commerce-facets", "atomic-commerce-category-facet", "atomic-commerce-facet", "atomic-commerce-facet-number-input", "atomic-commerce-numeric-facet", "atomic-commerce-timeframe-facet", "atomic-facet-date-input"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-commerce-facets":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicCommerceFacets);
            }
            break;
        case "atomic-commerce-category-facet":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atomic-commerce-facet":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atomic-commerce-facet-number-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atomic-commerce-numeric-facet":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atomic-commerce-timeframe-facet":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atomic-facet-date-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtomicCommerceFacets as A, defineCustomElement as d };

//# sourceMappingURL=atomic-commerce-facets2.js.map