import { c as commonjsGlobal } from './_commonjsHelpers.js';
import { a as dayjs_min } from './dayjs.min.js';

var eu$2 = {exports: {}};

(function (module, exports) {
!function(a,e){module.exports=e(dayjs_min.exports);}(commonjsGlobal,(function(a){function e(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var t=e(a),l={name:"eu",weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),weekStart:1,weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),ordinal:function(a){return a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"}};return t.default.locale(l,null,!0),l}));
}(eu$2));

const eu = eu$2.exports;

const eu$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), eu$2.exports, {
	'default': eu
}));

export { eu$1 as e };

//# sourceMappingURL=eu.js.map