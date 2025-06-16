import { c as commonjsGlobal } from './_commonjsHelpers.js';
import { a as dayjs_min } from './dayjs.min.js';

var br$2 = {exports: {}};

(function (module, exports) {
!function(e,n){module.exports=n(dayjs_min.exports);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=n(e);function r(e){return e>9?r(e%10):e}function t(e,n,u){return e+" "+function(e,n){return 2===n?function(e){return {m:"v",b:"v",d:"z"}[e.charAt(0)]+e.substring(1)}(e):e}({mm:"munutenn",MM:"miz",dd:"devezh"}[u],e)}var o={name:"br",weekdays:"Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),months:"Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),weekStart:1,weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),monthsShort:"Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),ordinal:function(e){return e},formats:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},relativeTime:{future:"a-benn %s",past:"%s ʼzo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:t,h:"un eur",hh:"%d eur",d:"un devezh",dd:t,M:"ur miz",MM:t,y:"ur bloaz",yy:function(e){switch(r(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}},meridiem:function(e){return e<12?"a.m.":"g.m."}};return u.default.locale(o,null,!0),o}));
}(br$2));

const br = br$2.exports;

const br$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), br$2.exports, {
	'default': br
}));

export { br$1 as b };

//# sourceMappingURL=br.js.map