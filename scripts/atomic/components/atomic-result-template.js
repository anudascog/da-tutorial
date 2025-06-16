import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { M as MapProp } from './props-utils.js';
import { R as ResultTemplateCommon, m as makeMatchConditions } from './result-template-common.js';

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
const AtomicResultTemplate$1 = /*@__PURE__*/ proxyCustomElement(class AtomicResultTemplate extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * A function that must return true on results for the result template to apply.
         * Set programmatically before initialization, not via attribute.
         *
         * For example, the following targets a template and sets a condition to make it apply only to results whose `title` contains `singapore`:
         * `document.querySelector('#target-template').conditions = [(result) => /singapore/i.test(result.title)];`
         */
        this.conditions = [];
        /**
         * Verifies whether the specified fields match the specified values.
         * @type {Record<string, string[]>}
         */
        this.mustMatch = {};
        /**
         * Verifies whether the specified fields do not match the specified values.
         * @type {Record<string, string[]>}
         */
        this.mustNotMatch = {};
        this.error = undefined;
        this.conditions = [];
        this.mustMatch = {};
        this.mustNotMatch = {};
    }
    connectedCallback() {
        this.resultTemplateCommon = new ResultTemplateCommon({
            host: this.host,
            setError: (err) => {
                this.error = err;
            },
            validParents: [
                'atomic-result-list',
                'atomic-folded-result-list',
                'atomic-search-box-instant-results',
            ],
            allowEmpty: true,
        });
    }
    componentWillLoad() {
        this.resultTemplateCommon.matchConditions = makeMatchConditions(this.mustMatch, this.mustNotMatch);
    }
    /**
     * Gets the appropriate result template based on conditions applied.
     */
    async getTemplate() {
        return this.resultTemplateCommon.getTemplate(this.conditions, this.error);
    }
    render() {
        return this.resultTemplateCommon.renderIfError(this.error);
    }
    get host() { return this; }
}, [1, "atomic-result-template", {
        "conditions": [16],
        "mustMatch": [16],
        "mustNotMatch": [16],
        "error": [32],
        "getTemplate": [64]
    }]);
__decorate([
    MapProp({ splitValues: true })
], AtomicResultTemplate$1.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicResultTemplate$1.prototype, "mustNotMatch", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-template"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-template":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultTemplate$1);
            }
            break;
    } });
}

const AtomicResultTemplate = AtomicResultTemplate$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicResultTemplate, defineCustomElement };

//# sourceMappingURL=atomic-result-template.js.map