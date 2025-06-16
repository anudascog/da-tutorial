var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindingGuard } from "../../../decorators/binding-guard";
import { errorGuard } from "../../../decorators/error-guard";
import { injectStylesForNoShadowDOM } from "../../../decorators/light-dom";
import { watch } from "../../../decorators/watch";
import { InitializeBindingsMixin } from "../../../mixins/bindings-mixin";
import { parseAssetURL } from "../../../utils/asset-path-utils";
import DOMPurify from 'dompurify';
import { LitElement, svg, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { guard } from 'lit/directives/guard.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import styles from './atomic-icon.tw.css';
class IconFetchError extends Error {
    static fromStatusCode(url, statusCode, statusText) {
        return new IconFetchError(url, `status code ${statusCode} (${statusText})`);
    }
    static fromError(url, error) {
        return new IconFetchError(url, 'an error', error);
    }
    constructor(url, errorMessage, errorObject) {
        super(`Could not fetch icon from ${url}, got ${errorMessage}.`);
        this.url = url;
        this.errorObject = errorObject;
    }
}
/**
 * The `atomic-icon` component displays an SVG icon with a 1:1 aspect ratio.
 *
 * This component can display an icon from those available in the Atomic package, from a specific location, or as an inline SVG element.
 */
let AtomicIcon = class AtomicIcon extends InitializeBindingsMixin(LitElement) {
    constructor() {
        super(...arguments);
        this.svg = null;
    }
    async fetchIcon(url) {
        try {
            const response = await fetch(url).catch((e) => {
                throw IconFetchError.fromError(url, e);
            });
            if (response.status !== 200 && response.status !== 304) {
                throw IconFetchError.fromStatusCode(url, response.status, response.statusText);
            }
            return await response.text();
        }
        catch (e) {
            this.error = e;
            this.requestUpdate();
            return null;
        }
    }
    validateSVG(svg) {
        if (!/^<svg[\s\S]+<\/svg>$/gm.test(svg)) {
            this.bindings.engine.logger.warn('The inline "icon" prop is not an svg element. You may encounter rendering issues.', this.icon);
        }
    }
    async getIcon() {
        if (!this.bindings) {
            return null;
        }
        const url = parseAssetURL(this.icon, this.bindings.store.state.iconAssetsPath);
        const svg = url ? await this.fetchIcon(url) : this.icon;
        if (svg) {
            this.validateSVG(svg);
        }
        const sanitizedSvg = svg
            ? DOMPurify.sanitize(svg, {
                USE_PROFILES: { svg: true, svgFilters: true },
            })
            : null;
        return sanitizedSvg;
    }
    async updateIcon() {
        const svgPromise = this.getIcon();
        this.svg = await svgPromise;
    }
    initialize() {
        this.updateIcon();
    }
    render() {
        this.ariaHidden = 'true';
        return svg `${guard([this.svg], () => unsafeSVG(this.svg))}`;
    }
};
AtomicIcon.styles = unsafeCSS(styles);
__decorate([
    property({ type: String, reflect: true })
], AtomicIcon.prototype, "icon", void 0);
__decorate([
    state()
], AtomicIcon.prototype, "bindings", void 0);
__decorate([
    state()
], AtomicIcon.prototype, "error", void 0);
__decorate([
    state()
], AtomicIcon.prototype, "svg", void 0);
__decorate([
    watch('icon')
], AtomicIcon.prototype, "updateIcon", null);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicIcon.prototype, "render", null);
AtomicIcon = __decorate([
    customElement('atomic-icon'),
    injectStylesForNoShadowDOM
], AtomicIcon);
export { AtomicIcon };
