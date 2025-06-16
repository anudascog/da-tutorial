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
const AtomicIPXTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.error = undefined;
    }
    render() {
        return (h("atomic-tab-bar", { key: 'f20e3bc0f39e36bbfc9c8733e126c01421193433' }, h("slot", { key: '06222748e5f16b3661f2112f4602fc69ff7c7597' })));
    }
};
__decorate([
    InitializeBindings()
], AtomicIPXTabs.prototype, "bindings", void 0);

export { AtomicIPXTabs as atomic_ipx_tabs };

//# sourceMappingURL=atomic-ipx-tabs.entry.js.map