!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).RevealZoom=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var n=function(t){return t&&t.Math==Math&&t},o=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),r=function(t){try{return!!t()}catch(t){return!0}},i=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,f={f:c&&!u.call({1:2},1)?function(t){var e=c(this,t);return!!e&&e.enumerable}:u},s=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},a={}.toString,l="".split,d=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==function(t){return a.call(t).slice(8,-1)}(t)?l.call(t,""):Object(t)}:Object,y=function(t){return d(function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}(t))},m=function(t){return"object"==typeof t?null!==t:"function"==typeof t},p=function(t,e){if(!m(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!m(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!m(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!m(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")},h={}.hasOwnProperty,g=function(t,e){return h.call(t,e)},b=o.document,w=m(b)&&m(b.createElement),v=!i&&!r((function(){return 7!=Object.defineProperty((t="div",w?b.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),T=Object.getOwnPropertyDescriptor,O={f:i?T:function(t,e){if(t=y(t),e=p(e,!0),v)try{return T(t,e)}catch(t){}if(g(t,e))return s(!f.f.call(t,e),t[e])}},x=function(t){if(!m(t))throw TypeError(String(t)+" is not an object");return t},j=Object.defineProperty,S={f:i?j:function(t,e,n){if(x(t),e=p(e,!0),x(n),v)try{return j(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},E=i?function(t,e,n){return S.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t},z=function(t,e){try{E(o,t,e)}catch(n){o[t]=e}return e},M=o["__core-js_shared__"]||z("__core-js_shared__",{}),L=Function.toString;"function"!=typeof M.inspectSource&&(M.inspectSource=function(t){return L.call(t)});var k,P,W,I,_=M.inspectSource,C=o.WeakMap,F="function"==typeof C&&/native code/.test(_(C)),Y=e((function(t){(t.exports=function(t,e){return M[t]||(M[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),D=0,H=Math.random(),N=Y("keys"),X={},K=o.WeakMap;if(F){var R=new K,q=R.get,A=R.has,G=R.set;k=function(t,e){return G.call(R,t,e),e},P=function(t){return q.call(R,t)||{}},W=function(t){return A.call(R,t)}}else{var B=N[I="state"]||(N[I]=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++D+H).toString(36)}(I));X[B]=!0,k=function(t,e){return E(t,B,e),e},P=function(t){return g(t,B)?t[B]:{}},W=function(t){return g(t,B)}}var V={set:k,get:P,has:W,enforce:function(t){return W(t)?P(t):k(t,{})},getterFor:function(t){return function(e){var n;if(!m(e)||(n=P(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Z=e((function(t){var e=V.get,n=V.enforce,r=String(String).split("String");(t.exports=function(t,e,i,u){var c=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,s=!!u&&!!u.noTargetGet;"function"==typeof i&&("string"!=typeof e||g(i,"name")||E(i,"name",e),n(i).source=r.join("string"==typeof e?e:"")),t!==o?(c?!s&&t[e]&&(f=!0):delete t[e],f?t[e]=i:E(t,e,i)):f?t[e]=i:z(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||_(this)}))})),J=o,Q=function(t){return"function"==typeof t?t:void 0},U=function(t,e){return arguments.length<2?Q(J[t])||Q(o[t]):J[t]&&J[t][e]||o[t]&&o[t][e]},$=Math.ceil,tt=Math.floor,et=function(t){return isNaN(t=+t)?0:(t>0?tt:$)(t)},nt=Math.min,ot=Math.max,rt=Math.min,it=function(t){return function(e,n,o){var r,i,u=y(e),c=(r=u.length)>0?nt(et(r),9007199254740991):0,f=function(t,e){var n=et(t);return n<0?ot(n+e,0):rt(n,e)}(o,c);if(t&&n!=n){for(;c>f;)if((i=u[f++])!=i)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}},ut={includes:it(!0),indexOf:it(!1)}.indexOf,ct=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),ft={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,o=y(t),r=0,i=[];for(n in o)!g(X,n)&&g(o,n)&&i.push(n);for(;e.length>r;)g(o,n=e[r++])&&(~ut(i,n)||i.push(n));return i}(t,ct)}},st={f:Object.getOwnPropertySymbols},at=U("Reflect","ownKeys")||function(t){var e=ft.f(x(t)),n=st.f;return n?e.concat(n(t)):e},lt=function(t,e){for(var n=at(e),o=S.f,r=O.f,i=0;i<n.length;i++){var u=n[i];g(t,u)||o(t,u,r(e,u))}},dt=/#|\.prototype\./,yt=function(t,e){var n=pt[mt(t)];return n==gt||n!=ht&&("function"==typeof e?r(e):!!e)},mt=yt.normalize=function(t){return String(t).replace(dt,".").toLowerCase()},pt=yt.data={},ht=yt.NATIVE="N",gt=yt.POLYFILL="P",bt=yt,wt=O.f,vt=U("navigator","userAgent")||"",Tt=[].slice,Ot=function(t){return function(e,n){var o=arguments.length>2,r=o?Tt.call(arguments,2):void 0;return t(o?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,n)}};!function(t,e){var n,r,i,u,c,f=t.target,s=t.global,a=t.stat;if(n=s?o:a?o[f]||z(f,{}):(o[f]||{}).prototype)for(r in e){if(u=e[r],i=t.noTargetGet?(c=wt(n,r))&&c.value:n[r],!bt(s?r:f+(a?".":"#")+r,t.forced)&&void 0!==i){if(typeof u==typeof i)continue;lt(u,i)}(t.sham||i&&i.sham)&&E(u,"sham",!0),Z(n,r,u,t)}}({global:!0,bind:!0,forced:/MSIE .\./.test(vt)},{setTimeout:Ot(o.setTimeout),setInterval:Ot(o.setInterval)});
/*!
	 * reveal.js Zoom plugin
	 */
var xt={id:"zoom",init:function(t){t.getRevealElement().addEventListener("mousedown",(function(e){var n=/Linux/.test(window.navigator.platform)?"ctrl":"alt",o=(t.getConfig().zoomKey?t.getConfig().zoomKey:n)+"Key",r=t.getConfig().zoomLevel?t.getConfig().zoomLevel:2;e[o]&&!t.isOverview()&&(e.preventDefault(),jt.to({x:e.clientX,y:e.clientY,scale:r,pan:!1}))}))}},jt=function(){var t=1,e=0,n=0,o=-1,r=-1,i="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style;function u(e,n){var o=f();if(e.width=e.width||1,e.height=e.height||1,e.x-=(window.innerWidth-e.width*n)/2,e.y-=(window.innerHeight-e.height*n)/2,i)if(1===n)document.body.style.transform="",document.body.style.OTransform="",document.body.style.msTransform="",document.body.style.MozTransform="",document.body.style.WebkitTransform="";else{var r=o.x+"px "+o.y+"px",u="translate("+-e.x+"px,"+-e.y+"px) scale("+n+")";document.body.style.transformOrigin=r,document.body.style.OTransformOrigin=r,document.body.style.msTransformOrigin=r,document.body.style.MozTransformOrigin=r,document.body.style.WebkitTransformOrigin=r,document.body.style.transform=u,document.body.style.OTransform=u,document.body.style.msTransform=u,document.body.style.MozTransform=u,document.body.style.WebkitTransform=u}else 1===n?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-(o.x+e.x)/n+"px",document.body.style.top=-(o.y+e.y)/n+"px",document.body.style.width=100*n+"%",document.body.style.height=100*n+"%",document.body.style.zoom=n);t=n,document.documentElement.classList&&(1!==t?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function c(){var o=.12*window.innerWidth,r=.12*window.innerHeight,i=f();n<r?window.scroll(i.x,i.y-14/t*(1-n/r)):n>window.innerHeight-r&&window.scroll(i.x,i.y+(1-(window.innerHeight-n)/r)*(14/t)),e<o?window.scroll(i.x-14/t*(1-e/o),i.y):e>window.innerWidth-o&&window.scroll(i.x+(1-(window.innerWidth-e)/o)*(14/t),i.y)}function f(){return{x:void 0!==window.scrollX?window.scrollX:window.pageXOffset,y:void 0!==window.scrollY?window.scrollY:window.pageYOffset}}return i&&(document.body.style.transition="transform 0.8s ease",document.body.style.OTransition="-o-transform 0.8s ease",document.body.style.msTransition="-ms-transform 0.8s ease",document.body.style.MozTransition="-moz-transform 0.8s ease",document.body.style.WebkitTransition="-webkit-transform 0.8s ease"),document.addEventListener("keyup",(function(e){1!==t&&27===e.keyCode&&jt.out()})),document.addEventListener("mousemove",(function(o){1!==t&&(e=o.clientX,n=o.clientY)})),{to:function(e){if(1!==t)jt.out();else{if(e.x=e.x||0,e.y=e.y||0,e.element){var n=e.element.getBoundingClientRect();e.x=n.left-20,e.y=n.top-20,e.width=n.width+40,e.height=n.height+40}void 0!==e.width&&void 0!==e.height&&(e.scale=Math.max(Math.min(window.innerWidth/e.width,window.innerHeight/e.height),1)),e.scale>1&&(e.x*=e.scale,e.y*=e.scale,u(e,e.scale),!1!==e.pan&&(o=setTimeout((function(){r=setInterval(c,1e3/60)}),800)))}},out:function(){clearTimeout(o),clearInterval(r),u({x:0,y:0},1),t=1},magnify:function(t){this.to(t)},reset:function(){this.out()},zoomLevel:function(){return t}}}();return function(){return xt}}));
