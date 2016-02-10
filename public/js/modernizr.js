/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-audio-blobconstructor-bloburls-cssgradients-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-flexbox-fontface-formattribute-getusermedia-opacity-rgba-svg-webaudio-websockets !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),x.push((o?"":"no-")+a.join("-"))}}function i(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?C.className.baseVal=t:C.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){return!!~(""+e).indexOf(t)}function l(){var e=t.body;return e||(e=s(S?"svg":"body"),e.fake=!0),e}function d(e,n,r,o){var i,a,d,u,c="modernizr",f=s("div"),p=l();if(parseInt(r,10))for(;r--;)d=s("div"),d.id=o?o[r]:c+(r+1),f.appendChild(d);return i=s("style"),i.type="text/css",i.id="s"+c,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=u,C.offsetHeight):f.parentNode.removeChild(f),!!a}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+u(t[o])+":"+r+")");return i=i.join(" or "),d("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,o,i){function l(){u&&(delete P.style,delete P.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var d=c(e,o);if(!r(d,"undefined"))return d}for(var u,p,m,h,g,v=["modernizr","tspan"];!P.style;)u=!0,P.modElem=s(v.shift()),P.style=P.modElem.style;for(m=e.length,p=0;m>p;p++)if(h=e[p],g=P.style[h],a(h,"-")&&(h=f(h)),P.style[h]!==n){if(i||r(o,"undefined"))return l(),"pfx"==t?h:!0;try{P.style[h]=o}catch(y){}if(P.style[h]!=g)return l(),"pfx"==t?h:!0}return l(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?m(o,n||t):o);return!1}function g(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+_.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?p(a,t,o,i):(a=(e+" "+z.join(s+" ")+s).split(" "),h(a,t,n))}function v(e,t,r){return g(e,n,n,t,r)}function y(e,t){return e-1===t||e===t||e+1===t}var w=[],b={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr;var x=[],C=t.documentElement,S="svg"===C.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=s("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]}),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("websockets","WebSocket"in e&&2===e.WebSocket.CLOSING),Modernizr.addTest("webaudio",function(){var t="webkitAudioContext"in e,n="AudioContext"in e;return Modernizr._config.usePrefixes?t||n:n});var T="Moz O ms Webkit",_=b._config.usePrefixes?T.split(" "):[];b._cssomPrefixes=_;var N={elem:s("modernizr")};Modernizr._q.push(function(){delete N.elem});var P={style:N.elem.style};Modernizr._q.unshift(function(){delete P.style});var z=b._config.usePrefixes?T.toLowerCase().split(" "):[];b._domPrefixes=z,b.testAllProps=g,b.testAllProps=v,Modernizr.addTest("flexbox",v("flexBasis","1px",!0));var k=b.testStyles=d,E=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return n||o||r}();E?Modernizr.addTest("fontface",!1):k('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,i=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",s=/src/i.test(i)&&0===i.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",s)});var I=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];b._prefixes=I,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,i=I.length-1;i>o;o++)e=0===o?"to ":"",r+=t+I[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var a=s("a"),l=a.style;return l.cssText=r,(""+l.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=I.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("rgba",function(){var e=s("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),k("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",r==n)}),k("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],r=t.childNodes[1],o=t.childNodes[0],i=parseInt((r.offsetWidth-r.clientWidth)/2,10),s=o.clientWidth/100,a=o.clientHeight/100,l=parseInt(50*Math.max(s,a),10),d=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",y(l,d)||y(l,d-i))},3),k("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],r=t.childNodes[1],o=t.childNodes[0],i=parseInt((r.offsetWidth-r.clientWidth)/2,10),s=o.clientWidth/100,a=o.clientHeight/100,l=parseInt(50*Math.min(s,a),10),d=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvminunit",y(l,d)||y(l,d-i))},3),k("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",r==n)}),Modernizr.addTest("formattribute",function(){var e,n=s("form"),r=s("input"),o=s("div"),i="formtest"+(new Date).getTime(),a=!1;n.id=i;try{r.setAttribute("form",i)}catch(l){t.createAttribute&&(e=t.createAttribute("form"),e.nodeValue=i,r.setAttributeNode(e))}return o.appendChild(n),o.appendChild(r),C.appendChild(o),a=n.elements&&1===n.elements.length&&r.form==n,o.parentNode.removeChild(o),a});var R=function(t){var r,o=I.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var s=0;o>s;s++){var a=I[s],l=a.toUpperCase()+"_"+r;if(l in i)return"@-"+a.toLowerCase()+"-"+t}return!1};b.atRule=R;var A=b.prefixed=function(e,t,n){return 0===e.indexOf("@")?R(e):(-1!=e.indexOf("-")&&(e=f(e)),t?g(e,t,n):g(e,"pfx"))},O=A("URL",e,!1);O=O&&e[O],Modernizr.addTest("bloburls",O&&"revokeObjectURL"in O&&"createObjectURL"in O),Modernizr.addTest("getusermedia",!!A("getUserMedia",navigator)),o(),i(x),delete b.addTest,delete b.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);