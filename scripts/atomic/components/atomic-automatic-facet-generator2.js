import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { Schema, NumberValue } from '@coveo/bueno';
import { buildSearchStatus, buildAutomaticFacetGenerator } from '@coveo/headless';
import { I as InitializeBindings, B as BindStateToController } from './initialization-utils.js';
import { F as FacetPlaceholder } from './facet-placeholder.js';
import { d as defineCustomElement$1 } from './atomic-automatic-facet2.js';

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
const AtomicAutomaticFacetGenerator = /*@__PURE__*/ proxyCustomElement(class AtomicAutomaticFacetGenerator extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * The desired count of automatic facets.
         *
         * Minimum: `1`
         * Maximum: `20`
         * @defaultValue `5`
         */
        this.desiredCount = 5;
        /**
         * The desired number of automatically generated facet values.
         *
         * Minimum: `1`
         * @defaultValue `8`
         */
        this.numberOfValues = 8;
        this.collapseFacetsAfter = -1;
        this.error = undefined;
        this.automaticFacetGeneratorState = undefined;
        this.searchStatusState = undefined;
        this.desiredCount = 5;
        this.numberOfValues = 8;
        this.collapseFacetsAfter = -1;
    }
    initialize() {
        this.validateProps();
        this.searchStatus = buildSearchStatus(this.bindings.engine);
        this.automaticFacetGenerator = buildAutomaticFacetGenerator(this.bindings.engine, {
            options: {
                desiredCount: this.desiredCount,
                numberOfValues: this.numberOfValues,
            },
        });
    }
    async updateCollapseFacetsDependingOnFacetsVisibility(collapseAfter, numberOfVisibleFacets) {
        if (collapseAfter === -1) {
            this.collapseFacetsAfter = -1;
            return;
        }
        this.collapseFacetsAfter = Math.max(0, collapseAfter - numberOfVisibleFacets);
    }
    validateProps() {
        new Schema({
            collapseFacetAfter: new NumberValue({ min: -1, required: false }),
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
        const automaticFacets = this.automaticFacetGeneratorState.automaticFacets.map((facet, index) => {
            return (h("atomic-automatic-facet", { key: facet.state.field, field: facet.state.field, facetId: facet.state.field, facet: facet, searchStatus: this.searchStatus, isCollapsed: this.shouldCollapseFacet(index) }));
        });
        if (!this.searchStatus.state.firstSearchExecuted) {
            return Array.from({ length: this.desiredCount }, (_, index) => (h(FacetPlaceholder, { numberOfValues: this.numberOfValues, isCollapsed: this.shouldCollapseFacet(index) })));
        }
        return automaticFacets;
    }
}, [0, "atomic-automatic-facet-generator", {
        "desiredCount": [514, "desired-count"],
        "numberOfValues": [514, "number-of-values"],
        "error": [32],
        "automaticFacetGeneratorState": [32],
        "searchStatusState": [32],
        "collapseFacetsAfter": [32],
        "updateCollapseFacetsDependingOnFacetsVisibility": [64]
    }]);
__decorate([
    InitializeBindings()
], AtomicAutomaticFacetGenerator.prototype, "bindings", void 0);
__decorate([
    BindStateToController('automaticFacetGenerator')
], AtomicAutomaticFacetGenerator.prototype, "automaticFacetGeneratorState", void 0);
__decorate([
    BindStateToController('searchStatus')
], AtomicAutomaticFacetGenerator.prototype, "searchStatusState", void 0);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-automatic-facet-generator", "atomic-automatic-facet"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-automatic-facet-generator":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicAutomaticFacetGenerator);
            }
            break;
        case "atomic-automatic-facet":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtomicAutomaticFacetGenerator as A, defineCustomElement as d };

//# sourceMappingURL=atomic-automatic-facet-generator2.js.map