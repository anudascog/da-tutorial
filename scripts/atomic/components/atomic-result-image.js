import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { ResultTemplatesHelpers } from '@coveo/headless';
import { I as InitializeBindings } from './initialization-utils.js';
import { f as filterProtocol } from './xss-utils.js';
import { R as ResultContext } from './result-template-decorators.js';

const atomicResultImageCss = "atomic-result-image{display:grid;place-items:center;grid-template-rows:100%;width:100%;height:100%}atomic-result-image img{width:100%;height:100%;object-fit:contain}";
const AtomicResultImageStyle0 = atomicResultImageCss;

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
const AtomicResultImage$1 = /*@__PURE__*/ proxyCustomElement(class AtomicResultImage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.useFallback = false;
        this.useFallback = false;
        this.field = undefined;
        this.imageAltField = undefined;
        this.fallback = undefined;
    }
    get url() {
        const value = ResultTemplatesHelpers.getResultProperty(this.result, this.field);
        return Array.isArray(value) ? value[0] : value;
    }
    get altText() {
        if (this.imageAltField) {
            const value = ResultTemplatesHelpers.getResultProperty(this.result, this.imageAltField);
            if (Array.isArray(value) && typeof value[0] === 'string') {
                return value[0];
            }
            if (typeof value === 'string') {
                return value;
            }
        }
        return this.bindings.i18n.t('image-alt-fallback', {
            itemName: this.result.title,
        });
    }
    logWarning(message) {
        this.bindings.engine.logger.warn(message, this.host);
    }
    handleImageError() {
        const message = `The image url "${this.url}" is not valid or could not be loaded. You might want to add a "fallback" property.`;
        this.fallback ? (this.useFallback = true) : this.logWarning(message);
    }
    handleMissingFallback(message) {
        if (!this.fallback) {
            this.logWarning(message);
            this.host.remove();
            return null;
        }
        return this.fallback;
    }
    validateUrl(url) {
        if (!url) {
            const message = `"${this.field}" is missing. Please review your indexation. You might want to add a "fallback" property.`;
            return this.handleMissingFallback(message);
        }
        if (typeof url !== 'string') {
            const message = `Expected "${this.field}" to be a text field. Please review your indexation. You might want to add a "fallback" property.`;
            return this.handleMissingFallback(message);
        }
        return url;
    }
    render() {
        let url = this.useFallback ? this.fallback : this.url;
        if (!this.useFallback) {
            url = this.validateUrl(url);
            if (!url) {
                return;
            }
        }
        return (h("img", { alt: this.altText, src: filterProtocol(url), onError: () => this.handleImageError(), loading: "lazy" }));
    }
    get host() { return this; }
    static get style() { return AtomicResultImageStyle0; }
}, [0, "atomic-result-image", {
        "field": [513],
        "imageAltField": [513, "image-alt-field"],
        "fallback": [513],
        "useFallback": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicResultImage$1.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultImage$1.prototype, "result", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-image"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-image":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultImage$1);
            }
            break;
    } });
}

const AtomicResultImage = AtomicResultImage$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicResultImage, defineCustomElement };

//# sourceMappingURL=atomic-result-image.js.map