(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"02f4":function(t,e,n){var r=n("4588"),c=n("be13");t.exports=function(t){return function(e,n){var i,o,a=String(c(e)),u=r(n),s=a.length;return u<0||u>=s?t?"":void 0:(i=a.charCodeAt(u),i<55296||i>56319||u+1===s||(o=a.charCodeAt(u+1))<56320||o>57343?t?a.charAt(u):i:t?a.slice(u,u+2):o-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),c=n("32e9"),i=n("79e5"),o=n("be13"),a=n("2b4c"),u=n("520a"),s=a("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=a(t),d=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),v=d?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[p](""),!e})):void 0;if(!d||!v||"replace"===t&&!l||"split"===t&&!f){var h=/./[p],g=n(o,p,""[t],(function(t,e,n,r,c){return e.exec===u?d&&!c?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),b=g[0],x=g[1];r(String.prototype,t,b),c(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}}},2447:function(t,e,n){},"28a5":function(t,e,n){"use strict";var r=n("aae3"),c=n("cb7c"),i=n("ebd6"),o=n("0390"),a=n("9def"),u=n("5f1b"),s=n("520a"),l=n("79e5"),f=Math.min,p=[].push,d="split",v="length",h="lastIndex",g=4294967295,b=!l((function(){RegExp(g,"y")}));n("214f")("split",2,(function(t,e,n,l){var x;return x="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[v]||2!="ab"[d](/(?:ab)*/)[v]||4!="."[d](/(.?)(.?)/)[v]||"."[d](/()()/)[v]>1||""[d](/.?/)[v]?function(t,e){var c=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(c,t,e);var i,o,a,u=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,d=void 0===e?g:e>>>0,b=new RegExp(t.source,l+"g");while(i=s.call(b,c)){if(o=b[h],o>f&&(u.push(c.slice(f,i.index)),i[v]>1&&i.index<c[v]&&p.apply(u,i.slice(1)),a=i[0][v],f=o,u[v]>=d))break;b[h]===i.index&&b[h]++}return f===c[v]?!a&&b.test("")||u.push(""):u.push(c.slice(f)),u[v]>d?u.slice(0,d):u}:"0"[d](void 0,0)[v]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var c=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,c,r):x.call(String(c),n,r)},function(t,e){var r=l(x,t,this,e,x!==n);if(r.done)return r.value;var s=c(t),p=String(this),d=i(s,RegExp),v=s.unicode,h=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(b?"y":"g"),m=new d(b?s:"^(?:"+s.source+")",h),y=void 0===e?g:e>>>0;if(0===y)return[];if(0===p.length)return null===u(m,p)?[p]:[];var w=0,_=0,E=[];while(_<p.length){m.lastIndex=b?_:0;var C,O=u(m,b?p:p.slice(_));if(null===O||(C=f(a(m.lastIndex+(b?0:_)),p.length))===w)_=o(p,_,v);else{if(E.push(p.slice(w,_)),E.length===y)return E;for(var $=1;$<=O.length-1;$++)if(E.push(O[$]),E.length===y)return E;_=w=C}}return E.push(p.slice(w)),E}]}))},"2bd6":function(t,e,n){},3020:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cover",style:{"background-color":t.formatOpacity}})},c=[],i={name:"",props:["opacity"],computed:{formatOpacity:function(){return"rgba(255, 255, 255,"+this.opacity+")"}}},o=i,a=(n("6402"),n("2877")),u=Object(a["a"])(o,r,c,!1,null,"b9fea064",null);e["a"]=u.exports},"3da5":function(t,e,n){"use strict";n("d77a")},"520a":function(t,e,n){"use strict";var r=n("0bfb"),c=RegExp.prototype.exec,i=String.prototype.replace,o=c,a="lastIndex",u=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t[a]||0!==e[a]}(),s=void 0!==/()??/.exec("")[1],l=u||s;l&&(o=function(t){var e,n,o,l,f=this;return s&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),u&&(e=f[a]),o=c.call(f,t),u&&o&&(f[a]=f.global?o.index+o[0].length:e),s&&o&&o.length>1&&i.call(o[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),t.exports=o},5638:function(t,e,n){},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),c=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return c.call(t,e)}},6402:function(t,e,n){"use strict";n("f0ba")},"6d84":function(t,e,n){"use strict";n("2bd6")},"743f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-two"},[n("bg-second"),n("text-float")],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg"},[n("cover",{attrs:{opacity:t.coverOpacity}})],1)},o=[],a=n("3020"),u={name:"",data:function(){return{coverOpacity:.7}},components:{Cover:a["a"]}},s=u,l=(n("7928"),n("2877")),f=Object(l["a"])(s,i,o,!1,null,"12fc9b06",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-float"},[n("div",{staticClass:"wordbox-para"},t._l(t.wordArr,(function(e,r){return n("div",{key:r},t._l(e,(function(e,r){return n("span",{key:r,style:{"animation-delay":e.time+"s"}},[t._v(t._s(e.word))])})),0)})),0)])},v=[],h=(n("28a5"),{name:"",data:function(){return{wordList:["跟你说了多少次","晚上要当心","不要出门","这不","昨天晚上又到我梦里来了","害得我醒不来","","白天有你就有梦","夜晚有梦就有你","你要好好照顾自己","不要感冒流鼻涕","要是偶尔打喷嚏","那就代表我想你！"],time:0,speed:.15}},computed:{wordArr:function(){for(var t=[],e=0,n=0;n<this.wordList.length;n++){for(var r=this.wordList[n],c=[],i=r.split(""),o=0;o<i.length;o++){e+=this.speed;var a={word:i[o],time:e};c.push(a)}console.log(i),t.push(c)}return t}},mounted:function(){console.log(this.wordArr)}}),g=h,b=(n("6d84"),Object(l["a"])(g,d,v,!1,null,"649b745d",null)),x=b.exports,m={name:"",components:{TextFloat:x,BgSecond:p}},y=m,w=(n("e9db"),Object(l["a"])(y,r,c,!1,null,"4325da40",null));e["default"]=w.exports},7928:function(t,e,n){"use strict";n("5638")},"844f":function(t,e,n){"use strict";n("8dbc")},"8dbc":function(t,e,n){},a982:function(t,e,n){},aae3:function(t,e,n){var r=n("d3f4"),c=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==c(t))}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},bac7:function(t,e,n){"use strict";n("2447")},be51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-one"},[n("bg"),n("banner"),n("cont-popup")],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg"},[n("cover",{attrs:{opacity:t.coverOpacity}})],1)},o=[],a=n("3020"),u={name:"",data:function(){return{coverOpacity:.8}},components:{Cover:a["a"]}},s=u,l=(n("ce14"),n("2877")),f=Object(l["a"])(s,i,o,!1,null,"9a219af2",null),p=f.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner-wrap"},[n("h3",[t._v("你猜、你猜、你猜猜猜")]),n("div",{staticClass:"banner"})])}],h={name:""},g=h,b=(n("bac7"),Object(l["a"])(g,d,v,!1,null,"2c53033f",null)),x=b.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("el-row",{staticStyle:{"margin-left":"0","margin-right":"0"},attrs:{gutter:20}},[n("el-col",{attrs:{span:16,offset:4}},[n("p",{staticClass:"tip"},[t._v("猜猜我想对你说什么？")])])],1),n("el-row",{staticStyle:{"margin-left":"0","margin-right":"0"},attrs:{gutter:20}},[n("el-col",{attrs:{span:4,offset:9}},[n("el-button",{staticStyle:{"background-color":"#894159",color:"#fff","margin-top":"20px"},on:{click:t.next}},[t._v("下一步")])],1)],1)],1)},y=[],w={name:"",data:function(){return{popArr:["一年有365天","一天有24小时","一小时有60分","一分有60秒","每一秒都在想你"],popIndex:0}},methods:{next:function(){var t=this;function e(){t.$alert(t.popArr[t.popIndex],"温馨提示",{confirmButtonText:"确定"}).then((function(){t.popIndex++,t.popIndex===t.popArr.length?t.$router.push("/second"):e()})).catch((function(){console.log(2)}))}e()}}},_=w,E=(n("844f"),Object(l["a"])(_,m,y,!1,null,null,null)),C=E.exports,O={name:"",components:{Bg:p,Banner:x,ContPopup:C}},$=O,R=(n("3da5"),Object(l["a"])($,r,c,!1,null,"272aaa16",null));e["default"]=R.exports},ce14:function(t,e,n){"use strict";n("a982")},d77a:function(t,e,n){},de06:function(t,e,n){},e9db:function(t,e,n){"use strict";n("de06")},f0ba:function(t,e,n){}}]);
//# sourceMappingURL=about.52f2842b.js.map