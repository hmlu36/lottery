(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf654"],{6411:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-md-5"},[o("h3",{staticClass:"text-center"},[t._v("編輯獎品")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.onUpdateForm(e)}}},[o("div",{staticClass:"form-group"},[o("label",[t._v("獎品名稱")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.lottery,expression:"lottery"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.lottery},on:{input:function(e){e.target.composing||(t.lottery=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-primary btn-block",on:{click:function(e){return e.preventDefault(),t.onUpdateForm(e)}}},[t._v(" 儲存 ")])])])])])},r=[],a=o("88b8"),s={data:function(){return{lottery:""}},created:function(){var t=this;a["a"].ref("lotteries/".concat(this.$route.params.id)).on("value",(function(e){console.log(JSON.stringify(e)),t.lottery=e.val()}))},methods:{onUpdateForm:function(){var t=this;console.log("submit");var e={};e[this.$route.params.id]=this.lottery,a["a"].ref("lotteries").update(e).then((function(){alert("更新成功!"),setTimeout((function(){t.$router.push("/list")}),500)})).catch((function(t){console.log(t)}))}}},i=s,l=o("2877"),c=Object(l["a"])(i,n,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0cf654.7f425b2d.js.map