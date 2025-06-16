'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const headless = require('@coveo/headless');
const propsUtils = require('./props-utils-66dfcd3a.js');
const resultTemplateCommon = require('./result-template-common-ab94a761.js');
const resultTemplateDecorators = require('./result-template-decorators-3115d726.js');
require('@coveo/bueno');
require('./utils-b6642872.js');
require('./purify-85b542e2.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./table-element-utils-4865b735.js');
require('./sections-a7c2169a.js');
require('./item-decorators-2c23030b.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');

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
const AtomicFieldCondition = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            this.conditions.push(headless.ResultTemplatesHelpers.fieldsMustBeDefined(fieldNames));
        }
        if (this.ifNotDefined) {
            const fieldNames = this.ifNotDefined.split(',');
            this.conditions.push(headless.ResultTemplatesHelpers.fieldsMustNotBeDefined(fieldNames));
        }
        this.conditions.push(...resultTemplateCommon.makeMatchConditions(this.mustMatch, this.mustNotMatch));
    }
    render() {
        if (!this.conditions.every((condition) => condition(this.result))) {
            this.shouldBeRemoved = true;
            return '';
        }
        return index.h("slot", null);
    }
    componentDidLoad() {
        this.shouldBeRemoved && this.host.remove();
    }
    get host() { return index.getElement(this); }
};
__decorate([
    propsUtils.MapProp({ splitValues: true })
], AtomicFieldCondition.prototype, "mustMatch", void 0);
__decorate([
    propsUtils.MapProp({ splitValues: true })
], AtomicFieldCondition.prototype, "mustNotMatch", void 0);
__decorate([
    resultTemplateDecorators.ResultContext()
], AtomicFieldCondition.prototype, "result", void 0);
AtomicFieldCondition.style = AtomicFieldConditionStyle0;

exports.atomic_field_condition = AtomicFieldCondition;

//# sourceMappingURL=atomic-field-condition.cjs.entry.js.map