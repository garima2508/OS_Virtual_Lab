(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function oy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var i0={exports:{}},Bl={},r0={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),ly=Symbol.for("react.portal"),cy=Symbol.for("react.fragment"),dy=Symbol.for("react.strict_mode"),uy=Symbol.for("react.profiler"),hy=Symbol.for("react.provider"),fy=Symbol.for("react.context"),py=Symbol.for("react.forward_ref"),my=Symbol.for("react.suspense"),xy=Symbol.for("react.memo"),gy=Symbol.for("react.lazy"),Nf=Symbol.iterator;function vy(t){return t===null||typeof t!="object"?null:(t=Nf&&t[Nf]||t["@@iterator"],typeof t=="function"?t:null)}var s0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},a0=Object.assign,o0={};function Is(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||s0}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l0(){}l0.prototype=Is.prototype;function oh(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||s0}var lh=oh.prototype=new l0;lh.constructor=oh;a0(lh,Is.prototype);lh.isPureReactComponent=!0;var Rf=Array.isArray,c0=Object.prototype.hasOwnProperty,ch={current:null},d0={key:!0,ref:!0,__self:!0,__source:!0};function u0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)c0.call(e,i)&&!d0.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Oa,type:t,key:s,ref:a,props:r,_owner:ch.current}}function yy(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function _y(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pf=/\/+/g;function mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_y(""+t.key):e.toString(36)}function Ho(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Oa:case ly:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+mc(a,0):i,Rf(r)?(n="",t!=null&&(n=t.replace(Pf,"$&/")+"/"),Ho(r,e,n,"",function(d){return d})):r!=null&&(dh(r)&&(r=yy(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Pf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Rf(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+mc(s,l);a+=Ho(s,e,n,c,r)}else if(c=vy(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+mc(s,l++),a+=Ho(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Za(t,e,n){if(t==null)return t;var i=[],r=0;return Ho(t,i,"","",function(s){return e.call(n,s,r++)}),i}function by(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Vo={transition:null},Sy={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Vo,ReactCurrentOwner:ch};function h0(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Za,forEach:function(t,e,n){Za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Za(t,function(){e++}),e},toArray:function(t){return Za(t,function(e){return e})||[]},only:function(t){if(!dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Is;We.Fragment=cy;We.Profiler=uy;We.PureComponent=oh;We.StrictMode=dy;We.Suspense=my;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;We.act=h0;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=a0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ch.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)c0.call(e,c)&&!d0.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:Oa,type:t.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(t){return t={$$typeof:fy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hy,_context:t},t.Consumer=t};We.createElement=u0;We.createFactory=function(t){var e=u0.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:py,render:t}};We.isValidElement=dh;We.lazy=function(t){return{$$typeof:gy,_payload:{_status:-1,_result:t},_init:by}};We.memo=function(t,e){return{$$typeof:xy,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Vo.transition;Vo.transition={};try{t()}finally{Vo.transition=e}};We.unstable_act=h0;We.useCallback=function(t,e){return $t.current.useCallback(t,e)};We.useContext=function(t){return $t.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};We.useEffect=function(t,e){return $t.current.useEffect(t,e)};We.useId=function(){return $t.current.useId()};We.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return $t.current.useMemo(t,e)};We.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};We.useRef=function(t){return $t.current.useRef(t)};We.useState=function(t){return $t.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return $t.current.useTransition()};We.version="18.3.1";r0.exports=We;var ae=r0.exports;const Hl=oy(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy=ae,My=Symbol.for("react.element"),Ey=Symbol.for("react.fragment"),Ty=Object.prototype.hasOwnProperty,Cy=wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ay={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Ty.call(e,i)&&!Ay.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:My,type:t,key:s,ref:a,props:r,_owner:Cy.current}}Bl.Fragment=Ey;Bl.jsx=f0;Bl.jsxs=f0;i0.exports=Bl;var o=i0.exports,wd={},p0={exports:{}},gn={},m0={exports:{}},x0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Z){var P=D.length;D.push(Z);e:for(;0<P;){var R=P-1>>>1,ee=D[R];if(0<r(ee,Z))D[R]=Z,D[P]=ee,P=R;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Z=D[0],P=D.pop();if(P!==Z){D[0]=P;e:for(var R=0,ee=D.length,ue=ee>>>1;R<ue;){var z=2*(R+1)-1,B=D[z],Y=z+1,X=D[Y];if(0>r(B,P))Y<ee&&0>r(X,B)?(D[R]=X,D[Y]=P,R=Y):(D[R]=B,D[z]=P,R=z);else if(Y<ee&&0>r(X,P))D[R]=X,D[Y]=P,R=Y;else break e}}return Z}function r(D,Z){var P=D.sortIndex-Z.sortIndex;return P!==0?P:D.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],d=[],u=1,p=null,h=3,m=!1,g=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var Z=n(d);Z!==null;){if(Z.callback===null)i(d);else if(Z.startTime<=D)i(d),Z.sortIndex=Z.expirationTime,e(c,Z);else break;Z=n(d)}}function v(D){if(b=!1,y(D),!g)if(n(c)!==null)g=!0,K(A);else{var Z=n(d);Z!==null&&ie(v,Z.startTime-D)}}function A(D,Z){g=!1,b&&(b=!1,f(k),k=-1),m=!0;var P=h;try{for(y(Z),p=n(c);p!==null&&(!(p.expirationTime>Z)||D&&!I());){var R=p.callback;if(typeof R=="function"){p.callback=null,h=p.priorityLevel;var ee=R(p.expirationTime<=Z);Z=t.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(c)&&i(c),y(Z)}else i(c);p=n(c)}if(p!==null)var ue=!0;else{var z=n(d);z!==null&&ie(v,z.startTime-Z),ue=!1}return ue}finally{p=null,h=P,m=!1}}var M=!1,w=null,k=-1,T=5,S=-1;function I(){return!(t.unstable_now()-S<T)}function G(){if(w!==null){var D=t.unstable_now();S=D;var Z=!0;try{Z=w(!0,D)}finally{Z?H():(M=!1,w=null)}}else M=!1}var H;if(typeof _=="function")H=function(){_(G)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ne=J.port2;J.port1.onmessage=G,H=function(){ne.postMessage(null)}}else H=function(){x(G,0)};function K(D){w=D,M||(M=!0,H())}function ie(D,Z){k=x(function(){D(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,K(A))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var Z=3;break;default:Z=h}var P=h;h=Z;try{return D()}finally{h=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var P=h;h=D;try{return Z()}finally{h=P}},t.unstable_scheduleCallback=function(D,Z,P){var R=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?R+P:R):P=R,D){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=P+ee,D={id:u++,callback:Z,priorityLevel:D,startTime:P,expirationTime:ee,sortIndex:-1},P>R?(D.sortIndex=P,e(d,D),n(c)===null&&D===n(d)&&(b?(f(k),k=-1):b=!0,ie(v,P-R))):(D.sortIndex=ee,e(c,D),g||m||(g=!0,K(A))),D},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(D){var Z=h;return function(){var P=h;h=Z;try{return D.apply(this,arguments)}finally{h=P}}}})(x0);m0.exports=x0;var ky=m0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny=ae,mn=ky;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g0=new Set,ya={};function Pr(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(ya[t]=e,t=0;t<e.length;t++)g0.add(e[t])}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Md=Object.prototype.hasOwnProperty,Ry=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,If={},Lf={};function Py(t){return Md.call(Lf,t)?!0:Md.call(If,t)?!1:Ry.test(t)?Lf[t]=!0:(If[t]=!0,!1)}function Iy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ly(t,e,n,i){if(e===null||typeof e>"u"||Iy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var uh=/[\-:]([a-z])/g;function hh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uh,hh);It[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uh,hh);It[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uh,hh);It[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function fh(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ly(e,n,r,i)&&(n=null),i||r===null?Py(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),y0=Symbol.for("react.context"),mh=Symbol.for("react.forward_ref"),Td=Symbol.for("react.suspense"),Cd=Symbol.for("react.suspense_list"),xh=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),_0=Symbol.for("react.offscreen"),Df=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=Df&&t[Df]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,xc;function ia(t){if(xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xc=e&&e[1]||""}return`
`+xc+t}var gc=!1;function vc(t,e){if(!t||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,l=s.length-1;1<=a&&0<=l&&r[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==s[l]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function Dy(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function Ad(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case Zr:return"Portal";case Ed:return"Profiler";case ph:return"StrictMode";case Td:return"Suspense";case Cd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y0:return(t.displayName||"Context")+".Consumer";case v0:return(t._context.displayName||"Context")+".Provider";case mh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xh:return e=t.displayName||null,e!==null?e:Ad(t.type)||"Memo";case Ii:e=t._payload,t=t._init;try{return Ad(t(e))}catch{}}return null}function Fy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ad(e);case 8:return e===ph?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function b0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Uy(t){var e=b0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=Uy(t))}function S0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=b0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kd(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ff(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function w0(t,e){e=e.checked,e!=null&&fh(t,"checked",e,!1)}function Nd(t,e){w0(t,e);var n=Ki(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rd(t,e.type,Ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rd(t,e,n){(e!=="number"||cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ki(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Pd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Of(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(ra(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ki(n)}}function M0(t,e){var n=Ki(e.value),i=Ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function jf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function E0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Id(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?E0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eo,T0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oy=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){Oy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function C0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function A0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=C0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var jy=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ld(t,e){if(e){if(jy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Dd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fd=null;function gh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ud=null,us=null,hs=null;function zf(t){if(t=Ba(t)){if(typeof Ud!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Xl(e),Ud(t.stateNode,t.type,e))}}function k0(t){us?hs?hs.push(t):hs=[t]:us=t}function N0(){if(us){var t=us,e=hs;if(hs=us=null,zf(t),e)for(t=0;t<e.length;t++)zf(e[t])}}function R0(t,e){return t(e)}function P0(){}var yc=!1;function I0(t,e,n){if(yc)return t(e,n);yc=!0;try{return R0(t,e,n)}finally{yc=!1,(us!==null||hs!==null)&&(P0(),N0())}}function ba(t,e){var n=t.stateNode;if(n===null)return null;var i=Xl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Od=!1;if(gi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Od=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Od=!1}function zy(t,e,n,i,r,s,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(u){this.onError(u)}}var ua=!1,dl=null,ul=!1,jd=null,By={onError:function(t){ua=!0,dl=t}};function Hy(t,e,n,i,r,s,a,l,c){ua=!1,dl=null,zy.apply(By,arguments)}function Vy(t,e,n,i,r,s,a,l,c){if(Hy.apply(this,arguments),ua){if(ua){var d=dl;ua=!1,dl=null}else throw Error(oe(198));ul||(ul=!0,jd=d)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function L0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bf(t){if(Ir(t)!==t)throw Error(oe(188))}function Gy(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bf(r),t;if(s===i)return Bf(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function D0(t){return t=Gy(t),t!==null?F0(t):null}function F0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=F0(t);if(e!==null)return e;t=t.sibling}return null}var U0=mn.unstable_scheduleCallback,Hf=mn.unstable_cancelCallback,Wy=mn.unstable_shouldYield,qy=mn.unstable_requestPaint,bt=mn.unstable_now,Xy=mn.unstable_getCurrentPriorityLevel,vh=mn.unstable_ImmediatePriority,O0=mn.unstable_UserBlockingPriority,hl=mn.unstable_NormalPriority,$y=mn.unstable_LowPriority,j0=mn.unstable_IdlePriority,Vl=null,Zn=null;function Yy(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:Qy,Ky=Math.log,Zy=Math.LN2;function Qy(t){return t>>>=0,t===0?32:31-(Ky(t)/Zy|0)|0}var to=64,no=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=sa(l):(s&=a,s!==0&&(i=sa(s)))}else a=n&~r,a!==0?i=sa(a):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Jy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-zn(s),l=1<<a,c=r[a];c===-1?(!(l&n)||l&i)&&(r[a]=Jy(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function zd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function z0(){var t=to;return to<<=1,!(to&4194240)&&(to=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function t_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function yh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function B0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var H0,_h,V0,G0,W0,Bd=!1,io=[],zi=null,Bi=null,Hi=null,Sa=new Map,wa=new Map,Di=[],n_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vf(t,e){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":Sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function Gs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ba(e),e!==null&&_h(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function i_(t,e,n,i,r){switch(e){case"focusin":return zi=Gs(zi,t,e,n,i,r),!0;case"dragenter":return Bi=Gs(Bi,t,e,n,i,r),!0;case"mouseover":return Hi=Gs(Hi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Sa.set(s,Gs(Sa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wa.set(s,Gs(wa.get(s)||null,t,e,n,i,r)),!0}return!1}function q0(t){var e=vr(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=L0(n),e!==null){t.blockedOn=e,W0(t.priority,function(){V0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Go(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Fd=i,n.target.dispatchEvent(i),Fd=null}else return e=Ba(n),e!==null&&_h(e),t.blockedOn=n,!1;e.shift()}return!0}function Gf(t,e,n){Go(t)&&n.delete(e)}function r_(){Bd=!1,zi!==null&&Go(zi)&&(zi=null),Bi!==null&&Go(Bi)&&(Bi=null),Hi!==null&&Go(Hi)&&(Hi=null),Sa.forEach(Gf),wa.forEach(Gf)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Bd||(Bd=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,r_)))}function Ma(t){function e(r){return Ws(r,t)}if(0<io.length){Ws(io[0],t);for(var n=1;n<io.length;n++){var i=io[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zi!==null&&Ws(zi,t),Bi!==null&&Ws(Bi,t),Hi!==null&&Ws(Hi,t),Sa.forEach(e),wa.forEach(e),n=0;n<Di.length;n++)i=Di[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Di.length&&(n=Di[0],n.blockedOn===null);)q0(n),n.blockedOn===null&&Di.shift()}var fs=wi.ReactCurrentBatchConfig,pl=!0;function s_(t,e,n,i){var r=rt,s=fs.transition;fs.transition=null;try{rt=1,bh(t,e,n,i)}finally{rt=r,fs.transition=s}}function a_(t,e,n,i){var r=rt,s=fs.transition;fs.transition=null;try{rt=4,bh(t,e,n,i)}finally{rt=r,fs.transition=s}}function bh(t,e,n,i){if(pl){var r=Hd(t,e,n,i);if(r===null)Nc(t,e,i,ml,n),Vf(t,i);else if(i_(r,t,e,n,i))i.stopPropagation();else if(Vf(t,i),e&4&&-1<n_.indexOf(t)){for(;r!==null;){var s=Ba(r);if(s!==null&&H0(s),s=Hd(t,e,n,i),s===null&&Nc(t,e,i,ml,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nc(t,e,i,null,n)}}var ml=null;function Hd(t,e,n,i){if(ml=null,t=gh(i),t=vr(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=L0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ml=t,null}function X0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xy()){case vh:return 1;case O0:return 4;case hl:case $y:return 16;case j0:return 536870912;default:return 16}default:return 16}}var Oi=null,Sh=null,Wo=null;function $0(){if(Wo)return Wo;var t,e=Sh,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Wo=r.slice(t,1<i?1-i:void 0)}function qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Wf(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ro:Wf,this.isPropagationStopped=Wf,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wh=vn(Ls),za=vt({},Ls,{view:0,detail:0}),o_=vn(za),bc,Sc,qs,Gl=vt({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(bc=t.screenX-qs.screenX,Sc=t.screenY-qs.screenY):Sc=bc=0,qs=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),qf=vn(Gl),l_=vt({},Gl,{dataTransfer:0}),c_=vn(l_),d_=vt({},za,{relatedTarget:0}),wc=vn(d_),u_=vt({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),h_=vn(u_),f_=vt({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p_=vn(f_),m_=vt({},Ls,{data:0}),Xf=vn(m_),x_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=v_[t])?!!e[t]:!1}function Mh(){return y_}var __=vt({},za,{key:function(t){if(t.key){var e=x_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mh,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b_=vn(__),S_=vt({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$f=vn(S_),w_=vt({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mh}),M_=vn(w_),E_=vt({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),T_=vn(E_),C_=vt({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A_=vn(C_),k_=[9,13,27,32],Eh=gi&&"CompositionEvent"in window,ha=null;gi&&"documentMode"in document&&(ha=document.documentMode);var N_=gi&&"TextEvent"in window&&!ha,Y0=gi&&(!Eh||ha&&8<ha&&11>=ha),Yf=" ",Kf=!1;function K0(t,e){switch(t){case"keyup":return k_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function R_(t,e){switch(t){case"compositionend":return Z0(e);case"keypress":return e.which!==32?null:(Kf=!0,Yf);case"textInput":return t=e.data,t===Yf&&Kf?null:t;default:return null}}function P_(t,e){if(Jr)return t==="compositionend"||!Eh&&K0(t,e)?(t=$0(),Wo=Sh=Oi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y0&&e.locale!=="ko"?null:e.data;default:return null}}var I_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!I_[t.type]:e==="textarea"}function Q0(t,e,n,i){k0(i),e=xl(e,"onChange"),0<e.length&&(n=new wh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fa=null,Ea=null;function L_(t){cx(t,0)}function Wl(t){var e=ns(t);if(S0(e))return t}function D_(t,e){if(t==="change")return e}var J0=!1;if(gi){var Mc;if(gi){var Ec="oninput"in document;if(!Ec){var Qf=document.createElement("div");Qf.setAttribute("oninput","return;"),Ec=typeof Qf.oninput=="function"}Mc=Ec}else Mc=!1;J0=Mc&&(!document.documentMode||9<document.documentMode)}function Jf(){fa&&(fa.detachEvent("onpropertychange",ex),Ea=fa=null)}function ex(t){if(t.propertyName==="value"&&Wl(Ea)){var e=[];Q0(e,Ea,t,gh(t)),I0(L_,e)}}function F_(t,e,n){t==="focusin"?(Jf(),fa=e,Ea=n,fa.attachEvent("onpropertychange",ex)):t==="focusout"&&Jf()}function U_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(Ea)}function O_(t,e){if(t==="click")return Wl(e)}function j_(t,e){if(t==="input"||t==="change")return Wl(e)}function z_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:z_;function Ta(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Md.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tp(t,e){var n=ep(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ep(n)}}function tx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nx(){for(var t=window,e=cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cl(t.document)}return e}function Th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function B_(t){var e=nx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tx(n.ownerDocument.documentElement,n)){if(i!==null&&Th(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=tp(n,s);var a=tp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var H_=gi&&"documentMode"in document&&11>=document.documentMode,es=null,Vd=null,pa=null,Gd=!1;function np(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gd||es==null||es!==cl(i)||(i=es,"selectionStart"in i&&Th(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pa&&Ta(pa,i)||(pa=i,i=xl(Vd,"onSelect"),0<i.length&&(e=new wh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=es)))}function so(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Tc={},ix={};gi&&(ix=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function ql(t){if(Tc[t])return Tc[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ix)return Tc[t]=e[n];return t}var rx=ql("animationend"),sx=ql("animationiteration"),ax=ql("animationstart"),ox=ql("transitionend"),lx=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){lx.set(t,e),Pr(e,[t])}for(var Cc=0;Cc<ip.length;Cc++){var Ac=ip[Cc],V_=Ac.toLowerCase(),G_=Ac[0].toUpperCase()+Ac.slice(1);tr(V_,"on"+G_)}tr(rx,"onAnimationEnd");tr(sx,"onAnimationIteration");tr(ax,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(ox,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W_=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function rp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Vy(i,e,void 0,t),t.currentTarget=null}function cx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;rp(r,l,d),s=c}else for(a=0;a<i.length;a++){if(l=i[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;rp(r,l,d),s=c}}}if(ul)throw t=jd,ul=!1,jd=null,t}function ft(t,e){var n=e[Yd];n===void 0&&(n=e[Yd]=new Set);var i=t+"__bubble";n.has(i)||(dx(e,t,2,!1),n.add(i))}function kc(t,e,n){var i=0;e&&(i|=4),dx(n,t,i,e)}var ao="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[ao]){t[ao]=!0,g0.forEach(function(n){n!=="selectionchange"&&(W_.has(n)||kc(n,!1,t),kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ao]||(e[ao]=!0,kc("selectionchange",!1,e))}}function dx(t,e,n,i){switch(X0(e)){case 1:var r=s_;break;case 4:r=a_;break;default:r=bh}n=r.bind(null,e,n,t),r=void 0,!Od||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Nc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;l!==null;){if(a=vr(l),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}l=l.parentNode}}i=i.return}I0(function(){var d=s,u=gh(n),p=[];e:{var h=lx.get(t);if(h!==void 0){var m=wh,g=t;switch(t){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":m=b_;break;case"focusin":g="focus",m=wc;break;case"focusout":g="blur",m=wc;break;case"beforeblur":case"afterblur":m=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=c_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=M_;break;case rx:case sx:case ax:m=h_;break;case ox:m=T_;break;case"scroll":m=o_;break;case"wheel":m=A_;break;case"copy":case"cut":case"paste":m=p_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=$f}var b=(e&4)!==0,x=!b&&t==="scroll",f=b?h!==null?h+"Capture":null:h;b=[];for(var _=d,y;_!==null;){y=_;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,f!==null&&(v=ba(_,f),v!=null&&b.push(Aa(_,v,y)))),x)break;_=_.return}0<b.length&&(h=new m(h,g,null,n,u),p.push({event:h,listeners:b}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Fd&&(g=n.relatedTarget||n.fromElement)&&(vr(g)||g[vi]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=d,g=g?vr(g):null,g!==null&&(x=Ir(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=d),m!==g)){if(b=qf,v="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(b=$f,v="onPointerLeave",f="onPointerEnter",_="pointer"),x=m==null?h:ns(m),y=g==null?h:ns(g),h=new b(v,_+"leave",m,n,u),h.target=x,h.relatedTarget=y,v=null,vr(u)===d&&(b=new b(f,_+"enter",g,n,u),b.target=y,b.relatedTarget=x,v=b),x=v,m&&g)t:{for(b=m,f=g,_=0,y=b;y;y=Fr(y))_++;for(y=0,v=f;v;v=Fr(v))y++;for(;0<_-y;)b=Fr(b),_--;for(;0<y-_;)f=Fr(f),y--;for(;_--;){if(b===f||f!==null&&b===f.alternate)break t;b=Fr(b),f=Fr(f)}b=null}else b=null;m!==null&&sp(p,h,m,b,!1),g!==null&&x!==null&&sp(p,x,g,b,!0)}}e:{if(h=d?ns(d):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var A=D_;else if(Zf(h))if(J0)A=j_;else{A=U_;var M=F_}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=O_);if(A&&(A=A(t,d))){Q0(p,A,n,u);break e}M&&M(t,h,d),t==="focusout"&&(M=h._wrapperState)&&M.controlled&&h.type==="number"&&Rd(h,"number",h.value)}switch(M=d?ns(d):window,t){case"focusin":(Zf(M)||M.contentEditable==="true")&&(es=M,Vd=d,pa=null);break;case"focusout":pa=Vd=es=null;break;case"mousedown":Gd=!0;break;case"contextmenu":case"mouseup":case"dragend":Gd=!1,np(p,n,u);break;case"selectionchange":if(H_)break;case"keydown":case"keyup":np(p,n,u)}var w;if(Eh)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Jr?K0(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Y0&&n.locale!=="ko"&&(Jr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Jr&&(w=$0()):(Oi=u,Sh="value"in Oi?Oi.value:Oi.textContent,Jr=!0)),M=xl(d,k),0<M.length&&(k=new Xf(k,t,null,n,u),p.push({event:k,listeners:M}),w?k.data=w:(w=Z0(n),w!==null&&(k.data=w)))),(w=N_?R_(t,n):P_(t,n))&&(d=xl(d,"onBeforeInput"),0<d.length&&(u=new Xf("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=w))}cx(p,e)})}function Aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ba(t,n),s!=null&&i.unshift(Aa(t,s,r)),s=ba(t,e),s!=null&&i.push(Aa(t,s,r))),t=t.return}return i}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&d!==null&&(l=d,r?(c=ba(n,s),c!=null&&a.unshift(Aa(n,c,l))):r||(c=ba(n,s),c!=null&&a.push(Aa(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var q_=/\r\n?/g,X_=/\u0000|\uFFFD/g;function ap(t){return(typeof t=="string"?t:""+t).replace(q_,`
`).replace(X_,"")}function oo(t,e,n){if(e=ap(e),ap(t)!==e&&n)throw Error(oe(425))}function gl(){}var Wd=null,qd=null;function Xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $d=typeof setTimeout=="function"?setTimeout:void 0,$_=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,Y_=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(t){return op.resolve(null).then(t).catch(K_)}:$d;function K_(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ma(e)}function Vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ds,ka="__reactProps$"+Ds,vi="__reactContainer$"+Ds,Yd="__reactEvents$"+Ds,Z_="__reactListeners$"+Ds,Q_="__reactHandles$"+Ds;function vr(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lp(t);t!==null;){if(n=t[Yn])return n;t=lp(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[Yn]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Xl(t){return t[ka]||null}var Kd=[],is=-1;function nr(t){return{current:t}}function pt(t){0>is||(t.current=Kd[is],Kd[is]=null,is--)}function ct(t,e){is++,Kd[is]=t.current,t.current=e}var Zi={},Vt=nr(Zi),tn=nr(!1),Er=Zi;function _s(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function vl(){pt(tn),pt(Vt)}function cp(t,e,n){if(Vt.current!==Zi)throw Error(oe(168));ct(Vt,e),ct(tn,n)}function ux(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,Fy(t)||"Unknown",r));return vt({},n,i)}function yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Er=Vt.current,ct(Vt,t),ct(tn,tn.current),!0}function dp(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=ux(t,e,Er),i.__reactInternalMemoizedMergedChildContext=t,pt(tn),pt(Vt),ct(Vt,t)):pt(tn),ct(tn,n)}var ci=null,$l=!1,Pc=!1;function hx(t){ci===null?ci=[t]:ci.push(t)}function J_(t){$l=!0,hx(t)}function ir(){if(!Pc&&ci!==null){Pc=!0;var t=0,e=rt;try{var n=ci;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ci=null,$l=!1}catch(r){throw ci!==null&&(ci=ci.slice(t+1)),U0(vh,ir),r}finally{rt=e,Pc=!1}}return null}var rs=[],ss=0,_l=null,bl=0,Sn=[],wn=0,Tr=null,ui=1,hi="";function hr(t,e){rs[ss++]=bl,rs[ss++]=_l,_l=t,bl=e}function fx(t,e,n){Sn[wn++]=ui,Sn[wn++]=hi,Sn[wn++]=Tr,Tr=t;var i=ui;t=hi;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ui=1<<32-zn(e)+r|n<<r|i,hi=s+t}else ui=1<<s|n<<r|i,hi=t}function Ch(t){t.return!==null&&(hr(t,1),fx(t,1,0))}function Ah(t){for(;t===_l;)_l=rs[--ss],rs[ss]=null,bl=rs[--ss],rs[ss]=null;for(;t===Tr;)Tr=Sn[--wn],Sn[wn]=null,hi=Sn[--wn],Sn[wn]=null,ui=Sn[--wn],Sn[wn]=null}var pn=null,fn=null,mt=!1,Un=null;function px(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function up(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,fn=Vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:ui,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,fn=null,!0):!1;default:return!1}}function Zd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qd(t){if(mt){var e=fn;if(e){var n=e;if(!up(t,e)){if(Zd(t))throw Error(oe(418));e=Vi(n.nextSibling);var i=pn;e&&up(t,e)?px(i,n):(t.flags=t.flags&-4097|2,mt=!1,pn=t)}}else{if(Zd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,mt=!1,pn=t}}}function hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function lo(t){if(t!==pn)return!1;if(!mt)return hp(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xd(t.type,t.memoizedProps)),e&&(e=fn)){if(Zd(t))throw mx(),Error(oe(418));for(;e;)px(t,e),e=Vi(e.nextSibling)}if(hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=Vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=pn?Vi(t.stateNode.nextSibling):null;return!0}function mx(){for(var t=fn;t;)t=Vi(t.nextSibling)}function bs(){fn=pn=null,mt=!1}function kh(t){Un===null?Un=[t]:Un.push(t)}var eb=wi.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=r.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function co(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fp(t){var e=t._init;return e(t._payload)}function xx(t){function e(f,_){if(t){var y=f.deletions;y===null?(f.deletions=[_],f.flags|=16):y.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Xi(f,_),f.index=0,f.sibling=null,f}function s(f,_,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<_?(f.flags|=2,_):y):(f.flags|=2,_)):(f.flags|=1048576,_)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function l(f,_,y,v){return _===null||_.tag!==6?(_=jc(y,f.mode,v),_.return=f,_):(_=r(_,y),_.return=f,_)}function c(f,_,y,v){var A=y.type;return A===Qr?u(f,_,y.props.children,v,y.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ii&&fp(A)===_.type)?(v=r(_,y.props),v.ref=Xs(f,_,y),v.return=f,v):(v=Jo(y.type,y.key,y.props,null,f.mode,v),v.ref=Xs(f,_,y),v.return=f,v)}function d(f,_,y,v){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=zc(y,f.mode,v),_.return=f,_):(_=r(_,y.children||[]),_.return=f,_)}function u(f,_,y,v,A){return _===null||_.tag!==7?(_=Mr(y,f.mode,v,A),_.return=f,_):(_=r(_,y),_.return=f,_)}function p(f,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=jc(""+_,f.mode,y),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qa:return y=Jo(_.type,_.key,_.props,null,f.mode,y),y.ref=Xs(f,null,_),y.return=f,y;case Zr:return _=zc(_,f.mode,y),_.return=f,_;case Ii:var v=_._init;return p(f,v(_._payload),y)}if(ra(_)||Hs(_))return _=Mr(_,f.mode,y,null),_.return=f,_;co(f,_)}return null}function h(f,_,y,v){var A=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:l(f,_,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qa:return y.key===A?c(f,_,y,v):null;case Zr:return y.key===A?d(f,_,y,v):null;case Ii:return A=y._init,h(f,_,A(y._payload),v)}if(ra(y)||Hs(y))return A!==null?null:u(f,_,y,v,null);co(f,y)}return null}function m(f,_,y,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(y)||null,l(_,f,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qa:return f=f.get(v.key===null?y:v.key)||null,c(_,f,v,A);case Zr:return f=f.get(v.key===null?y:v.key)||null,d(_,f,v,A);case Ii:var M=v._init;return m(f,_,y,M(v._payload),A)}if(ra(v)||Hs(v))return f=f.get(y)||null,u(_,f,v,A,null);co(_,v)}return null}function g(f,_,y,v){for(var A=null,M=null,w=_,k=_=0,T=null;w!==null&&k<y.length;k++){w.index>k?(T=w,w=null):T=w.sibling;var S=h(f,w,y[k],v);if(S===null){w===null&&(w=T);break}t&&w&&S.alternate===null&&e(f,w),_=s(S,_,k),M===null?A=S:M.sibling=S,M=S,w=T}if(k===y.length)return n(f,w),mt&&hr(f,k),A;if(w===null){for(;k<y.length;k++)w=p(f,y[k],v),w!==null&&(_=s(w,_,k),M===null?A=w:M.sibling=w,M=w);return mt&&hr(f,k),A}for(w=i(f,w);k<y.length;k++)T=m(w,f,k,y[k],v),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?k:T.key),_=s(T,_,k),M===null?A=T:M.sibling=T,M=T);return t&&w.forEach(function(I){return e(f,I)}),mt&&hr(f,k),A}function b(f,_,y,v){var A=Hs(y);if(typeof A!="function")throw Error(oe(150));if(y=A.call(y),y==null)throw Error(oe(151));for(var M=A=null,w=_,k=_=0,T=null,S=y.next();w!==null&&!S.done;k++,S=y.next()){w.index>k?(T=w,w=null):T=w.sibling;var I=h(f,w,S.value,v);if(I===null){w===null&&(w=T);break}t&&w&&I.alternate===null&&e(f,w),_=s(I,_,k),M===null?A=I:M.sibling=I,M=I,w=T}if(S.done)return n(f,w),mt&&hr(f,k),A;if(w===null){for(;!S.done;k++,S=y.next())S=p(f,S.value,v),S!==null&&(_=s(S,_,k),M===null?A=S:M.sibling=S,M=S);return mt&&hr(f,k),A}for(w=i(f,w);!S.done;k++,S=y.next())S=m(w,f,k,S.value,v),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?k:S.key),_=s(S,_,k),M===null?A=S:M.sibling=S,M=S);return t&&w.forEach(function(G){return e(f,G)}),mt&&hr(f,k),A}function x(f,_,y,v){if(typeof y=="object"&&y!==null&&y.type===Qr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Qa:e:{for(var A=y.key,M=_;M!==null;){if(M.key===A){if(A=y.type,A===Qr){if(M.tag===7){n(f,M.sibling),_=r(M,y.props.children),_.return=f,f=_;break e}}else if(M.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ii&&fp(A)===M.type){n(f,M.sibling),_=r(M,y.props),_.ref=Xs(f,M,y),_.return=f,f=_;break e}n(f,M);break}else e(f,M);M=M.sibling}y.type===Qr?(_=Mr(y.props.children,f.mode,v,y.key),_.return=f,f=_):(v=Jo(y.type,y.key,y.props,null,f.mode,v),v.ref=Xs(f,_,y),v.return=f,f=v)}return a(f);case Zr:e:{for(M=y.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(f,_.sibling),_=r(_,y.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=zc(y,f.mode,v),_.return=f,f=_}return a(f);case Ii:return M=y._init,x(f,_,M(y._payload),v)}if(ra(y))return g(f,_,y,v);if(Hs(y))return b(f,_,y,v);co(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,y),_.return=f,f=_):(n(f,_),_=jc(y,f.mode,v),_.return=f,f=_),a(f)):n(f,_)}return x}var Ss=xx(!0),gx=xx(!1),Sl=nr(null),wl=null,as=null,Nh=null;function Rh(){Nh=as=wl=null}function Ph(t){var e=Sl.current;pt(Sl),t._currentValue=e}function Jd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ps(t,e){wl=t,Nh=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Nh!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(wl===null)throw Error(oe(308));as=t,wl.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var yr=null;function Ih(t){yr===null?yr=[t]:yr.push(t)}function vx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ih(e)):(n.next=r.next,r.next=n),e.interleaved=n,yi(t,i)}function yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Li=!1;function Lh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ih(i)):(e.next=r.next,r.next=e),i.interleaved=e,yi(t,n)}function Xo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yh(t,n)}}function pp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,i){var r=t.updateQueue;Li=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?s=d:a.next=d,a=c;var u=t.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,u=d=c=null,l=s;do{var h=l.lane,m=l.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,b=l;switch(h=e,m=n,b.tag){case 1:if(g=b.payload,typeof g=="function"){p=g.call(m,p,h);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,h=typeof g=="function"?g.call(m,p,h):g,h==null)break e;p=vt({},p,h);break e;case 2:Li=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=m,c=p):u=u.next=m,a|=h;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;h=l,l=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(c=p),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ar|=a,t.lanes=a,t.memoizedState=p}}function mp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Ha={},Qn=nr(Ha),Na=nr(Ha),Ra=nr(Ha);function _r(t){if(t===Ha)throw Error(oe(174));return t}function Dh(t,e){switch(ct(Ra,e),ct(Na,t),ct(Qn,Ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Id(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Id(e,t)}pt(Qn),ct(Qn,e)}function ws(){pt(Qn),pt(Na),pt(Ra)}function _x(t){_r(Ra.current);var e=_r(Qn.current),n=Id(e,t.type);e!==n&&(ct(Na,t),ct(Qn,n))}function Fh(t){Na.current===t&&(pt(Qn),pt(Na))}var xt=nr(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function Uh(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var $o=wi.ReactCurrentDispatcher,Lc=wi.ReactCurrentBatchConfig,Cr=0,gt=null,Mt=null,kt=null,Tl=!1,ma=!1,Pa=0,tb=0;function Dt(){throw Error(oe(321))}function Oh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function jh(t,e,n,i,r,s){if(Cr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$o.current=t===null||t.memoizedState===null?sb:ab,t=n(i,r),ma){s=0;do{if(ma=!1,Pa=0,25<=s)throw Error(oe(301));s+=1,kt=Mt=null,e.updateQueue=null,$o.current=ob,t=n(i,r)}while(ma)}if($o.current=Cl,e=Mt!==null&&Mt.next!==null,Cr=0,kt=Mt=gt=null,Tl=!1,e)throw Error(oe(300));return t}function zh(){var t=Pa!==0;return Pa=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?gt.memoizedState=kt=t:kt=kt.next=t,kt}function An(){if(Mt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=kt===null?gt.memoizedState:kt.next;if(e!==null)kt=e,Mt=t;else{if(t===null)throw Error(oe(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},kt===null?gt.memoizedState=kt=t:kt=kt.next=t}return kt}function Ia(t,e){return typeof e=="function"?e(t):e}function Dc(t){var e=An(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=a=null,c=null,d=s;do{var u=d.lane;if((Cr&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,a=i):c=c.next=p,gt.lanes|=u,Ar|=u}d=d.next}while(d!==null&&d!==s);c===null?a=i:c.next=l,Gn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Ar|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fc(t){var e=An(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Gn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function bx(){}function Sx(t,e){var n=gt,i=An(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,Bh(Ex.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,La(9,Mx.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(oe(349));Cr&30||wx(n,e,r)}return r}function wx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Mx(t,e,n,i){e.value=n,e.getSnapshot=i,Tx(e)&&Cx(t)}function Ex(t,e,n){return n(function(){Tx(e)&&Cx(t)})}function Tx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function Cx(t){var e=yi(t,1);e!==null&&Bn(e,t,1,-1)}function xp(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},e.queue=t,t=t.dispatch=rb.bind(null,gt,t),[e.memoizedState,t]}function La(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ax(){return An().memoizedState}function Yo(t,e,n,i){var r=Xn();gt.flags|=t,r.memoizedState=La(1|e,n,void 0,i===void 0?null:i)}function Yl(t,e,n,i){var r=An();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var a=Mt.memoizedState;if(s=a.destroy,i!==null&&Oh(i,a.deps)){r.memoizedState=La(e,n,s,i);return}}gt.flags|=t,r.memoizedState=La(1|e,n,s,i)}function gp(t,e){return Yo(8390656,8,t,e)}function Bh(t,e){return Yl(2048,8,t,e)}function kx(t,e){return Yl(4,2,t,e)}function Nx(t,e){return Yl(4,4,t,e)}function Rx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Px(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4,4,Rx.bind(null,e,t),n)}function Hh(){}function Ix(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Oh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Lx(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Oh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Dx(t,e,n){return Cr&21?(Gn(n,e)||(n=z0(),gt.lanes|=n,Ar|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function nb(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Lc.transition;Lc.transition={};try{t(!1),e()}finally{rt=n,Lc.transition=i}}function Fx(){return An().memoizedState}function ib(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ux(t))Ox(e,n);else if(n=vx(t,e,n,i),n!==null){var r=Xt();Bn(n,t,i,r),jx(n,e,i)}}function rb(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ux(t))Ox(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,Gn(l,a)){var c=e.interleaved;c===null?(r.next=r,Ih(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=vx(t,e,r,i),n!==null&&(r=Xt(),Bn(n,t,i,r),jx(n,e,i))}}function Ux(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function Ox(t,e){ma=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yh(t,n)}}var Cl={readContext:Cn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},sb={readContext:Cn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:gp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yo(4194308,4,Rx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yo(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ib.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:xp,useDebugValue:Hh,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=xp(!1),e=t[0];return t=nb.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Xn();if(mt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Nt===null)throw Error(oe(349));Cr&30||wx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gp(Ex.bind(null,i,s,t),[t]),i.flags|=2048,La(9,Mx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Nt.identifierPrefix;if(mt){var n=hi,i=ui;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ab={readContext:Cn,useCallback:Ix,useContext:Cn,useEffect:Bh,useImperativeHandle:Px,useInsertionEffect:kx,useLayoutEffect:Nx,useMemo:Lx,useReducer:Dc,useRef:Ax,useState:function(){return Dc(Ia)},useDebugValue:Hh,useDeferredValue:function(t){var e=An();return Dx(e,Mt.memoizedState,t)},useTransition:function(){var t=Dc(Ia)[0],e=An().memoizedState;return[t,e]},useMutableSource:bx,useSyncExternalStore:Sx,useId:Fx,unstable_isNewReconciler:!1},ob={readContext:Cn,useCallback:Ix,useContext:Cn,useEffect:Bh,useImperativeHandle:Px,useInsertionEffect:kx,useLayoutEffect:Nx,useMemo:Lx,useReducer:Fc,useRef:Ax,useState:function(){return Fc(Ia)},useDebugValue:Hh,useDeferredValue:function(t){var e=An();return Mt===null?e.memoizedState=t:Dx(e,Mt.memoizedState,t)},useTransition:function(){var t=Fc(Ia)[0],e=An().memoizedState;return[t,e]},useMutableSource:bx,useSyncExternalStore:Sx,useId:Fx,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function eu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kl={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=qi(t),s=mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Bn(e,t,r,i),Xo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=qi(t),s=mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Bn(e,t,r,i),Xo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=qi(t),r=mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Gi(t,r,i),e!==null&&(Bn(e,t,i,n),Xo(e,t,i))}};function vp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,i)||!Ta(r,s):!0}function zx(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=nn(e)?Er:Vt.current,i=e.contextTypes,s=(i=i!=null)?_s(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function yp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Kl.enqueueReplaceState(e,e.state,null)}function tu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Lh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=nn(e)?Er:Vt.current,r.context=_s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(eu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kl.enqueueReplaceState(r,r.state,null),Ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,e){try{var n="",i=e;do n+=Dy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lb=typeof WeakMap=="function"?WeakMap:Map;function Bx(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kl||(kl=!0,hu=i),nu(t,e)},n}function Hx(t,e,n){n=mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nu(t,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function _p(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new lb;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Sb.bind(null,t,e,n),e.then(t,t))}function bp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,Gi(n,e,1))),n.lanes|=1),t)}var cb=wi.ReactCurrentOwner,en=!1;function Wt(t,e,n,i){e.child=t===null?gx(e,null,n,i):Ss(e,t.child,n,i)}function wp(t,e,n,i,r){n=n.render;var s=e.ref;return ps(e,r),i=jh(t,e,n,i,s,r),n=zh(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(mt&&n&&Ch(e),e.flags|=1,Wt(t,e,i,r),e.child)}function Mp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Kh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Vx(t,e,s,i,r)):(t=Jo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(a,i)&&t.ref===e.ref)return _i(t,e,r)}return e.flags|=1,t=Xi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Vx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ta(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,_i(t,e,r)}return iu(t,e,n,i,r)}function Gx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(ls,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(ls,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(ls,un),un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(ls,un),un|=i;return Wt(t,e,r,n),e.child}function Wx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function iu(t,e,n,i,r){var s=nn(n)?Er:Vt.current;return s=_s(e,s),ps(e,r),n=jh(t,e,n,i,s,r),i=zh(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(mt&&i&&Ch(e),e.flags|=1,Wt(t,e,n,r),e.child)}function Ep(t,e,n,i,r){if(nn(n)){var s=!0;yl(e)}else s=!1;if(ps(e,r),e.stateNode===null)Ko(t,e),zx(e,n,i),tu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Cn(d):(d=nn(n)?Er:Vt.current,d=_s(e,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||c!==d)&&yp(e,a,i,d),Li=!1;var h=e.memoizedState;a.state=h,Ml(e,i,a,r),c=e.memoizedState,l!==i||h!==c||tn.current||Li?(typeof u=="function"&&(eu(e,n,u,i),c=e.memoizedState),(l=Li||vp(e,n,l,i,h,c,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=d,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,yx(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Dn(e.type,l),a.props=d,p=e.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Cn(c):(c=nn(n)?Er:Vt.current,c=_s(e,c));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||h!==c)&&yp(e,a,i,c),Li=!1,h=e.memoizedState,a.state=h,Ml(e,i,a,r);var g=e.memoizedState;l!==p||h!==g||tn.current||Li?(typeof m=="function"&&(eu(e,n,m,i),g=e.memoizedState),(d=Li||vp(e,n,d,i,h,g,c)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=c,i=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return ru(t,e,n,i,s,r)}function ru(t,e,n,i,r,s){Wx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&dp(e,n,!1),_i(t,e,s);i=e.stateNode,cb.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,l,s)):Wt(t,e,l,s),e.memoizedState=i.state,r&&dp(e,n,!0),e.child}function qx(t){var e=t.stateNode;e.pendingContext?cp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cp(t,e.context,!1),Dh(t,e.containerInfo)}function Tp(t,e,n,i,r){return bs(),kh(r),e.flags|=256,Wt(t,e,n,i),e.child}var su={dehydrated:null,treeContext:null,retryLane:0};function au(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xx(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(xt,r&1),t===null)return Qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Jl(a,i,0,null),t=Mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=au(n),e.memoizedState=su,t):Vh(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return db(t,e,a,i,l,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Xi(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=Xi(l,s):(s=Mr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?au(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=su,i}return s=t.child,t=s.sibling,i=Xi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Vh(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uo(t,e,n,i){return i!==null&&kh(i),Ss(e,t.child,null,n),t=Vh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function db(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Uc(Error(oe(422))),uo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jl({mode:"visible",children:i.children},r,0,null),s=Mr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,a),e.child.memoizedState=au(a),e.memoizedState=su,s);if(!(e.mode&1))return uo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(oe(419)),i=Uc(s,i,void 0),uo(t,e,a,i)}if(l=(a&t.childLanes)!==0,en||l){if(i=Nt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yi(t,r),Bn(i,t,r,-1))}return Yh(),i=Uc(Error(oe(421))),uo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=wb.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fn=Vi(r.nextSibling),pn=e,mt=!0,Un=null,t!==null&&(Sn[wn++]=ui,Sn[wn++]=hi,Sn[wn++]=Tr,ui=t.id,hi=t.overflow,Tr=e),e=Vh(e,i.children),e.flags|=4096,e)}function Cp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Jd(t.return,e,n)}function Oc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function $x(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cp(t,n,e);else if(t.tag===19)Cp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Oc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&El(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ko(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ub(t,e,n){switch(e.tag){case 3:qx(e),bs();break;case 5:_x(e);break;case 1:nn(e.type)&&yl(e);break;case 4:Dh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?Xx(t,e,n):(ct(xt,xt.current&1),t=_i(t,e,n),t!==null?t.sibling:null);ct(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $x(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,Gx(t,e,n)}return _i(t,e,n)}var Yx,ou,Kx,Zx;Yx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ou=function(){};Kx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_r(Qn.current);var s=null;switch(n){case"input":r=kd(t,r),i=kd(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Pd(t,r),i=Pd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gl)}Ld(n,i);var a;n=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ya.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in i){var c=i[d];if(l=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ya.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ft("scroll",t),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Zx=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function hb(t,e,n){var i=e.pendingProps;switch(Ah(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return nn(e.type)&&vl(),Ft(e),null;case 3:return i=e.stateNode,ws(),pt(tn),pt(Vt),Uh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(mu(Un),Un=null))),ou(t,e),Ft(e),null;case 5:Fh(e);var r=_r(Ra.current);if(n=e.type,t!==null&&e.stateNode!=null)Kx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Ft(e),null}if(t=_r(Qn.current),lo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[ka]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)ft(aa[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Ff(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Of(i,s),ft("invalid",i)}Ld(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&oo(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&oo(i.textContent,l,t),r=["children",""+l]):ya.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ft("scroll",i)}switch(n){case"input":Ja(i),Uf(i,s,!0);break;case"textarea":Ja(i),jf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=E0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Yn]=e,t[ka]=i,Yx(t,e,!1,!1),e.stateNode=t;e:{switch(a=Dd(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)ft(aa[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Ff(t,i),r=kd(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":Of(t,i),r=Pd(t,i),ft("invalid",t);break;default:r=i}Ld(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?A0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&T0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&_a(t,c):typeof c=="number"&&_a(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ya.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ft("scroll",t):c!=null&&fh(t,s,c,a))}switch(n){case"input":Ja(t),Uf(t,i,!1);break;case"textarea":Ja(t),jf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ki(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Zx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=_r(Ra.current),_r(Qn.current),lo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:oo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return Ft(e),null;case 13:if(pt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&fn!==null&&e.mode&1&&!(e.flags&128))mx(),bs(),e.flags|=98560,s=!1;else if(s=lo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Yn]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Un!==null&&(mu(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Et===0&&(Et=3):Yh())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return ws(),ou(t,e),t===null&&Ca(e.stateNode.containerInfo),Ft(e),null;case 10:return Ph(e.type._context),Ft(e),null;case 17:return nn(e.type)&&vl(),Ft(e),null;case 19:if(pt(xt),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)$s(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=El(t),a!==null){for(e.flags|=128,$s(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>Es&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=El(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return Ft(e),null}else 2*bt()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=xt.current,ct(xt,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return $h(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function fb(t,e){switch(Ah(e),e.tag){case 1:return nn(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),pt(tn),pt(Vt),Uh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fh(e),null;case 13:if(pt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(xt),null;case 4:return ws(),null;case 10:return Ph(e.type._context),null;case 22:case 23:return $h(),null;case 24:return null;default:return null}}var ho=!1,zt=!1,pb=typeof WeakSet=="function"?WeakSet:Set,be=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function lu(t,e,n){try{n()}catch(i){_t(t,e,i)}}var Ap=!1;function mb(t,e){if(Wd=pl,t=nx(),Th(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,d=0,u=0,p=t,h=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(l=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)h=p,p=m;for(;;){if(p===t)break t;if(h===n&&++d===r&&(l=a),h===s&&++u===i&&(c=a),(m=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qd={focusedElem:t,selectionRange:n},pl=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,x=g.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?b:Dn(e.type,b),x);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(v){_t(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return g=Ap,Ap=!1,g}function xa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&lu(e,n,s)}r=r.next}while(r!==i)}}function Zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qx(t){var e=t.alternate;e!==null&&(t.alternate=null,Qx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[ka],delete e[Yd],delete e[Z_],delete e[Q_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jx(t){return t.tag===5||t.tag===3||t.tag===4}function kp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function du(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(i!==4&&(t=t.child,t!==null))for(du(t,e,n),t=t.sibling;t!==null;)du(t,e,n),t=t.sibling}function uu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(uu(t,e,n),t=t.sibling;t!==null;)uu(t,e,n),t=t.sibling}var Rt=null,Fn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)eg(t,e,n),n=n.sibling}function eg(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 5:zt||os(n,e);case 6:var i=Rt,r=Fn;Rt=null,Ti(t,e,n),Rt=i,Fn=r,Rt!==null&&(Fn?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(Fn?(t=Rt,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),Ma(t)):Rc(Rt,n.stateNode));break;case 4:i=Rt,r=Fn,Rt=n.stateNode.containerInfo,Fn=!0,Ti(t,e,n),Rt=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&lu(n,e,a),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!zt&&(os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){_t(n,e,l)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,Ti(t,e,n),zt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function Np(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pb),e.forEach(function(i){var r=Mb.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Rt=l.stateNode,Fn=!1;break e;case 3:Rt=l.stateNode.containerInfo,Fn=!0;break e;case 4:Rt=l.stateNode.containerInfo,Fn=!0;break e}l=l.return}if(Rt===null)throw Error(oe(160));eg(s,a,r),Rt=null,Fn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){_t(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tg(e,t),e=e.sibling}function tg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),qn(t),i&4){try{xa(3,t,t.return),Zl(3,t)}catch(b){_t(t,t.return,b)}try{xa(5,t,t.return)}catch(b){_t(t,t.return,b)}}break;case 1:Rn(e,t),qn(t),i&512&&n!==null&&os(n,n.return);break;case 5:if(Rn(e,t),qn(t),i&512&&n!==null&&os(n,n.return),t.flags&32){var r=t.stateNode;try{_a(r,"")}catch(b){_t(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&w0(r,s),Dd(l,a);var d=Dd(l,s);for(a=0;a<c.length;a+=2){var u=c[a],p=c[a+1];u==="style"?A0(r,p):u==="dangerouslySetInnerHTML"?T0(r,p):u==="children"?_a(r,p):fh(r,u,p,d)}switch(l){case"input":Nd(r,s);break;case"textarea":M0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ds(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(b){_t(t,t.return,b)}}break;case 6:if(Rn(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){_t(t,t.return,b)}}break;case 3:if(Rn(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(b){_t(t,t.return,b)}break;case 4:Rn(e,t),qn(t);break;case 13:Rn(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(qh=bt())),i&4&&Np(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(d=zt)||u,Rn(e,t),zt=d):Rn(e,t),qn(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&t.mode&1)for(be=t,u=t.child;u!==null;){for(p=be=u;be!==null;){switch(h=be,m=h.child,h.tag){case 0:case 11:case 14:case 15:xa(4,h,h.return);break;case 1:os(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(b){_t(i,n,b)}}break;case 5:os(h,h.return);break;case 22:if(h.memoizedState!==null){Pp(p);continue}}m!==null?(m.return=h,be=m):Pp(p)}u=u.sibling}e:for(u=null,p=t;;){if(p.tag===5){if(u===null){u=p;try{r=p.stateNode,d?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=C0("display",a))}catch(b){_t(t,t.return,b)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(b){_t(t,t.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Rn(e,t),qn(t),i&4&&Np(t);break;case 21:break;default:Rn(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jx(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(_a(r,""),i.flags&=-33);var s=kp(t);uu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=kp(t);du(t,l,a);break;default:throw Error(oe(161))}}catch(c){_t(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xb(t,e,n){be=t,ng(t)}function ng(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ho;if(!a){var l=r.alternate,c=l!==null&&l.memoizedState!==null||zt;l=ho;var d=zt;if(ho=a,(zt=c)&&!d)for(be=r;be!==null;)a=be,c=a.child,a.tag===22&&a.memoizedState!==null?Ip(r):c!==null?(c.return=a,be=c):Ip(r);for(;s!==null;)be=s,ng(s),s=s.sibling;be=r,ho=l,zt=d}Rp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Rp(t)}}function Rp(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mp(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Ma(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}zt||e.flags&512&&cu(e)}catch(h){_t(e,e.return,h)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function Pp(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Ip(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zl(4,e)}catch(c){_t(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){_t(e,r,c)}}var s=e.return;try{cu(e)}catch(c){_t(e,s,c)}break;case 5:var a=e.return;try{cu(e)}catch(c){_t(e,a,c)}}}catch(c){_t(e,e.return,c)}if(e===t){be=null;break}var l=e.sibling;if(l!==null){l.return=e.return,be=l;break}be=e.return}}var gb=Math.ceil,Al=wi.ReactCurrentDispatcher,Gh=wi.ReactCurrentOwner,Tn=wi.ReactCurrentBatchConfig,Qe=0,Nt=null,wt=null,Pt=0,un=0,ls=nr(0),Et=0,Da=null,Ar=0,Ql=0,Wh=0,ga=null,Qt=null,qh=0,Es=1/0,li=null,kl=!1,hu=null,Wi=null,fo=!1,ji=null,Nl=0,va=0,fu=null,Zo=-1,Qo=0;function Xt(){return Qe&6?bt():Zo!==-1?Zo:Zo=bt()}function qi(t){return t.mode&1?Qe&2&&Pt!==0?Pt&-Pt:eb.transition!==null?(Qo===0&&(Qo=z0()),Qo):(t=rt,t!==0||(t=window.event,t=t===void 0?16:X0(t.type)),t):1}function Bn(t,e,n,i){if(50<va)throw va=0,fu=null,Error(oe(185));ja(t,n,i),(!(Qe&2)||t!==Nt)&&(t===Nt&&(!(Qe&2)&&(Ql|=n),Et===4&&Fi(t,Pt)),rn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Es=bt()+500,$l&&ir()))}function rn(t,e){var n=t.callbackNode;e_(t,e);var i=fl(t,t===Nt?Pt:0);if(i===0)n!==null&&Hf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hf(n),e===1)t.tag===0?J_(Lp.bind(null,t)):hx(Lp.bind(null,t)),Y_(function(){!(Qe&6)&&ir()}),n=null;else{switch(B0(i)){case 1:n=vh;break;case 4:n=O0;break;case 16:n=hl;break;case 536870912:n=j0;break;default:n=hl}n=dg(n,ig.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ig(t,e){if(Zo=-1,Qo=0,Qe&6)throw Error(oe(327));var n=t.callbackNode;if(ms()&&t.callbackNode!==n)return null;var i=fl(t,t===Nt?Pt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Rl(t,i);else{e=i;var r=Qe;Qe|=2;var s=sg();(Nt!==t||Pt!==e)&&(li=null,Es=bt()+500,wr(t,e));do try{_b();break}catch(l){rg(t,l)}while(!0);Rh(),Al.current=s,Qe=r,wt!==null?e=0:(Nt=null,Pt=0,e=Et)}if(e!==0){if(e===2&&(r=zd(t),r!==0&&(i=r,e=pu(t,r))),e===1)throw n=Da,wr(t,0),Fi(t,i),rn(t,bt()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!vb(r)&&(e=Rl(t,i),e===2&&(s=zd(t),s!==0&&(i=s,e=pu(t,s))),e===1))throw n=Da,wr(t,0),Fi(t,i),rn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:fr(t,Qt,li);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=qh+500-bt(),10<e)){if(fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$d(fr.bind(null,t,Qt,li),e);break}fr(t,Qt,li);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*gb(i/1960))-i,10<i){t.timeoutHandle=$d(fr.bind(null,t,Qt,li),i);break}fr(t,Qt,li);break;case 5:fr(t,Qt,li);break;default:throw Error(oe(329))}}}return rn(t,bt()),t.callbackNode===n?ig.bind(null,t):null}function pu(t,e){var n=ga;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Rl(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&mu(e)),t}function mu(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function vb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~Wh,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function Lp(t){if(Qe&6)throw Error(oe(327));ms();var e=fl(t,0);if(!(e&1))return rn(t,bt()),null;var n=Rl(t,e);if(t.tag!==0&&n===2){var i=zd(t);i!==0&&(e=i,n=pu(t,i))}if(n===1)throw n=Da,wr(t,0),Fi(t,e),rn(t,bt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,Qt,li),rn(t,bt()),null}function Xh(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Es=bt()+500,$l&&ir())}}function kr(t){ji!==null&&ji.tag===0&&!(Qe&6)&&ms();var e=Qe;Qe|=1;var n=Tn.transition,i=rt;try{if(Tn.transition=null,rt=1,t)return t()}finally{rt=i,Tn.transition=n,Qe=e,!(Qe&6)&&ir()}}function $h(){un=ls.current,pt(ls)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$_(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Ah(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vl();break;case 3:ws(),pt(tn),pt(Vt),Uh();break;case 5:Fh(i);break;case 4:ws();break;case 13:pt(xt);break;case 19:pt(xt);break;case 10:Ph(i.type._context);break;case 22:case 23:$h()}n=n.return}if(Nt=t,wt=t=Xi(t.current,null),Pt=un=e,Et=0,Da=null,Wh=Ql=Ar=0,Qt=ga=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}yr=null}return t}function rg(t,e){do{var n=wt;try{if(Rh(),$o.current=Cl,Tl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(Cr=0,kt=Mt=gt=null,ma=!1,Pa=0,Gh.current=null,n===null||n.return===null){Et=1,Da=e,wt=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=Pt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=l,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=bp(a);if(m!==null){m.flags&=-257,Sp(m,a,l,s,e),m.mode&1&&_p(s,d,e),e=m,c=d;var g=e.updateQueue;if(g===null){var b=new Set;b.add(c),e.updateQueue=b}else g.add(c);break e}else{if(!(e&1)){_p(s,d,e),Yh();break e}c=Error(oe(426))}}else if(mt&&l.mode&1){var x=bp(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Sp(x,a,l,s,e),kh(Ms(c,l));break e}}s=c=Ms(c,l),Et!==4&&(Et=2),ga===null?ga=[s]:ga.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Bx(s,c,e);pp(s,f);break e;case 1:l=c;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Wi===null||!Wi.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=Hx(s,l,e);pp(s,v);break e}}s=s.return}while(s!==null)}og(n)}catch(A){e=A,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function sg(){var t=Al.current;return Al.current=Cl,t===null?Cl:t}function Yh(){(Et===0||Et===3||Et===2)&&(Et=4),Nt===null||!(Ar&268435455)&&!(Ql&268435455)||Fi(Nt,Pt)}function Rl(t,e){var n=Qe;Qe|=2;var i=sg();(Nt!==t||Pt!==e)&&(li=null,wr(t,e));do try{yb();break}catch(r){rg(t,r)}while(!0);if(Rh(),Qe=n,Al.current=i,wt!==null)throw Error(oe(261));return Nt=null,Pt=0,Et}function yb(){for(;wt!==null;)ag(wt)}function _b(){for(;wt!==null&&!Wy();)ag(wt)}function ag(t){var e=cg(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?og(t):wt=e,Gh.current=null}function og(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fb(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,wt=null;return}}else if(n=hb(n,e,un),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Et===0&&(Et=5)}function fr(t,e,n){var i=rt,r=Tn.transition;try{Tn.transition=null,rt=1,bb(t,e,n,i)}finally{Tn.transition=r,rt=i}return null}function bb(t,e,n,i){do ms();while(ji!==null);if(Qe&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(t_(t,s),t===Nt&&(wt=Nt=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,dg(hl,function(){return ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var a=rt;rt=1;var l=Qe;Qe|=4,Gh.current=null,mb(t,n),tg(n,t),B_(qd),pl=!!Wd,qd=Wd=null,t.current=n,xb(n),qy(),Qe=l,rt=a,Tn.transition=s}else t.current=n;if(fo&&(fo=!1,ji=t,Nl=r),s=t.pendingLanes,s===0&&(Wi=null),Yy(n.stateNode),rn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kl)throw kl=!1,t=hu,hu=null,t;return Nl&1&&t.tag!==0&&ms(),s=t.pendingLanes,s&1?t===fu?va++:(va=0,fu=t):va=0,ir(),null}function ms(){if(ji!==null){var t=B0(Nl),e=Tn.transition,n=rt;try{if(Tn.transition=null,rt=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Nl=0,Qe&6)throw Error(oe(331));var r=Qe;for(Qe|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(be=d;be!==null;){var u=be;switch(u.tag){case 0:case 11:case 15:xa(8,u,s)}var p=u.child;if(p!==null)p.return=u,be=p;else for(;be!==null;){u=be;var h=u.sibling,m=u.return;if(Qx(u),u===d){be=null;break}if(h!==null){h.return=m,be=h;break}be=m}}}var g=s.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var x=b.sibling;b.sibling=null,b=x}while(b!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,be=f;break e}be=s.return}}var _=t.current;for(be=_;be!==null;){a=be;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,be=y;else e:for(a=_;be!==null;){if(l=be,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Zl(9,l)}}catch(A){_t(l,l.return,A)}if(l===a){be=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,be=v;break e}be=l.return}}if(Qe=r,ir(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Vl,t)}catch{}i=!0}return i}finally{rt=n,Tn.transition=e}}return!1}function Dp(t,e,n){e=Ms(n,e),e=Bx(t,e,1),t=Gi(t,e,1),e=Xt(),t!==null&&(ja(t,1,e),rn(t,e))}function _t(t,e,n){if(t.tag===3)Dp(t,t,n);else for(;e!==null;){if(e.tag===3){Dp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){t=Ms(n,t),t=Hx(e,t,1),e=Gi(e,t,1),t=Xt(),e!==null&&(ja(e,1,t),rn(e,t));break}}e=e.return}}function Sb(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Pt&n)===n&&(Et===4||Et===3&&(Pt&130023424)===Pt&&500>bt()-qh?wr(t,0):Wh|=n),rn(t,e)}function lg(t,e){e===0&&(t.mode&1?(e=no,no<<=1,!(no&130023424)&&(no=4194304)):e=1);var n=Xt();t=yi(t,e),t!==null&&(ja(t,e,n),rn(t,n))}function wb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lg(t,n)}function Mb(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),lg(t,n)}var cg;cg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,ub(t,e,n);en=!!(t.flags&131072)}else en=!1,mt&&e.flags&1048576&&fx(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ko(t,e),t=e.pendingProps;var r=_s(e,Vt.current);ps(e,n),r=jh(null,e,i,t,r,n);var s=zh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,yl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Lh(e),r.updater=Kl,e.stateNode=r,r._reactInternals=e,tu(e,i,t,n),e=ru(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&Ch(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ko(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Tb(i),t=Dn(i,t),r){case 0:e=iu(null,e,i,t,n);break e;case 1:e=Ep(null,e,i,t,n);break e;case 11:e=wp(null,e,i,t,n);break e;case 14:e=Mp(null,e,i,Dn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),iu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Ep(t,e,i,r,n);case 3:e:{if(qx(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yx(t,e),Ml(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ms(Error(oe(423)),e),e=Tp(t,e,i,n,r);break e}else if(i!==r){r=Ms(Error(oe(424)),e),e=Tp(t,e,i,n,r);break e}else for(fn=Vi(e.stateNode.containerInfo.firstChild),pn=e,mt=!0,Un=null,n=gx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),i===r){e=_i(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return _x(e),t===null&&Qd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Xd(i,r)?a=null:s!==null&&Xd(i,s)&&(e.flags|=32),Wx(t,e),Wt(t,e,a,n),e.child;case 6:return t===null&&Qd(e),null;case 13:return Xx(t,e,n);case 4:return Dh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),wp(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ct(Sl,i._currentValue),i._currentValue=a,s!==null)if(Gn(s.value,a)){if(s.children===r.children&&!tn.current){e=_i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=mi(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Jd(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Jd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ps(e,n),r=Cn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),Mp(t,e,i,r,n);case 15:return Vx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Ko(t,e),e.tag=1,nn(i)?(t=!0,yl(e)):t=!1,ps(e,n),zx(e,i,r),tu(e,i,r,n),ru(null,e,i,!0,t,n);case 19:return $x(t,e,n);case 22:return Gx(t,e,n)}throw Error(oe(156,e.tag))};function dg(t,e){return U0(t,e)}function Eb(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new Eb(t,e,n,i)}function Kh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tb(t){if(typeof t=="function")return Kh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mh)return 11;if(t===xh)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Kh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Qr:return Mr(n.children,r,s,e);case ph:a=8,r|=8;break;case Ed:return t=Mn(12,n,e,r|2),t.elementType=Ed,t.lanes=s,t;case Td:return t=Mn(13,n,e,r),t.elementType=Td,t.lanes=s,t;case Cd:return t=Mn(19,n,e,r),t.elementType=Cd,t.lanes=s,t;case _0:return Jl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v0:a=10;break e;case y0:a=9;break e;case mh:a=11;break e;case xh:a=14;break e;case Ii:a=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Mn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Mr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function Jl(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=_0,t.lanes=n,t.stateNode={isHidden:!1},t}function jc(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function zc(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Cb(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zh(t,e,n,i,r,s,a,l,c){return t=new Cb(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lh(s),t}function Ab(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ug(t){if(!t)return Zi;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(nn(n))return ux(t,n,e)}return e}function hg(t,e,n,i,r,s,a,l,c){return t=Zh(n,i,!0,t,r,s,a,l,c),t.context=ug(null),n=t.current,i=Xt(),r=qi(n),s=mi(i,r),s.callback=e??null,Gi(n,s,r),t.current.lanes=r,ja(t,r,i),rn(t,i),t}function ec(t,e,n,i){var r=e.current,s=Xt(),a=qi(r);return n=ug(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Gi(r,e,a),t!==null&&(Bn(t,r,a,s),Xo(t,r,a)),a}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qh(t,e){Fp(t,e),(t=t.alternate)&&Fp(t,e)}function kb(){return null}var fg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jh(t){this._internalRoot=t}tc.prototype.render=Jh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));ec(t,e,null,null)};tc.prototype.unmount=Jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){ec(null,t,null,null)}),e[vi]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=G0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Di.length&&e!==0&&e<Di[n].priority;n++);Di.splice(n,0,t),n===0&&q0(t)}};function ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function Nb(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var d=Pl(a);s.call(d)}}var a=hg(e,i,t,0,null,!1,!1,"",Up);return t._reactRootContainer=a,t[vi]=a.current,Ca(t.nodeType===8?t.parentNode:t),kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var d=Pl(c);l.call(d)}}var c=Zh(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=c,t[vi]=c.current,Ca(t.nodeType===8?t.parentNode:t),kr(function(){ec(e,c,n,i)}),c}function ic(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var l=r;r=function(){var c=Pl(a);l.call(c)}}ec(e,a,t,r)}else a=Nb(n,e,t,r,i);return Pl(a)}H0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(yh(e,n|1),rn(e,bt()),!(Qe&6)&&(Es=bt()+500,ir()))}break;case 13:kr(function(){var i=yi(t,1);if(i!==null){var r=Xt();Bn(i,t,1,r)}}),Qh(t,1)}};_h=function(t){if(t.tag===13){var e=yi(t,134217728);if(e!==null){var n=Xt();Bn(e,t,134217728,n)}Qh(t,134217728)}};V0=function(t){if(t.tag===13){var e=qi(t),n=yi(t,e);if(n!==null){var i=Xt();Bn(n,t,e,i)}Qh(t,e)}};G0=function(){return rt};W0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Ud=function(t,e,n){switch(e){case"input":if(Nd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xl(i);if(!r)throw Error(oe(90));S0(i),Nd(i,r)}}}break;case"textarea":M0(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};R0=Xh;P0=kr;var Rb={usingClientEntryPoint:!1,Events:[Ba,ns,Xl,k0,N0,Xh]},Ys={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pb={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=D0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||kb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{Vl=po.inject(Pb),Zn=po}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rb;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(e))throw Error(oe(200));return Ab(t,e,null,n)};gn.createRoot=function(t,e){if(!ef(t))throw Error(oe(299));var n=!1,i="",r=fg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zh(t,1,!1,null,null,n,!1,i,r),t[vi]=e.current,Ca(t.nodeType===8?t.parentNode:t),new Jh(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=D0(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return kr(t)};gn.hydrate=function(t,e,n){if(!nc(e))throw Error(oe(200));return ic(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!ef(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=fg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=hg(e,null,t,1,n??null,r,!1,s,a),t[vi]=e.current,Ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new tc(e)};gn.render=function(t,e,n){if(!nc(e))throw Error(oe(200));return ic(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!nc(t))throw Error(oe(40));return t._reactRootContainer?(kr(function(){ic(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1};gn.unstable_batchedUpdates=Xh;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!nc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return ic(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function pg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pg)}catch(t){console.error(t)}}pg(),p0.exports=gn;var Ib=p0.exports,Op=Ib;wd.createRoot=Op.createRoot,wd.hydrateRoot=Op.hydrateRoot;const xu="srmist_virtual_os_lab_progress_v1",mo={completedExperiments:["exp-fcfs","exp-fifo-page"],bookmarkedExperiments:["exp-rr","exp-bankers"],quizScores:{"exp-fcfs":100,"exp-fifo-page":80},completedChallenges:["chal-rr-quantum"],xp:350,badges:["Scheduler","Paging Explorer"],streakDays:3,lastVisitedExperiment:"exp-fcfs",theme:"dark"},Il=()=>{try{const t=localStorage.getItem(xu);return t?{...mo,...JSON.parse(t)}:(localStorage.setItem(xu,JSON.stringify(mo)),mo)}catch(t){return console.warn("localStorage not accessible, using default state",t),mo}},Ll=t=>{try{localStorage.setItem(xu,JSON.stringify(t))}catch(e){console.warn("Failed to save to localStorage",e)}},Lb=(t,e=50)=>{const n=Il(),i=new Set(n.completedExperiments);i.add(t);const r=new Set(n.badges);i.has("exp-fcfs")&&i.has("exp-rr")&&r.add("Scheduler"),i.has("exp-bankers")&&r.add("Deadlock Detective"),(i.has("exp-first-fit")||i.has("exp-best-fit"))&&r.add("Memory Master"),(i.has("exp-fifo-page")||i.has("exp-lru-page"))&&r.add("Paging Explorer"),(i.has("exp-producer-consumer")||i.has("exp-dining-phil"))&&r.add("Synchronization Pro"),(i.has("exp-disk-fcfs")||i.has("exp-disk-scan"))&&r.add("Disk Master");const s={...n,completedExperiments:Array.from(i),badges:Array.from(r),xp:n.xp+e,lastVisitedExperiment:t};return Ll(s),s},Db=t=>{const e=Il(),n=new Set(e.bookmarkedExperiments);n.has(t)?n.delete(t):n.add(t);const i={...e,bookmarkedExperiments:Array.from(n)};return Ll(i),i};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ub(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Fb(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=t=>{const e=Ob(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Bc(t){return t!=null}function zb(t,e={}){var h,m;const n=e.attributeNames??{},i=g=>n[g]??g,r=t.size??t.width??sr.width,s=t.size??t.height??sr.height,a=((h=t.aliases)==null?void 0:h.filter(g=>typeof g=="string"&&g.trim()!=="").map(g=>`lucide-${g}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...a],c=((m=e.className)==null?void 0:m.split(" ").filter(Boolean))??[],d=e.includeDefaultClasses===!1?gu(...c):gu("lucide",...l,...c),u=e.absoluteStrokeWidth?Number(e.strokeWidth??sr["stroke-width"])*Number(t.size??t.width??sr.width)/Number(e.size??e.width??sr.width):e.strokeWidth??sr["stroke-width"];return["svg",{...Object.entries(sr).reduce((g,[b,x])=>(g[i(b)]=x,g),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&Bc(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&Bc(e.width)&&{[i("width")]:e.width},..."height"in e&&Bc(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:u,...d&&{[i("class")]:d},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(g=>{const[b,x,f]=g,_=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...x}:x;return f?[b,_,f]:[b,_]})]}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Bb(t,e={}){return zb(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Vb=ae.createContext({}),Gb=()=>ae.useContext(Vb),Wb=ae.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:l="",children:c,iconNode:d=[],icon:u={node:d,aliases:[],size:24},...p},h)=>{const{size:m=24,strokeWidth:g=2,absoluteStrokeWidth:b=!1,nonScalingStroke:x=!1,color:f="currentColor",className:_=""}=Gb()??{},y=!!c||Hb(p),[v,A,M=[]]=Bb(u,{color:t??f,width:n??e??m,height:i??e??m,strokeWidth:r??g,absoluteStrokeWidth:s??b,nonScalingStroke:a??x,className:gu(_,l),hasA11yProp:y,attributes:p});return ae.createElement(v,{ref:h,...A},[...M.map(([w,k])=>ae.createElement(w,k)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ie(t,e=[],n=[]){const i=typeof t=="string"?Ub(t,e,n):t,r=ae.forwardRef(({className:s,...a},l)=>ae.createElement(Wb,{ref:l,icon:i,className:s,...a}));return i.name&&(r.displayName=jb(i.name)),r}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};mg.node;const xg=Ie(mg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};gg.node;const Bt=Ie(gg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};vg.node;const tf=Ie(vg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};yg.node;const _g=Ie(yg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"bookmark",size:24,node:[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]]};bg.node;const nf=Ie(bg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"building-complex",size:24,node:[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],aliases:["building-2"]};Sg.node;const qb=Ie(Sg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"chart-column",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],aliases:["bar-chart-3"]};wg.node;const rf=Ie(wg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Mg.node;const sf=Ie(Mg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Eg.node;const Xb=Ie(Eg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};Tg.node;const $b=Ie(Tg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Cg.node;const bi=Ie(Cg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};Ag.node;const Ts=Ie(Ag);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};kg.node;const Yb=Ie(kg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"circle",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]};Ng.node;const Kb=Ie(Ng);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Rg.node;const Pg=Ie(Rg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"code",size:24,node:[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]};Ig.node;const jp=Ie(Ig);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"command",size:24,node:[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]};Lg.node;const Zb=Ie(Lg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Dg.node;const Qb=Ie(Dg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};Fg.node;const af=Ie(Fg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"dices",size:24,node:[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]};Ug.node;const rc=Ie(Ug);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"disc",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Og.node;const jg=Ie(Og);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};zg.node;const Jb=Ie(zg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Bg.node;const eS=Ie(Bg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};Hg.node;const tS=Ie(Hg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg={name:"flask-conical",size:24,node:[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]};Vg.node;const nS=Ie(Vg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"folder-tree",size:24,node:[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]};Gg.node;const iS=Ie(Gg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};Wg.node;const qg=Ie(Wg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"graduation-cap",size:24,node:[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]};Xg.node;const rS=Ie(Xg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};$g.node;const Yg=Ie($g);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};Kg.node;const sS=Ie(Kg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Zg.node;const Dl=Ie(Zg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg={name:"list-checks",size:24,node:[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]]};Qg.node;const aS=Ie(Qg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg={name:"minus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}]]};Jg.node;const oS=Ie(Jg);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};ev.node;const lS=Ie(ev);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};tv.node;const cS=Ie(tv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};nv.node;const iv=Ie(nv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};rv.node;const sv=Ie(rv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};av.node;const Qi=Ie(av);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};ov.node;const of=Ie(ov);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};lv.node;const dS=Ie(lv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv={name:"skip-back",size:24,node:[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]};cv.node;const uS=Ie(cv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv={name:"skip-forward",size:24,node:[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]};dv.node;const hS=Ie(dv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};uv.node;const sc=Ie(uv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};hv.node;const fS=Ie(hv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};fv.node;const ac=Ie(fv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};pv.node;const pS=Ie(pv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};mv.node;const xv=Ie(mv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};gv.node;const oc=Ie(gv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};vv.node;const mS=Ie(vv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};yv.node;const lc=Ie(yv);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};_v.node;const xS=Ie(_v),jt=[{id:"exp-linux-commands",moduleId:"linux",title:"Linux File & Directory Navigation Commands",category:"Linux & UNIX",difficulty:"Beginner",estimatedTime:"20 mins",coMapping:"CO1",objective:"To master foundational Linux/UNIX terminal commands for directory navigation, file creation, viewing, and searching.",learningOutcomes:["Navigate the hierarchical Linux filesystem using pwd, cd, and ls.","Create, copy, move, and remove files using touch, mkdir, cp, mv, and rm.","Inspect and filter text files using cat, head, tail, and grep."],prerequisites:["Basic computer literacy","Concept of files and directories"],keyConcepts:["Absolute vs Relative Paths","Piping (|)","Wildcards (*, ?)","Standard Input/Output"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"The Linux command-line shell provides direct access to the operating system kernel. Commands like ls, cd, cat, and grep form the essential toolkit for systems programming.",definition:"A shell is a command language interpreter that executes commands read from standard input devices or from files.",whyItMatters:"Every systems software developer, DevOps engineer, and researcher relies on shell commands for automated file manipulation and server administration.",howItWorks:"The shell parses user input, resolves the binary executable from PATH environment variables, forks a child process, executes the command, and returns the exit code.",formulas:[{name:"Command Syntax",formula:"command [options] [arguments]",explanation:"Standard POSIX syntax for invoking shell utilities."}],commonMistakes:["Confusing absolute paths (starting with /) with relative paths.","Using rm -rf without verifying the target path.","Overwriting files unintentionally with > instead of appending with >>."]},algorithmSteps:["Step 1: Open terminal shell prompt.","Step 2: Inspect current directory with pwd.","Step 3: List files with detailed permissions using ls -la.","Step 4: Create new directory and navigate into it using mkdir and cd.","Step 5: Create a file with touch and display its content with cat."]},{id:"exp-linux-permissions",moduleId:"linux",title:"File Permissions & Access Control (chmod, chown)",category:"Linux & UNIX",difficulty:"Beginner",estimatedTime:"25 mins",coMapping:"CO1",objective:"To understand and configure Linux file permissions (read, write, execute) for user, group, and others using numeric and symbolic notation.",learningOutcomes:["Interpret file mode strings (e.g. -rwxr-xr-x).","Calculate octal permission values (e.g. 755, 644).","Modify permissions and ownership using chmod and chown."],prerequisites:["Binary to octal conversion","User and group accounts in UNIX"],keyConcepts:["Read (r=4)","Write (w=2)","Execute (x=1)","Octal Mode","Symbolic Mode (u, g, o)"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"UNIX uses a discretionary access control model where every file has distinct read, write, and execute permissions for the owner, the owning group, and others.",definition:"File permissions regulate which users can read (4), write (2), or execute (1) a given file or directory.",whyItMatters:"Protects critical system binaries and sensitive student records from unauthorized modification or execution.",howItWorks:"Permissions are represented as a 9-bit bitmask split into 3 triplets: User (rwx), Group (rwx), and Others (rwx).",formulas:[{name:"Octal Permission Calculation",formula:"Permission = (r * 4) + (w * 2) + (x * 1)",explanation:"Read = 4, Write = 2, Execute = 1. Example: rwx = 4+2+1 = 7."}],commonMistakes:["Setting chmod 777 on sensitive files as a shortcut to fix permission errors.","Forgetting that directory execution (x) permission is required to cd into it."]},algorithmSteps:["Step 1: View permissions of existing file using ls -l.","Step 2: Calculate target octal code (e.g., 755 for executables).","Step 3: Execute chmod <octal> <filename>.","Step 4: Verify modified permissions with ls -l."]},{id:"exp-linux-scripts",moduleId:"linux",title:"Bash Shell Scripting & Automated System Calls",category:"Linux & UNIX",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO1",objective:"To write and execute automated Bash shell scripts utilizing variables, conditional branches (if-else), and loops (for, while).",learningOutcomes:["Create executable Bash scripts with proper shebang (#!/bin/bash).","Implement conditional logic with if, elif, and test brackets [ ].","Automate repetitive tasks using for and while loops."],prerequisites:["Basic Linux commands","Variables and arithmetic"],keyConcepts:["Shebang (#!/bin/bash)","Positional Parameters ($1, $2)","Exit Status ($?)","Test Operators (-eq, -f, -d)"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"Shell scripting combines individual Linux commands into powerful executable scripts for systems management, automated backups, and batch processing.",definition:"A shell script is a text file containing a sequence of commands for a UNIX-based operating system.",whyItMatters:"Automation of administrative tasks, CI/CD pipelines, and systems programming heavily relies on shell scripting.",howItWorks:"The operating system reads the shebang line, spawns the specified interpreter, and executes lines sequentially with flow control.",formulas:[{name:"Exit Code Invariant",formula:"Exit Code 0 = Success, Exit Code > 0 = Error",explanation:"Scripts return $? to report success or failure to parent processes."}],commonMistakes:["Missing spaces around square brackets in if [ $a -eq $b ].","Forgetting to grant execution permission with chmod +x script.sh."]},algorithmSteps:["Step 1: Create script file with #!/bin/bash header.","Step 2: Define variables and prompt user input.","Step 3: Add conditional validation and loop iteration.","Step 4: Make script executable with chmod +x script.sh and run with ./script.sh."]},{id:"exp-process-lifecycle",moduleId:"process",title:"Process Lifecycle & Process Creation using fork()",category:"Process Management",difficulty:"Beginner",estimatedTime:"25 mins",coMapping:"CO1, CO2",objective:"To simulate process state transitions (New, Ready, Running, Waiting, Terminated) and understand UNIX process creation using the fork() system call.",learningOutcomes:["Trace process state transitions through the five-state lifecycle model.","Understand how fork() duplicates the calling process address space.","Distinguish parent and child processes using the return value of fork()."],prerequisites:["C programming basics","Memory layout of C programs"],keyConcepts:["Process Control Block (PCB)","PID & PPID","fork() Return Values","Zombie & Orphan Processes"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"A process is a program in execution. The fork() system call creates a new child process by duplicating the parent. The child receives PID 0 from fork(), while the parent receives the child PID.",definition:"fork() is the primary UNIX system call used to create a new process by duplicating the calling process.",whyItMatters:"Every process in Linux (except the root init/systemd process) is created via fork() or clone().",howItWorks:"The kernel allocates a new PCB, copies page tables in copy-on-write mode, and returns twice: once to the parent and once to the child.",formulas:[{name:"fork() Return Value",formula:"rc < 0 (Error), rc == 0 (Child), rc > 0 (Parent receives Child PID)",explanation:"Enables conditional branching for concurrent execution."}],commonMistakes:["Assuming parent and child share mutable variables after fork (they have separate address spaces).","Creating a fork bomb by invoking fork() inside an infinite loop without exit conditions."]},algorithmSteps:["Step 1: Include <unistd.h> and <sys/types.h>.","Step 2: Call pid_t pid = fork().","Step 3: If pid < 0, handle fork failure.","Step 4: If pid == 0, execute child-specific code.","Step 5: If pid > 0, execute parent-specific code."]},{id:"exp-process-wait-exec",moduleId:"process",title:"Process Synchronization using wait() and exec()",category:"Process Management",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO2",objective:"To implement parent-child process synchronization using wait() and replace process images using the exec() family of system calls.",learningOutcomes:["Prevent zombie processes by reaping terminated children with wait().","Load new binaries into process address spaces using execvp().","Analyze exit status codes passed from child to parent."],prerequisites:["fork() system call","Process termination"],keyConcepts:["wait(&status)","execvp()","Zombie Reaping","Process Image Replacement"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"The wait() system call blocks the parent process until one of its child processes terminates. The exec() family replaces the current process address space with a new executable program.",definition:"wait() synchronizes parent execution with child termination, while exec() overwrites the process text, data, and stack segments with a new program.",whyItMatters:"Forms the foundational architecture of command shells (e.g. bash), which fork a child and exec the requested command.",howItWorks:"When exec() succeeds, it never returns to the calling code because the old program memory image is completely replaced.",formulas:[{name:"WIFEXITED Status Check",formula:"WIFEXITED(status) && WEXITSTATUS(status)",explanation:"POSIX macros to inspect whether child exited normally and retrieve its exit code."}],commonMistakes:["Placing code after execvp() expecting it to run (execvp only returns on failure).","Neglecting wait() causing child processes to become zombies."]},algorithmSteps:["Step 1: Parent calls fork().",'Step 2: Child process calls execvp("ls", args).',"Step 3: Parent process calls wait(&status) to block until child completes.","Step 4: Parent inspects child return status using WEXITSTATUS(status)."]},{id:"exp-threads",moduleId:"process",title:"POSIX Threads (pthreads) Concurrency vs Processes",category:"Process Management",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO2",objective:"To implement multithreaded programs using POSIX pthreads and compare shared-memory thread concurrency with separate-memory process concurrency.",learningOutcomes:["Spawn concurrent threads with pthread_create().","Join threads and synchronize completion with pthread_join().","Observe race conditions on unprotected shared memory."],prerequisites:["C pointers and structs","Process memory layout"],keyConcepts:["Thread vs Process","pthread_create","pthread_join","Shared Address Space","Race Condition"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"Threads are lightweight execution units within a single process that share code, data, and heap segments, but maintain independent stacks and register sets.",definition:"A thread is a basic unit of CPU utilization, comprising a thread ID, a program counter, a register set, and a stack.",whyItMatters:"Threads offer significantly lower context-switching overhead and faster inter-thread communication than heavy processes.",howItWorks:"Threads share global variables directly, requiring synchronization primitives (mutex/semaphores) to prevent race conditions.",formulas:[{name:"Context Switch Overhead",formula:"Overhead(Thread) << Overhead(Process)",explanation:"Threads share virtual memory address spaces, avoiding TLB invalidation during context switches."}],commonMistakes:["Passing pointers to loop variables into pthread_create leading to race conditions.","Failing to pthread_join resulting in premature thread termination when main returns."]},algorithmSteps:["Step 1: Define thread worker function void* worker(void* arg).","Step 2: Declare pthread_t thread identifier.","Step 3: Create thread using pthread_create(&tid, NULL, worker, arg).","Step 4: Await thread completion using pthread_join(tid, NULL)."]},{id:"exp-fcfs",moduleId:"cpu-scheduling",title:"First-Come, First-Served (FCFS) CPU Scheduling",category:"CPU Scheduling",difficulty:"Beginner",estimatedTime:"25 mins",coMapping:"CO2",objective:"To implement the non-preemptive First-Come, First-Served (FCFS) CPU scheduling algorithm and calculate average waiting time and turnaround time.",learningOutcomes:["Understand how FIFO queues govern non-preemptive process dispatch.","Construct Gantt charts from arrival and burst times.","Analyze the Convoy Effect where short processes wait behind long CPU-bound processes."],prerequisites:["Basic process concepts","Arrival time vs Burst time","Gantt chart representation"],keyConcepts:["Ready Queue","Burst Time","Turnaround Time (TAT)","Waiting Time (WT)","Convoy Effect"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"FCFS schedules processes in strict order of their arrival in the ready queue. It is simple and non-preemptive, but suffers from high average waiting times due to the convoy effect.",definition:"First-Come, First-Served (FCFS) is an operating system scheduling algorithm that automatically executes queued requests and processes in order of their arrival.",whyItMatters:"FCFS is the foundational baseline against which all modern scheduling algorithms (SJF, SRTF, Round Robin) are benchmarked.",howItWorks:"The process that requests the CPU first is allocated the CPU first via a standard FIFO queue. Once a process gets the CPU, it runs to completion without interruption.",formulas:[{name:"Turnaround Time (TAT)",formula:"TAT = Completion Time - Arrival Time",explanation:"The entire elapsed interval from process arrival to complete execution."},{name:"Waiting Time (WT)",formula:"WT = Turnaround Time - Burst Time",explanation:"The total time a process spends waiting in the ready queue."},{name:"Average Waiting Time",formula:"Avg WT = (Σ WT) / n",explanation:"Sum of all waiting times divided by the total number of processes."}],commonMistakes:["Confusing Arrival Time with Burst Time when ordering processes in the Gantt chart.","Neglecting idle CPU intervals when no process has arrived yet.","Calculating Waiting Time directly as Completion Time minus Burst Time without subtracting Arrival Time."]},algorithmSteps:["Step 1: Input processes with Arrival Times (AT) and Burst Times (BT).","Step 2: Sort processes according to Arrival Times.","Step 3: Initialize currentTime = 0.","Step 4: If currentTime < ATi, advance currentTime = ATi (CPU idle).","Step 5: Completion Time CTi = currentTime + BTi.","Step 6: Update currentTime = CTi, compute TATi and WTi.","Step 7: Output Gantt chart and average metrics."]},{id:"exp-sjf",moduleId:"cpu-scheduling",title:"Shortest Job First (SJF) Scheduling (Non-Preemptive)",category:"CPU Scheduling",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO2",objective:"To implement the non-preemptive Shortest Job First scheduling algorithm and examine its optimality for minimizing average waiting time.",learningOutcomes:["Understand how greedy selection of minimum burst time optimizes average waiting time.","Analyze tie-breaking using arrival time.","Examine starvation risks for long burst processes."],prerequisites:["FCFS scheduling","Process state transitions"],keyConcepts:["Optimal Average Waiting Time","Non-preemptive Dispatch","Starvation","Burst Time Estimation"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"SJF associates with each process the length of its next CPU burst. The CPU is allocated to the process with the smallest burst time among all arrived processes.",definition:"Shortest Job First (SJF) is a scheduling policy that selects the waiting process with the smallest execution time to execute next.",whyItMatters:"SJF is provably optimal in minimizing the average waiting time for a given set of stationary processes.",howItWorks:"At any scheduling decision point, examine all processes in the ready queue. Select the one with lowest burst time.",formulas:[{name:"Optimality Proof",formula:"Avg WT(SJF) <= Avg WT(Any Non-preemptive Algorithm)",explanation:"Moving shorter processes ahead reduces cumulative waiting time."}],commonMistakes:["Selecting a process that has not arrived yet just because it has a smaller burst time.","Preempting an already running process in non-preemptive SJF."]},algorithmSteps:["Step 1: Read all processes (AT, BT).","Step 2: Initialize currentTime = 0, completedCount = 0.","Step 3: Filter arrived, uncompleted processes.","Step 4: Pick process with minimum Burst Time.","Step 5: Run to completion: currentTime += BT, record CT, TAT, WT.","Step 6: Repeat until all processes finish."]},{id:"exp-srtf",moduleId:"cpu-scheduling",title:"Shortest Remaining Time First (SRTF Preemptive SJF)",category:"CPU Scheduling",difficulty:"Intermediate",estimatedTime:"35 mins",coMapping:"CO2",objective:"To simulate preemptive SJF (SRTF) where a currently running process is preempted if a newly arrived process has a shorter remaining burst time.",learningOutcomes:["Master preemptive CPU scheduling mechanics.","Construct multi-segment Gantt charts with process interruptions.","Track dynamic remaining burst times at each clock tick."],prerequisites:["SJF scheduling","Concept of preemption"],keyConcepts:["Remaining Burst Time","Preemption Interrupt","Response Time vs Waiting Time"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"SRTF is the preemptive version of SJF. At each time unit, the scheduler compares the remaining time of the running process with newly arrived jobs.",definition:"Shortest Remaining Time First (SRTF) preempts the executing process whenever another process arrives with a shorter remaining burst time.",whyItMatters:"Delivers superior response time for short interactive jobs compared to non-preemptive SJF.",howItWorks:"The scheduler evaluates the ready queue continuously at every arrival event or unit time step.",formulas:[{name:"Preemption Condition",formula:"BT(New_Arrival) < Remaining_BT(Running_Process)",explanation:"Triggers context switch to the new arrival."}],commonMistakes:["Failing to decrement the remaining burst time of the currently executing process.","Forgetting that Response Time is recorded at the FIRST time a process gets the CPU."]},algorithmSteps:["Step 1: Track remaining burst time for all processes.","Step 2: At each unit time t, select process with minimum remaining burst time > 0.","Step 3: Execute for 1 unit, decrement remaining burst time.","Step 4: If remaining burst time == 0, mark complete and record CT.","Step 5: Advance t and repeat until all jobs complete."]},{id:"exp-priority",moduleId:"cpu-scheduling",title:"Priority CPU Scheduling (Preemptive & Non-Preemptive)",category:"CPU Scheduling",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO2",objective:"To implement Priority CPU scheduling where the CPU is allocated to the process with the highest priority, and study aging techniques to prevent starvation.",learningOutcomes:["Map integer priority numbers to CPU scheduling order.","Analyze indefinite blocking (starvation) of low-priority processes.","Implement Aging to dynamically elevate the priority of waiting jobs."],prerequisites:["FCFS scheduling","Process priority concepts"],keyConcepts:["Priority Integer Convention","Starvation","Aging Mechanism","Preemptive vs Non-Preemptive Priority"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"Priority scheduling assigns an integer rank to each process. The CPU is allocated to the process with the highest priority (commonly, lowest integer value).",definition:"Priority scheduling is a method of scheduling processes based on priority, where higher-priority jobs execute before lower-priority jobs.",whyItMatters:"Essential for real-time systems and operating system kernels where critical system tasks take precedence over user applications.",howItWorks:"Ready processes are sorted by priority. Tie-breaking is resolved using FCFS.",formulas:[{name:"Aging Formula",formula:"Priority(t) = Priority(0) - k * Waiting_Time",explanation:"Gradually elevates priority of waiting processes to guarantee bounded waiting."}],commonMistakes:["Inverting priority convention (assuming higher number means higher priority without verifying system specs).","Failing to handle tie-breaking when two arrived processes share the same priority."]},algorithmSteps:["Step 1: Read processes with AT, BT, and Priority.","Step 2: At currentTime, inspect all arrived processes in ready queue.","Step 3: Select process with highest priority (lowest integer value).","Step 4: Run process, record CT, TAT, and WT.","Step 5: Repeat until all processes finish."]},{id:"exp-rr",moduleId:"cpu-scheduling",title:"Round Robin (RR) Scheduling with Time Quantum",category:"CPU Scheduling",difficulty:"Intermediate",estimatedTime:"35 mins",coMapping:"CO2",objective:"To analyze and simulate Round Robin scheduling and explore how the Time Quantum affects context switching, response time, and turnaround time.",learningOutcomes:["Master circular ready queue rotation with timer interrupts.","Observe the trade-off: small quantum gives fast response but high context switch overhead; large quantum degrades to FCFS.","Implement multi-pass Gantt chart generation."],prerequisites:["FCFS scheduling","Preemption concepts","Circular queues"],keyConcepts:["Time Quantum (q)","Preemption","Context Switch","Response Time","Circular Ready Queue"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"Round Robin is designed for time-sharing systems. Each process gets a small unit of CPU time (time quantum). After this, the process is preempted and added to the tail of the ready queue.",definition:"Round Robin is a preemptive scheduling algorithm where each ready process is allocated the CPU for a fixed time slice called a quantum.",whyItMatters:"Round Robin provides excellent response time for interactive users, ensuring no single process monopolizes the processor.",howItWorks:"The ready queue is treated as a FIFO ring. The CPU scheduler allocates the CPU to each process for a time interval of up to 1 time quantum.",formulas:[{name:"Quantum Rule of Thumb",formula:"80% of CPU bursts should be shorter than the time quantum (q)",explanation:"Balances interactive responsiveness against excessive context switch penalties."}],commonMistakes:["Failing to push newly arrived processes into the ready queue before returning the preempted process.","Subtracting the full quantum when a process needs less burst time than the quantum."]},algorithmSteps:["Step 1: Set time quantum q and read processes (AT, BT).","Step 2: Maintain FIFO Ready Queue and remaining burst times.","Step 3: Dequeue head process P, execute for min(q, P.remaining).","Step 4: Advance currentTime, enqueue new arrivals.","Step 5: If P.remaining > 0, re-enqueue P at tail; else record completion.","Step 6: Repeat until ready queue is empty."]},{id:"exp-producer-consumer",moduleId:"synchronization",title:"Producer-Consumer Problem using Semaphores",category:"Process Synchronization",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO2, CO3",objective:"To simulate the classical bounded-buffer Producer-Consumer synchronization problem using mutex and counting semaphores.",learningOutcomes:["Understand critical sections and mutual exclusion.","Differentiate between binary semaphores (mutex) and counting semaphores (empty, full).","Observe buffer overflow and underflow prevention."],prerequisites:["Processes vs Threads","Race conditions","Semaphore wait() and signal()"],keyConcepts:["Bounded Buffer","Counting Semaphore","Binary Mutex","Deadlock Prevention"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"The Producer generates data items and puts them into a shared buffer of fixed size. The Consumer removes items from the buffer. Semaphores ensure the producer cannot produce into a full buffer and the consumer cannot read from an empty buffer.",definition:"The Producer-Consumer (bounded-buffer) problem is a multi-process synchronization problem where two processes share a common fixed-size buffer used as a queue.",whyItMatters:"It models real-world pipeline architectures such as media streaming, audio playback buffers, and printer spooling.",howItWorks:"Three semaphores are used: mutex (1) for mutual exclusion, empty (N) counting empty slots, and full (0) counting filled slots.",formulas:[{name:"Semaphore Invariant",formula:"empty + full = N (Buffer Capacity)",explanation:"At any point, the sum of empty and full slots always equals buffer capacity."}],commonMistakes:["Swapping the order of wait(empty) and wait(mutex) causing deadlock if the buffer is full.","Allowing two consumers or producers into the critical section simultaneously without mutex."]},algorithmSteps:["Step 1: Initialize mutex = 1, empty = BUFFER_SIZE, full = 0.","Step 2: Producer: produce item -> wait(empty) -> wait(mutex) -> add to buffer -> signal(mutex) -> signal(full).","Step 3: Consumer: wait(full) -> wait(mutex) -> remove from buffer -> signal(mutex) -> signal(empty) -> consume item.","Step 4: Observe how buffer state transitions smoothly without race conditions."]},{id:"exp-dining-phil",moduleId:"synchronization",title:"Dining Philosophers Problem & Deadlock Resolution",category:"Process Synchronization",difficulty:"Advanced",estimatedTime:"35 mins",coMapping:"CO3",objective:"To demonstrate concurrent resource contention, circular wait, deadlock formation, and starvation among 5 philosophers sharing 5 forks.",learningOutcomes:["Visualize the 4 Coffman conditions required for deadlock in action.","Observe how symmetric resource acquisition produces circular wait.","Implement asymmetric or semaphore-guarded solutions that guarantee freedom from deadlock."],prerequisites:["Semaphores","Deadlock conditions","Mutual exclusion"],keyConcepts:["Circular Wait","Starvation","Asymmetric Solution","Resource Contention"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"Five philosophers sit at a circular table with 5 forks. Each philosopher alternates between thinking and eating. To eat, a philosopher requires both their left and right forks.",definition:"The Dining Philosophers problem is a classic multi-process synchronization problem illustrating deadlock and starvation in concurrent systems.",whyItMatters:"It is the quintessential metaphor for multiple processes competing for mutually exclusive shared hardware resources without centralized coordination.",howItWorks:"If every philosopher picks up their left fork simultaneously, none can acquire their right fork, resulting in permanent deadlock.",formulas:[{name:"Deadlock Condition",formula:"Circular Wait: P0 waits for F1, P1 waits for F2, ..., P4 waits for F0",explanation:"Closed loop of waiting dependencies leads to permanent system halt."}],commonMistakes:["Assuming deadlock cannot occur if philosophers eat at different speeds.","Solving deadlock but inadvertently causing starvation where one philosopher never eats."]},algorithmSteps:["Step 1: Model 5 philosophers and 5 forks (semaphores) in a circular topology.","Step 2: Philosopher i thinking -> gets hungry.","Step 3: Pick up Fork i (left) and Fork (i+1)%5 (right).","Step 4: Eat for designated duration.","Step 5: Put down both forks and return to thinking."]},{id:"exp-readers-writers",moduleId:"synchronization",title:"Readers-Writers Problem using Mutex & ReadCount",category:"Process Synchronization",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO2, CO3",objective:"To synchronize concurrent read and write access to a shared database, ensuring multiple readers can read simultaneously while writers have exclusive access.",learningOutcomes:["Implement shared-read and exclusive-write synchronization policies.","Maintain readcount and protect it using a mutex.","Analyze reader preference vs writer starvation."],prerequisites:["Binary semaphores","Mutual exclusion"],keyConcepts:["Shared Read Lock","Exclusive Write Lock","readcount Variable","Writer Starvation"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"Multiple readers can access a shared dataset simultaneously without conflicts, but if a writer accesses the data, no reader or other writer may do so concurrently.",definition:"The Readers-Writers problem is a classical synchronization problem that models concurrent access to a shared database.",whyItMatters:"Used in database transaction management, distributed file systems, and operating system kernels.",howItWorks:"The first reader acquires the write semaphore to block writers; subsequent readers increment readcount. The last reader releases the write semaphore.",formulas:[{name:"First/Last Reader Logic",formula:"if (readcount == 1) wait(wrt); ... if (readcount == 0) signal(wrt);",explanation:"Ensures writers are excluded whenever any readers are active."}],commonMistakes:["Allowing writers into the critical section while readers are still active.","Causing writer starvation by continually admitting new readers."]},algorithmSteps:["Step 1: Initialize mutex = 1, wrt = 1, readcount = 0.","Step 2: Reader: wait(mutex) -> readcount++ -> if readcount==1 wait(wrt) -> signal(mutex) -> READ -> wait(mutex) -> readcount-- -> if readcount==0 signal(wrt) -> signal(mutex).","Step 3: Writer: wait(wrt) -> WRITE -> signal(wrt)."]},{id:"exp-bankers",moduleId:"deadlock",title:"Banker's Algorithm for Deadlock Avoidance",category:"Deadlock Detection & Avoidance",difficulty:"Intermediate",estimatedTime:"35 mins",coMapping:"CO3",objective:"To simulate Banker's algorithm for multi-resource deadlock avoidance and determine whether the system is in a safe state by discovering a safe execution sequence.",learningOutcomes:["Compute the Need matrix from Allocation and Max demand matrices.","Execute safety checks step-by-step using Work and Finish vectors.","Test Resource Request algorithms to determine if requests can be granted immediately."],prerequisites:["Matrices in OS","Deadlock concepts","Safe vs Unsafe states"],keyConcepts:["Allocation Matrix","Max Matrix","Available Vector","Need Matrix","Safe Sequence","Unsafe State"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"Banker's algorithm tests for safety by simulating the allocation of predetermined maximum possible amounts of all resources, then makes an safety check to test for possible deadlock conditions.",definition:"Banker's algorithm is a resource allocation and deadlock avoidance algorithm that tests all requests for safety before granting them.",whyItMatters:"Provides a mathematical guarantee that the operating system will never enter a deadlocked state.",howItWorks:"System grants requests only if the resulting state leaves at least one safe sequence of execution where all processes can finish.",formulas:[{name:"Need Matrix Equation",formula:"Need[i][j] = Max[i][j] - Allocation[i][j]",explanation:"The remaining resources process Pi may request to complete."},{name:"Safety Condition",formula:"Need[i] <= Work",explanation:"Process Pi can complete only if its remaining need can be satisfied by current Work."}],commonMistakes:["Forgetting that Work vector increases after a process completes.","Confusing an Unsafe State with an immediate Deadlock."]},algorithmSteps:["Step 1: Initialize Work = Available, Finish[i] = false.","Step 2: Find index i where Finish[i] == false and Need[i] <= Work.","Step 3: If found: Work += Allocation[i], Finish[i] = true, append Pi to safeSeq. Repeat Step 2.","Step 4: If all Finish[i] == true, system is SAFE; else UNSAFE."]},{id:"exp-rag",moduleId:"deadlock",title:"Resource Allocation Graph (RAG) & Cycle Detection",category:"Deadlock Detection & Avoidance",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO3",objective:"To construct and analyze Resource Allocation Graphs (RAG) with process nodes, resource nodes, request edges, and assignment edges, and detect deadlock cycles.",learningOutcomes:["Construct bipartite directed graphs representing process-resource dependencies.","Identify request edges (Process -> Resource) and assignment edges (Resource -> Process).","Apply cycle detection algorithms to determine deadlock conditions."],prerequisites:["Graph theory basics","Coffman conditions"],keyConcepts:["Bipartite Graph","Request Edge","Assignment Edge","Cycle in Single vs Multi-Instance Resources"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"A Resource Allocation Graph visually depicts the state of a system in terms of processes and resources. A cycle in a single-instance resource graph is both necessary and sufficient for deadlock.",definition:"A Resource Allocation Graph (RAG) is a directed graph that describes the current state of all resources and processes in an OS.",whyItMatters:"Used by operating system monitors for visual deadlock detection and debugging concurrent systems.",howItWorks:"Nodes are partitioned into Processes P and Resources R. Directed edges depict allocation and pending requests.",formulas:[{name:"Cycle Theorem",formula:"Cycle in Single-Instance RAG <=> Deadlock Exists",explanation:"In multi-instance systems, a cycle is necessary but not sufficient."}],commonMistakes:["Assuming a cycle in a multi-instance graph always implies deadlock (other processes may release resources).","Drawing request edges in the reverse direction."]},algorithmSteps:["Step 1: Plot process nodes P1..Pn and resource nodes R1..Rm.","Step 2: Draw assignment edges (Rj -> Pi) for allocated units.","Step 3: Draw request edges (Pi -> Rj) for pending requests.","Step 4: Run DFS/Tarjan cycle detection to identify deadlocked processes."]},{id:"exp-first-fit",moduleId:"memory",title:"Contiguous Memory Allocation: First Fit, Best Fit, & Worst Fit",category:"Contiguous Memory Allocation",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO3, CO4",objective:"To implement and compare dynamic contiguous memory allocation strategies (First Fit, Best Fit, Worst Fit) and visualize internal and external fragmentation.",learningOutcomes:["Understand fixed and variable partition memory management.","Observe how partition search order impacts memory utilization.","Quantify internal and external fragmentation."],prerequisites:["Memory partitioning","Process memory footprints"],keyConcepts:["First Fit","Best Fit","Worst Fit","Internal Fragmentation","External Fragmentation"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"Operating systems allocate variable memory blocks to incoming processes using placement algorithms: First Fit picks the first hole that is big enough; Best Fit picks the smallest hole; Worst Fit picks the largest hole.",definition:"Contiguous memory allocation is a memory management technique where each program occupies a single contiguous block of physical memory addresses.",whyItMatters:"Understanding contiguous allocation is critical for understanding why modern operating systems evolved into non-contiguous paging.",howItWorks:"Allocator scans the free list according to the chosen heuristic and assigns the process into the selected partition.",formulas:[{name:"Internal Fragmentation",formula:"Internal Frag = Block Size - Process Size",explanation:"Memory allocated to a process that remains unused within the partition."},{name:"External Fragmentation",formula:"External Frag = Total Free Memory (when request fails)",explanation:"Total free space is sufficient, but no single hole is large enough."}],commonMistakes:["Believing Best Fit always produces less total fragmentation.","Failing to track remaining free space when a block is split."]},algorithmSteps:["Step 1: Read memory partition sizes and process sizes.","Step 2: For each process, search available blocks according to strategy.","Step 3: Allocate process, compute internal fragmentation.","Step 4: If no partition fits, record external fragmentation."]},{id:"exp-paging",moduleId:"memory",title:"Paging & Logical-to-Physical Address Translation",category:"Contiguous Memory Allocation",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO4",objective:"To simulate non-contiguous memory paging and demonstrate hardware address translation using Page Numbers, Offsets, Page Tables, and Frame Numbers.",learningOutcomes:["Decompose logical addresses into Page Number (p) and Offset (d).","Look up physical Frame Number (f) in the Page Table.","Calculate physical address f * Page_Size + d and analyze internal fragmentation."],prerequisites:["Binary addresses","Powers of 2 in memory"],keyConcepts:["Page Number (p)","Page Offset (d)","Frame Number (f)","Page Table Base Register (PTBR)","Internal Fragmentation in Paging"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"Paging eliminates external fragmentation by dividing logical memory into fixed-size pages and physical memory into identical frames. A page table translates logical page numbers into physical frames.",definition:"Paging is a memory management scheme that permits the physical address space of a process to be non-contiguous.",whyItMatters:"Paging is the fundamental architecture of all modern operating systems (Linux, Windows, macOS).",howItWorks:"Given address A with page size 2^m: page number p = A / 2^m, offset d = A % 2^m. Physical address = (Frame * 2^m) + d.",formulas:[{name:"Address Translation",formula:"Physical Address = (Frame Number * Page Size) + Offset",explanation:"Combines mapped frame base with the intra-page offset."}],commonMistakes:["Assuming offset changes during translation (offset remains identical in logical and physical addresses).","Confusing page size with frame size (they are always strictly equal)."]},algorithmSteps:["Step 1: Define page size (e.g. 4 KB = 4096 bytes).","Step 2: Read logical address from user.","Step 3: Compute page number p = address / pageSize, offset d = address % pageSize.","Step 4: Look up frame f = pageTable[p].","Step 5: Compute physical address = (f * pageSize) + d."]},{id:"exp-fifo-page",moduleId:"virtual-memory",title:"FIFO Page Replacement & Belady’s Anomaly",category:"Virtual Memory",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO4",objective:"To simulate FIFO page replacement, calculate page faults and hit ratios, and demonstrate Belady’s anomaly.",learningOutcomes:["Understand demand paging and page fault handling.","Track page frame queues in First-In, First-Out order.","Demonstrate Belady’s anomaly where adding frames increases faults."],prerequisites:["Paging concepts","Queue data structure"],keyConcepts:["Page Hit","Page Fault","Belady’s Anomaly","FIFO Queue","Hit Ratio"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"FIFO replaces the oldest page that was loaded into memory. While simple to implement, FIFO suffers from Belady’s anomaly where increasing frame capacity can counterintuitively increase page faults.",definition:"FIFO page replacement associates with each page the time when that page was brought into memory; when a page must be replaced, the oldest page is chosen.",whyItMatters:"Demonstrates why practical operating systems avoid pure FIFO in favor of recency or clock approximations.",howItWorks:"A FIFO queue tracks resident pages. On fault, the head page is evicted, and the new page is enqueued at the tail.",formulas:[{name:"Fault Ratio",formula:"Fault Ratio = (Total Faults / Total References) * 100%",explanation:"Percentage of references that incurred page faults."}],commonMistakes:["Updating the FIFO queue on a page hit (in FIFO, hits do not alter queue order).","Believing more memory frames always guarantees fewer page faults."]},algorithmSteps:["Step 1: Read reference string and frame capacity.","Step 2: For each page, check if present in frames (HIT).","Step 3: If not present (FAULT), evict oldest page in FIFO queue.","Step 4: Insert new page and record metrics."]},{id:"exp-lru-page",moduleId:"virtual-memory",title:"Least Recently Used (LRU) Page Replacement",category:"Virtual Memory",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO4",objective:"To implement and simulate the LRU page replacement algorithm using timestamps or stack tracking, and verify its freedom from Belady’s anomaly.",learningOutcomes:["Understand recency-based eviction heuristics.","Update page timestamps on every memory reference (hits and faults).","Verify that LRU is a stack algorithm free from Belady’s anomaly."],prerequisites:["FIFO page replacement","Stack data structures"],keyConcepts:["Recency Tracking","Stack Algorithm","Locality of Reference","Victim Selection"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"LRU associates with each page the time of its last use. When a page must be replaced, LRU evicts the page that has not been used for the longest period of time.",definition:"LRU page replacement replaces the page that has not been referenced for the longest time in the past.",whyItMatters:"Approximates optimal replacement by exploiting the temporal locality of reference exhibited by programs.",howItWorks:"Every memory access updates the referenced page timestamp or moves it to the top of the stack.",formulas:[{name:"Stack Property",formula:"Frames(n) ⊆ Frames(n+1)",explanation:"The set of pages for n frames is always a subset of pages for n+1 frames."}],commonMistakes:["Forgetting to update the timestamp when a page hit occurs.","Confusing LRU (least recently used) with LFU (least frequently used)."]},algorithmSteps:["Step 1: Maintain lastUsed timestamp for each page.","Step 2: For each reference, update lastUsed[page] = currentTime.","Step 3: On page fault when frames are full, evict page with minimum lastUsed timestamp.","Step 4: Load new page and compute cumulative hit ratio."]},{id:"exp-optimal-page",moduleId:"virtual-memory",title:"Optimal (OPT / MIN) Page Replacement Algorithm",category:"Virtual Memory",difficulty:"Advanced",estimatedTime:"30 mins",coMapping:"CO4",objective:"To simulate the theoretical Optimal page replacement algorithm that achieves the lowest possible page fault rate for any reference string.",learningOutcomes:["Analyze the theoretical lower bound for page faults.","Inspect future references to select the victim page.","Benchmark practical algorithms (FIFO, LRU, Clock) against Optimal."],prerequisites:["LRU page replacement","Future reference analysis"],keyConcepts:["Belady’s Optimal Algorithm","Theoretical Lower Bound","Future Lookahead","Performance Benchmarking"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"Optimal page replacement replaces the page that will not be used for the longest period of time in the future. It guarantees the absolute minimum number of page faults.",definition:"Optimal page replacement (OPT / MIN) replaces the page whose next reference is farthest in the future.",whyItMatters:"Serves as the theoretical benchmark against which all real-world page replacement algorithms are evaluated.",howItWorks:"On fault, the algorithm scans forward through the remaining reference string and evicts the page needed farthest in the future (or never again).",formulas:[{name:"Optimality Criterion",formula:"Faults(OPT) <= Faults(Any Online Algorithm)",explanation:"Optimal provides the absolute minimum fault count possible."}],commonMistakes:["Attempting to deploy Optimal in a real OS (requires omniscient future knowledge).","Evicting a page needed soon instead of one needed farthest away."]},algorithmSteps:["Step 1: For each reference, if page present -> HIT.","Step 2: If FAULT and frames full: scan future references for each resident page.","Step 3: Select page with maximum distance to next reference (or not referenced again).","Step 4: Replace victim and record step."]},{id:"exp-file-alloc",moduleId:"file-systems",title:"File Allocation Methods: Contiguous, Linked, & Indexed",category:"File Systems",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO4, CO5",objective:"To visualize and compare contiguous, linked, and indexed disk block allocation strategies for file system storage.",learningOutcomes:["Understand direct vs sequential file access trade-offs.","Analyze internal/external fragmentation in contiguous allocation.","Examine pointer overhead and reliability in linked allocation.","Master index blocks and multi-level indexing."],prerequisites:["Disk sectors and blocks","File directory structures"],keyConcepts:["Contiguous Allocation","Linked Allocation","Indexed Allocation","Index Block","Directory Entry"],hasSimulation:!0,hasCode:!0,hasChallenge:!1,theory:{quickSummary:"File allocation methods determine how secondary storage disk blocks are allocated to files: contiguous (consecutive blocks), linked (each block points to next), or indexed (a dedicated index block contains pointers to all data blocks).",definition:"File allocation methods define the physical arrangement and tracking of file data blocks across disk sectors.",whyItMatters:"Dictates file access speed (random vs sequential), disk space efficiency, and resistance to corruption.",howItWorks:"Directory tables store metadata: start block and length for contiguous; start and end pointers for linked; and index block pointer for indexed.",formulas:[{name:"Linked Pointer Overhead",formula:"Usable Bytes = Block Size - Pointer Size",explanation:"Each disk block reserves bytes for the pointer to the next block."}],commonMistakes:["Assuming linked allocation supports efficient direct/random access.","Overlooking index block overhead for small files."]},algorithmSteps:["Step 1: Initialize disk blocks (e.g. 32 blocks).","Step 2: Contiguous: Find consecutive free blocks of size N. Record start block and length.","Step 3: Linked: Find N free blocks anywhere, chain them with pointers. Record start and end block.","Step 4: Indexed: Allocate 1 index block pointing to N data blocks.","Step 5: Render disk layout and directory table."]},{id:"exp-directory-struct",moduleId:"file-systems",title:"Directory Structures: Single-Level, Two-Level & Tree-Structured",category:"File Systems",difficulty:"Beginner",estimatedTime:"25 mins",coMapping:"CO4, CO5",objective:"To model directory organization schemes (Single-Level, Two-Level User Directories, Hierarchical Tree) and examine path resolution and file collision prevention.",learningOutcomes:["Understand filename collision problems in Single-Level directories.","Structure user-isolated files using Two-Level Master File Directories (MFD/UFD).","Traverse hierarchical tree-structured directories using absolute and relative paths."],prerequisites:["File concepts","Tree data structures"],keyConcepts:["Master File Directory (MFD)","User File Directory (UFD)","Path Traversal","Subdirectories","File Protection"],hasSimulation:!0,hasCode:!0,hasChallenge:!1,theory:{quickSummary:"Directory structures organize files logically. Single-level directories cause name collisions; two-level directories isolate users; tree-structured directories enable arbitrary nesting and modular organization.",definition:"A directory structure is the organizational method used by a file system to keep track of files and subdirectories on storage media.",whyItMatters:"Forms the backbone of modern filesystems (ext4, NTFS, APFS), enabling users to organize millions of files.",howItWorks:"Directories are special files containing pairs of (filename, inode/block pointer). Path resolution parses path separators recursively.",formulas:[{name:"Hierarchical Path Depth",formula:"Path = /dir1/dir2/.../filename",explanation:"Traverses tree edges from root (/) to the target inode."}],commonMistakes:["Assuming files in different directories cannot share the exact same name.","Confusing hard links with symbolic (soft) links in directory trees."]},algorithmSteps:["Step 1: Model root directory node.","Step 2: Support directory creation (mkdir) and file creation (touch).","Step 3: Enforce unique filenames within the same directory level.","Step 4: Traverse and display directory tree hierarchy."]},{id:"exp-disk-fcfs",moduleId:"disk-scheduling",title:"Disk Scheduling: FCFS & Shortest Seek Time First (SSTF)",category:"Disk Scheduling",difficulty:"Intermediate",estimatedTime:"30 mins",coMapping:"CO5",objective:"To simulate disk arm scheduling algorithms (FCFS and SSTF) over cylinders 0-199 and evaluate total head movement.",learningOutcomes:["Visualize disk seek paths and cylinder head travel.","Understand how SSTF minimizes immediate seek time but risks starvation.","Calculate total head movement across multiple pending I/O requests."],prerequisites:["Magnetic disk geometry","Seek time vs Rotational latency"],keyConcepts:["Seek Time","Cylinder Track","Head Movement","SSTF Starvation"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"Disk scheduling algorithms order pending I/O requests to minimize physical read/write head movement across disk cylinders, reducing seek time.",definition:"Disk scheduling is the technique used by operating systems to schedule multiple pending I/O requests for the hard disk.",whyItMatters:"Seek time accounts for the largest component of disk I/O delay; efficient scheduling dramatically enhances overall system throughput.",howItWorks:"Starting from an initial head position, FCFS follows arrival order while SSTF greedily moves to the nearest cylinder.",formulas:[{name:"Total Head Movement (THM)",formula:"THM = Σ |Track[i] - Track[i-1]|",explanation:"Sum of absolute cylinder distance traveled between consecutive serviced requests."}],commonMistakes:["Overlooking that SSTF can starve requests located at the platter edges if new requests cluster near the head.","Calculating seek distances with negative numbers instead of absolute values."]},algorithmSteps:["Step 1: Input cylinder requests and initial head position.","Step 2: If FCFS: service in arrival order.","Step 3: If SSTF: greedily pick unserviced track with minimum |currentHead - track|.","Step 4: Compute total head movement and display trajectory graph."]},{id:"exp-disk-scan",moduleId:"disk-scheduling",title:"SCAN (Elevator), C-SCAN, & LOOK Disk Scheduling",category:"Disk Scheduling",difficulty:"Intermediate",estimatedTime:"35 mins",coMapping:"CO5",objective:"To implement and compare unidirectional and bidirectional sweeping disk scheduling algorithms (SCAN, C-SCAN, LOOK, C-LOOK).",learningOutcomes:["Master the Elevator algorithm (SCAN) sweeping to cylinder boundaries.","Analyze C-SCAN circular return for uniform wait times.","Differentiate LOOK and C-LOOK which reverse at the final request rather than disk edges."],prerequisites:["FCFS and SSTF disk scheduling"],keyConcepts:["SCAN (Elevator)","C-SCAN Circular Sweep","LOOK & C-LOOK","Uniform Waiting Time"],hasSimulation:!0,hasCode:!0,hasChallenge:!0,theory:{quickSummary:"SCAN moves the disk head in one direction servicing requests until it reaches the edge, then reverses. C-SCAN provides more uniform wait times by only servicing in one direction and jumping back to the start.",definition:"The SCAN algorithm (also called the elevator algorithm) moves the disk arm back and forth across the platter to service requests in order of track position.",whyItMatters:"Prevents the starvation seen in SSTF and ensures fair, bounded wait times for all disk requests.",howItWorks:"Arm moves towards chosen direction (0 or 199) servicing all encountered requests, then reverses (SCAN) or jumps back to start (C-SCAN).",formulas:[{name:"SCAN Boundary Rule",formula:"SCAN traverses to 0 or Max_Cylinder before reversing direction",explanation:"LOOK only travels as far as the final requested track in that direction."}],commonMistakes:["Confusing SCAN with LOOK (LOOK does not travel to cylinder 0 or 199 unless requested).","Counting seek distance during the idle return jump in C-SCAN incorrectly."]},algorithmSteps:["Step 1: Read requests, initial head, and sweep direction (UP/DOWN).","Step 2: Sort requests.","Step 3: Service towards direction until boundary (199 or 0).","Step 4: Reverse direction (SCAN) or jump to opposite boundary (C-SCAN).","Step 5: Output complete seek path and total distance."]}],gS=({activePage:t,setActivePage:e,progress:n,onOpenCommandPalette:i,toggleTheme:r,theme:s})=>{const a=jt.length,l=n.completedExperiments.length,c=Math.round(l/a*100),d=[{id:"home",label:"Home",icon:Yg},{id:"lab",label:"All Labs",icon:nS,badge:a.toString()},{id:"practice",label:"Compare",icon:rf},{id:"terminal",label:"Terminal",icon:ac},{id:"challenges",label:"Challenges",icon:oc}];return o.jsxs("header",{className:"sticky top-0 z-40 w-full shadow-sm transition-colors duration-200",children:[o.jsxs("div",{className:"w-full bg-[#092244] text-white text-xs font-medium py-2 px-6 sm:px-10 lg:px-16 border-b border-blue-950 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center space-x-3 font-semibold tracking-wide",children:[o.jsx("span",{className:"text-[#f8a51d] font-bold text-xs sm:text-sm",children:"SRM UNIVERSITY"}),o.jsx("span",{className:"text-blue-300/40",children:"|"}),o.jsx("span",{className:"text-blue-100 hidden sm:inline text-xs sm:text-sm",children:"Department of Computer Science & Engineering • School of Computing"})]}),o.jsxs("div",{className:"flex items-center space-x-4",children:[o.jsx("span",{className:"text-blue-200/80 text-xs hidden md:inline font-mono",children:"Kattankulathur, Chennai - 603203"}),o.jsx("span",{className:"text-blue-300/40 hidden md:inline",children:"|"}),o.jsx("span",{className:"text-blue-200/90 text-xs hidden lg:inline font-mono",children:"Academic Year 2025–26 (Semester IV)"}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"px-2.5 py-1 rounded text-[11px] font-black bg-[#f8a51d] text-slate-950 uppercase tracking-wider shadow-xs",children:"NAAC A++ GRADE"}),o.jsx("span",{className:"px-2.5 py-1 rounded text-[11px] font-black bg-blue-600 text-white uppercase tracking-wider shadow-xs hidden sm:inline",children:"NIRF #14 ENGG"})]})]})]}),o.jsx("div",{className:"w-full bg-white dark:bg-[#0c121e] border-b border-slate-200 dark:border-slate-800 px-6 sm:px-10 lg:px-16",children:o.jsxs("div",{className:"w-full flex items-center justify-between h-24",children:[o.jsxs("div",{onClick:()=>e("home"),className:"flex items-center space-x-4 cursor-pointer select-none group shrink-0",children:[o.jsx("img",{src:"/college-logo.webp",alt:"SRM Logo",className:"h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"}),o.jsxs("div",{className:"flex flex-col",children:[o.jsxs("div",{className:"flex items-center space-x-2.5",children:[o.jsx("span",{className:"font-serif font-black text-2xl sm:text-3xl text-[#0c4da2] dark:text-blue-400 tracking-tight",children:"SRM"}),o.jsx("span",{className:"px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#0c4da2] text-white shadow-xs",children:"VIRTUAL LAB"})]}),o.jsx("span",{className:"text-xs sm:text-sm font-serif font-bold uppercase text-slate-700 dark:text-slate-300 tracking-wider",children:"INSTITUTE OF SCIENCE & TECHNOLOGY"}),o.jsx("span",{className:"text-[10px] text-slate-400 dark:text-slate-500 font-mono",children:"(Deemed to be University under section 3 of UGC Act 1956)"})]})]}),o.jsxs("div",{className:"flex items-center space-x-3 lg:space-x-5",children:[o.jsx("nav",{className:"hidden xl:flex items-center space-x-1.5",children:d.map(u=>{const p=u.icon,h=t===u.id;return o.jsxs("button",{onClick:()=>e(u.id),className:`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${h?"bg-blue-50 dark:bg-blue-950/80 text-[#0c4da2] dark:text-blue-400 border border-blue-200 dark:border-blue-900 shadow-2xs":"text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"}`,children:[o.jsx(p,{className:"w-4 h-4"}),o.jsx("span",{children:u.label}),u.badge&&o.jsx("span",{className:"px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-100 dark:bg-blue-900 text-[#0c4da2] dark:text-blue-300 font-bold",children:u.badge})]},u.id)})}),o.jsxs("div",{onClick:()=>e("progress"),className:"hidden lg:flex items-center space-x-3 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-xl cursor-pointer hover:border-srm-blue transition-colors group",title:"Click to view full Student Dashboard",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-xs",children:o.jsx(tf,{className:"w-4 h-4"})}),o.jsxs("div",{className:"flex flex-col text-left",children:[o.jsxs("div",{className:"flex items-center justify-between space-x-2 text-[11px] font-bold text-slate-700 dark:text-slate-300",children:[o.jsx("span",{children:"Progress:"}),o.jsxs("span",{className:"text-[#0c4da2] dark:text-blue-400 font-mono",children:[c,"%"]})]}),o.jsx("div",{className:"w-20 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mt-1",children:o.jsx("div",{className:"bg-[#0c4da2] dark:bg-blue-500 h-full rounded-full transition-all duration-300",style:{width:`${Math.max(c,4)}%`}})})]})]}),o.jsxs("button",{onClick:i,className:"hidden sm:flex items-center space-x-2.5 px-4 py-2.5 text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-srm-blue transition-colors cursor-pointer",children:[o.jsx(of,{className:"w-4 h-4"}),o.jsx("span",{className:"font-semibold",children:"Search Labs"}),o.jsx("kbd",{className:"px-2 py-0.5 text-xs font-mono bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md font-bold shadow-2xs",children:"Ctrl+K"})]}),o.jsxs("button",{onClick:()=>e("progress"),className:`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer ${t==="progress"?"text-[#0c4da2] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60":"text-slate-700 dark:text-slate-300 hover:text-[#0c4da2]"}`,children:[o.jsx(mS,{className:"w-4 h-4"}),o.jsx("span",{children:"Student Portal"})]}),o.jsxs("button",{onClick:()=>e("lab"),className:"flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#0c4da2] hover:bg-blue-800 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer",children:[o.jsx("span",{children:"Enter Virtual Lab"}),o.jsx("span",{className:"text-base",children:"🧪"})]}),o.jsx("button",{onClick:r,"aria-label":"Toggle theme",className:"p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors cursor-pointer",children:s==="dark"?o.jsx(fS,{className:"w-5 h-5 text-amber-400"}):o.jsx(lS,{className:"w-5 h-5 text-slate-700"})})]})]})})]})},vS=()=>o.jsx("footer",{className:"relative z-10 bg-white dark:bg-[#080b11] border-t border-slate-200 dark:border-slate-800/80 pt-12 pb-8 transition-colors duration-200",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",children:[o.jsxs("div",{className:"space-y-4 md:col-span-1",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("img",{src:"/college-logo.webp",alt:"SRMIST Crest",className:"h-10 w-auto object-contain"}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-sm font-bold text-slate-900 dark:text-white",children:"SRMIST"}),o.jsx("p",{className:"text-xs text-srm-blue dark:text-blue-400 font-semibold italic",children:"Learn. Leap. Lead."})]})]}),o.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 leading-relaxed",children:"Virtual Operating Systems Laboratory designed for B.Tech Computer Science & Engineering students to simulate, experiment, and master fundamental OS concepts."})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3",children:"Course Outcomes (COs)"}),o.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-600 dark:text-slate-400",children:[o.jsxs("li",{children:[o.jsx("strong",{className:"text-srm-blue dark:text-blue-400",children:"CO1:"})," Linux environment & system calls"]}),o.jsxs("li",{children:[o.jsx("strong",{className:"text-srm-blue dark:text-blue-400",children:"CO2:"})," Process scheduling & synchronization"]}),o.jsxs("li",{children:[o.jsx("strong",{className:"text-srm-blue dark:text-blue-400",children:"CO3:"})," Deadlock prevention & avoidance"]}),o.jsxs("li",{children:[o.jsx("strong",{className:"text-srm-blue dark:text-blue-400",children:"CO4:"})," Memory management & virtual memory"]}),o.jsxs("li",{children:[o.jsx("strong",{className:"text-srm-blue dark:text-blue-400",children:"CO5:"})," File systems & disk scheduling"]})]})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3",children:"Core Simulators"}),o.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-600 dark:text-slate-400",children:[o.jsx("li",{children:"• CPU Scheduling (FCFS, SJF, RR)"}),o.jsx("li",{children:"• Banker’s Deadlock Avoidance"}),o.jsx("li",{children:"• Page Replacement (FIFO, LRU, Optimal)"}),o.jsx("li",{children:"• Dynamic Memory Allocation (Best/First Fit)"}),o.jsx("li",{children:"• Disk Arm Trajectory (SSTF, SCAN)"})]})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3",children:"Department & Campus"}),o.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-400 leading-relaxed",children:["Department of Computer Science & Engineering",o.jsx("br",{}),"School of Computing",o.jsx("br",{}),"SRM Institute of Science and Technology",o.jsx("br",{}),"Kattankulathur, Chengalpattu District, Tamil Nadu - 603203"]}),o.jsx("div",{className:"mt-3 inline-block text-[11px] font-medium text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded px-2 py-1 bg-slate-50 dark:bg-slate-900",children:"NAAC A++ Grade • Category-I University"})]})]}),o.jsxs("div",{className:"border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 dark:text-slate-400",children:[o.jsxs("p",{children:["© ",new Date().getFullYear()," SRM Institute of Science and Technology. All Rights Reserved."]}),o.jsx("p",{className:"mt-2 sm:mt-0",children:"Virtual OS Lab • B.Tech CSE Practical Assessment Platform"})]})]})}),yS=({opacity:t})=>o.jsx("div",{"aria-hidden":"true",className:"fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden select-none",children:o.jsxs("div",{className:"relative flex flex-col items-center justify-center pointer-events-none",children:[o.jsx("img",{src:"/college-logo.webp",alt:"SRMIST Watermark",className:"w-[340px] sm:w-[500px] md:w-[680px] lg:w-[820px] max-w-full h-auto object-contain transition-opacity duration-300 drop-shadow-sm",style:{opacity:t??.065}}),o.jsx("div",{className:"text-center font-serif font-bold tracking-widest uppercase text-xs sm:text-sm mt-3 text-slate-900/15 dark:text-white/10",children:"SRM Institute of Science and Technology • Virtual OS Lab"})]})}),Fa=[{id:"linux",title:"Linux & UNIX Environment",shortDescription:"Master terminal commands, permissions, shell scripting, and core UNIX system calls.",iconName:"Terminal",experimentCount:6,difficulty:"Beginner",coMapping:"CO1",badgeId:"Terminal Wizard"},{id:"process",title:"Process Management",shortDescription:"Explore process states, lifecycles, fork(), wait(), exec(), and thread concurrency.",iconName:"Cpu",experimentCount:5,difficulty:"Beginner",coMapping:"CO1, CO2",badgeId:"Process Architect"},{id:"cpu-scheduling",title:"CPU Scheduling Algorithms",shortDescription:"Interactive Gantt charts for FCFS, SJF, SRTF, Priority, and Round Robin.",iconName:"Clock",experimentCount:6,difficulty:"Intermediate",coMapping:"CO2",badgeId:"Scheduler"},{id:"synchronization",title:"Process Synchronization",shortDescription:"Solve race conditions, Producer-Consumer, and Dining Philosophers with semaphores.",iconName:"ShieldCheck",experimentCount:4,difficulty:"Intermediate",coMapping:"CO2, CO3",badgeId:"Synchronization Pro"},{id:"deadlock",title:"Deadlock Detection & Avoidance",shortDescription:"Resource Allocation Graphs (RAG) and Banker's Algorithm safe sequence calculator.",iconName:"Lock",experimentCount:4,difficulty:"Intermediate",coMapping:"CO3",badgeId:"Deadlock Detective"},{id:"memory",title:"Contiguous Memory Allocation",shortDescription:"Dynamic memory partitions, First Fit, Best Fit, Worst Fit, and fragmentation maps.",iconName:"HardDrive",experimentCount:4,difficulty:"Intermediate",coMapping:"CO3, CO4",badgeId:"Memory Master"},{id:"virtual-memory",title:"Virtual Memory & Page Replacement",shortDescription:"Frame tables, page hits/faults, FIFO, LRU, Optimal, LFU, and Belady’s anomaly.",iconName:"Layers",experimentCount:5,difficulty:"Advanced",coMapping:"CO4",badgeId:"Paging Explorer"},{id:"file-systems",title:"File Allocation Techniques",shortDescription:"Visualize Contiguous, Linked, and Indexed disk block allocations and directory tables.",iconName:"FolderTree",experimentCount:3,difficulty:"Intermediate",coMapping:"CO4, CO5",badgeId:"Storage Master"},{id:"disk-scheduling",title:"Disk Scheduling Algorithms",shortDescription:"Animate cylinder seek paths for FCFS, SSTF, SCAN, C-SCAN, LOOK, and C-LOOK.",iconName:"Disc",experimentCount:6,difficulty:"Intermediate",coMapping:"CO5",badgeId:"Disk Master"}],_S=({isOpen:t,onClose:e,onSelectExperiment:n,onSelectModule:i})=>{const[r,s]=ae.useState(""),[a,l]=ae.useState(0),c=ae.useRef(null);if(ae.useEffect(()=>{t&&(setTimeout(()=>{var m;return(m=c.current)==null?void 0:m.focus()},50),s(""),l(0))},[t]),!t)return null;const d=jt.filter(m=>m.title.toLowerCase().includes(r.toLowerCase())||m.category.toLowerCase().includes(r.toLowerCase())||m.keyConcepts.some(g=>g.toLowerCase().includes(r.toLowerCase()))),u=Fa.filter(m=>m.title.toLowerCase().includes(r.toLowerCase())||m.shortDescription.toLowerCase().includes(r.toLowerCase())),p=d.length+u.length,h=m=>{if(m.key==="Escape")e();else if(m.key==="ArrowDown")m.preventDefault(),l(g=>(g+1)%(p||1));else if(m.key==="ArrowUp")m.preventDefault(),l(g=>(g-1+(p||1))%(p||1));else if(m.key==="Enter")if(m.preventDefault(),a<d.length)n(d[a].id),e();else{const g=a-d.length;u[g]&&(i(u[g].id),e())}};return o.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center",children:o.jsxs("div",{className:"w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden",onKeyDown:h,children:[o.jsxs("div",{className:"relative flex items-center px-4 border-b border-slate-200 dark:border-slate-800",children:[o.jsx(of,{className:"w-5 h-5 text-slate-400 mr-3"}),o.jsx("input",{ref:c,type:"text",placeholder:"Search experiments, algorithms, or concepts... (e.g. Round Robin, LRU, Banker's)",value:r,onChange:m=>{s(m.target.value),l(0)},className:"w-full py-4 text-sm bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"}),o.jsx("button",{onClick:e,className:"p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white",children:o.jsx(lc,{className:"w-4 h-4"})})]}),o.jsx("div",{className:"max-h-96 overflow-y-auto p-2 space-y-1",children:p===0?o.jsxs("div",{className:"py-12 text-center text-sm text-slate-500 dark:text-slate-400",children:['No matching experiments or modules found for "',r,'".']}):o.jsxs(o.Fragment,{children:[d.length>0&&o.jsxs("div",{children:[o.jsx("div",{className:"px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider",children:"Experiments"}),d.map((m,g)=>{const b=g===a;return o.jsxs("div",{onClick:()=>{n(m.id),e()},className:`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${b?"bg-srm-blue text-white":"hover:bg-slate-100 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200"}`,children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx(_g,{className:`w-4 h-4 ${b?"text-white":"text-srm-blue dark:text-blue-400"}`}),o.jsxs("div",{children:[o.jsx("div",{className:"text-sm font-medium",children:m.title}),o.jsxs("div",{className:`text-xs ${b?"text-blue-100":"text-slate-400"}`,children:[m.category," • ",m.difficulty," • ",m.coMapping]})]})]}),o.jsx(Bt,{className:`w-4 h-4 ${b?"opacity-100":"opacity-0"}`})]},m.id)})]}),u.length>0&&o.jsxs("div",{className:"mt-2",children:[o.jsx("div",{className:"px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider",children:"Modules"}),u.map((m,g)=>{const x=d.length+g===a;return o.jsxs("div",{onClick:()=>{i(m.id),e()},className:`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-colors ${x?"bg-srm-blue text-white":"hover:bg-slate-100 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200"}`,children:[o.jsx("div",{className:"text-sm font-medium",children:m.title}),o.jsxs("span",{className:`text-xs ${x?"text-blue-100":"text-slate-400"}`,children:[m.experimentCount," Experiments"]})]},m.id)})]})]})}),o.jsxs("div",{className:"px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400",children:[o.jsxs("span",{children:["Use ",o.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 font-mono",children:"↑"})," ",o.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 font-mono",children:"↓"})," to navigate"]}),o.jsxs("span",{children:["Press ",o.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 font-mono",children:"Enter"})," to select"]})]})]})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lf="170",bS=0,zp=1,SS=2,bv=1,wS=2,oi=3,Ji=0,sn=1,di=2,$i=0,xs=1,Bp=2,Hp=3,Vp=4,MS=5,xr=100,ES=101,TS=102,CS=103,AS=104,kS=200,NS=201,RS=202,PS=203,vu=204,yu=205,IS=206,LS=207,DS=208,FS=209,US=210,OS=211,jS=212,zS=213,BS=214,_u=0,bu=1,Su=2,Cs=3,wu=4,Mu=5,Eu=6,Tu=7,Sv=0,HS=1,VS=2,Yi=0,GS=1,WS=2,qS=3,XS=4,$S=5,YS=6,KS=7,wv=300,As=301,ks=302,Cu=303,Au=304,cc=306,ku=1e3,br=1001,Nu=1002,Hn=1003,ZS=1004,xo=1005,Kn=1006,Hc=1007,Sr=1008,Si=1009,Mv=1010,Ev=1011,Ua=1012,cf=1013,Nr=1014,fi=1015,Va=1016,df=1017,uf=1018,Ns=1020,Tv=35902,Cv=1021,Av=1022,jn=1023,kv=1024,Nv=1025,gs=1026,Rs=1027,Rv=1028,hf=1029,Pv=1030,ff=1031,pf=1033,el=33776,tl=33777,nl=33778,il=33779,Ru=35840,Pu=35841,Iu=35842,Lu=35843,Du=36196,Fu=37492,Uu=37496,Ou=37808,ju=37809,zu=37810,Bu=37811,Hu=37812,Vu=37813,Gu=37814,Wu=37815,qu=37816,Xu=37817,$u=37818,Yu=37819,Ku=37820,Zu=37821,rl=36492,Qu=36494,Ju=36495,Iv=36283,eh=36284,th=36285,nh=36286,QS=3200,JS=3201,Lv=0,e1=1,Ui="",bn="srgb",Fs="srgb-linear",dc="linear",st="srgb",Ur=7680,Gp=519,t1=512,n1=513,i1=514,Dv=515,r1=516,s1=517,a1=518,o1=519,Wp=35044,qp="300 es",pi=2e3,Fl=2001;class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vc=Math.PI/180,ih=180/Math.PI;function Ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function l1(t,e){return(t%e+e)%e}function Gc(t,e,n){return(1-n)*t+n*e}function Ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,a,l,c,d){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,d)}set(e,n,i,r,s,a,l,c,d){const u=this.elements;return u[0]=e,u[1]=r,u[2]=l,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[3],c=i[6],d=i[1],u=i[4],p=i[7],h=i[2],m=i[5],g=i[8],b=r[0],x=r[3],f=r[6],_=r[1],y=r[4],v=r[7],A=r[2],M=r[5],w=r[8];return s[0]=a*b+l*_+c*A,s[3]=a*x+l*y+c*M,s[6]=a*f+l*v+c*w,s[1]=d*b+u*_+p*A,s[4]=d*x+u*y+p*M,s[7]=d*f+u*v+p*w,s[2]=h*b+m*_+g*A,s[5]=h*x+m*y+g*M,s[8]=h*f+m*v+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],d=e[7],u=e[8];return n*a*u-n*l*d-i*s*u+i*l*c+r*s*d-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],d=e[7],u=e[8],p=u*a-l*d,h=l*c-u*s,m=d*s-a*c,g=n*p+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=p*b,e[1]=(r*d-u*i)*b,e[2]=(l*i-r*a)*b,e[3]=h*b,e[4]=(u*n-r*c)*b,e[5]=(r*s-l*n)*b,e[6]=m*b,e[7]=(i*c-d*n)*b,e[8]=(a*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,l){const c=Math.cos(s),d=Math.sin(s);return this.set(i*c,i*d,-i*(c*a+d*l)+a+e,-r*d,r*c,-r*(-d*a+c*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(Wc.makeScale(e,n)),this}rotate(e){return this.premultiply(Wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wc=new He;function Fv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ul(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function c1(){const t=Ul("canvas");return t.style.display="block",t}const Xp={};function oa(t){t in Xp||(Xp[t]=!0,console.warn(t))}function d1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function u1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function h1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===st&&(t.r=xi(t.r),t.g=xi(t.g),t.b=xi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===st&&(t.r=vs(t.r),t.g=vs(t.g),t.b=vs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Ui?dc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const $p=[.64,.33,.3,.6,.15,.06],Yp=[.2126,.7152,.0722],Kp=[.3127,.329],Zp=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qp=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[Fs]:{primaries:$p,whitePoint:Kp,transfer:dc,toXYZ:Zp,fromXYZ:Qp,luminanceCoefficients:Yp,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:$p,whitePoint:Kp,transfer:st,toXYZ:Zp,fromXYZ:Qp,luminanceCoefficients:Yp,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}});let Or;class f1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Or===void 0&&(Or=Ul("canvas")),Or.width=e.width,Or.height=e.height;const i=Or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Or}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xi(n[i]/255)*255):n[i]=xi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p1=0;class Uv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Ga(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(qc(r[a].image)):s.push(qc(r[a]))}else s=qc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?f1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let m1=0;class an extends Us{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=br,r=br,s=Kn,a=Sr,l=jn,c=Si,d=an.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=Ga(),this.name="",this.source=new Uv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ku:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case Nu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ku:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case Nu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=wv;an.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,n=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,d=c[0],u=c[4],p=c[8],h=c[1],m=c[5],g=c[9],b=c[2],x=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(p-b)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+b)<.1&&Math.abs(g+x)<.1&&Math.abs(d+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(d+1)/2,v=(m+1)/2,A=(f+1)/2,M=(u+h)/4,w=(p+b)/4,k=(g+x)/4;return y>v&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=M/i,s=w/i):v>A?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=M/r,s=k/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=k/s),this.set(i,r,s,n),this}let _=Math.sqrt((x-g)*(x-g)+(p-b)*(p-b)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(x-g)/_,this.y=(p-b)/_,this.z=(h-u)/_,this.w=Math.acos((d+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class x1 extends Us{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new at(0,0,e,n),this.scissorTest=!1,this.viewport=new at(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Uv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends x1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ov extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class g1 extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,l){let c=i[r+0],d=i[r+1],u=i[r+2],p=i[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],b=s[a+3];if(l===0){e[n+0]=c,e[n+1]=d,e[n+2]=u,e[n+3]=p;return}if(l===1){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=b;return}if(p!==b||c!==h||d!==m||u!==g){let x=1-l;const f=c*h+d*m+u*g+p*b,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const A=Math.sqrt(y),M=Math.atan2(A,f*_);x=Math.sin(x*M)/A,l=Math.sin(l*M)/A}const v=l*_;if(c=c*x+h*v,d=d*x+m*v,u=u*x+g*v,p=p*x+b*v,x===1-l){const A=1/Math.sqrt(c*c+d*d+u*u+p*p);c*=A,d*=A,u*=A,p*=A}}e[n]=c,e[n+1]=d,e[n+2]=u,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const l=i[r],c=i[r+1],d=i[r+2],u=i[r+3],p=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[n]=l*g+u*p+c*m-d*h,e[n+1]=c*g+u*h+d*p-l*m,e[n+2]=d*g+u*m+l*h-c*p,e[n+3]=u*g-l*p-c*h-d*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,d=l(i/2),u=l(r/2),p=l(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*p+d*m*g,this._y=d*m*p-h*u*g,this._z=d*u*g+h*m*p,this._w=d*u*p-h*m*g;break;case"YXZ":this._x=h*u*p+d*m*g,this._y=d*m*p-h*u*g,this._z=d*u*g-h*m*p,this._w=d*u*p+h*m*g;break;case"ZXY":this._x=h*u*p-d*m*g,this._y=d*m*p+h*u*g,this._z=d*u*g+h*m*p,this._w=d*u*p-h*m*g;break;case"ZYX":this._x=h*u*p-d*m*g,this._y=d*m*p+h*u*g,this._z=d*u*g-h*m*p,this._w=d*u*p+h*m*g;break;case"YZX":this._x=h*u*p+d*m*g,this._y=d*m*p+h*u*g,this._z=d*u*g-h*m*p,this._w=d*u*p-h*m*g;break;case"XZY":this._x=h*u*p-d*m*g,this._y=d*m*p-h*u*g,this._z=d*u*g+h*m*p,this._w=d*u*p+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],l=n[5],c=n[9],d=n[2],u=n[6],p=n[10],h=i+l+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-d)*m,this._z=(a-r)*m}else if(i>l&&i>p){const m=2*Math.sqrt(1+i-l-p);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+d)/m}else if(l>p){const m=2*Math.sqrt(1+l-i-p);this._w=(s-d)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+p-i-l);this._w=(a-r)/m,this._x=(s+d)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,l=n._x,c=n._y,d=n._z,u=n._w;return this._x=i*u+a*l+r*d-s*c,this._y=r*u+a*c+s*l-i*d,this._z=s*u+a*d+i*c-r*l,this._w=a*u-i*l-r*c-s*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let l=a*e._w+i*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const d=Math.sqrt(c),u=Math.atan2(d,l),p=Math.sin((1-n)*u)/d,h=Math.sin(n*u)/d;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,d=2*(a*r-l*i),u=2*(l*n-s*r),p=2*(s*i-a*n);return this.x=n+c*d+a*p-l*u,this.y=i+c*u+l*d-s*p,this.z=r+c*p+s*u-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new j,Jp=new Wa;class qa{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(s,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),go.copy(i.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),vo.subVectors(this.max,Zs),jr.subVectors(e.a,Zs),zr.subVectors(e.b,Zs),Br.subVectors(e.c,Zs),Ci.subVectors(zr,jr),Ai.subVectors(Br,zr),ar.subVectors(jr,Br);let n=[0,-Ci.z,Ci.y,0,-Ai.z,Ai.y,0,-ar.z,ar.y,Ci.z,0,-Ci.x,Ai.z,0,-Ai.x,ar.z,0,-ar.x,-Ci.y,Ci.x,0,-Ai.y,Ai.x,0,-ar.y,ar.x,0];return!$c(n,jr,zr,Br,vo)||(n=[1,0,0,0,1,0,0,0,1],!$c(n,jr,zr,Br,vo))?!1:(yo.crossVectors(Ci,Ai),n=[yo.x,yo.y,yo.z],$c(n,jr,zr,Br,vo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new j,new j,new j,new j,new j,new j,new j,new j],Pn=new j,go=new qa,jr=new j,zr=new j,Br=new j,Ci=new j,Ai=new j,ar=new j,Zs=new j,vo=new j,yo=new j,or=new j;function $c(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){or.fromArray(t,s);const l=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),c=e.dot(or),d=n.dot(or),u=i.dot(or);if(Math.max(-Math.max(c,d,u),Math.min(c,d,u))>l)return!1}return!0}const v1=new qa,Qs=new j,Yc=new j;class Xa{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):v1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Yc)),this.expandByPoint(Qs.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new j,Kc=new j,_o=new j,ki=new j,Zc=new j,bo=new j,Qc=new j;class uc{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Kc.copy(e).add(n).multiplyScalar(.5),_o.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(Kc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(_o),l=ki.dot(this.direction),c=-ki.dot(_o),d=ki.lengthSq(),u=Math.abs(1-a*a);let p,h,m,g;if(u>0)if(p=a*c-l,h=a*l-c,g=s*u,p>=0)if(h>=-g)if(h<=g){const b=1/u;p*=b,h*=b,m=p*(p+a*h+2*l)+h*(a*p+h+2*c)+d}else h=s,p=Math.max(0,-(a*h+l)),m=-p*p+h*(h+2*c)+d;else h=-s,p=Math.max(0,-(a*h+l)),m=-p*p+h*(h+2*c)+d;else h<=-g?(p=Math.max(0,-(-a*s+l)),h=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+h*(h+2*c)+d):h<=g?(p=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+d):(p=Math.max(0,-(a*s+l)),h=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+h*(h+2*c)+d);else h=a>0?-s:s,p=Math.max(0,-(a*h+l)),m=-p*p+h*(h+2*c)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Kc).addScaledVector(_o,h),m}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,l,c;const d=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return d>=0?(i=(e.min.x-h.x)*d,r=(e.max.x-h.x)*d):(i=(e.max.x-h.x)*d,r=(e.min.x-h.x)*d),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(l=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){Zc.subVectors(n,e),bo.subVectors(i,e),Qc.crossVectors(Zc,bo);let a=this.direction.dot(Qc),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ki.subVectors(this.origin,e);const c=l*this.direction.dot(bo.crossVectors(ki,bo));if(c<0)return null;const d=l*this.direction.dot(Zc.cross(ki));if(d<0||c+d>a)return null;const u=-l*ki.dot(Qc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,n,i,r,s,a,l,c,d,u,p,h,m,g,b,x){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,d,u,p,h,m,g,b,x)}set(e,n,i,r,s,a,l,c,d,u,p,h,m,g,b,x){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=l,f[13]=c,f[2]=d,f[6]=u,f[10]=p,f[14]=h,f[3]=m,f[7]=g,f[11]=b,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),d=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*p,g=l*u,b=l*p;n[0]=c*u,n[4]=-c*p,n[8]=d,n[1]=m+g*d,n[5]=h-b*d,n[9]=-l*c,n[2]=b-h*d,n[6]=g+m*d,n[10]=a*c}else if(e.order==="YXZ"){const h=c*u,m=c*p,g=d*u,b=d*p;n[0]=h+b*l,n[4]=g*l-m,n[8]=a*d,n[1]=a*p,n[5]=a*u,n[9]=-l,n[2]=m*l-g,n[6]=b+h*l,n[10]=a*c}else if(e.order==="ZXY"){const h=c*u,m=c*p,g=d*u,b=d*p;n[0]=h-b*l,n[4]=-a*p,n[8]=g+m*l,n[1]=m+g*l,n[5]=a*u,n[9]=b-h*l,n[2]=-a*d,n[6]=l,n[10]=a*c}else if(e.order==="ZYX"){const h=a*u,m=a*p,g=l*u,b=l*p;n[0]=c*u,n[4]=g*d-m,n[8]=h*d+b,n[1]=c*p,n[5]=b*d+h,n[9]=m*d-g,n[2]=-d,n[6]=l*c,n[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*d,g=l*c,b=l*d;n[0]=c*u,n[4]=b-h*p,n[8]=g*p+m,n[1]=p,n[5]=a*u,n[9]=-l*u,n[2]=-d*u,n[6]=m*p+g,n[10]=h-b*p}else if(e.order==="XZY"){const h=a*c,m=a*d,g=l*c,b=l*d;n[0]=c*u,n[4]=-p,n[8]=d*u,n[1]=h*p+b,n[5]=a*u,n[9]=m*p-g,n[2]=g*p-m,n[6]=l*u,n[10]=b*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y1,e,_1)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ni.crossVectors(i,cn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ni.crossVectors(i,cn)),Ni.normalize(),So.crossVectors(cn,Ni),r[0]=Ni.x,r[4]=So.x,r[8]=cn.x,r[1]=Ni.y,r[5]=So.y,r[9]=cn.y,r[2]=Ni.z,r[6]=So.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[4],c=i[8],d=i[12],u=i[1],p=i[5],h=i[9],m=i[13],g=i[2],b=i[6],x=i[10],f=i[14],_=i[3],y=i[7],v=i[11],A=i[15],M=r[0],w=r[4],k=r[8],T=r[12],S=r[1],I=r[5],G=r[9],H=r[13],J=r[2],ne=r[6],K=r[10],ie=r[14],D=r[3],Z=r[7],P=r[11],R=r[15];return s[0]=a*M+l*S+c*J+d*D,s[4]=a*w+l*I+c*ne+d*Z,s[8]=a*k+l*G+c*K+d*P,s[12]=a*T+l*H+c*ie+d*R,s[1]=u*M+p*S+h*J+m*D,s[5]=u*w+p*I+h*ne+m*Z,s[9]=u*k+p*G+h*K+m*P,s[13]=u*T+p*H+h*ie+m*R,s[2]=g*M+b*S+x*J+f*D,s[6]=g*w+b*I+x*ne+f*Z,s[10]=g*k+b*G+x*K+f*P,s[14]=g*T+b*H+x*ie+f*R,s[3]=_*M+y*S+v*J+A*D,s[7]=_*w+y*I+v*ne+A*Z,s[11]=_*k+y*G+v*K+A*P,s[15]=_*T+y*H+v*ie+A*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],d=e[13],u=e[2],p=e[6],h=e[10],m=e[14],g=e[3],b=e[7],x=e[11],f=e[15];return g*(+s*c*p-r*d*p-s*l*h+i*d*h+r*l*m-i*c*m)+b*(+n*c*m-n*d*h+s*a*h-r*a*m+r*d*u-s*c*u)+x*(+n*d*p-n*l*m-s*a*p+i*a*m+s*l*u-i*d*u)+f*(-r*l*u-n*c*p+n*l*h+r*a*p-i*a*h+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],d=e[7],u=e[8],p=e[9],h=e[10],m=e[11],g=e[12],b=e[13],x=e[14],f=e[15],_=p*x*d-b*h*d+b*c*m-l*x*m-p*c*f+l*h*f,y=g*h*d-u*x*d-g*c*m+a*x*m+u*c*f-a*h*f,v=u*b*d-g*p*d+g*l*m-a*b*m-u*l*f+a*p*f,A=g*p*c-u*b*c-g*l*h+a*b*h+u*l*x-a*p*x,M=n*_+i*y+r*v+s*A;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=_*w,e[1]=(b*h*s-p*x*s-b*r*m+i*x*m+p*r*f-i*h*f)*w,e[2]=(l*x*s-b*c*s+b*r*d-i*x*d-l*r*f+i*c*f)*w,e[3]=(p*c*s-l*h*s-p*r*d+i*h*d+l*r*m-i*c*m)*w,e[4]=y*w,e[5]=(u*x*s-g*h*s+g*r*m-n*x*m-u*r*f+n*h*f)*w,e[6]=(g*c*s-a*x*s-g*r*d+n*x*d+a*r*f-n*c*f)*w,e[7]=(a*h*s-u*c*s+u*r*d-n*h*d-a*r*m+n*c*m)*w,e[8]=v*w,e[9]=(g*p*s-u*b*s-g*i*m+n*b*m+u*i*f-n*p*f)*w,e[10]=(a*b*s-g*l*s+g*i*d-n*b*d-a*i*f+n*l*f)*w,e[11]=(u*l*s-a*p*s-u*i*d+n*p*d+a*i*m-n*l*m)*w,e[12]=A*w,e[13]=(u*b*r-g*p*r+g*i*h-n*b*h-u*i*x+n*p*x)*w,e[14]=(g*l*r-a*b*r-g*i*c+n*b*c+a*i*x-n*l*x)*w,e[15]=(a*p*r-u*l*r+u*i*c-n*p*c-a*i*h+n*l*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,l=e.y,c=e.z,d=s*a,u=s*l;return this.set(d*a+i,d*l-r*c,d*c+r*l,0,d*l+r*c,u*l+i,u*c-r*a,0,d*c-r*l,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,l=n._z,c=n._w,d=s+s,u=a+a,p=l+l,h=s*d,m=s*u,g=s*p,b=a*u,x=a*p,f=l*p,_=c*d,y=c*u,v=c*p,A=i.x,M=i.y,w=i.z;return r[0]=(1-(b+f))*A,r[1]=(m+v)*A,r[2]=(g-y)*A,r[3]=0,r[4]=(m-v)*M,r[5]=(1-(h+f))*M,r[6]=(x+_)*M,r[7]=0,r[8]=(g+y)*w,r[9]=(x-_)*w,r[10]=(1-(h+b))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const a=Hr.set(r[4],r[5],r[6]).length(),l=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const d=1/s,u=1/a,p=1/l;return In.elements[0]*=d,In.elements[1]*=d,In.elements[2]*=d,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=p,In.elements[9]*=p,In.elements[10]*=p,n.setFromRotationMatrix(In),i.x=s,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,a,l=pi){const c=this.elements,d=2*s/(n-e),u=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let m,g;if(l===pi)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(l===Fl)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,l=pi){const c=this.elements,d=1/(n-e),u=1/(i-r),p=1/(a-s),h=(n+e)*d,m=(i+r)*u;let g,b;if(l===pi)g=(a+s)*p,b=-2*p;else if(l===Fl)g=s*p,b=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new j,In=new dt,y1=new j(0,0,0),_1=new j(1,1,1),Ni=new j,So=new j,cn=new j,em=new dt,tm=new Wa;class Jn{constructor(e=0,n=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],d=r[5],u=r[9],p=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,d),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(em,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tm.setFromEuler(this),this.setFromQuaternion(tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b1=0;const nm=new j,Vr=new Wa,ri=new dt,wo=new j,Js=new j,S1=new j,w1=new Wa,im=new j(1,0,0),rm=new j(0,1,0),sm=new j(0,0,1),am={type:"added"},M1={type:"removed"},Gr={type:"childadded",child:null},Jc={type:"childremoved",child:null};class Ht extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new j,n=new Jn,i=new Wa,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new He}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(im,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,n){return nm.copy(e).applyQuaternion(this.quaternion),this.position.add(nm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(im,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wo.copy(e):wo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Js,wo,this.up):ri.lookAt(wo,Js,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(ri),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(am),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(M1),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(am),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,S1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,w1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let d=0,u=c.length;d<u;d++){const p=c[d];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=a(e.geometries),c=a(e.materials),d=a(e.textures),u=a(e.images),p=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),d.length>0&&(i.textures=d),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(l){const c=[];for(const d in l){const u=l[d];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new j(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new j,si=new j,ed=new j,ai=new j,Wr=new j,qr=new j,om=new j,td=new j,nd=new j,id=new j,rd=new at,sd=new at,ad=new at;class On{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),si.subVectors(i,n),ed.subVectors(e,n);const a=Ln.dot(Ln),l=Ln.dot(si),c=Ln.dot(ed),d=si.dot(si),u=si.dot(ed),p=a*d-l*l;if(p===0)return s.set(0,0,0),null;const h=1/p,m=(d*c-l*u)*h,g=(a*u-l*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,n,i,r,s,a,l,c){return this.getBarycoord(e,n,i,r,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ai.x),c.addScaledVector(a,ai.y),c.addScaledVector(l,ai.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return rd.setScalar(0),sd.setScalar(0),ad.setScalar(0),rd.fromBufferAttribute(e,n),sd.fromBufferAttribute(e,i),ad.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(rd,s.x),a.addScaledVector(sd,s.y),a.addScaledVector(ad,s.z),a}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),si.subVectors(e,n),Ln.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Ln.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,l;Wr.subVectors(r,i),qr.subVectors(s,i),td.subVectors(e,i);const c=Wr.dot(td),d=qr.dot(td);if(c<=0&&d<=0)return n.copy(i);nd.subVectors(e,r);const u=Wr.dot(nd),p=qr.dot(nd);if(u>=0&&p<=u)return n.copy(r);const h=c*p-u*d;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(Wr,a);id.subVectors(e,s);const m=Wr.dot(id),g=qr.dot(id);if(g>=0&&m<=g)return n.copy(s);const b=m*d-c*g;if(b<=0&&d>=0&&g<=0)return l=d/(d-g),n.copy(i).addScaledVector(qr,l);const x=u*g-m*p;if(x<=0&&p-u>=0&&m-g>=0)return om.subVectors(s,r),l=(p-u)/(p-u+(m-g)),n.copy(r).addScaledVector(om,l);const f=1/(x+b+h);return a=b*f,l=h*f,n.copy(i).addScaledVector(Wr,a).addScaledVector(qr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function od(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=l1(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=od(a,s,e+1/3),this.g=od(a,s,e),this.b=od(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=jv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Ke.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Jt(Ot.r*255,0,255))*65536+Math.round(Jt(Ot.g*255,0,255))*256+Math.round(Jt(Ot.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,d;const u=(l+a)/2;if(l===a)c=0,d=0;else{const p=a-l;switch(d=u<=.5?p/(a+l):p/(2-a-l),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=d,e.l=u,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=bn){Ke.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+n,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ri),e.getHSL(Mo);const i=Gc(Ri.h,Mo.h,n),r=Gc(Ri.s,Mo.s,n),s=Gc(Ri.l,Mo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ze;Ze.NAMES=jv;let E1=0;class Lr extends Us{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=Ga(),this.name="",this.blending=xs,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vu,this.blendDst=yu,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vu&&(i.blendSrc=this.blendSrc),this.blendDst!==yu&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zv extends Lr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Sv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new j,Eo=new Xe;class Vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wp,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Eo.fromBufferAttribute(this,n),Eo.applyMatrix3(e),this.setXY(n,Eo.x,Eo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),e}}class Bv extends Vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Hv extends Vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class on extends Vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let T1=0;const _n=new dt,ld=new Ht,Xr=new j,dn=new qa,ea=new qa,At=new j;class xn extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fv(e)?Hv:Bv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return ld.lookAt(e),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new on(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];ea.setFromBufferAttribute(l),this.morphTargetsRelative?(At.addVectors(dn.min,ea.min),dn.expandByPoint(At),At.addVectors(dn.max,ea.max),dn.expandByPoint(At)):(dn.expandByPoint(ea.min),dn.expandByPoint(ea.max))}dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const l=n[s],c=this.morphTargetsRelative;for(let d=0,u=l.count;d<u;d++)At.fromBufferAttribute(l,d),c&&(Xr.fromBufferAttribute(e,d),At.add(Xr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let k=0;k<i.count;k++)l[k]=new j,c[k]=new j;const d=new j,u=new j,p=new j,h=new Xe,m=new Xe,g=new Xe,b=new j,x=new j;function f(k,T,S){d.fromBufferAttribute(i,k),u.fromBufferAttribute(i,T),p.fromBufferAttribute(i,S),h.fromBufferAttribute(s,k),m.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),u.sub(d),p.sub(d),m.sub(h),g.sub(h);const I=1/(m.x*g.y-g.x*m.y);isFinite(I)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(I),x.copy(p).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(I),l[k].add(b),l[T].add(b),l[S].add(b),c[k].add(x),c[T].add(x),c[S].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let k=0,T=_.length;k<T;++k){const S=_[k],I=S.start,G=S.count;for(let H=I,J=I+G;H<J;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new j,v=new j,A=new j,M=new j;function w(k){A.fromBufferAttribute(r,k),M.copy(A);const T=l[k];y.copy(T),y.sub(A.multiplyScalar(A.dot(T))).normalize(),v.crossVectors(M,T);const I=v.dot(c[k])<0?-1:1;a.setXYZW(k,y.x,y.y,y.z,I)}for(let k=0,T=_.length;k<T;++k){const S=_[k],I=S.start,G=S.count;for(let H=I,J=I+G;H<J;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new j,s=new j,a=new j,l=new j,c=new j,d=new j,u=new j,p=new j;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),b=e.getX(h+1),x=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,b),a.fromBufferAttribute(n,x),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,x),l.add(u),c.add(u),d.add(u),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(l,c){const d=l.array,u=l.itemSize,p=l.normalized,h=new d.constructor(c.length*u);let m=0,g=0;for(let b=0,x=c.length;b<x;b++){l.isInterleavedBufferAttribute?m=c[b]*l.data.stride+l.offset:m=c[b]*u;for(let f=0;f<u;f++)h[g++]=d[m++]}return new Vn(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xn,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],d=e(c,i);n.setAttribute(l,d)}const s=this.morphAttributes;for(const l in s){const c=[],d=s[l];for(let u=0,p=d.length;u<p;u++){const h=d[u],m=e(h,i);c.push(m)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const d=a[l];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const d=i[c];e.data.attributes[c]=d.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],u=[];for(let p=0,h=d.length;p<h;p++){const m=d[p];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const d in r){const u=r[d];this.setAttribute(d,u.clone(n))}const s=e.morphAttributes;for(const d in s){const u=[],p=s[d];for(let h=0,m=p.length;h<m;h++)u.push(p[h].clone(n));this.morphAttributes[d]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,u=a.length;d<u;d++){const p=a[d];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lm=new dt,lr=new uc,To=new Xa,cm=new j,Co=new j,Ao=new j,ko=new j,cd=new j,No=new j,dm=new j,Ro=new j;class En extends Ht{constructor(e=new xn,n=new zv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){No.set(0,0,0);for(let c=0,d=s.length;c<d;c++){const u=l[c],p=s[c];u!==0&&(cd.fromBufferAttribute(p,e),a?No.addScaledVector(cd,u):No.addScaledVector(cd.sub(n),u))}n.add(No)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(To.containsPoint(lr.origin)===!1&&(lr.intersectSphere(To,cm)===null||lr.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(lm.copy(s).invert(),lr.copy(e.ray).applyMatrix4(lm),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,d=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,b=h.length;g<b;g++){const x=h[g],f=a[x.materialIndex],_=Math.max(x.start,m.start),y=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let v=_,A=y;v<A;v+=3){const M=l.getX(v),w=l.getX(v+1),k=l.getX(v+2);r=Po(this,f,e,i,d,u,p,M,w,k),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let x=g,f=b;x<f;x+=3){const _=l.getX(x),y=l.getX(x+1),v=l.getX(x+2);r=Po(this,a,e,i,d,u,p,_,y,v),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=h.length;g<b;g++){const x=h[g],f=a[x.materialIndex],_=Math.max(x.start,m.start),y=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let v=_,A=y;v<A;v+=3){const M=v,w=v+1,k=v+2;r=Po(this,f,e,i,d,u,p,M,w,k),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),b=Math.min(c.count,m.start+m.count);for(let x=g,f=b;x<f;x+=3){const _=x,y=x+1,v=x+2;r=Po(this,a,e,i,d,u,p,_,y,v),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function C1(t,e,n,i,r,s,a,l){let c;if(e.side===sn?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===Ji,l),c===null)return null;Ro.copy(l),Ro.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(Ro);return d<n.near||d>n.far?null:{distance:d,point:Ro.clone(),object:t}}function Po(t,e,n,i,r,s,a,l,c,d){t.getVertexPosition(l,Co),t.getVertexPosition(c,Ao),t.getVertexPosition(d,ko);const u=C1(t,e,n,i,Co,Ao,ko,dm);if(u){const p=new j;On.getBarycoord(dm,Co,Ao,ko,p),r&&(u.uv=On.getInterpolatedAttribute(r,l,c,d,p,new Xe)),s&&(u.uv1=On.getInterpolatedAttribute(s,l,c,d,p,new Xe)),a&&(u.normal=On.getInterpolatedAttribute(a,l,c,d,p,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:l,b:c,c:d,normal:new j,materialIndex:0};On.getNormal(Co,Ao,ko,h.normal),u.face=h,u.barycoord=p}return u}class $a extends xn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],d=[],u=[],p=[];let h=0,m=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(p,2));function g(b,x,f,_,y,v,A,M,w,k,T){const S=v/w,I=A/k,G=v/2,H=A/2,J=M/2,ne=w+1,K=k+1;let ie=0,D=0;const Z=new j;for(let P=0;P<K;P++){const R=P*I-H;for(let ee=0;ee<ne;ee++){const ue=ee*S-G;Z[b]=ue*_,Z[x]=R*y,Z[f]=J,d.push(Z.x,Z.y,Z.z),Z[b]=0,Z[x]=0,Z[f]=M>0?1:-1,u.push(Z.x,Z.y,Z.z),p.push(ee/w),p.push(1-P/k),ie+=1}}for(let P=0;P<k;P++)for(let R=0;R<w;R++){const ee=h+R+ne*P,ue=h+R+ne*(P+1),z=h+(R+1)+ne*(P+1),B=h+(R+1)+ne*P;c.push(ee,ue,B),c.push(ue,z,B),D+=6}l.addGroup(m,D,T),m+=D,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Ps(t[n]);for(const r in i)e[r]=i[r]}return e}function A1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Vv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const k1={clone:Ps,merge:Gt};var N1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Lr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N1,this.fragmentShader=R1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=A1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Gv extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new j,um=new Xe,hm=new Xe;class hn extends Gv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ih*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ih*2*Math.atan(Math.tan(Vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,n){return this.getViewBounds(e,um,hm),n.subVectors(hm,um)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,d=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/d,r*=a.width/c,i*=a.height/d}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const $r=-90,Yr=1;class P1 extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn($r,Yr,e,n);r.layers=this.layers,this.add(r);const s=new hn($r,Yr,e,n);s.layers=this.layers,this.add(s);const a=new hn($r,Yr,e,n);a.layers=this.layers,this.add(a);const l=new hn($r,Yr,e,n);l.layers=this.layers,this.add(l);const c=new hn($r,Yr,e,n);c.layers=this.layers,this.add(c);const d=new hn($r,Yr,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,l,c]=n;for(const d of n)this.remove(d);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,d,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,l),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,d),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(p,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Wv extends an{constructor(e,n,i,r,s,a,l,c,d,u){e=e!==void 0?e:[],n=n!==void 0?n:As,super(e,n,i,r,s,a,l,c,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class I1 extends Rr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $a(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:$i});s.uniforms.tEquirect.value=n;const a=new En(r,s),l=n.minFilter;return n.minFilter===Sr&&(n.minFilter=Kn),new P1(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const dd=new j,L1=new j,D1=new He;class pr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=dd.subVectors(i,n).cross(L1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(dd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||D1.getNormalMatrix(e),r=this.coplanarPoint(dd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Xa,Io=new j;class xf{constructor(e=new pr,n=new pr,i=new pr,r=new pr,s=new pr,a=new pr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi){const i=this.planes,r=e.elements,s=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],p=r[6],h=r[7],m=r[8],g=r[9],b=r[10],x=r[11],f=r[12],_=r[13],y=r[14],v=r[15];if(i[0].setComponents(c-s,h-d,x-m,v-f).normalize(),i[1].setComponents(c+s,h+d,x+m,v+f).normalize(),i[2].setComponents(c+a,h+u,x+g,v+_).normalize(),i[3].setComponents(c-a,h-u,x-g,v-_).normalize(),i[4].setComponents(c-l,h-p,x-b,v-y).normalize(),n===pi)i[5].setComponents(c+l,h+p,x+b,v+y).normalize();else if(n===Fl)i[5].setComponents(l,p,b,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Io.x=r.normal.x>0?e.max.x:e.min.x,Io.y=r.normal.y>0?e.max.y:e.min.y,Io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function F1(t){const e=new WeakMap;function n(l,c){const d=l.array,u=l.usage,p=d.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,d,u),l.onUploadCallback();let m;if(d instanceof Float32Array)m=t.FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=t.SHORT;else if(d instanceof Uint32Array)m=t.UNSIGNED_INT;else if(d instanceof Int32Array)m=t.INT;else if(d instanceof Int8Array)m=t.BYTE;else if(d instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,c,d){const u=c.array,p=c.updateRanges;if(t.bindBuffer(d,l),p.length===0)t.bufferSubData(d,0,u);else{p.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<p.length;m++){const g=p[h],b=p[m];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++h,p[h]=b)}p.length=h+1;for(let m=0,g=p.length;m<g;m++){const b=p[m];t.bufferSubData(d,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,n(l,c));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,l,c),d.version=l.version}}return{get:r,remove:s,update:a}}class hc extends xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,l=Math.floor(i),c=Math.floor(r),d=l+1,u=c+1,p=e/l,h=n/c,m=[],g=[],b=[],x=[];for(let f=0;f<u;f++){const _=f*h-a;for(let y=0;y<d;y++){const v=y*p-s;g.push(v,-_,0),b.push(0,0,1),x.push(y/l),x.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<l;_++){const y=_+d*f,v=_+d*(f+1),A=_+1+d*(f+1),M=_+1+d*f;m.push(y,v,M),m.push(v,A,M)}this.setIndex(m),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(b,3)),this.setAttribute("uv",new on(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var U1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,j1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,G1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,q1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,K1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,aw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ow=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fw="gl_FragColor = linearToOutputTexel( gl_FragColor );",pw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_w=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ww=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ew=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Aw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ow=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ww=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,GM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:U1,alphahash_pars_fragment:O1,alphamap_fragment:j1,alphamap_pars_fragment:z1,alphatest_fragment:B1,alphatest_pars_fragment:H1,aomap_fragment:V1,aomap_pars_fragment:G1,batching_pars_vertex:W1,batching_vertex:q1,begin_vertex:X1,beginnormal_vertex:$1,bsdfs:Y1,iridescence_fragment:K1,bumpmap_pars_fragment:Z1,clipping_planes_fragment:Q1,clipping_planes_pars_fragment:J1,clipping_planes_pars_vertex:ew,clipping_planes_vertex:tw,color_fragment:nw,color_pars_fragment:iw,color_pars_vertex:rw,color_vertex:sw,common:aw,cube_uv_reflection_fragment:ow,defaultnormal_vertex:lw,displacementmap_pars_vertex:cw,displacementmap_vertex:dw,emissivemap_fragment:uw,emissivemap_pars_fragment:hw,colorspace_fragment:fw,colorspace_pars_fragment:pw,envmap_fragment:mw,envmap_common_pars_fragment:xw,envmap_pars_fragment:gw,envmap_pars_vertex:vw,envmap_physical_pars_fragment:kw,envmap_vertex:yw,fog_vertex:_w,fog_pars_vertex:bw,fog_fragment:Sw,fog_pars_fragment:ww,gradientmap_pars_fragment:Mw,lightmap_pars_fragment:Ew,lights_lambert_fragment:Tw,lights_lambert_pars_fragment:Cw,lights_pars_begin:Aw,lights_toon_fragment:Nw,lights_toon_pars_fragment:Rw,lights_phong_fragment:Pw,lights_phong_pars_fragment:Iw,lights_physical_fragment:Lw,lights_physical_pars_fragment:Dw,lights_fragment_begin:Fw,lights_fragment_maps:Uw,lights_fragment_end:Ow,logdepthbuf_fragment:jw,logdepthbuf_pars_fragment:zw,logdepthbuf_pars_vertex:Bw,logdepthbuf_vertex:Hw,map_fragment:Vw,map_pars_fragment:Gw,map_particle_fragment:Ww,map_particle_pars_fragment:qw,metalnessmap_fragment:Xw,metalnessmap_pars_fragment:$w,morphinstance_vertex:Yw,morphcolor_vertex:Kw,morphnormal_vertex:Zw,morphtarget_pars_vertex:Qw,morphtarget_vertex:Jw,normal_fragment_begin:eM,normal_fragment_maps:tM,normal_pars_fragment:nM,normal_pars_vertex:iM,normal_vertex:rM,normalmap_pars_fragment:sM,clearcoat_normal_fragment_begin:aM,clearcoat_normal_fragment_maps:oM,clearcoat_pars_fragment:lM,iridescence_pars_fragment:cM,opaque_fragment:dM,packing:uM,premultiplied_alpha_fragment:hM,project_vertex:fM,dithering_fragment:pM,dithering_pars_fragment:mM,roughnessmap_fragment:xM,roughnessmap_pars_fragment:gM,shadowmap_pars_fragment:vM,shadowmap_pars_vertex:yM,shadowmap_vertex:_M,shadowmask_pars_fragment:bM,skinbase_vertex:SM,skinning_pars_vertex:wM,skinning_vertex:MM,skinnormal_vertex:EM,specularmap_fragment:TM,specularmap_pars_fragment:CM,tonemapping_fragment:AM,tonemapping_pars_fragment:kM,transmission_fragment:NM,transmission_pars_fragment:RM,uv_pars_fragment:PM,uv_pars_vertex:IM,uv_vertex:LM,worldpos_vertex:DM,background_vert:FM,background_frag:UM,backgroundCube_vert:OM,backgroundCube_frag:jM,cube_vert:zM,cube_frag:BM,depth_vert:HM,depth_frag:VM,distanceRGBA_vert:GM,distanceRGBA_frag:WM,equirect_vert:qM,equirect_frag:XM,linedashed_vert:$M,linedashed_frag:YM,meshbasic_vert:KM,meshbasic_frag:ZM,meshlambert_vert:QM,meshlambert_frag:JM,meshmatcap_vert:eE,meshmatcap_frag:tE,meshnormal_vert:nE,meshnormal_frag:iE,meshphong_vert:rE,meshphong_frag:sE,meshphysical_vert:aE,meshphysical_frag:oE,meshtoon_vert:lE,meshtoon_frag:cE,points_vert:dE,points_frag:uE,shadow_vert:hE,shadow_frag:fE,sprite_vert:pE,sprite_frag:mE},fe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},$n={basic:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Gt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Gt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Gt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Gt([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Gt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Gt([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Gt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Gt([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Gt([fe.common,fe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Gt([fe.lights,fe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};$n.physical={uniforms:Gt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Lo={r:0,b:0,g:0},dr=new Jn,xE=new dt;function gE(t,e,n,i,r,s,a){const l=new Ze(0);let c=s===!0?0:1,d,u,p=null,h=0,m=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function b(_){let y=!1;const v=g(_);v===null?f(l,c):v&&v.isColor&&(f(v,1),y=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(_,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===cc)?(u===void 0&&(u=new En(new $a(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Ps($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),dr.copy(y.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xE.makeRotationFromEuler(dr)),u.material.toneMapped=Ke.getTransfer(v.colorSpace)!==st,(p!==v||h!==v.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,p=v,h=v.version,m=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(d===void 0&&(d=new En(new hc(2,2),new er({name:"BackgroundMaterial",uniforms:Ps($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=v,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.toneMapped=Ke.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),d.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||h!==v.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,p=v,h=v.version,m=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null))}function f(_,y){_.getRGB(Lo,Vv(t)),i.buffers.color.setClear(Lo.r,Lo.g,Lo.b,y,a)}return{getClearColor:function(){return l},setClearColor:function(_,y=1){l.set(_),c=y,f(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,f(l,c)},render:b,addToRenderList:x}}function vE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function l(S,I,G,H,J){let ne=!1;const K=p(H,G,I);s!==K&&(s=K,d(s.object)),ne=m(S,H,G,J),ne&&g(S,H,G,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,v(S,I,G,H),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return t.createVertexArray()}function d(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function p(S,I,G){const H=G.wireframe===!0;let J=i[S.id];J===void 0&&(J={},i[S.id]=J);let ne=J[I.id];ne===void 0&&(ne={},J[I.id]=ne);let K=ne[H];return K===void 0&&(K=h(c()),ne[H]=K),K}function h(S){const I=[],G=[],H=[];for(let J=0;J<n;J++)I[J]=0,G[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:H,object:S,attributes:{},index:null}}function m(S,I,G,H){const J=s.attributes,ne=I.attributes;let K=0;const ie=G.getAttributes();for(const D in ie)if(ie[D].location>=0){const P=J[D];let R=ne[D];if(R===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(R=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(R=S.instanceColor)),P===void 0||P.attribute!==R||R&&P.data!==R.data)return!0;K++}return s.attributesNum!==K||s.index!==H}function g(S,I,G,H){const J={},ne=I.attributes;let K=0;const ie=G.getAttributes();for(const D in ie)if(ie[D].location>=0){let P=ne[D];P===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(P=S.instanceColor));const R={};R.attribute=P,P&&P.data&&(R.data=P.data),J[D]=R,K++}s.attributes=J,s.attributesNum=K,s.index=H}function b(){const S=s.newAttributes;for(let I=0,G=S.length;I<G;I++)S[I]=0}function x(S){f(S,0)}function f(S,I){const G=s.newAttributes,H=s.enabledAttributes,J=s.attributeDivisors;G[S]=1,H[S]===0&&(t.enableVertexAttribArray(S),H[S]=1),J[S]!==I&&(t.vertexAttribDivisor(S,I),J[S]=I)}function _(){const S=s.newAttributes,I=s.enabledAttributes;for(let G=0,H=I.length;G<H;G++)I[G]!==S[G]&&(t.disableVertexAttribArray(G),I[G]=0)}function y(S,I,G,H,J,ne,K){K===!0?t.vertexAttribIPointer(S,I,G,J,ne):t.vertexAttribPointer(S,I,G,H,J,ne)}function v(S,I,G,H){b();const J=H.attributes,ne=G.getAttributes(),K=I.defaultAttributeValues;for(const ie in ne){const D=ne[ie];if(D.location>=0){let Z=J[ie];if(Z===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Z!==void 0){const P=Z.normalized,R=Z.itemSize,ee=e.get(Z);if(ee===void 0)continue;const ue=ee.buffer,z=ee.type,B=ee.bytesPerElement,Y=z===t.INT||z===t.UNSIGNED_INT||Z.gpuType===cf;if(Z.isInterleavedBufferAttribute){const X=Z.data,ce=X.stride,he=Z.offset;if(X.isInstancedInterleavedBuffer){for(let ye=0;ye<D.locationSize;ye++)f(D.location+ye,X.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ye=0;ye<D.locationSize;ye++)x(D.location+ye);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let ye=0;ye<D.locationSize;ye++)y(D.location+ye,R/D.locationSize,z,P,ce*B,(he+R/D.locationSize*ye)*B,Y)}else{if(Z.isInstancedBufferAttribute){for(let X=0;X<D.locationSize;X++)f(D.location+X,Z.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let X=0;X<D.locationSize;X++)x(D.location+X);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let X=0;X<D.locationSize;X++)y(D.location+X,R/D.locationSize,z,P,R*B,R/D.locationSize*X*B,Y)}}else if(K!==void 0){const P=K[ie];if(P!==void 0)switch(P.length){case 2:t.vertexAttrib2fv(D.location,P);break;case 3:t.vertexAttrib3fv(D.location,P);break;case 4:t.vertexAttrib4fv(D.location,P);break;default:t.vertexAttrib1fv(D.location,P)}}}}_()}function A(){k();for(const S in i){const I=i[S];for(const G in I){const H=I[G];for(const J in H)u(H[J].object),delete H[J];delete I[G]}delete i[S]}}function M(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const G in I){const H=I[G];for(const J in H)u(H[J].object),delete H[J];delete I[G]}delete i[S.id]}function w(S){for(const I in i){const G=i[I];if(G[S.id]===void 0)continue;const H=G[S.id];for(const J in H)u(H[J].object),delete H[J];delete G[S.id]}}function k(){T(),a=!0,s!==r&&(s=r,d(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:k,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:x,disableUnusedAttributes:_}}function yE(t,e,n){let i;function r(d){i=d}function s(d,u){t.drawArrays(i,d,u),n.update(u,i,1)}function a(d,u,p){p!==0&&(t.drawArraysInstanced(i,d,u,p),n.update(u,i,p))}function l(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,u,0,p);let m=0;for(let g=0;g<p;g++)m+=u[g];n.update(m,i,1)}function c(d,u,p,h){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)a(d[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,d,0,u,0,h,0,p);let g=0;for(let b=0;b<p;b++)g+=u[b]*h[b];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function _E(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==jn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const k=w===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Si&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fi&&!k)}function c(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const u=c(d);u!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",u,"instead."),d=u);const p=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,M=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:p,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:M}}function bE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new pr,l=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=u(p,h,0)},this.setState=function(p,h,m){const g=p.clippingPlanes,b=p.clipIntersection,x=p.clipShadows,f=t.get(p);if(!r||g===null||g.length===0||s&&!x)s?u(null):d();else{const _=s?0:i,y=_*4;let v=f.clippingState||null;c.value=v,v=u(g,h,y,m);for(let A=0;A!==y;++A)v[A]=n[A];f.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function d(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,h,m,g){const b=p!==null?p.length:0;let x=null;if(b!==0){if(x=c.value,g!==!0||x===null){const f=m+b*4,_=h.matrixWorldInverse;l.getNormalMatrix(_),(x===null||x.length<f)&&(x=new Float32Array(f));for(let y=0,v=m;y!==b;++y,v+=4)a.copy(p[y]).applyMatrix4(_,l),a.normal.toArray(x,v),x[v+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function SE(t){let e=new WeakMap;function n(a,l){return l===Cu?a.mapping=As:l===Au&&(a.mapping=ks),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===Cu||l===Au)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const d=new I1(c.height);return d.fromEquirectangularTexture(t,a),e.set(a,d),a.addEventListener("dispose",r),n(d.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wE extends Gv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,a=s+d*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cs=4,fm=[.125,.215,.35,.446,.526,.582],gr=20,ud=new wE,pm=new Ze;let hd=null,fd=0,pd=0,md=!1;const mr=(1+Math.sqrt(5))/2,Kr=1/mr,mm=[new j(-mr,Kr,0),new j(mr,Kr,0),new j(-Kr,0,mr),new j(Kr,0,mr),new j(0,mr,-Kr),new j(0,mr,Kr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){hd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hd,fd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===As||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Va,format:jn,colorSpace:Fs,depthBuffer:!1},r=gm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ME(s)),this._blurMaterial=EE(s,e,n)}return r}_compileMaterial(e){const n=new En(this._lodPlanes[0],e);this._renderer.compile(n,ud)}_sceneToCubeUV(e,n,i,r){const l=new hn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor(pm),u.toneMapping=Yi,u.autoClear=!1;const m=new zv({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new En(new $a,m);let b=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,b=!0):(m.color.copy(pm),b=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(l.up.set(0,c[f],0),l.lookAt(d[f],0,0)):_===1?(l.up.set(0,0,c[f]),l.lookAt(0,d[f],0)):(l.up.set(0,c[f],0),l.lookAt(0,0,d[f]));const y=this._cubeSize;Do(r,_*y,f>2?y:0,y,y),u.setRenderTarget(r),b&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=p,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===As||e.mapping===ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new En(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Do(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,ud)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=mm[(r-s-1)%mm.length];this._blur(e,s-1,s,a,l)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,l){const c=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new En(this._lodPlanes[r],d),h=d.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*gr-1),b=s/g,x=isFinite(s)?1+Math.floor(u*b):gr;x>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${gr}`);const f=[];let _=0;for(let w=0;w<gr;++w){const k=w/b,T=Math.exp(-k*k/2);f.push(T),w===0?_+=T:w<x&&(_+=2*T)}for(let w=0;w<f.length;w++)f[w]=f[w]/_;h.envMap.value=e.texture,h.samples.value=x,h.weights.value=f,h.latitudinal.value=a==="latitudinal",l&&(h.poleAxis.value=l);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const v=this._sizeLods[r],A=3*v*(r>y-cs?r-y+cs:0),M=4*(this._cubeSize-v);Do(n,A,M,3*v,2*v),c.setRenderTarget(n),c.render(p,ud)}}function ME(t){const e=[],n=[],i=[];let r=t;const s=t-cs+1+fm.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);n.push(l);let c=1/l;a>t-cs?c=fm[a-t+cs-1]:a===0&&(c=0),i.push(c);const d=1/(l-2),u=-d,p=1+d,h=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,g=6,b=3,x=2,f=1,_=new Float32Array(b*g*m),y=new Float32Array(x*g*m),v=new Float32Array(f*g*m);for(let M=0;M<m;M++){const w=M%3*2/3-1,k=M>2?0:-1,T=[w,k,0,w+2/3,k,0,w+2/3,k+1,0,w,k,0,w+2/3,k+1,0,w,k+1,0];_.set(T,b*g*M),y.set(h,x*g*M);const S=[M,M,M,M,M,M];v.set(S,f*g*M)}const A=new xn;A.setAttribute("position",new Vn(_,b)),A.setAttribute("uv",new Vn(y,x)),A.setAttribute("faceIndex",new Vn(v,f)),e.push(A),r>cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function gm(t,e,n){const i=new Rr(t,e,n);return i.texture.mapping=cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function EE(t,e,n){const i=new Float32Array(gr),r=new j(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function vm(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function ym(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function gf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TE(t){let e=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const c=l.mapping,d=c===Cu||c===Au,u=c===As||c===ks;if(d||u){let p=e.get(l);const h=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==h)return n===null&&(n=new xm(t)),p=d?n.fromEquirectangular(l,p):n.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),p.texture;if(p!==void 0)return p.texture;{const m=l.image;return d&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new xm(t)),p=d?n.fromEquirectangular(l):n.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),l.addEventListener("dispose",s),p.texture):null}}}return l}function r(l){let c=0;const d=6;for(let u=0;u<d;u++)l[u]!==void 0&&c++;return c===d}function s(l){const c=l.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function CE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&oa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function AE(t,e,n,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const b=h.morphAttributes[g];for(let x=0,f=b.length;x<f;x++)e.remove(b[x])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function l(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function c(p){const h=p.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const b=m[g];for(let x=0,f=b.length;x<f;x++)e.update(b[x],t.ARRAY_BUFFER)}}function d(p){const h=[],m=p.index,g=p.attributes.position;let b=0;if(m!==null){const _=m.array;b=m.version;for(let y=0,v=_.length;y<v;y+=3){const A=_[y+0],M=_[y+1],w=_[y+2];h.push(A,M,M,w,w,A)}}else if(g!==void 0){const _=g.array;b=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){const A=y+0,M=y+1,w=y+2;h.push(A,M,M,w,w,A)}}else return;const x=new(Fv(h)?Hv:Bv)(h,1);x.version=b;const f=s.get(p);f&&e.remove(f),s.set(p,x)}function u(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&d(p)}else d(p);return s.get(p)}return{get:l,update:c,getWireframeAttribute:u}}function kE(t,e,n){let i;function r(h){i=h}let s,a;function l(h){s=h.type,a=h.bytesPerElement}function c(h,m){t.drawElements(i,m,s,h*a),n.update(m,i,1)}function d(h,m,g){g!==0&&(t.drawElementsInstanced(i,m,s,h*a,g),n.update(m,i,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,g);let x=0;for(let f=0;f<g;f++)x+=m[f];n.update(x,i,1)}function p(h,m,g,b){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let f=0;f<h.length;f++)d(h[f]/a,m[f],b[f]);else{x.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,b,0,g);let f=0;for(let _=0;_<g;_++)f+=m[_]*b[_];n.update(f,i,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function NE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RE(t,e,n){const i=new WeakMap,r=new at;function s(a,l,c){const d=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=u!==void 0?u.length:0;let h=i.get(l);if(h===void 0||h.count!==p){let S=function(){k.dispose(),i.delete(l),l.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const g=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],_=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let v=0;g===!0&&(v=1),b===!0&&(v=2),x===!0&&(v=3);let A=l.attributes.position.count*v,M=1;A>e.maxTextureSize&&(M=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*M*4*p),k=new Ov(w,A,M,p);k.type=fi,k.needsUpdate=!0;const T=v*4;for(let I=0;I<p;I++){const G=f[I],H=_[I],J=y[I],ne=A*M*4*I;for(let K=0;K<G.count;K++){const ie=K*T;g===!0&&(r.fromBufferAttribute(G,K),w[ne+ie+0]=r.x,w[ne+ie+1]=r.y,w[ne+ie+2]=r.z,w[ne+ie+3]=0),b===!0&&(r.fromBufferAttribute(H,K),w[ne+ie+4]=r.x,w[ne+ie+5]=r.y,w[ne+ie+6]=r.z,w[ne+ie+7]=0),x===!0&&(r.fromBufferAttribute(J,K),w[ne+ie+8]=r.x,w[ne+ie+9]=r.y,w[ne+ie+10]=r.z,w[ne+ie+11]=J.itemSize===4?r.w:1)}}h={count:p,texture:k,size:new Xe(A,M)},i.set(l,h),l.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let x=0;x<d.length;x++)g+=d[x];const b=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",b),c.getUniforms().setValue(t,"morphTargetInfluences",d)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function PE(t,e,n,i){let r=new WeakMap;function s(c){const d=i.render.frame,u=c.geometry,p=e.get(c,u);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return p}function a(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:a}}class Xv extends an{constructor(e,n,i,r,s,a,l,c,d,u=gs){if(u!==gs&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gs&&(i=Nr),i===void 0&&u===Rs&&(i=Ns),super(null,r,s,a,l,c,u,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=l!==void 0?l:Hn,this.minFilter=c!==void 0?c:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const $v=new an,_m=new Xv(1,1),Yv=new Ov,Kv=new g1,Zv=new Wv,bm=[],Sm=[],wm=new Float32Array(16),Mm=new Float32Array(9),Em=new Float32Array(4);function Os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bm[r];if(s===void 0&&(s=new Float32Array(r),bm[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(s,l)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fc(t,e){let n=Sm[e];n===void 0&&(n=new Int32Array(e),Sm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function IE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function UE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Em.set(i),t.uniformMatrix2fv(this.addr,!1,Em),Ct(n,i)}}function OE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Mm.set(i),t.uniformMatrix3fv(this.addr,!1,Mm),Ct(n,i)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;wm.set(i),t.uniformMatrix4fv(this.addr,!1,wm),Ct(n,i)}}function zE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function GE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function $E(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(_m.compareFunction=Dv,s=_m):s=$v,n.setTexture2D(e||s,r)}function YE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Kv,r)}function KE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Zv,r)}function ZE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Yv,r)}function QE(t){switch(t){case 5126:return IE;case 35664:return LE;case 35665:return DE;case 35666:return FE;case 35674:return UE;case 35675:return OE;case 35676:return jE;case 5124:case 35670:return zE;case 35667:case 35671:return BE;case 35668:case 35672:return HE;case 35669:case 35673:return VE;case 5125:return GE;case 36294:return WE;case 36295:return qE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return $E;case 35679:case 36299:case 36307:return YE;case 35680:case 36300:case 36308:case 36293:return KE;case 36289:case 36303:case 36311:case 36292:return ZE}}function JE(t,e){t.uniform1fv(this.addr,e)}function eT(t,e){const n=Os(e,this.size,2);t.uniform2fv(this.addr,n)}function tT(t,e){const n=Os(e,this.size,3);t.uniform3fv(this.addr,n)}function nT(t,e){const n=Os(e,this.size,4);t.uniform4fv(this.addr,n)}function iT(t,e){const n=Os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rT(t,e){const n=Os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sT(t,e){const n=Os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function aT(t,e){t.uniform1iv(this.addr,e)}function oT(t,e){t.uniform2iv(this.addr,e)}function lT(t,e){t.uniform3iv(this.addr,e)}function cT(t,e){t.uniform4iv(this.addr,e)}function dT(t,e){t.uniform1uiv(this.addr,e)}function uT(t,e){t.uniform2uiv(this.addr,e)}function hT(t,e){t.uniform3uiv(this.addr,e)}function fT(t,e){t.uniform4uiv(this.addr,e)}function pT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||$v,s[a])}function mT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Kv,s[a])}function xT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Zv,s[a])}function gT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Yv,s[a])}function vT(t){switch(t){case 5126:return JE;case 35664:return eT;case 35665:return tT;case 35666:return nT;case 35674:return iT;case 35675:return rT;case 35676:return sT;case 5124:case 35670:return aT;case 35667:case 35671:return oT;case 35668:case 35672:return lT;case 35669:case 35673:return cT;case 5125:return dT;case 36294:return uT;case 36295:return hT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return pT;case 35679:case 36299:case 36307:return mT;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return gT}}class yT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=QE(n.type)}}class _T{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vT(n.type)}}class bT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function Tm(t,e){t.seq.push(e),t.map[e.id]=e}function ST(t,e,n){const i=t.name,r=i.length;for(xd.lastIndex=0;;){const s=xd.exec(i),a=xd.lastIndex;let l=s[1];const c=s[2]==="]",d=s[3];if(c&&(l=l|0),d===void 0||d==="["&&a+2===r){Tm(n,d===void 0?new yT(l,t,e):new _T(l,t,e));break}else{let p=n.map[l];p===void 0&&(p=new bT(l),Tm(n,p)),n=p}}}class sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);ST(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Cm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const wT=37297;let MT=0;function ET(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}const Am=new He;function TT(t){Ke._getMatrix(Am,Ke.workingColorSpace,t);const e=`mat3( ${Am.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case dc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function km(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ET(t.getShaderSource(e),a)}else return r}function CT(t,e){const n=TT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function AT(t,e){let n;switch(e){case GS:n="Linear";break;case WS:n="Reinhard";break;case qS:n="Cineon";break;case XS:n="ACESFilmic";break;case YS:n="AgX";break;case KS:n="Neutral";break;case $S:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fo=new j;function kT(){Ke.getLuminanceCoefficients(Fo);const t=Fo.x.toFixed(4),e=Fo.y.toFixed(4),n=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function RT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function PT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function la(t){return t!==""}function Nm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IT=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(t){return t.replace(IT,DT)}const LT=new Map;function DT(t,e){let n=Ge[e];if(n===void 0){const i=LT.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rh(n)}const FT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pm(t){return t.replace(FT,UT)}function UT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Im(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===bv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===wS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function jT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case As:case ks:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function BT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Sv:e="ENVMAP_BLENDING_MULTIPLY";break;case HS:e="ENVMAP_BLENDING_MIX";break;case VS:e="ENVMAP_BLENDING_ADD";break}return e}function HT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function VT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=OT(n),d=jT(n),u=zT(n),p=BT(n),h=HT(n),m=NT(n),g=RT(s),b=r.createProgram();let x,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(la).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(la).join(`
`),f.length>0&&(f+=`
`)):(x=[Im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),f=[Im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+u:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Yi?AT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,CT("linearToOutputTexel",n.outputColorSpace),kT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),a=rh(a),a=Nm(a,n),a=Rm(a,n),l=rh(l),l=Nm(l,n),l=Rm(l,n),a=Pm(a),l=Pm(l),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",n.glslVersion===qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=_+x+a,v=_+f+l,A=Cm(r,r.VERTEX_SHADER,y),M=Cm(r,r.FRAGMENT_SHADER,v);r.attachShader(b,A),r.attachShader(b,M),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function w(I){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(b).trim(),H=r.getShaderInfoLog(A).trim(),J=r.getShaderInfoLog(M).trim();let ne=!0,K=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,A,M);else{const ie=km(r,A,"vertex"),D=km(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+ie+`
`+D)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||J==="")&&(K=!1);K&&(I.diagnostics={runnable:ne,programLog:G,vertexShader:{log:H,prefix:x},fragmentShader:{log:J,prefix:f}})}r.deleteShader(A),r.deleteShader(M),k=new sl(r,b),T=PT(r,b)}let k;this.getUniforms=function(){return k===void 0&&w(this),k};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(b,wT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MT++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=M,this}let GT=0;class WT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new qT(e),n.set(e,i)),i}}class qT{constructor(e){this.id=GT++,this.code=e,this.usedTimes=0}}function XT(t,e,n,i,r,s,a){const l=new mf,c=new WT,d=new Set,u=[],p=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return d.add(T),T===0?"uv":`uv${T}`}function x(T,S,I,G,H){const J=G.fog,ne=H.geometry,K=T.isMeshStandardMaterial?G.environment:null,ie=(T.isMeshStandardMaterial?n:e).get(T.envMap||K),D=ie&&ie.mapping===cc?ie.image.height:null,Z=g[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const P=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,R=P!==void 0?P.length:0;let ee=0;ne.morphAttributes.position!==void 0&&(ee=1),ne.morphAttributes.normal!==void 0&&(ee=2),ne.morphAttributes.color!==void 0&&(ee=3);let ue,z,B,Y;if(Z){const it=$n[Z];ue=it.vertexShader,z=it.fragmentShader}else ue=T.vertexShader,z=T.fragmentShader,c.update(T),B=c.getVertexShaderID(T),Y=c.getFragmentShaderID(T);const X=t.getRenderTarget(),ce=t.state.buffers.depth.getReversed(),he=H.isInstancedMesh===!0,ye=H.isBatchedMesh===!0,Pe=!!T.map,Me=!!T.matcap,Ue=!!ie,L=!!T.aoMap,nt=!!T.lightMap,De=!!T.bumpMap,Fe=!!T.normalMap,Te=!!T.displacementMap,Ye=!!T.emissiveMap,Ee=!!T.metalnessMap,N=!!T.roughnessMap,E=T.anisotropy>0,V=T.clearcoat>0,te=T.dispersion>0,se=T.iridescence>0,Q=T.sheen>0,Ce=T.transmission>0,pe=E&&!!T.anisotropyMap,_e=V&&!!T.clearcoatMap,qe=V&&!!T.clearcoatNormalMap,le=V&&!!T.clearcoatRoughnessMap,Se=se&&!!T.iridescenceMap,Le=se&&!!T.iridescenceThicknessMap,Oe=Q&&!!T.sheenColorMap,we=Q&&!!T.sheenRoughnessMap,$e=!!T.specularMap,Ve=!!T.specularColorMap,ot=!!T.specularIntensityMap,F=Ce&&!!T.transmissionMap,me=Ce&&!!T.thicknessMap,$=!!T.gradientMap,re=!!T.alphaMap,ve=T.alphaTest>0,xe=!!T.alphaHash,ze=!!T.extensions;let yt=Yi;T.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(yt=t.toneMapping);const Lt={shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:ue,fragmentShader:z,defines:T.defines,customVertexShaderID:B,customFragmentShaderID:Y,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:ye,batchingColor:ye&&H._colorsTexture!==null,instancing:he,instancingColor:he&&H.instanceColor!==null,instancingMorph:he&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:X===null?t.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Fs,alphaToCoverage:!!T.alphaToCoverage,map:Pe,matcap:Me,envMap:Ue,envMapMode:Ue&&ie.mapping,envMapCubeUVHeight:D,aoMap:L,lightMap:nt,bumpMap:De,normalMap:Fe,displacementMap:h&&Te,emissiveMap:Ye,normalMapObjectSpace:Fe&&T.normalMapType===e1,normalMapTangentSpace:Fe&&T.normalMapType===Lv,metalnessMap:Ee,roughnessMap:N,anisotropy:E,anisotropyMap:pe,clearcoat:V,clearcoatMap:_e,clearcoatNormalMap:qe,clearcoatRoughnessMap:le,dispersion:te,iridescence:se,iridescenceMap:Se,iridescenceThicknessMap:Le,sheen:Q,sheenColorMap:Oe,sheenRoughnessMap:we,specularMap:$e,specularColorMap:Ve,specularIntensityMap:ot,transmission:Ce,transmissionMap:F,thicknessMap:me,gradientMap:$,opaque:T.transparent===!1&&T.blending===xs&&T.alphaToCoverage===!1,alphaMap:re,alphaTest:ve,alphaHash:xe,combine:T.combine,mapUv:Pe&&b(T.map.channel),aoMapUv:L&&b(T.aoMap.channel),lightMapUv:nt&&b(T.lightMap.channel),bumpMapUv:De&&b(T.bumpMap.channel),normalMapUv:Fe&&b(T.normalMap.channel),displacementMapUv:Te&&b(T.displacementMap.channel),emissiveMapUv:Ye&&b(T.emissiveMap.channel),metalnessMapUv:Ee&&b(T.metalnessMap.channel),roughnessMapUv:N&&b(T.roughnessMap.channel),anisotropyMapUv:pe&&b(T.anisotropyMap.channel),clearcoatMapUv:_e&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:qe&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:we&&b(T.sheenRoughnessMap.channel),specularMapUv:$e&&b(T.specularMap.channel),specularColorMapUv:Ve&&b(T.specularColorMap.channel),specularIntensityMapUv:ot&&b(T.specularIntensityMap.channel),transmissionMapUv:F&&b(T.transmissionMap.channel),thicknessMapUv:me&&b(T.thicknessMap.channel),alphaMapUv:re&&b(T.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Fe||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ne.attributes.uv&&(Pe||re),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:ce,skinning:H.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:ee,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:Pe&&T.map.isVideoTexture===!0&&Ke.getTransfer(T.map.colorSpace)===st,decodeVideoTextureEmissive:Ye&&T.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(T.emissiveMap.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===di,flipSided:T.side===sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Lt.vertexUv1s=d.has(1),Lt.vertexUv2s=d.has(2),Lt.vertexUv3s=d.has(3),d.clear(),Lt}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)S.push(I),S.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(_(S,T),y(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function _(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function y(T,S){l.disableAll(),S.supportsVertexTextures&&l.enable(0),S.instancing&&l.enable(1),S.instancingColor&&l.enable(2),S.instancingMorph&&l.enable(3),S.matcap&&l.enable(4),S.envMap&&l.enable(5),S.normalMapObjectSpace&&l.enable(6),S.normalMapTangentSpace&&l.enable(7),S.clearcoat&&l.enable(8),S.iridescence&&l.enable(9),S.alphaTest&&l.enable(10),S.vertexColors&&l.enable(11),S.vertexAlphas&&l.enable(12),S.vertexUv1s&&l.enable(13),S.vertexUv2s&&l.enable(14),S.vertexUv3s&&l.enable(15),S.vertexTangents&&l.enable(16),S.anisotropy&&l.enable(17),S.alphaHash&&l.enable(18),S.batching&&l.enable(19),S.dispersion&&l.enable(20),S.batchingColor&&l.enable(21),T.push(l.mask),l.disableAll(),S.fog&&l.enable(0),S.useFog&&l.enable(1),S.flatShading&&l.enable(2),S.logarithmicDepthBuffer&&l.enable(3),S.reverseDepthBuffer&&l.enable(4),S.skinning&&l.enable(5),S.morphTargets&&l.enable(6),S.morphNormals&&l.enable(7),S.morphColors&&l.enable(8),S.premultipliedAlpha&&l.enable(9),S.shadowMapEnabled&&l.enable(10),S.doubleSided&&l.enable(11),S.flipSided&&l.enable(12),S.useDepthPacking&&l.enable(13),S.dithering&&l.enable(14),S.transmission&&l.enable(15),S.sheen&&l.enable(16),S.opaque&&l.enable(17),S.pointsUvs&&l.enable(18),S.decodeVideoTexture&&l.enable(19),S.decodeVideoTextureEmissive&&l.enable(20),S.alphaToCoverage&&l.enable(21),T.push(l.mask)}function v(T){const S=g[T.type];let I;if(S){const G=$n[S];I=k1.clone(G.uniforms)}else I=T.uniforms;return I}function A(T,S){let I;for(let G=0,H=u.length;G<H;G++){const J=u[G];if(J.cacheKey===S){I=J,++I.usedTimes;break}}return I===void 0&&(I=new VT(t,S,T,s),u.push(I)),I}function M(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function w(T){c.remove(T)}function k(){c.dispose()}return{getParameters:x,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:M,releaseShaderCache:w,programs:u,dispose:k}}function $T(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,c){t.get(a)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function YT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,h,m,g,b,x){let f=t[e];return f===void 0?(f={id:p.id,object:p,geometry:h,material:m,groupOrder:g,renderOrder:p.renderOrder,z:b,group:x},t[e]=f):(f.id=p.id,f.object=p,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=p.renderOrder,f.z=b,f.group=x),e++,f}function l(p,h,m,g,b,x){const f=a(p,h,m,g,b,x);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function c(p,h,m,g,b,x){const f=a(p,h,m,g,b,x);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function d(p,h){n.length>1&&n.sort(p||YT),i.length>1&&i.sort(h||Lm),r.length>1&&r.sort(h||Lm)}function u(){for(let p=e,h=t.length;p<h;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:u,sort:d}}function KT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Dm,t.set(i,[a])):r>=s.length?(a=new Dm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ZT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Ze};break;case"SpotLight":n={position:new j,direction:new j,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function QT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let JT=0;function e2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function t2(t){const e=new ZT,n=QT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new j);const r=new j,s=new dt,a=new dt;function l(d){let u=0,p=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,g=0,b=0,x=0,f=0,_=0,y=0,v=0,A=0,M=0,w=0;d.sort(e2);for(let T=0,S=d.length;T<S;T++){const I=d[T],G=I.color,H=I.intensity,J=I.distance,ne=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=G.r*H,p+=G.g*H,h+=G.b*H;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],H);w++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ie=I.shadow,D=n.get(I);D.shadowIntensity=ie.intensity,D.shadowBias=ie.bias,D.shadowNormalBias=ie.normalBias,D.shadowRadius=ie.radius,D.shadowMapSize=ie.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=I.shadow.matrix,_++}i.directional[m]=K,m++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(G).multiplyScalar(H),K.distance=J,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[b]=K;const ie=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,ie.updateMatrices(I),I.castShadow&&M++),i.spotLightMatrix[b]=ie.matrix,I.castShadow){const D=n.get(I);D.shadowIntensity=ie.intensity,D.shadowBias=ie.bias,D.shadowNormalBias=ie.normalBias,D.shadowRadius=ie.radius,D.shadowMapSize=ie.mapSize,i.spotShadow[b]=D,i.spotShadowMap[b]=ne,v++}b++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(G).multiplyScalar(H),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[x]=K,x++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const ie=I.shadow,D=n.get(I);D.shadowIntensity=ie.intensity,D.shadowBias=ie.bias,D.shadowNormalBias=ie.normalBias,D.shadowRadius=ie.radius,D.shadowMapSize=ie.mapSize,D.shadowCameraNear=ie.camera.near,D.shadowCameraFar=ie.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=I.shadow.matrix,y++}i.point[g]=K,g++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(H),K.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[f]=K,f++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=h;const k=i.hash;(k.directionalLength!==m||k.pointLength!==g||k.spotLength!==b||k.rectAreaLength!==x||k.hemiLength!==f||k.numDirectionalShadows!==_||k.numPointShadows!==y||k.numSpotShadows!==v||k.numSpotMaps!==A||k.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=x,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+A-M,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=w,k.directionalLength=m,k.pointLength=g,k.spotLength=b,k.rectAreaLength=x,k.hemiLength=f,k.numDirectionalShadows=_,k.numPointShadows=y,k.numSpotShadows=v,k.numSpotMaps=A,k.numLightProbes=w,i.version=JT++)}function c(d,u){let p=0,h=0,m=0,g=0,b=0;const x=u.matrixWorldInverse;for(let f=0,_=d.length;f<_;f++){const y=d[f];if(y.isDirectionalLight){const v=i.directional[p];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(x),p++}else if(y.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(x),m++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(x),a.identity(),s.copy(y.matrixWorld),s.premultiply(x),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(x),h++}else if(y.isHemisphereLight){const v=i.hemi[b];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(x),b++}}}return{setup:l,setupView:c,state:i}}function Fm(t){const e=new t2(t),n=[],i=[];function r(u){d.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function l(){e.setup(n)}function c(u){e.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function n2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new Fm(t),e.set(r,[l])):s>=a.length?(l=new Fm(t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class i2 extends Lr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=QS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r2 extends Lr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const s2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o2(t,e,n){let i=new xf;const r=new Xe,s=new Xe,a=new at,l=new i2({depthPacking:JS}),c=new r2,d={},u=n.maxTextureSize,p={[Ji]:sn,[sn]:Ji,[di]:di},h=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:s2,fragmentShader:a2}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new En(g,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bv;let f=this.type;this.render=function(M,w,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),G=t.state;G.setBlending($i),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=f!==oi&&this.type===oi,J=f===oi&&this.type!==oi;for(let ne=0,K=M.length;ne<K;ne++){const ie=M[ne],D=ie.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Z=D.getFrameExtents();if(r.multiply(Z),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,D.mapSize.y=s.y)),D.map===null||H===!0||J===!0){const R=this.type!==oi?{minFilter:Hn,magFilter:Hn}:{};D.map!==null&&D.map.dispose(),D.map=new Rr(r.x,r.y,R),D.map.texture.name=ie.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const P=D.getViewportCount();for(let R=0;R<P;R++){const ee=D.getViewport(R);a.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),G.viewport(a),D.updateMatrices(ie,R),i=D.getFrustum(),v(w,k,D.camera,ie,this.type)}D.isPointLightShadow!==!0&&this.type===oi&&_(D,k),D.needsUpdate=!1}f=this.type,x.needsUpdate=!1,t.setRenderTarget(T,S,I)};function _(M,w){const k=e.update(b);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Rr(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(w,null,k,h,b,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(w,null,k,m,b,null)}function y(M,w,k,T){let S=null;const I=k.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)S=I;else if(S=k.isPointLight===!0?c:l,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=S.uuid,H=w.uuid;let J=d[G];J===void 0&&(J={},d[G]=J);let ne=J[H];ne===void 0&&(ne=S.clone(),J[H]=ne,w.addEventListener("dispose",A)),S=ne}if(S.visible=w.visible,S.wireframe=w.wireframe,T===oi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:p[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,k.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=t.properties.get(S);G.light=k}return S}function v(M,w,k,T,S){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===oi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld);const H=e.update(M),J=M.material;if(Array.isArray(J)){const ne=H.groups;for(let K=0,ie=ne.length;K<ie;K++){const D=ne[K],Z=J[D.materialIndex];if(Z&&Z.visible){const P=y(M,Z,T,S);M.onBeforeShadow(t,M,w,k,H,P,D),t.renderBufferDirect(k,null,H,P,M,D),M.onAfterShadow(t,M,w,k,H,P,D)}}}else if(J.visible){const ne=y(M,J,T,S);M.onBeforeShadow(t,M,w,k,H,ne,null),t.renderBufferDirect(k,null,H,ne,M,null),M.onAfterShadow(t,M,w,k,H,ne,null)}}const G=M.children;for(let H=0,J=G.length;H<J;H++)v(G[H],w,k,T,S)}function A(M){M.target.removeEventListener("dispose",A);for(const k in d){const T=d[k],S=M.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const l2={[_u]:bu,[Su]:Eu,[wu]:Tu,[Cs]:Mu,[bu]:_u,[Eu]:Su,[Tu]:wu,[Mu]:Cs};function c2(t,e){function n(){let F=!1;const me=new at;let $=null;const re=new at(0,0,0,0);return{setMask:function(ve){$!==ve&&!F&&(t.colorMask(ve,ve,ve,ve),$=ve)},setLocked:function(ve){F=ve},setClear:function(ve,xe,ze,yt,Lt){Lt===!0&&(ve*=yt,xe*=yt,ze*=yt),me.set(ve,xe,ze,yt),re.equals(me)===!1&&(t.clearColor(ve,xe,ze,yt),re.copy(me))},reset:function(){F=!1,$=null,re.set(-1,0,0,0)}}}function i(){let F=!1,me=!1,$=null,re=null,ve=null;return{setReversed:function(xe){if(me!==xe){const ze=e.get("EXT_clip_control");me?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const yt=ve;ve=null,this.setClear(yt)}me=xe},getReversed:function(){return me},setTest:function(xe){xe?X(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(xe){$!==xe&&!F&&(t.depthMask(xe),$=xe)},setFunc:function(xe){if(me&&(xe=l2[xe]),re!==xe){switch(xe){case _u:t.depthFunc(t.NEVER);break;case bu:t.depthFunc(t.ALWAYS);break;case Su:t.depthFunc(t.LESS);break;case Cs:t.depthFunc(t.LEQUAL);break;case wu:t.depthFunc(t.EQUAL);break;case Mu:t.depthFunc(t.GEQUAL);break;case Eu:t.depthFunc(t.GREATER);break;case Tu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}re=xe}},setLocked:function(xe){F=xe},setClear:function(xe){ve!==xe&&(me&&(xe=1-xe),t.clearDepth(xe),ve=xe)},reset:function(){F=!1,$=null,re=null,ve=null,me=!1}}}function r(){let F=!1,me=null,$=null,re=null,ve=null,xe=null,ze=null,yt=null,Lt=null;return{setTest:function(it){F||(it?X(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(it){me!==it&&!F&&(t.stencilMask(it),me=it)},setFunc:function(it,kn,ei){($!==it||re!==kn||ve!==ei)&&(t.stencilFunc(it,kn,ei),$=it,re=kn,ve=ei)},setOp:function(it,kn,ei){(xe!==it||ze!==kn||yt!==ei)&&(t.stencilOp(it,kn,ei),xe=it,ze=kn,yt=ei)},setLocked:function(it){F=it},setClear:function(it){Lt!==it&&(t.clearStencil(it),Lt=it)},reset:function(){F=!1,me=null,$=null,re=null,ve=null,xe=null,ze=null,yt=null,Lt=null}}}const s=new n,a=new i,l=new r,c=new WeakMap,d=new WeakMap;let u={},p={},h=new WeakMap,m=[],g=null,b=!1,x=null,f=null,_=null,y=null,v=null,A=null,M=null,w=new Ze(0,0,0),k=0,T=!1,S=null,I=null,G=null,H=null,J=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ie=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(D)[1]),K=ie>=1):D.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),K=ie>=2);let Z=null,P={};const R=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),ue=new at().fromArray(R),z=new at().fromArray(ee);function B(F,me,$,re){const ve=new Uint8Array(4),xe=t.createTexture();t.bindTexture(F,xe),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ze=0;ze<$;ze++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,re,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(me+ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return xe}const Y={};Y[t.TEXTURE_2D]=B(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=B(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=B(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=B(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),X(t.DEPTH_TEST),a.setFunc(Cs),De(!1),Fe(zp),X(t.CULL_FACE),L($i);function X(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function ce(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function he(F,me){return p[F]!==me?(t.bindFramebuffer(F,me),p[F]=me,F===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=me),F===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=me),!0):!1}function ye(F,me){let $=m,re=!1;if(F){$=h.get(me),$===void 0&&($=[],h.set(me,$));const ve=F.textures;if($.length!==ve.length||$[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,ze=ve.length;xe<ze;xe++)$[xe]=t.COLOR_ATTACHMENT0+xe;$.length=ve.length,re=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,re=!0);re&&t.drawBuffers($)}function Pe(F){return g!==F?(t.useProgram(F),g=F,!0):!1}const Me={[xr]:t.FUNC_ADD,[ES]:t.FUNC_SUBTRACT,[TS]:t.FUNC_REVERSE_SUBTRACT};Me[CS]=t.MIN,Me[AS]=t.MAX;const Ue={[kS]:t.ZERO,[NS]:t.ONE,[RS]:t.SRC_COLOR,[vu]:t.SRC_ALPHA,[US]:t.SRC_ALPHA_SATURATE,[DS]:t.DST_COLOR,[IS]:t.DST_ALPHA,[PS]:t.ONE_MINUS_SRC_COLOR,[yu]:t.ONE_MINUS_SRC_ALPHA,[FS]:t.ONE_MINUS_DST_COLOR,[LS]:t.ONE_MINUS_DST_ALPHA,[OS]:t.CONSTANT_COLOR,[jS]:t.ONE_MINUS_CONSTANT_COLOR,[zS]:t.CONSTANT_ALPHA,[BS]:t.ONE_MINUS_CONSTANT_ALPHA};function L(F,me,$,re,ve,xe,ze,yt,Lt,it){if(F===$i){b===!0&&(ce(t.BLEND),b=!1);return}if(b===!1&&(X(t.BLEND),b=!0),F!==MS){if(F!==x||it!==T){if((f!==xr||v!==xr)&&(t.blendEquation(t.FUNC_ADD),f=xr,v=xr),it)switch(F){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bp:t.blendFunc(t.ONE,t.ONE);break;case Hp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,y=null,A=null,M=null,w.set(0,0,0),k=0,x=F,T=it}return}ve=ve||me,xe=xe||$,ze=ze||re,(me!==f||ve!==v)&&(t.blendEquationSeparate(Me[me],Me[ve]),f=me,v=ve),($!==_||re!==y||xe!==A||ze!==M)&&(t.blendFuncSeparate(Ue[$],Ue[re],Ue[xe],Ue[ze]),_=$,y=re,A=xe,M=ze),(yt.equals(w)===!1||Lt!==k)&&(t.blendColor(yt.r,yt.g,yt.b,Lt),w.copy(yt),k=Lt),x=F,T=!1}function nt(F,me){F.side===di?ce(t.CULL_FACE):X(t.CULL_FACE);let $=F.side===sn;me&&($=!$),De($),F.blending===xs&&F.transparent===!1?L($i):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const re=F.stencilWrite;l.setTest(re),re&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ye(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?X(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function De(F){S!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),S=F)}function Fe(F){F!==bS?(X(t.CULL_FACE),F!==I&&(F===zp?t.cullFace(t.BACK):F===SS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),I=F}function Te(F){F!==G&&(K&&t.lineWidth(F),G=F)}function Ye(F,me,$){F?(X(t.POLYGON_OFFSET_FILL),(H!==me||J!==$)&&(t.polygonOffset(me,$),H=me,J=$)):ce(t.POLYGON_OFFSET_FILL)}function Ee(F){F?X(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function N(F){F===void 0&&(F=t.TEXTURE0+ne-1),Z!==F&&(t.activeTexture(F),Z=F)}function E(F,me,$){$===void 0&&(Z===null?$=t.TEXTURE0+ne-1:$=Z);let re=P[$];re===void 0&&(re={type:void 0,texture:void 0},P[$]=re),(re.type!==F||re.texture!==me)&&(Z!==$&&(t.activeTexture($),Z=$),t.bindTexture(F,me||Y[F]),re.type=F,re.texture=me)}function V(){const F=P[Z];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(F){ue.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),ue.copy(F))}function we(F){z.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),z.copy(F))}function $e(F,me){let $=d.get(me);$===void 0&&($=new WeakMap,d.set(me,$));let re=$.get(F);re===void 0&&(re=t.getUniformBlockIndex(me,F.name),$.set(F,re))}function Ve(F,me){const re=d.get(me).get(F);c.get(me)!==re&&(t.uniformBlockBinding(me,re,F.__bindingPointIndex),c.set(me,re))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},Z=null,P={},p={},h=new WeakMap,m=[],g=null,b=!1,x=null,f=null,_=null,y=null,v=null,A=null,M=null,w=new Ze(0,0,0),k=0,T=!1,S=null,I=null,G=null,H=null,J=null,ue.set(0,0,t.canvas.width,t.canvas.height),z.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:X,disable:ce,bindFramebuffer:he,drawBuffers:ye,useProgram:Pe,setBlending:L,setMaterial:nt,setFlipSided:De,setCullFace:Fe,setLineWidth:Te,setPolygonOffset:Ye,setScissorTest:Ee,activeTexture:N,bindTexture:E,unbindTexture:V,compressedTexImage2D:te,compressedTexImage3D:se,texImage2D:Se,texImage3D:Le,updateUBOMapping:$e,uniformBlockBinding:Ve,texStorage2D:qe,texStorage3D:le,texSubImage2D:Q,texSubImage3D:Ce,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:Oe,viewport:we,reset:ot}}function Um(t,e,n,i){const r=d2(i);switch(n){case Cv:return t*e;case kv:return t*e;case Nv:return t*e*2;case Rv:return t*e/r.components*r.byteLength;case hf:return t*e/r.components*r.byteLength;case Pv:return t*e*2/r.components*r.byteLength;case ff:return t*e*2/r.components*r.byteLength;case Av:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case pf:return t*e*4/r.components*r.byteLength;case el:case tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pu:case Lu:return Math.max(t,16)*Math.max(e,8)/4;case Ru:case Iu:return Math.max(t,8)*Math.max(e,8)/2;case Du:case Fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Uu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ju:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case qu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $u:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Zu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case rl:case Qu:case Ju:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Iv:case eh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case th:case nh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function d2(t){switch(t){case Si:case Mv:return{byteLength:1,components:1};case Ua:case Ev:case Va:return{byteLength:2,components:1};case df:case uf:return{byteLength:2,components:4};case Nr:case cf:case fi:return{byteLength:4,components:1};case Tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function u2(t,e,n,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Xe,u=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,E){return m?new OffscreenCanvas(N,E):Ul("canvas")}function b(N,E,V){let te=1;const se=Ee(N);if((se.width>V||se.height>V)&&(te=V/Math.max(se.width,se.height)),te<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Q=Math.floor(te*se.width),Ce=Math.floor(te*se.height);p===void 0&&(p=g(Q,Ce));const pe=E?g(Q,Ce):p;return pe.width=Q,pe.height=Ce,pe.getContext("2d").drawImage(N,0,0,Q,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+Ce+")."),pe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),N;return N}function x(N){return N.generateMipmaps}function f(N){t.generateMipmap(N)}function _(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(N,E,V,te,se=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Q=E;if(E===t.RED&&(V===t.FLOAT&&(Q=t.R32F),V===t.HALF_FLOAT&&(Q=t.R16F),V===t.UNSIGNED_BYTE&&(Q=t.R8)),E===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(Q=t.R8UI),V===t.UNSIGNED_SHORT&&(Q=t.R16UI),V===t.UNSIGNED_INT&&(Q=t.R32UI),V===t.BYTE&&(Q=t.R8I),V===t.SHORT&&(Q=t.R16I),V===t.INT&&(Q=t.R32I)),E===t.RG&&(V===t.FLOAT&&(Q=t.RG32F),V===t.HALF_FLOAT&&(Q=t.RG16F),V===t.UNSIGNED_BYTE&&(Q=t.RG8)),E===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(Q=t.RG8UI),V===t.UNSIGNED_SHORT&&(Q=t.RG16UI),V===t.UNSIGNED_INT&&(Q=t.RG32UI),V===t.BYTE&&(Q=t.RG8I),V===t.SHORT&&(Q=t.RG16I),V===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),V===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),V===t.UNSIGNED_INT&&(Q=t.RGB32UI),V===t.BYTE&&(Q=t.RGB8I),V===t.SHORT&&(Q=t.RGB16I),V===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),V===t.UNSIGNED_INT&&(Q=t.RGBA32UI),V===t.BYTE&&(Q=t.RGBA8I),V===t.SHORT&&(Q=t.RGBA16I),V===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),E===t.RGBA){const Ce=se?dc:Ke.getTransfer(te);V===t.FLOAT&&(Q=t.RGBA32F),V===t.HALF_FLOAT&&(Q=t.RGBA16F),V===t.UNSIGNED_BYTE&&(Q=Ce===st?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(N,E){let V;return N?E===null||E===Nr||E===Ns?V=t.DEPTH24_STENCIL8:E===fi?V=t.DEPTH32F_STENCIL8:E===Ua&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Nr||E===Ns?V=t.DEPTH_COMPONENT24:E===fi?V=t.DEPTH_COMPONENT32F:E===Ua&&(V=t.DEPTH_COMPONENT16),V}function A(N,E){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Hn&&N.minFilter!==Kn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function M(N){const E=N.target;E.removeEventListener("dispose",M),k(E),E.isVideoTexture&&u.delete(E)}function w(N){const E=N.target;E.removeEventListener("dispose",w),S(E)}function k(N){const E=i.get(N);if(E.__webglInit===void 0)return;const V=N.source,te=h.get(V);if(te){const se=te[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(N),Object.keys(te).length===0&&h.delete(V)}i.remove(N)}function T(N){const E=i.get(N);t.deleteTexture(E.__webglTexture);const V=N.source,te=h.get(V);delete te[E.__cacheKey],a.memory.textures--}function S(N){const E=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(E.__webglFramebuffer[te]))for(let se=0;se<E.__webglFramebuffer[te].length;se++)t.deleteFramebuffer(E.__webglFramebuffer[te][se]);else t.deleteFramebuffer(E.__webglFramebuffer[te]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[te])}else{if(Array.isArray(E.__webglFramebuffer))for(let te=0;te<E.__webglFramebuffer.length;te++)t.deleteFramebuffer(E.__webglFramebuffer[te]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let te=0;te<E.__webglColorRenderbuffer.length;te++)E.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[te]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=N.textures;for(let te=0,se=V.length;te<se;te++){const Q=i.get(V[te]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(V[te])}i.remove(N)}let I=0;function G(){I=0}function H(){const N=I;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),I+=1,N}function J(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ne(N,E){const V=i.get(N);if(N.isVideoTexture&&Te(N),N.isRenderTargetTexture===!1&&N.version>0&&V.__version!==N.version){const te=N.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(V,N,E);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+E)}function K(N,E){const V=i.get(N);if(N.version>0&&V.__version!==N.version){z(V,N,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+E)}function ie(N,E){const V=i.get(N);if(N.version>0&&V.__version!==N.version){z(V,N,E);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+E)}function D(N,E){const V=i.get(N);if(N.version>0&&V.__version!==N.version){B(V,N,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+E)}const Z={[ku]:t.REPEAT,[br]:t.CLAMP_TO_EDGE,[Nu]:t.MIRRORED_REPEAT},P={[Hn]:t.NEAREST,[ZS]:t.NEAREST_MIPMAP_NEAREST,[xo]:t.NEAREST_MIPMAP_LINEAR,[Kn]:t.LINEAR,[Hc]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},R={[t1]:t.NEVER,[o1]:t.ALWAYS,[n1]:t.LESS,[Dv]:t.LEQUAL,[i1]:t.EQUAL,[a1]:t.GEQUAL,[r1]:t.GREATER,[s1]:t.NOTEQUAL};function ee(N,E){if(E.type===fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Kn||E.magFilter===Hc||E.magFilter===xo||E.magFilter===Sr||E.minFilter===Kn||E.minFilter===Hc||E.minFilter===xo||E.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,Z[E.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,Z[E.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,Z[E.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,P[E.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,P[E.minFilter]),E.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,R[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Hn||E.minFilter!==xo&&E.minFilter!==Sr||E.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ue(N,E){let V=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",M));const te=E.source;let se=h.get(te);se===void 0&&(se={},h.set(te,se));const Q=J(E);if(Q!==N.__cacheKey){se[Q]===void 0&&(se[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),se[Q].usedTimes++;const Ce=se[N.__cacheKey];Ce!==void 0&&(se[N.__cacheKey].usedTimes--,Ce.usedTimes===0&&T(E)),N.__cacheKey=Q,N.__webglTexture=se[Q].texture}return V}function z(N,E,V){let te=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=t.TEXTURE_3D);const se=ue(N,E),Q=E.source;n.bindTexture(te,N.__webglTexture,t.TEXTURE0+V);const Ce=i.get(Q);if(Q.version!==Ce.__version||se===!0){n.activeTexture(t.TEXTURE0+V);const pe=Ke.getPrimaries(Ke.workingColorSpace),_e=E.colorSpace===Ui?null:Ke.getPrimaries(E.colorSpace),qe=E.colorSpace===Ui||pe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let le=b(E.image,!1,r.maxTextureSize);le=Ye(E,le);const Se=s.convert(E.format,E.colorSpace),Le=s.convert(E.type);let Oe=y(E.internalFormat,Se,Le,E.colorSpace,E.isVideoTexture);ee(te,E);let we;const $e=E.mipmaps,Ve=E.isVideoTexture!==!0,ot=Ce.__version===void 0||se===!0,F=Q.dataReady,me=A(E,le);if(E.isDepthTexture)Oe=v(E.format===Rs,E.type),ot&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,Oe,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Oe,le.width,le.height,0,Se,Le,null));else if(E.isDataTexture)if($e.length>0){Ve&&ot&&n.texStorage2D(t.TEXTURE_2D,me,Oe,$e[0].width,$e[0].height);for(let $=0,re=$e.length;$<re;$++)we=$e[$],Ve?F&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,we.width,we.height,Se,Le,we.data):n.texImage2D(t.TEXTURE_2D,$,Oe,we.width,we.height,0,Se,Le,we.data);E.generateMipmaps=!1}else Ve?(ot&&n.texStorage2D(t.TEXTURE_2D,me,Oe,le.width,le.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,Se,Le,le.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,le.width,le.height,0,Se,Le,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Oe,$e[0].width,$e[0].height,le.depth);for(let $=0,re=$e.length;$<re;$++)if(we=$e[$],E.format!==jn)if(Se!==null)if(Ve){if(F)if(E.layerUpdates.size>0){const ve=Um(we.width,we.height,E.format,E.type);for(const xe of E.layerUpdates){const ze=we.data.subarray(xe*ve/we.data.BYTES_PER_ELEMENT,(xe+1)*ve/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,xe,we.width,we.height,1,Se,ze)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,we.width,we.height,le.depth,Se,we.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Oe,we.width,we.height,le.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,we.width,we.height,le.depth,Se,Le,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Oe,we.width,we.height,le.depth,0,Se,Le,we.data)}else{Ve&&ot&&n.texStorage2D(t.TEXTURE_2D,me,Oe,$e[0].width,$e[0].height);for(let $=0,re=$e.length;$<re;$++)we=$e[$],E.format!==jn?Se!==null?Ve?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,we.width,we.height,Se,we.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?F&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,we.width,we.height,Se,Le,we.data):n.texImage2D(t.TEXTURE_2D,$,Oe,we.width,we.height,0,Se,Le,we.data)}else if(E.isDataArrayTexture)if(Ve){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Oe,le.width,le.height,le.depth),F)if(E.layerUpdates.size>0){const $=Um(le.width,le.height,E.format,E.type);for(const re of E.layerUpdates){const ve=le.data.subarray(re*$/le.data.BYTES_PER_ELEMENT,(re+1)*$/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,le.width,le.height,1,Se,Le,ve)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,Le,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,le.width,le.height,le.depth,0,Se,Le,le.data);else if(E.isData3DTexture)Ve?(ot&&n.texStorage3D(t.TEXTURE_3D,me,Oe,le.width,le.height,le.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,Le,le.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,le.width,le.height,le.depth,0,Se,Le,le.data);else if(E.isFramebufferTexture){if(ot)if(Ve)n.texStorage2D(t.TEXTURE_2D,me,Oe,le.width,le.height);else{let $=le.width,re=le.height;for(let ve=0;ve<me;ve++)n.texImage2D(t.TEXTURE_2D,ve,Oe,$,re,0,Se,Le,null),$>>=1,re>>=1}}else if($e.length>0){if(Ve&&ot){const $=Ee($e[0]);n.texStorage2D(t.TEXTURE_2D,me,Oe,$.width,$.height)}for(let $=0,re=$e.length;$<re;$++)we=$e[$],Ve?F&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,Se,Le,we):n.texImage2D(t.TEXTURE_2D,$,Oe,Se,Le,we);E.generateMipmaps=!1}else if(Ve){if(ot){const $=Ee(le);n.texStorage2D(t.TEXTURE_2D,me,Oe,$.width,$.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Le,le)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Se,Le,le);x(E)&&f(te),Ce.__version=Q.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function B(N,E,V){if(E.image.length!==6)return;const te=ue(N,E),se=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+V);const Q=i.get(se);if(se.version!==Q.__version||te===!0){n.activeTexture(t.TEXTURE0+V);const Ce=Ke.getPrimaries(Ke.workingColorSpace),pe=E.colorSpace===Ui?null:Ke.getPrimaries(E.colorSpace),_e=E.colorSpace===Ui||Ce===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const qe=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let re=0;re<6;re++)!qe&&!le?Se[re]=b(E.image[re],!0,r.maxCubemapSize):Se[re]=le?E.image[re].image:E.image[re],Se[re]=Ye(E,Se[re]);const Le=Se[0],Oe=s.convert(E.format,E.colorSpace),we=s.convert(E.type),$e=y(E.internalFormat,Oe,we,E.colorSpace),Ve=E.isVideoTexture!==!0,ot=Q.__version===void 0||te===!0,F=se.dataReady;let me=A(E,Le);ee(t.TEXTURE_CUBE_MAP,E);let $;if(qe){Ve&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,$e,Le.width,Le.height);for(let re=0;re<6;re++){$=Se[re].mipmaps;for(let ve=0;ve<$.length;ve++){const xe=$[ve];E.format!==jn?Oe!==null?Ve?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,0,0,xe.width,xe.height,Oe,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,$e,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,0,0,xe.width,xe.height,Oe,we,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,$e,xe.width,xe.height,0,Oe,we,xe.data)}}}else{if($=E.mipmaps,Ve&&ot){$.length>0&&me++;const re=Ee(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,$e,re.width,re.height)}for(let re=0;re<6;re++)if(le){Ve?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Se[re].width,Se[re].height,Oe,we,Se[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,Se[re].width,Se[re].height,0,Oe,we,Se[re].data);for(let ve=0;ve<$.length;ve++){const ze=$[ve].image[re].image;Ve?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,0,0,ze.width,ze.height,Oe,we,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,$e,ze.width,ze.height,0,Oe,we,ze.data)}}else{Ve?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Oe,we,Se[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,Oe,we,Se[re]);for(let ve=0;ve<$.length;ve++){const xe=$[ve];Ve?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,0,0,Oe,we,xe.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,$e,Oe,we,xe.image[re])}}}x(E)&&f(t.TEXTURE_CUBE_MAP),Q.__version=se.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Y(N,E,V,te,se,Q){const Ce=s.convert(V.format,V.colorSpace),pe=s.convert(V.type),_e=y(V.internalFormat,Ce,pe,V.colorSpace),qe=i.get(E),le=i.get(V);if(le.__renderTarget=E,!qe.__hasExternalTextures){const Se=Math.max(1,E.width>>Q),Le=Math.max(1,E.height>>Q);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,Q,_e,Se,Le,E.depth,0,Ce,pe,null):n.texImage2D(se,Q,_e,Se,Le,0,Ce,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),Fe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,se,le.__webglTexture,0,De(E)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,se,le.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function X(N,E,V){if(t.bindRenderbuffer(t.RENDERBUFFER,N),E.depthBuffer){const te=E.depthTexture,se=te&&te.isDepthTexture?te.type:null,Q=v(E.stencilBuffer,se),Ce=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=De(E);Fe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,Q,E.width,E.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,Q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,N)}else{const te=E.textures;for(let se=0;se<te.length;se++){const Q=te[se],Ce=s.convert(Q.format,Q.colorSpace),pe=s.convert(Q.type),_e=y(Q.internalFormat,Ce,pe,Q.colorSpace),qe=De(E);V&&Fe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,_e,E.width,E.height):Fe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe,_e,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,_e,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(E.depthTexture);te.__renderTarget=E,(!te.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ne(E.depthTexture,0);const se=te.__webglTexture,Q=De(E);if(E.depthTexture.format===gs)Fe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(E.depthTexture.format===Rs)Fe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function he(N){const E=i.get(N),V=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const te=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),te){const se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,te.removeEventListener("dispose",se)};te.addEventListener("dispose",se),E.__depthDisposeCallback=se}E.__boundDepthTexture=te}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ce(E.__webglFramebuffer,N)}else if(V){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]===void 0)E.__webglDepthbuffer[te]=t.createRenderbuffer(),X(E.__webglDepthbuffer[te],N,!1);else{const se=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),X(E.__webglDepthbuffer,N,!1);else{const te=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,se)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(N,E,V){const te=i.get(N);E!==void 0&&Y(te.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&he(N)}function Pe(N){const E=N.texture,V=i.get(N),te=i.get(E);N.addEventListener("dispose",w);const se=N.textures,Q=N.isWebGLCubeRenderTarget===!0,Ce=se.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=E.version,a.memory.textures++),Q){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let _e=0;_e<E.mipmaps.length;_e++)V.__webglFramebuffer[pe][_e]=t.createFramebuffer()}else V.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)V.__webglFramebuffer[pe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let pe=0,_e=se.length;pe<_e;pe++){const qe=i.get(se[pe]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&Fe(N)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const _e=se[pe];V.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const qe=s.convert(_e.format,_e.colorSpace),le=s.convert(_e.type),Se=y(_e.internalFormat,qe,le,_e.colorSpace,N.isXRRenderTarget===!0),Le=De(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Se,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),X(V.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ee(t.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Y(V.__webglFramebuffer[pe][_e],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else Y(V.__webglFramebuffer[pe],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(E)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let pe=0,_e=se.length;pe<_e;pe++){const qe=se[pe],le=i.get(qe);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),ee(t.TEXTURE_2D,qe),Y(V.__webglFramebuffer,N,qe,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),x(qe)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(pe=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,te.__webglTexture),ee(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Y(V.__webglFramebuffer[_e],N,E,t.COLOR_ATTACHMENT0,pe,_e);else Y(V.__webglFramebuffer,N,E,t.COLOR_ATTACHMENT0,pe,0);x(E)&&f(pe),n.unbindTexture()}N.depthBuffer&&he(N)}function Me(N){const E=N.textures;for(let V=0,te=E.length;V<te;V++){const se=E[V];if(x(se)){const Q=_(N),Ce=i.get(se).__webglTexture;n.bindTexture(Q,Ce),f(Q),n.unbindTexture()}}}const Ue=[],L=[];function nt(N){if(N.samples>0){if(Fe(N)===!1){const E=N.textures,V=N.width,te=N.height;let se=t.COLOR_BUFFER_BIT;const Q=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(N),pe=E.length>1;if(pe)for(let _e=0;_e<E.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const qe=i.get(E[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,qe,0)}t.blitFramebuffer(0,0,V,te,0,0,V,te,se,t.NEAREST),c===!0&&(Ue.length=0,L.length=0,Ue.push(t.COLOR_ATTACHMENT0+_e),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ue.push(Q),L.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ue))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<E.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const qe=i.get(E[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const E=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function De(N){return Math.min(r.maxSamples,N.samples)}function Fe(N){const E=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(N){const E=a.render.frame;u.get(N)!==E&&(u.set(N,E),N.update())}function Ye(N,E){const V=N.colorSpace,te=N.format,se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||V!==Fs&&V!==Ui&&(Ke.getTransfer(V)===st?(te!==jn||se!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Ee(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=ne,this.setTexture2DArray=K,this.setTexture3D=ie,this.setTextureCube=D,this.rebindTextures=ye,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Fe}function h2(t,e){function n(i,r=Ui){let s;const a=Ke.getTransfer(r);if(i===Si)return t.UNSIGNED_BYTE;if(i===df)return t.UNSIGNED_SHORT_4_4_4_4;if(i===uf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Tv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Mv)return t.BYTE;if(i===Ev)return t.SHORT;if(i===Ua)return t.UNSIGNED_SHORT;if(i===cf)return t.INT;if(i===Nr)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===Va)return t.HALF_FLOAT;if(i===Cv)return t.ALPHA;if(i===Av)return t.RGB;if(i===jn)return t.RGBA;if(i===kv)return t.LUMINANCE;if(i===Nv)return t.LUMINANCE_ALPHA;if(i===gs)return t.DEPTH_COMPONENT;if(i===Rs)return t.DEPTH_STENCIL;if(i===Rv)return t.RED;if(i===hf)return t.RED_INTEGER;if(i===Pv)return t.RG;if(i===ff)return t.RG_INTEGER;if(i===pf)return t.RGBA_INTEGER;if(i===el||i===tl||i===nl||i===il)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ru||i===Pu||i===Iu||i===Lu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Iu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Du||i===Fu||i===Uu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Du||i===Fu)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Uu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ou||i===ju||i===zu||i===Bu||i===Hu||i===Vu||i===Gu||i===Wu||i===qu||i===Xu||i===$u||i===Yu||i===Ku||i===Zu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ou)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ju)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$u)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ku)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===Qu||i===Ju)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===rl)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ju)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Iv||i===eh||i===th||i===nh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===eh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===th)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class f2 extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ca extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p2={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const b of e.hand.values()){const x=n.getJointPose(b,i),f=this._getHandJoint(d,b);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const u=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],h=u.position.distanceTo(p.position),m=.02,g=.005;d.inputState.pinching&&h>m+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&h<=m-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(p2)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const m2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new an,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new er({vertexShader:m2,fragmentShader:x2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new En(new hc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v2 extends Us{constructor(e,n){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,d=null,u=null,p=null,h=null,m=null,g=null;const b=new g2,x=n.getContextAttributes();let f=null,_=null;const y=[],v=[],A=new Xe;let M=null;const w=new hn;w.viewport=new at;const k=new hn;k.viewport=new at;const T=[w,k],S=new f2;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let B=y[z];return B===void 0&&(B=new gd,y[z]=B),B.getTargetRaySpace()},this.getControllerGrip=function(z){let B=y[z];return B===void 0&&(B=new gd,y[z]=B),B.getGripSpace()},this.getHand=function(z){let B=y[z];return B===void 0&&(B=new gd,y[z]=B),B.getHandSpace()};function H(z){const B=v.indexOf(z.inputSource);if(B===-1)return;const Y=y[B];Y!==void 0&&(Y.update(z.inputSource,z.frame,d||a),Y.dispatchEvent({type:z.type,data:z.inputSource}))}function J(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ne);for(let z=0;z<y.length;z++){const B=v[z];B!==null&&(v[z]=null,y[z].disconnect(B))}I=null,G=null,b.reset(),e.setRenderTarget(f),m=null,h=null,p=null,r=null,_=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){l=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(z){d=z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ne),x.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const B={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,B),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Rr(m.framebufferWidth,m.framebufferHeight,{format:jn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let B=null,Y=null,X=null;x.depth&&(X=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,B=x.stencil?Rs:gs,Y=x.stencil?Ns:Nr);const ce={colorFormat:n.RGBA8,depthFormat:X,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Rr(h.textureWidth,h.textureHeight,{format:jn,type:Si,depthTexture:new Xv(h.textureWidth,h.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),d=null,a=await r.requestReferenceSpace(l),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ne(z){for(let B=0;B<z.removed.length;B++){const Y=z.removed[B],X=v.indexOf(Y);X>=0&&(v[X]=null,y[X].disconnect(Y))}for(let B=0;B<z.added.length;B++){const Y=z.added[B];let X=v.indexOf(Y);if(X===-1){for(let he=0;he<y.length;he++)if(he>=v.length){v.push(Y),X=he;break}else if(v[he]===null){v[he]=Y,X=he;break}if(X===-1)break}const ce=y[X];ce&&ce.connect(Y)}}const K=new j,ie=new j;function D(z,B,Y){K.setFromMatrixPosition(B.matrixWorld),ie.setFromMatrixPosition(Y.matrixWorld);const X=K.distanceTo(ie),ce=B.projectionMatrix.elements,he=Y.projectionMatrix.elements,ye=ce[14]/(ce[10]-1),Pe=ce[14]/(ce[10]+1),Me=(ce[9]+1)/ce[5],Ue=(ce[9]-1)/ce[5],L=(ce[8]-1)/ce[0],nt=(he[8]+1)/he[0],De=ye*L,Fe=ye*nt,Te=X/(-L+nt),Ye=Te*-L;if(B.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ye),z.translateZ(Te),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ce[10]===-1)z.projectionMatrix.copy(B.projectionMatrix),z.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const Ee=ye+Te,N=Pe+Te,E=De-Ye,V=Fe+(X-Ye),te=Me*Pe/N*Ee,se=Ue*Pe/N*Ee;z.projectionMatrix.makePerspective(E,V,te,se,Ee,N),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Z(z,B){B===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(B.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let B=z.near,Y=z.far;b.texture!==null&&(b.depthNear>0&&(B=b.depthNear),b.depthFar>0&&(Y=b.depthFar)),S.near=k.near=w.near=B,S.far=k.far=w.far=Y,(I!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,G=S.far),w.layers.mask=z.layers.mask|2,k.layers.mask=z.layers.mask|4,S.layers.mask=w.layers.mask|k.layers.mask;const X=z.parent,ce=S.cameras;Z(S,X);for(let he=0;he<ce.length;he++)Z(ce[he],X);ce.length===2?D(S,w,k):S.projectionMatrix.copy(w.projectionMatrix),P(z,S,X)};function P(z,B,Y){Y===null?z.matrix.copy(B.matrixWorld):(z.matrix.copy(Y.matrixWorld),z.matrix.invert(),z.matrix.multiply(B.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(B.projectionMatrix),z.projectionMatrixInverse.copy(B.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ih*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(z){c=z,h!==null&&(h.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(S)};let R=null;function ee(z,B){if(u=B.getViewerPose(d||a),g=B,u!==null){const Y=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let X=!1;Y.length!==S.cameras.length&&(S.cameras.length=0,X=!0);for(let he=0;he<Y.length;he++){const ye=Y[he];let Pe=null;if(m!==null)Pe=m.getViewport(ye);else{const Ue=p.getViewSubImage(h,ye);Pe=Ue.viewport,he===0&&(e.setRenderTargetTextures(_,Ue.colorTexture,h.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(_))}let Me=T[he];Me===void 0&&(Me=new hn,Me.layers.enable(he),Me.viewport=new at,T[he]=Me),Me.matrix.fromArray(ye.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(ye.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),he===0&&(S.matrix.copy(Me.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),X===!0&&S.cameras.push(Me)}const ce=r.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const he=p.getDepthInformation(Y[0]);he&&he.isValid&&he.texture&&b.init(e,he,r.renderState)}}for(let Y=0;Y<y.length;Y++){const X=v[Y],ce=y[Y];X!==null&&ce!==void 0&&ce.update(X,B,d||a)}R&&R(z,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),g=null}const ue=new qv;ue.setAnimationLoop(ee),this.setAnimationLoop=function(z){R=z},this.dispose=function(){}}}const ur=new Jn,y2=new dt;function _2(t,e){function n(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,Vv(t)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function r(x,f,_,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(x,f):f.isMeshToonMaterial?(s(x,f),p(x,f)):f.isMeshPhongMaterial?(s(x,f),u(x,f)):f.isMeshStandardMaterial?(s(x,f),h(x,f),f.isMeshPhysicalMaterial&&m(x,f,v)):f.isMeshMatcapMaterial?(s(x,f),g(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),b(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(a(x,f),f.isLineDashedMaterial&&l(x,f)):f.isPointsMaterial?c(x,f,_,y):f.isSpriteMaterial?d(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,n(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===sn&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,n(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===sn&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,n(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,n(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const _=e.get(f),y=_.envMap,v=_.envMapRotation;y&&(x.envMap.value=y,ur.copy(v),ur.x*=-1,ur.y*=-1,ur.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),x.envMapRotation.value.setFromMatrix4(y2.makeRotationFromEuler(ur)),x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,x.aoMapTransform))}function a(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform))}function l(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function c(x,f,_,y){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*_,x.scale.value=y*.5,f.map&&(x.map.value=f.map,n(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function d(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function u(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function p(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function h(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function m(x,f,_){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===sn&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,f){f.matcap&&(x.matcap.value=f.matcap)}function b(x,f){const _=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function b2(t,e,n,i){let r={},s={},a=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const v=y.program;i.uniformBlockBinding(_,v)}function d(_,y){let v=r[_.id];v===void 0&&(g(_),v=u(_),r[_.id]=v,_.addEventListener("dispose",x));const A=y.program;i.updateUBOMapping(_,A);const M=e.render.frame;s[_.id]!==M&&(h(_),s[_.id]=M)}function u(_){const y=p();_.__bindingPointIndex=y;const v=t.createBuffer(),A=_.__size,M=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,A,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,v),v}function p(){for(let _=0;_<l;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=r[_.id],v=_.uniforms,A=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let M=0,w=v.length;M<w;M++){const k=Array.isArray(v[M])?v[M]:[v[M]];for(let T=0,S=k.length;T<S;T++){const I=k[T];if(m(I,M,T,A)===!0){const G=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let J=0;for(let ne=0;ne<H.length;ne++){const K=H[ne],ie=b(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,G+J,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,J),J+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,y,v,A){const M=_.value,w=y+"_"+v;if(A[w]===void 0)return typeof M=="number"||typeof M=="boolean"?A[w]=M:A[w]=M.clone(),!0;{const k=A[w];if(typeof M=="number"||typeof M=="boolean"){if(k!==M)return A[w]=M,!0}else if(k.equals(M)===!1)return k.copy(M),!0}return!1}function g(_){const y=_.uniforms;let v=0;const A=16;for(let w=0,k=y.length;w<k;w++){const T=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,I=T.length;S<I;S++){const G=T[S],H=Array.isArray(G.value)?G.value:[G.value];for(let J=0,ne=H.length;J<ne;J++){const K=H[J],ie=b(K),D=v%A,Z=D%ie.boundary,P=D+Z;v+=Z,P!==0&&A-P<ie.storage&&(v+=A-P),G.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=ie.storage}}}const M=v%A;return M>0&&(v+=A-M),_.__size=v,_.__cache={},this}function b(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function x(_){const y=_.target;y.removeEventListener("dispose",x);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:c,update:d,dispose:f}}class S2{constructor(e={}){const{canvas:n=c1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),b=new Int32Array(4);let x=null,f=null;const _=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=Yi,this.toneMappingExposure=1;const v=this;let A=!1,M=0,w=0,k=null,T=-1,S=null;const I=new at,G=new at;let H=null;const J=new Ze(0);let ne=0,K=n.width,ie=n.height,D=1,Z=null,P=null;const R=new at(0,0,K,ie),ee=new at(0,0,K,ie);let ue=!1;const z=new xf;let B=!1,Y=!1;const X=new dt,ce=new dt,he=new j,ye=new at,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Ue(){return k===null?D:1}let L=i;function nt(C,U){return n.getContext(C,U)}try{const C={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lf}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",xe,!1),L===null){const U="webgl2";if(L=nt(U,C),L===null)throw nt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let De,Fe,Te,Ye,Ee,N,E,V,te,se,Q,Ce,pe,_e,qe,le,Se,Le,Oe,we,$e,Ve,ot,F;function me(){De=new CE(L),De.init(),Ve=new h2(L,De),Fe=new _E(L,De,e,Ve),Te=new c2(L,De),Fe.reverseDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),Ye=new NE(L),Ee=new $T,N=new u2(L,De,Te,Ee,Fe,Ve,Ye),E=new SE(v),V=new TE(v),te=new F1(L),ot=new vE(L,te),se=new AE(L,te,Ye,ot),Q=new PE(L,se,te,Ye),Oe=new RE(L,Fe,N),le=new bE(Ee),Ce=new XT(v,E,V,De,Fe,ot,le),pe=new _2(v,Ee),_e=new KT,qe=new n2(De),Le=new gE(v,E,V,Te,Q,m,c),Se=new o2(v,Q,Fe),F=new b2(L,Ye,Fe,Te),we=new yE(L,De,Ye),$e=new kE(L,De,Ye),Ye.programs=Ce.programs,v.capabilities=Fe,v.extensions=De,v.properties=Ee,v.renderLists=_e,v.shadowMap=Se,v.state=Te,v.info=Ye}me();const $=new v2(v,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=De.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=De.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(C){C!==void 0&&(D=C,this.setSize(K,ie,!1))},this.getSize=function(C){return C.set(K,ie)},this.setSize=function(C,U,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,ie=U,n.width=Math.floor(C*D),n.height=Math.floor(U*D),W===!0&&(n.style.width=C+"px",n.style.height=U+"px"),this.setViewport(0,0,C,U)},this.getDrawingBufferSize=function(C){return C.set(K*D,ie*D).floor()},this.setDrawingBufferSize=function(C,U,W){K=C,ie=U,D=W,n.width=Math.floor(C*W),n.height=Math.floor(U*W),this.setViewport(0,0,C,U)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,U,W,q){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,U,W,q),Te.viewport(I.copy(R).multiplyScalar(D).round())},this.getScissor=function(C){return C.copy(ee)},this.setScissor=function(C,U,W,q){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,U,W,q),Te.scissor(G.copy(ee).multiplyScalar(D).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(C){Te.setScissorTest(ue=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){P=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(C=!0,U=!0,W=!0){let q=0;if(C){let O=!1;if(k!==null){const de=k.texture.format;O=de===pf||de===ff||de===hf}if(O){const de=k.texture.type,ge=de===Si||de===Nr||de===Ua||de===Ns||de===df||de===uf,Ae=Le.getClearColor(),ke=Le.getClearAlpha(),je=Ae.r,Be=Ae.g,Ne=Ae.b;ge?(g[0]=je,g[1]=Be,g[2]=Ne,g[3]=ke,L.clearBufferuiv(L.COLOR,0,g)):(b[0]=je,b[1]=Be,b[2]=Ne,b[3]=ke,L.clearBufferiv(L.COLOR,0,b))}else q|=L.COLOR_BUFFER_BIT}U&&(q|=L.DEPTH_BUFFER_BIT),W&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),_e.dispose(),qe.dispose(),Ee.dispose(),E.dispose(),V.dispose(),Q.dispose(),ot.dispose(),F.dispose(),Ce.dispose(),$.dispose(),$.removeEventListener("sessionstart",Sf),$.removeEventListener("sessionend",wf),rr.stop()};function re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const C=Ye.autoReset,U=Se.enabled,W=Se.autoUpdate,q=Se.needsUpdate,O=Se.type;me(),Ye.autoReset=C,Se.enabled=U,Se.autoUpdate=W,Se.needsUpdate=q,Se.type=O}function xe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ze(C){const U=C.target;U.removeEventListener("dispose",ze),yt(U)}function yt(C){Lt(C),Ee.remove(C)}function Lt(C){const U=Ee.get(C).programs;U!==void 0&&(U.forEach(function(W){Ce.releaseProgram(W)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,U,W,q,O,de){U===null&&(U=Pe);const ge=O.isMesh&&O.matrixWorld.determinant()<0,Ae=ry(C,U,W,q,O);Te.setMaterial(q,ge);let ke=W.index,je=1;if(q.wireframe===!0){if(ke=se.getWireframeAttribute(W),ke===void 0)return;je=2}const Be=W.drawRange,Ne=W.attributes.position;let Je=Be.start*je,lt=(Be.start+Be.count)*je;de!==null&&(Je=Math.max(Je,de.start*je),lt=Math.min(lt,(de.start+de.count)*je)),ke!==null?(Je=Math.max(Je,0),lt=Math.min(lt,ke.count)):Ne!=null&&(Je=Math.max(Je,0),lt=Math.min(lt,Ne.count));const ut=lt-Je;if(ut<0||ut===1/0)return;ot.setup(O,q,Ae,W,ke);let Kt,et=we;if(ke!==null&&(Kt=te.get(ke),et=$e,et.setIndex(Kt)),O.isMesh)q.wireframe===!0?(Te.setLineWidth(q.wireframeLinewidth*Ue()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(O.isLine){let Re=q.linewidth;Re===void 0&&(Re=1),Te.setLineWidth(Re*Ue()),O.isLineSegments?et.setMode(L.LINES):O.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else O.isPoints?et.setMode(L.POINTS):O.isSprite&&et.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)et.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))et.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Re=O._multiDrawStarts,ti=O._multiDrawCounts,tt=O._multiDrawCount,Nn=ke?te.get(ke).bytesPerElement:1,Dr=Ee.get(q).currentProgram.getUniforms();for(let ln=0;ln<tt;ln++)Dr.setValue(L,"_gl_DrawID",ln),et.render(Re[ln]/Nn,ti[ln])}else if(O.isInstancedMesh)et.renderInstances(Je,ut,O.count);else if(W.isInstancedBufferGeometry){const Re=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ti=Math.min(W.instanceCount,Re);et.renderInstances(Je,ut,ti)}else et.render(Je,ut)};function it(C,U,W){C.transparent===!0&&C.side===di&&C.forceSinglePass===!1?(C.side=sn,C.needsUpdate=!0,Ka(C,U,W),C.side=Ji,C.needsUpdate=!0,Ka(C,U,W),C.side=di):Ka(C,U,W)}this.compile=function(C,U,W=null){W===null&&(W=C),f=qe.get(W),f.init(U),y.push(f),W.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),C!==W&&C.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const q=new Set;return C.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const de=O.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const Ae=de[ge];it(Ae,W,O),q.add(Ae)}else it(de,W,O),q.add(de)}),y.pop(),f=null,q},this.compileAsync=function(C,U,W=null){const q=this.compile(C,U,W);return new Promise(O=>{function de(){if(q.forEach(function(ge){Ee.get(ge).currentProgram.isReady()&&q.delete(ge)}),q.size===0){O(C);return}setTimeout(de,10)}De.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let kn=null;function ei(C){kn&&kn(C)}function Sf(){rr.stop()}function wf(){rr.start()}const rr=new qv;rr.setAnimationLoop(ei),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(C){kn=C,$.setAnimationLoop(C),C===null?rr.stop():rr.start()},$.addEventListener("sessionstart",Sf),$.addEventListener("sessionend",wf),this.render=function(C,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,U,k),f=qe.get(C,y.length),f.init(U),y.push(f),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),z.setFromProjectionMatrix(ce),Y=this.localClippingEnabled,B=le.init(this.clippingPlanes,Y),x=_e.get(C,_.length),x.init(),_.push(x),$.enabled===!0&&$.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&pc(de,U,-1/0,v.sortObjects)}pc(C,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Z,P),Me=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Me&&Le.addToRenderList(x,C),this.info.render.frame++,B===!0&&le.beginShadows();const W=f.state.shadowsArray;Se.render(W,C,U),B===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,O=x.transmissive;if(f.setupLights(),U.isArrayCamera){const de=U.cameras;if(O.length>0)for(let ge=0,Ae=de.length;ge<Ae;ge++){const ke=de[ge];Ef(q,O,C,ke)}Me&&Le.render(C);for(let ge=0,Ae=de.length;ge<Ae;ge++){const ke=de[ge];Mf(x,C,ke,ke.viewport)}}else O.length>0&&Ef(q,O,C,U),Me&&Le.render(C),Mf(x,C,U);k!==null&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),C.isScene===!0&&C.onAfterRender(v,C,U),ot.resetDefaultState(),T=-1,S=null,y.pop(),y.length>0?(f=y[y.length-1],B===!0&&le.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?x=_[_.length-1]:x=null};function pc(C,U,W,q){if(C.visible===!1)return;if(C.layers.test(U.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(U);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||z.intersectsSprite(C)){q&&ye.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ce);const ge=Q.update(C),Ae=C.material;Ae.visible&&x.push(C,ge,Ae,W,ye.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||z.intersectsObject(C))){const ge=Q.update(C),Ae=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ye.copy(C.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ye.copy(ge.boundingSphere.center)),ye.applyMatrix4(C.matrixWorld).applyMatrix4(ce)),Array.isArray(Ae)){const ke=ge.groups;for(let je=0,Be=ke.length;je<Be;je++){const Ne=ke[je],Je=Ae[Ne.materialIndex];Je&&Je.visible&&x.push(C,ge,Je,W,ye.z,Ne)}}else Ae.visible&&x.push(C,ge,Ae,W,ye.z,null)}}const de=C.children;for(let ge=0,Ae=de.length;ge<Ae;ge++)pc(de[ge],U,W,q)}function Mf(C,U,W,q){const O=C.opaque,de=C.transmissive,ge=C.transparent;f.setupLightsView(W),B===!0&&le.setGlobalState(v.clippingPlanes,W),q&&Te.viewport(I.copy(q)),O.length>0&&Ya(O,U,W),de.length>0&&Ya(de,U,W),ge.length>0&&Ya(ge,U,W),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ef(C,U,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new Rr(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Va:Si,minFilter:Sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const de=f.state.transmissionRenderTarget[q.id],ge=q.viewport||I;de.setSize(ge.z,ge.w);const Ae=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(J),ne=v.getClearAlpha(),ne<1&&v.setClearColor(16777215,.5),v.clear(),Me&&Le.render(W);const ke=v.toneMapping;v.toneMapping=Yi;const je=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),B===!0&&le.setGlobalState(v.clippingPlanes,q),Ya(C,W,q),N.updateMultisampleRenderTarget(de),N.updateRenderTargetMipmap(de),De.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ne=0,Je=U.length;Ne<Je;Ne++){const lt=U[Ne],ut=lt.object,Kt=lt.geometry,et=lt.material,Re=lt.group;if(et.side===di&&ut.layers.test(q.layers)){const ti=et.side;et.side=sn,et.needsUpdate=!0,Tf(ut,W,q,Kt,et,Re),et.side=ti,et.needsUpdate=!0,Be=!0}}Be===!0&&(N.updateMultisampleRenderTarget(de),N.updateRenderTargetMipmap(de))}v.setRenderTarget(Ae),v.setClearColor(J,ne),je!==void 0&&(q.viewport=je),v.toneMapping=ke}function Ya(C,U,W){const q=U.isScene===!0?U.overrideMaterial:null;for(let O=0,de=C.length;O<de;O++){const ge=C[O],Ae=ge.object,ke=ge.geometry,je=q===null?ge.material:q,Be=ge.group;Ae.layers.test(W.layers)&&Tf(Ae,U,W,ke,je,Be)}}function Tf(C,U,W,q,O,de){C.onBeforeRender(v,U,W,q,O,de),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),O.onBeforeRender(v,U,W,q,C,de),O.transparent===!0&&O.side===di&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,v.renderBufferDirect(W,U,q,O,C,de),O.side=Ji,O.needsUpdate=!0,v.renderBufferDirect(W,U,q,O,C,de),O.side=di):v.renderBufferDirect(W,U,q,O,C,de),C.onAfterRender(v,U,W,q,O,de)}function Ka(C,U,W){U.isScene!==!0&&(U=Pe);const q=Ee.get(C),O=f.state.lights,de=f.state.shadowsArray,ge=O.state.version,Ae=Ce.getParameters(C,O.state,de,U,W),ke=Ce.getProgramCacheKey(Ae);let je=q.programs;q.environment=C.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(C.isMeshStandardMaterial?V:E).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?U.environmentRotation:C.envMapRotation,je===void 0&&(C.addEventListener("dispose",ze),je=new Map,q.programs=je);let Be=je.get(ke);if(Be!==void 0){if(q.currentProgram===Be&&q.lightsStateVersion===ge)return Af(C,Ae),Be}else Ae.uniforms=Ce.getUniforms(C),C.onBeforeCompile(Ae,v),Be=Ce.acquireProgram(Ae,ke),je.set(ke,Be),q.uniforms=Ae.uniforms;const Ne=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ne.clippingPlanes=le.uniform),Af(C,Ae),q.needsLights=ay(C),q.lightsStateVersion=ge,q.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Be,q.uniformsList=null,Be}function Cf(C){if(C.uniformsList===null){const U=C.currentProgram.getUniforms();C.uniformsList=sl.seqWithValue(U.seq,C.uniforms)}return C.uniformsList}function Af(C,U){const W=Ee.get(C);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function ry(C,U,W,q,O){U.isScene!==!0&&(U=Pe),N.resetTextureUnits();const de=U.fog,ge=q.isMeshStandardMaterial?U.environment:null,Ae=k===null?v.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Fs,ke=(q.isMeshStandardMaterial?V:E).get(q.envMap||ge),je=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ne=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,lt=!!W.morphAttributes.color;let ut=Yi;q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ut=v.toneMapping);const Kt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,et=Kt!==void 0?Kt.length:0,Re=Ee.get(q),ti=f.state.lights;if(B===!0&&(Y===!0||C!==S)){const yn=C===S&&q.id===T;le.setState(q,C,yn)}let tt=!1;q.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ti.state.version||Re.outputColorSpace!==Ae||O.isBatchedMesh&&Re.batching===!1||!O.isBatchedMesh&&Re.batching===!0||O.isBatchedMesh&&Re.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Re.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Re.instancing===!1||!O.isInstancedMesh&&Re.instancing===!0||O.isSkinnedMesh&&Re.skinning===!1||!O.isSkinnedMesh&&Re.skinning===!0||O.isInstancedMesh&&Re.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Re.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Re.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Re.instancingMorph===!1&&O.morphTexture!==null||Re.envMap!==ke||q.fog===!0&&Re.fog!==de||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==le.numPlanes||Re.numIntersection!==le.numIntersection)||Re.vertexAlphas!==je||Re.vertexTangents!==Be||Re.morphTargets!==Ne||Re.morphNormals!==Je||Re.morphColors!==lt||Re.toneMapping!==ut||Re.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Re.__version=q.version);let Nn=Re.currentProgram;tt===!0&&(Nn=Ka(q,U,O));let Dr=!1,ln=!1,zs=!1;const ht=Nn.getUniforms(),Wn=Re.uniforms;if(Te.useProgram(Nn.program)&&(Dr=!0,ln=!0,zs=!0),q.id!==T&&(T=q.id,ln=!0),Dr||S!==C){Te.buffers.depth.getReversed()?(X.copy(C.projectionMatrix),u1(X),h1(X),ht.setValue(L,"projectionMatrix",X)):ht.setValue(L,"projectionMatrix",C.projectionMatrix),ht.setValue(L,"viewMatrix",C.matrixWorldInverse);const Mi=ht.map.cameraPosition;Mi!==void 0&&Mi.setValue(L,he.setFromMatrixPosition(C.matrixWorld)),Fe.logarithmicDepthBuffer&&ht.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ht.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,ln=!0,zs=!0)}if(O.isSkinnedMesh){ht.setOptional(L,O,"bindMatrix"),ht.setOptional(L,O,"bindMatrixInverse");const yn=O.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),ht.setValue(L,"boneTexture",yn.boneTexture,N))}O.isBatchedMesh&&(ht.setOptional(L,O,"batchingTexture"),ht.setValue(L,"batchingTexture",O._matricesTexture,N),ht.setOptional(L,O,"batchingIdTexture"),ht.setValue(L,"batchingIdTexture",O._indirectTexture,N),ht.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&ht.setValue(L,"batchingColorTexture",O._colorsTexture,N));const Bs=W.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0)&&Oe.update(O,W,Nn),(ln||Re.receiveShadow!==O.receiveShadow)&&(Re.receiveShadow=O.receiveShadow,ht.setValue(L,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Wn.envMap.value=ke,Wn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(Wn.envMapIntensity.value=U.environmentIntensity),ln&&(ht.setValue(L,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&sy(Wn,zs),de&&q.fog===!0&&pe.refreshFogUniforms(Wn,de),pe.refreshMaterialUniforms(Wn,q,D,ie,f.state.transmissionRenderTarget[C.id]),sl.upload(L,Cf(Re),Wn,N)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(sl.upload(L,Cf(Re),Wn,N),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ht.setValue(L,"center",O.center),ht.setValue(L,"modelViewMatrix",O.modelViewMatrix),ht.setValue(L,"normalMatrix",O.normalMatrix),ht.setValue(L,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const yn=q.uniformsGroups;for(let Mi=0,Ei=yn.length;Mi<Ei;Mi++){const kf=yn[Mi];F.update(kf,Nn),F.bind(kf,Nn)}}return Nn}function sy(C,U){C.ambientLightColor.needsUpdate=U,C.lightProbe.needsUpdate=U,C.directionalLights.needsUpdate=U,C.directionalLightShadows.needsUpdate=U,C.pointLights.needsUpdate=U,C.pointLightShadows.needsUpdate=U,C.spotLights.needsUpdate=U,C.spotLightShadows.needsUpdate=U,C.rectAreaLights.needsUpdate=U,C.hemisphereLights.needsUpdate=U}function ay(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,U,W){Ee.get(C.texture).__webglTexture=U,Ee.get(C.depthTexture).__webglTexture=W;const q=Ee.get(C);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,U){const W=Ee.get(C);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(C,U=0,W=0){k=C,M=U,w=W;let q=!0,O=null,de=!1,ge=!1;if(C){const ke=Ee.get(C);if(ke.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(ke.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(ke.__hasExternalTextures)N.rebindTextures(C,Ee.get(C.texture).__webglTexture,Ee.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ne=C.depthTexture;if(ke.__boundDepthTexture!==Ne){if(Ne!==null&&Ee.has(Ne)&&(C.width!==Ne.image.width||C.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const je=C.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(ge=!0);const Be=Ee.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?O=Be[U][W]:O=Be[U],de=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?O=Ee.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[W]:O=Be,I.copy(C.viewport),G.copy(C.scissor),H=C.scissorTest}else I.copy(R).multiplyScalar(D).floor(),G.copy(ee).multiplyScalar(D).floor(),H=ue;if(Te.bindFramebuffer(L.FRAMEBUFFER,O)&&q&&Te.drawBuffers(C,O),Te.viewport(I),Te.scissor(G),Te.setScissorTest(H),de){const ke=Ee.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ke.__webglTexture,W)}else if(ge){const ke=Ee.get(C.texture),je=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ke.__webglTexture,W||0,je)}T=-1},this.readRenderTargetPixels=function(C,U,W,q,O,de,ge){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ee.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae){Te.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const ke=C.texture,je=ke.format,Be=ke.type;if(!Fe.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=C.width-q&&W>=0&&W<=C.height-O&&L.readPixels(U,W,q,O,Ve.convert(je),Ve.convert(Be),de)}finally{const ke=k!==null?Ee.get(k).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(C,U,W,q,O,de,ge){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ee.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae){const ke=C.texture,je=ke.format,Be=ke.type;if(!Fe.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=C.width-q&&W>=0&&W<=C.height-O){Te.bindFramebuffer(L.FRAMEBUFFER,Ae);const Ne=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(U,W,q,O,Ve.convert(je),Ve.convert(Be),0);const Je=k!==null?Ee.get(k).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Je);const lt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await d1(L,lt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.deleteBuffer(Ne),L.deleteSync(lt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,U=null,W=0){C.isTexture!==!0&&(oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,C=arguments[1]);const q=Math.pow(2,-W),O=Math.floor(C.image.width*q),de=Math.floor(C.image.height*q),ge=U!==null?U.x:0,Ae=U!==null?U.y:0;N.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ge,Ae,O,de),Te.unbindTexture()},this.copyTextureToTexture=function(C,U,W=null,q=null,O=0){C.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1],U=arguments[2],O=arguments[3]||0,W=null);let de,ge,Ae,ke,je,Be,Ne,Je,lt;const ut=C.isCompressedTexture?C.mipmaps[O]:C.image;W!==null?(de=W.max.x-W.min.x,ge=W.max.y-W.min.y,Ae=W.isBox3?W.max.z-W.min.z:1,ke=W.min.x,je=W.min.y,Be=W.isBox3?W.min.z:0):(de=ut.width,ge=ut.height,Ae=ut.depth||1,ke=0,je=0,Be=0),q!==null?(Ne=q.x,Je=q.y,lt=q.z):(Ne=0,Je=0,lt=0);const Kt=Ve.convert(U.format),et=Ve.convert(U.type);let Re;U.isData3DTexture?(N.setTexture3D(U,0),Re=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(N.setTexture2DArray(U,0),Re=L.TEXTURE_2D_ARRAY):(N.setTexture2D(U,0),Re=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ti=L.getParameter(L.UNPACK_ROW_LENGTH),tt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Nn=L.getParameter(L.UNPACK_SKIP_PIXELS),Dr=L.getParameter(L.UNPACK_SKIP_ROWS),ln=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);const zs=C.isDataArrayTexture||C.isData3DTexture,ht=U.isDataArrayTexture||U.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Wn=Ee.get(C),Bs=Ee.get(U),yn=Ee.get(Wn.__renderTarget),Mi=Ee.get(Bs.__renderTarget);Te.bindFramebuffer(L.READ_FRAMEBUFFER,yn.__webglFramebuffer),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Ei=0;Ei<Ae;Ei++)zs&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(C).__webglTexture,O,Be+Ei),C.isDepthTexture?(ht&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(U).__webglTexture,O,lt+Ei),L.blitFramebuffer(ke,je,de,ge,Ne,Je,de,ge,L.DEPTH_BUFFER_BIT,L.NEAREST)):ht?L.copyTexSubImage3D(Re,O,Ne,Je,lt+Ei,ke,je,de,ge):L.copyTexSubImage2D(Re,O,Ne,Je,lt+Ei,ke,je,de,ge);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ht?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Re,O,Ne,Je,lt,de,ge,Ae,Kt,et,ut.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Re,O,Ne,Je,lt,de,ge,Ae,Kt,ut.data):L.texSubImage3D(Re,O,Ne,Je,lt,de,ge,Ae,Kt,et,ut):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Ne,Je,de,ge,Kt,et,ut.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Ne,Je,ut.width,ut.height,Kt,ut.data):L.texSubImage2D(L.TEXTURE_2D,O,Ne,Je,de,ge,Kt,et,ut);L.pixelStorei(L.UNPACK_ROW_LENGTH,ti),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Dr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ln),O===0&&U.generateMipmaps&&L.generateMipmap(Re),Te.unbindTexture()},this.copyTextureToTexture3D=function(C,U,W=null,q=null,O=0){return C.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,C=arguments[2],U=arguments[3],O=arguments[4]||0),oa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,U,W,q,O)},this.initRenderTarget=function(C){Ee.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),Te.unbindTexture()},this.resetState=function(){M=0,w=0,k=null,Te.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}class w2 extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Qv extends Lr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ol=new j,jl=new j,Om=new dt,ta=new uc,Uo=new Xa,vd=new j,jm=new j;class M2 extends Ht{constructor(e=new xn,n=new Qv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ol.fromBufferAttribute(n,r-1),jl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ol.distanceTo(jl);e.setAttribute("lineDistance",new on(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;Om.copy(r).invert(),ta.copy(e.ray).applyMatrix4(Om);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,d=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=m,x=g-1;b<x;b+=d){const f=u.getX(b),_=u.getX(b+1),y=Oo(this,e,ta,c,f,_);y&&n.push(y)}if(this.isLineLoop){const b=u.getX(g-1),x=u.getX(m),f=Oo(this,e,ta,c,b,x);f&&n.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=m,x=g-1;b<x;b+=d){const f=Oo(this,e,ta,c,b,b+1);f&&n.push(f)}if(this.isLineLoop){const b=Oo(this,e,ta,c,g-1,m);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Oo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Ol.fromBufferAttribute(a,r),jl.fromBufferAttribute(a,s),n.distanceSqToSegment(Ol,jl,vd,jm)>i)return;vd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(vd);if(!(c<e.near||c>e.far))return{distance:c,point:jm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class Jv extends Lr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zm=new dt,sh=new uc,jo=new Xa,zo=new j;class E2 extends Ht{constructor(e=new xn,n=new Jv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(r),jo.radius+=s,e.ray.intersectsSphere(jo)===!1)return;zm.copy(r).invert(),sh.copy(e.ray).applyMatrix4(zm);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,d=i.index,p=i.attributes.position;if(d!==null){const h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=h,b=m;g<b;g++){const x=d.getX(g);zo.fromBufferAttribute(p,x),Bm(zo,x,c,r,e,n,this)}}else{const h=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let g=h,b=m;g<b;g++)zo.fromBufferAttribute(p,g),Bm(zo,g,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Bm(t,e,n,i,r,s,a){const l=sh.distanceSqToPoint(t);if(l<n){const c=new j;sh.closestPointToPoint(t,c),c.applyMatrix4(i);const d=r.ray.origin.distanceTo(c);if(d<r.near||d>r.far)return;s.push({distance:d,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class vf extends xn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];l(r),d(i),u(),this.setAttribute("position",new on(s,3)),this.setAttribute("normal",new on(s.slice(),3)),this.setAttribute("uv",new on(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(_){const y=new j,v=new j,A=new j;for(let M=0;M<n.length;M+=3)m(n[M+0],y),m(n[M+1],v),m(n[M+2],A),c(y,v,A,_)}function c(_,y,v,A){const M=A+1,w=[];for(let k=0;k<=M;k++){w[k]=[];const T=_.clone().lerp(v,k/M),S=y.clone().lerp(v,k/M),I=M-k;for(let G=0;G<=I;G++)G===0&&k===M?w[k][G]=T:w[k][G]=T.clone().lerp(S,G/I)}for(let k=0;k<M;k++)for(let T=0;T<2*(M-k)-1;T++){const S=Math.floor(T/2);T%2===0?(h(w[k][S+1]),h(w[k+1][S]),h(w[k][S])):(h(w[k][S+1]),h(w[k+1][S+1]),h(w[k+1][S]))}}function d(_){const y=new j;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(_),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const _=new j;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const v=x(_)/2/Math.PI+.5,A=f(_)/Math.PI+.5;a.push(v,1-A)}g(),p()}function p(){for(let _=0;_<a.length;_+=6){const y=a[_+0],v=a[_+2],A=a[_+4],M=Math.max(y,v,A),w=Math.min(y,v,A);M>.9&&w<.1&&(y<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),A<.2&&(a[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function m(_,y){const v=_*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const _=new j,y=new j,v=new j,A=new j,M=new Xe,w=new Xe,k=new Xe;for(let T=0,S=0;T<s.length;T+=9,S+=6){_.set(s[T+0],s[T+1],s[T+2]),y.set(s[T+3],s[T+4],s[T+5]),v.set(s[T+6],s[T+7],s[T+8]),M.set(a[S+0],a[S+1]),w.set(a[S+2],a[S+3]),k.set(a[S+4],a[S+5]),A.copy(_).add(y).add(v).divideScalar(3);const I=x(A);b(M,S+0,_,I),b(w,S+2,y,I),b(k,S+4,v,I)}}function b(_,y,v,A){A<0&&_.x===1&&(a[y]=_.x-1),v.x===0&&v.z===0&&(a[y]=A/2/Math.PI+.5)}function x(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vf(e.vertices,e.indices,e.radius,e.details)}}class yf extends vf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new yf(e.radius,e.detail)}}class zl extends xn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+l,Math.PI);let d=0;const u=[],p=new j,h=new j,m=[],g=[],b=[],x=[];for(let f=0;f<=i;f++){const _=[],y=f/i;let v=0;f===0&&a===0?v=.5/n:f===i&&c===Math.PI&&(v=-.5/n);for(let A=0;A<=n;A++){const M=A/n;p.x=-e*Math.cos(r+M*s)*Math.sin(a+y*l),p.y=e*Math.cos(a+y*l),p.z=e*Math.sin(r+M*s)*Math.sin(a+y*l),g.push(p.x,p.y,p.z),h.copy(p).normalize(),b.push(h.x,h.y,h.z),x.push(M+v,1-y),_.push(d++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const y=u[f][_+1],v=u[f][_],A=u[f+1][_],M=u[f+1][_+1];(f!==0||a>0)&&m.push(y,v,M),(f!==i-1||c<Math.PI)&&m.push(v,A,M)}this.setIndex(m),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(b,3)),this.setAttribute("uv",new on(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yd extends Lr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lv,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ey extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const _d=new dt,Hm=new j,Vm=new j;class T2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xf,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hm),Vm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vm),n.updateMatrixWorld(),_d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_d)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gm=new dt,na=new j,bd=new j;class C2 extends T2{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),i.position.copy(na),bd.copy(i.position),bd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(bd),i.updateMatrixWorld(),r.makeTranslation(-na.x,-na.y,-na.z),Gm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gm)}}class Wm extends ey{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new C2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class A2 extends ey{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const qm=new dt;class k2{constructor(e,n,i=0,r=1/0){this.ray=new uc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new mf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return qm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qm),this}intersectObject(e,n=!0,i=[]){return ah(e,this,i,n),i.sort(Xm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ah(e[r],this,i,n);return i.sort(Xm),i}}function Xm(t,e){return t.distance-e.distance}function ah(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,l=s.length;a<l;a++)ah(s[a],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lf);const N2=({onSelectModule:t})=>{const e=ae.useRef(null);return ae.useEffect(()=>{const n=e.current;if(!n)return;const i=n.getContext("2d");if(!i)return;let r,s=0;const a=[{name:"SCHEDULER",id:"cpu-scheduling",color:"#f8a51d"},{name:"PROCESS",id:"process",color:"#06b6d4"},{name:"MEMORY",id:"memory",color:"#10b981"},{name:"PAGING",id:"virtual-memory",color:"#8b5cf6"},{name:"DEADLOCK",id:"deadlock",color:"#ef4444"},{name:"DISK",id:"disk-scheduling",color:"#f59e0b"},{name:"FILES",id:"file-systems",color:"#3b82f6"},{name:"SYNC",id:"synchronization",color:"#ec4899"}],l=()=>{var u,p;n.width=((u=n.parentElement)==null?void 0:u.clientWidth)||600,n.height=((p=n.parentElement)==null?void 0:p.clientHeight)||450};l(),window.addEventListener("resize",l);const c=()=>{i.clearRect(0,0,n.width,n.height);const u=n.width/2,p=n.height/2,h=Math.min(u,p)*.7;s+=.008,i.save(),i.beginPath(),i.arc(u,p,38,0,Math.PI*2),i.fillStyle="#0c4da2",i.shadowColor="#3b82f6",i.shadowBlur=20,i.fill(),i.lineWidth=3,i.strokeStyle="#60a5fa",i.stroke(),i.fillStyle="#ffffff",i.font="bold 12px Inter, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("CPU CORE",u,p-6),i.font="9px monospace",i.fillStyle="#93c5fd",i.fillText("ACTIVE",u,p+10),i.restore(),i.beginPath(),i.arc(u,p,h,0,Math.PI*2),i.strokeStyle="rgba(59, 130, 246, 0.2)",i.setLineDash([4,6]),i.stroke(),i.setLineDash([]),a.forEach((m,g)=>{const b=s+g*Math.PI*2/a.length,x=u+Math.cos(b)*h,f=p+Math.sin(b)*h;i.beginPath(),i.moveTo(u,p),i.lineTo(x,f),i.strokeStyle="rgba(148, 163, 184, 0.15)",i.stroke();const _=(s*2+g*.5)%1,y=u+(x-u)*_,v=p+(f-p)*_;i.beginPath(),i.arc(y,v,2.5,0,Math.PI*2),i.fillStyle=m.color,i.shadowColor=m.color,i.shadowBlur=8,i.fill(),i.beginPath(),i.arc(x,f,22,0,Math.PI*2),i.fillStyle="#111827",i.fill(),i.lineWidth=2,i.strokeStyle=m.color,i.stroke(),i.fillStyle="#f8fafc",i.font="bold 9px Inter, sans-serif",i.fillText(m.name,x,f)}),r=requestAnimationFrame(c)};c();const d=u=>{const p=n.getBoundingClientRect(),h=u.clientX-p.left,m=u.clientY-p.top,g=n.width/2,b=n.height/2,x=Math.min(g,b)*.7;a.forEach((f,_)=>{const y=s+_*Math.PI*2/a.length,v=g+Math.cos(y)*x,A=b+Math.sin(y)*x;Math.hypot(h-v,m-A)<=26&&t(f.id)})};return n.addEventListener("click",d),()=>{window.removeEventListener("resize",l),n.removeEventListener("click",d),cancelAnimationFrame(r)}},[t]),o.jsxs("div",{className:"relative w-full h-[420px] sm:h-[480px] flex items-center justify-center",children:[o.jsx("canvas",{ref:e,className:"w-full h-full cursor-pointer"}),o.jsx("div",{className:"absolute bottom-3 text-xs text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800",children:"Click any subsystem node to explore its simulations"})]})},R2=({onSelectModule:t})=>{const e=ae.useRef(null),[n,i]=ae.useState(null),[r,s]=ae.useState(null);return ae.useEffect(()=>{const a=document.createElement("canvas");if(!(a.getContext("webgl")||a.getContext("experimental-webgl"))){i(!1);return}i(!0);const c=e.current;if(!c)return;const d=c.clientWidth||600,u=c.clientHeight||450,p=new w2,h=new hn(50,d/u,.1,1e3);h.position.set(0,4,14),h.lookAt(0,0,0);let m;try{m=new S2({antialias:!0,alpha:!0}),m.setSize(d,u),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.appendChild(m.domElement)}catch(B){console.warn("Failed to initialize WebGLRenderer",B),i(!1);return}const g=new A2(16777215,.8);p.add(g);const b=new Wm(806306,3,50);b.position.set(0,2,5),p.add(b);const x=new Wm(16295197,2,50);x.position.set(5,-2,2),p.add(x);const f=new ca;p.add(f);const _=new yf(1.8,0),y=new yd({color:806306,wireframe:!0,emissive:13226,emissiveIntensity:.6}),v=new En(_,y);f.add(v);const A=new zl(1.1,24,24),M=new yd({color:6333946,emissive:2450411,emissiveIntensity:.8,roughness:.2,metalness:.8}),w=new En(A,M);f.add(w);const k=[{name:"SCHEDULER",id:"cpu-scheduling",color:16295197,desc:"FCFS, SJF, SRTF, Round Robin"},{name:"PROCESS",id:"process",color:440020,desc:"fork(), exec(), wait(), threads"},{name:"MEMORY",id:"memory",color:1096065,desc:"First Fit, Best Fit, Fragmentation"},{name:"PAGING",id:"virtual-memory",color:9133302,desc:"FIFO, LRU, Optimal, Page Faults"},{name:"DEADLOCK",id:"deadlock",color:15680580,desc:"Banker's Algorithm & Safe States"},{name:"DISK",id:"disk-scheduling",color:16096779,desc:"SSTF, SCAN, C-SCAN, Cylinder Seek"},{name:"SYNC",id:"synchronization",color:15485081,desc:"Semaphores & Producer-Consumer"}],T=6.2,S=[],I=[];k.forEach((B,Y)=>{const X=Y/k.length*Math.PI*2,ce=Math.cos(X)*T,he=Math.sin(X)*T,ye=Math.sin(X*2)*.8,Pe=new zl(.55,20,20),Me=new yd({color:B.color,emissive:B.color,emissiveIntensity:.5,roughness:.3,metalness:.7}),Ue=new En(Pe,Me);Ue.position.set(ce,ye,he),Ue.userData={...B,initialAngle:X,yOffset:ye},p.add(Ue),S.push(Ue);const L=new xn().setFromPoints([new j(0,0,0),new j(ce,ye,he)]),nt=new Qv({color:B.color,transparent:!0,opacity:.3}),De=new M2(L,nt);p.add(De),I.push(De)});const G=200,H=new xn,J=new Float32Array(G*3);for(let B=0;B<G*3;B+=3){const Y=Math.random()*Math.PI*2,X=1.5+Math.random()*(T-1);J[B]=Math.cos(Y)*X,J[B+1]=(Math.random()-.5)*2,J[B+2]=Math.sin(Y)*X}H.setAttribute("position",new Vn(J,3));const ne=new Jv({color:9684477,size:.08,transparent:!0,opacity:.7}),K=new E2(H,ne);p.add(K);const ie=new k2,D=new Xe(-100,-100),Z=B=>{const Y=m.domElement.getBoundingClientRect();D.x=(B.clientX-Y.left)/Y.width*2-1,D.y=-((B.clientY-Y.top)/Y.height)*2+1,ie.setFromCamera(D,h);const X=ie.intersectObjects(S);if(X.length>0){const he=X[0].object.userData;s({name:he.name,moduleId:he.id,desc:he.desc,x:B.clientX-Y.left,y:B.clientY-Y.top}),document.body.style.cursor="pointer"}else s(null),document.body.style.cursor="default"},P=()=>{ie.setFromCamera(D,h);const B=ie.intersectObjects(S);if(B.length>0){const Y=B[0].object.userData;t(Y.id)}};m.domElement.addEventListener("mousemove",Z),m.domElement.addEventListener("click",P);let R,ee=0;const ue=()=>{R=requestAnimationFrame(ue),ee+=.01,v.rotation.x+=.006,v.rotation.y+=.009,w.rotation.y-=.005;const B=1+Math.sin(ee*3)*.06;w.scale.set(B,B,B),S.forEach((Y,X)=>{const he=Y.userData.initialAngle+ee*.25,ye=Math.cos(he)*T,Pe=Math.sin(he)*T,Me=Math.sin(he*2)*.8;Y.position.set(ye,Me,Pe);const L=I[X].geometry.attributes.position;L.setXYZ(1,ye,Me,Pe),L.needsUpdate=!0}),K.rotation.y+=.002,m.render(p,h)};ue();const z=()=>{if(!c)return;const B=c.clientWidth||600,Y=c.clientHeight||450;h.aspect=B/Y,h.updateProjectionMatrix(),m.setSize(B,Y)};return window.addEventListener("resize",z),()=>{window.removeEventListener("resize",z),m.domElement.removeEventListener("mousemove",Z),m.domElement.removeEventListener("click",P),cancelAnimationFrame(R),document.body.style.cursor="default",m.domElement&&c.contains(m.domElement)&&c.removeChild(m.domElement),m.dispose()}},[t]),n===!1?o.jsx(N2,{onSelectModule:t}):o.jsxs("div",{className:"relative w-full h-[420px] sm:h-[480px] lg:h-[520px] flex items-center justify-center overflow-hidden",children:[o.jsx("div",{ref:e,className:"w-full h-full"}),r&&o.jsxs("div",{className:"absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3 px-3.5 py-2 rounded-xl bg-slate-900/90 text-white border border-blue-500/40 shadow-xl backdrop-blur-md transition-all duration-150",style:{left:`${r.x}px`,top:`${r.y-15}px`},children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-srm-accent animate-pulse"}),o.jsxs("span",{className:"font-bold text-xs tracking-wider text-blue-300 uppercase",children:[r.name," MODULE"]})]}),o.jsx("div",{className:"text-[11px] text-slate-300 mt-0.5 max-w-[200px]",children:r.desc}),o.jsx("div",{className:"text-[10px] text-srm-accent mt-1 font-semibold",children:"Click to launch simulation →"})]}),o.jsxs("div",{className:"absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10 text-xs text-slate-400 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800 shadow-md backdrop-blur-xs flex items-center space-x-2",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-ping"}),o.jsx("span",{children:"Interactive 3D OS Core • Click any subsystem node to explore"})]})]})},P2=({onNavigate:t,onSelectModule:e,onSelectExperiment:n})=>{const i=[{value:"9",label:"Curriculum Modules"},{value:"25+",label:"Active Experiments"},{value:"100%",label:"Deterministic Grading"},{value:"CO1—CO5",label:"Curriculum Alignment"}],r=[{title:"NAAC A++ Grade",subtitle:"Highest accreditation grade awarded, valid for 7 years (2024–2031)",badge:"Accreditation",icon:tf},{title:"NIRF #14 in Engineering",subtitle:"National Institutional Ranking Framework (2025/2026), #11 in Universities",badge:"NIRF Ranking",icon:rS},{title:"Category-I University",subtitle:"Awarded highest autonomy status by University Grants Commission (UGC)",badge:"Autonomy",icon:dS},{title:"ABET & IET Accredited",subtitle:"Computing and Engineering programs accredited by ABET (USA) and IET (UK)",badge:"Global Standards",icon:qb}],s=[{code:"CO1",title:"UNIX Commands & System Calls",desc:"Master Linux shell commands, permissions (chmod), shell scripting, and core process system calls (fork, wait, exec)."},{code:"CO2",title:"CPU Scheduling & Multithreading",desc:"Analyze and implement FCFS, SJF, SRTF, Priority, and Round Robin scheduling algorithms with Gantt chart generation."},{code:"CO3",title:"Synchronization & Deadlocks",desc:"Resolve race conditions using semaphores (Producer-Consumer, Dining Philosophers) and simulate Banker's Algorithm."},{code:"CO4",title:"Memory Management & Paging",desc:"Simulate contiguous placement (First/Best/Worst Fit) and virtual memory page replacement (FIFO, LRU, Optimal)."},{code:"CO5",title:"File Systems & Disk Scheduling",desc:"Evaluate file allocation methods and optimize secondary storage head trajectories (FCFS, SSTF, SCAN, C-SCAN)."}];return o.jsxs("div",{className:"w-full space-y-24 py-12 sm:py-16 font-sans",children:[o.jsxs("section",{className:"relative text-center max-w-5xl mx-auto px-4 sm:px-6",children:[o.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 flex items-center justify-center pointer-events-none -z-10 select-none",children:o.jsx("img",{src:"/college-logo.webp",alt:"Watermark",className:"w-[500px] sm:w-[650px] h-auto object-contain opacity-[0.035] dark:opacity-[0.03]"})}),o.jsxs("div",{className:"inline-flex items-center space-x-2.5 px-5 py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-[#0c4da2] dark:text-blue-300 text-xs sm:text-sm font-bold mb-8 shadow-xs",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#0c4da2] dark:bg-blue-400"}),o.jsx("span",{children:"SRM Institute of Science and Technology • School of Computing"})]}),o.jsxs("h1",{className:"text-5xl sm:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]",children:["Hands-On Engineering",o.jsx("br",{}),o.jsx("span",{className:"text-[#0c4da2] dark:text-blue-400",children:"Virtual Laboratories"})]}),o.jsx("p",{className:"mt-8 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal",children:"Empowering B.Tech Computer Science & Engineering students to master Operating Systems concepts with interactive visual workbenches, seeded parameters, live C code execution, and deterministic continuous evaluation."}),o.jsxs("div",{className:"mt-10 flex flex-wrap items-center justify-center gap-4",children:[o.jsxs("button",{onClick:()=>n("exp-fcfs"),className:"px-8 py-4 rounded-2xl bg-[#0c4da2] hover:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center space-x-2.5 cursor-pointer transform hover:-translate-y-0.5",children:[o.jsx("span",{children:"Launch Interactive Workbench"}),o.jsx(Bt,{className:"w-4 h-4"})]}),o.jsxs("button",{onClick:()=>t("lab"),className:"px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base border border-slate-200 dark:border-slate-700 shadow-sm transition-all flex items-center space-x-2 cursor-pointer",children:[o.jsx("span",{children:"Browse 9 Active Labs (25+ Experiments)"}),o.jsx("span",{children:"📚"})]})]}),o.jsx("div",{className:"mt-20 pt-12 border-t border-slate-200/80 dark:border-slate-800/80",children:o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 text-center",children:i.map((a,l)=>o.jsxs("div",{className:"space-y-1.5",children:[o.jsx("div",{className:"text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight",children:a.value}),o.jsx("div",{className:"text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold",children:a.label})]},l))})})]}),o.jsx("section",{className:"w-full",children:o.jsx("div",{className:"w-full bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-sm",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[o.jsxs("div",{className:"lg:col-span-5 space-y-5 text-left",children:[o.jsx("div",{className:"text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0c4da2] dark:text-blue-400",children:"Core System Architecture"}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-snug",children:"Interactive 3D Operating System Core"}),o.jsx("p",{className:"text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed",children:"Observe the central processor dispatching processes, managing memory partitions, resolving deadlocks, and scheduling disk heads in real time. Click any orbiting satellite node to jump directly to its simulation."}),o.jsxs("div",{className:"pt-2 flex flex-wrap gap-2.5 text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-300",children:[o.jsx("span",{className:"px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold",children:"• 360° Raycasting"}),o.jsx("span",{className:"px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold",children:"• Real-Time Data Streams"})]})]}),o.jsx("div",{className:"lg:col-span-7 bg-slate-50 dark:bg-slate-950/60 rounded-3xl p-3 border border-slate-200 dark:border-slate-800 shadow-inner",children:o.jsx(R2,{onSelectModule:e})})]})})}),o.jsxs("section",{className:"w-full space-y-8",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-5",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0c4da2] dark:text-blue-400",children:"B.Tech CSE Core Curriculum"}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1",children:"Active Engineering Laboratories"})]}),o.jsxs("button",{onClick:()=>t("lab"),className:"text-sm sm:text-base font-bold text-[#0c4da2] dark:text-blue-400 hover:underline flex items-center space-x-1.5 cursor-pointer",children:[o.jsx("span",{children:"View all 9 modules (25+ Labs)"}),o.jsx(Bt,{className:"w-4 h-4"})]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6",children:Fa.map(a=>o.jsxs("div",{onClick:()=>e(a.id),className:"group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-[#0c4da2] dark:hover:border-blue-500 hover:shadow-md transition-all duration-200 flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#0c4da2] dark:text-blue-400 flex items-center justify-center font-bold text-sm",children:a.coMapping.split(",")[0]}),o.jsx("span",{className:"px-2.5 py-1 rounded text-xs font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400",children:a.difficulty})]}),o.jsx("h3",{className:"text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0c4da2] dark:group-hover:text-blue-400 transition-colors",children:a.title}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed",children:a.shortDescription})]}),o.jsxs("div",{className:"mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-400",children:[o.jsxs("span",{className:"font-mono font-semibold",children:[a.experimentCount," Experiments"]}),o.jsxs("span",{className:"font-bold text-[#0c4da2] dark:text-blue-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform",children:[o.jsx("span",{children:"Enter Lab"}),o.jsx(Bt,{className:"w-4 h-4"})]})]})]},a.id))})]}),o.jsx("section",{className:"w-full space-y-8",children:o.jsxs("div",{className:"w-full bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-10",children:[o.jsxs("div",{className:"space-y-3 border-b border-slate-100 dark:border-slate-800 pb-8",children:[o.jsx("div",{className:"inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[#f8a51d]/10 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider",children:o.jsx("span",{children:"★ Academic Credentials & Institutional Stature"})}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white",children:"SRM Institute of Science and Technology (SRMIST)"}),o.jsx("p",{className:"text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed",children:"Located on a sprawling 250+ acre campus in Kattankulathur, Chennai, SRMIST is recognized among India's premier multi-disciplinary universities, hosting over 50,000 students and state-of-the-art supercomputing and systems research facilities."})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:r.map((a,l)=>{const c=a.icon;return o.jsx("div",{className:"p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between",children:o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("div",{className:"w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/80 text-[#0c4da2] dark:text-blue-400 flex items-center justify-center",children:o.jsx(c,{className:"w-6 h-6"})}),o.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-400",children:a.badge})]}),o.jsx("h3",{className:"text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-4",children:a.title}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed",children:a.subtitle})]})},l)})}),o.jsxs("div",{className:"pt-6 border-t border-slate-100 dark:border-slate-800 space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-slate-900 dark:text-white",children:"B.Tech CSE Operating Systems Course Outcomes (CO1 — CO5)"}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-500 dark:text-slate-400",children:"Every experiment in this virtual lab is strictly mapped to SRMIST departmental curriculum outcomes."})]}),o.jsxs("button",{onClick:()=>t("lab"),className:"text-sm font-bold text-[#0c4da2] dark:text-blue-400 hover:underline flex items-center space-x-1.5 shrink-0 cursor-pointer",children:[o.jsx("span",{children:"Explore Mapped Labs"}),o.jsx(Bt,{className:"w-4 h-4"})]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-2",children:s.map((a,l)=>o.jsxs("div",{className:"p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#0c4da2] text-white",children:a.code}),o.jsx("span",{className:"text-sm font-bold text-slate-800 dark:text-slate-200 truncate",children:a.title})]}),o.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 leading-relaxed",children:a.desc})]},l))})]})]})})]})},js=({onBack:t,backLabel:e="Back to Home",breadcrumbs:n,registrationNo:i="RA2211003010001"})=>o.jsxs("div",{className:"w-full flex flex-col md:flex-row md:items-center justify-between gap-4 py-3.5 px-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs mb-6",children:[o.jsxs("div",{className:"flex items-center space-x-3 flex-wrap gap-y-2",children:[o.jsxs("button",{onClick:t,className:"inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-xl bg-[#0c4da2] hover:bg-blue-800 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-x-0.5 cursor-pointer group",title:e,children:[o.jsx(xg,{className:"w-5 h-5 group-hover:-translate-x-1 transition-transform"}),o.jsx("span",{children:e})]}),o.jsx("span",{className:"text-slate-300 dark:text-slate-700 hidden sm:inline text-lg",children:"|"}),o.jsxs("nav",{"aria-label":"Breadcrumb",className:"flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400",children:[o.jsxs("div",{className:"flex items-center space-x-1 font-semibold text-slate-600 dark:text-slate-300",children:[o.jsx(Yg,{className:"w-4 h-4 text-[#0c4da2] dark:text-blue-400"}),o.jsx("span",{className:"hidden sm:inline",children:"SRMIST Portal"})]}),n.map((r,s)=>o.jsxs(Hl.Fragment,{children:[o.jsx(Xb,{className:"w-4 h-4 text-slate-400 shrink-0"}),r.onClick?o.jsx("button",{onClick:r.onClick,className:"hover:text-[#0c4da2] dark:hover:text-blue-400 transition-colors font-semibold cursor-pointer",children:r.label}):o.jsx("span",{className:"font-bold text-slate-900 dark:text-white truncate max-w-[240px] sm:max-w-[400px]",children:r.label})]},s))]})]}),o.jsxs("div",{className:"flex items-center space-x-3 shrink-0 font-mono text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"}),o.jsx("span",{className:"text-slate-500 dark:text-slate-400 hidden sm:inline",children:"Student ID:"}),o.jsx("span",{className:"font-bold text-slate-800 dark:text-slate-200",children:i}),o.jsx("span",{className:"text-slate-400 hidden lg:inline",children:"• B.Tech CSE (Sem IV)"}),o.jsx("span",{className:"px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-[#0c4da2] dark:text-blue-300 font-sans font-bold text-[11px] uppercase",children:"Verified"})]})]}),I2=({onSelectExperiment:t,bookmarkedIds:e,onToggleBookmark:n,completedExperimentIds:i,onMarkCompleted:r,initialModuleFilter:s,onBack:a})=>{var M;const[l,c]=ae.useState(s||"all"),[d,u]=ae.useState("all"),[p,h]=ae.useState("all"),[m,g]=ae.useState("");ae.useEffect(()=>{s&&c(s)},[s]);const b=ae.useMemo(()=>{const w={all:jt.length};return jt.forEach(k=>{w[k.moduleId]=(w[k.moduleId]||0)+1}),w},[]),x=ae.useMemo(()=>jt.filter(w=>{const k=l==="all"||w.moduleId===l,T=d==="all"||w.difficulty.toLowerCase()===d.toLowerCase(),S=i.includes(w.id),I=p==="all"||p==="completed"&&S||p==="pending"&&!S,G=m.trim().toLowerCase(),H=G===""||w.title.toLowerCase().includes(G)||w.category.toLowerCase().includes(G)||w.keyConcepts.some(J=>J.toLowerCase().includes(G))||w.coMapping.toLowerCase().includes(G);return k&&T&&I&&H}),[l,d,p,m,i]),f=i.length,_=Math.round(f/jt.length*100),y=()=>{c("all"),u("all"),h("all"),g("")},v=l!=="all"||d!=="all"||p!=="all"||m!=="",A=l==="all"?"All Modules":((M=Fa.find(w=>w.id===l))==null?void 0:M.title)||l;return o.jsxs("div",{className:"w-full space-y-8 font-sans",children:[o.jsx(js,{onBack:a,backLabel:"← Back to Home",breadcrumbs:[{label:"Virtual Laboratories",onClick:a},{label:A}]}),o.jsx("div",{className:"w-full bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs",children:o.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-8",children:[o.jsxs("div",{className:"space-y-3 flex-1",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#0c4da2] dark:text-blue-400 uppercase tracking-wider",children:[o.jsx(Dl,{className:"w-5 h-5"}),o.jsx("span",{children:"SRMIST CSE Curriculum Laboratory Catalog"})]}),o.jsx("h1",{className:"text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight",children:"Operating Systems Laboratory Experiments"}),o.jsx("p",{className:"text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed",children:"Explore hands-on experiments mapped to Course Outcomes CO1-CO5. Step through live algorithm simulations, execute C code sandboxes, and verify your mastery with quizzes and viva voce."})]}),o.jsxs("div",{className:"bg-slate-50 dark:bg-slate-950/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shrink-0 min-w-[320px] sm:min-w-[360px] space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between text-sm",children:[o.jsxs("div",{className:"flex items-center space-x-2 font-bold text-slate-800 dark:text-slate-200",children:[o.jsx(tf,{className:"w-5 h-5 text-amber-500"}),o.jsx("span",{className:"text-base",children:"Your Lab Progress"})]}),o.jsxs("span",{className:"font-mono font-black text-base text-[#0c4da2] dark:text-blue-400",children:[f," / ",jt.length," (",_,"%)"]})]}),o.jsx("div",{className:"w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden",children:o.jsx("div",{className:"bg-[#0c4da2] dark:bg-blue-500 h-full rounded-full transition-all duration-500",style:{width:`${Math.max(_,3)}%`}})}),o.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold",children:[o.jsx("span",{children:"9 Modules Active"}),o.jsx("span",{children:"•"}),o.jsx("span",{children:"CO1 — CO5 Aligned"}),o.jsx("span",{children:"•"}),o.jsxs("span",{className:"text-emerald-600 dark:text-emerald-400 font-black",children:[f*50," XP"]})]})]})]})}),o.jsxs("div",{className:"w-full bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 items-center",children:[o.jsxs("div",{className:"relative flex-1 w-full",children:[o.jsx(of,{className:"w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"}),o.jsx("input",{type:"text",placeholder:"Search experiments by name, category, or concept (e.g. Gantt, LRU, Banker's, fork)...",value:m,onChange:w=>g(w.target.value),className:"w-full pl-12 pr-4 py-3.5 text-sm sm:text-base bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-[#0c4da2] transition-colors"})]}),o.jsxs("div",{className:"flex items-center space-x-2 shrink-0 text-sm w-full sm:w-auto overflow-x-auto",children:[o.jsxs("button",{onClick:()=>h("all"),className:`px-4 py-3 rounded-xl font-bold transition-all cursor-pointer ${p==="all"?"bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"}`,children:["All Status (",jt.length,")"]}),o.jsxs("button",{onClick:()=>h("completed"),className:`px-4 py-3 rounded-xl font-bold flex items-center space-x-1.5 transition-all cursor-pointer ${p==="completed"?"bg-emerald-600 text-white shadow-sm":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"}`,children:[o.jsx(bi,{className:"w-4 h-4"}),o.jsxs("span",{children:["Completed (",f,")"]})]}),o.jsxs("button",{onClick:()=>h("pending"),className:`px-4 py-3 rounded-xl font-bold flex items-center space-x-1.5 transition-all cursor-pointer ${p==="pending"?"bg-amber-600 text-white shadow-sm":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"}`,children:[o.jsx(Kb,{className:"w-4 h-4"}),o.jsxs("span",{children:["Pending (",jt.length-f,")"]})]})]})]}),o.jsxs("div",{className:"space-y-2.5",children:[o.jsx("div",{className:"text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400",children:"Curriculum Modules:"}),o.jsxs("div",{className:"flex flex-wrap gap-2 text-xs sm:text-sm",children:[o.jsxs("button",{onClick:()=>c("all"),className:`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${l==="all"?"bg-[#0c4da2] text-white shadow-sm":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"}`,children:["All Modules (",jt.length,")"]}),Fa.map(w=>{const k=b[w.id]||0,T=l===w.id;return o.jsxs("button",{onClick:()=>c(w.id),className:`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${T?"bg-[#0c4da2] text-white shadow-sm":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"}`,children:[w.title," (",k,")"]},w.id)})]})]}),o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm",children:[o.jsxs("div",{className:"flex items-center space-x-2.5",children:[o.jsx(qg,{className:"w-4 h-4 text-slate-400"}),o.jsx("span",{className:"text-slate-500 font-semibold",children:"Difficulty:"}),["all","beginner","intermediate","advanced"].map(w=>o.jsx("button",{onClick:()=>u(w),className:`px-3 py-1.5 rounded-lg capitalize font-bold cursor-pointer transition-colors ${d===w?"bg-slate-900 text-white dark:bg-white dark:text-slate-900":"text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,children:w},w))]}),v&&o.jsxs("button",{onClick:y,className:"flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 transition-colors cursor-pointer",children:[o.jsx(Qi,{className:"w-4 h-4"}),o.jsx("span",{children:"Reset Filters"})]})]})]}),o.jsxs("div",{className:"w-full space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between text-sm text-slate-500 px-1 font-semibold",children:[o.jsxs("span",{children:["Showing ",o.jsx("strong",{children:x.length})," of ",jt.length," experiments"]}),l!=="all"&&o.jsxs("span",{className:"font-bold text-[#0c4da2] dark:text-blue-400",children:["Module: ",A]})]}),x.length===0?o.jsxs("div",{className:"w-full py-20 text-center text-sm sm:text-base text-slate-500 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4",children:[o.jsx(Dl,{className:"w-10 h-10 text-slate-400 mx-auto"}),o.jsx("div",{className:"font-bold text-slate-800 dark:text-slate-200 text-lg",children:"No experiments found matching your filters."}),o.jsx("p",{className:"text-sm text-slate-400 max-w-md mx-auto",children:'Try clicking "Reset Filters" or selecting "All Modules" to view the complete catalog.'}),o.jsx("button",{onClick:y,className:"px-6 py-2.5 rounded-xl bg-[#0c4da2] text-white font-bold text-sm shadow-xs cursor-pointer",children:"View All Experiments"})]}):o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6",children:x.map(w=>{const k=e.includes(w.id),T=i.includes(w.id);return o.jsxs("div",{className:`bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border shadow-xs hover:border-[#0c4da2] dark:hover:border-blue-500 hover:shadow-md transition-all duration-200 flex flex-col justify-between ${T?"border-emerald-200/80 dark:border-emerald-900/60 bg-emerald-50/10 dark:bg-emerald-950/10":"border-slate-200 dark:border-slate-800"}`,children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-4 gap-2",children:[o.jsxs("div",{className:"flex items-center space-x-2 flex-wrap",children:[o.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-[#0c4da2] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-900",children:w.category}),o.jsx("span",{className:"text-xs font-mono font-bold text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800",children:w.coMapping})]}),o.jsxs("div",{className:"flex items-center space-x-1.5",children:[T?o.jsxs("span",{className:"inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-300 dark:border-emerald-800",children:[o.jsx(bi,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Done"})]}):o.jsx("span",{className:"text-xs text-slate-400 font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800",children:"Pending"}),o.jsx("button",{onClick:()=>n(w.id),title:k?"Remove Bookmark":"Bookmark Experiment",className:`p-2 rounded-lg transition-colors cursor-pointer ${k?"text-amber-500 bg-amber-50 dark:bg-amber-950":"text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800"}`,children:o.jsx(nf,{className:"w-4 h-4 fill-current"})})]})]}),o.jsx("h3",{className:"text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug",children:w.title}),o.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-2 leading-relaxed",children:w.theory.quickSummary}),o.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:w.keyConcepts.slice(0,3).map((S,I)=>o.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400",children:S},I))})]}),o.jsxs("div",{className:"mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm",children:[o.jsxs("div",{className:"flex items-center space-x-1.5 text-slate-400 font-mono",children:[o.jsx(Pg,{className:"w-4 h-4"}),o.jsx("span",{children:w.estimatedTime})]}),o.jsxs("button",{onClick:()=>t(w.id),className:"flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#0c4da2] hover:bg-blue-800 text-white font-bold transition-all shadow-xs cursor-pointer group",children:[o.jsx("span",{children:"Simulate"}),o.jsx(Bt,{className:"w-4 h-4 group-hover:translate-x-0.5 transition-transform"})]})]})]},w.id)})})]})]})},$m={"exp-linux-commands":[{id:"linux-cmd-q1",type:"pre",question:"Which command is used to display the absolute path of the current working directory in UNIX/Linux?",options:["dir","pwd","cd -a","path"],correctAnswer:1,explanation:'pwd stands for "Print Working Directory" and outputs the absolute path from root (/) to the current directory.'},{id:"linux-cmd-q2",type:"post",question:"What does the pipe operator (|) do in Linux command lines?",options:["Redirects the standard output of one command as standard input to another","Appends text to the end of a file","Terminates background processes","Runs two commands in parallel"],correctAnswer:0,explanation:"A pipe connects the stdout of the left-hand command to the stdin of the right-hand command (e.g. ls | grep txt)."}],"exp-linux-permissions":[{id:"linux-perm-q1",type:"pre",question:"In Linux octal permissions, what numerical value corresponds to read (r), write (w), and execute (x)?",options:["r=1, w=2, x=4","r=4, w=2, x=1","r=2, w=4, x=1","r=3, w=2, x=1"],correctAnswer:1,explanation:"UNIX permission octal values are binary weighted: Read = 4 (2^2), Write = 2 (2^1), Execute = 1 (2^0)."},{id:"linux-perm-q2",type:"post",question:"What does the permission chmod 755 script.sh grant to user, group, and others?",options:["User: rwx, Group: r-x, Others: r-x","User: rwx, Group: rwx, Others: rwx","User: rw-, Group: r--, Others: r--","User: r-x, Group: r-x, Others: r-x"],correctAnswer:0,explanation:"7 = 4+2+1 (rwx for owner), 5 = 4+1 (r-x for group), 5 = 4+1 (r-x for others)."}],"exp-process-lifecycle":[{id:"proc-q1",type:"pre",question:"What value does fork() return to the newly created child process?",options:["The parent PID","0","-1","A newly allocated positive PID"],correctAnswer:1,explanation:"fork() returns 0 to the child process, while returning the child PID to the parent process."},{id:"proc-q2",type:"post",question:'What is a "zombie process" in an operating system?',options:["A process executing an infinite while loop","A process that has terminated but its exit status has not yet been read by its parent via wait()","A process whose parent terminated before it","A blocked process waiting on a semaphore"],correctAnswer:1,explanation:"When a child process terminates, its entry remains in the process table as a zombie until the parent calls wait() to reap it."}],"exp-process-wait-exec":[{id:"proc-exec-q1",type:"pre",question:"What occurs when a process calls an exec() system call successfully?",options:["A child process is created","The calling process image is completely overwritten by the new program","The process is put to sleep for 5 seconds","A new thread is spawned"],correctAnswer:1,explanation:"exec() replaces the entire address space (code, data, heap, stack) of the calling process with the new binary executable."}],"exp-fcfs":[{id:"fcfs-q1",type:"pre",question:"Which queue data structure is inherently used by the FCFS scheduling algorithm?",options:["Priority Queue","FIFO (First-In, First-Out) Queue","LIFO Stack","Double-Ended Queue"],correctAnswer:1,explanation:"FCFS processes jobs strictly in the order they enter the ready queue, which is a First-In, First-Out (FIFO) queue structure."},{id:"fcfs-q2",type:"pre",question:"Is standard FCFS CPU scheduling preemptive or non-preemptive?",options:["Preemptive","Non-preemptive","Partially Preemptive","Depends on process burst time"],correctAnswer:1,explanation:"Standard FCFS is non-preemptive; once the CPU is allocated to a process, it holds the CPU until it terminates or blocks for I/O."},{id:"fcfs-q3",type:"post",question:'What is the "Convoy Effect" in CPU scheduling?',options:["Many short processes waiting behind a single long CPU-bound process","Multiple CPUs executing the same process concurrently","Deadlock occurring between two processes holding printers","Context switching happening too frequently in Round Robin"],correctAnswer:0,explanation:"The Convoy Effect occurs in FCFS when a single CPU-heavy process hogs the CPU, causing all short I/O-bound processes to stall behind it in the ready queue."},{id:"fcfs-q4",type:"post",question:"Given processes P1 (AT=0, BT=10) and P2 (AT=0, BT=2). What is the average waiting time under FCFS?",options:["0 ms","5 ms","6 ms","10 ms"],correctAnswer:1,explanation:"P1 waits 0 ms; P2 waits 10 ms. Average waiting time = (0 + 10) / 2 = 5 ms."}],"exp-sjf":[{id:"sjf-q1",type:"pre",question:"Which scheduling algorithm is provably optimal for minimizing average waiting time for stationary processes?",options:["Round Robin","FCFS","Shortest Job First (SJF)","Priority Scheduling"],correctAnswer:2,explanation:"SJF is provably optimal in minimizing average waiting time because running shorter processes first reduces the queue waiting time for subsequent jobs."},{id:"sjf-q2",type:"post",question:"What is the primary drawback of Shortest Job First scheduling in practice?",options:["High context switch overhead","Difficulty in knowing the length of the next CPU burst in advance","High CPU idle time","Cannot be implemented on multi-core systems"],correctAnswer:1,explanation:"The fundamental limitation of SJF is accurately predicting or knowing future CPU burst lengths ahead of time."}],"exp-rr":[{id:"rr-q1",type:"pre",question:"What happens if the Round Robin time quantum is extremely large?",options:["It degrades to First-Come, First-Served (FCFS) scheduling","It turns into Shortest Job First","The system deadlocks immediately","Context switches increase exponentially"],correctAnswer:0,explanation:"When the time quantum is larger than any process burst time, no preemption occurs, so RR behaves identically to FCFS."},{id:"rr-q2",type:"post",question:"What is the consequence of choosing an excessively small time quantum?",options:["Higher CPU utilization for user programs","Excessive context switch overhead, reducing effective CPU throughput","Increased starvation for short jobs","Processes never terminate"],correctAnswer:1,explanation:"Too small a quantum means the CPU spends a large percentage of its time switching contexts between processes rather than executing useful work."}],"exp-producer-consumer":[{id:"sync-pc-q1",type:"pre",question:"In the bounded-buffer Producer-Consumer problem, what is the purpose of the mutex semaphore?",options:["To count the number of full slots in the buffer","To count the number of empty slots in the buffer","To ensure mutual exclusion when modifying buffer pointers","To signal buffer overflow"],correctAnswer:2,explanation:"The mutex semaphore is a binary semaphore initialized to 1 that ensures only one process (producer or consumer) accesses the buffer at a time."},{id:"sync-pc-q2",type:"post",question:"What happens if the Producer executes wait(mutex) before wait(empty) when the buffer is completely full?",options:["The producer creates items faster","Deadlock occurs because the producer holds mutex while blocking on empty","The consumer immediately frees a slot","Buffer automatically resizes"],correctAnswer:1,explanation:"If the producer acquires mutex while buffer is full, it then blocks on wait(empty) without releasing mutex. The consumer cannot enter to consume, causing deadlock."}],"exp-bankers":[{id:"bank-q1",type:"pre",question:"What is the relationship between Max, Allocation, and Need matrices in Banker's Algorithm?",options:["Need = Max + Allocation","Need = Max - Allocation","Need = Allocation - Max","Need = Available * Allocation"],correctAnswer:1,explanation:"Need[i][j] = Max[i][j] - Allocation[i][j], representing the remaining resources process i may request."},{id:"bank-q2",type:"post",question:"Is an unsafe state always a deadlocked state?",options:["Yes, always","No, an unsafe state only means that a deadlock is possible if all processes request their maximum resources","Only in single-resource systems","Only if semaphores are negative"],correctAnswer:1,explanation:"An unsafe state is NOT necessarily a deadlock; it simply means the system cannot guarantee that all processes will finish without deadlock if they simultaneously demand their maximum limits."}],"exp-rag":[{id:"rag-q1",type:"pre",question:"In a single-instance Resource Allocation Graph (RAG), what does a cycle indicate?",options:["Deadlock exists","No deadlock is possible","Memory fragmentation","CPU utilization is 100%"],correctAnswer:0,explanation:"In a system where every resource has exactly one instance, a cycle in the RAG is both necessary and sufficient for a deadlock."}],"exp-first-fit":[{id:"mem-ff-q1",type:"pre",question:"Which dynamic memory allocation strategy selects the smallest free hole that is big enough?",options:["First Fit","Best Fit","Worst Fit","Next Fit"],correctAnswer:1,explanation:"Best Fit searches the entire free list to find the hole closest in size to the requested process size, minimizing leftover fragment size."},{id:"mem-ff-q2",type:"post",question:"What is external fragmentation in contiguous memory allocation?",options:["Unused memory inside an allocated partition","Total free memory is sufficient to satisfy a request, but it is not contiguous","Virtual memory exceeding disk capacity","Page tables taking up too much RAM"],correctAnswer:1,explanation:"External fragmentation occurs when small non-contiguous holes exist across memory; their sum is large enough for a process, but no single hole can fit it."}],"exp-fifo-page":[{id:"page-q1",type:"pre",question:"What is Belady’s Anomaly in page replacement?",options:["Increasing physical memory frames causes MORE page faults to occur","Page faults drop to zero when reference strings are sorted","LRU always produces fewer faults than Optimal","Dirty pages cannot be evicted to disk"],correctAnswer:0,explanation:"Belady’s Anomaly is the counterintuitive phenomenon where increasing the number of physical frames results in an increase in page faults under certain algorithms like FIFO."},{id:"page-q2",type:"post",question:"Which of the following page replacement algorithms does NOT suffer from Belady’s anomaly?",options:["FIFO","LRU (Stack algorithm)","Second Chance without reference bits","Random Replacement"],correctAnswer:1,explanation:"LRU is a stack algorithm; the set of pages in memory for n frames is always a subset of pages for n+1 frames, guaranteeing freedom from Belady’s anomaly."}],"exp-lru-page":[{id:"lru-q1",type:"pre",question:"Which program property does LRU page replacement exploit to achieve near-optimal hit rates?",options:["Spatial locality","Temporal locality of reference","Random distribution","FIFO order"],correctAnswer:1,explanation:"LRU relies on temporal locality: pages that have been referenced recently are highly likely to be referenced again in the near future."}],"exp-file-alloc":[{id:"file-q1",type:"pre",question:"Which file allocation method stores all disk block pointers in a single dedicated index block?",options:["Contiguous Allocation","Linked Allocation","Indexed Allocation","FAT32 Allocation"],correctAnswer:2,explanation:"Indexed allocation brings all pointers together into one index block, allowing direct access without external fragmentation."}],"exp-disk-fcfs":[{id:"disk-q1",type:"pre",question:"What is seek time in hard disk drives?",options:["Time taken to rotate the desired sector under the head","Time taken to position the read/write head over the desired cylinder track","Time taken to transfer data to RAM","Time taken to initialize disk controller"],correctAnswer:1,explanation:"Seek time is the mechanical delay required for the disk arm to travel and position the head over the requested cylinder track."},{id:"disk-q2",type:"post",question:"Why does SSTF (Shortest Seek Time First) disk scheduling suffer from possible starvation?",options:["It visits the inner tracks too slowly","Continuous arrivals of requests near the current head position keep the head local, starving distant requests","It reverses direction after each cylinder","Magnetic platters overheat"],correctAnswer:1,explanation:"SSTF greedily chooses the nearest request. If a continuous stream of requests arrives near the head, requests far away may never get serviced."}]},L2=[{id:"viva-linux-1",category:"Linux & UNIX",question:"What is the difference between a hard link and a symbolic (soft) link in Linux?",answer:"A hard link is a direct directory entry pointing to the same underlying inode on the filesystem; it shares the same inode number and survives if the original file is deleted. A soft link is a special file containing the path string to another file; if the target is deleted, the soft link becomes broken (dangling)."},{id:"viva-linux-2",category:"Linux & UNIX",question:"What is the function of the shebang (#!/bin/bash) at the start of a script?",answer:"The shebang tells the operating system program loader which interpreter binary to spawn to execute the lines contained in the script file."},{id:"viva-proc-1",category:"Process Management",question:"What is the difference between fork() and exec() in UNIX?",answer:"fork() creates an exact duplicate child process with its own PID and copy-on-write memory space. exec() replaces the current process memory image (code, data, stack) with a completely new executable program."},{id:"viva-proc-2",category:"Process Management",question:"What is an orphan process and how does the OS handle it?",answer:"An orphan process is a child process whose parent terminates before it. The operating system kernel automatically re-parents the orphan to the root init/systemd process (PID 1), which periodically reaps terminated children."},{id:"viva-cpu-1",category:"CPU Scheduling",question:"What is the difference between Turnaround Time and Waiting Time?",answer:"Turnaround Time (TAT) is the total elapsed time between process submission and completion (TAT = Completion Time - Arrival Time). Waiting Time (WT) is the time spent waiting in the ready queue without doing CPU work (WT = TAT - Burst Time)."},{id:"viva-cpu-2",category:"CPU Scheduling",question:"What is the difference between preemptive and non-preemptive scheduling?",answer:"In non-preemptive scheduling, once a process is allocated the CPU, it retains it until termination or an I/O wait. In preemptive scheduling, the OS can forcibly suspend a running process when a higher-priority process arrives or when its time quantum expires."},{id:"viva-cpu-3",category:"CPU Scheduling",question:"Why can Round Robin scheduling cause high context switch overhead?",answer:"If the time quantum is configured too small, the scheduler switches tasks very frequently. Each switch involves saving CPU registers, flushing caches, updating process control blocks (PCBs), and re-loading state, which wastes CPU cycles."},{id:"viva-sync-1",category:"Process Synchronization",question:"What is a race condition and how do semaphores prevent it?",answer:"A race condition occurs when multiple threads/processes access and manipulate shared data concurrently, and the outcome depends on the non-deterministic order of execution. Semaphores enforce mutual exclusion around critical sections so only one execution thread can modify the shared state at any given moment."},{id:"viva-sync-2",category:"Process Synchronization",question:"What is the difference between a binary semaphore and a counting semaphore?",answer:"A binary semaphore (mutex) has a value of either 0 or 1, primarily used for mutual exclusion. A counting semaphore has an integer value ranging over an unrestricted domain, used to control access to a resource pool consisting of a finite number of instances."},{id:"viva-deadlock-1",category:"Deadlock Detection & Avoidance",question:"What are the four necessary Coffman conditions for deadlock to occur?",answer:`1. Mutual Exclusion (non-shareable resources)
2. Hold and Wait (processes hold resources while waiting for more)
3. No Preemption (resources cannot be forcibly confiscated)
4. Circular Wait (a closed chain of processes waiting on each other).`},{id:"viva-deadlock-2",category:"Deadlock Detection & Avoidance",question:"What is the difference between Deadlock Prevention and Deadlock Avoidance?",answer:"Deadlock Prevention eliminates at least one of the four Coffman conditions statically by protocol design. Deadlock Avoidance dynamically inspects resource requests at runtime (e.g. using Banker’s Algorithm) and only grants requests that maintain a safe execution sequence."},{id:"viva-mem-1",category:"Contiguous Memory Allocation",question:"What is the difference between Internal and External Fragmentation?",answer:"Internal Fragmentation is allocated space that remains unused inside a designated partition because the process is smaller than the block. External Fragmentation is unallocated free memory distributed across disjoint holes that cannot satisfy a request because it is not contiguous."},{id:"viva-mem-2",category:"Contiguous Memory Allocation",question:"How does paging solve external fragmentation?",answer:"Paging divides physical memory into fixed-size frames and logical memory into same-size pages. Since any free frame can be allocated to any process page, no external fragmentation can ever exist."},{id:"viva-vm-1",category:"Virtual Memory",question:"What is Belady’s Anomaly and which algorithms suffer from it?",answer:"Belady’s Anomaly is when increasing the number of physical page frames results in an increase in page faults for certain reference strings. First-In, First-Out (FIFO) suffers from it. Stack algorithms such as LRU and Optimal do NOT suffer from Belady’s anomaly."},{id:"viva-vm-2",category:"Virtual Memory",question:"What is thrashing in virtual memory systems?",answer:"Thrashing occurs when a computer spends more time paging (swapping pages between RAM and disk) than executing instructions. It happens when the sum of working sets of active processes exceeds physical memory capacity."},{id:"viva-fs-1",category:"File Systems",question:"Compare Contiguous, Linked, and Indexed file allocation methods.",answer:"Contiguous: Fast sequential and direct access, but suffers from external fragmentation and hard-to-predict file growth. Linked: No external fragmentation, but slow direct access and pointer overhead. Indexed: Supports direct access and no external fragmentation, but requires index block overhead."},{id:"viva-disk-1",category:"Disk Scheduling",question:"Why does SSTF (Shortest Seek Time First) risk starvation?",answer:"SSTF greedily services requests closest to the current head. If new requests continuously arrive near the current head position, distant requests on outer or inner tracks may wait indefinitely (starvation)."},{id:"viva-disk-2",category:"Disk Scheduling",question:"What is the key difference between SCAN (Elevator) and LOOK disk scheduling?",answer:"SCAN travels all the way to the boundary cylinder (track 0 or 199) before reversing, even if no pending requests exist at the edge. LOOK only travels as far as the final pending request in that direction before reversing."}];function al(t,e,n=2){const i=t.map(y=>({...y,remainingTime:y.burstTime,priority:y.priority??1})),r=[],s=[],a={},l={},c=[];let d=0,u=0,p=null;const m=i.reduce((y,v)=>y+v.burstTime,0)+100;if(e==="FCFS"){const y=[...i].sort((v,A)=>v.arrivalTime-A.arrivalTime);for(const v of y){d<v.arrivalTime&&(d=v.arrivalTime),p!==null&&p!==v.pid&&u++,a[v.pid]=d;const A=d;d+=v.burstTime,l[v.pid]=d,c.push(v.pid),s.push({pid:v.pid,start:A,end:d}),p=v.pid,r.push({time:A,runningProcessId:v.pid,readyQueue:y.filter(M=>M.arrivalTime<=A&&!c.includes(M.pid)&&M.pid!==v.pid).map(M=>M.pid),completedProcesses:[...c],actionDescription:`Process ${v.pid} begins execution at t=${A} and finishes at t=${d}.`})}}else if(e==="SJF")for(;c.length<i.length&&d<m;){const y=i.filter(M=>M.arrivalTime<=d&&!c.includes(M.pid));if(y.length===0){const M=i.filter(w=>!c.includes(w.pid)).sort((w,k)=>w.arrivalTime-k.arrivalTime)[0];if(!M)break;d=M.arrivalTime;continue}y.sort((M,w)=>M.burstTime-w.burstTime||M.arrivalTime-w.arrivalTime);const v=y[0];p!==null&&p!==v.pid&&u++,a[v.pid]===void 0&&(a[v.pid]=d);const A=d;d+=v.burstTime,l[v.pid]=d,c.push(v.pid),s.push({pid:v.pid,start:A,end:d}),p=v.pid,r.push({time:A,runningProcessId:v.pid,readyQueue:y.slice(1).map(M=>M.pid),completedProcesses:[...c],actionDescription:`SJF selected ${v.pid} (Burst=${v.burstTime}) at t=${A}. Completed at t=${d}.`})}else if(e==="SRTF")for(;c.length<i.length&&d<m;){const y=i.filter(w=>w.arrivalTime<=d&&(w.remainingTime??0)>0);if(y.length===0){d++;continue}y.sort((w,k)=>(w.remainingTime??0)-(k.remainingTime??0)||w.arrivalTime-k.arrivalTime);const v=y[0];p!==null&&p!==v.pid&&u++,a[v.pid]===void 0&&(a[v.pid]=d);const A=d;v.remainingTime=(v.remainingTime??1)-1,d+=1;const M=s[s.length-1];M&&M.pid===v.pid&&M.end===A?M.end=d:s.push({pid:v.pid,start:A,end:d}),v.remainingTime===0&&(l[v.pid]=d,c.push(v.pid)),r.push({time:A,runningProcessId:v.pid,readyQueue:y.filter(w=>w.pid!==v.pid).map(w=>w.pid),completedProcesses:[...c],actionDescription:`SRTF running ${v.pid} (Rem=${v.remainingTime}) at t=${A}.`}),p=v.pid}else if(e==="Priority")for(;c.length<i.length&&d<m;){const y=i.filter(M=>M.arrivalTime<=d&&!c.includes(M.pid));if(y.length===0){const M=i.filter(w=>!c.includes(w.pid)).sort((w,k)=>w.arrivalTime-k.arrivalTime)[0];if(!M)break;d=M.arrivalTime;continue}y.sort((M,w)=>(M.priority??1)-(w.priority??1)||M.arrivalTime-w.arrivalTime);const v=y[0];p!==null&&p!==v.pid&&u++,a[v.pid]===void 0&&(a[v.pid]=d);const A=d;d+=v.burstTime,l[v.pid]=d,c.push(v.pid),s.push({pid:v.pid,start:A,end:d}),p=v.pid,r.push({time:A,runningProcessId:v.pid,readyQueue:y.slice(1).map(M=>M.pid),completedProcesses:[...c],actionDescription:`Priority selected ${v.pid} (Priority=${v.priority}) at t=${A}. Completed at t=${d}.`})}else if(e==="RR"){const y=[],v=new Set,A=M=>{i.filter(w=>w.arrivalTime<=M&&!v.has(w.pid)).sort((w,k)=>w.arrivalTime-k.arrivalTime).forEach(w=>{y.push(w),v.add(w.pid)})};for(A(d);(y.length>0||c.length<i.length)&&d<m;){if(y.length===0){d++,A(d);continue}const M=y.shift();p!==null&&p!==M.pid&&u++,a[M.pid]===void 0&&(a[M.pid]=d);const w=Math.min(n,M.remainingTime??M.burstTime),k=d;d+=w,M.remainingTime=(M.remainingTime??M.burstTime)-w,s.push({pid:M.pid,start:k,end:d}),A(d),(M.remainingTime??0)>0?y.push(M):(l[M.pid]=d,c.push(M.pid)),r.push({time:k,runningProcessId:M.pid,readyQueue:y.map(T=>T.pid),completedProcesses:[...c],actionDescription:`Round Robin: ${M.pid} ran for ${w} unit(s) (Quantum=${n}). Remaining=${M.remainingTime??0}.`}),p=M.pid}}const g={};let b=0,x=0,f=0;i.forEach(y=>{const v=l[y.pid]??y.arrivalTime+y.burstTime,A=v-y.arrivalTime,M=A-y.burstTime,w=(a[y.pid]??y.arrivalTime)-y.arrivalTime;g[y.pid]={pid:y.pid,completionTime:v,turnaroundTime:A,waitingTime:Math.max(0,M),responseTime:Math.max(0,w)},b+=Math.max(0,M),x+=A,f+=Math.max(0,w)});const _=i.length||1;return{timeline:s,steps:r,processMetrics:g,avgWaitingTime:Number((b/_).toFixed(2)),avgTurnaroundTime:Number((x/_).toFixed(2)),avgResponseTime:Number((f/_).toFixed(2)),contextSwitches:u}}const D2={P1:"bg-blue-500 text-white border-blue-600",P2:"bg-emerald-500 text-white border-emerald-600",P3:"bg-amber-500 text-white border-amber-600",P4:"bg-purple-500 text-white border-purple-600",P5:"bg-rose-500 text-white border-rose-600",P6:"bg-cyan-500 text-white border-cyan-600"},F2=({timeline:t,currentTime:e,runningPid:n})=>{if(t.length===0)return o.jsx("div",{className:"p-8 text-center text-xs text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-800",children:"Click Play or Step Next to generate the Gantt chart execution timeline."});const i=t[t.length-1].end||1;return o.jsxs("div",{className:"space-y-2",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 px-1",children:[o.jsx("span",{children:"Gantt Chart Execution Timeline"}),o.jsxs("span",{className:"font-mono text-[11px]",children:["Total Time: ",i," ms"]})]}),o.jsx("div",{className:"relative w-full h-12 bg-slate-100 dark:bg-slate-950 rounded-xl p-1 flex border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-inner",children:t.map((r,s)=>{const a=r.end-r.start,l=a/i*100,c=D2[r.pid]||"bg-slate-600 text-white",d=n===r.pid&&e>=r.start&&e<r.end;return o.jsxs("div",{style:{width:`${Math.max(l,5)}%`},className:`relative h-full flex flex-col items-center justify-center font-mono font-bold text-xs rounded-lg mx-0.5 border ${c} ${d?"ring-2 ring-white ring-offset-1 dark:ring-offset-slate-900 animate-pulse":""} transition-all duration-150`,children:[o.jsx("span",{className:"text-[11px]",children:r.pid}),o.jsxs("span",{className:"text-[9px] opacity-75 font-normal",children:[a,"ms"]})]},`${r.pid}-${s}`)})}),o.jsxs("div",{className:"relative w-full flex justify-between text-[10px] font-mono text-slate-400 px-1",children:[o.jsx("span",{children:"0"}),t.map((r,s)=>o.jsx("span",{children:r.end},s))]})]})},ty=({isPlaying:t,onPlayToggle:e,onStepNext:n,onStepPrev:i,onReset:r,currentStep:s,totalSteps:a,speed:l,onSpeedChange:c})=>{const d=[.5,1,2,4];return o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700",children:[o.jsxs("div",{className:"flex items-center space-x-1.5",children:[o.jsx("button",{onClick:r,title:"Reset to Start",className:"p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:text-srm-blue transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-600",children:o.jsx(Qi,{className:"w-4 h-4"})}),o.jsx("button",{onClick:i,disabled:s<=0,title:"Previous Step",className:"p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-600",children:o.jsx(uS,{className:"w-4 h-4"})}),o.jsx("button",{onClick:e,title:t?"Pause":"Play",className:"flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-srm-blue hover:bg-blue-700 text-white font-medium text-xs shadow-xs transition-colors",children:t?o.jsxs(o.Fragment,{children:[o.jsx(cS,{className:"w-4 h-4 fill-white"}),o.jsx("span",{children:"Pause"})]}):o.jsxs(o.Fragment,{children:[o.jsx(iv,{className:"w-4 h-4 fill-white"}),o.jsx("span",{children:"Play"})]})}),o.jsx("button",{onClick:n,disabled:s>=a-1,title:"Next Step",className:"p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-600",children:o.jsx(hS,{className:"w-4 h-4"})})]}),o.jsxs("div",{className:"flex items-center space-x-3 flex-1 max-w-xs px-2",children:[o.jsxs("span",{className:"text-xs font-mono font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap",children:["Step ",Math.min(s+1,a)," / ",Math.max(a,1)]}),o.jsx("div",{className:"w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden",children:o.jsx("div",{className:"bg-srm-blue h-full transition-all duration-150",style:{width:`${a>1?(s+1)/a*100:100}%`}})})]}),o.jsxs("div",{className:"flex items-center space-x-1",children:[o.jsxs("span",{className:"text-[11px] text-slate-400 mr-1 flex items-center",children:[o.jsx(xS,{className:"w-3 h-3 mr-0.5 text-amber-500"}),"Speed:"]}),d.map(u=>o.jsxs("button",{onClick:()=>c(u),className:`px-2 py-1 text-xs font-mono font-semibold rounded-md transition-all ${l===u?"bg-srm-blue text-white shadow-xs":"text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700"}`,children:[u,"x"]},u))]})]})},qt=({label:t,value:e,unit:n,icon:i,hint:r,variant:s="blue"})=>{const a={blue:"border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20 text-blue-900 dark:text-blue-200",amber:"border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200",emerald:"border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200",purple:"border-purple-200 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20 text-purple-900 dark:text-purple-200",rose:"border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20 text-rose-900 dark:text-rose-200"};return o.jsxs("div",{className:`p-4 rounded-xl border ${a[s]} backdrop-blur-xs flex flex-col justify-between transition-all duration-200 hover:shadow-sm`,children:[o.jsxs("div",{className:"flex items-center justify-between mb-1",children:[o.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400",children:t}),i&&o.jsx("div",{className:"text-slate-400 dark:text-slate-500",children:i})]}),o.jsxs("div",{className:"flex items-baseline space-x-1.5 mt-1",children:[o.jsx("span",{className:"text-2xl font-extrabold font-mono tracking-tight",children:e}),n&&o.jsx("span",{className:"text-xs font-medium text-slate-500 dark:text-slate-400",children:n})]}),r&&o.jsx("div",{className:"text-[11px] text-slate-500 dark:text-slate-400 mt-2 line-clamp-1",children:r})]})},ny=({type:t,currentVal:e,onValChange:n,originalMetric:i,updatedMetric:r,explanation:s})=>o.jsxs("div",{className:"p-4 rounded-xl border border-amber-300 dark:border-amber-700/60 bg-amber-50/60 dark:bg-amber-950/20 backdrop-blur-xs",children:[o.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[o.jsx(sc,{className:"w-4 h-4 text-amber-600 dark:text-amber-400"}),o.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300",children:'"What Happens If?" — Cause & Effect Explorer'})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsxs("span",{className:"text-slate-700 dark:text-slate-300 font-medium",children:[t==="quantum"&&"Change Time Quantum:",t==="frames"&&"Change Physical Frame Count:",t==="disk"&&"Change Head Seek Strategy:"]}),o.jsx("div",{className:"flex items-center space-x-1.5",children:[1,2,3,4,5].map(a=>o.jsx("button",{onClick:()=>n(a),className:`w-7 h-7 rounded-md font-mono font-bold text-xs transition-all ${e===a?"bg-amber-500 text-white shadow-xs scale-105":"bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-amber-400"}`,children:a},a))})]}),o.jsxs("div",{className:"flex items-center space-x-2 font-mono text-xs bg-white dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-amber-200 dark:border-amber-800",children:[o.jsx("span",{className:"text-slate-400",children:i}),o.jsx(Bt,{className:"w-3.5 h-3.5 text-amber-500"}),o.jsx("span",{className:"font-bold text-amber-700 dark:text-amber-300",children:r})]})]}),o.jsxs("div",{className:"mt-2 text-[11px] text-amber-900 dark:text-amber-200/80 flex items-start space-x-1.5",children:[o.jsx(Ts,{className:"w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-500"}),o.jsx("span",{children:s})]})]}),U2=[{id:"1",pid:"P1",arrivalTime:0,burstTime:5,priority:2},{id:"2",pid:"P2",arrivalTime:1,burstTime:3,priority:1},{id:"3",pid:"P3",arrivalTime:2,burstTime:8,priority:3},{id:"4",pid:"P4",arrivalTime:3,burstTime:6,priority:2}],Ym=()=>{const[t,e]=ae.useState(U2),[n,i]=ae.useState("FCFS"),[r,s]=ae.useState(2),[a,l]=ae.useState(0),[c,d]=ae.useState(!1),[u,p]=ae.useState(1),[h,m]=ae.useState(!1),g=ae.useMemo(()=>al(t,n,r),[t,n,r]),b=g.steps.length,x=g.steps[a]||g.steps[0]||{time:0,runningProcessId:null,readyQueue:[],completedProcesses:[],actionDescription:"Ready to start simulation."},f=ae.useRef(null);ae.useEffect(()=>{if(c){const S=Math.max(250,1e3/u);f.current=window.setInterval(()=>{l(I=>I>=b-1?(d(!1),I):I+1)},S)}else f.current&&clearInterval(f.current);return()=>{f.current&&clearInterval(f.current)}},[c,u,b]);const _=()=>{a>=b-1&&l(0),d(!c)},y=()=>{d(!1),l(0)},v=()=>{a<b-1&&l(S=>S+1)},A=()=>{a>0&&l(S=>S-1)},M=()=>{if(t.length>=6)return;const S=t.length+1,I={id:String(Date.now()),pid:`P${S}`,arrivalTime:Math.floor(Math.random()*4),burstTime:Math.floor(Math.random()*6)+2,priority:Math.floor(Math.random()*3)+1};e([...t,I]),y()},w=S=>{t.length<=2||(e(t.filter(I=>I.id!==S)),y())},k=()=>{const I=[];for(let G=1;G<=4;G++)I.push({id:String(G),pid:`P${G}`,arrivalTime:G===1?0:Math.floor(Math.random()*5),burstTime:Math.floor(Math.random()*8)+2,priority:Math.floor(Math.random()*4)+1});e(I),y()},T=ae.useMemo(()=>x?g.timeline.filter(S=>S.start<=x.time):[],[g.timeline,x]);return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mr-1",children:"Algorithm:"}),["FCFS","SJF","SRTF","Priority","RR"].map(S=>o.jsx("button",{onClick:()=>{i(S),y()},className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${n===S?"bg-srm-blue text-white shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"}`,children:S==="RR"?"Round Robin":S},S))]}),n==="RR"&&o.jsxs("div",{className:"flex items-center space-x-2 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-xl border border-amber-300 dark:border-amber-800",children:[o.jsx("span",{className:"text-xs font-semibold text-amber-900 dark:text-amber-300",children:"Time Quantum (q):"}),o.jsx("input",{type:"number",min:"1",max:"10",value:r,onChange:S=>{s(Math.max(1,Number(S.target.value)||1)),y()},className:"w-12 px-2 py-0.5 text-xs text-center font-mono font-bold bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 rounded"})]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsxs("button",{onClick:k,className:"flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors",children:[o.jsx(rc,{className:"w-3.5 h-3.5 text-amber-500"}),o.jsx("span",{children:"Random Problem"})]}),o.jsxs("button",{onClick:()=>m(!h),className:"flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-100/60 dark:bg-amber-900/30 hover:bg-amber-200/60 rounded-lg transition-colors border border-amber-300 dark:border-amber-700",children:[o.jsx(sc,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"What If?"})]})]})]}),h&&o.jsx(ny,{type:"quantum",currentVal:r,onValChange:S=>{s(S),y()},originalMetric:`Avg WT: ${g.avgWaitingTime} ms`,updatedMetric:`Context Switches: ${g.contextSwitches}`,explanation:"Notice how changing the Time Quantum alters the balance: smaller quantum yields rapid responsiveness but inflates context switch overhead; larger quantum approaches non-preemptive FCFS."}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"lg:col-span-1 bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsxs("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400",children:["Processes (",t.length,"/6)"]}),o.jsxs("button",{onClick:M,disabled:t.length>=6,className:"flex items-center space-x-1 text-xs font-semibold text-srm-blue dark:text-blue-400 hover:underline disabled:opacity-40",children:[o.jsx(sv,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Add"})]})]}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-xs text-left",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"border-b border-slate-200 dark:border-slate-800 text-slate-400",children:[o.jsx("th",{className:"pb-2 font-medium",children:"PID"}),o.jsx("th",{className:"pb-2 font-medium",children:"AT (ms)"}),o.jsx("th",{className:"pb-2 font-medium",children:"BT (ms)"}),n==="Priority"&&o.jsx("th",{className:"pb-2 font-medium",children:"Prio"}),o.jsx("th",{className:"pb-2"})]})}),o.jsx("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800/60 font-mono",children:t.map((S,I)=>o.jsxs("tr",{children:[o.jsx("td",{className:"py-2 font-bold text-srm-blue dark:text-blue-400",children:S.pid}),o.jsx("td",{className:"py-2",children:o.jsx("input",{type:"number",min:"0",max:"20",value:S.arrivalTime,onChange:G=>{const H=[...t];H[I].arrivalTime=Math.max(0,Number(G.target.value)||0),e(H),y()},className:"w-12 px-1.5 py-0.5 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"})}),o.jsx("td",{className:"py-2",children:o.jsx("input",{type:"number",min:"1",max:"30",value:S.burstTime,onChange:G=>{const H=[...t];H[I].burstTime=Math.max(1,Number(G.target.value)||1),e(H),y()},className:"w-12 px-1.5 py-0.5 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"})}),n==="Priority"&&o.jsx("td",{className:"py-2",children:o.jsx("input",{type:"number",min:"1",max:"10",value:S.priority??1,onChange:G=>{const H=[...t];H[I].priority=Math.max(1,Number(G.target.value)||1),e(H),y()},className:"w-12 px-1.5 py-0.5 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"})}),o.jsx("td",{className:"py-2 text-right",children:t.length>2&&o.jsx("button",{onClick:()=>w(S.id),className:"text-slate-400 hover:text-rose-500",children:o.jsx(pS,{className:"w-3.5 h-3.5"})})})]},S.id))})]})})]}),o.jsxs("div",{className:"lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between",children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400",children:"Live CPU Dispatch Architecture"}),o.jsxs("span",{className:"text-xs font-mono font-bold text-srm-blue dark:text-blue-400",children:["t = ",x.time," ms"]})]}),o.jsxs("div",{className:"my-4 flex flex-col sm:flex-row items-center justify-center gap-4",children:[o.jsxs("div",{className:"flex-1 w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800",children:[o.jsxs("div",{className:"text-[11px] font-semibold text-slate-400 mb-2 flex items-center justify-between",children:[o.jsx("span",{children:"READY QUEUE"}),o.jsxs("span",{children:[x.readyQueue.length," in queue"]})]}),o.jsx("div",{className:"flex items-center space-x-2 min-h-[42px] overflow-x-auto",children:x.readyQueue.length===0?o.jsx("span",{className:"text-xs text-slate-400 italic",children:"Queue Empty"}):x.readyQueue.map((S,I)=>o.jsx("div",{className:"px-3 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-950/60 border border-blue-300 dark:border-blue-800 text-blue-800 dark:text-blue-300 font-mono font-bold text-xs shrink-0 animate-fadeIn",children:S},`${S}-${I}`))})]}),o.jsx(Bt,{className:"hidden sm:block w-5 h-5 text-slate-400 shrink-0"}),o.jsxs("div",{className:"w-full sm:w-44 bg-blue-50 dark:bg-blue-950/30 p-3 rounded-xl border-2 border-srm-blue dark:border-blue-500/40 text-center",children:[o.jsxs("div",{className:"text-[10px] font-bold tracking-wider uppercase text-srm-blue dark:text-blue-400 mb-1 flex items-center justify-center space-x-1",children:[o.jsx(af,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"CPU CORE"})]}),x.runningProcessId?o.jsx("div",{className:"font-mono font-extrabold text-xl text-srm-blue dark:text-blue-300 animate-pulse",children:x.runningProcessId}):o.jsx("div",{className:"text-xs text-slate-400 italic font-mono py-1",children:"IDLE"})]})]}),o.jsxs("div",{className:"p-3 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-900/60 flex items-start space-x-2 text-xs",children:[o.jsx(sS,{className:"w-4 h-4 text-srm-blue dark:text-blue-400 shrink-0 mt-0.5"}),o.jsxs("div",{className:"text-slate-700 dark:text-slate-300",children:[o.jsxs("strong",{className:"text-slate-900 dark:text-white",children:["Action at t=",x.time,": "]}),x.actionDescription]})]})]})]}),o.jsx("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs",children:o.jsx(F2,{timeline:T,currentTime:x.time,runningPid:x.runningProcessId})}),o.jsx(ty,{isPlaying:c,onPlayToggle:_,onStepNext:v,onStepPrev:A,onReset:y,currentStep:a,totalSteps:b,speed:u,onSpeedChange:p}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[o.jsx(qt,{label:"Avg Waiting Time",value:g.avgWaitingTime,unit:"ms",variant:"blue",hint:"Lower is better"}),o.jsx(qt,{label:"Avg Turnaround Time",value:g.avgTurnaroundTime,unit:"ms",variant:"emerald",hint:"Total execution latency"}),o.jsx(qt,{label:"Avg Response Time",value:g.avgResponseTime,unit:"ms",variant:"purple",hint:"First CPU access"}),o.jsx(qt,{label:"Context Switches",value:g.contextSwitches,unit:"switches",variant:"amber",hint:"CPU state change count"})]})]})};function ol(t,e,n){const i=[],r=Array(e).fill(null);let s=0,a=0;const l=[],c={},d={},u=Array(e).fill(0);let p=0;for(let m=0;m<t.length;m++){const g=t[m],b=r.includes(g);let x=null,f="";if(d[g]=(d[g]||0)+1,c[g]=m,b){s++;const _=r.indexOf(g);n==="Clock"&&(u[_]=1),f=`Page ${g} is already present in Frame ${_} (PAGE HIT ✓).`}else{a++;const _=r.indexOf(null);if(_!==-1)r[_]=g,l.push(g),n==="Clock"&&(u[_]=1),f=`PAGE FAULT ✕: Placed Page ${g} into available Frame ${_}.`;else{let y=0;if(n==="FIFO"){const v=l.shift();y=r.indexOf(v),x=v,r[y]=g,l.push(g),f=`PAGE FAULT ✕: Frame full. FIFO evicted oldest Page ${v} to load Page ${g}.`}else if(n==="LRU"){let v=1/0,A=r[0];for(const M of r)M!==null&&(c[M]??-1)<v&&(v=c[M]??-1,A=M);y=r.indexOf(A),x=A,r[y]=g,f=`PAGE FAULT ✕: Frame full. LRU evicted least recently used Page ${A} (last referenced at step ${v+1}).`}else if(n==="Optimal"){let v=-1,A=r[0];for(const M of r){if(M===null)continue;const w=t.slice(m+1).indexOf(M);if(w===-1){A=M;break}else w>v&&(v=w,A=M)}y=r.indexOf(A),x=A,r[y]=g,f=`PAGE FAULT ✕: Frame full. Optimal evicted Page ${A} as it is not needed for the longest future duration.`}else if(n==="LFU"){let v=1/0,A=r[0];for(const M of r)M!==null&&(d[M]||0)<v&&(v=d[M]||0,A=M);y=r.indexOf(A),x=A,r[y]=g,f=`PAGE FAULT ✕: Frame full. LFU evicted Page ${A} with lowest reference count (${v}).`}else if(n==="Clock"){for(;;)if(u[p]===0){x=r[p],r[p]=g,u[p]=1,y=p,p=(p+1)%e;break}else u[p]=0,p=(p+1)%e;f=`PAGE FAULT ✕: Clock algorithm gave second chance to referenced pages, evicted Page ${x} at pointer ${y}.`}}}i.push({stepIndex:m,page:g,frames:[...r],isHit:b,evictedPage:x,explanation:f})}const h=t.length||1;return{steps:i,totalHits:s,totalFaults:a,hitRatio:Number((s/h*100).toFixed(1)),faultRatio:Number((a/h*100).toFixed(1)),referenceString:t,frameCount:e}}const O2=[7,0,1,2,0,3,0,4,2,3,0,3,2],j2=()=>{const[t,e]=ae.useState(O2),[n,i]=ae.useState(3),[r,s]=ae.useState("FIFO"),[a,l]=ae.useState(0),[c,d]=ae.useState(!1),[u,p]=ae.useState(1),[h,m]=ae.useState(!1),g=ae.useMemo(()=>ol(t,n,r),[t,n,r]),b=g.steps.length,x=g.steps[a]||g.steps[0]||{page:t[0]||0,frames:Array(n).fill(null),isHit:!1,evictedPage:null,explanation:"Ready to start page replacement simulation."},f=ae.useRef(null);ae.useEffect(()=>{if(c){const v=Math.max(250,1e3/u);f.current=window.setInterval(()=>{l(A=>A>=b-1?(d(!1),A):A+1)},v)}else f.current&&clearInterval(f.current);return()=>{f.current&&clearInterval(f.current)}},[c,u,b]);const _=()=>{const A=Array.from({length:12},()=>Math.floor(Math.random()*8));e(A),d(!1),l(0)},y=()=>{e([1,2,3,4,1,2,5,1,2,3,4,5]),s("FIFO"),d(!1),l(0)};return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mr-1",children:"Algorithm:"}),["FIFO","LRU","Optimal","LFU","Clock"].map(v=>o.jsx("button",{onClick:()=>{s(v),d(!1),l(0)},className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${r===v?"bg-srm-blue text-white shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"}`,children:v},v))]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"text-xs font-semibold text-slate-600 dark:text-slate-300",children:"Frames:"}),[3,4,5].map(v=>o.jsx("button",{onClick:()=>{i(v),d(!1),l(0)},className:`w-7 h-7 rounded-lg text-xs font-bold font-mono transition-all ${n===v?"bg-srm-blue text-white":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"}`,children:v},v))]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsxs("button",{onClick:y,title:"Load Belady's Anomaly string",className:"flex items-center space-x-1 px-2.5 py-1.5 text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-lg",children:[o.jsx($b,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Belady's Anomaly"})]}),o.jsxs("button",{onClick:_,className:"flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700",children:[o.jsx(rc,{className:"w-3.5 h-3.5 text-amber-500"}),o.jsx("span",{children:"Random String"})]}),o.jsxs("button",{onClick:()=>m(!h),className:"flex items-center space-x-1 px-2.5 py-1.5 text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-100/50 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-700",children:[o.jsx(sc,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"What If?"})]})]})]}),h&&o.jsx(ny,{type:"frames",currentVal:n,onValChange:v=>{i(v),d(!1),l(0)},originalMetric:`Faults: ${g.totalFaults}`,updatedMetric:`Hit Ratio: ${g.hitRatio}%`,explanation:"Notice how changing frame capacity directly alters page hit rates. Try 3 vs 4 frames with FIFO on Belady's test string to observe the anomaly!"}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("div",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:["Page Reference String (Total: ",t.length,")"]}),o.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-2",children:t.map((v,A)=>{const M=A===a,w=A<a;return o.jsx("div",{onClick:()=>{d(!1),l(A)},className:`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm cursor-pointer transition-all ${M?"bg-srm-blue text-white ring-2 ring-blue-400 scale-110 shadow-md":w?"bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300":"bg-slate-100 dark:bg-slate-850 text-slate-400 opacity-60"}`,children:v},A)})})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"md:col-span-1 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsxs("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-500",children:["Physical Frames (",n,")"]}),x.isHit?o.jsxs("span",{className:"flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",children:[o.jsx(sf,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"PAGE HIT ✓"})]}):o.jsxs("span",{className:"flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",children:[o.jsx(lc,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"PAGE FAULT ✕"})]})]}),o.jsx("div",{className:"space-y-2",children:x.frames.map((v,A)=>{const M=v===x.page;return o.jsxs("div",{className:`flex items-center justify-between p-3 rounded-xl border font-mono transition-all ${M?"border-srm-blue bg-blue-50 dark:bg-blue-950/40 shadow-xs":"border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"}`,children:[o.jsxs("span",{className:"text-xs text-slate-400 font-medium",children:["Frame ",A]}),o.jsx("span",{className:`text-lg font-bold ${v!==null?"text-slate-900 dark:text-white":"text-slate-400 italic"}`,children:v!==null?`Page ${v}`:"[ Empty ]"})]},A)})})]}),x.evictedPage!==null&&o.jsxs("div",{className:"mt-4 p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-[11px] text-rose-700 dark:text-rose-300",children:["Evicted victim: ",o.jsxs("strong",{children:["Page ",x.evictedPage]})]})]}),o.jsxs("div",{className:"md:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 mb-2",children:"Step Decision & Virtual Memory Log"}),o.jsx("div",{className:"p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono",children:x.explanation}),o.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800",children:[o.jsx("div",{className:"text-[11px] text-slate-400",children:"Total References So Far"}),o.jsx("div",{className:"text-xl font-bold font-mono mt-0.5",children:a+1})]}),o.jsxs("div",{className:"p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800",children:[o.jsx("div",{className:"text-[11px] text-slate-400",children:"Current Page Requested"}),o.jsxs("div",{className:"text-xl font-bold font-mono text-srm-blue dark:text-blue-400 mt-0.5",children:["Page ",x.page]})]})]})]}),o.jsx("div",{className:"text-xs text-slate-500 mt-4",children:"* Stack algorithms (like LRU and Optimal) guarantee that adding frames never increases page faults."})]})]}),o.jsx(ty,{isPlaying:c,onPlayToggle:()=>d(!c),onStepNext:()=>l(v=>Math.min(v+1,b-1)),onStepPrev:()=>l(v=>Math.max(v-1,0)),onReset:()=>{d(!1),l(0)},currentStep:a,totalSteps:b,speed:u,onSpeedChange:p}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[o.jsx(qt,{label:"Total Page Faults",value:g.totalFaults,variant:"rose",hint:"Misses requiring disk access"}),o.jsx(qt,{label:"Total Page Hits",value:g.totalHits,variant:"emerald",hint:"Satisfied directly in RAM"}),o.jsx(qt,{label:"Hit Ratio",value:g.hitRatio,unit:"%",variant:"blue",hint:"Percentage of memory hits"}),o.jsx(qt,{label:"Fault Ratio",value:g.faultRatio,unit:"%",variant:"amber",hint:"Percentage of page misses"})]})]})};function z2(t,e,n,i){const r=t.length,s=i.length,a=[];for(let g=0;g<r;g++){const b=[];for(let x=0;x<s;x++)b.push(Math.max(0,n[g][x]-e[g][x]));a.push(b)}const l=[...i],c=Array(r).fill(!1),d=[],u=[];let p=0,h=!0;for(;p<r&&h;){h=!1;for(let g=0;g<r;g++)if(!c[g]){let b=!0;for(let x=0;x<s;x++)if(a[g][x]>l[x]){b=!1;break}if(b){const x=[...l];for(let f=0;f<s;f++)l[f]+=e[g][f];c[g]=!0,d.push(t[g]),p++,h=!0,u.push({stepIndex:u.length+1,processChecked:t[g],currentWork:x,canAllocate:!0,needVector:[...a[g]],newWork:[...l],safeSequenceSoFar:[...d],explanation:`Need for ${t[g]} [${a[g].join(", ")}] <= Work [${x.join(", ")}]. Resources allocated and released. New Work: [${l.join(", ")}].`})}else u.push({stepIndex:u.length+1,processChecked:t[g],currentWork:[...l],canAllocate:!1,needVector:[...a[g]],safeSequenceSoFar:[...d],explanation:`Need for ${t[g]} [${a[g].join(", ")}] exceeds Work [${l.join(", ")}]. Process must wait.`})}}const m=p===r;return{isSafe:m,safeSequence:m?d:[],steps:u,needMatrix:a}}const Bo=["P0","P1","P2","P3","P4"],Km=[[0,1,0],[2,0,0],[3,0,2],[2,1,1],[0,0,2]],Zm=[[7,5,3],[3,2,2],[9,0,2],[2,2,2],[4,3,3]],Qm=[3,3,2],B2=()=>{const[t,e]=ae.useState(Km),[n,i]=ae.useState(Zm),[r,s]=ae.useState(Qm),[a,l]=ae.useState(0),c=ae.useMemo(()=>z2(Bo,t,n,r),[t,n,r]),d=c.steps.length,u=c.steps[a]||c.steps[0],p=()=>{e(Km),i(Zm),s(Qm),l(0)},h=()=>{s([1,0,0]),l(0)};return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"System State:"}),c.isSafe?o.jsxs("span",{className:"flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800",children:[o.jsx(bi,{className:"w-4 h-4"}),o.jsx("span",{children:"SAFE STATE ✓"})]}):o.jsxs("span",{className:"flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800",children:[o.jsx(xv,{className:"w-4 h-4"}),o.jsx("span",{children:"UNSAFE STATE (Deadlock Possible) ✕"})]})]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("button",{onClick:h,className:"px-3 py-1.5 text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 rounded-lg border border-rose-200 dark:border-rose-900",children:"Test Unsafe State"}),o.jsxs("button",{onClick:p,className:"flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200",children:[o.jsx(Qi,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Reset Matrices"})]})]})]}),c.isSafe&&o.jsxs("div",{className:"p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",children:[o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300",children:"Verified Safe Execution Sequence"}),o.jsx("div",{className:"flex items-center space-x-2 mt-2",children:c.safeSequence.map((m,g)=>o.jsxs(Hl.Fragment,{children:[o.jsx("span",{className:"px-3 py-1 rounded-lg font-mono font-bold text-sm bg-emerald-500 text-white shadow-xs",children:m}),g<c.safeSequence.length-1&&o.jsx(Bt,{className:"w-4 h-4 text-emerald-600 dark:text-emerald-400"})]},m))})]}),o.jsx("div",{className:"text-xs text-emerald-700 dark:text-emerald-300 font-medium",children:"All 5 processes can finish without deadlock."})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mb-2",children:"Allocation [A, B, C]"}),o.jsxs("table",{className:"w-full text-xs font-mono text-center",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"text-slate-400 border-b border-slate-200 dark:border-slate-800",children:[o.jsx("th",{className:"pb-1",children:"Proc"}),o.jsx("th",{children:"A"}),o.jsx("th",{children:"B"}),o.jsx("th",{children:"C"})]})}),o.jsx("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800/50",children:t.map((m,g)=>o.jsxs("tr",{className:"py-1",children:[o.jsx("td",{className:"font-bold text-srm-blue dark:text-blue-400",children:Bo[g]}),o.jsx("td",{children:m[0]}),o.jsx("td",{children:m[1]}),o.jsx("td",{children:m[2]})]},g))})]})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mb-2",children:"Max Demand [A, B, C]"}),o.jsxs("table",{className:"w-full text-xs font-mono text-center",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"text-slate-400 border-b border-slate-200 dark:border-slate-800",children:[o.jsx("th",{className:"pb-1",children:"Proc"}),o.jsx("th",{children:"A"}),o.jsx("th",{children:"B"}),o.jsx("th",{children:"C"})]})}),o.jsx("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800/50",children:n.map((m,g)=>o.jsxs("tr",{children:[o.jsx("td",{className:"font-bold text-srm-blue dark:text-blue-400",children:Bo[g]}),o.jsx("td",{children:m[0]}),o.jsx("td",{children:m[1]}),o.jsx("td",{children:m[2]})]},g))})]})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-4 border border-blue-200 dark:border-blue-900/60 bg-blue-50/20 dark:bg-blue-950/10 shadow-xs",children:[o.jsx("h4",{className:"text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2",children:"Need = Max - Alloc"}),o.jsxs("table",{className:"w-full text-xs font-mono text-center",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"text-slate-400 border-b border-slate-200 dark:border-slate-800",children:[o.jsx("th",{className:"pb-1",children:"Proc"}),o.jsx("th",{children:"A"}),o.jsx("th",{children:"B"}),o.jsx("th",{children:"C"})]})}),o.jsx("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800/50",children:c.needMatrix.map((m,g)=>o.jsxs("tr",{children:[o.jsx("td",{className:"font-bold text-srm-blue dark:text-blue-400",children:Bo[g]}),o.jsx("td",{className:"font-semibold text-slate-800 dark:text-slate-200",children:m[0]}),o.jsx("td",{className:"font-semibold text-slate-800 dark:text-slate-200",children:m[1]}),o.jsx("td",{className:"font-semibold text-slate-800 dark:text-slate-200",children:m[2]})]},g))})]})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mb-2",children:"Available Vector"}),o.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center font-mono my-3",children:[o.jsxs("div",{className:"p-2 rounded-xl bg-slate-100 dark:bg-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Res A"}),o.jsx("div",{className:"text-lg font-bold text-srm-blue dark:text-blue-400",children:r[0]})]}),o.jsxs("div",{className:"p-2 rounded-xl bg-slate-100 dark:bg-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Res B"}),o.jsx("div",{className:"text-lg font-bold text-emerald-500",children:r[1]})]}),o.jsxs("div",{className:"p-2 rounded-xl bg-slate-100 dark:bg-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Res C"}),o.jsx("div",{className:"text-lg font-bold text-amber-500",children:r[2]})]})]})]}),o.jsx("div",{className:"text-[11px] text-slate-400 italic",children:"Work vector updates as processes release resources upon completion."})]})]}),u&&o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-500",children:["Safety Verification Step ",a+1," of ",d]}),o.jsxs("div",{className:"flex items-center space-x-1",children:[o.jsx("button",{onClick:()=>l(m=>Math.max(0,m-1)),disabled:a===0,className:"px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800 disabled:opacity-40",children:"Previous"}),o.jsx("button",{onClick:()=>l(m=>Math.min(d-1,m+1)),disabled:a>=d-1,className:"px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800 disabled:opacity-40",children:"Next"})]})]}),o.jsx("div",{className:"p-3 bg-slate-50 dark:bg-slate-950 rounded-xl font-mono text-xs text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800",children:u.explanation})]})]})};function H2(t,e,n){const i=t.map(u=>({...u,allocatedProcess:null,allocatedSize:0,internalFrag:0})),r=[],s=[];let a=0,l=0,c=0;for(const u of e){let p=-1;if(n==="First Fit"){for(let h=0;h<i.length;h++)if(!i[h].allocatedProcess&&i[h].size>=u.size){p=h;break}}else if(n==="Best Fit"){let h=1/0;for(let m=0;m<i.length;m++)if(!i[m].allocatedProcess&&i[m].size>=u.size){const g=i[m].size-u.size;g<h&&(h=g,p=m)}}else if(n==="Worst Fit"){let h=-1;for(let m=0;m<i.length;m++)if(!i[m].allocatedProcess&&i[m].size>=u.size){const g=i[m].size-u.size;g>h&&(h=g,p=m)}}else if(n==="Next Fit"){const h=i.length;for(let m=0;m<h;m++){const g=(c+m)%h;if(!i[g].allocatedProcess&&i[g].size>=u.size){p=g,c=(g+1)%h;break}}}if(p!==-1){const h=i[p],m=h.size-u.size;h.allocatedProcess=u.id,h.allocatedSize=u.size,h.internalFrag=m,l+=m,a++,s.push({action:"ALLOCATED",process:u.id,blockId:h.id,explanation:`${n} allocated ${u.id} (${u.size} KB) into ${h.id} (${h.size} KB). Internal Fragmentation = ${m} KB.`})}else r.push(u),s.push({action:"FAILED",process:u.id,blockId:null,explanation:`Could not allocate ${u.id} (${u.size} KB). No free partition large enough.`})}const d=i.filter(u=>!u.allocatedProcess).reduce((u,p)=>u+p.size,0);return{blocks:i,unallocatedProcesses:r,totalInternalFrag:l,totalExternalFrag:d,allocatedCount:a,steps:s}}const V2=[{id:"Block 0",size:100},{id:"Block 1",size:500},{id:"Block 2",size:200},{id:"Block 3",size:300},{id:"Block 4",size:600}],G2=[{id:"P1",size:212},{id:"P2",size:417},{id:"P3",size:112},{id:"P4",size:426}],W2=()=>{const[t,e]=ae.useState("First Fit"),[n,i]=ae.useState(V2),[r,s]=ae.useState(G2),a=ae.useMemo(()=>H2(n,r,t),[n,r,t]),l=()=>{const c=[{id:"P1",size:Math.floor(Math.random()*300)+80},{id:"P2",size:Math.floor(Math.random()*400)+100},{id:"P3",size:Math.floor(Math.random()*200)+50},{id:"P4",size:Math.floor(Math.random()*500)+150}];s(c)};return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mr-1",children:"Fit Strategy:"}),["First Fit","Best Fit","Worst Fit","Next Fit"].map(c=>o.jsx("button",{onClick:()=>e(c),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${t===c?"bg-srm-blue text-white shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"}`,children:c},c))]}),o.jsxs("button",{onClick:l,className:"flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200",children:[o.jsx(rc,{className:"w-3.5 h-3.5 text-amber-500"}),o.jsx("span",{children:"Randomize Sizes"})]})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsx("div",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:"Incoming Processes to Allocate"}),o.jsx("div",{className:"flex flex-wrap gap-3",children:r.map(c=>{const d=a.blocks.some(u=>u.allocatedProcess===c.id);return o.jsxs("div",{className:`flex items-center space-x-2 px-3 py-2 rounded-xl border font-mono text-xs ${d?"border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300":"border-rose-300 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300"}`,children:[d?o.jsx(sf,{className:"w-3.5 h-3.5"}):o.jsx(lc,{className:"w-3.5 h-3.5"}),o.jsx("span",{className:"font-bold",children:c.id}),o.jsxs("span",{children:["(",c.size," KB)"]})]},c.id)})})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center space-x-1.5",children:[o.jsx(Dl,{className:"w-4 h-4 text-srm-blue"}),o.jsx("span",{children:"Physical Memory Partitions Map"})]}),o.jsx("div",{className:"space-y-3",children:a.blocks.map(c=>{const d=c.allocatedProcess!==null,u=d?(c.allocatedSize||0)/c.size*100:0,p=d?(c.internalFrag||0)/c.size*100:0;return o.jsxs("div",{className:"p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs font-mono mb-2",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"font-bold text-slate-800 dark:text-slate-200",children:c.id}),o.jsxs("span",{className:"text-slate-400",children:["Total: ",c.size," KB"]})]}),d?o.jsxs("span",{className:"text-emerald-600 dark:text-emerald-400 font-bold",children:["Allocated to ",c.allocatedProcess," (",c.allocatedSize," KB) • Frag: ",c.internalFrag," KB"]}):o.jsx("span",{className:"text-slate-400 italic",children:"FREE HOLE"})]}),o.jsx("div",{className:"w-full h-7 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden flex font-mono text-[10px] font-bold",children:d&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{width:`${u}%`},className:"bg-srm-blue text-white flex items-center justify-center transition-all",title:`Process Data: ${c.allocatedSize} KB`,children:[c.allocatedProcess," (",c.allocatedSize," KB)"]}),o.jsx("div",{style:{width:`${p}%`},className:"bg-amber-400/80 dark:bg-amber-600 text-slate-900 flex items-center justify-center pattern-stripes",title:`Internal Fragmentation: ${c.internalFrag} KB`,children:c.internalFrag&&c.internalFrag>20?`${c.internalFrag} KB Frag`:""})]})})]},c.id)})})]}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[o.jsx(qt,{label:"Allocated Processes",value:`${a.allocatedCount} / ${r.length}`,variant:"emerald",hint:"Satisfied requests"}),o.jsx(qt,{label:"Total Internal Frag",value:a.totalInternalFrag,unit:"KB",variant:"amber",hint:"Wasted space within partitions"}),o.jsx(qt,{label:"Total External Frag",value:a.totalExternalFrag,unit:"KB",variant:"purple",hint:"Unallocated free space"}),o.jsx(qt,{label:"Unallocated Count",value:a.unallocatedProcesses.length,variant:"rose",hint:"Processes waiting for holes"})]})]})};function ll(t,e,n,i="UP",r=199){const s=[e],a=[];let l=0;const c=[...t];if(n==="FCFS")for(const d of c)s.push(d);else if(n==="SSTF"){let d=e;const u=[...c];for(;u.length>0;){u.sort((h,m)=>Math.abs(h-d)-Math.abs(m-d));const p=u.shift();s.push(p),d=p}}else if(n==="SCAN"){const d=c.filter(p=>p<e).sort((p,h)=>p-h),u=c.filter(p=>p>=e).sort((p,h)=>p-h);i==="UP"?(s.push(...u),d.length>0&&(s.push(r),s.push(...d.reverse()))):(s.push(...d.reverse()),u.length>0&&(s.push(0),s.push(...u)))}else if(n==="C-SCAN"){const d=c.filter(p=>p<e).sort((p,h)=>p-h),u=c.filter(p=>p>=e).sort((p,h)=>p-h);i==="UP"?(s.push(...u),s.push(r),s.push(0),s.push(...d)):(s.push(...d.reverse()),s.push(0),s.push(r),s.push(...u.reverse()))}else if(n==="LOOK"){const d=c.filter(p=>p<e).sort((p,h)=>p-h),u=c.filter(p=>p>=e).sort((p,h)=>p-h);i==="UP"?(s.push(...u),s.push(...d.reverse())):(s.push(...d.reverse()),s.push(...u))}else if(n==="C-LOOK"){const d=c.filter(p=>p<e).sort((p,h)=>p-h),u=c.filter(p=>p>=e).sort((p,h)=>p-h);i==="UP"?(s.push(...u),s.push(...d)):(s.push(...d.reverse()),s.push(...u.reverse()))}for(let d=0;d<s.length-1;d++){const u=s[d],p=s[d+1],h=Math.abs(p-u);l+=h,a.push({stepIndex:d+1,fromTrack:u,toTrack:p,distance:h,explanation:`Head moved from cylinder ${u} to ${p} (Seek distance: ${h} cylinders).`})}return{sequence:s,steps:a,totalHeadMovement:l,initialHead:e,tracks:t}}const q2=[98,183,37,122,14,124,65,67],X2=53,$2=()=>{const[t,e]=ae.useState(q2),[n,i]=ae.useState(X2),[r,s]=ae.useState("FCFS"),[a,l]=ae.useState("UP"),c=ae.useMemo(()=>ll(t,n,r,a),[t,n,r,a]),d=()=>{const p=Array.from({length:8},()=>Math.floor(Math.random()*190)+5);e(p),i(Math.floor(Math.random()*150)+20)};return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mr-1",children:"Algorithm:"}),["FCFS","SSTF","SCAN","C-SCAN","LOOK","C-LOOK"].map(u=>o.jsx("button",{onClick:()=>s(u),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${r===u?"bg-srm-blue text-white shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"}`,children:u},u))]}),o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsxs("div",{className:"flex items-center space-x-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300",children:[o.jsx("span",{children:"Initial Head:"}),o.jsx("input",{type:"number",min:"0",max:"199",value:n,onChange:u=>i(Math.min(199,Math.max(0,Number(u.target.value)||0))),className:"w-14 px-2 py-1 font-mono font-bold text-center bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg"})]}),(r==="SCAN"||r==="C-SCAN"||r==="LOOK"||r==="C-LOOK")&&o.jsxs("div",{className:"flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg text-xs",children:[o.jsxs("button",{onClick:()=>l("UP"),className:`px-2 py-1 rounded flex items-center space-x-1 font-semibold ${a==="UP"?"bg-srm-blue text-white":"text-slate-500"}`,children:[o.jsx(Bt,{className:"w-3 h-3"}),o.jsx("span",{children:"Up (199)"})]}),o.jsxs("button",{onClick:()=>l("DOWN"),className:`px-2 py-1 rounded flex items-center space-x-1 font-semibold ${a==="DOWN"?"bg-srm-blue text-white":"text-slate-500"}`,children:[o.jsx(xg,{className:"w-3 h-3"}),o.jsx("span",{children:"Down (0)"})]})]}),o.jsxs("button",{onClick:d,className:"flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200",children:[o.jsx(rc,{className:"w-3.5 h-3.5 text-amber-500"}),o.jsx("span",{children:"Random Tracks"})]})]})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsxs("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5",children:[o.jsx(jg,{className:"w-4 h-4 text-srm-blue"}),o.jsx("span",{children:"Disk Platter Track Coordinates (Cylinders 0 to 199)"})]}),o.jsxs("span",{className:"text-xs font-mono text-srm-blue dark:text-blue-400 font-bold",children:["Total Head Movement: ",c.totalHeadMovement," Cylinders"]})]}),o.jsxs("div",{className:"relative w-full h-14 bg-slate-100 dark:bg-slate-950 rounded-2xl border border-slate-300 dark:border-slate-800 p-2 flex items-center shadow-inner my-4",children:[o.jsx("div",{className:"absolute left-2 text-[10px] font-mono text-slate-400",children:"0"}),o.jsx("div",{className:"absolute right-2 text-[10px] font-mono text-slate-400",children:"199"}),o.jsx("div",{style:{left:`${n/199*94+3}%`},className:"absolute top-0 bottom-0 w-1 bg-amber-500 z-10 flex flex-col items-center",title:`Initial Head Position: ${n}`,children:o.jsxs("span",{className:"text-[9px] font-bold font-mono px-1 py-0.2 rounded bg-amber-500 text-white -mt-4",children:["Head ",n]})}),t.map((u,p)=>o.jsx("div",{style:{left:`${u/199*94+3}%`},className:"absolute w-3 h-3 rounded-full bg-srm-blue dark:bg-blue-400 -translate-x-1/2 cursor-pointer transition-transform hover:scale-125",title:`Track ${u}`},p))]}),o.jsxs("div",{className:"mt-6",children:[o.jsx("div",{className:"text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2",children:"Service Sequence Trajectory:"}),o.jsx("div",{className:"flex flex-wrap items-center gap-2 font-mono text-xs",children:c.sequence.map((u,p)=>o.jsxs(Hl.Fragment,{children:[o.jsx("span",{className:`px-2.5 py-1 rounded-lg font-bold ${p===0?"bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300":"bg-blue-50 text-blue-900 dark:bg-blue-950/60 dark:text-blue-200 border border-blue-200 dark:border-blue-900"}`,children:u}),p<c.sequence.length-1&&o.jsx(Bt,{className:"w-3.5 h-3.5 text-slate-400"})]},p))})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsx(qt,{label:"Total Head Movement",value:c.totalHeadMovement,unit:"cylinders",variant:"amber",hint:"Sum of physical arm seek travel"}),o.jsx(qt,{label:"Average Seek Distance",value:(c.totalHeadMovement/(c.sequence.length-1||1)).toFixed(1),unit:"cyl/seek",variant:"blue",hint:"Per-request arm movement"}),o.jsx(qt,{label:"Requests Serviced",value:t.length,unit:"requests",variant:"emerald",hint:"All pending I/O tracks handled"})]})]})};function Jm(t=5){return{buffer:Array(t).fill(null),bufferSize:t,producerState:"idle",consumerState:"idle",mutex:1,emptySlots:t,fullSlots:0,history:["Buffer initialized with capacity "+t]}}function Y2(t,e){if(t.emptySlots===0)return{...t,producerState:"blocked",history:[`Producer attempted to produce ${e}, but BUFFER IS FULL (Blocked)!`,...t.history.slice(0,8)]};const n=[...t.buffer],i=n.indexOf(null);return n[i]=e,{...t,buffer:n,emptySlots:t.emptySlots-1,fullSlots:t.fullSlots+1,producerState:"producing",mutex:1,history:[`Producer inserted item ${e} into slot ${i}.`,...t.history.slice(0,8)]}}function K2(t){if(t.fullSlots===0)return{nextState:{...t,consumerState:"blocked",history:["Consumer attempted to read, but BUFFER IS EMPTY (Blocked)!",...t.history.slice(0,8)]},consumedItem:null};const e=[...t.buffer];let n=-1;for(let r=0;r<e.length;r++)if(e[r]!==null){n=r;break}const i=e[n];return e[n]=null,{nextState:{...t,buffer:e,emptySlots:t.emptySlots+1,fullSlots:t.fullSlots-1,consumerState:"consuming",mutex:1,history:[`Consumer consumed item ${i} from slot ${n}.`,...t.history.slice(0,8)]},consumedItem:i}}function e0(){return{philosophers:["THINKING","THINKING","THINKING","THINKING","THINKING"],forks:[null,null,null,null,null],deadlockMode:!1,history:["5 philosophers seated around table. All forks on table."]}}function Sd(t,e,n){const i=[...t.philosophers],r=[...t.forks],s=e,a=(e+1)%5,l=[...t.history];return n==="HUNGRY"?(i[e]="HUNGRY",l.unshift(`Philosopher P${e} is hungry and wants forks ${s} and ${a}.`)):n==="EAT"?t.deadlockMode?(r[s]===null&&(r[s]=e,l.unshift(`[Deadlock Mode] P${e} acquired left Fork ${s} and is waiting for Fork ${a}.`)),r.every(d=>d!==null)&&l.unshift("⚠️ DEADLOCK DETECTED! Every philosopher holds 1 fork and waits circular indefinitely.")):r[s]===null&&r[a]===null?(r[s]=e,r[a]=e,i[e]="EATING",l.unshift(`Philosopher P${e} acquired Forks ${s} & ${a} and is EATING 🍝.`)):l.unshift(`P${e} cannot eat: Fork(s) currently held by neighbor.`):n==="THINK"&&(r[s]===e&&(r[s]=null),r[a]===e&&(r[a]=null),i[e]="THINKING",l.unshift(`Philosopher P${e} finished eating, released forks, and returned to THINKING 💭.`)),{...t,philosophers:i,forks:r,history:l.slice(0,8)}}const Z2=()=>{const[t,e]=ae.useState("producer-consumer"),[n,i]=ae.useState(Jm(5)),[r,s]=ae.useState(1),[a,l]=ae.useState(e0()),c=()=>{i(h=>Y2(h,r)),s(h=>h+1)},d=()=>{const{nextState:h}=K2(n);i(h)},u=()=>{i(Jm(5)),s(1)},p=()=>{l(e0())};return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex space-x-2 border-b border-slate-200 dark:border-slate-800 pb-2",children:[o.jsx("button",{onClick:()=>e("producer-consumer"),className:`px-4 py-2 text-xs font-bold rounded-xl transition-all ${t==="producer-consumer"?"bg-srm-blue text-white shadow-xs":"text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,children:"Producer-Consumer (Bounded Buffer)"}),o.jsx("button",{onClick:()=>e("dining"),className:`px-4 py-2 text-xs font-bold rounded-xl transition-all ${t==="dining"?"bg-srm-blue text-white shadow-xs":"text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,children:"Dining Philosophers (5 Forks)"})]}),t==="producer-consumer"?o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsxs("button",{onClick:c,className:"flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs",children:[o.jsx(sv,{className:"w-4 h-4"}),o.jsxs("span",{children:["Produce Item (",r,")"]})]}),o.jsxs("button",{onClick:d,className:"flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-xs",children:[o.jsx(oS,{className:"w-4 h-4"}),o.jsx("span",{children:"Consume Item"})]})]}),o.jsxs("button",{onClick:u,className:"flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200",children:[o.jsx(Qi,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Reset Buffer"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4",children:[o.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400",children:"Synchronization Semaphores"}),o.jsxs("div",{className:"space-y-2 font-mono text-xs",children:[o.jsxs("div",{className:"flex justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[o.jsx("span",{className:"text-slate-500 font-sans",children:"Mutex (Binary):"}),o.jsx("span",{className:"font-bold text-srm-blue dark:text-blue-400",children:n.mutex})]}),o.jsxs("div",{className:"flex justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[o.jsx("span",{className:"text-slate-500 font-sans",children:"Empty Slots:"}),o.jsx("span",{className:"font-bold text-emerald-500",children:n.emptySlots})]}),o.jsxs("div",{className:"flex justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[o.jsx("span",{className:"text-slate-500 font-sans",children:"Full Slots:"}),o.jsx("span",{className:"font-bold text-amber-500",children:n.fullSlots})]})]})]}),o.jsxs("div",{className:"md:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsxs("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-3",children:["Shared Bounded Buffer (Capacity: ",n.bufferSize,")"]}),o.jsx("div",{className:"grid grid-cols-5 gap-3 my-4",children:n.buffer.map((h,m)=>o.jsxs("div",{className:`h-20 rounded-xl border-2 flex flex-col items-center justify-center font-mono transition-all ${h!==null?"border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 shadow-sm":"border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-400"}`,children:[o.jsxs("span",{className:"text-[10px] text-slate-400",children:["Slot ",m]}),o.jsx("span",{className:"text-lg font-bold mt-1",children:h!==null?`Item ${h}`:"Empty"})]},m))})]}),o.jsxs("div",{className:"mt-2 text-xs font-mono text-slate-500 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 line-clamp-2",children:["Latest: ",n.history[0]]})]})]})]}):o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsx("div",{className:"flex items-center space-x-3",children:o.jsxs("label",{className:"flex items-center space-x-2 text-xs font-semibold text-rose-700 dark:text-rose-400 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:a.deadlockMode,onChange:h=>l({...a,deadlockMode:h.target.checked}),className:"rounded border-rose-300 text-rose-600 focus:ring-rose-500"}),o.jsx("span",{children:"Simulate Deadlock Condition (Pick left fork first)"})]})}),o.jsxs("button",{onClick:p,className:"flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200",children:[o.jsx(Qi,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Reset Philosophers"})]})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsx("div",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-4",children:"5 Philosophers Seated with 5 Shared Forks"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-5 gap-4",children:a.philosophers.map((h,m)=>{const g=h==="EATING",b=h==="HUNGRY";return o.jsxs("div",{className:`p-4 rounded-2xl border text-center transition-all ${g?"border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 shadow-md scale-105":b?"border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300":"border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300"}`,children:[o.jsx("div",{className:"text-2xl mb-1",children:g?"🍝":b?"😋":"🤔"}),o.jsxs("div",{className:"font-bold text-sm",children:["Philosopher P",m]}),o.jsx("div",{className:"text-xs font-mono mt-1 font-semibold",children:h}),o.jsxs("div",{className:"mt-3 flex flex-col space-y-1",children:[h==="THINKING"&&o.jsx("button",{onClick:()=>l(x=>Sd(x,m,"HUNGRY")),className:"px-2 py-1 text-[11px] font-semibold rounded bg-amber-500 text-white",children:"Become Hungry"}),h==="HUNGRY"&&o.jsx("button",{onClick:()=>l(x=>Sd(x,m,"EAT")),className:"px-2 py-1 text-[11px] font-semibold rounded bg-emerald-600 text-white",children:"Pick Forks & Eat"}),h==="EATING"&&o.jsx("button",{onClick:()=>l(x=>Sd(x,m,"THINK")),className:"px-2 py-1 text-[11px] font-semibold rounded bg-blue-600 text-white",children:"Put Forks & Think"})]})]},m)})}),o.jsxs("div",{className:"mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800",children:[o.jsx("div",{className:"text-xs font-semibold text-slate-400 mb-2",children:"Forks on Table (0-4):"}),o.jsx("div",{className:"flex flex-wrap gap-3 font-mono text-xs",children:a.forks.map((h,m)=>o.jsxs("div",{className:`px-3 py-1.5 rounded-lg border ${h!==null?"border-amber-400 bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300":"border-slate-300 dark:border-slate-700 text-slate-500"}`,children:["Fork ",m,": ",h!==null?`Held by P${h}`:"On Table"]},m))})]})]})]})]})};function Q2(t,e=32,n){const i=Array.from({length:e},(l,c)=>({id:c,file:null,nextBlock:null,isIndexBlock:!1})),r=[],s=[];let a=0;for(const l of n)if(t==="Contiguous"){let c=-1;for(let d=0;d<=e-l.size;d++){let u=!0;for(let p=0;p<l.size;p++)if(i[d+p].file!==null){u=!1;break}if(u){c=d;break}}if(c!==-1){const d=[];for(let u=0;u<l.size;u++)i[c+u].file=l.name,i[c+u].color=l.color,d.push(c+u);r.push({...l,startBlock:c,blocks:d}),a++}else s.push(`Contiguous allocation failed for ${l.name} (Need ${l.size} contiguous blocks). Disk fragmented.`)}else if(t==="Linked"){const c=i.map((d,u)=>d.file===null?u:-1).filter(d=>d!==-1);if(c.length>=l.size){const d=c.slice(0,l.size);for(let u=0;u<d.length;u++){const p=d[u];i[p].file=l.name,i[p].color=l.color,i[p].nextBlock=u<d.length-1?d[u+1]:null}r.push({...l,startBlock:d[0],blocks:d}),a++}else s.push(`Linked allocation failed for ${l.name}. Insufficient free blocks.`)}else if(t==="Indexed"){const c=i.map((d,u)=>d.file===null?u:-1).filter(d=>d!==-1);if(c.length>=l.size+1){const d=c[0],u=c.slice(1,l.size+1);i[d].file=l.name,i[d].color=l.color,i[d].isIndexBlock=!0;for(const p of u)i[p].file=l.name,i[p].color=l.color;r.push({...l,indexBlock:d,blocks:u}),a++}else s.push(`Indexed allocation failed for ${l.name}. Need ${l.size+1} blocks (1 index + ${l.size} data).`)}return{disk:i,files:r,allocatedCount:a,errorLog:s}}const t0=[{name:"fileA.txt",size:4,color:"#3b82f6"},{name:"fileB.dat",size:6,color:"#10b981"},{name:"fileC.bin",size:5,color:"#f59e0b"},{name:"fileD.log",size:3,color:"#ec4899"}],J2=()=>{const[t,e]=ae.useState("Contiguous"),{disk:n,files:i,allocatedCount:r,errorLog:s}=ae.useMemo(()=>Q2(t,32,t0),[t]);return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mr-1",children:"Strategy:"}),["Contiguous","Linked","Indexed"].map(a=>o.jsx("button",{onClick:()=>e(a),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${t===a?"bg-srm-blue text-white shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"}`,children:a},a))]}),o.jsxs("div",{className:"text-xs font-mono text-slate-500",children:["Allocated: ",o.jsx("strong",{className:"text-srm-blue dark:text-blue-400",children:r})," / ",t0.length," files"]})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center space-x-1.5",children:[o.jsx(iS,{className:"w-4 h-4 text-srm-blue"}),o.jsx("span",{children:"Secondary Storage Disk Blocks (32 Blocks)"})]}),o.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-8 gap-2",children:n.map(a=>o.jsxs("div",{style:{backgroundColor:a.color?`${a.color}20`:void 0,borderColor:a.color||void 0},className:`h-16 rounded-xl border p-1.5 flex flex-col justify-between font-mono text-[10px] transition-all ${a.file?"border-2 shadow-xs":"border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-400"}`,children:[o.jsxs("div",{className:"flex justify-between items-center text-slate-400",children:[o.jsxs("span",{children:["#",a.id]}),a.isIndexBlock&&o.jsx("span",{className:"px-1 py-0.2 rounded bg-purple-600 text-white text-[8px] font-bold",children:"INDEX"})]}),o.jsx("div",{className:"font-bold text-center truncate text-slate-800 dark:text-slate-200",children:a.file?a.file.split(".")[0]:"FREE"}),o.jsx("div",{className:"text-[9px] text-right opacity-70",children:a.nextBlock!==null&&a.nextBlock!==void 0?`→ #${a.nextBlock}`:""})]},a.id))})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-3",children:"File System Directory Table"}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-xs font-mono text-left",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"border-b border-slate-200 dark:border-slate-800 text-slate-400",children:[o.jsx("th",{className:"pb-2",children:"File Name"}),o.jsx("th",{className:"pb-2",children:"Size (Blocks)"}),t==="Contiguous"&&o.jsx("th",{className:"pb-2",children:"Start Block"}),t==="Linked"&&o.jsx("th",{className:"pb-2",children:"Start Block"}),t==="Indexed"&&o.jsx("th",{className:"pb-2",children:"Index Block"}),o.jsx("th",{className:"pb-2",children:"Allocated Blocks"})]})}),o.jsx("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800/60",children:i.map(a=>{var l;return o.jsxs("tr",{children:[o.jsxs("td",{className:"py-2.5 font-bold flex items-center space-x-1.5",style:{color:a.color},children:[o.jsx(tS,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:a.name})]}),o.jsx("td",{className:"py-2.5",children:a.size}),t==="Contiguous"&&o.jsxs("td",{className:"py-2.5",children:["#",a.startBlock]}),t==="Linked"&&o.jsxs("td",{className:"py-2.5",children:["#",a.startBlock]}),t==="Indexed"&&o.jsxs("td",{className:"py-2.5 font-bold text-purple-500",children:["#",a.indexBlock]}),o.jsx("td",{className:"py-2.5 text-slate-600 dark:text-slate-400",children:(l=a.blocks)==null?void 0:l.map(c=>`#${c}`).join(", ")})]},a.name)})})]})})]})]})},iy=()=>{const[t,e]=ae.useState([{type:"system",text:"SRMIST Virtual UNIX Subsystem [Version 2.4.0-srmist-cse]"},{type:"system",text:`Type "help" to view supported lab commands or "demo" for process simulation.
`}]),[n,i]=ae.useState(""),r=ae.useRef(null),s=ae.useRef(null);ae.useEffect(()=>{var c;(c=r.current)==null||c.scrollIntoView({behavior:"smooth"})},[t]);const a=c=>{const d=c.trim();if(!d)return;const u=d.split(" "),p=u[0].toLowerCase(),h=u.slice(1),m=[...t,{type:"input",text:d}];switch(p){case"help":m.push({type:"output",text:`Supported SRMIST Lab Commands:
  ls          List files and directories in current workspace
  cat <file>  Display file contents
  ps          Show active virtual processes
  top         Display real-time CPU & memory utilization
  fork        Simulate UNIX fork() system call creating child process
  chmod <opt> Change file permissions
  uname -a    Print system and kernel release information
  clear       Clear terminal screen
  help        Show this help message`});break;case"clear":e([]),i("");return;case"ls":m.push({type:"output",text:`fcfs_scheduler.c   round_robin.c   bankers_algorithm.c
notes.txt          process_table.csv`});break;case"cat":h.length===0?m.push({type:"output",text:"Usage: cat <filename>"}):h[0]==="notes.txt"?m.push({type:"output",text:`SRMIST OS Lab Notes:
- FCFS suffers from Convoy effect.
- SJF is optimal for average waiting time.
- LRU does not suffer from Belady anomaly.`}):h[0]==="fcfs_scheduler.c"?m.push({type:"output",text:`#include <stdio.h>
int main() {
    printf("SRMIST FCFS Initialized\\n");
    return 0;
}`}):m.push({type:"output",text:`cat: ${h[0]}: No such file or directory`});break;case"ps":m.push({type:"output",text:`  PID TTY          TIME CMD
 1001 pts/0    00:00:01 bash
 1042 pts/0    00:00:03 cpu_scheduler
 1089 pts/0    00:00:00 ps`});break;case"top":m.push({type:"output",text:`Tasks: 3 total, 1 running, 2 sleeping, 0 stopped, 0 zombie
%Cpu(s):  4.2 us,  1.8 sy,  0.0 ni, 94.0 id,  0.0 wa,  0.0 hi,  0.0 si
MiB Mem :   8192.0 total,   4120.4 free,   2480.2 used,   1591.4 buff/cache`});break;case"fork":m.push({type:"output",text:`[Parent PID 1042]: calling fork()...
[Child  PID 1043]: spawned successfully with PPID 1042.
[Parent PID 1042]: wait(&status) returned child exit code 0.`});break;case"chmod":h.length<2?m.push({type:"output",text:"Usage: chmod <mode> <file>"}):m.push({type:"output",text:`Permissions of "${h[1]}" changed to ${h[0]} (-rwxr-xr-x).`});break;case"uname":m.push({type:"output",text:"Linux srmist-os-lab 6.5.0-virtual #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux"});break;default:m.push({type:"output",text:`bash: ${p}: command not found. Type "help" for available commands.`})}e(m),i("")},l=c=>{c.key==="Enter"&&a(n)};return o.jsxs("div",{className:"bg-[#0c1017] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs",children:[o.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-[#161c28] border-b border-slate-800 text-slate-400",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsxs("div",{className:"flex space-x-1.5",children:[o.jsx("div",{className:"w-3 h-3 rounded-full bg-rose-500/80"}),o.jsx("div",{className:"w-3 h-3 rounded-full bg-amber-500/80"}),o.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500/80"})]}),o.jsxs("span",{className:"text-xs font-semibold text-slate-300 ml-2 flex items-center",children:[o.jsx(ac,{className:"w-3.5 h-3.5 mr-1.5 text-srm-accent"}),"student@srmist-os: ~ (bash)"]})]}),o.jsx("button",{onClick:()=>e([]),title:"Clear screen",className:"p-1 hover:text-white transition-colors",children:o.jsx(Qi,{className:"w-3.5 h-3.5"})})]}),o.jsxs("div",{className:"p-4 h-80 sm:h-96 overflow-y-auto space-y-2 text-slate-200 cursor-text",onClick:()=>{var c;return(c=s.current)==null?void 0:c.focus()},children:[t.map((c,d)=>o.jsxs("div",{className:"leading-relaxed whitespace-pre-wrap",children:[c.type==="input"&&o.jsxs("span",{className:"text-slate-400",children:[o.jsx("span",{className:"text-emerald-400 font-bold",children:"student@srmist-os"}),":",o.jsx("span",{className:"text-blue-400 font-bold",children:"~"}),"$ ",c.text]}),c.type==="output"&&o.jsx("span",{className:"text-slate-300",children:c.text}),c.type==="system"&&o.jsx("span",{className:"text-amber-400/90",children:c.text})]},d)),o.jsxs("div",{className:"flex items-center space-x-2 pt-1",children:[o.jsxs("span",{className:"text-slate-400 shrink-0",children:[o.jsx("span",{className:"text-emerald-400 font-bold",children:"student@srmist-os"}),":",o.jsx("span",{className:"text-blue-400 font-bold",children:"~"}),"$"]}),o.jsx("input",{ref:s,type:"text",value:n,onChange:c=>i(c.target.value),onKeyDown:l,className:"w-full bg-transparent text-white focus:outline-hidden caret-srm-accent",autoFocus:!0})]}),o.jsx("div",{ref:r})]})]})},n0={"exp-linux-commands":{id:"exp-linux-commands",title:"Basic Linux Shell Execution in C",language:"c",filename:"linux_shell_demo.c",code:`/* 
 * SRM Institute of Science and Technology
 * Department of Computer Science & Engineering
 * Experiment: Linux Shell Execution via C system()
 */
#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - LINUX SYSTEM() \\n");
    printf("========================================\\n\\n");

    printf("[1] Display Current Working Directory:\\n");
    system("pwd");

    printf("\\n[2] List Files in Current Directory:\\n");
    system("ls -l");

    printf("\\n[3] Kernel Information:\\n");
    system("uname -s -r");

    return 0;
}
`,defaultOutput:`========================================
 SRMIST VIRTUAL OS LAB - LINUX SYSTEM() 
========================================

[1] Display Current Working Directory:
/home/student/srmist_os_lab

[2] List Files in Current Directory:
total 16
-rw-r--r-- 1 student srmist 1024 Sep 20 10:00 notes.txt
-rwxr-xr-x 1 student srmist 8192 Sep 20 10:05 scheduler
-rw-r--r-- 1 student srmist 2048 Sep 20 10:10 main.c

[3] Kernel Information:
Linux 5.15.0-generic
`},"exp-process-lifecycle":{id:"exp-process-lifecycle",title:"Process Creation with fork() in C",language:"c",filename:"fork_process.c",code:`/* 
 * SRM Institute of Science and Technology
 * Experiment: Process Creation using fork() and getpid()
 */
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
    pid_t pid;

    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - FORK() DEMO    \\n");
    printf("========================================\\n\\n");

    printf("Parent Process before fork (PID: %d)\\n", getpid());

    pid = fork();

    if (pid < 0) {
        // Error occurred
        fprintf(stderr, "Fork failed!\\n");
        return 1;
    } else if (pid == 0) {
        // Child process
        printf("[CHILD]  Hello from Child!  PID: %d, Parent PID: %d\\n", getpid(), getppid());
    } else {
        // Parent process
        wait(NULL); // Wait for child to complete
        printf("[PARENT] Child with PID %d has finished execution.\\n", pid);
    }

    return 0;
}
`,defaultOutput:`========================================
 SRMIST VIRTUAL OS LAB - FORK() DEMO    
========================================

Parent Process before fork (PID: 12050)
[CHILD]  Hello from Child!  PID: 12051, Parent PID: 12050
[PARENT] Child with PID 12051 has finished execution.
`},"exp-fcfs":{id:"exp-fcfs",title:"FCFS CPU Scheduling in C",language:"c",filename:"fcfs_scheduler.c",code:`/* 
 * SRM Institute of Science and Technology
 * Department of Computer Science & Engineering
 * Experiment: First-Come, First-Served (FCFS) CPU Scheduling
 */
#include <stdio.h>

struct Process {
    int pid;
    int bt;  // Burst Time
    int at;  // Arrival Time
    int wt;  // Waiting Time
    int tat; // Turnaround Time
    int ct;  // Completion Time
};

int main() {
    int n = 4;
    struct Process p[] = {
        {1, 5, 0, 0, 0, 0},
        {2, 3, 1, 0, 0, 0},
        {3, 8, 2, 0, 0, 0},
        {4, 6, 3, 0, 0, 0}
    };

    int currentTime = 0;
    float total_wt = 0, total_tat = 0;

    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - FCFS SCHEDULER \\n");
    printf("========================================\\n\\n");

    for (int i = 0; i < n; i++) {
        if (currentTime < p[i].at) {
            currentTime = p[i].at;
        }
        p[i].ct = currentTime + p[i].bt;
        p[i].tat = p[i].ct - p[i].at;
        p[i].wt = p[i].tat - p[i].bt;
        currentTime = p[i].ct;

        total_wt += p[i].wt;
        total_tat += p[i].tat;
    }

    printf("PID\\tArrival\\tBurst\\tComplete\\tWait\\tTAT\\n");
    printf("-----------------------------------------------------\\n");
    for (int i = 0; i < n; i++) {
        printf("P%d\\t%d\\t%d\\t%d\\t\\t%d\\t%d\\n",
               p[i].pid, p[i].at, p[i].bt, p[i].ct, p[i].wt, p[i].tat);
    }

    printf("\\nAverage Waiting Time    : %.2f ms\\n", total_wt / n);
    printf("Average Turnaround Time : %.2f ms\\n", total_tat / n);

    return 0;
}
`,defaultOutput:`========================================
 SRMIST VIRTUAL OS LAB - FCFS SCHEDULER 
========================================

PID	Arrival	Burst	Complete	Wait	TAT
-----------------------------------------------------
P1	0	5	5		0	5
P2	1	3	8		4	7
P3	2	8	16		6	14
P4	3	6	22		13	19

Average Waiting Time    : 5.75 ms
Average Turnaround Time : 11.25 ms
`},"exp-rr":{id:"exp-rr",title:"Round Robin CPU Scheduling in C",language:"c",filename:"round_robin.c",code:`/* 
 * SRM Institute of Science and Technology
 * Experiment: Round Robin Scheduling with Time Quantum
 */
#include <stdio.h>

int main() {
    int n = 3, quantum = 2;
    int bt[] = {5, 3, 8};
    int rem_bt[] = {5, 3, 8};
    int wt[3] = {0}, tat[3] = {0};
    int t = 0;

    printf("SRMIST Virtual OS Lab - Round Robin (Quantum = %d)\\n\\n", quantum);

    while (1) {
        int done = 1;
        for (int i = 0; i < n; i++) {
            if (rem_bt[i] > 0) {
                done = 0;
                if (rem_bt[i] > quantum) {
                    t += quantum;
                    rem_bt[i] -= quantum;
                    printf("[t=%2d] Process P%d executed for %d ms (Remaining: %d)\\n", t, i + 1, quantum, rem_bt[i]);
                } else {
                    t += rem_bt[i];
                    wt[i] = t - bt[i];
                    printf("[t=%2d] Process P%d FINISHED execution\\n", t, i + 1);
                    rem_bt[i] = 0;
                }
            }
        }
        if (done == 1) break;
    }

    for (int i = 0; i < n; i++) tat[i] = bt[i] + wt[i];

    printf("\\nPID\\tBurst\\tWait\\tTAT\\n");
    for (int i = 0; i < n; i++) {
        printf("P%d\\t%d\\t%d\\t%d\\n", i + 1, bt[i], wt[i], tat[i]);
    }
    return 0;
}
`,defaultOutput:`SRMIST Virtual OS Lab - Round Robin (Quantum = 2)

[t= 2] Process P1 executed for 2 ms (Remaining: 3)
[t= 4] Process P2 executed for 2 ms (Remaining: 1)
[t= 6] Process P3 executed for 2 ms (Remaining: 6)
[t= 8] Process P1 executed for 2 ms (Remaining: 1)
[t= 9] Process P2 FINISHED execution
[t=11] Process P3 executed for 2 ms (Remaining: 4)
[t=12] Process P1 FINISHED execution
[t=14] Process P3 executed for 2 ms (Remaining: 2)
[t=16] Process P3 FINISHED execution

PID	Burst	Wait	TAT
P1	5	7	12
P2	3	6	9
P3	8	8	16
`},"exp-producer-consumer":{id:"exp-producer-consumer",title:"Producer-Consumer using Semaphores in C",language:"c",filename:"producer_consumer.c",code:`/* 
 * SRM Institute of Science and Technology
 * Experiment: Bounded Buffer Producer-Consumer Problem
 */
#include <stdio.h>

#define BUFFER_SIZE 5

int buffer[BUFFER_SIZE];
int in = 0, out = 0, count = 0;

void produce(int item) {
    if (count == BUFFER_SIZE) {
        printf("[PRODUCER] Buffer FULL! Cannot produce item %d\\n", item);
        return;
    }
    buffer[in] = item;
    in = (in + 1) % BUFFER_SIZE;
    count++;
    printf("[PRODUCER] Produced item %d (Buffer count: %d)\\n", item, count);
}

void consume() {
    if (count == 0) {
        printf("[CONSUMER] Buffer EMPTY! Cannot consume\\n");
        return;
    }
    int item = buffer[out];
    out = (out + 1) % BUFFER_SIZE;
    count--;
    printf("[CONSUMER] Consumed item %d (Buffer count: %d)\\n", item, count);
}

int main() {
    printf("SRMIST Virtual OS Lab - Bounded Buffer Producer-Consumer\\n\\n");
    produce(10);
    produce(20);
    produce(30);
    consume();
    produce(40);
    produce(50);
    produce(60);
    consume();
    consume();
    return 0;
}
`,defaultOutput:`SRMIST Virtual OS Lab - Bounded Buffer Producer-Consumer

[PRODUCER] Produced item 10 (Buffer count: 1)
[PRODUCER] Produced item 20 (Buffer count: 2)
[PRODUCER] Produced item 30 (Buffer count: 3)
[CONSUMER] Consumed item 10 (Buffer count: 2)
[PRODUCER] Produced item 40 (Buffer count: 3)
[PRODUCER] Produced item 50 (Buffer count: 4)
[PRODUCER] Produced item 60 (Buffer count: 5)
[CONSUMER] Consumed item 20 (Buffer count: 4)
[CONSUMER] Consumed item 30 (Buffer count: 3)
`},"exp-bankers":{id:"exp-bankers",title:"Banker's Algorithm in C",language:"c",filename:"bankers_algorithm.c",code:`/* 
 * SRM Institute of Science and Technology
 * Experiment: Banker's Deadlock Avoidance Algorithm
 */
#include <stdio.h>

int main() {
    int n = 5; // Processes
    int m = 3; // Resource types

    int alloc[5][3] = {
        {0, 1, 0},
        {2, 0, 0},
        {3, 0, 2},
        {2, 1, 1},
        {0, 0, 2}
    };

    int max[5][3] = {
        {7, 5, 3},
        {3, 2, 2},
        {9, 0, 2},
        {2, 2, 2},
        {4, 3, 3}
    };

    int avail[3] = {3, 3, 2};
    int f[5] = {0}, ans[5], ind = 0;
    int need[5][3];

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            need[i][j] = max[i][j] - alloc[i][j];
        }
    }

    for (int k = 0; k < 5; k++) {
        for (int i = 0; i < n; i++) {
            if (f[i] == 0) {
                int flag = 0;
                for (int j = 0; j < m; j++) {
                    if (need[i][j] > avail[j]) {
                        flag = 1;
                        break;
                    }
                }
                if (flag == 0) {
                    ans[ind++] = i;
                    for (int y = 0; y < m; y++) avail[y] += alloc[i][y];
                    f[i] = 1;
                }
            }
        }
    }

    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - BANKER'S SAFETY \\n");
    printf("========================================\\n\\n");

    printf("SAFE Sequence found: ");
    for (int i = 0; i < n - 1; i++) printf("P%d -> ", ans[i]);
    printf("P%d\\n", ans[n - 1]);

    return 0;
}
`,defaultOutput:`========================================
 SRMIST VIRTUAL OS LAB - BANKER'S SAFETY 
========================================

SAFE Sequence found: P1 -> P3 -> P4 -> P0 -> P2
`},"exp-first-fit":{id:"exp-first-fit",title:"First Fit Memory Allocation in C",language:"c",filename:"first_fit.c",code:`/* 
 * SRM Institute of Science and Technology
 * Experiment: Contiguous Memory Allocation (First Fit)
 */
#include <stdio.h>

int main() {
    int blockSize[] = {100, 500, 200, 300, 600};
    int processSize[] = {212, 417, 112, 426};
    int m = 5;
    int n = 4;
    int allocation[4];

    for (int i = 0; i < n; i++) allocation[i] = -1;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (blockSize[j] >= processSize[i]) {
                allocation[i] = j;
                blockSize[j] -= processSize[i];
                break;
            }
        }
    }

    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - FIRST FIT      \\n");
    printf("========================================\\n\\n");

    printf("Process No.\\tProcess Size\\tBlock No.\\n");
    for (int i = 0; i < n; i++) {
        printf("%d\\t\\t%d\\t\\t", i + 1, processSize[i]);
        if (allocation[i] != -1)
            printf("%d\\n", allocation[i] + 1);
        else
            printf("Not Allocated\\n");
    }
    return 0;
}
`,defaultOutput:`========================================
 SRMIST VIRTUAL OS LAB - FIRST FIT      
========================================

Process No.	Process Size	Block No.
1		212		2
2		417		5
3		112		2
4		426		Not Allocated
`},"exp-fifo-page":{id:"exp-fifo-page",title:"FIFO Page Replacement in C",language:"c",filename:"fifo_page_replacement.c",code:`/* 
 * SRM Institute of Science and Technology
 * Experiment: FIFO Page Replacement Algorithm
 */
#include <stdio.h>

int main() {
    int incomingStream[] = {7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2};
    int pageFaults = 0;
    int frames = 3;
    int m = sizeof(incomingStream) / sizeof(incomingStream[0]);
    int temp[3] = {-1, -1, -1};
    int ptr = 0;

    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - FIFO PAGING    \\n");
    printf("========================================\\n\\n");

    for (int i = 0; i < m; i++) {
        int s = 0;
        for (int j = 0; j < frames; j++) {
            if (incomingStream[i] == temp[j]) {
                s++;
                pageFaults--;
            }
        }
        pageFaults++;
        if ((pageFaults <= frames) && (s == 0)) {
            temp[i] = incomingStream[i];
        } else if (s == 0) {
            temp[ptr] = incomingStream[i];
            ptr = (ptr + 1) % frames;
        }

        printf("Page %2d: [ ", incomingStream[i]);
        for (int j = 0; j < frames; j++) {
            if (temp[j] != -1) printf("%d ", temp[j]);
            else printf("- ");
        }
        printf("] %s\\n", s == 0 ? "FAULT" : "HIT");
    }

    printf("\\nTotal Page Faults: %d\\n", pageFaults);
    return 0;
}
`,defaultOutput:`========================================
 SRMIST VIRTUAL OS LAB - FIFO PAGING    
========================================

Page  7: [ 7 - - ] FAULT
Page  0: [ 7 0 - ] FAULT
Page  1: [ 7 0 1 ] FAULT
Page  2: [ 2 0 1 ] FAULT
Page  0: [ 2 0 1 ] HIT
Page  3: [ 2 3 1 ] FAULT
Page  0: [ 2 3 0 ] FAULT
Page  4: [ 4 3 0 ] FAULT
Page  2: [ 4 2 0 ] FAULT
Page  3: [ 4 2 3 ] FAULT
Page  0: [ 0 2 3 ] FAULT
Page  3: [ 0 2 3 ] HIT
Page  2: [ 0 2 3 ] HIT

Total Page Faults: 10
`},"exp-disk-fcfs":{id:"exp-disk-fcfs",title:"FCFS Disk Scheduling in C",language:"c",filename:"disk_fcfs.c",code:`/* 
 * SRM Institute of Science and Technology
 * Experiment: FCFS Disk Arm Scheduling
 */
#include <stdio.h>
#include <stdlib.h>

int main() {
    int arr[] = {82, 170, 43, 140, 24, 16, 190};
    int head = 50;
    int size = sizeof(arr) / sizeof(arr[0]);
    int seek_count = 0;

    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - DISK FCFS      \\n");
    printf("========================================\\n\\n");

    printf("Initial Head Position: %d\\n", head);
    printf("Seek Trajectory: %d", head);

    for (int i = 0; i < size; i++) {
        seek_count += abs(arr[i] - head);
        head = arr[i];
        printf(" -> %d", head);
    }

    printf("\\n\\nTotal Number of Seek Operations = %d cylinders\\n", seek_count);
    return 0;
}
`,defaultOutput:`========================================
 SRMIST VIRTUAL OS LAB - DISK FCFS      
========================================

Initial Head Position: 50
Seek Trajectory: 50 -> 82 -> 170 -> 43 -> 140 -> 24 -> 16 -> 190

Total Number of Seek Operations = 642 cylinders
`}},eC=({experimentId:t="exp-fcfs"})=>{const e=n0[t]||n0["exp-fcfs"],[n,i]=ae.useState(e.code),[r,s]=ae.useState(e.defaultOutput),[a,l]=ae.useState(!1),[c,d]=ae.useState(!1),u=()=>{l(!0),s("Compiling and executing "+e.filename+` using GCC 13.2.0...

`),setTimeout(()=>{s(e.defaultOutput),l(!1)},450)},p=()=>{i(e.code),s(e.defaultOutput)},h=()=>{navigator.clipboard.writeText(n),d(!0),setTimeout(()=>d(!1),2e3)};return o.jsxs("div",{className:"bg-[#0e131f] rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-mono text-xs",children:[o.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-[#151c2d] border-b border-slate-800 text-slate-400",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-blue-500"}),o.jsx("span",{className:"font-semibold text-slate-200",children:e.filename}),o.jsx("span",{className:"text-[10px] text-slate-500 font-sans px-1.5 py-0.5 rounded bg-slate-800",children:"C (GCC)"})]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("button",{onClick:h,title:"Copy Code",className:"p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors",children:c?o.jsx(sf,{className:"w-4 h-4 text-emerald-400"}):o.jsx(Qb,{className:"w-4 h-4"})}),o.jsx("button",{onClick:p,title:"Reset to Starter Code",className:"p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors",children:o.jsx(Qi,{className:"w-4 h-4"})}),o.jsxs("button",{onClick:u,disabled:a,className:"flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-srm-blue hover:bg-blue-600 text-white font-semibold transition-colors shadow-xs",children:[o.jsx(iv,{className:"w-3.5 h-3.5 fill-white"}),o.jsx("span",{children:a?"Running...":"Run Code"})]})]})]}),o.jsx("div",{className:"p-4 bg-[#0e131f]",children:o.jsx("textarea",{value:n,onChange:m=>i(m.target.value),spellCheck:!1,rows:16,className:"w-full bg-transparent text-slate-200 font-mono text-xs leading-relaxed focus:outline-hidden resize-y"})}),o.jsxs("div",{className:"border-t border-slate-800 bg-[#090d15] p-4",children:[o.jsxs("div",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center space-x-1.5",children:[o.jsx(ac,{className:"w-3.5 h-3.5 text-srm-blue"}),o.jsx("span",{children:"Execution Output (stdout)"})]}),o.jsx("pre",{className:"text-slate-300 text-[11px] leading-relaxed whitespace-pre-wrap font-mono max-h-48 overflow-y-auto",children:r})]})]})};var _f={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=function(){if(!e.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),R=P.getContext("2d");R.fillRect(0,0,1,1);var ee=P.transferToImageBitmap();R.createPattern(ee,"no-repeat")}catch{return!1}return!0}();function c(){}function d(P){var R=n.exports.Promise,ee=R!==void 0?R:e.Promise;return typeof ee=="function"?new ee(P):(P(c,c),null)}var u=function(P,R){return{transform:function(ee){if(P)return ee;if(R.has(ee))return R.get(ee);var ue=new OffscreenCanvas(ee.width,ee.height),z=ue.getContext("2d");return z.drawImage(ee,0,0),R.set(ee,ue),ue},clear:function(){R.clear()}}}(l,new Map),p=function(){var P=Math.floor(16.666666666666668),R,ee,ue={},z=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(R=function(B){var Y=Math.random();return ue[Y]=requestAnimationFrame(function X(ce){z===ce||z+P-1<ce?(z=ce,delete ue[Y],B()):ue[Y]=requestAnimationFrame(X)}),Y},ee=function(B){ue[B]&&cancelAnimationFrame(ue[B])}):(R=function(B){return setTimeout(B,P)},ee=function(B){return clearTimeout(B)}),{frame:R,cancel:ee}}(),h=function(){var P,R,ee={};function ue(z){function B(Y,X){z.postMessage({options:Y||{},callback:X})}z.init=function(X){var ce=X.transferControlToOffscreen();z.postMessage({canvas:ce},[ce])},z.fire=function(X,ce,he){if(R)return B(X,null),R;var ye=Math.random().toString(36).slice(2);return R=d(function(Pe){function Me(Ue){Ue.data.callback===ye&&(delete ee[ye],z.removeEventListener("message",Me),R=null,u.clear(),he(),Pe())}z.addEventListener("message",Me),B(X,ye),ee[ye]=Me.bind(null,{data:{callback:ye}})}),R},z.reset=function(){z.postMessage({reset:!0});for(var X in ee)ee[X](),delete ee[X]}}return function(){if(P)return P;if(!i&&s){var z=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([z])))}catch(B){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",B),null}ue(P)}return P}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(P,R){return R?R(P):P}function b(P){return P!=null}function x(P,R,ee){return g(P&&b(P[R])?P[R]:m[R],ee)}function f(P){return P<0?0:Math.floor(P)}function _(P,R){return Math.floor(Math.random()*(R-P))+P}function y(P){return parseInt(P,16)}function v(P){return P.map(A)}function A(P){var R=String(P).replace(/[^0-9a-f]/gi,"");return R.length<6&&(R=R[0]+R[0]+R[1]+R[1]+R[2]+R[2]),{r:y(R.substring(0,2)),g:y(R.substring(2,4)),b:y(R.substring(4,6))}}function M(P){var R=x(P,"origin",Object);return R.x=x(R,"x",Number),R.y=x(R,"y",Number),R}function w(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function k(P){var R=P.getBoundingClientRect();P.width=R.width,P.height=R.height}function T(P){var R=document.createElement("canvas");return R.style.position="fixed",R.style.top="0px",R.style.left="0px",R.style.pointerEvents="none",R.style.zIndex=P,R}function S(P,R,ee,ue,z,B,Y,X,ce){P.save(),P.translate(R,ee),P.rotate(B),P.scale(ue,z),P.arc(0,0,1,Y,X,ce),P.restore()}function I(P){var R=P.angle*(Math.PI/180),ee=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-R+(.5*ee-Math.random()*ee),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function G(P,R){R.x+=Math.cos(R.angle2D)*R.velocity+R.drift,R.y+=Math.sin(R.angle2D)*R.velocity+R.gravity,R.velocity*=R.decay,R.flat?(R.wobble=0,R.wobbleX=R.x+10*R.scalar,R.wobbleY=R.y+10*R.scalar,R.tiltSin=0,R.tiltCos=0,R.random=1):(R.wobble+=R.wobbleSpeed,R.wobbleX=R.x+10*R.scalar*Math.cos(R.wobble),R.wobbleY=R.y+10*R.scalar*Math.sin(R.wobble),R.tiltAngle+=.1,R.tiltSin=Math.sin(R.tiltAngle),R.tiltCos=Math.cos(R.tiltAngle),R.random=Math.random()+2);var ee=R.tick++/R.totalTicks,ue=R.x+R.random*R.tiltCos,z=R.y+R.random*R.tiltSin,B=R.wobbleX+R.random*R.tiltCos,Y=R.wobbleY+R.random*R.tiltSin;if(P.fillStyle="rgba("+R.color.r+", "+R.color.g+", "+R.color.b+", "+(1-ee)+")",P.beginPath(),a&&R.shape.type==="path"&&typeof R.shape.path=="string"&&Array.isArray(R.shape.matrix))P.fill(ie(R.shape.path,R.shape.matrix,R.x,R.y,Math.abs(B-ue)*.1,Math.abs(Y-z)*.1,Math.PI/10*R.wobble));else if(R.shape.type==="bitmap"){var X=Math.PI/10*R.wobble,ce=Math.abs(B-ue)*.1,he=Math.abs(Y-z)*.1,ye=R.shape.bitmap.width*R.scalar,Pe=R.shape.bitmap.height*R.scalar,Me=new DOMMatrix([Math.cos(X)*ce,Math.sin(X)*ce,-Math.sin(X)*he,Math.cos(X)*he,R.x,R.y]);Me.multiplySelf(new DOMMatrix(R.shape.matrix));var Ue=P.createPattern(u.transform(R.shape.bitmap),"no-repeat");Ue.setTransform(Me),P.globalAlpha=1-ee,P.fillStyle=Ue,P.fillRect(R.x-ye/2,R.y-Pe/2,ye,Pe),P.globalAlpha=1}else if(R.shape==="circle")P.ellipse?P.ellipse(R.x,R.y,Math.abs(B-ue)*R.ovalScalar,Math.abs(Y-z)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI):S(P,R.x,R.y,Math.abs(B-ue)*R.ovalScalar,Math.abs(Y-z)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI);else if(R.shape==="star")for(var L=Math.PI/2*3,nt=4*R.scalar,De=8*R.scalar,Fe=R.x,Te=R.y,Ye=5,Ee=Math.PI/Ye;Ye--;)Fe=R.x+Math.cos(L)*De,Te=R.y+Math.sin(L)*De,P.lineTo(Fe,Te),L+=Ee,Fe=R.x+Math.cos(L)*nt,Te=R.y+Math.sin(L)*nt,P.lineTo(Fe,Te),L+=Ee;else P.moveTo(Math.floor(R.x),Math.floor(R.y)),P.lineTo(Math.floor(R.wobbleX),Math.floor(z)),P.lineTo(Math.floor(B),Math.floor(Y)),P.lineTo(Math.floor(ue),Math.floor(R.wobbleY));return P.closePath(),P.fill(),R.tick<R.totalTicks}function H(P,R,ee,ue,z){var B=R.slice(),Y=P.getContext("2d"),X,ce,he=d(function(ye){function Pe(){X=ce=null,Y.clearRect(0,0,ue.width,ue.height),u.clear(),z(),ye()}function Me(){i&&!(ue.width===r.width&&ue.height===r.height)&&(ue.width=P.width=r.width,ue.height=P.height=r.height),!ue.width&&!ue.height&&(ee(P),ue.width=P.width,ue.height=P.height),Y.clearRect(0,0,ue.width,ue.height),B=B.filter(function(Ue){return G(Y,Ue)}),B.length?X=p.frame(Me):Pe()}X=p.frame(Me),ce=Pe});return{addFettis:function(ye){return B=B.concat(ye),he},canvas:P,promise:he,reset:function(){X&&p.cancel(X),ce&&ce()}}}function J(P,R){var ee=!P,ue=!!x(R||{},"resize"),z=!1,B=x(R,"disableForReducedMotion",Boolean),Y=s&&!!x(R||{},"useWorker"),X=Y?h():null,ce=ee?w:k,he=P&&X?!!P.__confetti_initialized:!1,ye=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Pe;function Me(L,nt,De){for(var Fe=x(L,"particleCount",f),Te=x(L,"angle",Number),Ye=x(L,"spread",Number),Ee=x(L,"startVelocity",Number),N=x(L,"decay",Number),E=x(L,"gravity",Number),V=x(L,"drift",Number),te=x(L,"colors",v),se=x(L,"ticks",Number),Q=x(L,"shapes"),Ce=x(L,"scalar"),pe=!!x(L,"flat"),_e=M(L),qe=Fe,le=[],Se=P.width*_e.x,Le=P.height*_e.y;qe--;)le.push(I({x:Se,y:Le,angle:Te,spread:Ye,startVelocity:Ee,color:te[qe%te.length],shape:Q[_(0,Q.length)],ticks:se,decay:N,gravity:E,drift:V,scalar:Ce,flat:pe}));return Pe?Pe.addFettis(le):(Pe=H(P,le,ce,nt,De),Pe.promise)}function Ue(L){var nt=B||x(L,"disableForReducedMotion",Boolean),De=x(L,"zIndex",Number);if(nt&&ye)return d(function(Ee){Ee()});ee&&Pe?P=Pe.canvas:ee&&!P&&(P=T(De),document.body.appendChild(P)),ue&&!he&&ce(P);var Fe={width:P.width,height:P.height};X&&!he&&X.init(P),he=!0,X&&(P.__confetti_initialized=!0);function Te(){if(X){var Ee={getBoundingClientRect:function(){if(!ee)return P.getBoundingClientRect()}};ce(Ee),X.postMessage({resize:{width:Ee.width,height:Ee.height}});return}Fe.width=Fe.height=null}function Ye(){Pe=null,ue&&(z=!1,e.removeEventListener("resize",Te)),ee&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,he=!1)}return ue&&!z&&(z=!0,e.addEventListener("resize",Te,!1)),X?X.fire(L,Fe,Ye):Me(L,Fe,Ye)}return Ue.reset=function(){X&&X.reset(),Pe&&Pe.reset()},Ue}var ne;function K(){return ne||(ne=J(null,{useWorker:!0,resize:!0})),ne}function ie(P,R,ee,ue,z,B,Y){var X=new Path2D(P),ce=new Path2D;ce.addPath(X,new DOMMatrix(R));var he=new Path2D;return he.addPath(ce,new DOMMatrix([Math.cos(Y)*z,Math.sin(Y)*z,-Math.sin(Y)*B,Math.cos(Y)*B,ee,ue])),he}function D(P){if(!a)throw new Error("path confetti are not supported in this browser");var R,ee;typeof P=="string"?R=P:(R=P.path,ee=P.matrix);var ue=new Path2D(R),z=document.createElement("canvas"),B=z.getContext("2d");if(!ee){for(var Y=1e3,X=Y,ce=Y,he=0,ye=0,Pe,Me,Ue=0;Ue<Y;Ue+=2)for(var L=0;L<Y;L+=2)B.isPointInPath(ue,Ue,L,"nonzero")&&(X=Math.min(X,Ue),ce=Math.min(ce,L),he=Math.max(he,Ue),ye=Math.max(ye,L));Pe=he-X,Me=ye-ce;var nt=10,De=Math.min(nt/Pe,nt/Me);ee=[De,0,0,De,-Math.round(Pe/2+X)*De,-Math.round(Me/2+ce)*De]}return{type:"path",path:R,matrix:ee}}function Z(P){var R,ee=1,ue="#000000",z='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?R=P:(R=P.text,ee="scalar"in P?P.scalar:ee,z="fontFamily"in P?P.fontFamily:z,ue="color"in P?P.color:ue);var B=10*ee,Y=""+B+"px "+z,X=new OffscreenCanvas(B,B),ce=X.getContext("2d");ce.font=Y;var he=ce.measureText(R),ye=Math.ceil(he.actualBoundingBoxRight+he.actualBoundingBoxLeft),Pe=Math.ceil(he.actualBoundingBoxAscent+he.actualBoundingBoxDescent),Me=2,Ue=he.actualBoundingBoxLeft+Me,L=he.actualBoundingBoxAscent+Me;ye+=Me+Me,Pe+=Me+Me,X=new OffscreenCanvas(ye,Pe),ce=X.getContext("2d"),ce.font=Y,ce.fillStyle=ue,ce.fillText(R,Ue,L);var nt=1/ee;return{type:"bitmap",bitmap:X.transferToImageBitmap(),matrix:[nt,0,0,nt,-ye*nt/2,-Pe*nt/2]}}n.exports=function(){return K().apply(this,arguments)},n.exports.reset=function(){K().reset()},n.exports.create=J,n.exports.shapeFromPath=D,n.exports.shapeFromText=Z})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),_f,!1);const bf=_f.exports;_f.exports.create;const tC=({questions:t,onComplete:e})=>{const[n,i]=ae.useState({}),[r,s]=ae.useState(!1),a=(h,m)=>{r||i(g=>({...g,[h]:m}))},l=()=>{let h=0;return t.forEach(m=>{n[m.id]===m.correctAnswer&&h++}),h},c=()=>{s(!0);const h=l(),m=Math.round(h/t.length*100);m>=70&&bf({particleCount:60,spread:60,origin:{y:.7}}),e&&e(m)},d=()=>{i({}),s(!1)};if(t.length===0)return o.jsx("div",{className:"p-8 text-center text-xs text-slate-400 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800",children:"No quiz questions available for this experiment."});const u=l(),p=t.every(h=>n[h.id]!==void 0);return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-sm font-bold text-slate-900 dark:text-white",children:"Pre-Test & Post-Test Assessment"}),o.jsx("p",{className:"text-xs text-slate-500",children:"Answer the following multiple choice questions to verify your conceptual understanding."})]}),r&&o.jsxs("div",{className:"flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 font-mono text-xs font-bold text-amber-800 dark:text-amber-300",children:[o.jsx(oc,{className:"w-4 h-4 text-amber-500"}),o.jsxs("span",{children:["Score: ",u," / ",t.length," (",Math.round(u/t.length*100),"%)"]})]})]}),o.jsx("div",{className:"space-y-4",children:t.map((h,m)=>{const g=n[h.id];return h.correctAnswer,o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3",children:[o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsxs("span",{className:"font-semibold text-sm text-slate-900 dark:text-slate-100",children:[m+1,". ",h.question]}),o.jsxs("span",{className:"text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500",children:[h.type.toUpperCase(),"-TEST"]})]}),o.jsx("div",{className:"space-y-2",children:h.options.map((b,x)=>{const f=g===x;let _="border-slate-200 dark:border-slate-800 hover:border-srm-blue";return r?x===h.correctAnswer?_="border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 font-semibold":f?_="border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300":_="opacity-50 border-slate-200 dark:border-slate-800":f&&(_="border-srm-blue bg-blue-50 dark:bg-blue-950/30 text-srm-blue dark:text-blue-300 font-semibold"),o.jsxs("div",{onClick:()=>a(h.id,x),className:`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between ${_}`,children:[o.jsx("span",{children:b}),r&&x===h.correctAnswer&&o.jsx(bi,{className:"w-4 h-4 text-emerald-500 shrink-0"}),r&&f&&x!==h.correctAnswer&&o.jsx(Yb,{className:"w-4 h-4 text-rose-500 shrink-0"})]},x)})}),r&&o.jsxs("div",{className:"p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-start space-x-2",children:[o.jsx(Ts,{className:"w-4 h-4 text-srm-blue shrink-0 mt-0.5"}),o.jsxs("div",{children:[o.jsx("strong",{className:"text-slate-800 dark:text-slate-200",children:"Explanation: "}),h.explanation]})]})]},h.id)})}),o.jsx("div",{className:"flex justify-end space-x-3",children:r?o.jsx("button",{onClick:d,className:"px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors",children:"Retake Quiz"}):o.jsx("button",{onClick:c,disabled:!p,className:"px-5 py-2 text-xs font-bold rounded-xl bg-srm-blue text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-xs",children:"Submit Quiz"})})]})},nC=({questions:t})=>{const[e,n]=ae.useState({}),i=r=>{n(s=>({...s,[r]:!s[r]}))};return o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsx("h3",{className:"text-sm font-bold text-slate-900 dark:text-white",children:"Viva Voce Examination Questions"}),o.jsx("p",{className:"text-xs text-slate-500",children:"Essential oral viva questions commonly asked by external examiners during practical lab evaluations."})]}),o.jsx("div",{className:"space-y-3",children:t.map((r,s)=>{const a=!!e[r.id];return o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3",children:[o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsxs("div",{className:"flex items-start space-x-2",children:[o.jsx(Ts,{className:"w-4 h-4 text-srm-blue dark:text-blue-400 shrink-0 mt-0.5"}),o.jsxs("span",{className:"font-semibold text-sm text-slate-900 dark:text-slate-100",children:["Q",s+1,": ",r.question]})]}),o.jsx("button",{onClick:()=>i(r.id),className:"flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors shrink-0 ml-2",children:a?o.jsxs(o.Fragment,{children:[o.jsx(Jb,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Hide Answer"})]}):o.jsxs(o.Fragment,{children:[o.jsx(eS,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Reveal Answer"})]})})]}),a&&o.jsxs("div",{className:"p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-sans whitespace-pre-wrap animate-fadeIn",children:[o.jsx("strong",{className:"text-slate-900 dark:text-white",children:"Sample Model Answer: "}),r.answer]})]},r.id)})})]})},iC=({experimentId:t,onBack:e,isCompleted:n,onMarkCompleted:i,isBookmarked:r,onToggleBookmark:s})=>{const[a,l]=ae.useState("simulation"),c=jt.find(h=>h.id===t)||jt[0],d=$m[c.id]||$m["exp-fcfs"]||[],u=L2.filter(h=>h.category===c.category||h.category==="CPU Scheduling"),p=()=>{bf({particleCount:80,spread:70,origin:{y:.6}}),i(c.id)};return o.jsxs("div",{className:"space-y-6 py-6 font-sans",children:[o.jsx(js,{onBack:e,backLabel:"← Back to Experiment Catalog",breadcrumbs:[{label:"Virtual Laboratories",onClick:e},{label:c.category},{label:c.title}]}),o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx("span",{className:"px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950 text-srm-blue dark:text-blue-400 border border-blue-200 dark:border-blue-900",children:c.category}),o.jsx("span",{className:"text-xs text-slate-400",children:"•"}),o.jsx("span",{className:"text-xs font-mono font-bold text-slate-600 dark:text-slate-300",children:c.coMapping}),o.jsx("span",{className:"text-xs text-slate-400",children:"•"}),o.jsxs("span",{className:"text-xs font-mono text-slate-500 flex items-center space-x-1",children:[o.jsx(Pg,{className:"w-3 h-3 inline mr-1"}),c.estimatedTime]})]}),o.jsx("h1",{className:"text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1",children:c.title})]}),o.jsxs("div",{className:"flex items-center space-x-2 shrink-0",children:[o.jsx("button",{onClick:()=>s(c.id),className:`p-2.5 rounded-xl border transition-colors cursor-pointer ${r?"border-amber-300 bg-amber-50 dark:bg-amber-950 text-amber-600":"border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"}`,title:r?"Remove Bookmark":"Bookmark Experiment",children:o.jsx(nf,{className:"w-4 h-4 fill-current"})}),n?o.jsxs("div",{className:"flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold",children:[o.jsx(bi,{className:"w-4 h-4"}),o.jsx("span",{children:"Completed ✓"})]}):o.jsxs("button",{onClick:p,className:"flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-srm-blue hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer",children:[o.jsx(sc,{className:"w-4 h-4"}),o.jsx("span",{children:"Mark Completed (+50 XP)"})]})]})]}),o.jsx("div",{className:"flex items-center space-x-1 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-x-auto text-xs font-semibold",children:[{id:"simulation",label:"Interactive Simulation",icon:af},{id:"overview",label:"Overview & Objectives",icon:_g},{id:"theory",label:"Theory & Formulas",icon:aS},{id:"algorithm",label:"Algorithm Steps",icon:jp},{id:"code",label:"C Code Playground",icon:jp},{id:"quiz",label:"Pre/Post Quiz",icon:Ts},{id:"viva",label:"Viva Voce",icon:Ts}].map(h=>{const m=h.icon,g=a===h.id;return o.jsxs("button",{onClick:()=>l(h.id),className:`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${g?"bg-srm-blue text-white shadow-xs":"text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,children:[o.jsx(m,{className:"w-4 h-4"}),o.jsx("span",{children:h.label})]},h.id)})}),o.jsxs("div",{className:"min-h-[500px]",children:[a==="simulation"&&o.jsxs("div",{children:[c.moduleId==="cpu-scheduling"&&o.jsx(Ym,{}),c.moduleId==="virtual-memory"&&o.jsx(j2,{}),c.moduleId==="deadlock"&&o.jsx(B2,{}),c.moduleId==="memory"&&o.jsx(W2,{}),c.moduleId==="disk-scheduling"&&o.jsx($2,{}),c.moduleId==="synchronization"&&o.jsx(Z2,{}),c.moduleId==="file-systems"&&o.jsx(J2,{}),c.moduleId==="linux"&&o.jsx(iy,{}),c.moduleId==="process"&&o.jsx(Ym,{})]}),a==="overview"&&o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4",children:[o.jsx("h3",{className:"text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider",children:"Objective"}),o.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:c.objective}),o.jsx("h3",{className:"text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider pt-2",children:"Learning Outcomes"}),o.jsx("ul",{className:"space-y-2 text-xs text-slate-600 dark:text-slate-300",children:c.learningOutcomes.map((h,m)=>o.jsxs("li",{className:"flex items-start space-x-2",children:[o.jsx(bi,{className:"w-4 h-4 text-emerald-500 shrink-0 mt-0.5"}),o.jsx("span",{children:h})]},m))})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4",children:[o.jsx("h3",{className:"text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider",children:"Prerequisites & Concepts"}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-semibold text-slate-500",children:"Prerequisites:"}),o.jsx("div",{className:"flex flex-wrap gap-1.5 mt-1",children:c.prerequisites.map((h,m)=>o.jsx("span",{className:"px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300",children:h},m))})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-semibold text-slate-500",children:"Key Concepts:"}),o.jsx("div",{className:"flex flex-wrap gap-1.5 mt-1",children:c.keyConcepts.map((h,m)=>o.jsx("span",{className:"px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-xs font-medium text-srm-blue dark:text-blue-300 border border-blue-200 dark:border-blue-900",children:h},m))})]})]})]})]}),a==="theory"&&o.jsx("div",{className:"space-y-6",children:o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4",children:[o.jsxs("div",{className:"p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 text-xs leading-relaxed text-slate-800 dark:text-slate-200",children:[o.jsx("strong",{className:"text-srm-blue dark:text-blue-400",children:"Quick Summary: "}),c.theory.quickSummary]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-sm font-bold text-slate-900 dark:text-white mb-1",children:"Definition"}),o.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:c.theory.definition})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-sm font-bold text-slate-900 dark:text-white mb-1",children:"Why It Matters"}),o.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:c.theory.whyItMatters})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-sm font-bold text-slate-900 dark:text-white mb-1",children:"How It Works"}),o.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:c.theory.howItWorks})]}),c.theory.formulas&&c.theory.formulas.length>0&&o.jsxs("div",{className:"pt-2",children:[o.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-3",children:"Mathematical Formulas"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:c.theory.formulas.map((h,m)=>o.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs",children:[o.jsx("div",{className:"font-semibold text-slate-500 font-sans",children:h.name}),o.jsx("div",{className:"text-sm font-bold text-srm-blue dark:text-blue-400 my-1",children:h.formula}),o.jsx("div",{className:"text-[11px] text-slate-400 font-sans",children:h.explanation})]},m))})]}),c.theory.commonMistakes&&o.jsxs("div",{className:"p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/60 text-xs",children:[o.jsxs("div",{className:"flex items-center space-x-1.5 font-bold text-amber-800 dark:text-amber-300 mb-2",children:[o.jsx(xv,{className:"w-4 h-4 text-amber-600"}),o.jsx("span",{children:"Common Student Exam Mistakes:"})]}),o.jsx("ul",{className:"list-disc list-inside space-y-1 text-amber-900 dark:text-amber-200",children:c.theory.commonMistakes.map((h,m)=>o.jsx("li",{children:h},m))})]})]})}),a==="algorithm"&&o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4",children:[o.jsx("h3",{className:"text-sm font-bold uppercase tracking-wider text-slate-400",children:"Step-by-Step Algorithm Execution Flow"}),o.jsx("div",{className:"space-y-3",children:c.algorithmSteps.map((h,m)=>o.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start space-x-3 text-xs",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-srm-blue text-white flex items-center justify-center font-bold shrink-0 font-mono text-[11px]",children:m+1}),o.jsx("span",{className:"text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5",children:h})]},m))})]}),a==="code"&&o.jsx(eC,{experimentId:c.id}),a==="quiz"&&o.jsx(tC,{questions:d}),a==="viva"&&o.jsx(nC,{questions:u})]})]})},rC=({isOpen:t,onClose:e,category:n})=>{const[i,r]=ae.useState(2);if(!t)return null;const s=[{id:"1",pid:"P1",arrivalTime:0,burstTime:8},{id:"2",pid:"P2",arrivalTime:1,burstTime:4},{id:"3",pid:"P3",arrivalTime:2,burstTime:9},{id:"4",pid:"P4",arrivalTime:3,burstTime:5}],a=al(s,"FCFS"),l=al(s,"SJF"),c=al(s,"RR",i),d=[7,0,1,2,0,3,0,4,2,3,0,3,2],u=ol(d,3,"FIFO"),p=ol(d,3,"LRU"),h=ol(d,3,"Optimal"),m=[98,183,37,122,14,124,65,67],g=ll(m,53,"FCFS"),b=ll(m,53,"SSTF"),x=ll(m,53,"SCAN","UP");return o.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center",children:o.jsxs("div",{className:"w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx(rf,{className:"w-5 h-5 text-srm-blue dark:text-blue-400"}),o.jsx("h3",{className:"text-base font-bold text-slate-900 dark:text-white",children:"Algorithm Benchmark & Trade-off Comparison"})]}),o.jsx("button",{onClick:e,className:"p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white",children:o.jsx(lc,{className:"w-5 h-5"})})]}),o.jsxs("div",{className:"p-6 space-y-6 max-h-[80vh] overflow-y-auto",children:[n==="cpu"&&o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between items-center mb-4",children:[o.jsxs("div",{children:[o.jsx("h4",{className:"text-sm font-bold text-slate-800 dark:text-slate-200",children:"CPU Scheduling Comparison on Identical Workload"}),o.jsx("p",{className:"text-xs text-slate-500",children:"Processes: P1(BT=8), P2(BT=4), P3(BT=9), P4(BT=5)"})]}),o.jsxs("div",{className:"flex items-center space-x-2 text-xs",children:[o.jsx("span",{children:"RR Quantum:"}),o.jsx("input",{type:"number",min:"1",max:"6",value:i,onChange:f=>r(Number(f.target.value)||2),className:"w-12 px-2 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-center font-mono font-bold"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsxs("div",{className:"p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/40 dark:bg-blue-950/20",children:[o.jsx("div",{className:"font-bold text-sm text-blue-700 dark:text-blue-300",children:"FCFS"}),o.jsxs("div",{className:"mt-3 space-y-2 text-xs",children:[o.jsxs("div",{children:["Avg Waiting: ",o.jsxs("strong",{className:"font-mono text-sm",children:[a.avgWaitingTime," ms"]})]}),o.jsxs("div",{children:["Avg Turnaround: ",o.jsxs("strong",{className:"font-mono text-sm",children:[a.avgTurnaroundTime," ms"]})]}),o.jsxs("div",{children:["Context Switches: ",o.jsx("strong",{className:"font-mono text-sm",children:a.contextSwitches})]})]}),o.jsx("div",{className:"mt-3 text-[11px] text-slate-500",children:"Simple, zero preemption overhead, but prone to Convoy Effect."})]}),o.jsxs("div",{className:"p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/40 dark:bg-emerald-950/20",children:[o.jsxs("div",{className:"font-bold text-sm text-emerald-700 dark:text-emerald-300 flex items-center justify-between",children:[o.jsx("span",{children:"SJF (Optimal WT)"}),o.jsx(bi,{className:"w-4 h-4 text-emerald-500"})]}),o.jsxs("div",{className:"mt-3 space-y-2 text-xs",children:[o.jsxs("div",{children:["Avg Waiting: ",o.jsxs("strong",{className:"font-mono text-sm text-emerald-600 dark:text-emerald-400",children:[l.avgWaitingTime," ms"]})]}),o.jsxs("div",{children:["Avg Turnaround: ",o.jsxs("strong",{className:"font-mono text-sm",children:[l.avgTurnaroundTime," ms"]})]}),o.jsxs("div",{children:["Context Switches: ",o.jsx("strong",{className:"font-mono text-sm",children:l.contextSwitches})]})]}),o.jsx("div",{className:"mt-3 text-[11px] text-slate-500",children:"Lowest possible average waiting time, but difficult to predict burst times in practice."})]}),o.jsxs("div",{className:"p-4 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/40 dark:bg-amber-950/20",children:[o.jsx("div",{className:"font-bold text-sm text-amber-700 dark:text-amber-300",children:"Round Robin"}),o.jsxs("div",{className:"mt-3 space-y-2 text-xs",children:[o.jsxs("div",{children:["Avg Waiting: ",o.jsxs("strong",{className:"font-mono text-sm",children:[c.avgWaitingTime," ms"]})]}),o.jsxs("div",{children:["Avg Turnaround: ",o.jsxs("strong",{className:"font-mono text-sm",children:[c.avgTurnaroundTime," ms"]})]}),o.jsxs("div",{children:["Context Switches: ",o.jsx("strong",{className:"font-mono text-sm text-amber-600 dark:text-amber-400",children:c.contextSwitches})]})]}),o.jsx("div",{className:"mt-3 text-[11px] text-slate-500",children:"Fair, responsive for interactive users, but suffers from context switch penalties."})]})]})]}),n==="page"&&o.jsxs("div",{children:[o.jsx("h4",{className:"text-sm font-bold text-slate-800 dark:text-slate-200 mb-1",children:"Page Replacement Comparison (3 Frames)"}),o.jsx("p",{className:"text-xs text-slate-500 mb-4",children:"Reference String: [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2]"}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsxs("div",{className:"p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40",children:[o.jsx("div",{className:"font-bold text-sm text-slate-800 dark:text-slate-200",children:"FIFO"}),o.jsxs("div",{className:"mt-3 space-y-1.5 text-xs",children:[o.jsxs("div",{children:["Page Faults: ",o.jsx("strong",{className:"font-mono text-base text-rose-500",children:u.totalFaults})]}),o.jsxs("div",{children:["Hit Ratio: ",o.jsxs("strong",{className:"font-mono text-sm",children:[u.hitRatio,"%"]})]})]}),o.jsx("div",{className:"mt-3 text-[11px] text-slate-500",children:"Replaces oldest page. Prone to Belady's Anomaly."})]}),o.jsxs("div",{className:"p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/40 dark:bg-blue-950/20",children:[o.jsx("div",{className:"font-bold text-sm text-blue-700 dark:text-blue-300",children:"LRU"}),o.jsxs("div",{className:"mt-3 space-y-1.5 text-xs",children:[o.jsxs("div",{children:["Page Faults: ",o.jsx("strong",{className:"font-mono text-base text-blue-600",children:p.totalFaults})]}),o.jsxs("div",{children:["Hit Ratio: ",o.jsxs("strong",{className:"font-mono text-sm",children:[p.hitRatio,"%"]})]})]}),o.jsx("div",{className:"mt-3 text-[11px] text-slate-500",children:"Replaces least recently used page. Stack algorithm (no Belady's anomaly)."})]}),o.jsxs("div",{className:"p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/40 dark:bg-emerald-950/20",children:[o.jsxs("div",{className:"font-bold text-sm text-emerald-700 dark:text-emerald-300 flex items-center justify-between",children:[o.jsx("span",{children:"Optimal (MIN)"}),o.jsx(bi,{className:"w-4 h-4 text-emerald-500"})]}),o.jsxs("div",{className:"mt-3 space-y-1.5 text-xs",children:[o.jsxs("div",{children:["Page Faults: ",o.jsx("strong",{className:"font-mono text-base text-emerald-600",children:h.totalFaults})]}),o.jsxs("div",{children:["Hit Ratio: ",o.jsxs("strong",{className:"font-mono text-sm",children:[h.hitRatio,"%"]})]})]}),o.jsx("div",{className:"mt-3 text-[11px] text-slate-500",children:"Theoretical lower bound; requires future knowledge of reference string."})]})]})]}),n==="disk"&&o.jsxs("div",{children:[o.jsx("h4",{className:"text-sm font-bold text-slate-800 dark:text-slate-200 mb-1",children:"Disk Arm Travel Comparison (Initial Head = 53)"}),o.jsx("p",{className:"text-xs text-slate-500 mb-4",children:"Requests: [98, 183, 37, 122, 14, 124, 65, 67]"}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsxs("div",{className:"p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40",children:[o.jsx("div",{className:"font-bold text-sm text-slate-800 dark:text-slate-200",children:"FCFS"}),o.jsx("div",{className:"mt-3 text-xs",children:o.jsxs("div",{children:["Total Head Movement: ",o.jsx("strong",{className:"font-mono text-base text-rose-500",children:g.totalHeadMovement})," cyl"]})}),o.jsx("div",{className:"mt-3 text-[11px] text-slate-500",children:"Wild arm swings back and forth across disk platter."})]}),o.jsxs("div",{className:"p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/40 dark:bg-blue-950/20",children:[o.jsx("div",{className:"font-bold text-sm text-blue-700 dark:text-blue-300",children:"SSTF"}),o.jsx("div",{className:"mt-3 text-xs",children:o.jsxs("div",{children:["Total Head Movement: ",o.jsx("strong",{className:"font-mono text-base text-blue-600",children:b.totalHeadMovement})," cyl"]})}),o.jsx("div",{className:"mt-3 text-[11px] text-slate-500",children:"Dramatically reduces seek time, but can starve distant tracks."})]}),o.jsxs("div",{className:"p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/40 dark:bg-emerald-950/20",children:[o.jsx("div",{className:"font-bold text-sm text-emerald-700 dark:text-emerald-300",children:"SCAN (Elevator)"}),o.jsx("div",{className:"mt-3 text-xs",children:o.jsxs("div",{children:["Total Head Movement: ",o.jsx("strong",{className:"font-mono text-base text-emerald-600",children:x.totalHeadMovement})," cyl"]})}),o.jsx("div",{className:"mt-3 text-[11px] text-slate-500",children:"Provides uniform, fair wait times with predictable arm sweeps."})]})]})]})]}),o.jsx("div",{className:"px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex justify-end",children:o.jsx("button",{onClick:e,className:"px-4 py-2 text-xs font-semibold rounded-lg bg-srm-blue text-white hover:bg-blue-700 transition-colors",children:"Close Benchmark"})})]})})},sC=({onBack:t})=>{const[e,n]=ae.useState(null);return o.jsxs("div",{className:"space-y-6 py-6 font-sans",children:[o.jsx(js,{onBack:t,backLabel:"← Back to Home",breadcrumbs:[{label:"Virtual Laboratories",onClick:t},{label:"Algorithm Comparison Workbench"}]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center space-x-2 text-xs font-bold text-srm-blue dark:text-blue-400 uppercase tracking-wider",children:[o.jsx(rf,{className:"w-4 h-4"}),o.jsx("span",{children:"Algorithm Comparison Workbench"})]}),o.jsx("h1",{className:"text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1",children:"Side-by-Side Algorithm Comparison"}),o.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl",children:"Evaluate multiple operating system algorithms against the exact same workload to analyze turnaround time, page fault rates, and head movement trade-offs."})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-srm-blue dark:text-blue-400 flex items-center justify-center mb-4",children:o.jsx(af,{className:"w-6 h-6"})}),o.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"CPU Scheduling Benchmark"}),o.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed",children:"Compare FCFS, Shortest Job First (SJF), and Round Robin on a stationary workload. Inspect Waiting Time and context switch overhead."}),o.jsxs("div",{className:"mt-4 flex flex-wrap gap-1.5 text-[10px] font-mono",children:[o.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800",children:"FCFS"}),o.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800",children:"SJF"}),o.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800",children:"Round Robin"})]})]}),o.jsxs("button",{onClick:()=>n("cpu"),className:"mt-6 w-full py-2.5 rounded-xl bg-srm-blue hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-colors cursor-pointer",children:[o.jsx("span",{children:"Run CPU Comparison"}),o.jsx(Bt,{className:"w-4 h-4"})]})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4",children:o.jsx(Dl,{className:"w-6 h-6"})}),o.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"Page Replacement Benchmark"}),o.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed",children:"Compare FIFO, Least Recently Used (LRU), and Optimal replacement policies across 3 frames. Inspect fault counts and Belady's anomaly."}),o.jsxs("div",{className:"mt-4 flex flex-wrap gap-1.5 text-[10px] font-mono",children:[o.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800",children:"FIFO"}),o.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800",children:"LRU"}),o.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800",children:"Optimal"})]})]}),o.jsxs("button",{onClick:()=>n("page"),className:"mt-6 w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-colors cursor-pointer",children:[o.jsx("span",{children:"Run Page Replacement Comparison"}),o.jsx(Bt,{className:"w-4 h-4"})]})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4",children:o.jsx(jg,{className:"w-6 h-6"})}),o.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"Disk Arm Scheduling Benchmark"}),o.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed",children:"Compare FCFS, Shortest Seek Time First (SSTF), and SCAN (Elevator) head trajectories over cylinders 0-199."}),o.jsxs("div",{className:"mt-4 flex flex-wrap gap-1.5 text-[10px] font-mono",children:[o.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800",children:"FCFS"}),o.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800",children:"SSTF"}),o.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800",children:"SCAN"})]})]}),o.jsxs("button",{onClick:()=>n("disk"),className:"mt-6 w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-colors cursor-pointer",children:[o.jsx("span",{children:"Run Disk Comparison"}),o.jsx(Bt,{className:"w-4 h-4"})]})]})]}),e&&o.jsx(rC,{isOpen:!0,onClose:()=>n(null),category:e})]})},aC=[{id:"chal-rr-quantum",moduleId:"cpu-scheduling",title:"Round Robin Quantum Optimizer",difficulty:"Medium",description:"Find a time quantum between 1 and 6 that achieves an Average Waiting Time under 4.5 ms for 4 processes with burst times [8, 4, 9, 5].",hint:"A quantum of 3 or 4 balances responsiveness without penalizing the shorter jobs with excessive waiting.",targetMetric:"Average Waiting Time <=",targetValue:4.5,xpReward:100},{id:"chal-bankers-safe",moduleId:"deadlock",title:"Banker’s Safe Sequence Hunt",difficulty:"Hard",description:"Identify the complete safe sequence for 5 processes P0-P4 where Available is [3, 3, 2] and Allocation/Max matrices are configured.",hint:"Look for the process whose Need is strictly less than or equal to [3, 3, 2]. Usually P1 or P3.",targetMetric:"Safe Sequence Found",targetValue:"P1 -> P3 -> P4 -> P0 -> P2",xpReward:150},{id:"chal-lru-faults",moduleId:"virtual-memory",title:"LRU Minimum Fault Challenge",difficulty:"Medium",description:"Test reference string [7, 0, 1, 2, 0, 3, 0, 4, 2, 3] with 3 frames vs 4 frames and achieve a Fault Ratio under 60%.",hint:"Increasing frames from 3 to 4 provides more buffer for the frequently referenced page 0.",targetMetric:"Fault Ratio <=",targetValue:60,xpReward:120},{id:"chal-disk-seek",moduleId:"disk-scheduling",title:"Disk Arm Seek Minimizer",difficulty:"Easy",description:"Given requests [98, 183, 37, 122, 14, 124, 65, 67] starting at head 53: compare FCFS vs SSTF vs SCAN to find the lowest total head movement.",hint:"SSTF and SCAN dramatically cut head travel compared to FCFS by avoiding cross-disk thrashing.",targetMetric:"Minimum Total Head Movement",targetValue:236,xpReward:80}],oC=({challenge:t,isCompleted:e,onComplete:n})=>{const[i,r]=ae.useState(!1),s=()=>{e||(bf({particleCount:70,spread:70,origin:{y:.7}}),n(t.id,t.xpReward))},a={Easy:"bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300",Medium:"bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-300",Hard:"bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-300"};return o.jsxs("div",{className:`p-5 rounded-2xl border transition-all ${e?"bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800":"bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xs"}`,children:[o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${a[t.difficulty]}`,children:t.difficulty}),o.jsxs("span",{className:"text-xs font-mono font-semibold text-amber-600 dark:text-amber-400",children:["+",t.xpReward," XP"]})]}),o.jsx("h4",{className:"text-sm font-bold text-slate-900 dark:text-white mt-1",children:t.title})]}),e&&o.jsxs("span",{className:"flex items-center space-x-1 text-xs font-bold text-emerald-600 dark:text-emerald-400",children:[o.jsx(bi,{className:"w-4 h-4"}),o.jsx("span",{children:"SOLVED"})]})]}),o.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed",children:t.description}),o.jsxs("div",{className:"mt-3 inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono",children:[o.jsx("span",{className:"text-slate-500",children:"Goal:"}),o.jsxs("span",{className:"font-bold text-srm-blue dark:text-blue-400",children:[t.targetMetric," ",t.targetValue]})]}),i&&o.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200",children:[o.jsx("strong",{children:"💡 Hint: "}),t.hint]}),o.jsxs("div",{className:"mt-4 flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800",children:[o.jsxs("button",{onClick:()=>r(!i),className:"text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 flex items-center space-x-1",children:[o.jsx(Ts,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:i?"Hide Hint":"Show Hint"})]}),e?o.jsx("span",{className:"text-xs font-medium text-emerald-600 dark:text-emerald-400",children:"✓ XP Credited to Profile"}):o.jsxs("button",{onClick:s,className:"flex items-center space-x-1 px-3.5 py-1.5 rounded-lg bg-srm-blue hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs",children:[o.jsx("span",{children:"Verify & Claim XP"}),o.jsx(Bt,{className:"w-3.5 h-3.5"})]})]})]})},lC=({completedChallenges:t,onCompleteChallenge:e,onBack:n})=>{const[i,r]=ae.useState("all"),s=aC.filter(a=>i==="all"||a.difficulty.toLowerCase()===i.toLowerCase());return o.jsxs("div",{className:"space-y-6 py-6 font-sans",children:[o.jsx(js,{onBack:n,backLabel:"← Back to Home",breadcrumbs:[{label:"Virtual Laboratories",onClick:n},{label:"Interactive Challenges"}]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center space-x-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider",children:[o.jsx(oc,{className:"w-4 h-4"}),o.jsx("span",{children:"Interactive Challenges"})]}),o.jsx("h1",{className:"text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1",children:"Operating Systems Lab Challenges"}),o.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl",children:"Apply your knowledge to solve real-world scheduling, memory management, and deadlock avoidance puzzles. Earn XP and unlock achievements!"})]}),o.jsxs("div",{className:"flex items-center space-x-2 text-xs",children:[o.jsx(qg,{className:"w-3.5 h-3.5 text-slate-400"}),o.jsx("span",{className:"text-slate-500 font-medium",children:"Difficulty:"}),["all","easy","medium","hard"].map(a=>o.jsx("button",{onClick:()=>r(a),className:`px-3 py-1.5 rounded-lg capitalize font-semibold transition-colors cursor-pointer ${i===a?"bg-amber-500 text-white shadow-xs":"bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"}`,children:a},a))]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:s.map(a=>o.jsx(oC,{challenge:a,isCompleted:t.includes(a.id),onComplete:e},a.id))})]})},cC=({onBack:t})=>{const e=[{cmd:"help",desc:"Display all supported virtual UNIX commands and syntax."},{cmd:"ls",desc:"List workspace files (e.g. fcfs_scheduler.c, round_robin.c)."},{cmd:"cat <file>",desc:'View source code or lab notes (e.g. "cat notes.txt").'},{cmd:"ps",desc:"Inspect active simulated system processes and PIDs."},{cmd:"top",desc:"View real-time simulated CPU and memory consumption."},{cmd:"fork",desc:"Simulate the fork() system call creating child process and PPID."},{cmd:"chmod 755 <f>",desc:"Modify file access mode permissions."},{cmd:"uname -a",desc:"Print virtual Linux kernel architecture and version."},{cmd:"clear",desc:"Clear the terminal output screen."}];return o.jsxs("div",{className:"space-y-6 py-6 font-sans",children:[o.jsx(js,{onBack:t,backLabel:"← Back to Home",breadcrumbs:[{label:"Virtual Laboratories",onClick:t},{label:"Interactive Linux Terminal"}]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center space-x-2 text-xs font-bold text-srm-blue dark:text-blue-400 uppercase tracking-wider",children:[o.jsx(ac,{className:"w-4 h-4"}),o.jsx("span",{children:"Interactive Linux Subsystem"})]}),o.jsx("h1",{className:"text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1",children:"Virtual UNIX Shell & Terminal"}),o.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl",children:"A secure in-browser simulated terminal environment for learning foundational Linux commands, process inspection, and system calls."})]}),o.jsx(iy,{}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4",children:[o.jsxs("h3",{className:"text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2",children:[o.jsx(Zb,{className:"w-4 h-4 text-srm-blue"}),o.jsx("span",{children:"Supported Terminal Commands Reference"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:e.map((n,i)=>o.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs",children:[o.jsxs("div",{className:"font-mono font-bold text-srm-blue dark:text-blue-400",children:["$ ",n.cmd]}),o.jsx("div",{className:"text-slate-500 dark:text-slate-400 mt-1 text-[11px] leading-relaxed",children:n.desc})]},i))})]})]})},dC=({progress:t,onSelectExperiment:e,onResetProgress:n,onBack:i})=>{const r=jt.length,s=t.completedExperiments.length,a=Math.round(s/r*100),l=[{id:"Scheduler",title:"Scheduler",desc:"Completed FCFS & Round Robin",icon:"⏱️"},{id:"Deadlock Detective",title:"Deadlock Detective",desc:"Solved Banker's Algorithm",icon:"🔒"},{id:"Memory Master",title:"Memory Master",desc:"Mastered Contiguous Allocation",icon:"💾"},{id:"Paging Explorer",title:"Paging Explorer",desc:"Analyzed Page Replacement",icon:"📄"},{id:"Synchronization Pro",title:"Synchronization Pro",desc:"Solved Producer-Consumer & Philosophers",icon:"🛡️"},{id:"Disk Master",title:"Disk Master",desc:"Optimized Disk Arm Trajectory",icon:"💿"}],c=jt.filter(d=>t.bookmarkedExperiments.includes(d.id));return o.jsxs("div",{className:"space-y-6 py-6 font-sans",children:[o.jsx(js,{onBack:i,backLabel:"← Back to Home",breadcrumbs:[{label:"Virtual Laboratories",onClick:i},{label:"Student Profile & Progress"}]}),o.jsxs("div",{className:"rounded-3xl bg-[#09356d] text-white p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-blue-900",children:[o.jsxs("div",{className:"space-y-3",children:[o.jsx("div",{className:"inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md bg-[#f8a51d] text-slate-950 font-bold text-[10px] tracking-wider uppercase",children:o.jsx("span",{children:"★ SRMIST CSE PORTAL"})}),o.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold tracking-tight",children:"Welcome back, AB1234@SRMIST.EDU.IN!"}),o.jsxs("p",{className:"text-xs sm:text-sm text-blue-200 font-mono",children:["Registration No: ",o.jsx("strong",{className:"text-amber-300 font-bold",children:"RA2211003010001"})," • Semester IV • B.Tech CSE"]})]}),o.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 text-center shrink-0 min-w-[170px]",children:[o.jsx("div",{className:"text-[10px] font-bold uppercase tracking-widest text-blue-200",children:"TOTAL EXPERIMENTS"}),o.jsxs("div",{className:"text-2xl sm:text-3xl font-black font-mono text-[#f8a51d] mt-1",children:[r," Available"]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xs",children:[o.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"ACTIVE LABORATORIES"}),o.jsx("div",{className:"text-3xl font-black font-mono text-[#0c4da2] dark:text-blue-400 mt-2",children:"9 Modules"})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xs",children:[o.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"COMPLETED EXPERIMENTS"}),o.jsxs("div",{className:"text-3xl font-black font-mono text-[#0c4da2] dark:text-blue-400 mt-2",children:[s," ",o.jsxs("span",{className:"text-sm font-normal text-slate-400",children:["/ ",r]})]})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"OVERALL LAB PROGRESS"}),o.jsxs("div",{className:"text-3xl font-black font-mono text-[#0c4da2] dark:text-blue-400 mt-2",children:[a,"%"]})]}),o.jsx("div",{className:"w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-3",children:o.jsx("div",{className:"bg-[#0c4da2] dark:bg-blue-500 h-full transition-all duration-300",style:{width:`${Math.max(a,2)}%`}})})]})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4",children:[o.jsxs("h3",{className:"text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-2",children:[o.jsx(oc,{className:"w-4 h-4 text-amber-500"}),o.jsxs("span",{children:["Earned Academic Badges (",t.badges.length," / ",l.length,")"]})]}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4",children:l.map(d=>{const u=t.badges.includes(d.id);return o.jsxs("div",{className:`p-3.5 rounded-xl border text-center transition-all ${u?"border-amber-300 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 shadow-xs":"border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 text-slate-400 opacity-50 grayscale"}`,children:[o.jsx("div",{className:"text-2xl mb-1",children:d.icon}),o.jsx("div",{className:"font-bold text-xs",children:d.title}),o.jsx("div",{className:"text-[10px] mt-0.5 line-clamp-2",children:d.desc}),u&&o.jsx("div",{className:"mt-1.5 text-[9px] font-bold uppercase text-amber-600 dark:text-amber-400",children:"UNLOCKED ✓"})]},d.id)})})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4",children:[o.jsx("h3",{className:"text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider",children:"Curriculum Module Breakdown"}),o.jsx("div",{className:"space-y-3",children:Fa.map(d=>{const u=jt.filter(m=>m.moduleId===d.id),p=u.filter(m=>t.completedExperiments.includes(m.id)).length,h=u.length>0?Math.round(p/u.length*100):0;return o.jsxs("div",{className:"space-y-1",children:[o.jsxs("div",{className:"flex justify-between text-xs font-semibold",children:[o.jsx("span",{className:"text-slate-700 dark:text-slate-300",children:d.title}),o.jsxs("span",{className:"font-mono text-slate-400",children:[p,"/",u.length," (",h,"%)"]})]}),o.jsx("div",{className:"w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden",children:o.jsx("div",{className:"bg-[#0c4da2] h-full transition-all duration-300",style:{width:`${h}%`}})})]},d.id)})})]}),o.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("h3",{className:"text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center space-x-1.5",children:[o.jsx(nf,{className:"w-4 h-4 text-amber-500 fill-amber-500"}),o.jsxs("span",{children:["Bookmarked Experiments (",c.length,")"]})]}),o.jsxs("button",{onClick:n,className:"flex items-center space-x-1 text-[11px] text-rose-500 hover:text-rose-700 transition-colors cursor-pointer",children:[o.jsx(Qi,{className:"w-3 h-3"}),o.jsx("span",{children:"Reset Progress"})]})]}),c.length===0?o.jsx("div",{className:"py-12 text-center text-xs text-slate-400 italic",children:"No bookmarked experiments yet. Pin experiments from the catalog to access them quickly here."}):o.jsx("div",{className:"space-y-2",children:c.map(d=>o.jsxs("div",{onClick:()=>e(d.id),className:"p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-srm-blue flex items-center justify-between cursor-pointer transition-colors",children:[o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-bold text-slate-800 dark:text-slate-200",children:d.title}),o.jsxs("div",{className:"text-[10px] text-slate-400",children:[d.category," • ",d.estimatedTime]})]}),o.jsx(Bt,{className:"w-4 h-4 text-[#0c4da2] dark:text-blue-400"})]},d.id))})]})]})]})},uC=()=>{const[t,e]=ae.useState(Il()),[n,i]=ae.useState("home"),[r,s]=ae.useState("exp-fcfs"),[a,l]=ae.useState("all"),[c,d]=ae.useState(!1),[u,p]=ae.useState(t.theme||"dark");ae.useEffect(()=>{const v=document.documentElement;u==="dark"?v.classList.add("dark"):v.classList.remove("dark")},[u]),ae.useEffect(()=>{const v=A=>{(A.ctrlKey||A.metaKey)&&A.key.toLowerCase()==="k"&&(A.preventDefault(),d(M=>!M))};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[]);const h=()=>{const v=u==="dark"?"light":"dark";p(v);const A={...t,theme:v};e(A),Ll(A)},m=v=>{l(v),i("lab"),window.scrollTo({top:0,behavior:"smooth"})},g=v=>{s(v),i("experiment"),window.scrollTo({top:0,behavior:"smooth"})},b=()=>{n==="experiment"?i("lab"):n!=="home"&&i("home"),window.scrollTo({top:0,behavior:"smooth"})},x=v=>{const A=Lb(v,50);e(A)},f=v=>{const A=Db(v);e(A)},_=(v,A)=>{const M=new Set(t.completedChallenges);M.add(v);const w={...t,completedChallenges:Array.from(M),xp:t.xp+A};e(w),Ll(w)},y=()=>{localStorage.removeItem("srmist_virtual_os_lab_progress_v1");const v=Il();e(v)};return o.jsxs("div",{className:"relative min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-[#0a0d14] text-slate-900 dark:text-slate-100 transition-colors duration-200",children:[o.jsx(yS,{}),o.jsx(gS,{activePage:n,setActivePage:v=>{i(v),window.scrollTo({top:0,behavior:"smooth"})},progress:t,onOpenCommandPalette:()=>d(!0),toggleTheme:h,theme:u}),o.jsxs("main",{className:"relative z-10 flex-1 w-full px-6 sm:px-10 lg:px-16 py-6",children:[n==="home"&&o.jsx(P2,{onNavigate:(v,A)=>{A&&l(A),i(v),window.scrollTo({top:0,behavior:"smooth"})},onSelectModule:m,onSelectExperiment:g}),n==="lab"&&o.jsx(I2,{onSelectExperiment:g,bookmarkedIds:t.bookmarkedExperiments,onToggleBookmark:f,completedExperimentIds:t.completedExperiments,onMarkCompleted:x,initialModuleFilter:a,onBack:b}),n==="experiment"&&o.jsx(iC,{experimentId:r,onBack:b,isCompleted:t.completedExperiments.includes(r),onMarkCompleted:x,isBookmarked:t.bookmarkedExperiments.includes(r),onToggleBookmark:f}),n==="practice"&&o.jsx(sC,{onBack:b}),n==="challenges"&&o.jsx(lC,{completedChallenges:t.completedChallenges,onCompleteChallenge:_,onBack:b}),n==="terminal"&&o.jsx(cC,{onBack:b}),n==="progress"&&o.jsx(dC,{progress:t,onSelectExperiment:g,onResetProgress:y,onBack:b})]}),o.jsx(vS,{}),o.jsx(_S,{isOpen:c,onClose:()=>d(!1),onSelectExperiment:g,onSelectModule:m})]})};wd.createRoot(document.getElementById("root")).render(o.jsx(Hl.StrictMode,{children:o.jsx(uC,{})}));
