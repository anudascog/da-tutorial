'use strict';

const _commonjsHelpers = require('./_commonjsHelpers-b3309d7b.js');
const dayjs_min = require('./dayjs.min-8b80e6d1.js');

var et$2 = {exports: {}};

(function (module, exports) {
!function(e,a){module.exports=a(dayjs_min.dayjs_min.exports);}(_commonjsHelpers.commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e);function u(e,a,t,u){var s={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:["%d minuti","%d minutit"],h:["ühe tunni","tund aega","üks tund"],hh:["%d tunni","%d tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:["%d kuu","%d kuud"],y:["ühe aasta","aasta","üks aasta"],yy:["%d aasta","%d aastat"]};return a?(s[t][2]?s[t][2]:s[t][1]).replace("%d",e):(u?s[t][0]:s[t][1]).replace("%d",e)}var s={name:"et",weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),ordinal:function(e){return e+"."},weekStart:1,relativeTime:{future:"%s pärast",past:"%s tagasi",s:u,m:u,mm:u,h:u,hh:u,d:u,dd:"%d päeva",M:u,MM:u,y:u,yy:u},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"}};return t.default.locale(s,null,!0),s}));
}(et$2));

const et = et$2.exports;

const et$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), et$2.exports, {
	'default': et
}));

exports.et = et$1;

//# sourceMappingURL=et-2014946e.js.map