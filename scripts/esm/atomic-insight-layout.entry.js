import { r as registerInstance, g as getElement } from './index-3f35faca.js';
import { I as InitializeBindings } from './initialization-utils-ff3edf9a.js';
import { r as randomID } from './utils-0a01e06c.js';
import { b as buildInsightLayout } from './insight-layout-776b87f2.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';
import './init-queue-fbe942c3.js';
import './initialization-lit-stencil-common-utils-9e0c895f.js';
import './purify-c7ebd240.js';
import './_commonjsHelpers-1789f0cf.js';
import './sections-ae00b53a.js';

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
        registerInstance(this, hostRef);
        /**
         * Whether the interface should be shown in widget format.
         */
        this.widget = false;
        this.widget = false;
    }
    updateStyles() {
        if (this.styleTag) {
            this.styleTag.innerHTML = buildInsightLayout(this.host, this.widget);
        }
        else {
            this.makeStyleTag();
        }
    }
    makeStyleTag() {
        this.styleTag = this.bindings.createStyleElement();
        this.styleTag.innerHTML = buildInsightLayout(this.host, this.widget);
        this.host.appendChild(this.styleTag);
    }
    componentDidLoad() {
        const id = this.host.id || randomID('atomic-insight-layout-');
        this.host.id = id;
        this.makeStyleTag();
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "widget": ["updateStyles"]
    }; }
};
__decorate([
    InitializeBindings()
], AtomicInsightLayout.prototype, "bindings", void 0);

export { AtomicInsightLayout as atomic_insight_layout };

//# sourceMappingURL=atomic-insight-layout.entry.js.map