import { c as commonjsGlobal } from './_commonjsHelpers-1789f0cf.js';
import { a as dayjs_min } from './dayjs.min-d04628c6.js';

var ca$2 = {exports: {}};

(function (module, exports) {
!function(e,s){module.exports=s(dayjs_min.exports);}(commonjsGlobal,(function(e){function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=s(e),_={name:"ca",weekdays:"Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"),weekdaysShort:"Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),months:"Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"),monthsShort:"Gen._Febr._Març_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",ll:"D MMM YYYY",lll:"D MMM YYYY, H:mm",llll:"ddd D MMM YYYY, H:mm"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinal:function(e){return ""+e+(1===e||3===e?"r":2===e?"n":4===e?"t":"è")}};return t.default.locale(_,null,!0),_}));
}(ca$2));

const ca = ca$2.exports;

const ca$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), ca$2.exports, {
	'default': ca
}));

export { ca$1 as c };

//# sourceMappingURL=ca-92df40c1.js.map