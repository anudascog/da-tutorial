import { c as commonjsGlobal } from './_commonjsHelpers.js';
import { a as dayjs_min } from './dayjs.min.js';

var bn$2 = {exports: {}};

(function (module, exports) {
!function(e,_){module.exports=_(dayjs_min.exports);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),n={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},d={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"},o={name:"bn",weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),months:"জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),monthsShort:"জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,(function(e){return d[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return n[e]}))},ordinal:function(e){return e},formats:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"}};return t.default.locale(o,null,!0),o}));
}(bn$2));

const bn = bn$2.exports;

const bn$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), bn$2.exports, {
	'default': bn
}));

export { bn$1 as b };

//# sourceMappingURL=bn.js.map