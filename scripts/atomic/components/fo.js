import { c as commonjsGlobal } from './_commonjsHelpers.js';
import { a as dayjs_min } from './dayjs.min.js';

var fo$2 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t(dayjs_min.exports);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),r={name:"fo",weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),weekStart:1,weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minuttur",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaður",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"}};return a.default.locale(r,null,!0),r}));
}(fo$2));

const fo = fo$2.exports;

const fo$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), fo$2.exports, {
	'default': fo
}));

export { fo$1 as f };

//# sourceMappingURL=fo.js.map