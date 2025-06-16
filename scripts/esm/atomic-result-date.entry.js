import { r as registerInstance, g as getElement } from './index-3f35faca.js';
import { ResultTemplatesHelpers } from '@coveo/headless';
import { d as dayjs } from './dayjs.min-d04628c6.js';
import { c as commonjsGlobal } from './_commonjsHelpers-1789f0cf.js';
import { p as parseDate } from './date-utils-bf7bd81f.js';
import { I as InitializeBindings } from './initialization-utils-ff3edf9a.js';
import { R as ResultContext } from './result-template-decorators-62ec8535.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';
import './init-queue-fbe942c3.js';
import './initialization-lit-stencil-common-utils-9e0c895f.js';
import './item-decorators-c19409ab.js';

var calendar$1 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return function(e,t,a){var n="h:mm A",d={lastDay:"[Yesterday at] "+n,sameDay:"[Today at] "+n,nextDay:"[Tomorrow at] "+n,nextWeek:"dddd [at] "+n,lastWeek:"[Last] dddd [at] "+n,sameElse:"MM/DD/YYYY"};t.prototype.calendar=function(e,t){var n=t||this.$locale().calendar||d,o=a(e||void 0).startOf("d"),s=this.diff(o,"d",!0),i="sameElse",f=s<-6?i:s<-1?"lastWeek":s<0?"lastDay":s<1?"sameDay":s<2?"nextDay":s<7?"nextWeek":i,l=n[f]||d[f];return "function"==typeof l?l.call(this,a()):this.format(l)};}}));
}(calendar$1));

const calendar = calendar$1.exports;

var updateLocale$1 = {exports: {}};

(function (module, exports) {
!function(e,n){module.exports=n();}(commonjsGlobal,(function(){return function(e,n,t){t.updateLocale=function(e,n){var o=t.Ls[e];if(o)return (n?Object.keys(n):[]).forEach((function(e){o[e]=n[e];})),o};}}));
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
dayjs.extend(calendar);
dayjs.extend(updateLocale);
const AtomicResultDate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        const value = ResultTemplatesHelpers.getResultProperty(this.result, this.field);
        if (value === null) {
            this.dateToRender = null;
            return;
        }
        const parsedValue = parseDate(value);
        if (!parsedValue.isValid()) {
            this.error = new Error(`Field "${this.field}" does not contain a valid date.`);
            this.dateToRender = null;
            return;
        }
        if (this.relativeTime) {
            dayjs.updateLocale(this.bindings.interfaceElement.language, {
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
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicResultDate.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultDate.prototype, "result", void 0);

export { AtomicResultDate as atomic_result_date };

//# sourceMappingURL=atomic-result-date.entry.js.map