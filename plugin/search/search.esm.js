var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c=function(t){return"object"==typeof t?null!==t:"function"==typeof t},a=r.document,u=c(a)&&c(a.createElement),l=!i&&!o((function(){return 7!=Object.defineProperty((t="div",u?a.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),f=function(t){if(!c(t))throw TypeError(String(t)+" is not an object");return t},s=function(t,e){if(!c(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!c(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!c(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!c(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},p=Object.defineProperty,g={f:i?p:function(t,e,n){if(f(t),e=s(e,!0),f(n),l)try{return p(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},d=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},h=i?function(t,e,n){return g.f(t,e,d(1,n))}:function(t,e,n){return t[e]=n,t},y={}.hasOwnProperty,v=function(t,e){return y.call(t,e)},b=function(t,e){try{h(r,t,e)}catch(n){r[t]=e}return e},x=r["__core-js_shared__"]||b("__core-js_shared__",{}),E=Function.toString;"function"!=typeof x.inspectSource&&(x.inspectSource=function(t){return E.call(t)});var S,m,w,O,R=x.inspectSource,_=r.WeakMap,T="function"==typeof _&&/native code/.test(R(_)),j=e((function(t){(t.exports=function(t,e){return x[t]||(x[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),P=0,I=Math.random(),C=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++P+I).toString(36)},N=j("keys"),A={},k=r.WeakMap;if(T){var D=new k,$=D.get,L=D.has,M=D.set;S=function(t,e){return M.call(D,t,e),e},m=function(t){return $.call(D,t)||{}},w=function(t){return L.call(D,t)}}else{var U=N[O="state"]||(N[O]=C(O));A[U]=!0,S=function(t,e){return h(t,U,e),e},m=function(t){return v(t,U)?t[U]:{}},w=function(t){return v(t,U)}}var F={set:S,get:m,has:w,enforce:function(t){return w(t)?m(t):S(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=m(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},K=e((function(t){var e=F.get,n=F.enforce,o=String(String).split("String");(t.exports=function(t,e,i,c){var a=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,l=!!c&&!!c.noTargetGet;"function"==typeof i&&("string"!=typeof e||v(i,"name")||h(i,"name",e),n(i).source=o.join("string"==typeof e?e:"")),t!==r?(a?!l&&t[e]&&(u=!0):delete t[e],u?t[e]=i:h(t,e,i)):u?t[e]=i:b(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||R(this)}))})),z=Date.prototype,B=z.toString,W=z.getTime;new Date(NaN)+""!="Invalid Date"&&K(z,"toString",(function(){var t=W.call(this);return t==t?B.call(this):"Invalid Date"}));var q=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),G=q&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,V=j("wks"),Y=r.Symbol,X=G?Y:Y&&Y.withoutSetter||C,H=function(t){return v(V,t)||(q&&v(Y,t)?V[t]=Y[t]:V[t]=X("Symbol."+t)),V[t]},J={};J[H("toStringTag")]="z";var Q="[object z]"===String(J),Z={}.toString,tt=function(t){return Z.call(t).slice(8,-1)},et=H("toStringTag"),nt="Arguments"==tt(function(){return arguments}()),rt=Q?tt:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),et))?n:nt?tt(e):"Object"==(r=tt(e))&&"function"==typeof e.callee?"Arguments":r},ot=Q?{}.toString:function(){return"[object "+rt(this)+"]"};Q||K(Object.prototype,"toString",ot,{unsafe:!0});var it=/#|\.prototype\./,ct=function(t,e){var n=ut[at(t)];return n==ft||n!=lt&&("function"==typeof e?o(e):!!e)},at=ct.normalize=function(t){return String(t).replace(it,".").toLowerCase()},ut=ct.data={},lt=ct.NATIVE="N",ft=ct.POLYFILL="P",st=ct,pt=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return f(n),function(t){if(!c(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),gt="".split,dt=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==tt(t)?gt.call(t,""):Object(t)}:Object,ht=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},yt=function(t){return dt(ht(t))},vt=Math.ceil,bt=Math.floor,xt=function(t){return isNaN(t=+t)?0:(t>0?bt:vt)(t)},Et=Math.min,St=function(t){return t>0?Et(xt(t),9007199254740991):0},mt=Math.max,wt=Math.min,Ot=function(t){return function(e,n,r){var o,i=yt(e),c=St(i.length),a=function(t,e){var n=xt(t);return n<0?mt(n+e,0):wt(n,e)}(r,c);if(t&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((t||a in i)&&i[a]===n)return t||a||0;return!t&&-1}},Rt={includes:Ot(!0),indexOf:Ot(!1)}.indexOf,_t=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),Tt={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=yt(t),o=0,i=[];for(n in r)!v(A,n)&&v(r,n)&&i.push(n);for(;e.length>o;)v(r,n=e[o++])&&(~Rt(i,n)||i.push(n));return i}(t,_t)}},jt=H("match"),Pt=function(){var t=f(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function It(t,e){return RegExp(t,e)}var Ct={UNSUPPORTED_Y:o((function(){var t=It("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:o((function(){var t=It("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},Nt=r,At=function(t){return"function"==typeof t?t:void 0},kt=function(t,e){return arguments.length<2?At(Nt[t])||At(r[t]):Nt[t]&&Nt[t][e]||r[t]&&r[t][e]},Dt=H("species"),$t=g.f,Lt=Tt.f,Mt=F.set,Ut=H("match"),Ft=r.RegExp,Kt=Ft.prototype,zt=/a/g,Bt=/a/g,Wt=new Ft(zt)!==zt,qt=Ct.UNSUPPORTED_Y;if(i&&st("RegExp",!Wt||qt||o((function(){return Bt[Ut]=!1,Ft(zt)!=zt||Ft(Bt)==Bt||"/a/i"!=Ft(zt,"i")})))){for(var Gt=function(t,e){var n,r,o,i=this instanceof Gt,a=c(n=t)&&(void 0!==(r=n[jt])?!!r:"RegExp"==tt(n)),u=void 0===e;if(!i&&a&&t.constructor===Gt&&u)return t;Wt?a&&!u&&(t=t.source):t instanceof Gt&&(u&&(e=Pt.call(t)),t=t.source),qt&&(o=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var l,f,s,p,g,d=(l=Wt?new Ft(t,e):Ft(t,e),f=i?this:Kt,s=Gt,pt&&"function"==typeof(p=f.constructor)&&p!==s&&c(g=p.prototype)&&g!==s.prototype&&pt(l,g),l);return qt&&o&&Mt(d,{sticky:o}),d},Vt=function(t){t in Gt||$t(Gt,t,{configurable:!0,get:function(){return Ft[t]},set:function(e){Ft[t]=e}})},Yt=Lt(Ft),Xt=0;Yt.length>Xt;)Vt(Yt[Xt++]);Kt.constructor=Gt,Gt.prototype=Kt,K(r,"RegExp",Gt)}!function(t){var e=kt(t),n=g.f;i&&e&&!e[Dt]&&n(e,Dt,{configurable:!0,get:function(){return this}})}("RegExp");var Ht={}.propertyIsEnumerable,Jt=Object.getOwnPropertyDescriptor,Qt={f:Jt&&!Ht.call({1:2},1)?function(t){var e=Jt(this,t);return!!e&&e.enumerable}:Ht},Zt=Object.getOwnPropertyDescriptor,te={f:i?Zt:function(t,e){if(t=yt(t),e=s(e,!0),l)try{return Zt(t,e)}catch(t){}if(v(t,e))return d(!Qt.f.call(t,e),t[e])}},ee={f:Object.getOwnPropertySymbols},ne=kt("Reflect","ownKeys")||function(t){var e=Tt.f(f(t)),n=ee.f;return n?e.concat(n(t)):e},re=function(t,e){for(var n=ne(e),r=g.f,o=te.f,i=0;i<n.length;i++){var c=n[i];v(t,c)||r(t,c,o(e,c))}},oe=te.f,ie=RegExp.prototype.exec,ce=String.prototype.replace,ae=ie,ue=function(){var t=/a/,e=/b*/g;return ie.call(t,"a"),ie.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),le=Ct.UNSUPPORTED_Y||Ct.BROKEN_CARET,fe=void 0!==/()??/.exec("")[1];(ue||fe||le)&&(ae=function(t){var e,n,r,o,i=this,c=le&&i.sticky,a=Pt.call(i),u=i.source,l=0,f=t;return c&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),f=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(u="(?: "+u+")",f=" "+f,l++),n=new RegExp("^(?:"+u+")",a)),fe&&(n=new RegExp("^"+u+"$(?!\\s)",a)),ue&&(e=i.lastIndex),r=ie.call(c?n:i,f),c?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:ue&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),fe&&r&&r.length>1&&ce.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r});var se=ae;!function(t,e){var n,o,i,c,a,u=t.target,l=t.global,f=t.stat;if(n=l?r:f?r[u]||b(u,{}):(r[u]||{}).prototype)for(o in e){if(c=e[o],i=t.noTargetGet?(a=oe(n,o))&&a.value:n[o],!st(l?o:u+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof c==typeof i)continue;re(c,i)}(t.sham||i&&i.sham)&&h(c,"sham",!0),K(n,o,c,t)}}({target:"RegExp",proto:!0,forced:/./.exec!==se},{exec:se});var pe=RegExp.prototype,ge=pe.toString,de=o((function(){return"/a/b"!=ge.call({source:"a",flags:"b"})})),he="toString"!=ge.name;(de||he)&&K(RegExp.prototype,"toString",(function(){var t=f(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in pe)?Pt.call(t):n)}),{unsafe:!0});var ye=H("species"),ve=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),be="$0"==="a".replace(/./,"$0"),xe=H("replace"),Ee=!!/./[xe]&&""===/./[xe]("a","$0"),Se=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),me=function(t){return function(e,n){var r,o,i=String(ht(e)),c=xt(n),a=i.length;return c<0||c>=a?t?"":void 0:(r=i.charCodeAt(c))<55296||r>56319||c+1===a||(o=i.charCodeAt(c+1))<56320||o>57343?t?i.charAt(c):r:t?i.slice(c,c+2):o-56320+(r-55296<<10)+65536}},we={codeAt:me(!1),charAt:me(!0)}.charAt,Oe=function(t,e,n){return e+(n?we(t,e).length:1)},Re=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==tt(t))throw TypeError("RegExp#exec called on incompatible receiver");return se.call(t,e)},_e=Math.max,Te=Math.min,je=Math.floor,Pe=/\$([$&'`]|\d\d?|<[^>]*>)/g,Ie=/\$([$&'`]|\d\d?)/g;!function(t,e,n,r){var i=H(t),c=!o((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),a=c&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[ye]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return e=!0,null},n[i](""),!e}));if(!c||!a||"replace"===t&&(!ve||!be||Ee)||"split"===t&&!Se){var u=/./[i],l=n(i,""[t],(function(t,e,n,r,o){return e.exec===se?c&&!o?{done:!0,value:u.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:be,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Ee}),f=l[0],s=l[1];K(String.prototype,t,f),K(RegExp.prototype,i,2==e?function(t,e){return s.call(t,this,e)}:function(t){return s.call(t,this)})}r&&h(RegExp.prototype[i],"sham",!0)}("replace",2,(function(t,e,n,r){var o=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=r.REPLACE_KEEPS_$0,c=o?"$":"$0";return[function(n,r){var o=ht(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!o&&i||"string"==typeof r&&-1===r.indexOf(c)){var u=n(e,t,this,r);if(u.done)return u.value}var l=f(t),s=String(this),p="function"==typeof r;p||(r=String(r));var g=l.global;if(g){var d=l.unicode;l.lastIndex=0}for(var h=[];;){var y=Re(l,s);if(null===y)break;if(h.push(y),!g)break;""===String(y[0])&&(l.lastIndex=Oe(s,St(l.lastIndex),d))}for(var v,b="",x=0,E=0;E<h.length;E++){y=h[E];for(var S=String(y[0]),m=_e(Te(xt(y.index),s.length),0),w=[],O=1;O<y.length;O++)w.push(void 0===(v=y[O])?v:String(v));var R=y.groups;if(p){var _=[S].concat(w,m,s);void 0!==R&&_.push(R);var T=String(r.apply(void 0,_))}else T=a(S,s,m,w,R,r);m>=x&&(b+=s.slice(x,m)+T,x=m+S.length)}return b+s.slice(x)}];function a(t,n,r,o,i,c){var a=r+t.length,u=o.length,l=Ie;return void 0!==i&&(i=Object(ht(i)),l=Pe),e.call(c,l,(function(e,c){var l;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(a);case"<":l=i[c.slice(1,-1)];break;default:var f=+c;if(0===f)return e;if(f>u){var s=je(f/10);return 0===s?e:s<=u?void 0===o[s-1]?c.charAt(1):o[s-1]+c.charAt(1):e}l=o[f-1]}return void 0===l?"":l}))}}));export default function(){var t,e,n,r,o,i,c;function a(){(e=document.createElement("div")).classList.add("searchbox"),e.style.position="absolute",e.style.top="10px",e.style.right="10px",e.style.zIndex=10,e.innerHTML='<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n\t\t</span>',(n=e.querySelector(".searchinput")).style.width="240px",n.style.fontSize="14px",n.style.padding="4px 6px",n.style.color="#000",n.style.background="#fff",n.style.borderRadius="2px",n.style.border="0",n.style.outline="0",n.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",n.style["-webkit-appearance"]="none",t.getRevealElement().appendChild(e),n.addEventListener("keyup",(function(e){switch(e.keyCode){case 13:e.preventDefault(),function(){if(i){var e=n.value;""===e?(c&&c.remove(),r=null):(c=new f("slidecontent"),r=c.apply(e),o=0)}r&&(r.length&&r.length<=o&&(o=0),r.length>o&&(t.slide(r[o].h,r[o].v),o++))}(),i=!1;break;default:i=!0}}),!1),l()}function u(){e||a(),e.style.display="inline",n.focus(),n.select()}function l(){e||a(),e.style.display="none",c&&c.remove()}function f(e,n){var r=document.getElementById(e)||document.body,o=n||"EM",i=new RegExp("^(?:"+o+"|SCRIPT|FORM)$"),c=["#ff6","#a0ffff","#9f9","#f99","#f6f"],a=[],u=0,l="",f=[];this.setRegex=function(t){t=t.replace(/^[^\w]+|[^\w]+$/g,"").replace(/[^\w'-]+/g,"|"),l=new RegExp("("+t+")","i")},this.getRegex=function(){return l.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(e){if(null!=e&&e&&l&&!i.test(e.nodeName)){if(e.hasChildNodes())for(var n=0;n<e.childNodes.length;n++)this.hiliteWords(e.childNodes[n]);var r,s;if(3==e.nodeType)if((r=e.nodeValue)&&(s=l.exec(r))){for(var p=e;null!=p&&"SECTION"!=p.nodeName;)p=p.parentNode;var g=t.getIndices(p),d=f.length,h=!1;for(n=0;n<d;n++)f[n].h===g.h&&f[n].v===g.v&&(h=!0);h||f.push(g),a[s[0].toLowerCase()]||(a[s[0].toLowerCase()]=c[u++%c.length]);var y=document.createElement(o);y.appendChild(document.createTextNode(s[0])),y.style.backgroundColor=a[s[0].toLowerCase()],y.style.fontStyle="inherit",y.style.color="#000";var v=e.splitText(s.index);v.nodeValue=v.nodeValue.substring(s[0].length),e.parentNode.insertBefore(y,v)}}},this.remove=function(){for(var t,e=document.getElementsByTagName(o);e.length&&(t=e[0]);)t.parentNode.replaceChild(t.firstChild,t)},this.apply=function(t){if(null!=t&&t)return this.remove(),this.setRegex(t),this.hiliteWords(r),f}}return{id:"search",init:function(n){(t=n).registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",(function(t){"F"==t.key&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),e||a(),"inline"!==e.style.display?u():l())}),!1)},open:u}}
