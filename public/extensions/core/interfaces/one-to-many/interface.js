parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relationship:{type:Object,default:null}}};
},{}],"wEnJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},e=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,s=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw s}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=require("../../../mixins/interface"),n=r(i);function r(t){return t&&t.__esModule?t:{default:t}}exports.default={name:"interface-one-to-many",mixins:[n.default],data:function(){return{selecting:!1,loading:!1,lazyLoading:!1,items:[],error:null,viewQuery:{},viewOptions:{},selection:[],fields:{}}},computed:{relationshipSetup:function(){return null!=this.relationship},itemsByKey:function(){return this.relationship?this.$lodash.keyBy(this.items,this.relationship.field):{}},selectionInItems:function(){var t=this;return this.selection.map(function(e){return t.itemsByKey[e]})}},created:function(){this.relationship&&this.hydrate()},watch:{relationship:function(){this.hydrate()},selection:function(){this.$emit("input",this.selectionInItems)}},methods:{hydrate:function(){var i=this;this.relationship&&(this.loading=!0,Promise.all([this.$api.getFields(this.relationship.collection),this.$api.getItems(this.relationship.collection,{fields:"*.*"})]).then(function(n){var r=e(n,2),s=r[0],o=r[1];i.loading=!1,i.fields=i.$lodash.mapValues(i.$lodash.keyBy(s.data,"field"),function(e){return t({},e,{name:i.$helpers.formatTitle(e.field)})}),i.items=o.data}).catch(function(t){i.loading=!1,i.error=t}))},setViewQuery:function(t){this.viewQuery=Object.assign({},this.viewQuery,t)},setViewOptions:function(t){this.viewQuery=Object.assign({},this.viewQuery,t)},fetchNextPage:function(){}}};
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"interface-one-to-many"},[e.relationshipSetup?[i("ul",e._l(e.selectionInItems,function(t){return i("li",{key:t[e.relationship.field]},[e._v(" "+e._s(t[e.relationship.field])+" ")])})),e._v(" "),i("v-button",{on:{click:function(t){e.selecting=!0}}},[e._v(e._s(e.$t("select_existing")))]),e._v(" "),e.selecting?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:e.$t("interfaces-one-to-many-select_items"),"action-required":""},on:{confirm:function(t){e.selecting=!1}}},[i("v-listing",{attrs:{"view-type":"tabular",fields:e.fields,items:e.items,loading:e.loading,"lazy-loading":e.lazyLoading,selection:e.selection,"view-options":e.viewOptions,"view-query":e.viewQuery},on:{options:e.setViewOptions,select:function(t){e.selection=t},query:e.setViewQuery,"next-page":e.fetchNextPage}})],1)],1):e._e()]:i("p",[i("i",{staticClass:"material-icons"},[e._v("warning")]),e._v(" Relationship hasn't been setup yet")])],2)},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}]},{},["wEnJ"], "__DirectusExtension__")