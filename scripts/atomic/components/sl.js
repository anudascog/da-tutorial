import { c as commonjsGlobal } from './_commonjsHelpers.js';
import { a as dayjs_min } from './dayjs.min.js';

var sl$2 = {exports: {}};

(function (module, exports) {
!function(e,n){module.exports=n(dayjs_min.exports);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e);function r(e){return e%100==2}function a(e){return e%100==3||e%100==4}function s(e,n,t,s){var m=e+" ";switch(t){case"s":return n||s?"nekaj sekund":"nekaj sekundami";case"m":return n?"ena minuta":"eno minuto";case"mm":return r(e)?m+(n||s?"minuti":"minutama"):a(e)?m+(n||s?"minute":"minutami"):m+(n||s?"minut":"minutami");case"h":return n?"ena ura":"eno uro";case"hh":return r(e)?m+(n||s?"uri":"urama"):a(e)?m+(n||s?"ure":"urami"):m+(n||s?"ur":"urami");case"d":return n||s?"en dan":"enim dnem";case"dd":return r(e)?m+(n||s?"dneva":"dnevoma"):m+(n||s?"dni":"dnevi");case"M":return n||s?"en mesec":"enim mesecem";case"MM":return r(e)?m+(n||s?"meseca":"mesecema"):a(e)?m+(n||s?"mesece":"meseci"):m+(n||s?"mesecev":"meseci");case"y":return n||s?"eno leto":"enim letom";case"yy":return r(e)?m+(n||s?"leti":"letoma"):a(e)?m+(n||s?"leta":"leti"):m+(n||s?"let":"leti")}}var m={name:"sl",weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),weekStart:1,weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"čez %s",past:"pred %s",s:s,m:s,mm:s,h:s,hh:s,d:s,dd:s,M:s,MM:s,y:s,yy:s}};return t.default.locale(m,null,!0),m}));
}(sl$2));

const sl = sl$2.exports;

const sl$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), sl$2.exports, {
	'default': sl
}));

export { sl$1 as s };

//# sourceMappingURL=sl.js.map