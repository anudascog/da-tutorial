'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const utils = require('./utils-b6642872.js');
const insightLayout = require('./insight-layout-355a94dd.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');
require('./purify-85b542e2.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./sections-4b4af2f8.js');

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
const AtomicInsightLayout = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Whether the interface should be shown in widget format.
         */
        this.widget = false;
        this.widget = false;
    }
    updateStyles() {
        if (this.styleTag) {
            this.styleTag.innerHTML = insightLayout.buildInsightLayout(this.host, this.widget);
        }
        else {
            this.makeStyleTag();
        }
    }
    makeStyleTag() {
        this.styleTag = this.bindings.createStyleElement();
        this.styleTag.innerHTML = insightLayout.buildInsightLayout(this.host, this.widget);
        this.host.appendChild(this.styleTag);
    }
    componentDidLoad() {
        const id = this.host.id || utils.randomID('atomic-insight-layout-');
        this.host.id = id;
        this.makeStyleTag();
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "widget": ["updateStyles"]
    }; }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicInsightLayout.prototype, "bindings", void 0);

exports.atomic_insight_layout = AtomicInsightLayout;

//# sourceMappingURL=atomic-insight-layout.cjs.entry.js.map