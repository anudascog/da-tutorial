'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const replaceBreakpoint = require('./replace-breakpoint-9e1c0efa.js');
const utils = require('./utils-b6642872.js');
const searchLayout = require('./search-layout-f66ff241.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');
require('./purify-85b542e2.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./search-layout-ced12c1e.js');
require('./sections-4b4af2f8.js');

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
        index.registerInstance(this, hostRef);
        /**
         * CSS value that defines where the layout goes from mobile to desktop.
         * e.g., 800px, 65rem.
         */
        this.mobileBreakpoint = replaceBreakpoint.DEFAULT_MOBILE_BREAKPOINT;
        this.mobileBreakpoint = replaceBreakpoint.DEFAULT_MOBILE_BREAKPOINT;
    }
    componentDidLoad() {
        const id = this.host.id || utils.randomID('atomic-search-layout-');
        this.host.id = id;
        const styleTag = this.bindings.createStyleElement();
        styleTag.innerHTML = searchLayout.buildSearchLayout(this.host, this.mobileBreakpoint);
        this.host.appendChild(styleTag);
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicSearchLayout.prototype, "bindings", void 0);
AtomicSearchLayout.style = AtomicSearchLayoutStyle0;

exports.atomic_search_layout = AtomicSearchLayout;

//# sourceMappingURL=atomic-search-layout.cjs.entry.js.map