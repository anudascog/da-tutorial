import { c as commonjsGlobal } from './_commonjsHelpers.js';
import { a as dayjs_min } from './dayjs.min.js';

var bs$2 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t(dayjs_min.exports);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var _=t(e),a={name:"bs",weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),weekStart:1,weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),ordinal:function(e){return e},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"}};return _.default.locale(a,null,!0),a}));
}(bs$2));

const bs = bs$2.exports;

const bs$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), bs$2.exports, {
	'default': bs
}));

export { bs$1 as b };

//# sourceMappingURL=bs.js.map