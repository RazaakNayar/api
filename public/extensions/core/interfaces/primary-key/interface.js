parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relationship:{type:Object,default:null}}};
},{}],"rWh1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../../mixins/interface"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}exports.default={mixins:[t.default]};
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"no-wrap"},[this._v(this._s(this.value))])},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}],"KLEa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../../mixins/interface"),t=n(e),u=require("./readonly.vue"),r=n(u);function n(e){return e&&e.__esModule?e:{default:e}}exports.default={mixins:[t.default],computed:{inputType:function(){return"VARCHAR"===this.type||"CHAR"===this.type?"text":"number"}},components:{Readonly:r.default}};
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.newItem?n("v-input",{class:e.input,attrs:{maxlength:e.length,type:e.inputType,readonly:e.readonly,value:e.value},on:{input:function(t){e.$emit("input",t)}}}):e._e()},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-c207d9",functional:void 0});})();
},{"../../../mixins/interface":"QdEO","./readonly.vue":"rWh1"}]},{},["KLEa"], "__DirectusExtension__")