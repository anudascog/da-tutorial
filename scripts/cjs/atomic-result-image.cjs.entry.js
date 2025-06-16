'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const headless = require('@coveo/headless');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const xssUtils = require('./xss-utils-185a1c77.js');
const resultTemplateDecorators = require('./result-template-decorators-3115d726.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');
require('./item-decorators-2c23030b.js');

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
        index.registerInstance(this, hostRef);
        this.useFallback = false;
        this.useFallback = false;
        this.field = undefined;
        this.imageAltField = undefined;
        this.fallback = undefined;
    }
    get url() {
        const value = headless.ResultTemplatesHelpers.getResultProperty(this.result, this.field);
        return Array.isArray(value) ? value[0] : value;
    }
    get altText() {
        if (this.imageAltField) {
            const value = headless.ResultTemplatesHelpers.getResultProperty(this.result, this.imageAltField);
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
        return (index.h("img", { alt: this.altText, src: xssUtils.filterProtocol(url), onError: () => this.handleImageError(), loading: "lazy" }));
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicResultImage.prototype, "bindings", void 0);
__decorate([
    resultTemplateDecorators.ResultContext()
], AtomicResultImage.prototype, "result", void 0);
AtomicResultImage.style = AtomicResultImageStyle0;

exports.atomic_result_image = AtomicResultImage;

//# sourceMappingURL=atomic-result-image.cjs.entry.js.map