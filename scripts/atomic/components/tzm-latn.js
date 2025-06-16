import { c as commonjsGlobal } from './_commonjsHelpers.js';
import { a as dayjs_min } from './dayjs.min.js';

var tzmLatn$2 = {exports: {}};

(function (module, exports) {
!function(a,s){module.exports=s(dayjs_min.exports);}(commonjsGlobal,(function(a){function s(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var n=s(a),i={name:"tzm-latn",weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekStart:6,weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),ordinal:function(a){return a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"}};return n.default.locale(i,null,!0),i}));
}(tzmLatn$2));

const tzmLatn = tzmLatn$2.exports;

const tzmLatn$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), tzmLatn$2.exports, {
	'default': tzmLatn
}));

export { tzmLatn$1 as t };

//# sourceMappingURL=tzm-latn.js.map