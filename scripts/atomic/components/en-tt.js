import { c as commonjsGlobal } from './_commonjsHelpers.js';
import { a as dayjs_min } from './dayjs.min.js';

var enTt$2 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t(dayjs_min.exports);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),_={name:"en-tt",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,yearStart:4,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return "["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}};return a.default.locale(_,null,!0),_}));
}(enTt$2));

const enTt = enTt$2.exports;

const enTt$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), enTt$2.exports, {
	'default': enTt
}));

export { enTt$1 as e };

//# sourceMappingURL=en-tt.js.map