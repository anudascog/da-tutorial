'use strict';

const _commonjsHelpers = require('./_commonjsHelpers-b3309d7b.js');
const dayjs_min = require('./dayjs.min-8b80e6d1.js');

var bnBd$2 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t(dayjs_min.dayjs_min.exports);}(_commonjsHelpers.commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var _=t(e),n={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},d={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"},r={name:"bn-bd",weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),months:"জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),monthsShort:"জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),weekStart:0,preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,(function(e){return d[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return n[e]}))},ordinal:function(e){var t=["ই","লা","রা","ঠা","শে"],_=e%100;return "["+e+(t[(_-20)%10]||t[_]||t[0])+"]"},formats:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY খ্রিস্টাব্দ",LL:"D MMMM YYYY খ্রিস্টাব্দ",LLL:"D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়",LLLL:"dddd, D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়"},meridiem:function(e){return e<4?"রাত":e<6?"ভোর":e<12?"সকাল":e<15?"দুপুর":e<18?"বিকাল":e<20?"সন্ধ্যা":"রাত"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"}};return _.default.locale(r,null,!0),r}));
}(bnBd$2));

const bnBd = bnBd$2.exports;

const bnBd$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), bnBd$2.exports, {
	'default': bnBd
}));

exports.bnBd = bnBd$1;

//# sourceMappingURL=bn-bd-4acb433e.js.map