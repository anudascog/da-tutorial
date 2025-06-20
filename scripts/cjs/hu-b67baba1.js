'use strict';

const _commonjsHelpers = require('./_commonjsHelpers-b3309d7b.js');
const dayjs_min = require('./dayjs.min-8b80e6d1.js');

var hu$2 = {exports: {}};

(function (module, exports) {
!function(e,n){module.exports=n(dayjs_min.dayjs_min.exports);}(_commonjsHelpers.commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e),r={name:"hu",weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),ordinal:function(e){return e+"."},weekStart:1,relativeTime:{future:"%s múlva",past:"%s",s:function(e,n,t,r){return "néhány másodperc"+(r||n?"":"e")},m:function(e,n,t,r){return "egy perc"+(r||n?"":"e")},mm:function(e,n,t,r){return e+" perc"+(r||n?"":"e")},h:function(e,n,t,r){return "egy "+(r||n?"óra":"órája")},hh:function(e,n,t,r){return e+" "+(r||n?"óra":"órája")},d:function(e,n,t,r){return "egy "+(r||n?"nap":"napja")},dd:function(e,n,t,r){return e+" "+(r||n?"nap":"napja")},M:function(e,n,t,r){return "egy "+(r||n?"hónap":"hónapja")},MM:function(e,n,t,r){return e+" "+(r||n?"hónap":"hónapja")},y:function(e,n,t,r){return "egy "+(r||n?"év":"éve")},yy:function(e,n,t,r){return e+" "+(r||n?"év":"éve")}},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"}};return t.default.locale(r,null,!0),r}));
}(hu$2));

const hu = hu$2.exports;

const hu$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), hu$2.exports, {
	'default': hu
}));

exports.hu = hu$1;

//# sourceMappingURL=hu-b67baba1.js.map