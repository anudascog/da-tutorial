'use strict';

const _commonjsHelpers = require('./_commonjsHelpers-b3309d7b.js');
const dayjs_min = require('./dayjs.min-8b80e6d1.js');

var sk$2 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t(dayjs_min.dayjs_min.exports);}(_commonjsHelpers.commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function r(e){return e>1&&e<5&&1!=~~(e/10)}function o(e,t,n,o){var a=e+" ";switch(n){case"s":return t||o?"pár sekúnd":"pár sekundami";case"m":return t?"minúta":o?"minútu":"minútou";case"mm":return t||o?a+(r(e)?"minúty":"minút"):a+"minútami";case"h":return t?"hodina":o?"hodinu":"hodinou";case"hh":return t||o?a+(r(e)?"hodiny":"hodín"):a+"hodinami";case"d":return t||o?"deň":"dňom";case"dd":return t||o?a+(r(e)?"dni":"dní"):a+"dňami";case"M":return t||o?"mesiac":"mesiacom";case"MM":return t||o?a+(r(e)?"mesiace":"mesiacov"):a+"mesiacmi";case"y":return t||o?"rok":"rokom";case"yy":return t||o?a+(r(e)?"roky":"rokov"):a+"rokmi"}}var a={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:o,m:o,mm:o,h:o,hh:o,d:o,dd:o,M:o,MM:o,y:o,yy:o}};return n.default.locale(a,null,!0),a}));
}(sk$2));

const sk = sk$2.exports;

const sk$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), sk$2.exports, {
	'default': sk
}));

exports.sk = sk$1;

//# sourceMappingURL=sk-afb11dce.js.map