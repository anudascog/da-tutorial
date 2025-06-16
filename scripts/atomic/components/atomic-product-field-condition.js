import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { M as MapProp } from './props-utils.js';
import { m as makeDefinedConditions, a as makeMatchConditions } from './stencil-product-template-common.js';
import { P as ProductContext } from './product-template-decorators.js';

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
const AtomicProductFieldCondition$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductFieldCondition extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        this.conditions = [];
        this.shouldBeRemoved = false;
        this.ifDefined = undefined;
        this.ifNotDefined = undefined;
        this.mustMatch = {};
        this.mustNotMatch = {};
    }
    componentWillLoad() {
        this.conditions = makeDefinedConditions(this.ifDefined, this.ifNotDefined);
        this.conditions.push(...makeMatchConditions(this.mustMatch, this.mustNotMatch));
    }
    render() {
        if (!this.conditions.every((condition) => condition(this.product))) {
            this.shouldBeRemoved = true;
            return '';
        }
        return h("slot", null);
    }
    componentDidLoad() {
        this.shouldBeRemoved && this.host.remove();
    }
    get host() { return this; }
}, [4, "atomic-product-field-condition", {
        "ifDefined": [513, "if-defined"],
        "ifNotDefined": [513, "if-not-defined"],
        "mustMatch": [16],
        "mustNotMatch": [16]
    }]);
__decorate([
    MapProp({ splitValues: true })
], AtomicProductFieldCondition$1.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicProductFieldCondition$1.prototype, "mustNotMatch", void 0);
__decorate([
    ProductContext()
], AtomicProductFieldCondition$1.prototype, "product", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-field-condition"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-field-condition":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductFieldCondition$1);
            }
            break;
    } });
}

const AtomicProductFieldCondition = AtomicProductFieldCondition$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductFieldCondition, defineCustomElement };

//# sourceMappingURL=atomic-product-field-condition.js.map