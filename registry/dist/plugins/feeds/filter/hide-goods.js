!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/filter/hide-goods"]=t():e["feeds/filter/hide-goods"]=t()}(globalThis,(()=>(()=>{var e,t,o={698:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=698,e.exports=t},131:e=>{"use strict";e.exports="移除动态里的商品带货动态 (UP主的推荐 · 来自 XX), 装有 `动态过滤器` 时生效.\n"},799:e=>{"use strict";e.exports=coreApis.componentApis.feeds.api}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,n),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var i=Object.create(null);n.r(i);var s={};e=e||[null,t({}),t([]),t(t)];for(var d=2&r&&o;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((e=>s[e]=()=>o[e]));return s.default=()=>o,n.d(i,s),i},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.d(i,{plugin:()=>e});const e={name:"feedsFilter.pluginBlocks.goods",displayName:"动态过滤器 - 移除商品带货动态",async setup(){const{forEachFeedsCard:e,getVueData:t}=await Promise.resolve().then(n.t.bind(n,799,23));e({added:e=>{const o=t(e.element);"ADDITIONAL_TYPE_GOODS"===lodash.get(o,"data.modules.module_dynamic.additional.type",null)&&e.element.classList.add("plugin-block")}})},commitHash:"6018100079aee98be9efd86c6eaf152fff96fef4",coreVersion:"2.8.13",description:(()=>{const e=n(698);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(n.t.bind(n,131,17)).then((e=>e.default))}})()}})(),i=i.plugin})()));