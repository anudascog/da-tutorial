import { r as registerInstance, h, g as getElement } from './index-3f35faca.js';
import { ResultTemplatesHelpers } from '@coveo/headless';
import { I as InitializeBindings } from './initialization-utils-ff3edf9a.js';
import { f as filterProtocol } from './xss-utils-3bfd8d0c.js';
import { R as ResultContext } from './result-template-decorators-62ec8535.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';
import './init-queue-fbe942c3.js';
import './initialization-lit-stencil-common-utils-9e0c895f.js';
import './item-decorators-c19409ab.js';

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
const AtomicResultImage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicResultImage.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultImage.prototype, "result", void 0);
AtomicResultImage.style = AtomicResultImageStyle0;

export { AtomicResultImage as atomic_result_image };

//# sourceMappingURL=atomic-result-image.entry.js.map