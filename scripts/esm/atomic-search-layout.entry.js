import { r as registerInstance, g as getElement } from './index-3f35faca.js';
import { I as InitializeBindings } from './initialization-utils-ff3edf9a.js';
import { D as DEFAULT_MOBILE_BREAKPOINT } from './replace-breakpoint-213367f8.js';
import { r as randomID } from './utils-0a01e06c.js';
import { b as buildSearchLayout } from './search-layout-7ac12a70.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';
import './init-queue-fbe942c3.js';
import './initialization-lit-stencil-common-utils-9e0c895f.js';
import './purify-c7ebd240.js';
import './_commonjsHelpers-1789f0cf.js';
import './search-layout-348e9883.js';
import './sections-ae00b53a.js';

const atomicSearchLayoutCss = ".atomic-modal-opened{overflow-y:hidden}atomic-layout-section[section='search']{grid-area:atomic-section-search}atomic-layout-section[section='facets']{grid-area:atomic-section-facets}atomic-layout-section[section='main']{grid-area:atomic-section-main}atomic-layout-section[section='status']{grid-area:atomic-section-status}atomic-layout-section[section='pagination']{grid-area:atomic-section-pagination}atomic-search-layout{width:100%;height:100%;display:none;grid-template-areas:'. atomic-section-search .'\n    '. atomic-section-main .';grid-template-columns:var(--atomic-layout-spacing-x) minmax(0, 1fr) var(--atomic-layout-spacing-x)}atomic-search-layout atomic-layout-section[section='search']{margin:var(--atomic-layout-spacing-y) 0;max-width:var(--atomic-layout-max-search-box-input-width, 678px);width:100%;justify-self:center}atomic-search-layout atomic-layout-section[section='search'] atomic-search-box::part(suggestions-double-list){width:125%;max-width:var(--atomic-layout-max-search-box-double-suggestions-width, 800px)}atomic-search-layout atomic-layout-section[section='search'] atomic-search-box::part(suggestions-left){flex-basis:var(--atomic-layout-search-box-left-suggestions-width, 30%)}atomic-search-layout atomic-layout-section[section='search'] atomic-search-box::part(suggestions-right){flex-basis:calc(100% - var(--atomic-layout-search-box-left-suggestions-width, 30%))}atomic-search-layout atomic-layout-section[section='facets']{display:none}atomic-search-layout atomic-layout-section[section='facets'] *{margin-bottom:var(--atomic-layout-spacing-y)}atomic-search-layout atomic-layout-section[section='main']{margin-bottom:var(--atomic-layout-spacing-y)}atomic-search-layout atomic-layout-section[section='horizontal-facets']{display:flex;flex-wrap:wrap;margin-bottom:var(--atomic-layout-spacing-y);row-gap:0.5rem}atomic-search-layout atomic-layout-section[section='horizontal-facets']>*{max-width:100%}atomic-search-layout atomic-layout-section[section='horizontal-facets']>atomic-segmented-facet,atomic-search-layout atomic-layout-section[section='horizontal-facets']>atomic-popover{margin-right:0.5rem}atomic-search-layout atomic-layout-section[section='horizontal-facets']>atomic-popover{display:none}atomic-search-layout atomic-layout-section[section='status']{display:grid;justify-content:space-between;grid-template-areas:'atomic-breadbox       atomic-breadbox'\n      'atomic-query-summary  atomic-sort'\n      'atomic-did-you-mean   atomic-did-you-mean'\n      'atomic-notifications  atomic-notifications'}atomic-search-layout atomic-layout-section[section='status']>*{margin-bottom:var(--atomic-layout-spacing-y)}atomic-search-layout atomic-layout-section[section='status'] atomic-breadbox{grid-area:atomic-breadbox}atomic-search-layout atomic-layout-section[section='status'] atomic-query-summary{grid-area:atomic-query-summary;align-self:center;overflow:hidden}atomic-search-layout atomic-layout-section[section='status'] atomic-sort-dropdown{grid-area:atomic-sort;justify-self:end}atomic-search-layout atomic-layout-section[section='status'] atomic-refine-toggle{grid-area:atomic-sort}atomic-search-layout atomic-layout-section[section='status'] atomic-did-you-mean{grid-area:atomic-did-you-mean}atomic-search-layout atomic-layout-section[section='status'] atomic-notifications{grid-area:atomic-notifications}atomic-search-layout atomic-layout-section[section='results'] atomic-smart-snippet{margin-bottom:1.5rem}atomic-search-layout atomic-layout-section[section='results'] atomic-smart-snippet-suggestions{margin-bottom:1.5rem}atomic-search-layout atomic-layout-section[section='pagination']{display:flex;flex-direction:column;justify-content:space-between;align-items:center}atomic-search-layout atomic-layout-section[section='pagination'] atomic-load-more-results{width:100%}atomic-search-layout atomic-layout-section[section='pagination']:has(:only-child){justify-content:center}atomic-search-layout atomic-layout-section[section='pagination']>*{margin-top:var(--atomic-layout-spacing-y)}@media only screen and (min-width: 50rem){atomic-search-layout atomic-layout-section[section='pagination']{flex-direction:row}}";
const AtomicSearchLayoutStyle0 = atomicSearchLayoutCss;

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
const AtomicSearchLayout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * CSS value that defines where the layout goes from mobile to desktop.
         * e.g., 800px, 65rem.
         */
        this.mobileBreakpoint = DEFAULT_MOBILE_BREAKPOINT;
        this.mobileBreakpoint = DEFAULT_MOBILE_BREAKPOINT;
    }
    componentDidLoad() {
        const id = this.host.id || randomID('atomic-search-layout-');
        this.host.id = id;
        const styleTag = this.bindings.createStyleElement();
        styleTag.innerHTML = buildSearchLayout(this.host, this.mobileBreakpoint);
        this.host.appendChild(styleTag);
    }
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicSearchLayout.prototype, "bindings", void 0);
AtomicSearchLayout.style = AtomicSearchLayoutStyle0;

export { AtomicSearchLayout as atomic_search_layout };

//# sourceMappingURL=atomic-search-layout.entry.js.map