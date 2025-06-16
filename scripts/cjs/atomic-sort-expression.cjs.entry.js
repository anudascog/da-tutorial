'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const propsUtils = require('./props-utils-66dfcd3a.js');
require('@coveo/bueno');
require('./utils-b6642872.js');
require('./purify-85b542e2.js');
require('./_commonjsHelpers-b3309d7b.js');

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
const AtomicSortExpression = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The tabs on which the sort expression can be displayed. This property should not be used at the same time as `tabs-excluded`.
         *
         * Set this property as a stringified JSON array, e.g.,
         * ```html
         *  <atomic-sort-expression tabs-included='["tabIDA", "tabIDB"]'></atomic-sort-expression snippet>
         * ```
         * If you don't set this property, the sort expression can be displayed on any tab. Otherwise, the sort expression can only be displayed on the specified tabs.
         */
        this.tabsIncluded = '[]';
        /**
         * The tabs on which the sort expression must not be displayed. This property should not be used at the same time as `tabs-included`.
         *
         * Set this property as a stringified JSON array, e.g.,
         * ```html
         *  <atomic-sort-expression tabs-excluded='["tabIDA", "tabIDB"]'></atomic-sort-expression>
         * ```
         * If you don't set this property, the sort expression can be displayed on any tab. Otherwise, the sort expression won't be displayed on any of the specified tabs.
         */
        this.tabsExcluded = '[]';
        this.label = undefined;
        this.expression = undefined;
        this.tabsIncluded = '[]';
        this.tabsExcluded = '[]';
    }
    render() {
        if (this.tabsIncluded.length > 0 && this.tabsExcluded.length > 0) {
            console.warn('Values for both "tabs-included" and "tabs-excluded" have been provided. This is could lead to unexpected behaviors.');
        }
        const dropdownComponent = 'atomic-sort-dropdown';
        if (!this.host.closest(dropdownComponent)) {
            const error = new Error(`The "${this.host.nodeName.toLowerCase()}" component has to be used inside an ${dropdownComponent} element.`);
            return (index.h("atomic-component-error", { key: '2d13bc2f804e1878bc88cfc8e2d6e455eae97ac8', element: this.host, error: error }));
        }
    }
    get host() { return index.getElement(this); }
};
__decorate([
    propsUtils.ArrayProp()
], AtomicSortExpression.prototype, "tabsIncluded", void 0);
__decorate([
    propsUtils.ArrayProp()
], AtomicSortExpression.prototype, "tabsExcluded", void 0);

exports.atomic_sort_expression = AtomicSortExpression;

//# sourceMappingURL=atomic-sort-expression.cjs.entry.js.map