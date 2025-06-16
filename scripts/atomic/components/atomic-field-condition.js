import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { ResultTemplatesHelpers } from '@coveo/headless';
import { M as MapProp } from './props-utils.js';
import { m as makeMatchConditions } from './result-template-common.js';
import { R as ResultContext } from './result-template-decorators.js';

const atomicFieldConditionCss = "atomic-field-condition{max-width:100%}";
const AtomicFieldConditionStyle0 = atomicFieldConditionCss;

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
const AtomicFieldCondition$1 = /*@__PURE__*/ proxyCustomElement(class AtomicFieldCondition extends HTMLElement {
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
        if (this.ifDefined) {
            const fieldNames = this.ifDefined.split(',');
            this.conditions.push(ResultTemplatesHelpers.fieldsMustBeDefined(fieldNames));
        }
        if (this.ifNotDefined) {
            const fieldNames = this.ifNotDefined.split(',');
            this.conditions.push(ResultTemplatesHelpers.fieldsMustNotBeDefined(fieldNames));
        }
        this.conditions.push(...makeMatchConditions(this.mustMatch, this.mustNotMatch));
    }
    render() {
        if (!this.conditions.every((condition) => condition(this.result))) {
            this.shouldBeRemoved = true;
            return '';
        }
        return h("slot", null);
    }
    componentDidLoad() {
        this.shouldBeRemoved && this.host.remove();
    }
    get host() { return this; }
    static get style() { return AtomicFieldConditionStyle0; }
}, [4, "atomic-field-condition", {
        "ifDefined": [513, "if-defined"],
        "ifNotDefined": [513, "if-not-defined"],
        "mustMatch": [16],
        "mustNotMatch": [16]
    }]);
__decorate([
    MapProp({ splitValues: true })
], AtomicFieldCondition$1.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicFieldCondition$1.prototype, "mustNotMatch", void 0);
__decorate([
    ResultContext()
], AtomicFieldCondition$1.prototype, "result", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-field-condition"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-field-condition":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicFieldCondition$1);
            }
            break;
    } });
}

const AtomicFieldCondition = AtomicFieldCondition$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicFieldCondition, defineCustomElement };

//# sourceMappingURL=atomic-field-condition.js.map