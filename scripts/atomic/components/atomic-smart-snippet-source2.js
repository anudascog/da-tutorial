import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { I as InitializeBindings } from './initialization-utils.js';
import { L as LinkWithItemAnalytics } from './item-link.js';
import { d as defineCustomElement$2 } from './atomic-result-text2.js';
import { d as defineCustomElement$1 } from './atomic-text2.js';

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
const AtomicSmartSnippetSource = /*@__PURE__*/ proxyCustomElement(class AtomicSmartSnippetSource extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.selectSource = createEvent(this, "selectSource", 7);
        this.beginDelayedSelectSource = createEvent(this, "beginDelayedSelectSource", 7);
        this.cancelPendingSelectSource = createEvent(this, "cancelPendingSelectSource", 7);
        this.source = undefined;
        this.anchorAttributes = undefined;
        this.error = undefined;
    }
    resolveResult(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.source) {
            event.detail(this.source);
        }
    }
    render() {
        return (h(Host, { key: '0c29d390b9eae8bbc9e6a7d23000d9d9371c09e5' }, h(LinkWithItemAnalytics, { key: '5a9873a8601f3fafc822fc011798e85aac898c03', title: this.source.clickUri, href: this.source.clickUri, className: "block truncate", part: "source-url", attributes: this.anchorAttributes, onSelect: () => this.selectSource.emit(), onBeginDelayedSelect: () => this.beginDelayedSelectSource.emit(), onCancelPendingSelect: () => this.cancelPendingSelectSource.emit() }, this.source.clickUri), h(LinkWithItemAnalytics, { key: '7a90f727e477dfe72dc1dd9bdf4ea6825ac02e11', title: this.source.title, href: this.source.clickUri, attributes: this.anchorAttributes, className: "block", part: "source-title", onSelect: () => this.selectSource.emit(), onBeginDelayedSelect: () => this.beginDelayedSelectSource.emit(), onCancelPendingSelect: () => this.cancelPendingSelectSource.emit() }, h("atomic-result-text", { field: "title", default: "no-title", key: this.source.uniqueId }))));
    }
}, [0, "atomic-smart-snippet-source", {
        "source": [1040],
        "anchorAttributes": [16],
        "error": [32]
    }, [[0, "atomic/resolveResult", "resolveResult"]]]);
__decorate([
    InitializeBindings()
], AtomicSmartSnippetSource.prototype, "bindings", void 0);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-smart-snippet-source", "atomic-result-text", "atomic-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-smart-snippet-source":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicSmartSnippetSource);
            }
            break;
        case "atomic-result-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atomic-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtomicSmartSnippetSource as A, defineCustomElement as d };

//# sourceMappingURL=atomic-smart-snippet-source2.js.map