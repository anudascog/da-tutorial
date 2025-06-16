import { r as registerInstance, h, g as getElement } from './index-3f35faca.js';
import { A as ArrayProp } from './props-utils-525cbc5b.js';
import '@coveo/bueno';
import './utils-0a01e06c.js';
import './purify-c7ebd240.js';
import './_commonjsHelpers-1789f0cf.js';

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
        registerInstance(this, hostRef);
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
            return (h("atomic-component-error", { key: '2d13bc2f804e1878bc88cfc8e2d6e455eae97ac8', element: this.host, error: error }));
        }
    }
    get host() { return getElement(this); }
};
__decorate([
    ArrayProp()
], AtomicSortExpression.prototype, "tabsIncluded", void 0);
__decorate([
    ArrayProp()
], AtomicSortExpression.prototype, "tabsExcluded", void 0);

export { AtomicSortExpression as atomic_sort_expression };

//# sourceMappingURL=atomic-sort-expression.entry.js.map