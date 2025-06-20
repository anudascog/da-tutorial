import { g as getDefaultExportFromCjs, c as commonjsGlobal } from './_commonjsHelpers-1789f0cf.js';
import { a as dayjs_min } from './dayjs.min-d04628c6.js';

var ku$2 = {exports: {}};

(function (module, exports) {
!function(e,t){t(exports,dayjs_min.exports);}(commonjsGlobal,(function(e,t){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(t),d={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},o={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},u=["کانوونی دووەم","شوبات","ئادار","نیسان","ئایار","حوزەیران","تەممووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانوونی یەکەم"],i={name:"ku",months:u,monthsShort:u,weekdays:"یەکشەممە_دووشەممە_سێشەممە_چوارشەممە_پێنجشەممە_هەینی_شەممە".split("_"),weekdaysShort:"یەکشەم_دووشەم_سێشەم_چوارشەم_پێنجشەم_هەینی_شەممە".split("_"),weekStart:6,weekdaysMin:"ی_د_س_چ_پ_هـ_ش".split("_"),preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,(function(e){return o[e]})).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,(function(e){return d[e]})).replace(/,/g,"،")},ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiem:function(e){return e<12?"پ.ن":"د.ن"},relativeTime:{future:"لە %s",past:"لەمەوپێش %s",s:"چەند چرکەیەک",m:"یەک خولەک",mm:"%d خولەک",h:"یەک کاتژمێر",hh:"%d کاتژمێر",d:"یەک ڕۆژ",dd:"%d ڕۆژ",M:"یەک مانگ",MM:"%d مانگ",y:"یەک ساڵ",yy:"%d ساڵ"}};r.default.locale(i,null,!0),e.default=i,e.englishToArabicNumbersMap=d,Object.defineProperty(e,"__esModule",{value:!0});}));
}(ku$2, ku$2.exports));

const ku = /*@__PURE__*/getDefaultExportFromCjs(ku$2.exports);

const ku$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), ku$2.exports, {
	'default': ku
}));

export { ku$1 as k };

//# sourceMappingURL=ku-e8f3148d.js.map