(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ddfa684"],{"0366":function(t,r,n){var e=n("1c0b");t.exports=function(t,r,n){if(e(t),void 0===r)return t;switch(n){case 0:return function(){return t.call(r)};case 1:return function(n){return t.call(r,n)};case 2:return function(n,e){return t.call(r,n,e)};case 3:return function(n,e,o){return t.call(r,n,e,o)}}return function(){return t.apply(r,arguments)}}},"06cf":function(t,r,n){var e=n("83ab"),o=n("d1e7"),i=n("5c6c"),c=n("fc6a"),a=n("c04e"),u=n("5135"),f=n("0cfb"),s=Object.getOwnPropertyDescriptor;r.f=e?s:function(t,r){if(t=c(t),r=a(r,!0),f)try{return s(t,r)}catch(n){}if(u(t,r))return i(!o.f.call(t,r),t[r])}},1547:function(t,r,n){},"159b":function(t,r,n){var e=n("da84"),o=n("fdbc"),i=n("17c2"),c=n("9112");for(var a in o){var u=e[a],f=u&&u.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(s){f.forEach=i}}},"17c2":function(t,r,n){"use strict";var e=n("b727").forEach,o=n("a640"),i=n("ae40"),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},"1c0b":function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1d80":function(t,r){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,r,n){var e=n("a691"),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},"23e7":function(t,r,n){var e=n("da84"),o=n("06cf").f,i=n("9112"),c=n("6eeb"),a=n("ce4e"),u=n("e893"),f=n("94ca");t.exports=function(t,r){var n,s,l,p,d,v,h=t.target,b=t.global,y=t.stat;if(s=b?e:y?e[h]||a(h,{}):(e[h]||{}).prototype,s)for(l in r){if(d=r[l],t.noTargetGet?(v=o(s,l),p=v&&v.value):p=s[l],n=f(b?l:h+(y?".":"#")+l,t.forced),!n&&void 0!==p){if(typeof d===typeof p)continue;u(d,p)}(t.sham||p&&p.sham)&&i(d,"sham",!0),c(s,l,d,t)}}},"241c":function(t,r,n){var e=n("ca84"),o=n("7839"),i=o.concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},4160:function(t,r,n){"use strict";var e=n("23e7"),o=n("17c2");e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"428f":function(t,r,n){var e=n("da84");t.exports=e},"44ad":function(t,r,n){var e=n("d039"),o=n("c6b6"),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},"48dd":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("div",{staticClass:"card-deck"},t._l(t.lotteries,(function(r,e){return n("div",{key:e,staticClass:"card"},[n("div",{staticClass:"card-front"}),n("div",{staticClass:"card-back"},[n("span",{style:"color:"+t.pokerStyle[e%4].color},[n("strong",[t._v(t._s(r.name))])]),n("img",{attrs:{src:t.pokerStyle[e%4].link}}),n("span",{style:"color:"+t.pokerStyle[e%4].color},[n("strong",[t._v(t._s(r.name))])])])])})),0)])},o=[],i=(n("4160"),n("159b"),n("88b8")),c={data:function(){return{lotteries:[],pokerStyle:[{color:"red",link:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Naipe_copas.png/103px-Naipe_copas.png"},{color:"red",link:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Naipe_ouros.png/103px-Naipe_ouros.png"},{color:"black",link:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/103px-SuitClubs.svg.png"},{color:"black",link:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Naipe_espadas.png/103px-Naipe_espadas.png"}]}},methods:{getData:function(){var t=this;i["a"].ref("lotteries").once("value",(function(r){t.lotteries=[],r.forEach((function(r){t.lotteries.push({key:r.key,name:r.val()})}))}))}},created:function(){this.getData()}},a=c,u=(n("ae02"),n("2877")),f=Object(u["a"])(a,e,o,!1,null,null,null);r["default"]=f.exports},"4d64":function(t,r,n){var e=n("fc6a"),o=n("50c4"),i=n("23cb"),c=function(t){return function(r,n,c){var a,u=e(r),f=o(u.length),s=i(c,f);if(t&&n!=n){while(f>s)if(a=u[s++],a!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"50c4":function(t,r,n){var e=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},"56ef":function(t,r,n){var e=n("d066"),o=n("241c"),i=n("7418"),c=n("825a");t.exports=e("Reflect","ownKeys")||function(t){var r=o.f(c(t)),n=i.f;return n?r.concat(n(t)):r}},"65f0":function(t,r,n){var e=n("861d"),o=n("e8b5"),i=n("b622"),c=i("species");t.exports=function(t,r){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?e(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},7418:function(t,r){r.f=Object.getOwnPropertySymbols},7839:function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,r,n){var e=n("1d80");t.exports=function(t){return Object(e(t))}},"94ca":function(t,r,n){var e=n("d039"),o=/#|\.prototype\./,i=function(t,r){var n=a[c(t)];return n==f||n!=u&&("function"==typeof r?e(r):!!r)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},a640:function(t,r,n){"use strict";var e=n("d039");t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){throw 1},1)}))}},a691:function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},ae02:function(t,r,n){"use strict";n("1547")},ae40:function(t,r,n){var e=n("83ab"),o=n("d039"),i=n("5135"),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,r){if(i(a,t))return a[t];r||(r={});var n=[][t],f=!!i(r,"ACCESSORS")&&r.ACCESSORS,s=i(r,0)?r[0]:u,l=i(r,1)?r[1]:void 0;return a[t]=!!n&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,s,l)}))}},b727:function(t,r,n){var e=n("0366"),o=n("44ad"),i=n("7b0b"),c=n("50c4"),a=n("65f0"),u=[].push,f=function(t){var r=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(d,v,h,b){for(var y,m,g=i(d),S=o(g),x=e(v,h,3),L=c(S.length),k=0,w=b||a,O=r?w(d,L):n?w(d,0):void 0;L>k;k++)if((p||k in S)&&(y=S[k],m=x(y,k,g),t))if(r)O[k]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return k;case 2:u.call(O,y)}else if(s)return!1;return l?-1:f||s?s:O}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},ca84:function(t,r,n){var e=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,c=n("d012");t.exports=function(t,r){var n,a=o(t),u=0,f=[];for(n in a)!e(c,n)&&e(a,n)&&f.push(n);while(r.length>u)e(a,n=r[u++])&&(~i(f,n)||f.push(n));return f}},d066:function(t,r,n){var e=n("428f"),o=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][r]||o[t]&&o[t][r]}},d1e7:function(t,r,n){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);r.f=i?function(t){var r=o(this,t);return!!r&&r.enumerable}:e},e893:function(t,r,n){var e=n("5135"),o=n("56ef"),i=n("06cf"),c=n("9bf2");t.exports=function(t,r){for(var n=o(r),a=c.f,u=i.f,f=0;f<n.length;f++){var s=n[f];e(t,s)||a(t,s,u(r,s))}}},e8b5:function(t,r,n){var e=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},fc6a:function(t,r,n){var e=n("44ad"),o=n("1d80");t.exports=function(t){return e(o(t))}},fdbc:function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-3ddfa684.d057fc6d.js.map