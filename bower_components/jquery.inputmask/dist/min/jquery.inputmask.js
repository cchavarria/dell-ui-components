/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.0.55
*/
(function(d){if(void 0===d.fn.inputmask){var T=function(d){var e=document.createElement("input");d="on"+d;var b=d in e;b||(e.setAttribute(d,"return;"),b="function"==typeof e[d]);return b},G=function(c,e,b){return(c=b.aliases[c])?(c.alias&&G(c.alias,void 0,b),d.extend(!0,b,c),d.extend(!0,b,e),!0):!1},J=function(c){function e(b){function d(b,e,c,l){this.matches=[];this.isGroup=b||!1;this.isOptional=e||!1;this.isQuantifier=c||!1;this.isAlternator=l||!1;this.quantifier={min:1,max:1}}function e(b,d,l){var g=
c.definitions[d],L=0==b.matches.length;l=void 0!=l?l:b.matches.length;if(g&&!E){for(var r=g.prevalidator,y=r?r.length:0,w=1;w<g.cardinality;w++){var t=y>=w?r[w-1]:[],v=t.validator,t=t.cardinality;b.matches.splice(l++,0,{fn:v?"string"==typeof v?RegExp(v):new function(){this.test=v}:/./,cardinality:t?t:1,optionality:b.isOptional,newBlockMarker:L,casing:g.casing,def:g.definitionSymbol||d,placeholder:g.placeholder})}b.matches.splice(l++,0,{fn:g.validator?"string"==typeof g.validator?RegExp(g.validator):
new function(){this.test=g.validator}:/./,cardinality:g.cardinality,optionality:b.isOptional,newBlockMarker:L,casing:g.casing,def:g.definitionSymbol||d,placeholder:g.placeholder})}else b.matches.splice(l++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:L,casing:null,def:d,placeholder:void 0}),E=!1}for(var v=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,E=!1,t=new d,r,w=[],C=[];r=v.exec(b);)switch(r=r[0],r.charAt(0)){case c.optionalmarker.end:case c.groupmarker.end:var l=
w.pop();0<w.length?w[w.length-1].matches.push(l):t.matches.push(l);break;case c.optionalmarker.start:w.push(new d(!1,!0));break;case c.groupmarker.start:w.push(new d(!0));break;case c.quantifiermarker.start:l=new d(!1,!1,!0);r=r.replace(/[{}]/g,"");var A=r.split(",");r=isNaN(A[0])?A[0]:parseInt(A[0]);A=1==A.length?r:isNaN(A[1])?A[1]:parseInt(A[1]);if("*"==A||"+"==A)r="*"==A?0:1;l.quantifier={min:r,max:A};if(0<w.length){A=w[w.length-1].matches;r=A.pop();if(!r.isGroup){var p=new d(!0);p.matches.push(r);
r=p}A.push(r);A.push(l)}else r=t.matches.pop(),r.isGroup||(p=new d(!0),p.matches.push(r),r=p),t.matches.push(r),t.matches.push(l);break;case c.escapeChar:E=!0;break;case c.alternatormarker:break;default:0<w.length?e(w[w.length-1],r):(0<t.matches.length&&(l=t.matches[t.matches.length-1],l.isGroup&&(l.isGroup=!1,e(l,c.groupmarker.start,0),e(l,c.groupmarker.end))),e(t,r))}0<t.matches.length&&(l=t.matches[t.matches.length-1],l.isGroup&&(l.isGroup=!1,e(l,c.groupmarker.start,0),e(l,c.groupmarker.end)),
C.push(t));return C}function b(b,y){if(c.numericInput&&!0!==c.multi){b=b.split("").reverse();for(var g=0;g<b.length;g++)b[g]==c.optionalmarker.start?b[g]=c.optionalmarker.end:b[g]==c.optionalmarker.end?b[g]=c.optionalmarker.start:b[g]==c.groupmarker.start?b[g]=c.groupmarker.end:b[g]==c.groupmarker.end&&(b[g]=c.groupmarker.start);b=b.join("")}if(void 0!=b&&""!=b){if(0<c.repeat||"*"==c.repeat||"+"==c.repeat)b=c.groupmarker.start+b+c.groupmarker.end+c.quantifiermarker.start+("*"==c.repeat?0:"+"==c.repeat?
1:c.repeat)+","+c.repeat+c.quantifiermarker.end;void 0==d.inputmask.masksCache[b]&&(d.inputmask.masksCache[b]={mask:b,maskToken:e(b),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:y});return d.extend(!0,{},d.inputmask.masksCache[b])}}var E=[];d.isFunction(c.mask)&&(c.mask=c.mask.call(this,c));d.isArray(c.mask)?d.each(c.mask,function(d,e){void 0!=e.mask?E.push(b(e.mask.toString(),e)):E.push(b(e.toString()))}):(1==c.mask.length&&!1==c.greedy&&0!=c.repeat&&(c.placeholder=""),E=void 0!=
c.mask.mask?b(c.mask.mask.toString(),c.mask):b(c.mask.toString()));return E},ia="function"===typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),p=navigator.userAgent,ja=null!==p.match(/iphone/i),ka=null!==p.match(/android.*safari.*/i),la=null!==p.match(/android.*chrome.*/i),ma=null!==p.match(/android.*firefox.*/i),na=/Kindle/i.test(p)||/Silk/i.test(p)||/KFTT/i.test(p)||/KFOT/i.test(p)||/KFJWA/i.test(p)||/KFJWI/i.test(p)||/KFSOWI/i.test(p)||
/KFTHWA/i.test(p)||/KFTHWI/i.test(p)||/KFAPWA/i.test(p)||/KFAPWI/i.test(p),Y=T("paste")?"paste":T("input")?"input":"propertychange",F=function(c,e,b){function E(a,f,h){f=f||0;var d=[],m,n=0,q;do{if(!0===a&&e.validPositions[n]){var c=e.validPositions[n];q=c.match;m=c.locator.slice();d.push(null==q.fn?q.def:!0===h?c.input:q.placeholder||b.placeholder.charAt(n%b.placeholder.length))}else m=f>n?w(n,m,n-1)[0]:X(n,m,n-1),q=m.match,m=m.locator.slice(),d.push(null==q.fn?q.def:q.placeholder||b.placeholder.charAt(n%
b.placeholder.length));n++}while((void 0==M||n-1<M)&&null!=q.fn||null==q.fn&&""!=q.def||f>=n);d.pop();return d}function p(a){var f=e;f.buffer=void 0;f.tests={};!0!==a&&(f._buffer=void 0,f.validPositions={},f.p=-1)}function y(a){var f=-1,b=e.validPositions;void 0==a&&(a=-1);var d=f,m;for(m in b){var n=parseInt(m);if(-1==a||null!=b[n].match.fn)n<a&&(d=n),n>=a&&(f=n)}return 1<a-d||f<a?d:f}function g(a,f,h){if(b.insertMode&&void 0!=e.validPositions[a]&&void 0==h){h=d.extend(!0,{},e.validPositions);var u=
y(),m;for(m=a;m<=u;m++)delete e.validPositions[m];e.validPositions[a]=f;f=!0;for(m=a;m<=u;m++){a=h[m];if(void 0!=a){var n=null==a.match.fn?m+1:D(m);f=r(n,a.match.def)?f&&!1!==F(n,a.input,!0,!0):!1}if(!f)break}if(!f)return e.validPositions=d.extend(!0,{},h),!1}else e.validPositions[a]=f;return!0}function v(a,f){var b,d=a;for(b=a;b<f;b++)delete e.validPositions[b];for(b=f;b<=y();){var m=e.validPositions[b],n=e.validPositions[d];void 0!=m&&void 0==n?(r(d,m.match.def)&&!1!==F(d,m.input,!0)&&(delete e.validPositions[b],
b++),d++):b++}for(b=y();0<b&&(void 0==e.validPositions[b]||null==e.validPositions[b].match.fn);)delete e.validPositions[b],b--;p(!0)}function X(a,f,h){a=w(a,f,h);var d;for(f=0;f<a.length&&(d=a[f],!b.greedy&&(!d.match||!1!==d.match.optionality&&!1!==d.match.newBlockMarker||!0===d.match.optionalQuantifier));f++);return d}function t(a){return e.validPositions[a]?e.validPositions[a].match:w(a)[0].match}function r(a,b){for(var h=!1,d=w(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def==b){h=!0;break}return h}
function w(a,f,h){function u(f,h,e,c){function m(e,c,k){if(n==a&&void 0==e.matches)return q.push({match:e,locator:c.reverse()}),!0;if(void 0!=e.matches)if(e.isGroup&&!0!==k){if(e=m(f.matches[g+1],c))return!0}else if(e.isOptional){var N=e;if(e=u(e,h,c,k))e=q[q.length-1].match,(e=0==d.inArray(e,N.matches))&&(l=!0),n=a}else{if(!e.isAlternator)if(e.isQuantifier&&!0!==k)for(N=e,b.greedy=b.greedy&&isFinite(N.quantifier.max),k=0<h.length&&!0!==k?h.shift():0;k<(isNaN(N.quantifier.max)?k+1:N.quantifier.max)&&
n<=a;k++){var r=f.matches[d.inArray(N,f.matches)-1];if(e=m(r,[k].concat(c),!0))if(e=q[q.length-1].match,e.optionalQuantifier=k>N.quantifier.min-1,e=0==d.inArray(e,r.matches))if(k>N.quantifier.min-1){l=!0;n=a;break}else return!0;else return!0}else if(e=u(e,h,c,k))return!0}else n++}for(var g=0<h.length?h.shift():0;g<f.matches.length;g++)if(!0!==f.matches[g].isQuantifier){var k=m(f.matches[g],[g].concat(e),c);if(k&&n==a)return k;if(n>a)break}}var c=e.maskToken,n=f?h:0;h=f||[0];var q=[],l=!1;if(void 0==
f){f=a-1;for(var g;void 0==(g=e.validPositions[f])&&-1<f;)f--;if(void 0!=g&&-1<f)n=f,h=g.locator.slice();else{for(f=a-1;void 0==(g=e.tests[f])&&-1<f;)f--;void 0!=g&&-1<f&&(n=f,h=g[0].locator.slice())}}for(f=h.shift();f<c.length&&!(u(c[f],h,[f])&&n==a||n>a);f++);(0==q.length||l)&&q.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]});return e.tests[a]=q}function C(){void 0==e._buffer&&(e._buffer=E(!1,1));return e._buffer}function l(){void 0==e.buffer&&(e.buffer=E(!0,y(),
!0));return e.buffer}function A(a,f){var h=l().slice();if(!0===a)p(),a=0,f=h.length;else for(var d=a;d<f;d++)delete e.validPositions[d],delete e.tests[d];for(d=a;d<f;d++)h[d]!=b.skipOptionalPartCharacter&&F(d,h[d],!0,!0)}function G(a,b){switch(b.casing){case "upper":a=a.toUpperCase();break;case "lower":a=a.toLowerCase()}return a}function F(a,f,h,c){function m(a,f,h,n){var c=!1;d.each(w(a),function(m,q){var u=q.match,k=f?1:0,s="";l();for(var r=u.cardinality;r>k;r--)s+=void 0==e.validPositions[a-(r-
1)]?U(a-(r-1)):e.validPositions[a-(r-1)].input;f&&(s+=f);c=null!=u.fn?u.fn.test(s,e,a,h,b):f!=u.def&&f!=b.skipOptionalPartCharacter||""==u.def?!1:{c:u.def,pos:a};if(!1!==c){k=void 0!=c.c?c.c:f;k=k==b.skipOptionalPartCharacter&&null===u.fn?u.def:k;s=a;void 0!=c.remove&&v(c.remove,c.remove+1);if(c.refreshFromBuffer){s=c.refreshFromBuffer;h=!0;A(!0===s?s:s.start,s.end);if(void 0==c.pos&&void 0==c.c)return c.pos=y(),!1;s=void 0!=c.pos?c.pos:a;if(s!=a)return c=d.extend(c,F(s,k,!0)),!1}else if(!0!==c&&
void 0!=c.pos&&c.pos!=a&&(s=c.pos,A(a,s),s!=a))return c=d.extend(c,F(s,k,!0)),!1;if(!0!=c&&void 0==c.pos&&void 0==c.c)return!1;0<m&&p(!0);g(s,d.extend({},q,{input:G(k,u)}),n)||(c=!1);return!1}});return c}h=!0===h;for(var n=l(),q=a-1;-1<q&&(!e.validPositions[q]||null!=e.validPositions[q].fn);q--)if((!O(q)||n[q]!=U(q))&&1<w(q).length){m(q,n[q],!0);break}if(a>=Q())return!1;n=m(a,f,h,c);if(!h&&!1===n)if((q=e.validPositions[a])&&null==q.match.fn&&(q.match.def==f||f==b.skipOptionalPartCharacter))n={caret:D(a)};
else if((b.insertMode||void 0==e.validPositions[D(a)])&&!O(a))for(var q=a+1,k=D(a);q<=k;q++)if(n=m(q,f,h,c),!1!==n){a=q;break}!0===n&&(n={pos:a});return n}function O(a){a=t(a);return null!=a.fn?a.fn:!1}function Q(){var a;M=k.prop("maxLength");-1==M&&(M=void 0);if(!1==b.greedy){var f;f=y();a=e.validPositions[f];var d=void 0!=a?a.locator.slice():void 0;for(f+=1;void 0==a||null!=a.match.fn||null==a.match.fn&&""!=a.match.def;f++)a=X(f,d,f-1),d=a.locator.slice();a=f}else a=l().length;return void 0==M||
a<M?a:M}function D(a){var f=Q();if(a>=f)return f;for(;++a<f&&!O(a)&&(!0!==b.nojumps||b.nojumpsThreshold>a););return a}function J(a){if(0>=a)return 0;for(;0<--a&&!O(a););return a}function I(a,b,d){a._valueSet(b.join(""));void 0!=d&&x(a,d)}function U(a,f){f=f||t(a);return f.placeholder||(null==f.fn?f.def:b.placeholder.charAt(a%b.placeholder.length))}function R(a,f,h,c,m){c=void 0!=c?c.slice():ha(a._valueGet()).split("");p();f&&a._valueSet("");d.each(c,function(b,f){if(!0===m){var c=e.p,c=-1==c?c:J(c),
u=-1==c?b:D(c);-1==d.inArray(f,C().slice(c+1,u))&&Z.call(a,void 0,!0,f.charCodeAt(0),!1,h,b)}else Z.call(a,void 0,!0,f.charCodeAt(0),!1,h,b),h=h||0<b&&b>e.p});f&&(f=b.onKeyPress.call(this,void 0,l(),0,b),W(a,f),I(a,l(),d(a).is(":focus")?D(y(0)):void 0))}function T(a){return d.inputmask.escapeRegex.call(this,a)}function ha(a){return a.replace(RegExp("("+T(C().join(""))+")*$"),"")}function ca(a){if(a.data("_inputmask")&&!a.hasClass("hasDatepicker")){var f=[],h=e.validPositions,c;for(c in h)h[c].match&&
null!=h[c].match.fn&&f.push(h[c].input);f=(z?f.reverse():f).join("");h=(z?l().reverse():l()).join("");d.isFunction(b.onUnMask)&&(f=b.onUnMask.call(a,h,f,b));return f}return a[0]._valueGet()}function P(a){!z||"number"!=typeof a||b.greedy&&""==b.placeholder||(a=l().length-a);return a}function x(a,f,h){a=a.jquery&&0<a.length?a[0]:a;if("number"==typeof f){f=P(f);h=P(h);h="number"==typeof h?h:f;var c=d(a).data("_inputmask")||{};c.caret={begin:f,end:h};d(a).data("_inputmask",c);d(a).is(":visible")&&(a.scrollLeft=
a.scrollWidth,!1==b.insertMode&&f==h&&h++,a.setSelectionRange?(a.selectionStart=f,a.selectionEnd=h):a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",h),a.moveStart("character",f),a.select()))}else return c=d(a).data("_inputmask"),!d(a).is(":visible")&&c&&void 0!=c.caret?(f=c.caret.begin,h=c.caret.end):a.setSelectionRange?(f=a.selectionStart,h=a.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),f=0-a.duplicate().moveStart("character",
-1E5),h=f+a.text.length),f=P(f),h=P(h),{begin:f,end:h}}function $(a){var b=l(),c=b.length,u,m=y(),n={},q=void 0!=e.validPositions[m]?e.validPositions[m].locator.slice():void 0,g;for(u=m+1;u<b.length;u++)g=X(u,q,u-1),q=g.locator.slice(),n[u]=d.extend(!0,{},g);for(u=c-1;u>m;u--)if(g=n[u].match,(g.optionality||g.optionalQuantifier)&&b[u]==U(u,g))c--;else break;return a?{l:c,def:n[c]?n[c].match:void 0}:c}function aa(a){var b=l().slice(),d=$();b.length=d;I(a,b)}function S(a){if(d.isFunction(b.isComplete))return b.isComplete.call(k,
a,b);if("*"!=b.repeat){var f=!1,c=$(!0),e=J(c.l);if(y()==e&&(void 0==c.def||c.def.newBlockMarker||c.def.optionalQuantifier))for(f=!0,c=0;c<=e;c++){var m=O(c);if(m&&(void 0==a[c]||a[c]==U(c))||!m&&a[c]!=U(c)){f=!1;break}}return f}}function oa(a){a=d._data(a).events;d.each(a,function(a,b){d.each(b,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type){var f=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return f.apply(this,arguments)}}})})}function pa(a){function b(a){if(void 0==
d.valHooks[a]||!0!=d.valHooks[a].inputmaskpatch){var f=d.valHooks[a]&&d.valHooks[a].get?d.valHooks[a].get:function(a){return a.value},c=d.valHooks[a]&&d.valHooks[a].set?d.valHooks[a].set:function(a,b){a.value=b;return a};d.valHooks[a]={get:function(a){var b=d(a);if(b.data("_inputmask")){if(b.data("_inputmask").opts.autoUnmask)return b.inputmask("unmaskedvalue");a=f(a);b=(b=b.data("_inputmask").maskset._buffer)?b.join(""):"";return a!=b?a:""}return f(a)},set:function(a,b){var f=d(a),e=f.data("_inputmask");
e?(e=c(a,d.isFunction(e.opts.onBeforeMask)?e.opts.onBeforeMask.call(B,b,e.opts):b),f.triggerHandler("setvalue.inputmask")):e=c(a,b);return e},inputmaskpatch:!0}}}var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(a,"value"));if(c&&c.get){if(!a._valueGet){var e=c.get,m=c.set;a._valueGet=function(){return z?e.call(this).split("").reverse().join(""):e.call(this)};a._valueSet=function(a){m.call(this,z?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=
d(this),b=d(this).data("_inputmask");return b?b.opts.autoUnmask?a.inputmask("unmaskedvalue"):e.call(this)!=C().join("")?e.call(this):"":e.call(this)},set:function(a){var b=d(this).data("_inputmask");b?(m.call(this,d.isFunction(b.opts.onBeforeMask)?b.opts.onBeforeMask.call(B,a,b.opts):a),d(this).triggerHandler("setvalue.inputmask")):m.call(this,a)}})}}else document.__lookupGetter__&&a.__lookupGetter__("value")?a._valueGet||(e=a.__lookupGetter__("value"),m=a.__lookupSetter__("value"),a._valueGet=function(){return z?
e.call(this).split("").reverse().join(""):e.call(this)},a._valueSet=function(a){m.call(this,z?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=d(this),b=d(this).data("_inputmask");return b?b.opts.autoUnmask?a.inputmask("unmaskedvalue"):e.call(this)!=C().join("")?e.call(this):"":e.call(this)}),a.__defineSetter__("value",function(a){var b=d(this).data("_inputmask");b?(m.call(this,d.isFunction(b.opts.onBeforeMask)?b.opts.onBeforeMask.call(B,a,b.opts):a),d(this).triggerHandler("setvalue.inputmask")):
m.call(this,a)})):(a._valueGet||(a._valueGet=function(){return z?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=z?a.split("").reverse().join(""):a}),b(a.type))}function da(a,f,c){if(b.numericInput||z)f==b.keyCode.BACKSPACE?f=b.keyCode.DELETE:f==b.keyCode.DELETE&&(f=b.keyCode.BACKSPACE),z&&(a=c.end,c.end=c.begin,c.begin=a);f==b.keyCode.BACKSPACE&&1>=c.end-c.begin?c.begin=J(c.begin):f==b.keyCode.DELETE&&c.begin==c.end&&c.end++;v(c.begin,c.end);f=y(c.begin);e.p=
f<c.begin?D(f):c.begin}function W(a,b,c){if(b&&b.refreshFromBuffer){var d=b.refreshFromBuffer;A(!0===d?d:d.start,d.end);p(!0);void 0!=c&&(I(a,l()),x(a,b.caret||c.begin,b.caret||c.end))}}function ea(a){ba=!1;var c=this,h=d(c),g=a.keyCode,m=x(c);g==b.keyCode.BACKSPACE||g==b.keyCode.DELETE||ja&&127==g||a.ctrlKey&&88==g?(a.preventDefault(),88==g&&(K=l().join("")),da(c,g,m),I(c,l(),e.p),c._valueGet()==C().join("")&&h.trigger("cleared"),b.showTooltip&&h.prop("title",e.mask)):g==b.keyCode.END||g==b.keyCode.PAGE_DOWN?
setTimeout(function(){var d=D(y());b.insertMode||d!=Q()||a.shiftKey||d--;x(c,a.shiftKey?m.begin:d,d)},0):g==b.keyCode.HOME&&!a.shiftKey||g==b.keyCode.PAGE_UP?x(c,0,a.shiftKey?m.begin:0):g==b.keyCode.ESCAPE||90==g&&a.ctrlKey?(R(c,!0,!1,K.split("")),h.click()):g!=b.keyCode.INSERT||a.shiftKey||a.ctrlKey?!1!=b.insertMode||a.shiftKey||(g==b.keyCode.RIGHT?setTimeout(function(){var a=x(c);x(c,a.begin)},0):g==b.keyCode.LEFT&&setTimeout(function(){var a=x(c);x(c,z?a.begin+1:a.begin-1)},0)):(b.insertMode=!b.insertMode,
x(c,b.insertMode||m.begin!=Q()?m.begin:m.begin-1));var h=x(c),n=b.onKeyDown.call(this,a,l(),h.begin,b);W(c,n,h);fa=-1!=d.inArray(g,b.ignorables)}function Z(a,c,h,k,m,n){if(void 0==h&&ba)return!1;ba=!0;var q=d(this);a=a||window.event;h=c?h:a.which||a.charCode||a.keyCode;if(!(!0===c||a.ctrlKey&&a.altKey)&&(a.ctrlKey||a.metaKey||fa))return!0;if(h){!0!==c&&46==h&&!1==a.shiftKey&&","==b.radixPoint&&(h=44);var s,r;h=String.fromCharCode(h);c?(n=m?n:y()+1,s={begin:n,end:n}):s=x(this);if(n=z?1<s.begin-s.end||
1==s.begin-s.end&&b.insertMode:1<s.end-s.begin||1==s.end-s.begin&&b.insertMode)e.undoPositions=d.extend(!0,{},e.validPositions),da(this,b.keyCode.DELETE,s),b.insertMode||(b.insertMode=!b.insertMode,g(s.begin,m),b.insertMode=!b.insertMode),n=!b.multi;e.writeOutBuffer=!0;s=z&&!n?s.end:s.begin;var t=F(s,h,m);!1!==t&&(!0!==t&&(s=void 0!=t.pos?t.pos:s,h=void 0!=t.c?t.c:h),p(!0),void 0!=t.caret?r=t.caret:(m=e.validPositions,r=void 0!=m[s+1]&&1<w(s+1,m[s].locator.slice(),s).length?s+1:D(s)),e.p=r);if(!1!==
k){var v=this;setTimeout(function(){b.onKeyValidation.call(v,t,b)},0);if(e.writeOutBuffer&&!1!==t){var E=l();I(this,E,c?void 0:b.numericInput?J(r):r);!0!==c&&setTimeout(function(){!0===S(E)&&q.trigger("complete");V=!0;q.trigger("input")},0)}else n&&(e.buffer=void 0,e.validPositions=e.undoPositions)}else n&&(e.buffer=void 0,e.validPositions=e.undoPositions);b.showTooltip&&q.prop("title",e.mask);a&&!0!=c&&(a.preventDefault?a.preventDefault():a.returnValue=!1,c=x(this),a=b.onKeyPress.call(this,a,l(),
c.begin,b),W(this,a,c));for(var A in e.validPositions);}}function qa(a){var c=d(this),e=a.keyCode,g=l(),m=x(this);a=b.onKeyUp.call(this,a,g,m.begin,b);W(this,a,m);e==b.keyCode.TAB&&b.showMaskOnFocus&&(c.hasClass("focus-inputmask")&&0==this._valueGet().length?(p(),g=l(),I(this,g),x(this,0),K=l().join("")):(I(this,g),x(this,P(0),P(Q()))))}function ga(a){if(!0===V&&"input"==a.type)return V=!1,!0;var c=d(this),e=this._valueGet();if("propertychange"==a.type&&this._valueGet().length<=Q())return!0;"paste"==
a.type&&(window.clipboardData&&window.clipboardData.getData?e=window.clipboardData.getData("Text"):a.originalEvent&&a.originalEvent.clipboardData&&a.originalEvent.clipboardData.getData&&(e=a.originalEvent.clipboardData.getData("text/plain")));a=d.isFunction(b.onBeforePaste)?b.onBeforePaste.call(this,e,b):e;R(this,!0,!1,a.split(""),!0);c.click();!0===S(l())&&c.trigger("complete");return!1}function ra(a){if(!0===V&&"input"==a.type)return V=!1,!0;var c=x(this),d=this._valueGet(),d=d.replace(RegExp("("+
T(C().join(""))+")*"),"");c.begin>d.length&&(x(this,d.length),c=x(this));1!=l().length-d.length||d.charAt(c.begin)==l()[c.begin]||d.charAt(c.begin+1)==l()[c.begin]||O(c.begin)||(a.keyCode=b.keyCode.BACKSPACE,ea.call(this,a));a.preventDefault()}function sa(a){k=d(a);if(k.is(":input")&&"number"!=k.attr("type")){k.data("_inputmask",{maskset:e,opts:b,isRTL:!1});b.showTooltip&&k.prop("title",e.mask);pa(a);("rtl"==a.dir||b.rightAlign)&&k.css("text-align","right");if("rtl"==a.dir||b.numericInput){a.dir=
"ltr";k.removeAttr("dir");var c=k.data("_inputmask");c.isRTL=!0;k.data("_inputmask",c);z=!0}k.unbind(".inputmask");k.removeClass("focus-inputmask");k.closest("form").bind("submit",function(){K!=l().join("")&&k.change();b.autoUnmask&&b.removeMaskOnSubmit&&k.inputmask("remove")}).bind("reset",function(){setTimeout(function(){k.trigger("setvalue")},0)});k.bind("mouseenter.inputmask",function(){!d(this).hasClass("focus-inputmask")&&b.showMaskOnHover&&this._valueGet()!=l().join("")&&I(this,l())}).bind("blur.inputmask",
function(){var a=d(this);if(a.data("_inputmask")){var c=this._valueGet(),e=l();a.removeClass("focus-inputmask");K!=l().join("")&&a.change();b.clearMaskOnLostFocus&&""!=c&&(c==C().join("")?this._valueSet(""):aa(this));!1===S(e)&&(a.trigger("incomplete"),b.clearIncomplete&&(p(),b.clearMaskOnLostFocus?this._valueSet(""):(e=C().slice(),I(this,e))))}}).bind("focus.inputmask",function(){var a=d(this),c=this._valueGet();b.showMaskOnFocus&&!a.hasClass("focus-inputmask")&&(!b.showMaskOnHover||b.showMaskOnHover&&
""==c)&&this._valueGet()!=l().join("")&&I(this,l(),D(y()));a.addClass("focus-inputmask");K=l().join("")}).bind("mouseleave.inputmask",function(){var a=d(this);b.clearMaskOnLostFocus&&(a.hasClass("focus-inputmask")||this._valueGet()==a.attr("placeholder")||(this._valueGet()==C().join("")||""==this._valueGet()?this._valueSet(""):aa(this)))}).bind("click.inputmask",function(){var a=this;d(a).is(":focus")&&setTimeout(function(){var b=x(a);if(b.begin==b.end){var b=z?P(b.begin):b.begin,c=y(b),c=D(c);b<
c?O(b)?x(a,b):x(a,D(b)):x(a,c)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){x(a,0,D(y()))},0)}).bind(Y+".inputmask dragdrop.inputmask drop.inputmask",ga).bind("setvalue.inputmask",function(){R(this,!0);K=l().join("");this._valueGet()==C().join("")&&this._valueSet("")}).bind("complete.inputmask",b.oncomplete).bind("incomplete.inputmask",b.onincomplete).bind("cleared.inputmask",b.oncleared);k.bind("keydown.inputmask",ea).bind("keypress.inputmask",Z).bind("keyup.inputmask",
qa);if(ka||ma||la||na)"input"==Y&&k.unbind(Y+".inputmask"),k.bind("input.inputmask",ra);ia&&k.bind("input.inputmask",ga);c=d.isFunction(b.onBeforeMask)?b.onBeforeMask.call(a,a._valueGet(),b):a._valueGet();R(a,!0,!1,c.split(""),!0);K=l().join("");var g;try{g=document.activeElement}catch(r){}g===a?(k.addClass("focus-inputmask"),x(a,D(y()))):(!1===S(l())&&b.clearIncomplete&&p(),b.clearMaskOnLostFocus?l().join("")==C().join("")?a._valueSet(""):aa(a):I(a,l()));oa(a)}}var z=!1,K,k,ba=!1,V=!1,fa=!1,M;if(void 0!=
c)switch(c.action){case "isComplete":return k=d(c.el),e=k.data("_inputmask").maskset,b=k.data("_inputmask").opts,S(c.buffer);case "unmaskedvalue":return k=c.$input,e=k.data("_inputmask").maskset,b=k.data("_inputmask").opts,z=c.$input.data("_inputmask").isRTL,ca(c.$input);case "mask":K=l().join("");sa(c.el);break;case "format":k=d({});k.data("_inputmask",{maskset:e,opts:b,isRTL:b.numericInput});b.numericInput&&(z=!0);var H=c.value.split("");R(k,!1,!1,z?H.reverse():H,!0);return z?l().reverse().join(""):
l().join("");case "isValid":k=d({});k.data("_inputmask",{maskset:e,opts:b,isRTL:b.numericInput});b.numericInput&&(z=!0);H=c.value.split("");R(k,!1,!0,z?H.reverse():H);var H=l(),ta=$();H.length=ta;return S(H)&&c.value==H.join("");case "getemptymask":return k=d(c.el),e=k.data("_inputmask").maskset,b=k.data("_inputmask").opts,C();case "remove":var B=c.el;k=d(B);e=k.data("_inputmask").maskset;b=k.data("_inputmask").opts;B._valueSet(ca(k));k.unbind(".inputmask");k.removeClass("focus-inputmask");k.removeData("_inputmask");
Object.getOwnPropertyDescriptor&&(H=Object.getOwnPropertyDescriptor(B,"value"));H&&H.get?B._valueGet&&Object.defineProperty(B,"value",{get:B._valueGet,set:B._valueSet}):document.__lookupGetter__&&B.__lookupGetter__("value")&&B._valueGet&&(B.__defineGetter__("value",B._valueGet),B.__defineSetter__("value",B._valueSet));try{delete B._valueGet,delete B._valueSet}catch(ua){B._valueGet=void 0,B._valueSet=void 0}}};d.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",
end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:d.noop,onincomplete:d.noop,oncleared:d.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!0,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyUp:d.noop,onKeyPress:d.noop,onKeyDown:d.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:d.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,
rightAlign:!1,radixPoint:"",nojumps:!1,nojumpsThreshold:0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,
NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0},masksCache:{},escapeRegex:function(c){return c.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},format:function(c,e){var b=d.extend(!0,{},d.inputmask.defaults,e);G(b.alias,e,b);
return F({action:"format",value:c},J(b),b)},isValid:function(c,e){var b=d.extend(!0,{},d.inputmask.defaults,e);G(b.alias,e,b);return F({action:"isValid",value:c},J(b),b)}};d.fn.inputmask=function(c,e,b,p,L){function y(b,c){var e=d(b),g;for(g in c){var p=e.data("inputmask-"+g.toLowerCase());void 0!=p&&(c[g]=p)}return c}b=b||F;p=p||"_inputmask";var g=d.extend(!0,{},d.inputmask.defaults,e),v;if("string"===typeof c)switch(c){case "mask":return G(g.alias,e,g),v=J(g),0==v.length?this:this.each(function(){b({action:"mask",
el:this},d.extend(!0,{},d.isArray(v)&&b===F?v[0]:v),y(this,g))});case "unmaskedvalue":return c=d(this),c.data(p)?b({action:"unmaskedvalue",$input:c}):c.val();case "remove":return this.each(function(){d(this).data(p)&&b({action:"remove",el:this})});case "getemptymask":return this.data(p)?b({action:"getemptymask",el:this}):"";case "hasMaskedValue":return this.data(p)?!this.data(p).opts.autoUnmask:!1;case "isComplete":return this.data(p)?b({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this}):
!0;case "getmetadata":if(this.data(p))return v=this.data(p).maskset,v.metadata;break;case "_detectScope":return G(g.alias,e,g),void 0==L||G(L,e,g)||-1!=d.inArray(L,"mask unmaskedvalue remove getemptymask hasMaskedValue isComplete getmetadata _detectScope".split(" "))||(g.mask=L),d.isFunction(g.mask)&&(g.mask=g.mask.call(this,g)),d.isArray(g.mask);default:return G(g.alias,e,g),G(c,e,g)||(g.mask=c),v=J(g),void 0==v?this:this.each(function(){b({action:"mask",el:this},d.extend(!0,{},d.isArray(v)&&b===
F?v[0]:v),y(this,g))})}else{if("object"==typeof c)return g=d.extend(!0,{},d.inputmask.defaults,c),G(g.alias,c,g),v=J(g),void 0==v?this:this.each(function(){b({action:"mask",el:this},d.extend(!0,{},d.isArray(v)&&b===F?v[0]:v),y(this,g))});if(void 0==c)return this.each(function(){var c=d(this).attr("data-inputmask");if(c&&""!=c)try{var c=c.replace(RegExp("'","g"),'"'),p=d.parseJSON("{"+c+"}");d.extend(!0,p,e);g=d.extend(!0,{},d.inputmask.defaults,p);G(g.alias,p,g);g.alias=void 0;d(this).inputmask("mask",
g,b)}catch(r){}})}}}})(jQuery);