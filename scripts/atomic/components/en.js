import { c as commonjsGlobal } from './_commonjsHelpers.js';

var en$2 = {exports: {}};

(function (module, exports) {
!function(e,n){module.exports=n();}(commonjsGlobal,(function(){return {name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var n=["th","st","nd","rd"],t=e%100;return "["+e+(n[(t-20)%10]||n[t]||n[0])+"]"}}}));
}(en$2));

const en = en$2.exports;

const en$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), en$2.exports, {
	'default': en
}));

export { en$1 as e };

//# sourceMappingURL=en.js.map