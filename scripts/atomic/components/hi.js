import { c as commonjsGlobal } from './_commonjsHelpers.js';
import { a as dayjs_min } from './dayjs.min.js';

var hi$2 = {exports: {}};

(function (module, exports) {
!function(_,e){module.exports=e(dayjs_min.exports);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"hi",weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),ordinal:function(_){return _},formats:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"}};return t.default.locale(d,null,!0),d}));
}(hi$2));

const hi = hi$2.exports;

const hi$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), hi$2.exports, {
	'default': hi
}));

export { hi$1 as h };

//# sourceMappingURL=hi.js.map