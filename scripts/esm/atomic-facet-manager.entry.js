import { r as registerInstance, h, g as getElement } from './index-3f35faca.js';
import { Schema, NumberValue } from '@coveo/bueno';
import { buildFacetManager } from '@coveo/headless';
import { I as InitializeBindings, B as BindStateToController } from './initialization-utils-ff3edf9a.js';
import { g as getFacetsInChildren, s as sortFacetVisibility, a as getAutomaticFacetGenerator, c as collapseFacetsAfter } from './stencil-facet-common-e4c271f2.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';
import './init-queue-fbe942c3.js';
import './initialization-lit-stencil-common-utils-9e0c895f.js';

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
const AtomicFacetManager = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The number of expanded facets inside the manager.
         * Remaining facets are automatically collapsed.
         *
         * Using the value `0` collapses all facets.
         * Using the value `-1` disables the feature and keeps all facets expanded. Useful when you want to set the collapse state for each facet individually.
         */
        this.collapseFacetsAfter = 4;
        this.sortFacets = () => {
            const facets = getFacetsInChildren(this.host);
            const sortedFacets = this.sortFacetsUsingManager(facets, this.facetManager);
            const { visibleFacets, invisibleFacets } = sortFacetVisibility(sortedFacets, this.bindings.store.getAllFacets());
            const generator = getAutomaticFacetGenerator(this.host);
            collapseFacetsAfter(visibleFacets, this.collapseFacetsAfter);
            generator?.updateCollapseFacetsDependingOnFacetsVisibility(this.collapseFacetsAfter, visibleFacets.length);
            this.host.append(...[
                ...visibleFacets,
                ...invisibleFacets,
                ...(generator ? [generator] : []),
            ]);
        };
        this.facetManagerState = undefined;
        this.error = undefined;
        this.collapseFacetsAfter = 4;
    }
    initialize() {
        this.validateProps();
        this.facetManager = buildFacetManager(this.bindings.engine);
        // An update has to be forced for the facets to be visually updated, without being interacted with.
        this.bindings.i18n.on('languageChanged', this.sortFacets);
    }
    validateProps() {
        new Schema({
            collapseFacetAfter: new NumberValue({ min: -1, required: true }),
        }).validate({
            collapseFacetAfter: this.collapseFacetsAfter,
        });
    }
    sortFacetsUsingManager(facets, facetManager) {
        const payload = facets.map((f) => ({
            facetId: f.facetId,
            payload: f,
        }));
        return facetManager.sort(payload).map((f) => f.payload);
    }
    disconnectedCallback() {
        this.bindings?.i18n.off('languageChanged', this.sortFacets);
    }
    render() {
        return h("slot", { key: '61472d27c4a78d0cd3637e34d10c2dedddea647b' });
    }
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicFacetManager.prototype, "bindings", void 0);
__decorate([
    BindStateToController('facetManager', {
        onUpdateCallbackMethod: 'sortFacets',
    })
], AtomicFacetManager.prototype, "facetManagerState", void 0);

export { AtomicFacetManager as atomic_facet_manager };

//# sourceMappingURL=atomic-facet-manager.entry.js.map