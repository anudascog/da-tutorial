import { c as commonjsGlobal } from './_commonjsHelpers.js';
import { a as dayjs_min } from './dayjs.min.js';

var gd$2 = {exports: {}};

(function (module, exports) {
!function(a,i){module.exports=i(dayjs_min.exports);}(commonjsGlobal,(function(a){function i(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var n=i(a),e={name:"gd",weekdays:"Didòmhnaich_Diluain_Dimàirt_Diciadain_Diardaoin_Dihaoine_Disathairne".split("_"),months:"Am Faoilleach_An Gearran_Am Màrt_An Giblean_An Cèitean_An t-Ògmhios_An t-Iuchar_An Lùnastal_An t-Sultain_An Dàmhair_An t-Samhain_An Dùbhlachd".split("_"),weekStart:1,weekdaysShort:"Did_Dil_Dim_Dic_Dia_Dih_Dis".split("_"),monthsShort:"Faoi_Gear_Màrt_Gibl_Cèit_Ògmh_Iuch_Lùn_Sult_Dàmh_Samh_Dùbh".split("_"),weekdaysMin:"Dò_Lu_Mà_Ci_Ar_Ha_Sa".split("_"),ordinal:function(a){return a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"}};return n.default.locale(e,null,!0),e}));
}(gd$2));

const gd = gd$2.exports;

const gd$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), gd$2.exports, {
	'default': gd
}));

export { gd$1 as g };

//# sourceMappingURL=gd.js.map