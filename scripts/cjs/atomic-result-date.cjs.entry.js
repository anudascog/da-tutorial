'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const headless = require('@coveo/headless');
const dayjs_min = require('./dayjs.min-8b80e6d1.js');
const _commonjsHelpers = require('./_commonjsHelpers-b3309d7b.js');
const dateUtils = require('./date-utils-ee316e1d.js');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const resultTemplateDecorators = require('./result-template-decorators-3115d726.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');
require('./item-decorators-2c23030b.js');

var calendar$1 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t();}(_commonjsHelpers.commonjsGlobal,(function(){return function(e,t,a){var n="h:mm A",d={lastDay:"[Yesterday at] "+n,sameDay:"[Today at] "+n,nextDay:"[Tomorrow at] "+n,nextWeek:"dddd [at] "+n,lastWeek:"[Last] dddd [at] "+n,sameElse:"MM/DD/YYYY"};t.prototype.calendar=function(e,t){var n=t||this.$locale().calendar||d,o=a(e||void 0).startOf("d"),s=this.diff(o,"d",!0),i="sameElse",f=s<-6?i:s<-1?"lastWeek":s<0?"lastDay":s<1?"sameDay":s<2?"nextDay":s<7?"nextWeek":i,l=n[f]||d[f];return "function"==typeof l?l.call(this,a()):this.format(l)};}}));
}(calendar$1));

const calendar = calendar$1.exports;

var updateLocale$1 = {exports: {}};

(function (module, exports) {
!function(e,n){module.exports=n();}(_commonjsHelpers.commonjsGlobal,(function(){return function(e,n,t){t.updateLocale=function(e,n){var o=t.Ls[e];if(o)return (n?Object.keys(n):[]).forEach((function(e){o[e]=n[e];})),o};}}));
}(updateLocale$1));

const updateLocale = updateLocale$1.exports;

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
dayjs_min.dayjs.extend(calendar);
dayjs_min.dayjs.extend(updateLocale);
const AtomicResultDate = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The result field which the component should use.
         * This will look for the field in the Result object first, and then in the Result.raw object.
         * It is important to include the necessary field in the `atomic-search-interface` component.
         */
        this.field = 'date';
        /**
         * Available formats: https://day.js.org/docs/en/display/format
         */
        this.format = 'D/M/YYYY';
        this.dateToRender = null;
        this.error = undefined;
        this.field = 'date';
        this.format = 'D/M/YYYY';
        this.relativeTime = undefined;
    }
    updateDateToRender() {
        const value = headless.ResultTemplatesHelpers.getResultProperty(this.result, this.field);
        if (value === null) {
            this.dateToRender = null;
            return;
        }
        const parsedValue = dateUtils.parseDate(value);
        if (!parsedValue.isValid()) {
            this.error = new Error(`Field "${this.field}" does not contain a valid date.`);
            this.dateToRender = null;
            return;
        }
        if (this.relativeTime) {
            dayjs_min.dayjs.updateLocale(this.bindings.interfaceElement.language, {
                calendar: {
                    sameDay: this.bindings.i18n.t('calendar-same-day'),
                    nextDay: this.bindings.i18n.t('calendar-next-day'),
                    nextWeek: this.bindings.i18n.t('calendar-next-week'),
                    lastDay: this.bindings.i18n.t('calendar-last-day'),
                    lastWeek: this.bindings.i18n.t('calendar-last-week'),
                    sameElse: this.format,
                },
            });
            this.dateToRender = parsedValue.calendar();
        }
        else {
            this.dateToRender = parsedValue.format(this.format);
        }
    }
    componentWillRender() {
        this.updateDateToRender();
    }
    render() {
        if (this.dateToRender === null) {
            this.host.remove();
            return;
        }
        return this.dateToRender;
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicResultDate.prototype, "bindings", void 0);
__decorate([
    resultTemplateDecorators.ResultContext()
], AtomicResultDate.prototype, "result", void 0);

exports.atomic_result_date = AtomicResultDate;

//# sourceMappingURL=atomic-result-date.cjs.entry.js.map