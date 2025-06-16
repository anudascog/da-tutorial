import { c as commonjsGlobal } from './_commonjsHelpers.js';
import { a as dayjs_min } from './dayjs.min.js';

var me$2 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t(dayjs_min.exports);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var _=t(e),a={name:"me",weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),weekStart:1,weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),ordinal:function(e){return e},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"}};return _.default.locale(a,null,!0),a}));
}(me$2));

const me = me$2.exports;

const me$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), me$2.exports, {
	'default': me
}));

export { me$1 as m };

//# sourceMappingURL=me.js.map