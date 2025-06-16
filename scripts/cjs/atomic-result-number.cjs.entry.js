'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const headless = require('@coveo/headless');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const formatCommon = require('./format-common-4aa8aa88.js');
const resultTemplateDecorators = require('./result-template-decorators-3115d726.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');
require('./item-decorators-2c23030b.js');

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
const AtomicResultNumber = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.formatter = formatCommon.defaultNumberFormatter;
        this.valueToDisplay = null;
        this.error = undefined;
        this.field = undefined;
        this.formatter = formatCommon.defaultNumberFormatter;
        this.valueToDisplay = null;
    }
    setFormat(event) {
        event.preventDefault();
        event.stopPropagation();
        this.formatter = event.detail;
    }
    parseValue() {
        const value = headless.ResultTemplatesHelpers.getResultProperty(this.result, this.field);
        if (value === null) {
            return null;
        }
        const valueAsNumber = parseFloat(`${value}`);
        if (Number.isNaN(valueAsNumber)) {
            this.error = new Error(`Could not parse "${value}" from field "${this.field}" as a number.`);
            return null;
        }
        return valueAsNumber;
    }
    formatValue(value) {
        try {
            return this.formatter(value, this.bindings.i18n.languages);
        }
        catch (error) {
            this.error = error;
            return value.toString();
        }
    }
    updateValueToDisplay() {
        const value = this.parseValue();
        if (value !== null) {
            this.valueToDisplay = this.formatValue(value);
        }
    }
    componentWillRender() {
        this.updateValueToDisplay();
    }
    render() {
        if (this.valueToDisplay === null) {
            this.host.remove();
            return;
        }
        return this.valueToDisplay;
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicResultNumber.prototype, "bindings", void 0);
__decorate([
    resultTemplateDecorators.ResultContext()
], AtomicResultNumber.prototype, "result", void 0);

exports.atomic_result_number = AtomicResultNumber;

//# sourceMappingURL=atomic-result-number.cjs.entry.js.map