import { r as registerInstance, h } from './index-3f35faca.js';
import { I as InitializeBindings } from './initialization-utils-ff3edf9a.js';
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
const AtomicInsightTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.error = undefined;
    }
    render() {
        return (h("atomic-tab-bar", { key: 'ffad936de9ef2369cd3642b0971e554060eee181' }, h("slot", { key: '960de9465861f8f9e64dd60351c5eaef9c14e0d6' })));
    }
};
__decorate([
    InitializeBindings()
], AtomicInsightTabs.prototype, "bindings", void 0);

export { AtomicInsightTabs as atomic_insight_tabs };

//# sourceMappingURL=atomic-insight-tabs.entry.js.map