import { r as registerInstance, h, g as getElement } from './index-3f35faca.js';
import { M as MapProp } from './props-utils-525cbc5b.js';
import { m as makeDefinedConditions, a as makeMatchConditions } from './stencil-product-template-common-a7193a37.js';
import { P as ProductContext } from './product-template-decorators-b5df4e57.js';
import '@coveo/bueno';
import './utils-0a01e06c.js';
import './purify-c7ebd240.js';
import './_commonjsHelpers-1789f0cf.js';
import '@coveo/headless/commerce';
import './table-element-utils-49d22ec6.js';
import './sections-332d182a.js';
import './item-decorators-c19409ab.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';

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
const AtomicProductFieldCondition = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get host() { return getElement(this); }
};
__decorate([
    MapProp({ splitValues: true })
], AtomicProductFieldCondition.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicProductFieldCondition.prototype, "mustNotMatch", void 0);
__decorate([
    ProductContext()
], AtomicProductFieldCondition.prototype, "product", void 0);

export { AtomicProductFieldCondition as atomic_product_field_condition };

//# sourceMappingURL=atomic-product-field-condition.entry.js.map