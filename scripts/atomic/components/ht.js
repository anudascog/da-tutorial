import { c as commonjsGlobal } from './_commonjsHelpers.js';
import { a as dayjs_min } from './dayjs.min.js';

var ht$2 = {exports: {}};

(function (module, exports) {
!function(e,n){module.exports=n(dayjs_min.exports);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=n(e),a={name:"ht",weekdays:"dimanch_lendi_madi_mèkredi_jedi_vandredi_samdi".split("_"),months:"janvye_fevriye_mas_avril_me_jen_jiyè_out_septanm_oktòb_novanm_desanm".split("_"),weekdaysShort:"dim._len._mad._mèk._jed._van._sam.".split("_"),monthsShort:"jan._fev._mas_avr._me_jen_jiyè._out_sept._okt._nov._des.".split("_"),weekdaysMin:"di_le_ma_mè_je_va_sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"nan %s",past:"sa gen %s",s:"kèk segond",m:"yon minit",mm:"%d minit",h:"inèdtan",hh:"%d zè",d:"yon jou",dd:"%d jou",M:"yon mwa",MM:"%d mwa",y:"yon ane",yy:"%d ane"}};return d.default.locale(a,null,!0),a}));
}(ht$2));

const ht = ht$2.exports;

const ht$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), ht$2.exports, {
	'default': ht
}));

export { ht$1 as h };

//# sourceMappingURL=ht.js.map