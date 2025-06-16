'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const initializationUtils = require('./initialization-utils-62dc9852.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');

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
const AtomicInsightTabs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.error = undefined;
    }
    render() {
        return (index.h("atomic-tab-bar", { key: 'ffad936de9ef2369cd3642b0971e554060eee181' }, index.h("slot", { key: '960de9465861f8f9e64dd60351c5eaef9c14e0d6' })));
    }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicInsightTabs.prototype, "bindings", void 0);

exports.atomic_insight_tabs = AtomicInsightTabs;

//# sourceMappingURL=atomic-insight-tabs.cjs.entry.js.map