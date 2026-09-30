(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();var Jl={exports:{}},Mr={},Zl={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gn=Symbol.for("react.element"),Uu=Symbol.for("react.portal"),Hu=Symbol.for("react.fragment"),Wu=Symbol.for("react.strict_mode"),Vu=Symbol.for("react.profiler"),qu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),$u=Symbol.for("react.forward_ref"),Qu=Symbol.for("react.suspense"),Yu=Symbol.for("react.memo"),Xu=Symbol.for("react.lazy"),Mo=Symbol.iterator;function Ku(e){return e===null||typeof e!="object"?null:(e=Mo&&e[Mo]||e["@@iterator"],typeof e=="function"?e:null)}var ed={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},td=Object.assign,ad={};function Ea(e,t,a){this.props=e,this.context=t,this.refs=ad,this.updater=a||ed}Ea.prototype.isReactComponent={};Ea.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ea.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nd(){}nd.prototype=Ea.prototype;function Cs(e,t,a){this.props=e,this.context=t,this.refs=ad,this.updater=a||ed}var Ts=Cs.prototype=new nd;Ts.constructor=Cs;td(Ts,Ea.prototype);Ts.isPureReactComponent=!0;var Lo=Array.isArray,rd=Object.prototype.hasOwnProperty,Rs={current:null},id={key:!0,ref:!0,__self:!0,__source:!0};function sd(e,t,a){var n,r={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)rd.call(t,n)&&!id.hasOwnProperty(n)&&(r[n]=t[n]);var l=arguments.length-2;if(l===1)r.children=a;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];r.children=d}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)r[n]===void 0&&(r[n]=l[n]);return{$$typeof:gn,type:e,key:i,ref:s,props:r,_owner:Rs.current}}function Ju(e,t){return{$$typeof:gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function As(e){return typeof e=="object"&&e!==null&&e.$$typeof===gn}function Zu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Do=/\/+/g;function ti(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zu(""+e.key):t.toString(36)}function qn(e,t,a,n,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case gn:case Uu:s=!0}}if(s)return s=e,r=r(s),e=n===""?"."+ti(s,0):n,Lo(r)?(a="",e!=null&&(a=e.replace(Do,"$&/")+"/"),qn(r,t,a,"",function(c){return c})):r!=null&&(As(r)&&(r=Ju(r,a+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Do,"$&/")+"/")+e)),t.push(r)),1;if(s=0,n=n===""?".":n+":",Lo(e))for(var l=0;l<e.length;l++){i=e[l];var d=n+ti(i,l);s+=qn(i,t,a,d,r)}else if(d=Ku(e),typeof d=="function")for(e=d.call(e),l=0;!(i=e.next()).done;)i=i.value,d=n+ti(i,l++),s+=qn(i,t,a,d,r);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Tn(e,t,a){if(e==null)return e;var n=[],r=0;return qn(e,n,"","",function(i){return t.call(a,i,r++)}),n}function ep(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Gn={transition:null},tp={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Gn,ReactCurrentOwner:Rs};function od(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Tn,forEach:function(e,t,a){Tn(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Tn(e,function(){t++}),t},toArray:function(e){return Tn(e,function(t){return t})||[]},only:function(e){if(!As(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Ea;D.Fragment=Hu;D.Profiler=Vu;D.PureComponent=Cs;D.StrictMode=Wu;D.Suspense=Qu;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tp;D.act=od;D.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=td({},e.props),r=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Rs.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)rd.call(t,d)&&!id.hasOwnProperty(d)&&(n[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)n.children=a;else if(1<d){l=Array(d);for(var c=0;c<d;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:gn,type:e.type,key:r,ref:i,props:n,_owner:s}};D.createContext=function(e){return e={$$typeof:Gu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qu,_context:e},e.Consumer=e};D.createElement=sd;D.createFactory=function(e){var t=sd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:$u,render:e}};D.isValidElement=As;D.lazy=function(e){return{$$typeof:Xu,_payload:{_status:-1,_result:e},_init:ep}};D.memo=function(e,t){return{$$typeof:Yu,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Gn.transition;Gn.transition={};try{e()}finally{Gn.transition=t}};D.unstable_act=od;D.useCallback=function(e,t){return pe.current.useCallback(e,t)};D.useContext=function(e){return pe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};D.useEffect=function(e,t){return pe.current.useEffect(e,t)};D.useId=function(){return pe.current.useId()};D.useImperativeHandle=function(e,t,a){return pe.current.useImperativeHandle(e,t,a)};D.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return pe.current.useMemo(e,t)};D.useReducer=function(e,t,a){return pe.current.useReducer(e,t,a)};D.useRef=function(e){return pe.current.useRef(e)};D.useState=function(e){return pe.current.useState(e)};D.useSyncExternalStore=function(e,t,a){return pe.current.useSyncExternalStore(e,t,a)};D.useTransition=function(){return pe.current.useTransition()};D.version="18.3.1";Zl.exports=D;var y=Zl.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=y,np=Symbol.for("react.element"),rp=Symbol.for("react.fragment"),ip=Object.prototype.hasOwnProperty,sp=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,op={key:!0,ref:!0,__self:!0,__source:!0};function ld(e,t,a){var n,r={},i=null,s=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)ip.call(t,n)&&!op.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)r[n]===void 0&&(r[n]=t[n]);return{$$typeof:np,type:e,key:i,ref:s,props:r,_owner:sp.current}}Mr.Fragment=rp;Mr.jsx=ld;Mr.jsxs=ld;Jl.exports=Mr;var o=Jl.exports,dd={exports:{}},Ee={},cd={exports:{}},ud={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,P){var L=R.length;R.push(P);e:for(;0<L;){var Q=L-1>>>1,Z=R[Q];if(0<r(Z,P))R[Q]=P,R[L]=Z,L=Q;else break e}}function a(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var P=R[0],L=R.pop();if(L!==P){R[0]=L;e:for(var Q=0,Z=R.length,kn=Z>>>1;Q<kn;){var Mt=2*(Q+1)-1,ei=R[Mt],Lt=Mt+1,Cn=R[Lt];if(0>r(ei,L))Lt<Z&&0>r(Cn,ei)?(R[Q]=Cn,R[Lt]=L,Q=Lt):(R[Q]=ei,R[Mt]=L,Q=Mt);else if(Lt<Z&&0>r(Cn,L))R[Q]=Cn,R[Lt]=L,Q=Lt;else break e}}return P}function r(R,P){var L=R.sortIndex-P.sortIndex;return L!==0?L:R.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var d=[],c=[],m=1,f=null,g=3,v=!1,w=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var P=a(c);P!==null;){if(P.callback===null)n(c);else if(P.startTime<=R)n(c),P.sortIndex=P.expirationTime,t(d,P);else break;P=a(c)}}function _(R){if(x=!1,h(R),!w)if(a(d)!==null)w=!0,Jr(S);else{var P=a(c);P!==null&&Zr(_,P.startTime-R)}}function S(R,P){w=!1,x&&(x=!1,p(A),A=-1),v=!0;var L=g;try{for(h(P),f=a(d);f!==null&&(!(f.expirationTime>P)||R&&!xe());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,g=f.priorityLevel;var Z=Q(f.expirationTime<=P);P=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===a(d)&&n(d),h(P)}else n(d);f=a(d)}if(f!==null)var kn=!0;else{var Mt=a(c);Mt!==null&&Zr(_,Mt.startTime-P),kn=!1}return kn}finally{f=null,g=L,v=!1}}var k=!1,C=null,A=-1,F=5,M=-1;function xe(){return!(e.unstable_now()-M<F)}function Pt(){if(C!==null){var R=e.unstable_now();M=R;var P=!0;try{P=C(!0,R)}finally{P?lt():(k=!1,C=null)}}else k=!1}var lt;if(typeof u=="function")lt=function(){u(Pt)};else if(typeof MessageChannel<"u"){var Aa=new MessageChannel,Ue=Aa.port2;Aa.port1.onmessage=Pt,lt=function(){Ue.postMessage(null)}}else lt=function(){E(Pt,0)};function Jr(R){C=R,k||(k=!0,lt())}function Zr(R,P){A=E(function(){R(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Jr(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return a(d)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var L=g;g=P;try{return R()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,P){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=g;g=R;try{return P()}finally{g=L}},e.unstable_scheduleCallback=function(R,P,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,R){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,R={id:m++,callback:P,priorityLevel:R,startTime:L,expirationTime:Z,sortIndex:-1},L>Q?(R.sortIndex=L,t(c,R),a(d)===null&&R===a(c)&&(x?(p(A),A=-1):x=!0,Zr(_,L-Q))):(R.sortIndex=Z,t(d,R),w||v||(w=!0,Jr(S))),R},e.unstable_shouldYield=xe,e.unstable_wrapCallback=function(R){var P=g;return function(){var L=g;g=P;try{return R.apply(this,arguments)}finally{g=L}}}})(ud);cd.exports=ud;var lp=cd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp=y,Se=lp;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pd=new Set,Ja={};function $t(e,t){fa(e,t),fa(e+"Capture",t)}function fa(e,t){for(Ja[e]=t,e=0;e<t.length;e++)pd.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pi=Object.prototype.hasOwnProperty,cp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Io={},jo={};function up(e){return Pi.call(jo,e)?!0:Pi.call(Io,e)?!1:cp.test(e)?jo[e]=!0:(Io[e]=!0,!1)}function pp(e,t,a,n){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mp(e,t,a,n){if(t===null||typeof t>"u"||pp(e,t,a,n))return!0;if(n)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,a,n,r,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ns=/[\-:]([a-z])/g;function Ps(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ns,Ps);re[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ns,Ps);re[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ns,Ps);re[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ms(e,t,a,n){var r=re.hasOwnProperty(t)?re[t]:null;(r!==null?r.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mp(t,a,r,n)&&(a=null),n||r===null?up(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):r.mustUseProperty?e[r.propertyName]=a===null?r.type===3?!1:"":a:(t=r.attributeName,n=r.attributeNamespace,a===null?e.removeAttribute(t):(r=r.type,a=r===3||r===4&&a===!0?"":""+a,n?e.setAttributeNS(n,t,a):e.setAttribute(t,a))))}var ot=dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rn=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),Ls=Symbol.for("react.strict_mode"),Mi=Symbol.for("react.profiler"),md=Symbol.for("react.provider"),fd=Symbol.for("react.context"),Ds=Symbol.for("react.forward_ref"),Li=Symbol.for("react.suspense"),Di=Symbol.for("react.suspense_list"),Is=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),hd=Symbol.for("react.offscreen"),Fo=Symbol.iterator;function Na(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,ai;function za(e){if(ai===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ai=t&&t[1]||""}return`
`+ai+e}var ni=!1;function ri(e,t){if(!e||ni)return"";ni=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=n.stack.split(`
`),s=r.length-1,l=i.length-1;1<=s&&0<=l&&r[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(r[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||r[s]!==i[l]){var d=`
`+r[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=l);break}}}finally{ni=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?za(e):""}function fp(e){switch(e.tag){case 5:return za(e.type);case 16:return za("Lazy");case 13:return za("Suspense");case 19:return za("SuspenseList");case 0:case 2:case 15:return e=ri(e.type,!1),e;case 11:return e=ri(e.type.render,!1),e;case 1:return e=ri(e.type,!0),e;default:return""}}function Ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Xt:return"Portal";case Mi:return"Profiler";case Ls:return"StrictMode";case Li:return"Suspense";case Di:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fd:return(e.displayName||"Context")+".Consumer";case md:return(e._context.displayName||"Context")+".Provider";case Ds:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Is:return t=e.displayName||null,t!==null?t:Ii(e.type)||"Memo";case ct:t=e._payload,e=e._init;try{return Ii(e(t))}catch{}}return null}function hp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ii(t);case 8:return t===Ls?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gp(e){var t=gd(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function An(e){e._valueTracker||(e._valueTracker=gp(e))}function yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=gd(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ji(e,t){var a=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Oo(e,t){var a=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;a=Ct(t.value!=null?t.value:a),e._wrapperState={initialChecked:n,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vd(e,t){t=t.checked,t!=null&&Ms(e,"checked",t,!1)}function Fi(e,t){vd(e,t);var a=Ct(t.value),n=t.type;if(a!=null)n==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oi(e,t.type,a):t.hasOwnProperty("defaultValue")&&Oi(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zo(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Oi(e,t,a){(t!=="number"||ir(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var Ba=Array.isArray;function la(e,t,a,n){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Ct(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function zi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bo(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(b(92));if(Ba(a)){if(1<a.length)throw Error(b(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:Ct(a)}}function xd(e,t){var a=Ct(t.value),n=Ct(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),n!=null&&(e.defaultValue=""+n)}function Uo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nn,_d=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,n,r){MSApp.execUnsafeLocalFunction(function(){return e(t,a,n,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nn=Nn||document.createElement("div"),Nn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Za(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yp=["Webkit","ms","Moz","O"];Object.keys(Wa).forEach(function(e){yp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wa[t]=Wa[e]})});function bd(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||Wa.hasOwnProperty(e)&&Wa[e]?(""+t).trim():t+"px"}function Sd(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var n=a.indexOf("--")===0,r=bd(a,t[a],n);a==="float"&&(a="cssFloat"),n?e.setProperty(a,r):e[a]=r}}var vp=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ui(e,t){if(t){if(vp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function Hi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=null;function js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vi=null,da=null,ca=null;function Ho(e){if(e=xn(e)){if(typeof Vi!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Fr(t),Vi(e.stateNode,e.type,t))}}function Ed(e){da?ca?ca.push(e):ca=[e]:da=e}function kd(){if(da){var e=da,t=ca;if(ca=da=null,Ho(e),t)for(e=0;e<t.length;e++)Ho(t[e])}}function Cd(e,t){return e(t)}function Td(){}var ii=!1;function Rd(e,t,a){if(ii)return e(t,a);ii=!0;try{return Cd(e,t,a)}finally{ii=!1,(da!==null||ca!==null)&&(Td(),kd())}}function en(e,t){var a=e.stateNode;if(a===null)return null;var n=Fr(a);if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(b(231,t,typeof a));return a}var qi=!1;if(at)try{var Pa={};Object.defineProperty(Pa,"passive",{get:function(){qi=!0}}),window.addEventListener("test",Pa,Pa),window.removeEventListener("test",Pa,Pa)}catch{qi=!1}function xp(e,t,a,n,r,i,s,l,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(a,c)}catch(m){this.onError(m)}}var Va=!1,sr=null,or=!1,Gi=null,wp={onError:function(e){Va=!0,sr=e}};function _p(e,t,a,n,r,i,s,l,d){Va=!1,sr=null,xp.apply(wp,arguments)}function bp(e,t,a,n,r,i,s,l,d){if(_p.apply(this,arguments),Va){if(Va){var c=sr;Va=!1,sr=null}else throw Error(b(198));or||(or=!0,Gi=c)}}function Qt(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Ad(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wo(e){if(Qt(e)!==e)throw Error(b(188))}function Sp(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(b(188));return t!==e?null:e}for(var a=e,n=t;;){var r=a.return;if(r===null)break;var i=r.alternate;if(i===null){if(n=r.return,n!==null){a=n;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===a)return Wo(r),e;if(i===n)return Wo(r),t;i=i.sibling}throw Error(b(188))}if(a.return!==n.return)a=r,n=i;else{for(var s=!1,l=r.child;l;){if(l===a){s=!0,a=r,n=i;break}if(l===n){s=!0,n=r,a=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===a){s=!0,a=i,n=r;break}if(l===n){s=!0,n=i,a=r;break}l=l.sibling}if(!s)throw Error(b(189))}}if(a.alternate!==n)throw Error(b(190))}if(a.tag!==3)throw Error(b(188));return a.stateNode.current===a?e:t}function Nd(e){return e=Sp(e),e!==null?Pd(e):null}function Pd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pd(e);if(t!==null)return t;e=e.sibling}return null}var Md=Se.unstable_scheduleCallback,Vo=Se.unstable_cancelCallback,Ep=Se.unstable_shouldYield,kp=Se.unstable_requestPaint,Y=Se.unstable_now,Cp=Se.unstable_getCurrentPriorityLevel,Fs=Se.unstable_ImmediatePriority,Ld=Se.unstable_UserBlockingPriority,lr=Se.unstable_NormalPriority,Tp=Se.unstable_LowPriority,Dd=Se.unstable_IdlePriority,Lr=null,qe=null;function Rp(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Lr,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Pp,Ap=Math.log,Np=Math.LN2;function Pp(e){return e>>>=0,e===0?32:31-(Ap(e)/Np|0)|0}var Pn=64,Mn=4194304;function Ua(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dr(e,t){var a=e.pendingLanes;if(a===0)return 0;var n=0,r=e.suspendedLanes,i=e.pingedLanes,s=a&268435455;if(s!==0){var l=s&~r;l!==0?n=Ua(l):(i&=s,i!==0&&(n=Ua(i)))}else s=a&~r,s!==0?n=Ua(s):i!==0&&(n=Ua(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&r)&&(r=n&-n,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if(n&4&&(n|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)a=31-Fe(t),r=1<<a,n|=e[a],t&=~r;return n}function Mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lp(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Fe(i),l=1<<s,d=r[s];d===-1?(!(l&a)||l&n)&&(r[s]=Mp(l,t)):d<=t&&(e.expiredLanes|=l),i&=~l}}function $i(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Id(){var e=Pn;return Pn<<=1,!(Pn&4194240)&&(Pn=64),e}function si(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function yn(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=a}function Dp(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<a;){var r=31-Fe(a),i=1<<r;t[r]=0,n[r]=-1,e[r]=-1,a&=~i}}function Os(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Fe(a),r=1<<n;r&t|e[n]&t&&(e[n]|=t),a&=~r}}var j=0;function jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fd,zs,Od,zd,Bd,Qi=!1,Ln=[],vt=null,xt=null,wt=null,tn=new Map,an=new Map,pt=[],Ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qo(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":tn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":an.delete(t.pointerId)}}function Ma(e,t,a,n,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[r]},t!==null&&(t=xn(t),t!==null&&zs(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function jp(e,t,a,n,r){switch(t){case"focusin":return vt=Ma(vt,e,t,a,n,r),!0;case"dragenter":return xt=Ma(xt,e,t,a,n,r),!0;case"mouseover":return wt=Ma(wt,e,t,a,n,r),!0;case"pointerover":var i=r.pointerId;return tn.set(i,Ma(tn.get(i)||null,e,t,a,n,r)),!0;case"gotpointercapture":return i=r.pointerId,an.set(i,Ma(an.get(i)||null,e,t,a,n,r)),!0}return!1}function Ud(e){var t=Ft(e.target);if(t!==null){var a=Qt(t);if(a!==null){if(t=a.tag,t===13){if(t=Ad(a),t!==null){e.blockedOn=t,Bd(e.priority,function(){Od(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $n(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Yi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Wi=n,a.target.dispatchEvent(n),Wi=null}else return t=xn(a),t!==null&&zs(t),e.blockedOn=a,!1;t.shift()}return!0}function Go(e,t,a){$n(e)&&a.delete(t)}function Fp(){Qi=!1,vt!==null&&$n(vt)&&(vt=null),xt!==null&&$n(xt)&&(xt=null),wt!==null&&$n(wt)&&(wt=null),tn.forEach(Go),an.forEach(Go)}function La(e,t){e.blockedOn===t&&(e.blockedOn=null,Qi||(Qi=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Fp)))}function nn(e){function t(r){return La(r,e)}if(0<Ln.length){La(Ln[0],e);for(var a=1;a<Ln.length;a++){var n=Ln[a];n.blockedOn===e&&(n.blockedOn=null)}}for(vt!==null&&La(vt,e),xt!==null&&La(xt,e),wt!==null&&La(wt,e),tn.forEach(t),an.forEach(t),a=0;a<pt.length;a++)n=pt[a],n.blockedOn===e&&(n.blockedOn=null);for(;0<pt.length&&(a=pt[0],a.blockedOn===null);)Ud(a),a.blockedOn===null&&pt.shift()}var ua=ot.ReactCurrentBatchConfig,cr=!0;function Op(e,t,a,n){var r=j,i=ua.transition;ua.transition=null;try{j=1,Bs(e,t,a,n)}finally{j=r,ua.transition=i}}function zp(e,t,a,n){var r=j,i=ua.transition;ua.transition=null;try{j=4,Bs(e,t,a,n)}finally{j=r,ua.transition=i}}function Bs(e,t,a,n){if(cr){var r=Yi(e,t,a,n);if(r===null)gi(e,t,n,ur,a),qo(e,n);else if(jp(r,e,t,a,n))n.stopPropagation();else if(qo(e,n),t&4&&-1<Ip.indexOf(e)){for(;r!==null;){var i=xn(r);if(i!==null&&Fd(i),i=Yi(e,t,a,n),i===null&&gi(e,t,n,ur,a),i===r)break;r=i}r!==null&&n.stopPropagation()}else gi(e,t,n,null,a)}}var ur=null;function Yi(e,t,a,n){if(ur=null,e=js(n),e=Ft(e),e!==null)if(t=Qt(e),t===null)e=null;else if(a=t.tag,a===13){if(e=Ad(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ur=e,null}function Hd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cp()){case Fs:return 1;case Ld:return 4;case lr:case Tp:return 16;case Dd:return 536870912;default:return 16}default:return 16}}var ht=null,Us=null,Qn=null;function Wd(){if(Qn)return Qn;var e,t=Us,a=t.length,n,r="value"in ht?ht.value:ht.textContent,i=r.length;for(e=0;e<a&&t[e]===r[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===r[i-n];n++);return Qn=r.slice(e,1<n?1-n:void 0)}function Yn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function $o(){return!1}function ke(e){function t(a,n,r,i,s){this._reactName=a,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(a=e[l],this[l]=a?a(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Dn:$o,this.isPropagationStopped=$o,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=ke(ka),vn=G({},ka,{view:0,detail:0}),Bp=ke(vn),oi,li,Da,Dr=G({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Da&&(Da&&e.type==="mousemove"?(oi=e.screenX-Da.screenX,li=e.screenY-Da.screenY):li=oi=0,Da=e),oi)},movementY:function(e){return"movementY"in e?e.movementY:li}}),Qo=ke(Dr),Up=G({},Dr,{dataTransfer:0}),Hp=ke(Up),Wp=G({},vn,{relatedTarget:0}),di=ke(Wp),Vp=G({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),qp=ke(Vp),Gp=G({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$p=ke(Gp),Qp=G({},ka,{data:0}),Yo=ke(Qp),Yp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kp[e])?!!t[e]:!1}function Ws(){return Jp}var Zp=G({},vn,{key:function(e){if(e.key){var t=Yp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(e){return e.type==="keypress"?Yn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),em=ke(Zp),tm=G({},Dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xo=ke(tm),am=G({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),nm=ke(am),rm=G({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),im=ke(rm),sm=G({},Dr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),om=ke(sm),lm=[9,13,27,32],Vs=at&&"CompositionEvent"in window,qa=null;at&&"documentMode"in document&&(qa=document.documentMode);var dm=at&&"TextEvent"in window&&!qa,Vd=at&&(!Vs||qa&&8<qa&&11>=qa),Ko=" ",Jo=!1;function qd(e,t){switch(e){case"keyup":return lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function cm(e,t){switch(e){case"compositionend":return Gd(t);case"keypress":return t.which!==32?null:(Jo=!0,Ko);case"textInput":return e=t.data,e===Ko&&Jo?null:e;default:return null}}function um(e,t){if(Jt)return e==="compositionend"||!Vs&&qd(e,t)?(e=Wd(),Qn=Us=ht=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vd&&t.locale!=="ko"?null:t.data;default:return null}}var pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pm[e.type]:t==="textarea"}function $d(e,t,a,n){Ed(n),t=pr(t,"onChange"),0<t.length&&(a=new Hs("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Ga=null,rn=null;function mm(e){rc(e,0)}function Ir(e){var t=ta(e);if(yd(t))return e}function fm(e,t){if(e==="change")return t}var Qd=!1;if(at){var ci;if(at){var ui="oninput"in document;if(!ui){var el=document.createElement("div");el.setAttribute("oninput","return;"),ui=typeof el.oninput=="function"}ci=ui}else ci=!1;Qd=ci&&(!document.documentMode||9<document.documentMode)}function tl(){Ga&&(Ga.detachEvent("onpropertychange",Yd),rn=Ga=null)}function Yd(e){if(e.propertyName==="value"&&Ir(rn)){var t=[];$d(t,rn,e,js(e)),Rd(mm,t)}}function hm(e,t,a){e==="focusin"?(tl(),Ga=t,rn=a,Ga.attachEvent("onpropertychange",Yd)):e==="focusout"&&tl()}function gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ir(rn)}function ym(e,t){if(e==="click")return Ir(t)}function vm(e,t){if(e==="input"||e==="change")return Ir(t)}function xm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:xm;function sn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var r=a[n];if(!Pi.call(t,r)||!Be(e[r],t[r]))return!1}return!0}function al(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nl(e,t){var a=al(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=al(a)}}function Xd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kd(){for(var e=window,t=ir();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ir(e.document)}return t}function qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wm(e){var t=Kd(),a=e.focusedElem,n=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&Xd(a.ownerDocument.documentElement,a)){if(n!==null&&qs(a)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=a.textContent.length,i=Math.min(n.start,r);n=n.end===void 0?i:Math.min(n.end,r),!e.extend&&i>n&&(r=n,n=i,i=r),r=nl(a,i);var s=nl(a,n);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _m=at&&"documentMode"in document&&11>=document.documentMode,Zt=null,Xi=null,$a=null,Ki=!1;function rl(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ki||Zt==null||Zt!==ir(n)||(n=Zt,"selectionStart"in n&&qs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),$a&&sn($a,n)||($a=n,n=pr(Xi,"onSelect"),0<n.length&&(t=new Hs("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Zt)))}function In(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ea={animationend:In("Animation","AnimationEnd"),animationiteration:In("Animation","AnimationIteration"),animationstart:In("Animation","AnimationStart"),transitionend:In("Transition","TransitionEnd")},pi={},Jd={};at&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function jr(e){if(pi[e])return pi[e];if(!ea[e])return e;var t=ea[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Jd)return pi[e]=t[a];return e}var Zd=jr("animationend"),ec=jr("animationiteration"),tc=jr("animationstart"),ac=jr("transitionend"),nc=new Map,il="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){nc.set(e,t),$t(t,[e])}for(var mi=0;mi<il.length;mi++){var fi=il[mi],bm=fi.toLowerCase(),Sm=fi[0].toUpperCase()+fi.slice(1);Rt(bm,"on"+Sm)}Rt(Zd,"onAnimationEnd");Rt(ec,"onAnimationIteration");Rt(tc,"onAnimationStart");Rt("dblclick","onDoubleClick");Rt("focusin","onFocus");Rt("focusout","onBlur");Rt(ac,"onTransitionEnd");fa("onMouseEnter",["mouseout","mouseover"]);fa("onMouseLeave",["mouseout","mouseover"]);fa("onPointerEnter",["pointerout","pointerover"]);fa("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Em=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));function sl(e,t,a){var n=e.type||"unknown-event";e.currentTarget=a,bp(n,t,void 0,e),e.currentTarget=null}function rc(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],r=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],d=l.instance,c=l.currentTarget;if(l=l.listener,d!==i&&r.isPropagationStopped())break e;sl(r,l,c),i=d}else for(s=0;s<n.length;s++){if(l=n[s],d=l.instance,c=l.currentTarget,l=l.listener,d!==i&&r.isPropagationStopped())break e;sl(r,l,c),i=d}}}if(or)throw e=Gi,or=!1,Gi=null,e}function z(e,t){var a=t[as];a===void 0&&(a=t[as]=new Set);var n=e+"__bubble";a.has(n)||(ic(t,e,2,!1),a.add(n))}function hi(e,t,a){var n=0;t&&(n|=4),ic(a,e,n,t)}var jn="_reactListening"+Math.random().toString(36).slice(2);function on(e){if(!e[jn]){e[jn]=!0,pd.forEach(function(a){a!=="selectionchange"&&(Em.has(a)||hi(a,!1,e),hi(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jn]||(t[jn]=!0,hi("selectionchange",!1,t))}}function ic(e,t,a,n){switch(Hd(t)){case 1:var r=Op;break;case 4:r=zp;break;default:r=Bs}a=r.bind(null,t,a,e),r=void 0,!qi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function gi(e,t,a,n,r){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(s===4)for(s=n.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;s=s.return}for(;l!==null;){if(s=Ft(l),s===null)return;if(d=s.tag,d===5||d===6){n=i=s;continue e}l=l.parentNode}}n=n.return}Rd(function(){var c=i,m=js(a),f=[];e:{var g=nc.get(e);if(g!==void 0){var v=Hs,w=e;switch(e){case"keypress":if(Yn(a)===0)break e;case"keydown":case"keyup":v=em;break;case"focusin":w="focus",v=di;break;case"focusout":w="blur",v=di;break;case"beforeblur":case"afterblur":v=di;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=nm;break;case Zd:case ec:case tc:v=qp;break;case ac:v=im;break;case"scroll":v=Bp;break;case"wheel":v=om;break;case"copy":case"cut":case"paste":v=$p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xo}var x=(t&4)!==0,E=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var u=c,h;u!==null;){h=u;var _=h.stateNode;if(h.tag===5&&_!==null&&(h=_,p!==null&&(_=en(u,p),_!=null&&x.push(ln(u,_,h)))),E)break;u=u.return}0<x.length&&(g=new v(g,w,null,a,m),f.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&a!==Wi&&(w=a.relatedTarget||a.fromElement)&&(Ft(w)||w[nt]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(w=a.relatedTarget||a.toElement,v=c,w=w?Ft(w):null,w!==null&&(E=Qt(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(x=Qo,_="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=Xo,_="onPointerLeave",p="onPointerEnter",u="pointer"),E=v==null?g:ta(v),h=w==null?g:ta(w),g=new x(_,u+"leave",v,a,m),g.target=E,g.relatedTarget=h,_=null,Ft(m)===c&&(x=new x(p,u+"enter",w,a,m),x.target=h,x.relatedTarget=E,_=x),E=_,v&&w)t:{for(x=v,p=w,u=0,h=x;h;h=Yt(h))u++;for(h=0,_=p;_;_=Yt(_))h++;for(;0<u-h;)x=Yt(x),u--;for(;0<h-u;)p=Yt(p),h--;for(;u--;){if(x===p||p!==null&&x===p.alternate)break t;x=Yt(x),p=Yt(p)}x=null}else x=null;v!==null&&ol(f,g,v,x,!1),w!==null&&E!==null&&ol(f,E,w,x,!0)}}e:{if(g=c?ta(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=fm;else if(Zo(g))if(Qd)S=vm;else{S=gm;var k=hm}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=ym);if(S&&(S=S(e,c))){$d(f,S,a,m);break e}k&&k(e,g,c),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&Oi(g,"number",g.value)}switch(k=c?ta(c):window,e){case"focusin":(Zo(k)||k.contentEditable==="true")&&(Zt=k,Xi=c,$a=null);break;case"focusout":$a=Xi=Zt=null;break;case"mousedown":Ki=!0;break;case"contextmenu":case"mouseup":case"dragend":Ki=!1,rl(f,a,m);break;case"selectionchange":if(_m)break;case"keydown":case"keyup":rl(f,a,m)}var C;if(Vs)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Jt?qd(e,a)&&(A="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(A="onCompositionStart");A&&(Vd&&a.locale!=="ko"&&(Jt||A!=="onCompositionStart"?A==="onCompositionEnd"&&Jt&&(C=Wd()):(ht=m,Us="value"in ht?ht.value:ht.textContent,Jt=!0)),k=pr(c,A),0<k.length&&(A=new Yo(A,e,null,a,m),f.push({event:A,listeners:k}),C?A.data=C:(C=Gd(a),C!==null&&(A.data=C)))),(C=dm?cm(e,a):um(e,a))&&(c=pr(c,"onBeforeInput"),0<c.length&&(m=new Yo("onBeforeInput","beforeinput",null,a,m),f.push({event:m,listeners:c}),m.data=C))}rc(f,t)})}function ln(e,t,a){return{instance:e,listener:t,currentTarget:a}}function pr(e,t){for(var a=t+"Capture",n=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=en(e,a),i!=null&&n.unshift(ln(e,i,r)),i=en(e,t),i!=null&&n.push(ln(e,i,r))),e=e.return}return n}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ol(e,t,a,n,r){for(var i=t._reactName,s=[];a!==null&&a!==n;){var l=a,d=l.alternate,c=l.stateNode;if(d!==null&&d===n)break;l.tag===5&&c!==null&&(l=c,r?(d=en(a,i),d!=null&&s.unshift(ln(a,d,l))):r||(d=en(a,i),d!=null&&s.push(ln(a,d,l)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var km=/\r\n?/g,Cm=/\u0000|\uFFFD/g;function ll(e){return(typeof e=="string"?e:""+e).replace(km,`
`).replace(Cm,"")}function Fn(e,t,a){if(t=ll(t),ll(e)!==t&&a)throw Error(b(425))}function mr(){}var Ji=null,Zi=null;function es(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ts=typeof setTimeout=="function"?setTimeout:void 0,Tm=typeof clearTimeout=="function"?clearTimeout:void 0,dl=typeof Promise=="function"?Promise:void 0,Rm=typeof queueMicrotask=="function"?queueMicrotask:typeof dl<"u"?function(e){return dl.resolve(null).then(e).catch(Am)}:ts;function Am(e){setTimeout(function(){throw e})}function yi(e,t){var a=t,n=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(n===0){e.removeChild(r),nn(t);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=r}while(a);nn(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var Ca=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Ca,dn="__reactProps$"+Ca,nt="__reactContainer$"+Ca,as="__reactEvents$"+Ca,Nm="__reactListeners$"+Ca,Pm="__reactHandles$"+Ca;function Ft(e){var t=e[Ve];if(t)return t;for(var a=e.parentNode;a;){if(t=a[nt]||a[Ve]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=cl(e);e!==null;){if(a=e[Ve])return a;e=cl(e)}return t}e=a,a=e.parentNode}return null}function xn(e){return e=e[Ve]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ta(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Fr(e){return e[dn]||null}var ns=[],aa=-1;function At(e){return{current:e}}function B(e){0>aa||(e.current=ns[aa],ns[aa]=null,aa--)}function O(e,t){aa++,ns[aa]=e.current,e.current=t}var Tt={},le=At(Tt),ge=At(!1),Ht=Tt;function ha(e,t){var a=e.type.contextTypes;if(!a)return Tt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in a)r[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function ye(e){return e=e.childContextTypes,e!=null}function fr(){B(ge),B(le)}function ul(e,t,a){if(le.current!==Tt)throw Error(b(168));O(le,t),O(ge,a)}function sc(e,t,a){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return a;n=n.getChildContext();for(var r in n)if(!(r in t))throw Error(b(108,hp(e)||"Unknown",r));return G({},a,n)}function hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,Ht=le.current,O(le,e),O(ge,ge.current),!0}function pl(e,t,a){var n=e.stateNode;if(!n)throw Error(b(169));a?(e=sc(e,t,Ht),n.__reactInternalMemoizedMergedChildContext=e,B(ge),B(le),O(le,e)):B(ge),O(ge,a)}var Ke=null,Or=!1,vi=!1;function oc(e){Ke===null?Ke=[e]:Ke.push(e)}function Mm(e){Or=!0,oc(e)}function Nt(){if(!vi&&Ke!==null){vi=!0;var e=0,t=j;try{var a=Ke;for(j=1;e<a.length;e++){var n=a[e];do n=n(!0);while(n!==null)}Ke=null,Or=!1}catch(r){throw Ke!==null&&(Ke=Ke.slice(e+1)),Md(Fs,Nt),r}finally{j=t,vi=!1}}return null}var na=[],ra=0,gr=null,yr=0,Ce=[],Te=0,Wt=null,Ze=1,et="";function Dt(e,t){na[ra++]=yr,na[ra++]=gr,gr=e,yr=t}function lc(e,t,a){Ce[Te++]=Ze,Ce[Te++]=et,Ce[Te++]=Wt,Wt=e;var n=Ze;e=et;var r=32-Fe(n)-1;n&=~(1<<r),a+=1;var i=32-Fe(t)+r;if(30<i){var s=r-r%5;i=(n&(1<<s)-1).toString(32),n>>=s,r-=s,Ze=1<<32-Fe(t)+r|a<<r|n,et=i+e}else Ze=1<<i|a<<r|n,et=e}function Gs(e){e.return!==null&&(Dt(e,1),lc(e,1,0))}function $s(e){for(;e===gr;)gr=na[--ra],na[ra]=null,yr=na[--ra],na[ra]=null;for(;e===Wt;)Wt=Ce[--Te],Ce[Te]=null,et=Ce[--Te],Ce[Te]=null,Ze=Ce[--Te],Ce[Te]=null}var be=null,_e=null,U=!1,je=null;function dc(e,t){var a=Re(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function ml(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,_e=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Wt!==null?{id:Ze,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=Re(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,be=e,_e=null,!0):!1;default:return!1}}function rs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function is(e){if(U){var t=_e;if(t){var a=t;if(!ml(e,t)){if(rs(e))throw Error(b(418));t=_t(a.nextSibling);var n=be;t&&ml(e,t)?dc(n,a):(e.flags=e.flags&-4097|2,U=!1,be=e)}}else{if(rs(e))throw Error(b(418));e.flags=e.flags&-4097|2,U=!1,be=e}}}function fl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function On(e){if(e!==be)return!1;if(!U)return fl(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!es(e.type,e.memoizedProps)),t&&(t=_e)){if(rs(e))throw cc(),Error(b(418));for(;t;)dc(e,t),t=_t(t.nextSibling)}if(fl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){_e=_t(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=be?_t(e.stateNode.nextSibling):null;return!0}function cc(){for(var e=_e;e;)e=_t(e.nextSibling)}function ga(){_e=be=null,U=!1}function Qs(e){je===null?je=[e]:je.push(e)}var Lm=ot.ReactCurrentBatchConfig;function Ia(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(b(309));var n=a.stateNode}if(!n)throw Error(b(147,e));var r=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=r.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(b(284));if(!a._owner)throw Error(b(290,e))}return e}function zn(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hl(e){var t=e._init;return t(e._payload)}function uc(e){function t(p,u){if(e){var h=p.deletions;h===null?(p.deletions=[u],p.flags|=16):h.push(u)}}function a(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function n(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function r(p,u){return p=kt(p,u),p.index=0,p.sibling=null,p}function i(p,u,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<u?(p.flags|=2,u):h):(p.flags|=2,u)):(p.flags|=1048576,u)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,u,h,_){return u===null||u.tag!==6?(u=ki(h,p.mode,_),u.return=p,u):(u=r(u,h),u.return=p,u)}function d(p,u,h,_){var S=h.type;return S===Kt?m(p,u,h.props.children,_,h.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ct&&hl(S)===u.type)?(_=r(u,h.props),_.ref=Ia(p,u,h),_.return=p,_):(_=ar(h.type,h.key,h.props,null,p.mode,_),_.ref=Ia(p,u,h),_.return=p,_)}function c(p,u,h,_){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=Ci(h,p.mode,_),u.return=p,u):(u=r(u,h.children||[]),u.return=p,u)}function m(p,u,h,_,S){return u===null||u.tag!==7?(u=Ut(h,p.mode,_,S),u.return=p,u):(u=r(u,h),u.return=p,u)}function f(p,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ki(""+u,p.mode,h),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Rn:return h=ar(u.type,u.key,u.props,null,p.mode,h),h.ref=Ia(p,null,u),h.return=p,h;case Xt:return u=Ci(u,p.mode,h),u.return=p,u;case ct:var _=u._init;return f(p,_(u._payload),h)}if(Ba(u)||Na(u))return u=Ut(u,p.mode,h,null),u.return=p,u;zn(p,u)}return null}function g(p,u,h,_){var S=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(p,u,""+h,_);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Rn:return h.key===S?d(p,u,h,_):null;case Xt:return h.key===S?c(p,u,h,_):null;case ct:return S=h._init,g(p,u,S(h._payload),_)}if(Ba(h)||Na(h))return S!==null?null:m(p,u,h,_,null);zn(p,h)}return null}function v(p,u,h,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(h)||null,l(u,p,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Rn:return p=p.get(_.key===null?h:_.key)||null,d(u,p,_,S);case Xt:return p=p.get(_.key===null?h:_.key)||null,c(u,p,_,S);case ct:var k=_._init;return v(p,u,h,k(_._payload),S)}if(Ba(_)||Na(_))return p=p.get(h)||null,m(u,p,_,S,null);zn(u,_)}return null}function w(p,u,h,_){for(var S=null,k=null,C=u,A=u=0,F=null;C!==null&&A<h.length;A++){C.index>A?(F=C,C=null):F=C.sibling;var M=g(p,C,h[A],_);if(M===null){C===null&&(C=F);break}e&&C&&M.alternate===null&&t(p,C),u=i(M,u,A),k===null?S=M:k.sibling=M,k=M,C=F}if(A===h.length)return a(p,C),U&&Dt(p,A),S;if(C===null){for(;A<h.length;A++)C=f(p,h[A],_),C!==null&&(u=i(C,u,A),k===null?S=C:k.sibling=C,k=C);return U&&Dt(p,A),S}for(C=n(p,C);A<h.length;A++)F=v(C,p,A,h[A],_),F!==null&&(e&&F.alternate!==null&&C.delete(F.key===null?A:F.key),u=i(F,u,A),k===null?S=F:k.sibling=F,k=F);return e&&C.forEach(function(xe){return t(p,xe)}),U&&Dt(p,A),S}function x(p,u,h,_){var S=Na(h);if(typeof S!="function")throw Error(b(150));if(h=S.call(h),h==null)throw Error(b(151));for(var k=S=null,C=u,A=u=0,F=null,M=h.next();C!==null&&!M.done;A++,M=h.next()){C.index>A?(F=C,C=null):F=C.sibling;var xe=g(p,C,M.value,_);if(xe===null){C===null&&(C=F);break}e&&C&&xe.alternate===null&&t(p,C),u=i(xe,u,A),k===null?S=xe:k.sibling=xe,k=xe,C=F}if(M.done)return a(p,C),U&&Dt(p,A),S;if(C===null){for(;!M.done;A++,M=h.next())M=f(p,M.value,_),M!==null&&(u=i(M,u,A),k===null?S=M:k.sibling=M,k=M);return U&&Dt(p,A),S}for(C=n(p,C);!M.done;A++,M=h.next())M=v(C,p,A,M.value,_),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?A:M.key),u=i(M,u,A),k===null?S=M:k.sibling=M,k=M);return e&&C.forEach(function(Pt){return t(p,Pt)}),U&&Dt(p,A),S}function E(p,u,h,_){if(typeof h=="object"&&h!==null&&h.type===Kt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Rn:e:{for(var S=h.key,k=u;k!==null;){if(k.key===S){if(S=h.type,S===Kt){if(k.tag===7){a(p,k.sibling),u=r(k,h.props.children),u.return=p,p=u;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ct&&hl(S)===k.type){a(p,k.sibling),u=r(k,h.props),u.ref=Ia(p,k,h),u.return=p,p=u;break e}a(p,k);break}else t(p,k);k=k.sibling}h.type===Kt?(u=Ut(h.props.children,p.mode,_,h.key),u.return=p,p=u):(_=ar(h.type,h.key,h.props,null,p.mode,_),_.ref=Ia(p,u,h),_.return=p,p=_)}return s(p);case Xt:e:{for(k=h.key;u!==null;){if(u.key===k)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){a(p,u.sibling),u=r(u,h.children||[]),u.return=p,p=u;break e}else{a(p,u);break}else t(p,u);u=u.sibling}u=Ci(h,p.mode,_),u.return=p,p=u}return s(p);case ct:return k=h._init,E(p,u,k(h._payload),_)}if(Ba(h))return w(p,u,h,_);if(Na(h))return x(p,u,h,_);zn(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(a(p,u.sibling),u=r(u,h),u.return=p,p=u):(a(p,u),u=ki(h,p.mode,_),u.return=p,p=u),s(p)):a(p,u)}return E}var ya=uc(!0),pc=uc(!1),vr=At(null),xr=null,ia=null,Ys=null;function Xs(){Ys=ia=xr=null}function Ks(e){var t=vr.current;B(vr),e._currentValue=t}function ss(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function pa(e,t){xr=e,Ys=ia=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(Ys!==e)if(e={context:e,memoizedValue:t,next:null},ia===null){if(xr===null)throw Error(b(308));ia=e,xr.dependencies={lanes:0,firstContext:e}}else ia=ia.next=e;return t}var Ot=null;function Js(e){Ot===null?Ot=[e]:Ot.push(e)}function mc(e,t,a,n){var r=t.interleaved;return r===null?(a.next=a,Js(t)):(a.next=r.next,r.next=a),t.interleaved=a,rt(e,n)}function rt(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var ut=!1;function Zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,I&2){var r=n.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t,rt(e,a)}return r=n.interleaved,r===null?(t.next=t,Js(n)):(t.next=r.next,r.next=t),n.interleaved=t,rt(e,a)}function Xn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Os(e,a)}}function gl(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var r=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?r=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?r=i=t:i=i.next=t}else r=i=t;a={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function wr(e,t,a,n){var r=e.updateQueue;ut=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var d=l,c=d.next;d.next=null,s===null?i=c:s.next=c,s=d;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==s&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=d))}if(i!==null){var f=r.baseState;s=0,m=c=d=null,l=i;do{var g=l.lane,v=l.eventTime;if((n&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,x=l;switch(g=t,v=a,x.tag){case 1:if(w=x.payload,typeof w=="function"){f=w.call(v,f,g);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,g=typeof w=="function"?w.call(v,f,g):w,g==null)break e;f=G({},f,g);break e;case 2:ut=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=r.effects,g===null?r.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=v,d=f):m=m.next=v,s|=g;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;g=l,l=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(!0);if(m===null&&(d=f),r.baseState=d,r.firstBaseUpdate=c,r.lastBaseUpdate=m,t=r.shared.interleaved,t!==null){r=t;do s|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);qt|=s,e.lanes=s,e.memoizedState=f}}function yl(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],r=n.callback;if(r!==null){if(n.callback=null,n=a,typeof r!="function")throw Error(b(191,r));r.call(n)}}}var wn={},Ge=At(wn),cn=At(wn),un=At(wn);function zt(e){if(e===wn)throw Error(b(174));return e}function eo(e,t){switch(O(un,t),O(cn,e),O(Ge,wn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bi(t,e)}B(Ge),O(Ge,t)}function va(){B(Ge),B(cn),B(un)}function hc(e){zt(un.current);var t=zt(Ge.current),a=Bi(t,e.type);t!==a&&(O(cn,e),O(Ge,a))}function to(e){cn.current===e&&(B(Ge),B(cn))}var H=At(0);function _r(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xi=[];function ao(){for(var e=0;e<xi.length;e++)xi[e]._workInProgressVersionPrimary=null;xi.length=0}var Kn=ot.ReactCurrentDispatcher,wi=ot.ReactCurrentBatchConfig,Vt=0,V=null,K=null,ee=null,br=!1,Qa=!1,pn=0,Dm=0;function ie(){throw Error(b(321))}function no(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Be(e[a],t[a]))return!1;return!0}function ro(e,t,a,n,r,i){if(Vt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Kn.current=e===null||e.memoizedState===null?Om:zm,e=a(n,r),Qa){i=0;do{if(Qa=!1,pn=0,25<=i)throw Error(b(301));i+=1,ee=K=null,t.updateQueue=null,Kn.current=Bm,e=a(n,r)}while(Qa)}if(Kn.current=Sr,t=K!==null&&K.next!==null,Vt=0,ee=K=V=null,br=!1,t)throw Error(b(300));return e}function io(){var e=pn!==0;return pn=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?V.memoizedState=ee=e:ee=ee.next=e,ee}function Pe(){if(K===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=ee===null?V.memoizedState:ee.next;if(t!==null)ee=t,K=e;else{if(e===null)throw Error(b(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},ee===null?V.memoizedState=ee=e:ee=ee.next=e}return ee}function mn(e,t){return typeof t=="function"?t(e):t}function _i(e){var t=Pe(),a=t.queue;if(a===null)throw Error(b(311));a.lastRenderedReducer=e;var n=K,r=n.baseQueue,i=a.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}n.baseQueue=r=i,a.pending=null}if(r!==null){i=r.next,n=n.baseState;var l=s=null,d=null,c=i;do{var m=c.lane;if((Vt&m)===m)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var f={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(l=d=f,s=n):d=d.next=f,V.lanes|=m,qt|=m}c=c.next}while(c!==null&&c!==i);d===null?s=n:d.next=l,Be(n,t.memoizedState)||(he=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=d,a.lastRenderedState=n}if(e=a.interleaved,e!==null){r=e;do i=r.lane,V.lanes|=i,qt|=i,r=r.next;while(r!==e)}else r===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function bi(e){var t=Pe(),a=t.queue;if(a===null)throw Error(b(311));a.lastRenderedReducer=e;var n=a.dispatch,r=a.pending,i=t.memoizedState;if(r!==null){a.pending=null;var s=r=r.next;do i=e(i,s.action),s=s.next;while(s!==r);Be(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function gc(){}function yc(e,t){var a=V,n=Pe(),r=t(),i=!Be(n.memoizedState,r);if(i&&(n.memoizedState=r,he=!0),n=n.queue,so(wc.bind(null,a,n,e),[e]),n.getSnapshot!==t||i||ee!==null&&ee.memoizedState.tag&1){if(a.flags|=2048,fn(9,xc.bind(null,a,n,r,t),void 0,null),te===null)throw Error(b(349));Vt&30||vc(a,t,r)}return r}function vc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function xc(e,t,a,n){t.value=a,t.getSnapshot=n,_c(t)&&bc(e)}function wc(e,t,a){return a(function(){_c(t)&&bc(e)})}function _c(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Be(e,a)}catch{return!0}}function bc(e){var t=rt(e,1);t!==null&&Oe(t,e,1,-1)}function vl(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},t.queue=e,e=e.dispatch=Fm.bind(null,V,e),[t.memoizedState,e]}function fn(e,t,a,n){return e={tag:e,create:t,destroy:a,deps:n,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e)),e}function Sc(){return Pe().memoizedState}function Jn(e,t,a,n){var r=We();V.flags|=e,r.memoizedState=fn(1|t,a,void 0,n===void 0?null:n)}function zr(e,t,a,n){var r=Pe();n=n===void 0?null:n;var i=void 0;if(K!==null){var s=K.memoizedState;if(i=s.destroy,n!==null&&no(n,s.deps)){r.memoizedState=fn(t,a,i,n);return}}V.flags|=e,r.memoizedState=fn(1|t,a,i,n)}function xl(e,t){return Jn(8390656,8,e,t)}function so(e,t){return zr(2048,8,e,t)}function Ec(e,t){return zr(4,2,e,t)}function kc(e,t){return zr(4,4,e,t)}function Cc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tc(e,t,a){return a=a!=null?a.concat([e]):null,zr(4,4,Cc.bind(null,t,e),a)}function oo(){}function Rc(e,t){var a=Pe();t=t===void 0?null:t;var n=a.memoizedState;return n!==null&&t!==null&&no(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Ac(e,t){var a=Pe();t=t===void 0?null:t;var n=a.memoizedState;return n!==null&&t!==null&&no(t,n[1])?n[0]:(e=e(),a.memoizedState=[e,t],e)}function Nc(e,t,a){return Vt&21?(Be(a,t)||(a=Id(),V.lanes|=a,qt|=a,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=a)}function Im(e,t){var a=j;j=a!==0&&4>a?a:4,e(!0);var n=wi.transition;wi.transition={};try{e(!1),t()}finally{j=a,wi.transition=n}}function Pc(){return Pe().memoizedState}function jm(e,t,a){var n=Et(e);if(a={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null},Mc(e))Lc(t,a);else if(a=mc(e,t,a,n),a!==null){var r=ue();Oe(a,e,n,r),Dc(a,t,n)}}function Fm(e,t,a){var n=Et(e),r={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mc(e))Lc(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,a);if(r.hasEagerState=!0,r.eagerState=l,Be(l,s)){var d=t.interleaved;d===null?(r.next=r,Js(t)):(r.next=d.next,d.next=r),t.interleaved=r;return}}catch{}finally{}a=mc(e,t,r,n),a!==null&&(r=ue(),Oe(a,e,n,r),Dc(a,t,n))}}function Mc(e){var t=e.alternate;return e===V||t!==null&&t===V}function Lc(e,t){Qa=br=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Dc(e,t,a){if(a&4194240){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Os(e,a)}}var Sr={readContext:Ne,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Om={readContext:Ne,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:xl,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,Jn(4194308,4,Cc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Jn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jn(4,2,e,t)},useMemo:function(e,t){var a=We();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var n=We();return t=a!==void 0?a(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=jm.bind(null,V,e),[n.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:vl,useDebugValue:oo,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=vl(!1),t=e[0];return e=Im.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var n=V,r=We();if(U){if(a===void 0)throw Error(b(407));a=a()}else{if(a=t(),te===null)throw Error(b(349));Vt&30||vc(n,t,a)}r.memoizedState=a;var i={value:a,getSnapshot:t};return r.queue=i,xl(wc.bind(null,n,i,e),[e]),n.flags|=2048,fn(9,xc.bind(null,n,i,a,t),void 0,null),a},useId:function(){var e=We(),t=te.identifierPrefix;if(U){var a=et,n=Ze;a=(n&~(1<<32-Fe(n)-1)).toString(32)+a,t=":"+t+"R"+a,a=pn++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=Dm++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zm={readContext:Ne,useCallback:Rc,useContext:Ne,useEffect:so,useImperativeHandle:Tc,useInsertionEffect:Ec,useLayoutEffect:kc,useMemo:Ac,useReducer:_i,useRef:Sc,useState:function(){return _i(mn)},useDebugValue:oo,useDeferredValue:function(e){var t=Pe();return Nc(t,K.memoizedState,e)},useTransition:function(){var e=_i(mn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:yc,useId:Pc,unstable_isNewReconciler:!1},Bm={readContext:Ne,useCallback:Rc,useContext:Ne,useEffect:so,useImperativeHandle:Tc,useInsertionEffect:Ec,useLayoutEffect:kc,useMemo:Ac,useReducer:bi,useRef:Sc,useState:function(){return bi(mn)},useDebugValue:oo,useDeferredValue:function(e){var t=Pe();return K===null?t.memoizedState=e:Nc(t,K.memoizedState,e)},useTransition:function(){var e=bi(mn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:yc,useId:Pc,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function os(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:G({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Br={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var n=ue(),r=Et(e),i=tt(n,r);i.payload=t,a!=null&&(i.callback=a),t=bt(e,i,r),t!==null&&(Oe(t,e,r,n),Xn(t,e,r))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=ue(),r=Et(e),i=tt(n,r);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=bt(e,i,r),t!==null&&(Oe(t,e,r,n),Xn(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ue(),n=Et(e),r=tt(a,n);r.tag=2,t!=null&&(r.callback=t),t=bt(e,r,n),t!==null&&(Oe(t,e,n,a),Xn(t,e,n))}};function wl(e,t,a,n,r,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!sn(a,n)||!sn(r,i):!0}function Ic(e,t,a){var n=!1,r=Tt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ne(i):(r=ye(t)?Ht:le.current,n=t.contextTypes,i=(n=n!=null)?ha(e,r):Tt),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Br,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function _l(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Br.enqueueReplaceState(t,t.state,null)}function ls(e,t,a,n){var r=e.stateNode;r.props=a,r.state=e.memoizedState,r.refs={},Zs(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=Ne(i):(i=ye(t)?Ht:le.current,r.context=ha(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(os(e,t,i,a),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Br.enqueueReplaceState(r,r.state,null),wr(e,a,r,n),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function xa(e,t){try{var a="",n=t;do a+=fp(n),n=n.return;while(n);var r=a}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function Si(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function ds(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var Um=typeof WeakMap=="function"?WeakMap:Map;function jc(e,t,a){a=tt(-1,a),a.tag=3,a.payload={element:null};var n=t.value;return a.callback=function(){kr||(kr=!0,xs=n),ds(e,t)},a}function Fc(e,t,a){a=tt(-1,a),a.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var r=t.value;a.payload=function(){return n(r)},a.callback=function(){ds(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){ds(e,t),typeof n!="function"&&(St===null?St=new Set([this]):St.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),a}function bl(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Um;var r=new Set;n.set(t,r)}else r=n.get(t),r===void 0&&(r=new Set,n.set(t,r));r.has(a)||(r.add(a),e=tf.bind(null,e,t,a),t.then(e,e))}function Sl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function El(e,t,a,n,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=tt(-1,1),t.tag=2,bt(a,t,1))),a.lanes|=1),e)}var Hm=ot.ReactCurrentOwner,he=!1;function ce(e,t,a,n){t.child=e===null?pc(t,null,a,n):ya(t,e.child,a,n)}function kl(e,t,a,n,r){a=a.render;var i=t.ref;return pa(t,r),n=ro(e,t,a,n,i,r),a=io(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,it(e,t,r)):(U&&a&&Gs(t),t.flags|=1,ce(e,t,n,r),t.child)}function Cl(e,t,a,n,r){if(e===null){var i=a.type;return typeof i=="function"&&!go(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,Oc(e,t,i,n,r)):(e=ar(a.type,null,n,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&r)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:sn,a(s,n)&&e.ref===t.ref)return it(e,t,r)}return t.flags|=1,e=kt(i,n),e.ref=t.ref,e.return=t,t.child=e}function Oc(e,t,a,n,r){if(e!==null){var i=e.memoizedProps;if(sn(i,n)&&e.ref===t.ref)if(he=!1,t.pendingProps=n=i,(e.lanes&r)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,it(e,t,r)}return cs(e,t,a,n,r)}function zc(e,t,a){var n=t.pendingProps,r=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(oa,we),we|=a;else{if(!(a&1073741824))return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(oa,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:a,O(oa,we),we|=n}else i!==null?(n=i.baseLanes|a,t.memoizedState=null):n=a,O(oa,we),we|=n;return ce(e,t,r,a),t.child}function Bc(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function cs(e,t,a,n,r){var i=ye(a)?Ht:le.current;return i=ha(t,i),pa(t,r),a=ro(e,t,a,n,i,r),n=io(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,it(e,t,r)):(U&&n&&Gs(t),t.flags|=1,ce(e,t,a,r),t.child)}function Tl(e,t,a,n,r){if(ye(a)){var i=!0;hr(t)}else i=!1;if(pa(t,r),t.stateNode===null)Zn(e,t),Ic(t,a,n),ls(t,a,n,r),n=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var d=s.context,c=a.contextType;typeof c=="object"&&c!==null?c=Ne(c):(c=ye(a)?Ht:le.current,c=ha(t,c));var m=a.getDerivedStateFromProps,f=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||d!==c)&&_l(t,s,n,c),ut=!1;var g=t.memoizedState;s.state=g,wr(t,n,s,r),d=t.memoizedState,l!==n||g!==d||ge.current||ut?(typeof m=="function"&&(os(t,a,m,n),d=t.memoizedState),(l=ut||wl(t,a,l,n,g,d,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=d),s.props=n,s.state=d,s.context=c,n=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,fc(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:De(t.type,l),s.props=c,f=t.pendingProps,g=s.context,d=a.contextType,typeof d=="object"&&d!==null?d=Ne(d):(d=ye(a)?Ht:le.current,d=ha(t,d));var v=a.getDerivedStateFromProps;(m=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||g!==d)&&_l(t,s,n,d),ut=!1,g=t.memoizedState,s.state=g,wr(t,n,s,r);var w=t.memoizedState;l!==f||g!==w||ge.current||ut?(typeof v=="function"&&(os(t,a,v,n),w=t.memoizedState),(c=ut||wl(t,a,c,n,g,w,d)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,w,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,w,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),s.props=n,s.state=w,s.context=d,n=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return us(e,t,a,n,i,r)}function us(e,t,a,n,r,i){Bc(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return r&&pl(t,a,!1),it(e,t,i);n=t.stateNode,Hm.current=t;var l=s&&typeof a.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=ya(t,e.child,null,i),t.child=ya(t,null,l,i)):ce(e,t,l,i),t.memoizedState=n.state,r&&pl(t,a,!0),t.child}function Uc(e){var t=e.stateNode;t.pendingContext?ul(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ul(e,t.context,!1),eo(e,t.containerInfo)}function Rl(e,t,a,n,r){return ga(),Qs(r),t.flags|=256,ce(e,t,a,n),t.child}var ps={dehydrated:null,treeContext:null,retryLane:0};function ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hc(e,t,a){var n=t.pendingProps,r=H.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),O(H,r&1),e===null)return is(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Wr(s,n,0,null),e=Ut(e,n,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ms(a),t.memoizedState=ps,e):lo(t,s));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Wm(e,t,s,n,l,r,a);if(i){i=n.fallback,s=t.mode,r=e.child,l=r.sibling;var d={mode:"hidden",children:n.children};return!(s&1)&&t.child!==r?(n=t.child,n.childLanes=0,n.pendingProps=d,t.deletions=null):(n=kt(r,d),n.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=kt(l,i):(i=Ut(i,s,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?ms(a):{baseLanes:s.baseLanes|a,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~a,t.memoizedState=ps,n}return i=e.child,e=i.sibling,n=kt(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=a),n.return=t,n.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n}function lo(e,t){return t=Wr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bn(e,t,a,n){return n!==null&&Qs(n),ya(t,e.child,null,a),e=lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wm(e,t,a,n,r,i,s){if(a)return t.flags&256?(t.flags&=-257,n=Si(Error(b(422))),Bn(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,r=t.mode,n=Wr({mode:"visible",children:n.children},r,0,null),i=Ut(i,r,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&ya(t,e.child,null,s),t.child.memoizedState=ms(s),t.memoizedState=ps,i);if(!(t.mode&1))return Bn(e,t,s,null);if(r.data==="$!"){if(n=r.nextSibling&&r.nextSibling.dataset,n)var l=n.dgst;return n=l,i=Error(b(419)),n=Si(i,n,void 0),Bn(e,t,s,n)}if(l=(s&e.childLanes)!==0,he||l){if(n=te,n!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(n.suspendedLanes|s)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,rt(e,r),Oe(n,e,r,-1))}return ho(),n=Si(Error(b(421))),Bn(e,t,s,n)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=af.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,_e=_t(r.nextSibling),be=t,U=!0,je=null,e!==null&&(Ce[Te++]=Ze,Ce[Te++]=et,Ce[Te++]=Wt,Ze=e.id,et=e.overflow,Wt=t),t=lo(t,n.children),t.flags|=4096,t)}function Al(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ss(e.return,t,a)}function Ei(e,t,a,n,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=a,i.tailMode=r)}function Wc(e,t,a){var n=t.pendingProps,r=n.revealOrder,i=n.tail;if(ce(e,t,n.children,a),n=H.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Al(e,a,t);else if(e.tag===19)Al(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(O(H,n),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&_r(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),Ei(t,!1,r,a,i);break;case"backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&_r(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}Ei(t,!0,a,null,i);break;case"together":Ei(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,!(a&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,a=kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Vm(e,t,a){switch(t.tag){case 3:Uc(t),ga();break;case 5:hc(t);break;case 1:ye(t.type)&&hr(t);break;case 4:eo(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,r=t.memoizedProps.value;O(vr,n._currentValue),n._currentValue=r;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(O(H,H.current&1),t.flags|=128,null):a&t.child.childLanes?Hc(e,t,a):(O(H,H.current&1),e=it(e,t,a),e!==null?e.sibling:null);O(H,H.current&1);break;case 19:if(n=(a&t.childLanes)!==0,e.flags&128){if(n)return Wc(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),O(H,H.current),n)break;return null;case 22:case 23:return t.lanes=0,zc(e,t,a)}return it(e,t,a)}var Vc,fs,qc,Gc;Vc=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};fs=function(){};qc=function(e,t,a,n){var r=e.memoizedProps;if(r!==n){e=t.stateNode,zt(Ge.current);var i=null;switch(a){case"input":r=ji(e,r),n=ji(e,n),i=[];break;case"select":r=G({},r,{value:void 0}),n=G({},n,{value:void 0}),i=[];break;case"textarea":r=zi(e,r),n=zi(e,n),i=[];break;default:typeof r.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=mr)}Ui(a,n);var s;a=null;for(c in r)if(!n.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(s in l)l.hasOwnProperty(s)&&(a||(a={}),a[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ja.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in n){var d=n[c];if(l=r!=null?r[c]:void 0,n.hasOwnProperty(c)&&d!==l&&(d!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(a||(a={}),a[s]="");for(s in d)d.hasOwnProperty(s)&&l[s]!==d[s]&&(a||(a={}),a[s]=d[s])}else a||(i||(i=[]),i.push(c,a)),a=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(i=i||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ja.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&z("scroll",e),i||l===d||(i=[])):(i=i||[]).push(c,d))}a&&(i=i||[]).push("style",a);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Gc=function(e,t,a,n){a!==n&&(t.flags|=4)};function ja(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags&14680064,n|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function qm(e,t,a){var n=t.pendingProps;switch($s(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ye(t.type)&&fr(),se(t),null;case 3:return n=t.stateNode,va(),B(ge),B(le),ao(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(On(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,je!==null&&(bs(je),je=null))),fs(e,t),se(t),null;case 5:to(t);var r=zt(un.current);if(a=t.type,e!==null&&t.stateNode!=null)qc(e,t,a,n,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(b(166));return se(t),null}if(e=zt(Ge.current),On(t)){n=t.stateNode,a=t.type;var i=t.memoizedProps;switch(n[Ve]=t,n[dn]=i,e=(t.mode&1)!==0,a){case"dialog":z("cancel",n),z("close",n);break;case"iframe":case"object":case"embed":z("load",n);break;case"video":case"audio":for(r=0;r<Ha.length;r++)z(Ha[r],n);break;case"source":z("error",n);break;case"img":case"image":case"link":z("error",n),z("load",n);break;case"details":z("toggle",n);break;case"input":Oo(n,i),z("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},z("invalid",n);break;case"textarea":Bo(n,i),z("invalid",n)}Ui(a,i),r=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?n.textContent!==l&&(i.suppressHydrationWarning!==!0&&Fn(n.textContent,l,e),r=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Fn(n.textContent,l,e),r=["children",""+l]):Ja.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&z("scroll",n)}switch(a){case"input":An(n),zo(n,i,!0);break;case"textarea":An(n),Uo(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=mr)}n=r,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wd(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(a,{is:n.is}):(e=s.createElement(a),a==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,a),e[Ve]=t,e[dn]=n,Vc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Hi(a,n),a){case"dialog":z("cancel",e),z("close",e),r=n;break;case"iframe":case"object":case"embed":z("load",e),r=n;break;case"video":case"audio":for(r=0;r<Ha.length;r++)z(Ha[r],e);r=n;break;case"source":z("error",e),r=n;break;case"img":case"image":case"link":z("error",e),z("load",e),r=n;break;case"details":z("toggle",e),r=n;break;case"input":Oo(e,n),r=ji(e,n),z("invalid",e);break;case"option":r=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},r=G({},n,{value:void 0}),z("invalid",e);break;case"textarea":Bo(e,n),r=zi(e,n),z("invalid",e);break;default:r=n}Ui(a,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var d=l[i];i==="style"?Sd(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&_d(e,d)):i==="children"?typeof d=="string"?(a!=="textarea"||d!=="")&&Za(e,d):typeof d=="number"&&Za(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ja.hasOwnProperty(i)?d!=null&&i==="onScroll"&&z("scroll",e):d!=null&&Ms(e,i,d,s))}switch(a){case"input":An(e),zo(e,n,!1);break;case"textarea":An(e),Uo(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ct(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?la(e,!!n.multiple,i,!1):n.defaultValue!=null&&la(e,!!n.multiple,n.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=mr)}switch(a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Gc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(b(166));if(a=zt(un.current),zt(Ge.current),On(t)){if(n=t.stateNode,a=t.memoizedProps,n[Ve]=t,(i=n.nodeValue!==a)&&(e=be,e!==null))switch(e.tag){case 3:Fn(n.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fn(n.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(a.nodeType===9?a:a.ownerDocument).createTextNode(n),n[Ve]=t,t.stateNode=n}return se(t),null;case 13:if(B(H),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&_e!==null&&t.mode&1&&!(t.flags&128))cc(),ga(),t.flags|=98560,i=!1;else if(i=On(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(b(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(b(317));i[Ve]=t}else ga(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),i=!1}else je!==null&&(bs(je),je=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=a,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?J===0&&(J=3):ho())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return va(),fs(e,t),e===null&&on(t.stateNode.containerInfo),se(t),null;case 10:return Ks(t.type._context),se(t),null;case 17:return ye(t.type)&&fr(),se(t),null;case 19:if(B(H),i=t.memoizedState,i===null)return se(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)ja(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=_r(e),s!==null){for(t.flags|=128,ja(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=a,a=t.child;a!==null;)i=a,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return O(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&Y()>wa&&(t.flags|=128,n=!0,ja(i,!1),t.lanes=4194304)}else{if(!n)if(e=_r(s),e!==null){if(t.flags|=128,n=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),ja(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!U)return se(t),null}else 2*Y()-i.renderingStartTime>wa&&a!==1073741824&&(t.flags|=128,n=!0,ja(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(a=i.last,a!==null?a.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Y(),t.sibling=null,a=H.current,O(H,n?a&1|2:a&1),t):(se(t),null);case 22:case 23:return fo(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?we&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Gm(e,t){switch($s(t),t.tag){case 1:return ye(t.type)&&fr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return va(),B(ge),B(le),ao(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return to(t),null;case 13:if(B(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(H),null;case 4:return va(),null;case 10:return Ks(t.type._context),null;case 22:case 23:return fo(),null;case 24:return null;default:return null}}var Un=!1,oe=!1,$m=typeof WeakSet=="function"?WeakSet:Set,T=null;function sa(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(n){$(e,t,n)}else a.current=null}function hs(e,t,a){try{a()}catch(n){$(e,t,n)}}var Nl=!1;function Qm(e,t){if(Ji=cr,e=Kd(),qs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var r=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,l=-1,d=-1,c=0,m=0,f=e,g=null;t:for(;;){for(var v;f!==a||r!==0&&f.nodeType!==3||(l=s+r),f!==i||n!==0&&f.nodeType!==3||(d=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===e)break t;if(g===a&&++c===r&&(l=s),g===i&&++m===n&&(d=s),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}a=l===-1||d===-1?null:{start:l,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zi={focusedElem:e,selectionRange:a},cr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,E=w.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:De(t.type,x),E);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(_){$(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return w=Nl,Nl=!1,w}function Ya(e,t,a){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&hs(t,a,i)}r=r.next}while(r!==n)}}function Ur(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var n=a.create;a.destroy=n()}a=a.next}while(a!==t)}}function gs(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function $c(e){var t=e.alternate;t!==null&&(e.alternate=null,$c(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[dn],delete t[as],delete t[Nm],delete t[Pm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qc(e){return e.tag===5||e.tag===3||e.tag===4}function Pl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ys(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=mr));else if(n!==4&&(e=e.child,e!==null))for(ys(e,t,a),e=e.sibling;e!==null;)ys(e,t,a),e=e.sibling}function vs(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(vs(e,t,a),e=e.sibling;e!==null;)vs(e,t,a),e=e.sibling}var ae=null,Ie=!1;function dt(e,t,a){for(a=a.child;a!==null;)Yc(e,t,a),a=a.sibling}function Yc(e,t,a){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Lr,a)}catch{}switch(a.tag){case 5:oe||sa(a,t);case 6:var n=ae,r=Ie;ae=null,dt(e,t,a),ae=n,Ie=r,ae!==null&&(Ie?(e=ae,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):ae.removeChild(a.stateNode));break;case 18:ae!==null&&(Ie?(e=ae,a=a.stateNode,e.nodeType===8?yi(e.parentNode,a):e.nodeType===1&&yi(e,a),nn(e)):yi(ae,a.stateNode));break;case 4:n=ae,r=Ie,ae=a.stateNode.containerInfo,Ie=!0,dt(e,t,a),ae=n,Ie=r;break;case 0:case 11:case 14:case 15:if(!oe&&(n=a.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){r=n=n.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&hs(a,t,s),r=r.next}while(r!==n)}dt(e,t,a);break;case 1:if(!oe&&(sa(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=a.memoizedProps,n.state=a.memoizedState,n.componentWillUnmount()}catch(l){$(a,t,l)}dt(e,t,a);break;case 21:dt(e,t,a);break;case 22:a.mode&1?(oe=(n=oe)||a.memoizedState!==null,dt(e,t,a),oe=n):dt(e,t,a);break;default:dt(e,t,a)}}function Ml(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new $m),t.forEach(function(n){var r=nf.bind(null,e,n);a.has(n)||(a.add(n),n.then(r,r))})}}function Le(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var r=a[n];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ae=l.stateNode,Ie=!1;break e;case 3:ae=l.stateNode.containerInfo,Ie=!0;break e;case 4:ae=l.stateNode.containerInfo,Ie=!0;break e}l=l.return}if(ae===null)throw Error(b(160));Yc(i,s,r),ae=null,Ie=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(c){$(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xc(t,e),t=t.sibling}function Xc(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),He(e),n&4){try{Ya(3,e,e.return),Ur(3,e)}catch(x){$(e,e.return,x)}try{Ya(5,e,e.return)}catch(x){$(e,e.return,x)}}break;case 1:Le(t,e),He(e),n&512&&a!==null&&sa(a,a.return);break;case 5:if(Le(t,e),He(e),n&512&&a!==null&&sa(a,a.return),e.flags&32){var r=e.stateNode;try{Za(r,"")}catch(x){$(e,e.return,x)}}if(n&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,s=a!==null?a.memoizedProps:i,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&vd(r,i),Hi(l,s);var c=Hi(l,i);for(s=0;s<d.length;s+=2){var m=d[s],f=d[s+1];m==="style"?Sd(r,f):m==="dangerouslySetInnerHTML"?_d(r,f):m==="children"?Za(r,f):Ms(r,m,f,c)}switch(l){case"input":Fi(r,i);break;case"textarea":xd(r,i);break;case"select":var g=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?la(r,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?la(r,!!i.multiple,i.defaultValue,!0):la(r,!!i.multiple,i.multiple?[]:"",!1))}r[dn]=i}catch(x){$(e,e.return,x)}}break;case 6:if(Le(t,e),He(e),n&4){if(e.stateNode===null)throw Error(b(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(x){$(e,e.return,x)}}break;case 3:if(Le(t,e),He(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{nn(t.containerInfo)}catch(x){$(e,e.return,x)}break;case 4:Le(t,e),He(e);break;case 13:Le(t,e),He(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(po=Y())),n&4&&Ml(e);break;case 22:if(m=a!==null&&a.memoizedState!==null,e.mode&1?(oe=(c=oe)||m,Le(t,e),oe=c):Le(t,e),He(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(T=e,m=e.child;m!==null;){for(f=T=m;T!==null;){switch(g=T,v=g.child,g.tag){case 0:case 11:case 14:case 15:Ya(4,g,g.return);break;case 1:sa(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){n=g,a=g.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){$(n,a,x)}}break;case 5:sa(g,g.return);break;case 22:if(g.memoizedState!==null){Dl(f);continue}}v!==null?(v.return=g,T=v):Dl(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{r=f.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,d=f.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=bd("display",s))}catch(x){$(e,e.return,x)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){$(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Le(t,e),He(e),n&4&&Ml(e);break;case 21:break;default:Le(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(Qc(a)){var n=a;break e}a=a.return}throw Error(b(160))}switch(n.tag){case 5:var r=n.stateNode;n.flags&32&&(Za(r,""),n.flags&=-33);var i=Pl(e);vs(e,i,r);break;case 3:case 4:var s=n.stateNode.containerInfo,l=Pl(e);ys(e,l,s);break;default:throw Error(b(161))}}catch(d){$(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ym(e,t,a){T=e,Kc(e)}function Kc(e,t,a){for(var n=(e.mode&1)!==0;T!==null;){var r=T,i=r.child;if(r.tag===22&&n){var s=r.memoizedState!==null||Un;if(!s){var l=r.alternate,d=l!==null&&l.memoizedState!==null||oe;l=Un;var c=oe;if(Un=s,(oe=d)&&!c)for(T=r;T!==null;)s=T,d=s.child,s.tag===22&&s.memoizedState!==null?Il(r):d!==null?(d.return=s,T=d):Il(r);for(;i!==null;)T=i,Kc(i),i=i.sibling;T=r,Un=l,oe=c}Ll(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,T=i):Ll(e)}}function Ll(e){for(;T!==null;){var t=T;if(t.flags&8772){var a=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Ur(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!oe)if(a===null)n.componentDidMount();else{var r=t.elementType===t.type?a.memoizedProps:De(t.type,a.memoizedProps);n.componentDidUpdate(r,a.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&yl(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}yl(t,s,a)}break;case 5:var l=t.stateNode;if(a===null&&t.flags&4){a=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&a.focus();break;case"img":d.src&&(a.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&nn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}oe||t.flags&512&&gs(t)}catch(g){$(t,t.return,g)}}if(t===e){T=null;break}if(a=t.sibling,a!==null){a.return=t.return,T=a;break}T=t.return}}function Dl(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}function Il(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{Ur(4,t)}catch(d){$(t,a,d)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var r=t.return;try{n.componentDidMount()}catch(d){$(t,r,d)}}var i=t.return;try{gs(t)}catch(d){$(t,i,d)}break;case 5:var s=t.return;try{gs(t)}catch(d){$(t,s,d)}}}catch(d){$(t,t.return,d)}if(t===e){T=null;break}var l=t.sibling;if(l!==null){l.return=t.return,T=l;break}T=t.return}}var Xm=Math.ceil,Er=ot.ReactCurrentDispatcher,co=ot.ReactCurrentOwner,Ae=ot.ReactCurrentBatchConfig,I=0,te=null,X=null,ne=0,we=0,oa=At(0),J=0,hn=null,qt=0,Hr=0,uo=0,Xa=null,fe=null,po=0,wa=1/0,Xe=null,kr=!1,xs=null,St=null,Hn=!1,gt=null,Cr=0,Ka=0,ws=null,er=-1,tr=0;function ue(){return I&6?Y():er!==-1?er:er=Y()}function Et(e){return e.mode&1?I&2&&ne!==0?ne&-ne:Lm.transition!==null?(tr===0&&(tr=Id()),tr):(e=j,e!==0||(e=window.event,e=e===void 0?16:Hd(e.type)),e):1}function Oe(e,t,a,n){if(50<Ka)throw Ka=0,ws=null,Error(b(185));yn(e,a,n),(!(I&2)||e!==te)&&(e===te&&(!(I&2)&&(Hr|=a),J===4&&mt(e,ne)),ve(e,n),a===1&&I===0&&!(t.mode&1)&&(wa=Y()+500,Or&&Nt()))}function ve(e,t){var a=e.callbackNode;Lp(e,t);var n=dr(e,e===te?ne:0);if(n===0)a!==null&&Vo(a),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(a!=null&&Vo(a),t===1)e.tag===0?Mm(jl.bind(null,e)):oc(jl.bind(null,e)),Rm(function(){!(I&6)&&Nt()}),a=null;else{switch(jd(n)){case 1:a=Fs;break;case 4:a=Ld;break;case 16:a=lr;break;case 536870912:a=Dd;break;default:a=lr}a=iu(a,Jc.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function Jc(e,t){if(er=-1,tr=0,I&6)throw Error(b(327));var a=e.callbackNode;if(ma()&&e.callbackNode!==a)return null;var n=dr(e,e===te?ne:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Tr(e,n);else{t=n;var r=I;I|=2;var i=eu();(te!==e||ne!==t)&&(Xe=null,wa=Y()+500,Bt(e,t));do try{Zm();break}catch(l){Zc(e,l)}while(!0);Xs(),Er.current=i,I=r,X!==null?t=0:(te=null,ne=0,t=J)}if(t!==0){if(t===2&&(r=$i(e),r!==0&&(n=r,t=_s(e,r))),t===1)throw a=hn,Bt(e,0),mt(e,n),ve(e,Y()),a;if(t===6)mt(e,n);else{if(r=e.current.alternate,!(n&30)&&!Km(r)&&(t=Tr(e,n),t===2&&(i=$i(e),i!==0&&(n=i,t=_s(e,i))),t===1))throw a=hn,Bt(e,0),mt(e,n),ve(e,Y()),a;switch(e.finishedWork=r,e.finishedLanes=n,t){case 0:case 1:throw Error(b(345));case 2:It(e,fe,Xe);break;case 3:if(mt(e,n),(n&130023424)===n&&(t=po+500-Y(),10<t)){if(dr(e,0)!==0)break;if(r=e.suspendedLanes,(r&n)!==n){ue(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ts(It.bind(null,e,fe,Xe),t);break}It(e,fe,Xe);break;case 4:if(mt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,r=-1;0<n;){var s=31-Fe(n);i=1<<s,s=t[s],s>r&&(r=s),n&=~i}if(n=r,n=Y()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Xm(n/1960))-n,10<n){e.timeoutHandle=ts(It.bind(null,e,fe,Xe),n);break}It(e,fe,Xe);break;case 5:It(e,fe,Xe);break;default:throw Error(b(329))}}}return ve(e,Y()),e.callbackNode===a?Jc.bind(null,e):null}function _s(e,t){var a=Xa;return e.current.memoizedState.isDehydrated&&(Bt(e,t).flags|=256),e=Tr(e,t),e!==2&&(t=fe,fe=a,t!==null&&bs(t)),e}function bs(e){fe===null?fe=e:fe.push.apply(fe,e)}function Km(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var n=0;n<a.length;n++){var r=a[n],i=r.getSnapshot;r=r.value;try{if(!Be(i(),r))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mt(e,t){for(t&=~uo,t&=~Hr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-Fe(t),n=1<<a;e[a]=-1,t&=~n}}function jl(e){if(I&6)throw Error(b(327));ma();var t=dr(e,0);if(!(t&1))return ve(e,Y()),null;var a=Tr(e,t);if(e.tag!==0&&a===2){var n=$i(e);n!==0&&(t=n,a=_s(e,n))}if(a===1)throw a=hn,Bt(e,0),mt(e,t),ve(e,Y()),a;if(a===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,fe,Xe),ve(e,Y()),null}function mo(e,t){var a=I;I|=1;try{return e(t)}finally{I=a,I===0&&(wa=Y()+500,Or&&Nt())}}function Gt(e){gt!==null&&gt.tag===0&&!(I&6)&&ma();var t=I;I|=1;var a=Ae.transition,n=j;try{if(Ae.transition=null,j=1,e)return e()}finally{j=n,Ae.transition=a,I=t,!(I&6)&&Nt()}}function fo(){we=oa.current,B(oa)}function Bt(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,Tm(a)),X!==null)for(a=X.return;a!==null;){var n=a;switch($s(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&fr();break;case 3:va(),B(ge),B(le),ao();break;case 5:to(n);break;case 4:va();break;case 13:B(H);break;case 19:B(H);break;case 10:Ks(n.type._context);break;case 22:case 23:fo()}a=a.return}if(te=e,X=e=kt(e.current,null),ne=we=t,J=0,hn=null,uo=Hr=qt=0,fe=Xa=null,Ot!==null){for(t=0;t<Ot.length;t++)if(a=Ot[t],n=a.interleaved,n!==null){a.interleaved=null;var r=n.next,i=a.pending;if(i!==null){var s=i.next;i.next=r,n.next=s}a.pending=n}Ot=null}return e}function Zc(e,t){do{var a=X;try{if(Xs(),Kn.current=Sr,br){for(var n=V.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}br=!1}if(Vt=0,ee=K=V=null,Qa=!1,pn=0,co.current=null,a===null||a.return===null){J=1,hn=t,X=null;break}e:{var i=e,s=a.return,l=a,d=t;if(t=ne,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,m=l,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Sl(s);if(v!==null){v.flags&=-257,El(v,s,l,i,t),v.mode&1&&bl(i,c,t),t=v,d=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(d),t.updateQueue=x}else w.add(d);break e}else{if(!(t&1)){bl(i,c,t),ho();break e}d=Error(b(426))}}else if(U&&l.mode&1){var E=Sl(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),El(E,s,l,i,t),Qs(xa(d,l));break e}}i=d=xa(d,l),J!==4&&(J=2),Xa===null?Xa=[i]:Xa.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=jc(i,d,t);gl(i,p);break e;case 1:l=d;var u=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(St===null||!St.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=Fc(i,l,t);gl(i,_);break e}}i=i.return}while(i!==null)}au(a)}catch(S){t=S,X===a&&a!==null&&(X=a=a.return);continue}break}while(!0)}function eu(){var e=Er.current;return Er.current=Sr,e===null?Sr:e}function ho(){(J===0||J===3||J===2)&&(J=4),te===null||!(qt&268435455)&&!(Hr&268435455)||mt(te,ne)}function Tr(e,t){var a=I;I|=2;var n=eu();(te!==e||ne!==t)&&(Xe=null,Bt(e,t));do try{Jm();break}catch(r){Zc(e,r)}while(!0);if(Xs(),I=a,Er.current=n,X!==null)throw Error(b(261));return te=null,ne=0,J}function Jm(){for(;X!==null;)tu(X)}function Zm(){for(;X!==null&&!Ep();)tu(X)}function tu(e){var t=ru(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?au(e):X=t,co.current=null}function au(e){var t=e;do{var a=t.alternate;if(e=t.return,t.flags&32768){if(a=Gm(a,t),a!==null){a.flags&=32767,X=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}else if(a=qm(a,t,we),a!==null){X=a;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);J===0&&(J=5)}function It(e,t,a){var n=j,r=Ae.transition;try{Ae.transition=null,j=1,ef(e,t,a,n)}finally{Ae.transition=r,j=n}return null}function ef(e,t,a,n){do ma();while(gt!==null);if(I&6)throw Error(b(327));a=e.finishedWork;var r=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(Dp(e,i),e===te&&(X=te=null,ne=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Hn||(Hn=!0,iu(lr,function(){return ma(),null})),i=(a.flags&15990)!==0,a.subtreeFlags&15990||i){i=Ae.transition,Ae.transition=null;var s=j;j=1;var l=I;I|=4,co.current=null,Qm(e,a),Xc(a,e),wm(Zi),cr=!!Ji,Zi=Ji=null,e.current=a,Ym(a),kp(),I=l,j=s,Ae.transition=i}else e.current=a;if(Hn&&(Hn=!1,gt=e,Cr=r),i=e.pendingLanes,i===0&&(St=null),Rp(a.stateNode),ve(e,Y()),t!==null)for(n=e.onRecoverableError,a=0;a<t.length;a++)r=t[a],n(r.value,{componentStack:r.stack,digest:r.digest});if(kr)throw kr=!1,e=xs,xs=null,e;return Cr&1&&e.tag!==0&&ma(),i=e.pendingLanes,i&1?e===ws?Ka++:(Ka=0,ws=e):Ka=0,Nt(),null}function ma(){if(gt!==null){var e=jd(Cr),t=Ae.transition,a=j;try{if(Ae.transition=null,j=16>e?16:e,gt===null)var n=!1;else{if(e=gt,gt=null,Cr=0,I&6)throw Error(b(331));var r=I;for(I|=4,T=e.current;T!==null;){var i=T,s=i.child;if(T.flags&16){var l=i.deletions;if(l!==null){for(var d=0;d<l.length;d++){var c=l[d];for(T=c;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:Ya(8,m,i)}var f=m.child;if(f!==null)f.return=m,T=f;else for(;T!==null;){m=T;var g=m.sibling,v=m.return;if($c(m),m===c){T=null;break}if(g!==null){g.return=v,T=g;break}T=v}}}var w=i.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}T=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,T=s;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ya(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,T=p;break e}T=i.return}}var u=e.current;for(T=u;T!==null;){s=T;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,T=h;else e:for(s=u;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ur(9,l)}}catch(S){$(l,l.return,S)}if(l===s){T=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,T=_;break e}T=l.return}}if(I=r,Nt(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Lr,e)}catch{}n=!0}return n}finally{j=a,Ae.transition=t}}return!1}function Fl(e,t,a){t=xa(a,t),t=jc(e,t,1),e=bt(e,t,1),t=ue(),e!==null&&(yn(e,1,t),ve(e,t))}function $(e,t,a){if(e.tag===3)Fl(e,e,a);else for(;t!==null;){if(t.tag===3){Fl(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(St===null||!St.has(n))){e=xa(a,e),e=Fc(t,e,1),t=bt(t,e,1),e=ue(),t!==null&&(yn(t,1,e),ve(t,e));break}}t=t.return}}function tf(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&a,te===e&&(ne&a)===a&&(J===4||J===3&&(ne&130023424)===ne&&500>Y()-po?Bt(e,0):uo|=a),ve(e,t)}function nu(e,t){t===0&&(e.mode&1?(t=Mn,Mn<<=1,!(Mn&130023424)&&(Mn=4194304)):t=1);var a=ue();e=rt(e,t),e!==null&&(yn(e,t,a),ve(e,a))}function af(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),nu(e,a)}function nf(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(b(314))}n!==null&&n.delete(t),nu(e,a)}var ru;ru=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)he=!0;else{if(!(e.lanes&a)&&!(t.flags&128))return he=!1,Vm(e,t,a);he=!!(e.flags&131072)}else he=!1,U&&t.flags&1048576&&lc(t,yr,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Zn(e,t),e=t.pendingProps;var r=ha(t,le.current);pa(t,a),r=ro(null,t,n,e,r,a);var i=io();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(n)?(i=!0,hr(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zs(t),r.updater=Br,t.stateNode=r,r._reactInternals=t,ls(t,n,e,a),t=us(null,t,n,!0,i,a)):(t.tag=0,U&&i&&Gs(t),ce(null,t,r,a),t=t.child),t;case 16:n=t.elementType;e:{switch(Zn(e,t),e=t.pendingProps,r=n._init,n=r(n._payload),t.type=n,r=t.tag=sf(n),e=De(n,e),r){case 0:t=cs(null,t,n,e,a);break e;case 1:t=Tl(null,t,n,e,a);break e;case 11:t=kl(null,t,n,e,a);break e;case 14:t=Cl(null,t,n,De(n.type,e),a);break e}throw Error(b(306,n,""))}return t;case 0:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:De(n,r),cs(e,t,n,r,a);case 1:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:De(n,r),Tl(e,t,n,r,a);case 3:e:{if(Uc(t),e===null)throw Error(b(387));n=t.pendingProps,i=t.memoizedState,r=i.element,fc(e,t),wr(t,n,null,a);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=xa(Error(b(423)),t),t=Rl(e,t,n,a,r);break e}else if(n!==r){r=xa(Error(b(424)),t),t=Rl(e,t,n,a,r);break e}else for(_e=_t(t.stateNode.containerInfo.firstChild),be=t,U=!0,je=null,a=pc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ga(),n===r){t=it(e,t,a);break e}ce(e,t,n,a)}t=t.child}return t;case 5:return hc(t),e===null&&is(t),n=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,s=r.children,es(n,r)?s=null:i!==null&&es(n,i)&&(t.flags|=32),Bc(e,t),ce(e,t,s,a),t.child;case 6:return e===null&&is(t),null;case 13:return Hc(e,t,a);case 4:return eo(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ya(t,null,n,a):ce(e,t,n,a),t.child;case 11:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:De(n,r),kl(e,t,n,r,a);case 7:return ce(e,t,t.pendingProps,a),t.child;case 8:return ce(e,t,t.pendingProps.children,a),t.child;case 12:return ce(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(n=t.type._context,r=t.pendingProps,i=t.memoizedProps,s=r.value,O(vr,n._currentValue),n._currentValue=s,i!==null)if(Be(i.value,s)){if(i.children===r.children&&!ge.current){t=it(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var d=l.firstContext;d!==null;){if(d.context===n){if(i.tag===1){d=tt(-1,a&-a),d.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?d.next=d:(d.next=m.next,m.next=d),c.pending=d}}i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),ss(i.return,a,t),l.lanes|=a;break}d=d.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(b(341));s.lanes|=a,l=s.alternate,l!==null&&(l.lanes|=a),ss(s,a,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ce(e,t,r.children,a),t=t.child}return t;case 9:return r=t.type,n=t.pendingProps.children,pa(t,a),r=Ne(r),n=n(r),t.flags|=1,ce(e,t,n,a),t.child;case 14:return n=t.type,r=De(n,t.pendingProps),r=De(n.type,r),Cl(e,t,n,r,a);case 15:return Oc(e,t,t.type,t.pendingProps,a);case 17:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:De(n,r),Zn(e,t),t.tag=1,ye(n)?(e=!0,hr(t)):e=!1,pa(t,a),Ic(t,n,r),ls(t,n,r,a),us(null,t,n,!0,e,a);case 19:return Wc(e,t,a);case 22:return zc(e,t,a)}throw Error(b(156,t.tag))};function iu(e,t){return Md(e,t)}function rf(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,a,n){return new rf(e,t,a,n)}function go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sf(e){if(typeof e=="function")return go(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ds)return 11;if(e===Is)return 14}return 2}function kt(e,t){var a=e.alternate;return a===null?(a=Re(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function ar(e,t,a,n,r,i){var s=2;if(n=e,typeof e=="function")go(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Kt:return Ut(a.children,r,i,t);case Ls:s=8,r|=8;break;case Mi:return e=Re(12,a,t,r|2),e.elementType=Mi,e.lanes=i,e;case Li:return e=Re(13,a,t,r),e.elementType=Li,e.lanes=i,e;case Di:return e=Re(19,a,t,r),e.elementType=Di,e.lanes=i,e;case hd:return Wr(a,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case md:s=10;break e;case fd:s=9;break e;case Ds:s=11;break e;case Is:s=14;break e;case ct:s=16,n=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Re(s,a,t,r),t.elementType=e,t.type=n,t.lanes=i,t}function Ut(e,t,a,n){return e=Re(7,e,n,t),e.lanes=a,e}function Wr(e,t,a,n){return e=Re(22,e,n,t),e.elementType=hd,e.lanes=a,e.stateNode={isHidden:!1},e}function ki(e,t,a){return e=Re(6,e,null,t),e.lanes=a,e}function Ci(e,t,a){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function of(e,t,a,n,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=si(0),this.expirationTimes=si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.identifierPrefix=n,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yo(e,t,a,n,r,i,s,l,d){return e=new of(e,t,a,l,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Re(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zs(i),e}function lf(e,t,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:a}}function su(e){if(!e)return Tt;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var a=e.type;if(ye(a))return sc(e,a,t)}return t}function ou(e,t,a,n,r,i,s,l,d){return e=yo(a,n,!0,e,r,i,s,l,d),e.context=su(null),a=e.current,n=ue(),r=Et(a),i=tt(n,r),i.callback=t??null,bt(a,i,r),e.current.lanes=r,yn(e,r,n),ve(e,n),e}function Vr(e,t,a,n){var r=t.current,i=ue(),s=Et(r);return a=su(a),t.context===null?t.context=a:t.pendingContext=a,t=tt(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=bt(r,t,s),e!==null&&(Oe(e,r,s,i),Xn(e,r,s)),s}function Rr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ol(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function vo(e,t){Ol(e,t),(e=e.alternate)&&Ol(e,t)}function df(){return null}var lu=typeof reportError=="function"?reportError:function(e){console.error(e)};function xo(e){this._internalRoot=e}qr.prototype.render=xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Vr(e,t,null,null)};qr.prototype.unmount=xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){Vr(null,e,null,null)}),t[nt]=null}};function qr(e){this._internalRoot=e}qr.prototype.unstable_scheduleHydration=function(e){if(e){var t=zd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<pt.length&&t!==0&&t<pt[a].priority;a++);pt.splice(a,0,e),a===0&&Ud(e)}};function wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zl(){}function cf(e,t,a,n,r){if(r){if(typeof n=="function"){var i=n;n=function(){var c=Rr(s);i.call(c)}}var s=ou(t,n,e,0,null,!1,!1,"",zl);return e._reactRootContainer=s,e[nt]=s.current,on(e.nodeType===8?e.parentNode:e),Gt(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof n=="function"){var l=n;n=function(){var c=Rr(d);l.call(c)}}var d=yo(e,0,!1,null,null,!1,!1,"",zl);return e._reactRootContainer=d,e[nt]=d.current,on(e.nodeType===8?e.parentNode:e),Gt(function(){Vr(t,d,a,n)}),d}function $r(e,t,a,n,r){var i=a._reactRootContainer;if(i){var s=i;if(typeof r=="function"){var l=r;r=function(){var d=Rr(s);l.call(d)}}Vr(t,s,e,r)}else s=cf(a,t,e,r,n);return Rr(s)}Fd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=Ua(t.pendingLanes);a!==0&&(Os(t,a|1),ve(t,Y()),!(I&6)&&(wa=Y()+500,Nt()))}break;case 13:Gt(function(){var n=rt(e,1);if(n!==null){var r=ue();Oe(n,e,1,r)}}),vo(e,1)}};zs=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var a=ue();Oe(t,e,134217728,a)}vo(e,134217728)}};Od=function(e){if(e.tag===13){var t=Et(e),a=rt(e,t);if(a!==null){var n=ue();Oe(a,e,t,n)}vo(e,t)}};zd=function(){return j};Bd=function(e,t){var a=j;try{return j=e,t()}finally{j=a}};Vi=function(e,t,a){switch(t){case"input":if(Fi(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var r=Fr(n);if(!r)throw Error(b(90));yd(n),Fi(n,r)}}}break;case"textarea":xd(e,a);break;case"select":t=a.value,t!=null&&la(e,!!a.multiple,t,!1)}};Cd=mo;Td=Gt;var uf={usingClientEntryPoint:!1,Events:[xn,ta,Fr,Ed,kd,mo]},Fa={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pf={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nd(e),e===null?null:e.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||df,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wn.isDisabled&&Wn.supportsFiber)try{Lr=Wn.inject(pf),qe=Wn}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uf;Ee.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wo(t))throw Error(b(200));return lf(e,t,null,a)};Ee.createRoot=function(e,t){if(!wo(e))throw Error(b(299));var a=!1,n="",r=lu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=yo(e,1,!1,null,null,a,!1,n,r),e[nt]=t.current,on(e.nodeType===8?e.parentNode:e),new xo(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Nd(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Gt(e)};Ee.hydrate=function(e,t,a){if(!Gr(t))throw Error(b(200));return $r(null,e,t,!0,a)};Ee.hydrateRoot=function(e,t,a){if(!wo(e))throw Error(b(405));var n=a!=null&&a.hydratedSources||null,r=!1,i="",s=lu;if(a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(s=a.onRecoverableError)),t=ou(t,null,e,1,a??null,r,!1,i,s),e[nt]=t.current,on(e),n)for(e=0;e<n.length;e++)a=n[e],r=a._getVersion,r=r(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,r]:t.mutableSourceEagerHydrationData.push(a,r);return new qr(t)};Ee.render=function(e,t,a){if(!Gr(t))throw Error(b(200));return $r(null,e,t,!1,a)};Ee.unmountComponentAtNode=function(e){if(!Gr(e))throw Error(b(40));return e._reactRootContainer?(Gt(function(){$r(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Ee.unstable_batchedUpdates=mo;Ee.unstable_renderSubtreeIntoContainer=function(e,t,a,n){if(!Gr(a))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return $r(e,t,a,!1,n)};Ee.version="18.3.1-next-f1338f8080-20240426";function du(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(du)}catch(e){console.error(e)}}du(),dd.exports=Ee;var mf=dd.exports,cu,Bl=mf;cu=Bl.createRoot,Bl.hydrateRoot;/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var _o=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,uu=/^[\\/]{2}/;function ff(e,t){return t+e.replace(/\\/g,"/")}var Ul="popstate";function Hl(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function hf(e={}){function t(n,r){var c;let i=(c=r.state)==null?void 0:c.masked,{pathname:s,search:l,hash:d}=i||n.location;return Ss("",{pathname:s,search:l,hash:d},r.state&&r.state.usr||null,r.state&&r.state.key||"default",i?{pathname:n.location.pathname,search:n.location.search,hash:n.location.hash}:void 0)}function a(n,r){return typeof r=="string"?r:_a(r)}return yf(t,a,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $e(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gf(){return Math.random().toString(36).substring(2,10)}function Wl(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Ss(e,t,a=null,n,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ta(t):t,state:a,key:t&&t.key||n||gf(),mask:r}}function _a({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function Ta(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function yf(e,t,a,n={}){let{window:r=document.defaultView,v5Compat:i=!1}=n,s=r.history,l="POP",d=null,c=m();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function m(){return(s.state||{idx:null}).idx}function f(){l="POP";let E=m(),p=E==null?null:E-c;c=E,d&&d({action:l,location:x.location,delta:p})}function g(E,p){l="PUSH";let u=Hl(E)?E:Ss(x.location,E,p);c=m()+1;let h=Wl(u,c),_=x.createHref(u.mask||u);try{s.pushState(h,"",_)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(_)}i&&d&&d({action:l,location:x.location,delta:1})}function v(E,p){l="REPLACE";let u=Hl(E)?E:Ss(x.location,E,p);c=m();let h=Wl(u,c),_=x.createHref(u.mask||u);s.replaceState(h,"",_),i&&d&&d({action:l,location:x.location,delta:0})}function w(E){return vf(r,E)}let x={get action(){return l},get location(){return e(r,s)},listen(E){if(d)throw new Error("A history only accepts one active listener");return r.addEventListener(Ul,f),d=E,()=>{r.removeEventListener(Ul,f),d=null}},createHref(E){return t(r,E)},createURL:w,encodeLocation(E){let p=w(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(E){return s.go(E)}};return x}function vf(e,t,a=!1){let n="http://localhost";e&&(n=e.location.origin!=="null"?e.location.origin:e.location.href),q(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:_a(t);return r=r.replace(/ $/,"%20"),!a&&uu.test(r)&&(r=n+r),new URL(r,n)}function pu(e,t,a="/"){return xf(e,t,a,!1)}function xf(e,t,a,n,r){let i=typeof t=="string"?Ta(t):t,s=st(i.pathname||"/",a);if(s==null)return null;let l=wf(e),d=null,c=Pf(s);for(let m=0;d==null&&m<l.length;++m)d=Nf(l[m],c,n);return d}function wf(e){let t=mu(e);return _f(t),t}function mu(e,t=[],a=[],n="",r=!1){let i=(s,l,d=r,c)=>{let m={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(n)&&d)return;q(m.relativePath.startsWith(n),`Absolute route path "${m.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(n.length)}let f=ze([n,m.relativePath]),g=a.concat(m);s.children&&s.children.length>0&&(q(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),mu(s.children,t,g,f,d)),!(s.path==null&&!s.index)&&t.push({path:f,score:Rf(f,s.index),routesMeta:g.map((v,w)=>{let[x,E]=gu(v.relativePath,v.caseSensitive,w===g.length-1);return{...v,matcher:x,compiledParams:E}})})};return e.forEach((s,l)=>{var d;if(s.path===""||!((d=s.path)!=null&&d.includes("?")))i(s,l);else for(let c of fu(s.path))i(s,l,!0,c)}),t}function fu(e){let t=e.split("/");if(t.length===0)return[];let[a,...n]=t,r=a.endsWith("?"),i=a.replace(/\?$/,"");if(n.length===0)return r?[i,""]:[i];let s=fu(n.join("/")),l=[];return l.push(...s.map(d=>d===""?i:[i,d].join("/"))),r&&l.push(...s),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function _f(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:Af(t.routesMeta.map(n=>n.childrenIndex),a.routesMeta.map(n=>n.childrenIndex)))}var bf=/^:[\w-]+$/,Sf=3,Ef=2,kf=1,Cf=10,Tf=-2,Vl=e=>e==="*";function Rf(e,t){let a=e.split("/"),n=a.length;return a.some(Vl)&&(n+=Tf),t&&(n+=Ef),a.filter(r=>!Vl(r)).reduce((r,i)=>r+(bf.test(i)?Sf:i===""?kf:Cf),n)}function Af(e,t){return e.length===t.length&&e.slice(0,-1).every((n,r)=>n===t[r])?e[e.length-1]-t[t.length-1]:0}function Nf(e,t,a=!1){let{routesMeta:n}=e,r={},i="/",s=[];for(let l=0;l<n.length;++l){let d=n[l],c=l===n.length-1,m=i==="/"?t:t.slice(i.length)||"/",f={path:d.relativePath,caseSensitive:d.caseSensitive,end:c},g=d.matcher&&d.compiledParams?hu(f,m,d.matcher,d.compiledParams):Ar(f,m),v=d.route;if(!g&&c&&a&&!n[n.length-1].route.index&&(g=Ar({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!g)return null;Object.assign(r,g.params),s.push({params:r,pathname:ze([i,g.pathname]),pathnameBase:Df(ze([i,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(i=ze([i,g.pathnameBase]))}return s}function Ar(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,n]=gu(e.path,e.caseSensitive,e.end);return hu(e,t,a,n)}function hu(e,t,a,n){let r=t.match(a);if(!r)return null;let i=r[0],s=ba(i,1),l=r.slice(1);return{params:n.reduce((c,{paramName:m,isOptional:f},g)=>{if(m==="*"){let w=l[g]||"";s=ba(i.slice(0,i.length-w.length),1)}const v=l[g];return f&&!v?c[m]=void 0:c[m]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function gu(e,t=!1,a=!0){$e(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,d,c,m)=>{if(n.push({paramName:l,isOptional:d!=null}),d){let f=m.charAt(c+s.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),n]}function Pf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $e(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function st(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,n=e.charAt(a);return n&&n!=="/"?null:e.slice(a)||"/"}function Mf(e,t="/"){let{pathname:a,search:n="",hash:r=""}=typeof e=="string"?Ta(e):e,i;return a?(a=vu(a),a.startsWith("/")||a.startsWith("\\")?i=ql(a.substring(1),"/"):i=ql(a,t)):i=t,{pathname:i,search:If(n),hash:jf(r)}}function ql(e,t){let a=ba(t).split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function Ti(e,t,a,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Lf(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function yu(e){let t=Lf(e);return t.map((a,n)=>n===t.length-1?a.pathname:a.pathnameBase)}function bo(e,t,a,n=!1){let r;typeof e=="string"?r=Ta(e):(r={...e},q(!r.pathname||!r.pathname.includes("?"),Ti("?","pathname","search",r)),q(!r.pathname||!r.pathname.includes("#"),Ti("#","pathname","hash",r)),q(!r.search||!r.search.includes("#"),Ti("#","search","hash",r)));let i=e===""||r.pathname==="",s=i?"/":r.pathname,l;if(s==null)l=a;else{let f=t.length-1;if(!n&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),f-=1;r.pathname=g.join("/")}l=f>=0?t[f]:"/"}let d=Mf(r,l),c=s&&s!=="/"&&s.endsWith("/"),m=(i||s===".")&&a.endsWith("/");return!d.pathname.endsWith("/")&&(c||m)&&(d.pathname+="/"),d}var vu=e=>e.replace(/[\\/]{2,}/g,"/"),ze=e=>vu(e.join("/"));function ba(e,t=0){let a=e.length;for(;a>t&&e.charCodeAt(a-1)===47;)a--;return a===e.length?e:e.slice(0,a)}var Df=e=>ba(e).replace(/^\/*/,"/"),If=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Ff=class{constructor(e,t,a,n=!1){this.status=e,this.statusText=t||"",this.internal=n,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function Of(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function zf(e){let t=e.map(a=>a.route.path).filter(Boolean);return ze(t)||"/"}var xu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function wu(e,t){let a=e;if(typeof a!="string"||!_o.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let n=a,r=!1;if(xu)try{let i=new URL(window.location.href),s=uu.test(a)?new URL(ff(a,i.protocol)):new URL(a),l=st(s.pathname,t);s.origin===i.origin&&l!=null?a=l+s.search+s.hash:r=!0}catch{$e(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:r,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Gl=new URL("http://localhost");function _u(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),Gl)}catch{return Gl}}function Ri(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function Bf(e,t){if(e.startsWith("//"))return!0;let a=t.protocol.toLowerCase();return e.toLowerCase().startsWith(a)?t.host===""||e.slice(a.length).startsWith("//"):!1}function bu(e,t,a,n){let r=null;try{r=e==null?null:new URL(e,a)}catch{}let i=new URL(t,a),s=r!=null&&!Ri(r,a),l=!Ri(i,a);if(n==="reject"){if(s||l)throw new Error("External navigation is not allowed")}else if(l&&(r==null||!Bf(e,r)||!Ri(r,i)))throw new Error("External navigation is not allowed")}var Su=["POST","PUT","PATCH","DELETE"];new Set(Su);var Uf=["GET",...Su];new Set(Uf);var Hf=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Wf(e){try{return Hf.includes(new URL(e).protocol)}catch{return!1}}var Ra=y.createContext(null);Ra.displayName="DataRouter";var Qr=y.createContext(null);Qr.displayName="DataRouterState";var Eu=y.createContext(!1);function Vf(){return y.useContext(Eu)}var ku=y.createContext({isTransitioning:!1});ku.displayName="ViewTransition";var qf=y.createContext(new Map);qf.displayName="Fetchers";var Gf=y.createContext(null);Gf.displayName="Await";var Me=y.createContext(null);Me.displayName="Navigation";var _n=y.createContext(null);_n.displayName="Location";var Qe=y.createContext({outlet:null,matches:[],isDataRoute:!1});Qe.displayName="Route";var So=y.createContext(null);So.displayName="RouteError";var Cu="REACT_ROUTER_ERROR",$f="REDIRECT",Qf="ROUTE_ERROR_RESPONSE";function Yf(e){if(e.startsWith(`${Cu}:${$f}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Xf(e){if(e.startsWith(`${Cu}:${Qf}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Ff(t.status,t.statusText,t.data)}catch{}}function Kf(e,{relative:t}={}){q(bn(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:n}=y.useContext(Me),{hash:r,pathname:i,search:s}=Sn(e,{relative:t}),l=i;return a!=="/"&&(l=i==="/"?a:ze([a,i])),n.createHref({pathname:l,search:s,hash:r})}function bn(){return y.useContext(_n)!=null}function Ye(){return q(bn(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(_n).location}var Tu="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ru(e){y.useContext(Me).static||y.useLayoutEffect(e)}function Jf(){let{isDataRoute:e}=y.useContext(Qe);return e?uh():Zf()}function Zf(){q(bn(),"useNavigate() may be used only in the context of a <Router> component.");let e=y.useContext(Ra),{basename:t,navigator:a}=y.useContext(Me),{matches:n}=y.useContext(Qe),{pathname:r}=Ye(),i=JSON.stringify(yu(n)),s=y.useRef(!1);return Ru(()=>{s.current=!0}),y.useCallback((d,c={})=>{if($e(s.current,Tu),!s.current)return;if(typeof d=="number"){a.go(d);return}let m=bo(d,JSON.parse(i),r,c.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ze([t,m.pathname])),bu(typeof d=="string"?d:_a(d),a.createHref(m),_u(a),"reject"),(c.replace?a.replace:a.push)(m,c.state,c)},[t,a,i,r,e])}y.createContext(null);function Au(){let{matches:e}=y.useContext(Qe),t=e[e.length-1];return(t==null?void 0:t.params)??{}}function Sn(e,{relative:t}={}){let{matches:a}=y.useContext(Qe),{pathname:n}=Ye(),r=JSON.stringify(yu(a));return y.useMemo(()=>bo(e,JSON.parse(r),n,t==="path"),[e,r,n,t])}function eh(e,t){return Nu(e,t)}function Nu(e,t,a){var E;q(bn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=y.useContext(Me),{matches:r}=y.useContext(Qe),i=r[r.length-1],s=i?i.params:{},l=i?i.pathname:"/",d=i?i.pathnameBase:"/",c=i&&i.route;{let p=c&&c.path||"";Mu(l,!c||p.endsWith("*")||p.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${p}"> to <Route path="${p==="/"?"*":`${p}/*`}">.`)}let m=Ye(),f;if(t){let p=typeof t=="string"?Ta(t):t;q(d==="/"||((E=p.pathname)==null?void 0:E.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${p.pathname}" was given in the \`location\` prop.`),f=p}else f=m;let g=f.pathname||"/",v=g;if(d!=="/"){let p=d.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(p.length).join("/")}let w=a&&a.state.matches.length?a.state.matches.map(p=>Object.assign(p,{route:a.manifest[p.route.id]||p.route})):pu(e,{pathname:v});$e(c||w!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),$e(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=ih(w&&w.map(p=>Object.assign({},p,{params:Object.assign({},s,p.params),pathname:ze([d,n.encodeLocation?n.encodeLocation(p.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?d:ze([d,n.encodeLocation?n.encodeLocation(p.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:p.pathnameBase])})),r,a);return t&&x?y.createElement(_n.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...f},navigationType:"POP"}},x):x}function th(){let e=ch(),t=Of(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:n},i={padding:"2px 4px",backgroundColor:n},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:i},"ErrorBoundary")," or"," ",y.createElement("code",{style:i},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),a?y.createElement("pre",{style:r},a):null,s)}var ah=y.createElement(th,null),Pu=class extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=Xf(e.digest);a&&(e=a)}let t=e!==void 0?y.createElement(Qe.Provider,{value:this.props.routeContext},y.createElement(So.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?y.createElement(nh,{error:e},t):t}};Pu.contextType=Eu;var Ai=new WeakMap;function nh({children:e,error:t}){let{basename:a,navigator:n}=y.useContext(Me);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=Yf(t.digest);if(r){let i=Ai.get(t);if(i)throw i;let s=wu(r.location,a),l=s.absoluteURL||s.to;if(bu(r.location,l,_u(n),"allow-explicit"),Wf(l))throw new Error("Invalid redirect location");if(xu&&!Ai.get(t))if(s.isExternal||r.reloadDocument)window.location.href=l;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:r.replace}));throw Ai.set(t,d),d}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l}`})}}return e}function rh({routeContext:e,match:t,children:a}){let n=y.useContext(Ra);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(Qe.Provider,{value:e},a)}function ih(e,t=[],a){let n=a==null?void 0:a.state;if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let r=e,i=n==null?void 0:n.errors;if(i!=null){let m=r.findIndex(f=>f.route.id&&(i==null?void 0:i[f.route.id])!==void 0);q(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),r=r.slice(0,Math.min(r.length,m+1))}let s=!1,l=-1;if(a&&n){s=n.renderFallback;for(let m=0;m<r.length;m++){let f=r[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(l=m),f.route.id){let{loaderData:g,errors:v}=n,w=f.route.loader&&!g.hasOwnProperty(f.route.id)&&(!v||v[f.route.id]===void 0);if(f.route.lazy||w){a.isStatic&&(s=!0),l>=0?r=r.slice(0,l+1):r=[r[0]];break}}}}let d=a==null?void 0:a.onError,c=n&&d?(m,f)=>{var g,v;d(m,{location:n.location,params:((v=(g=n.matches)==null?void 0:g[0])==null?void 0:v.params)??{},pattern:zf(n.matches),errorInfo:f})}:void 0;return r.reduceRight((m,f,g)=>{let v,w=!1,x=null,E=null;n&&(v=i&&f.route.id?i[f.route.id]:void 0,x=f.route.errorElement||ah,s&&(l<0&&g===0?(Mu("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,E=null):l===g&&(w=!0,E=f.route.hydrateFallbackElement||null)));let p=t.concat(r.slice(0,g+1)),u=()=>{let h;return v?h=x:w?h=E:f.route.Component?h=y.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=m,y.createElement(rh,{match:f,routeContext:{outlet:m,matches:p,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?y.createElement(Pu,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:u(),routeContext:{outlet:null,matches:p,isDataRoute:!0},onError:c}):u()},null)}function Eo(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sh(e){let t=y.useContext(Ra);return q(t,Eo(e)),t}function oh(e){let t=y.useContext(Qr);return q(t,Eo(e)),t}function lh(e){let t=y.useContext(Qe);return q(t,Eo(e)),t}function ko(e){let t=lh(e),a=t.matches[t.matches.length-1];return q(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function dh(){return ko("useRouteId")}function ch(){var n;let e=y.useContext(So),t=oh("useRouteError"),a=ko("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[a]}function uh(){let{router:e}=sh("useNavigate"),t=ko("useNavigate"),a=y.useRef(!1);return Ru(()=>{a.current=!0}),y.useCallback(async(r,i={})=>{$e(a.current,Tu),a.current&&(typeof r=="number"?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var $l={};function Mu(e,t,a){!t&&!$l[e]&&($l[e]=!0,$e(!1,a))}y.memo(ph);function ph({routes:e,manifest:t,future:a,state:n,isStatic:r,onError:i}){return Nu(e,void 0,{manifest:t,state:n,isStatic:r,onError:i,future:a})}function jt(e){q(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mh({basename:e="/",children:t=null,location:a,navigationType:n="POP",navigator:r,static:i=!1,useTransitions:s}){q(!bn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),d=y.useMemo(()=>({basename:l,navigator:r,static:i,useTransitions:s,future:{}}),[l,r,i,s]);typeof a=="string"&&(a=Ta(a));let{pathname:c="/",search:m="",hash:f="",state:g=null,key:v="default",mask:w}=a,x=y.useMemo(()=>{let E=st(c,l);return E==null?null:{location:{pathname:E,search:m,hash:f,state:g,key:v,mask:w},navigationType:n}},[l,c,m,f,g,v,n,w]);return $e(x!=null,`<Router basename="${l}"> is not able to match the URL "${c}${m}${f}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:y.createElement(Me.Provider,{value:d},y.createElement(_n.Provider,{children:t,value:x}))}function fh({children:e,location:t}){return eh(Es(e),t)}function Es(e,t=[]){let a=[];return y.Children.forEach(e,(n,r)=>{if(!y.isValidElement(n))return;let i=[...t,r];if(n.type===y.Fragment){a.push.apply(a,Es(n.props.children,i));return}q(n.type===jt,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),q(!n.props.index||!n.props.children,"An index route cannot have child routes.");let s={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Es(n.props.children,i)),a.push(s)}),a}var nr="get",rr="application/x-www-form-urlencoded";function Yr(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function hh(e){return Yr(e)&&e.tagName.toLowerCase()==="button"}function gh(e){return Yr(e)&&e.tagName.toLowerCase()==="form"}function yh(e){return Yr(e)&&e.tagName.toLowerCase()==="input"}function vh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xh(e,t){return e.button===0&&(!t||t==="_self")&&!vh(e)}var Vn=null;function wh(){if(Vn===null)try{new FormData(document.createElement("form"),0),Vn=!1}catch{Vn=!0}return Vn}var _h=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ni(e){return e!=null&&!_h.has(e)?($e(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rr}"`),null):e}function bh(e,t){let a,n,r,i,s;if(gh(e)){let l=e.getAttribute("action");n=l?st(l,t):null,a=e.getAttribute("method")||nr,r=Ni(e.getAttribute("enctype"))||rr,i=new FormData(e)}else if(hh(e)||yh(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||l.getAttribute("action");if(n=d?st(d,t):null,a=e.getAttribute("formmethod")||l.getAttribute("method")||nr,r=Ni(e.getAttribute("formenctype"))||Ni(l.getAttribute("enctype"))||rr,i=new FormData(l,e),!wh()){let{name:c,type:m,value:f}=e;if(m==="image"){let g=c?`${c}.`:"";i.append(`${g}x`,"0"),i.append(`${g}y`,"0")}else c&&i.append(c,f)}}else{if(Yr(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=nr,n=null,r=rr,s=e}return i&&r==="text/plain"&&(s=i,i=void 0),{action:n,method:a.toLowerCase(),encType:r,formData:i,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Co(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lu(e,t,a,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a?r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${n}`:r.pathname=`${r.pathname}.${n}`:r.pathname==="/"?r.pathname=`_root.${n}`:t&&st(r.pathname,t)==="/"?r.pathname=`${ba(t)}/_root.${n}`:r.pathname=`${ba(r.pathname)}.${n}`,r}async function Sh(e,t){if(e.id in t)return t[e.id];try{let a=await import(e.module);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Eh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function kh(e,t,a){let n=await Promise.all(e.map(async r=>{let i=t.routes[r.route.id];if(i){let s=await Sh(i,a);return s.links?s.links():[]}return[]}));return Ah(n.flat(1).filter(Eh).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Ql(e,t,a,n,r,i){let s=(d,c)=>a[c]?d.route.id!==a[c].route.id:!0,l=(d,c)=>{var m;return a[c].pathname!==d.pathname||((m=a[c].route.path)==null?void 0:m.endsWith("*"))&&a[c].params["*"]!==d.params["*"]};return i==="assets"?t.filter((d,c)=>s(d,c)||l(d,c)):i==="data"?t.filter((d,c)=>{var f;let m=n.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(s(d,c)||l(d,c))return!0;if(d.route.shouldRevalidate){let g=d.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=a[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Ch(e,t,{includeHydrateFallback:a}={}){return Th(e.map(n=>{let r=t.routes[n.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),a&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Th(e){return[...new Set(e)]}function Rh(e){let t={},a=Object.keys(e).sort();for(let n of a)t[n]=e[n];return t}function Ah(e,t){let a=new Set;return new Set(t),e.reduce((n,r)=>{let i=JSON.stringify(Rh(r));return a.has(i)||(a.add(i),n.push({key:i,link:r})),n},[])}function To(){let e=y.useContext(Ra);return Co(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Nh(){let e=y.useContext(Qr);return Co(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ro=y.createContext(void 0);Ro.displayName="FrameworkContext";function Xr(){let e=y.useContext(Ro);return Co(e,"You must render this element inside a <HydratedRouter> element"),e}function Ph(e,t){let a=y.useContext(Ro),[n,r]=y.useState(!1),[i,s]=y.useState(!1),{onFocus:l,onBlur:d,onMouseEnter:c,onMouseLeave:m,onTouchStart:f}=t,g=y.useRef(null);y.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let x=p=>{p.forEach(u=>{s(u.isIntersecting)})},E=new IntersectionObserver(x,{threshold:.5});return g.current&&E.observe(g.current),()=>{E.disconnect()}}},[e]),y.useEffect(()=>{if(n){let x=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(x)}}},[n]);let v=()=>{r(!0)},w=()=>{r(!1),s(!1)};return a?e!=="intent"?[i,g,{}]:[i,g,{onFocus:Oa(l,v),onBlur:Oa(d,w),onMouseEnter:Oa(c,v),onMouseLeave:Oa(m,w),onTouchStart:Oa(f,v)}]:[!1,g,{}]}function Oa(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function Mh({page:e,...t}){let a=Vf(),{nonce:n}=Xr(),{router:r}=To(),i=y.useMemo(()=>pu(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?(t.nonce==null&&n&&(t={...t,nonce:n}),a?y.createElement(Dh,{page:e,matches:i,...t}):y.createElement(Ih,{page:e,matches:i,...t})):null}function Lh(e){let{manifest:t,routeModules:a}=Xr(),[n,r]=y.useState([]);return y.useEffect(()=>{let i=!1;return kh(e,t,a).then(s=>{i||r(s)}),()=>{i=!0}},[e,t,a]),n}function Dh({page:e,matches:t,...a}){let n=Ye(),{future:r}=Xr(),{basename:i}=To(),s=y.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let l=Lu(e,i,r.v8_trailingSlashAwareDataRequests,"rsc"),d=!1,c=[];for(let m of t)typeof m.route.shouldRevalidate=="function"?d=!0:c.push(m.route.id);return d&&c.length>0&&l.searchParams.set("_routes",c.join(",")),[l.pathname+l.search]},[i,r.v8_trailingSlashAwareDataRequests,e,n,t]);return y.createElement(y.Fragment,null,s.map(l=>y.createElement("link",{key:l,rel:"prefetch",as:"fetch",href:l,...a})))}function Ih({page:e,matches:t,...a}){let n=Ye(),{future:r,manifest:i,routeModules:s}=Xr(),{basename:l}=To(),{loaderData:d,matches:c}=Nh(),m=y.useMemo(()=>Ql(e,t,c,i,n,"data"),[e,t,c,i,n]),f=y.useMemo(()=>Ql(e,t,c,i,n,"assets"),[e,t,c,i,n]),g=y.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let x=new Set,E=!1;if(t.forEach(u=>{var _;let h=i.routes[u.route.id];!h||!h.hasLoader||(!m.some(S=>S.route.id===u.route.id)&&u.route.id in d&&((_=s[u.route.id])!=null&&_.shouldRevalidate)||h.hasClientLoader?E=!0:x.add(u.route.id))}),x.size===0)return[];let p=Lu(e,l,r.v8_trailingSlashAwareDataRequests,"data");return E&&x.size>0&&p.searchParams.set("_routes",t.filter(u=>x.has(u.route.id)).map(u=>u.route.id).join(",")),[p.pathname+p.search]},[l,r.v8_trailingSlashAwareDataRequests,d,n,i,m,t,e,s]),v=y.useMemo(()=>Ch(f,i),[f,i]),w=Lh(f);return y.createElement(y.Fragment,null,g.map(x=>y.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...a})),v.map(x=>y.createElement("link",{key:x,rel:"modulepreload",href:x,...a})),w.map(({key:x,link:E})=>y.createElement("link",{key:x,nonce:a.nonce,...E,crossOrigin:E.crossOrigin??a.crossOrigin})))}function jh(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var Fh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fh&&(window.__reactRouterVersion="7.18.4")}catch{}function Oh({basename:e,children:t,useTransitions:a,window:n}){let r=y.useRef();r.current==null&&(r.current=hf({window:n,v5Compat:!0}));let i=r.current,[s,l]=y.useState({action:i.action,location:i.location}),d=y.useCallback(c=>{a===!1?l(c):y.startTransition(()=>l(c))},[a]);return y.useLayoutEffect(()=>i.listen(d),[i,d]),y.createElement(mh,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:i,useTransitions:a})}var W=y.forwardRef(function({onClick:t,discover:a="render",prefetch:n="none",relative:r,reloadDocument:i,replace:s,mask:l,state:d,target:c,to:m,preventScrollReset:f,viewTransition:g,defaultShouldRevalidate:v,...w},x){let{basename:E,navigator:p,useTransitions:u}=y.useContext(Me),h=typeof m=="string"&&_o.test(m),_=wu(m,E);m=_.to;let S=Kf(m,{relative:r}),k=Ye(),C=null;if(l){let Ue=bo(l,[],k.mask?k.mask.pathname:"/",!0);E!=="/"&&(Ue.pathname=Ue.pathname==="/"?E:ze([E,Ue.pathname])),C=p.createHref(Ue)}let[A,F,M]=Ph(n,w),xe=Hh(m,{replace:s,mask:l,state:d,target:c,preventScrollReset:f,relative:r,viewTransition:g,defaultShouldRevalidate:v,useTransitions:u});function Pt(Ue){t&&t(Ue),Ue.defaultPrevented||xe(Ue)}let lt=!(_.isExternal||i),Aa=y.createElement("a",{...w,...M,href:(lt?C:void 0)||_.absoluteURL||S,onClick:lt?Pt:t,ref:jh(x,F),target:c,"data-discover":!h&&a==="render"?"true":void 0});return A&&!h?y.createElement(y.Fragment,null,Aa,y.createElement(Mh,{page:S})):Aa});W.displayName="Link";var zh=y.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:n="",end:r=!1,style:i,to:s,viewTransition:l,children:d,...c},m){let f=Sn(s,{relative:c.relative}),g=Ye(),v=y.useContext(Qr),{navigator:w,basename:x}=y.useContext(Me),E=v!=null&&$h(f)&&l===!0,p=w.encodeLocation?w.encodeLocation(f).pathname:f.pathname,u=g.pathname,h=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;a||(u=u.toLowerCase(),h=h?h.toLowerCase():null,p=p.toLowerCase()),h&&x&&(h=st(h,x)||h);const _=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let S=u===p||!r&&u.startsWith(p)&&u.charAt(_)==="/",k=h!=null&&(h===p||!r&&h.startsWith(p)&&h.charAt(p.length)==="/"),C={isActive:S,isPending:k,isTransitioning:E},A=S?t:void 0,F;typeof n=="function"?F=n(C):F=[n,S?"active":null,k?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let M=typeof i=="function"?i(C):i;return y.createElement(W,{...c,"aria-current":A,className:F,ref:m,style:M,to:s,viewTransition:l},typeof d=="function"?d(C):d)});zh.displayName="NavLink";var Bh=y.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:n,replace:r,state:i,method:s=nr,action:l,onSubmit:d,relative:c,preventScrollReset:m,viewTransition:f,defaultShouldRevalidate:g,...v},w)=>{let{useTransitions:x}=y.useContext(Me),E=qh(),p=Gh(l,{relative:c}),u=s.toLowerCase()==="get"?"get":"post",h=typeof l=="string"&&_o.test(l),_=S=>{if(d&&d(S),S.defaultPrevented)return;S.preventDefault();let k=S.nativeEvent.submitter,C=(k==null?void 0:k.getAttribute("formmethod"))||s,A=()=>E(k||S.currentTarget,{fetcherKey:t,method:C,navigate:a,replace:r,state:i,relative:c,preventScrollReset:m,viewTransition:f,defaultShouldRevalidate:g});x&&a!==!1?y.startTransition(()=>A()):A()};return y.createElement("form",{ref:w,method:u,action:p,onSubmit:n?d:_,...v,"data-discover":!h&&e==="render"?"true":void 0})});Bh.displayName="Form";function Uh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Du(e){let t=y.useContext(Ra);return q(t,Uh(e)),t}function Hh(e,{target:t,replace:a,mask:n,state:r,preventScrollReset:i,relative:s,viewTransition:l,defaultShouldRevalidate:d,useTransitions:c}={}){let m=Jf(),f=Ye(),g=Sn(e,{relative:s});return y.useCallback(v=>{if(xh(v,t)){v.preventDefault();let w=a!==void 0?a:_a(f)===_a(g),x=()=>m(e,{replace:w,mask:n,state:r,preventScrollReset:i,relative:s,viewTransition:l,defaultShouldRevalidate:d});c?y.startTransition(()=>x()):x()}},[f,m,g,a,n,r,t,e,i,s,l,d,c])}var Wh=0,Vh=()=>`__${String(++Wh)}__`;function qh(){let{router:e}=Du("useSubmit"),{basename:t}=y.useContext(Me),a=dh(),n=e.fetch,r=e.navigate;return y.useCallback(async(i,s={})=>{let{action:l,method:d,encType:c,formData:m,body:f}=bh(i,t);if(s.navigate===!1){let g=s.fetcherKey||Vh();await n(g,a,s.action||l,{defaultShouldRevalidate:s.defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:m,body:f,formMethod:s.method||d,formEncType:s.encType||c,flushSync:s.flushSync})}else await r(s.action||l,{defaultShouldRevalidate:s.defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:m,body:f,formMethod:s.method||d,formEncType:s.encType||c,replace:s.replace,state:s.state,fromRouteId:a,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,r,t,a])}function Gh(e,{relative:t}={}){let{basename:a}=y.useContext(Me),n=y.useContext(Qe);q(n,"useFormAction must be used inside a RouteContext");let[r]=n.matches.slice(-1),i={...Sn(e||".",{relative:t})},s=Ye();if(e==null){i.search=s.search;let l=new URLSearchParams(i.search),d=l.getAll("index");if(d.some(m=>m==="")){l.delete("index"),d.filter(f=>f).forEach(f=>l.append("index",f));let m=l.toString();i.search=m?`?${m}`:""}}return(!e||e===".")&&r.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(i.pathname=i.pathname==="/"?a:ze([a,i.pathname])),_a(i)}function $h(e,{relative:t}={}){let a=y.useContext(ku);q(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Du("useViewTransitionState"),r=Sn(e,{relative:t});if(!a.isTransitioning)return!1;let i=st(a.currentLocation.pathname,n)||a.currentLocation.pathname,s=st(a.nextLocation.pathname,n)||a.nextLocation.pathname;return Ar(r.pathname,s)!=null||Ar(r.pathname,i)!=null}/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Iu=(...e)=>e.filter((t,a,n)=>!!t&&n.indexOf(t)===a).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:r="",children:i,iconNode:s,...l},d)=>y.createElement("svg",{ref:d,...Yh,width:t,height:t,stroke:e,strokeWidth:n?Number(a)*24/Number(t):a,className:Iu("lucide",r),...l},[...s.map(([c,m])=>y.createElement(c,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=(e,t)=>{const a=y.forwardRef(({className:n,...r},i)=>y.createElement(Xh,{ref:i,iconNode:t,className:Iu(`lucide-${Qh(e)}`,n),...r}));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=N("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=N("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=N("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=N("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=N("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=N("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=N("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=N("ChartArea",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",key:"q0gr47"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=N("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=N("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=N("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=N("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=N("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=N("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=N("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=N("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=N("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=N("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=N("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=N("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=N("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=N("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=N("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=N("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=N("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=N("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=N("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=N("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=N("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=N("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=N("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=N("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=N("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=N("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=N("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=N("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=N("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=N("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=N("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=N("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=N("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=N("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=N("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=N("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=N("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=N("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=N("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Kl=[{path:"/",label:"Home",icon:lg},{path:"/about",label:"About (CV)",icon:Sg},{path:"/tutorials",label:"Tutorials",icon:En},{path:"/projects",label:"Projects",icon:Pr}];function Rg(){const e=Ye(),[t,a]=y.useState(!1);return o.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"flex items-center justify-between h-16",children:[o.jsxs(W,{to:"/",className:"flex items-center gap-2 group",onClick:()=>a(!1),children:[o.jsx("div",{className:"w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center",children:o.jsx("span",{className:"text-black font-bold text-lg",children:"A"})}),o.jsx("span",{className:"text-white font-bold text-lg group-hover:text-emerald-400 transition-colors",children:"Amit's Data Blog"})]}),o.jsx("div",{className:"hidden md:flex items-center gap-1",children:Kl.map(n=>{const r=n.icon,i=e.pathname===n.path||n.path!=="/"&&e.pathname.startsWith(n.path);return o.jsxs(W,{to:n.path,className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${i?"bg-emerald-500/10 text-emerald-400":"text-zinc-400 hover:text-white hover:bg-zinc-800/50"}`,children:[o.jsx(r,{className:"w-4 h-4"}),n.label]},n.path)})}),o.jsx("button",{className:"md:hidden text-zinc-400 hover:text-white p-2",onClick:()=>a(!t),children:t?o.jsx(Tg,{className:"w-6 h-6"}):o.jsx(mg,{className:"w-6 h-6"})})]}),t&&o.jsx("div",{className:"md:hidden pb-4 space-y-1 animate-fade-in",children:Kl.map(n=>{const r=n.icon,i=e.pathname===n.path||n.path!=="/"&&e.pathname.startsWith(n.path);return o.jsxs(W,{to:n.path,onClick:()=>a(!1),className:`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${i?"bg-emerald-500/10 text-emerald-400":"text-zinc-400 hover:text-white hover:bg-zinc-800/50"}`,children:[o.jsx(r,{className:"w-5 h-5"}),n.label]},n.path)})})]})})}const Ag=[{icon:Ou,href:"https://github.com/",label:"GitHub"},{icon:zu,href:"https://linkedin.com/",label:"LinkedIn"},{icon:Bu,href:"mailto:amit.dataanalyst@example.com",label:"Email"}],Ng=[{path:"/",label:"Home"},{path:"/about",label:"About"},{path:"/tutorials",label:"Tutorials"},{path:"/projects",label:"Projects"}];function Pg(){return o.jsx("footer",{className:"border-t border-zinc-800 bg-[#0a0a0a] mt-20",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center",children:o.jsx("span",{className:"text-black font-bold",children:"A"})}),o.jsx("span",{className:"text-white font-bold",children:"Amit's Data Blog"})]}),o.jsx("p",{className:"text-zinc-500 text-sm leading-relaxed",children:"A personal blog sharing data analysis tutorials, projects, and insights — from basics to advanced."})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-white font-semibold mb-4 text-sm uppercase tracking-wider",children:"Navigation"}),o.jsx("ul",{className:"space-y-2",children:Ng.map(e=>o.jsx("li",{children:o.jsx(W,{to:e.path,className:"text-zinc-500 hover:text-emerald-400 transition-colors text-sm",children:e.label})},e.path))})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-white font-semibold mb-4 text-sm uppercase tracking-wider",children:"Connect"}),o.jsx("div",{className:"flex gap-3",children:Ag.map(e=>{const t=e.icon;return o.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-lg bg-zinc-800 hover:bg-emerald-500/20 flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition-all","aria-label":e.label,children:o.jsx(t,{className:"w-5 h-5"})},e.label)})})]})]}),o.jsx("div",{className:"mt-8 pt-8 border-t border-zinc-800/50 text-center",children:o.jsxs("p",{className:"text-zinc-600 text-sm",children:["© ",new Date().getFullYear()," Amit's Data Blog. Built with passion for data."]})})]})})}const Je=[{id:"data-analyst-roadmap",title:"Data Analyst Roadmap",category:"Roadmap",icon:"Map",description:"A complete roadmap to becoming a Data Analyst — from basics to advanced topics.",level:"Beginner",estimatedTime:"30 min read",sections:[{heading:"What is a Data Analyst?",content:["A Data Analyst collects, cleans, and interprets data to help organizations make better decisions. They work with data from various sources — databases, spreadsheets, APIs, and web pages — and transform it into reports, dashboards, and visualizations.","The role of a Data Analyst sits at the intersection of business and technology. You need technical skills to work with data and business acumen to understand what the data means in context."]},{heading:"The Complete Roadmap",content:["Here is the step-by-step path you should follow to become a Data Analyst. Each step builds on the previous one."],list:["Step 1: Learn the fundamentals of statistics and mathematics","Step 2: Master Microsoft Excel — formulas, pivot tables, charts, Power Query","Step 3: Learn SQL — querying, filtering, joins, aggregations, window functions","Step 4: Learn Python — basics, then Pandas and NumPy for data work","Step 5: Learn data collection techniques — APIs and web scraping","Step 6: Learn data cleaning and preprocessing","Step 7: Learn data visualization — Matplotlib, Seaborn, Power BI, Tableau","Step 8: Learn statistical analysis and hypothesis testing","Step 9: Build projects to apply your skills","Step 10: Create a portfolio and apply for jobs"]},{heading:"Core Skills Overview",content:["The roadmap covers both technical and soft skills. Technical skills include programming, databases, and visualization tools. Soft skills include communication, problem-solving, and critical thinking."],table:{headers:["Skill Area","Tools / Technologies","Importance"],rows:[["Spreadsheets","Excel, Google Sheets","Foundational — used everywhere"],["Databases","SQL, PostgreSQL, MySQL","Essential for data extraction"],["Programming","Python, Pandas, NumPy","For automation and advanced analysis"],["Visualization","Power BI, Tableau, Matplotlib","For communicating insights"],["Statistics","Mean, median, std dev, hypothesis testing","For understanding data"],["Web Scraping","BeautifulSoup, Selenium, Scrapy","For data collection"],["Communication","Reports, dashboards, presentations","For sharing findings"]]}},{heading:"Recommended Learning Path",content:["Follow the tutorials on this blog in this order:"],list:["1. Analysis & Reporting with Excel — learn spreadsheet fundamentals","2. SQL Tutorials — learn to query databases","3. Python Tutorials — learn programming from scratch","4. NumPy Tutorials — learn numerical computing","5. Pandas Tutorials — learn data manipulation","6. Data Collection, Cleaning, Exploration, Transformation, Manipulation — full data workflow","7. Data Visualization — charts and graphs","8. Charting & Pivot Tables — advanced reporting","9. Web Scraping Tutorials — collect data from the web","10. Power BI Tutorials — build interactive dashboards","11. 10 Data Analyst Projects — apply everything you learned"]},{heading:"Full Roadmap Reference",content:["For a visual, interactive version of the Data Analyst roadmap, visit the official roadmap at roadmap.sh. It provides a detailed, community-driven path with links to resources for each topic.","Roadmap URL: https://roadmap.sh/data-analyst"]}]},{id:"excel-analysis-reporting",title:"Analysis & Reporting with Excel",category:"Spreadsheets",icon:"FileSpreadsheet",description:"Complete guide to data analysis and reporting using Microsoft Excel — from basic formulas to advanced dashboards.",level:"Beginner",estimatedTime:"45 min read",sections:[{heading:"Introduction to Excel for Data Analysis",content:["Microsoft Excel is the most widely used tool for data analysis. Even in the age of Python and Power BI, Excel remains essential because it is accessible, powerful, and ubiquitous in business environments.","In this tutorial, we cover everything from basic formulas to advanced features like Power Query, pivot tables, and dashboard creation."]},{heading:"1. Excel Interface & Basics",content:["Excel organizes data in a grid of cells arranged in rows (numbered 1, 2, 3...) and columns (labeled A, B, C...). Each cell is identified by its column letter and row number, e.g., A1, B5, Z100.","Key components:"],list:["Ribbon — the toolbar at the top with tabs like Home, Insert, Data, Formulas","Formula Bar — shows the formula or value of the selected cell","Worksheet — a single page of cells; a workbook can have multiple worksheets","Status Bar — shows summary info like sum, count, average of selected cells"]},{heading:"2. Data Entry & Formatting",content:["You can enter text, numbers, dates, and formulas into cells. Formatting helps make data readable and consistent."],list:["Number formatting: currency, percentage, date, custom formats","Conditional formatting: color cells based on values (e.g., highlight values > 100)","Data validation: restrict what can be entered (e.g., only numbers 1-100)","Sorting: arrange data alphabetically or numerically","Filtering: show only rows that meet certain criteria"]},{heading:"3. Essential Formulas",content:["Formulas are the heart of Excel. They start with an = sign and can reference other cells.","Basic arithmetic formulas:"],code:`=A1 + B1        (Addition)
=A1 - B1        (Subtraction)
=A1 * B1        (Multiplication)
=A1 / B1        (Division)
=A1 ^ 2         (Exponentiation)
=A1 ^ (1/2)     (Square root)`},{heading:"4. Statistical Functions",content:["Excel has built-in functions for common statistical calculations."],code:`=SUM(A1:A10)          (Sum of range)
=AVERAGE(A1:A10)      (Mean)
=MEDIAN(A1:A10)       (Middle value)
=MODE(A1:A10)         (Most frequent value)
=MIN(A1:A10)          (Minimum)
=MAX(A1:A10)          (Maximum)
=COUNT(A1:A10)        (Count of numeric cells)
=COUNTA(A1:A10)       (Count of non-empty cells)
=COUNTIF(A1:A10,">50") (Count cells matching criteria)
=STDEV.P(A1:A10)      (Population standard deviation)
=STDEV.S(A1:A10)      (Sample standard deviation)
=VAR.P(A1:A10)        (Population variance)
=VAR.S(A1:A10)        (Sample variance)
=QUARTILE.INC(A1:A10,1) (First quartile)
=PERCENTILE.INC(A1:A10,0.9) (90th percentile)`},{heading:"5. Logical Functions",content:["Logical functions let you make decisions in your formulas."],code:`=IF(A1>50,"Pass","Fail")              (Conditional)
=IF(A1>90,"A",IF(A1>80,"B",IF(A1>70,"C","F")))  (Nested IF)
=AND(A1>50, B1>50)                     (Both true?)
=OR(A1>50, B1>50)                      (Either true?)
=NOT(A1>50)                            (Opposite)
=IFS(A1>90,"A",A1>80,"B",A1>70,"C",TRUE,"F")  (Multiple conditions)`},{heading:"6. Lookup Functions",content:["Lookup functions find data in tables — essential for combining data from different sources."],code:`=VLOOKUP(A1, B1:D100, 2, FALSE)
  (Find A1 in first column of B1:D100, return value from 2nd column, exact match)

=HLOOKUP(A1, A1:Z10, 3, FALSE)
  (Horizontal lookup — searches first row)

=INDEX(B1:B100, 5)
  (Return 5th value from range B1:B100)

=MATCH(A1, B1:B100, 0)
  (Return position of A1 in range B1:B100)

=INDEX(B1:B100, MATCH(A1, A1:A100, 0))
  (Index + Match — more flexible than VLOOKUP)

=XLOOKUP(A1, A1:A100, B1:B100)
  (Modern replacement for VLOOKUP — Excel 365+)`},{heading:"7. Text Functions",content:["Text functions manipulate string data — useful for cleaning messy data."],code:`=LEFT(A1, 5)          (First 5 characters)
=RIGHT(A1, 5)         (Last 5 characters)
=MID(A1, 2, 5)        (5 characters starting at position 2)
=LEN(A1)              (Length of text)
=UPPER(A1)            (Convert to uppercase)
=LOWER(A1)            (Convert to lowercase)
=PROPER(A1)           (Capitalize first letter of each word)
=TRIM(A1)             (Remove extra spaces)
=SUBSTITUTE(A1,"old","new")  (Replace text)
=CONCATENATE(A1," ",B1)  (Join text) or =A1 & " " & B1
=TEXT(A1, "0.00")     (Format number as text)`},{heading:"8. Date & Time Functions",content:["Excel stores dates as serial numbers, making date arithmetic possible."],code:`=TODAY()                  (Current date)
=NOW()                    (Current date and time)
=DATE(2024,12,31)         (Create a date)
=YEAR(A1)                 (Extract year)
=MONTH(A1)                (Extract month)
=DAY(A1)                  (Extract day)
=WEEKDAY(A1)              (Day of week as number)
=DATEDIF(A1,B1,"Y")       (Years between dates)
=EOMONTH(A1, 0)           (End of month)
=NETWORKDAYS(A1,B1)       (Working days between dates)`},{heading:"9. Pivot Tables",content:["Pivot tables are one of the most powerful features in Excel. They let you summarize, group, and analyze large datasets with just a few clicks.","How to create a pivot table:"],list:["1. Select your data range (or a cell within your data)","2. Go to Insert > PivotTable","3. Choose where to place the pivot table (new or existing worksheet)","4. In the PivotTable Fields pane, drag fields to four areas:","   — Rows: fields to group by (e.g., Region)","   — Columns: fields to split across columns (e.g., Month)","   — Values: fields to aggregate (e.g., Sum of Sales)","   — Filters: fields to filter the entire table (e.g., Year)","5. Change aggregation: right-click values > Summarize Values By > Sum/Average/Count/etc.","6. Add calculated fields: PivotTable Analyze > Fields, Items & Sets > Calculated Field"]},{heading:"10. Pivot Charts",content:["Pivot charts visualize pivot table data. They are linked — filtering or slicing the pivot table automatically updates the chart.","To create: select the pivot table > Insert > PivotChart > choose chart type."]},{heading:"11. Power Query",content:["Power Query is Excel's data transformation tool. It lets you import, clean, and transform data from various sources without writing code.","Common Power Query operations:","To use Power Query: Data > Get Data > choose source > the Power Query Editor opens where you apply transformations step by step. Each step is recorded and can be replayed when data refreshes."],list:["Connect to sources: Excel files, CSV, databases, web pages, APIs","Remove columns and rows","Filter and sort data","Split columns (e.g., split full name into first and last)","Merge queries (like SQL JOIN)","Append queries (like SQL UNION)","Group and aggregate","Unpivot columns (wide to long format)","Replace values and handle errors"]},{heading:"12. Conditional Formatting",content:["Conditional formatting automatically applies colors, icons, or data bars to cells based on their values."],list:["Highlight cells rules: greater than, less than, between, equal to, text contains, dates occurring, duplicate values","Top/Bottom rules: top 10 items, top 10%, above average, below average","Data bars: show value as a horizontal bar within the cell","Color scales: gradient from green (high) to red (low)","Icon sets: arrows, traffic lights, rating stars","Custom formula: apply formatting based on any formula"]},{heading:"13. Creating Dashboards in Excel",content:["An Excel dashboard combines multiple charts, tables, and KPIs on a single sheet for at-a-glance analysis."],list:["1. Plan your dashboard: identify the key metrics and audience","2. Prepare data: use pivot tables or Power Query to summarize","3. Create charts: bar, line, pie, donut, scatter for different metrics","4. Add slicers: Insert > Slicer — these are interactive filters","5. Arrange charts on a blank sheet — remove gridlines for a clean look","6. Add KPI cards: use text boxes or cells with large numbers and labels","7. Connect multiple pivot tables to one slicer for synchronized filtering","8. Protect the sheet to prevent accidental changes"]},{heading:"14. Excel Tips for Productivity",content:["Shortcuts and techniques that save time:"],list:["Ctrl + Arrow keys: jump to edge of data region","Ctrl + Shift + Arrow: select to edge of data","Ctrl + ; : insert current date","Alt + = : auto-sum selected cells","F4: toggle absolute/relative references ($A$1 vs A1)","Ctrl + 1: format cells dialog","Named ranges: give a name to a range (Formulas > Define Name) and use it in formulas","Tables: Ctrl + T converts a range to a table — auto-expanding, structured references"]}]},{id:"data-analyst-tutorial",title:"Data Analyst Tutorial — Complete Guide",category:"Data Analytics",icon:"BarChart3",description:"Deep dive into every concept a Data Analyst needs — from data fundamentals to advanced analysis techniques.",level:"Beginner",estimatedTime:"60 min read",sections:[{heading:"What Does a Data Analyst Do?",content:["A Data Analyst's job can be broken down into a pipeline of stages:"],list:["1. Data Collection — gather data from databases, files, APIs, and web sources","2. Data Cleaning — fix errors, handle missing values, standardize formats","3. Data Exploration — understand the data through summary statistics and visualization","4. Data Transformation — reshape, aggregate, and prepare data for analysis","5. Data Analysis — apply statistical methods to answer business questions","6. Data Visualization — create charts and dashboards to communicate findings","7. Reporting — present insights to stakeholders in reports and presentations"]},{heading:"Types of Data",content:["Understanding data types is fundamental to analysis."],table:{headers:["Type","Description","Examples"],rows:[["Nominal","Categories with no order","Colors, names, gender"],["Ordinal","Categories with order","Low/Medium/High, ratings"],["Interval","Numeric, no true zero","Temperature in Celsius, dates"],["Ratio","Numeric, true zero exists","Height, weight, revenue"],["Discrete","Whole numbers only","Number of customers, clicks"],["Continuous","Any value in a range","Temperature, time, distance"]]}},{heading:"Descriptive Statistics",content:["Descriptive statistics summarize data. They are the first step in any analysis."],list:["Mean: the average value. Sum of all values divided by count. Sensitive to outliers.","Median: the middle value when data is sorted. Robust to outliers.","Mode: the most frequently occurring value. Useful for categorical data.","Range: difference between maximum and minimum values.","Variance: average of squared differences from the mean. Measures spread.","Standard Deviation: square root of variance. Same units as the data.","Quartiles: Q1 (25th percentile), Q2 (median, 50th), Q3 (75th percentile).","IQR (Interquartile Range): Q3 - Q1. Used for outlier detection.","Skewness: measures asymmetry. Positive = right-skewed, Negative = left-skewed.","Kurtosis: measures tail thickness. High kurtosis = more outliers."]},{heading:"Inferential Statistics",content:["Inferential statistics use sample data to make conclusions about a population."],list:["Population: the entire group you want to study","Sample: a subset of the population","Hypothesis testing: test if an assumption about the population is true","Null hypothesis (H0): no effect / no difference","Alternative hypothesis (H1): there is an effect / difference","p-value: probability of observing the data if H0 is true. If p < 0.05, reject H0.","Confidence interval: range that likely contains the true population parameter","t-test: compare means of two groups","ANOVA: compare means of three or more groups","Chi-square test: test independence of categorical variables","Correlation: measure relationship between two variables (-1 to +1)"]},{heading:"The Data Analysis Process (CRISP-DM)",content:["CRISP-DM (Cross-Industry Standard Process for Data Mining) is a widely used framework:"],list:["1. Business Understanding — understand the problem and objectives","2. Data Understanding — explore available data, identify quality issues","3. Data Preparation — clean, transform, and format data for analysis","4. Modeling — apply statistical or machine learning techniques","5. Evaluation — assess results against business objectives","6. Deployment — present findings and implement solutions"]},{heading:"Key Analysis Techniques",content:["Different types of analysis answer different questions:"],table:{headers:["Analysis Type","Question Answered","Example"],rows:[["Descriptive","What happened?","Sales report for last month"],["Diagnostic","Why did it happen?","Why did sales drop in Q3?"],["Predictive","What will happen?","Forecast next month's sales"],["Prescriptive","What should we do?","Recommend best marketing strategy"],["Exploratory","What patterns exist?","Discover customer segments"]]}},{heading:"Data Quality Dimensions",content:["Before analysis, assess data quality across these dimensions:"],list:["Accuracy: does the data reflect reality?","Completeness: are there missing values?","Consistency: is data consistent across sources?","Timeliness: is the data current?","Validity: does data conform to expected formats?","Uniqueness: are there duplicate records?"]},{heading:"Common Data Analysis Mistakes to Avoid",content:["Avoiding these pitfalls makes you a better analyst:"],list:["Confusing correlation with causation — just because two variables move together doesn't mean one causes the other","Ignoring outliers — they can distort results but also reveal important insights","Cherry-picking data — selecting only data that supports your conclusion","Overfitting — making a model too complex for the data it has","Ignoring sample size — small samples lead to unreliable conclusions","Not understanding the business context — analysis without context is just numbers","Poor visualization choices — using the wrong chart type can mislead"]},{heading:"Tools Comparison",content:["Different tools serve different purposes in the data analysis workflow:"],table:{headers:["Tool","Best For","Learning Curve"],rows:[["Excel","Small datasets, quick analysis, reporting","Low"],["SQL","Querying databases, large datasets","Medium"],["Python (Pandas)","Large datasets, automation, advanced analysis","Medium-High"],["Power BI","Interactive dashboards, business reporting","Medium"],["Tableau","Advanced visualizations, storytelling","Medium"],["R","Statistical analysis, research","High"]]}}]},{id:"python-tutorial",title:"Python Tutorial — Complete Guide",category:"Programming",icon:"Code2",description:"Learn Python from scratch — every concept explained in detail, from variables to advanced features.",level:"Beginner",estimatedTime:"60 min read",sections:[{heading:"Why Python for Data Analysis?",content:["Python is the most popular programming language for data analysis because it is easy to learn, has a massive ecosystem of data libraries, and has a supportive community. Libraries like Pandas, NumPy, Matplotlib, and Scikit-learn make it powerful for data work."]},{heading:"1. Installing Python",content:["Download Python from python.org. Install version 3.10 or later. During installation, check 'Add Python to PATH'.","Verify installation by opening a terminal and running:"],code:`python --version
# Output: Python 3.12.0`},{heading:"2. Variables and Data Types",content:["Variables store data. Python is dynamically typed — you don't need to declare types."],code:`# Integer
age = 25

# Float (decimal)
price = 19.99

# String (text)
name = "Amit"

# Boolean (True/False)
is_active = True

# None (null/empty)
result = None

# Check type
print(type(age))       # <class 'int'>
print(type(name))      # <class 'str'>`},{heading:"3. Strings",content:["Strings are sequences of characters enclosed in single or double quotes."],code:`# Creating strings
greeting = "Hello, World!"
name = 'Amit'

# String concatenation
full = greeting + " My name is " + name

# f-strings (formatted strings)
age = 25
message = f"My name is {name} and I am {age} years old"

# String methods
text = "  Hello Python  "
print(text.strip())        # "Hello Python" (remove whitespace)
print(text.upper())        # "  HELLO PYTHON  "
print(text.lower())        # "  hello python  "
print(text.replace("Python", "World"))
print(len(text))           # length
print("Hello" in text)     # True (membership test)
print(text.split())        # split into list
print(",".join(["a","b","c"]))  # "a,b,c"`},{heading:"4. Lists",content:["Lists are ordered, mutable (changeable) collections."],code:`# Creating lists
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty = []

# Accessing elements (0-indexed)
print(numbers[0])    # 1
print(numbers[-1])   # 5 (last element)

# Slicing
print(numbers[1:4])  # [2, 3, 4]
print(numbers[:3])   # [1, 2, 3]
print(numbers[2:])   # [3, 4, 5]

# Modifying
numbers[0] = 100
numbers.append(6)         # add to end
numbers.insert(0, 0)      # insert at index
numbers.remove(100)       # remove by value
numbers.pop()             # remove last
numbers.extend([7, 8])    # add multiple

# List methods
print(len(numbers))       # length
print(numbers.sort())     # sort in place
print(numbers.reverse())  # reverse in place
print(numbers.count(5))   # count occurrences
print(numbers.index(5))   # find index

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]`},{heading:"5. Tuples",content:["Tuples are like lists but immutable (cannot be changed after creation)."],code:`# Creating tuples
point = (3, 4)
single = (5,)           # note the comma for single-item tuple
coordinates = (1.0, 2.0, 3.0)

# Accessing
print(point[0])         # 3

# Tuples are immutable
# point[0] = 5          # TypeError!

# Tuple unpacking
x, y = point
print(x, y)             # 3 4

# Useful tuple functions
print(len(coordinates))
print(min(point))
print(max(point))`},{heading:"6. Dictionaries",content:["Dictionaries store key-value pairs. Keys must be unique and immutable."],code:`# Creating dictionaries
person = {
    "name": "Amit",
    "age": 25,
    "city": "Mumbai"
}

# Accessing values
print(person["name"])          # Amit
print(person.get("email", "N/A"))  # N/A (default if key missing)

# Adding/updating
person["email"] = "amit@example.com"
person["age"] = 26             # update

# Removing
del person["city"]
person.pop("email")

# Dictionary methods
print(person.keys())           # dict_keys(['name', 'age'])
print(person.values())         # dict_values(['Amit', 26])
print(person.items())          # dict_items([('name', 'Amit'), ...])

# Iterating
for key, value in person.items():
    print(f"{key}: {value}")

# Dictionary comprehension
squares = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}`},{heading:"7. Sets",content:["Sets are unordered collections of unique elements."],code:`# Creating sets
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 3, 2, 1}  # {1, 2, 3} (duplicates removed)

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)   # Union: {1, 2, 3, 4, 5, 6}
print(a & b)   # Intersection: {3, 4}
print(a - b)   # Difference: {1, 2}
print(a ^ b)   # Symmetric difference: {1, 2, 5, 6}

# Set methods
fruits.add("orange")
fruits.remove("banana")
fruits.discard("grape")   # no error if missing
print("apple" in fruits)   # True`},{heading:"8. Control Flow — If/Else",content:["Conditional statements control which code runs based on conditions."],code:`score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Grade: {grade}")  # Grade: B

# Multiple conditions
age = 25
has_license = True

if age >= 18 and has_license:
    print("Can drive")
elif age >= 18 and not has_license:
    print("Can get a license")
else:
    print("Too young to drive")`},{heading:"9. Loops",content:["Loops repeat code. Python has for loops and while loops."],code:`# For loop with range
for i in range(5):
    print(i)          # 0, 1, 2, 3, 4

for i in range(2, 10, 2):
    print(i)          # 2, 4, 6, 8 (start, stop, step)

# For loop over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# For loop with enumerate
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# Break and continue
for i in range(10):
    if i == 3:
        continue    # skip 3
    if i == 7:
        break       # stop at 7
    print(i)

# Nested loops
for i in range(3):
    for j in range(3):
        print(f"({i},{j})", end=" ")
    print()`},{heading:"10. Functions",content:["Functions are reusable blocks of code. They make code organized and DRY (Don't Repeat Yourself)."],code:`# Basic function
def greet(name):
    return f"Hello, {name}!"

print(greet("Amit"))   # Hello, Amit!

# Function with default parameters
def power(base, exponent=2):
    return base ** exponent

print(power(5))        # 25 (5^2)
print(power(2, 3))     # 8  (2^3)

# Function with multiple returns
def min_max(numbers):
    return min(numbers), max(numbers)

smallest, largest = min_max([3, 1, 4, 1, 5, 9])
print(smallest, largest)   # 1 9

# Lambda functions (anonymous, one-line)
square = lambda x: x ** 2
print(square(5))       # 25

# Lambda with map
nums = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, nums))
# [1, 4, 9, 16, 25]

# Lambda with filter
evens = list(filter(lambda x: x % 2 == 0, nums))
# [2, 4]

# *args and **kwargs
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4, 5))   # 15

def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Amit", age=25, city="Mumbai")`},{heading:"11. File Handling",content:["Reading and writing files is essential for data analysis."],code:`# Writing to a file
with open("data.txt", "w") as f:
    f.write("Hello, World!\\n")
    f.write("Second line\\n")

# Reading a file
with open("data.txt", "r") as f:
    content = f.read()
    print(content)

# Reading line by line
with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())

# Appending to a file
with open("data.txt", "a") as f:
    f.write("Third line\\n")

# Working with CSV files
import csv

# Write CSV
with open("data.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Age", "City"])
    writer.writerow(["Amit", 25, "Mumbai"])
    writer.writerow(["Priya", 30, "Delhi"])

# Read CSV
with open("data.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

# Working with JSON
import json

data = {"name": "Amit", "skills": ["Python", "SQL", "Excel"]}

# Write JSON
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# Read JSON
with open("data.json", "r") as f:
    loaded = json.load(f)
    print(loaded["name"])   # Amit`},{heading:"12. Error Handling",content:["Handle errors gracefully using try/except blocks."],code:`try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
else:
    print("No errors occurred!")
finally:
    print("This always runs!")`},{heading:"13. Classes and Objects",content:["Object-oriented programming organizes code into classes (blueprints) and objects (instances)."],code:`class Student:
    # Constructor
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

    # Method
    def introduce(self):
        return f"Hi, I'm {self.name}, age {self.age}, grade {self.grade}"

    # Method with logic
    def is_passing(self):
        return self.grade >= 60

# Creating objects
student1 = Student("Amit", 20, 85)
student2 = Student("Priya", 22, 55)

print(student1.introduce())      # Hi, I'm Amit, age 20, grade 85
print(student1.is_passing())     # True
print(student2.is_passing())     # False`},{heading:"14. Modules and Imports",content:["Modules are Python files that can be imported into other files."],code:`# Importing standard library modules
import math
print(math.pi)           # 3.141592653589793
print(math.sqrt(16))     # 4.0
print(math.ceil(3.2))    # 4

import random
print(random.randint(1, 100))   # random integer 1-100
print(random.choice(["a", "b", "c"]))  # random element

import datetime
now = datetime.datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))

# Import specific names
from math import sqrt, pi
print(sqrt(25))    # 5.0
print(pi)          # 3.14159...

# Import with alias
import numpy as np
import pandas as pd`},{heading:"15. Virtual Environments",content:["Virtual environments isolate project dependencies. Always use them for data projects."],code:`# Create a virtual environment
python -m venv myenv

# Activate (Windows)
myenv\\Scripts\\activate

# Activate (Mac/Linux)
source myenv/bin/activate

# Install packages
pip install pandas numpy matplotlib

# Save dependencies
pip freeze > requirements.txt

# Install from requirements file
pip install -r requirements.txt

# Deactivate
deactivate`}]},{id:"sql-tutorial",title:"SQL Tutorial — Complete Guide",category:"Databases",icon:"Database",description:"Master SQL from basic SELECT to advanced window functions — every concept explained with examples.",level:"Beginner",estimatedTime:"55 min read",sections:[{heading:"What is SQL?",content:["SQL (Structured Query Language) is the standard language for working with relational databases. As a Data Analyst, SQL is one of your most important tools — you will use it daily to extract and analyze data."]},{heading:"1. Database Basics",content:["A relational database stores data in tables (rows and columns). Each table has a name, and each column has a data type."],code:`-- Create a table
CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    department TEXT,
    salary REAL,
    hire_date DATE,
    is_active BOOLEAN DEFAULT TRUE
);

-- Insert data
INSERT INTO employees (id, name, department, salary, hire_date)
VALUES (1, 'Amit', 'Sales', 50000, '2023-01-15');

INSERT INTO employees VALUES
    (2, 'Priya', 'Engineering', 75000, '2022-06-01', TRUE),
    (3, 'Raj', 'Sales', 55000, '2023-03-20', TRUE),
    (4, 'Sneha', 'Marketing', 60000, '2021-11-10', FALSE);

-- Update data
UPDATE employees SET salary = 52000 WHERE id = 1;

-- Delete data
DELETE FROM employees WHERE id = 4;`},{heading:"2. SELECT — The Foundation",content:["SELECT retrieves data from a database. This is the most common SQL command for analysts."],code:`-- Select all columns
SELECT * FROM employees;

-- Select specific columns
SELECT name, salary FROM employees;

-- Add a calculated column
SELECT name, salary, salary * 1.1 AS salary_with_bonus
FROM employees;

-- Select distinct values
SELECT DISTINCT department FROM employees;

-- Limit results
SELECT * FROM employees LIMIT 10;`},{heading:"3. WHERE — Filtering",content:["WHERE filters rows based on conditions."],code:`-- Basic comparison
SELECT * FROM employees WHERE salary > 50000;
SELECT * FROM employees WHERE department = 'Sales';
SELECT * FROM employees WHERE salary >= 50000 AND salary <= 70000;
SELECT * FROM employees WHERE department = 'Sales' OR department = 'Engineering';

-- BETWEEN
SELECT * FROM employees WHERE salary BETWEEN 50000 AND 70000;

-- IN
SELECT * FROM employees WHERE department IN ('Sales', 'Engineering', 'Marketing');

-- LIKE (pattern matching)
SELECT * FROM employees WHERE name LIKE 'A%';     -- starts with A
SELECT * FROM employees WHERE name LIKE '%a%';    -- contains a
SELECT * FROM employees WHERE name LIKE '_mit';   -- _ = single char

-- IS NULL / IS NOT NULL
SELECT * FROM employees WHERE department IS NULL;
SELECT * FROM employees WHERE department IS NOT NULL;

-- NOT
SELECT * FROM employees WHERE NOT department = 'Sales';`},{heading:"4. ORDER BY — Sorting",content:["ORDER BY sorts results by one or more columns."],code:`-- Ascending (default)
SELECT * FROM employees ORDER BY salary;

-- Descending
SELECT * FROM employees ORDER BY salary DESC;

-- Multiple columns
SELECT * FROM employees ORDER BY department ASC, salary DESC;

-- By column position
SELECT name, salary FROM employees ORDER BY 2 DESC;`},{heading:"5. Aggregate Functions",content:["Aggregate functions perform calculations on sets of values and return a single result."],code:`-- Count rows
SELECT COUNT(*) FROM employees;
SELECT COUNT(department) FROM employees;     -- counts non-null
SELECT COUNT(DISTINCT department) FROM employees;

-- Sum, average, min, max
SELECT SUM(salary) FROM employees;
SELECT AVG(salary) FROM employees;
SELECT MIN(salary) FROM employees;
SELECT MAX(salary) FROM employees;

-- Combined with WHERE
SELECT AVG(salary) FROM employees WHERE department = 'Sales';

-- Multiple aggregates
SELECT
    COUNT(*) AS total_employees,
    AVG(salary) AS avg_salary,
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary
FROM employees;`},{heading:"6. GROUP BY — Grouping Data",content:["GROUP BY groups rows that have the same values into summary rows. It is used with aggregate functions."],code:`-- Average salary by department
SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department;

-- Count employees by department
SELECT department, COUNT(*) as employee_count
FROM employees
GROUP BY department;

-- Multiple aggregates per group
SELECT
    department,
    COUNT(*) as count,
    AVG(salary) as avg_salary,
    MAX(salary) as max_salary
FROM employees
GROUP BY department;

-- GROUP BY with WHERE (WHERE filters before grouping)
SELECT department, AVG(salary) as avg_salary
FROM employees
WHERE is_active = TRUE
GROUP BY department;

-- HAVING (filters after grouping)
SELECT department, COUNT(*) as count
FROM employees
GROUP BY department
HAVING COUNT(*) > 2;`},{heading:"7. JOINs — Combining Tables",content:["JOINs combine data from two or more tables based on a related column."],code:`-- Example tables:
-- employees (id, name, department_id, salary)
-- departments (id, department_name)

-- INNER JOIN (only matching rows)
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;

-- LEFT JOIN (all from left, matching from right)
SELECT e.name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;
-- Employees without departments will show NULL

-- RIGHT JOIN (all from right, matching from left)
SELECT e.name, d.department_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.id;

-- FULL OUTER JOIN (all rows from both tables)
SELECT e.name, d.department_name
FROM employees e
FULL OUTER JOIN departments d ON e.department_id = d.id;

-- Self JOIN (join table to itself)
SELECT a.name as employee, b.name as manager
FROM employees a
JOIN employees b ON a.manager_id = b.id;

-- Multiple JOINs
SELECT e.name, d.department_name, p.project_name
FROM employees e
JOIN departments d ON e.department_id = d.id
JOIN projects p ON e.id = p.employee_id;`},{heading:"8. Subqueries",content:["A subquery is a query inside another query. They are powerful for complex analysis."],code:`-- Subquery in WHERE
SELECT name, salary FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
-- Find employees above average salary

-- Subquery in SELECT
SELECT
    name,
    salary,
    (SELECT AVG(salary) FROM employees) as company_avg,
    salary - (SELECT AVG(salary) FROM employees) as diff_from_avg
FROM employees;

-- Subquery in FROM (derived table)
SELECT dept_avg.department, dept_avg.avg_salary
FROM (
    SELECT department, AVG(salary) as avg_salary
    FROM employees
    GROUP BY department
) dept_avg
WHERE dept_avg.avg_salary > 55000;

-- Correlated subquery (references outer query)
SELECT name, salary FROM employees e
WHERE salary > (
    SELECT AVG(salary) FROM employees
    WHERE department = e.department
);
-- Employees earning more than their department average

-- EXISTS
SELECT name FROM employees e
WHERE EXISTS (
    SELECT 1 FROM projects p WHERE p.employee_id = e.id
);
-- Employees who have projects`},{heading:"9. CASE Expressions",content:["CASE is SQL's version of if/else — it creates conditional logic."],code:`-- Simple CASE
SELECT name, salary,
    CASE
        WHEN salary >= 70000 THEN 'High'
        WHEN salary >= 50000 THEN 'Medium'
        ELSE 'Low'
    END AS salary_band
FROM employees;

-- CASE in aggregate
SELECT
    SUM(CASE WHEN department = 'Sales' THEN 1 ELSE 0 END) as sales_count,
    SUM(CASE WHEN department = 'Engineering' THEN 1 ELSE 0 END) as eng_count,
    SUM(CASE WHEN department = 'Marketing' THEN 1 ELSE 0 END) as mkt_count
FROM employees;`},{heading:"10. String Functions",content:["SQL provides functions for text manipulation."],code:`-- Concatenation
SELECT first_name || ' ' || last_name AS full_name FROM users;
-- Or (MySQL): SELECT CONCAT(first_name, ' ', last_name) FROM users;

-- Upper/Lower
SELECT UPPER(name) FROM employees;
SELECT LOWER(name) FROM employees;

-- Length
SELECT name, LENGTH(name) FROM employees;

-- Substring
SELECT SUBSTRING(name, 1, 3) FROM employees;   -- first 3 chars
-- Or: SELECT SUBSTR(name, 1, 3) FROM employees;

-- Replace
SELECT REPLACE(name, 'Amit', 'A.') FROM employees;

-- Trim
SELECT TRIM(name) FROM employees;
SELECT LTRIM(name), RTRIM(name) FROM employees;`},{heading:"11. Date Functions",content:["Date functions are essential for time-based analysis."],code:`-- Current date/time
SELECT CURRENT_DATE;
SELECT CURRENT_TIMESTAMP;
SELECT NOW();

-- Extract parts
SELECT EXTRACT(YEAR FROM hire_date) FROM employees;
SELECT EXTRACT(MONTH FROM hire_date) FROM employees;
SELECT EXTRACT(DAY FROM hire_date) FROM employees;

-- Date arithmetic
SELECT hire_date, CURRENT_DATE - hire_date AS days_employed
FROM employees;

-- Date formatting
SELECT TO_CHAR(hire_date, 'YYYY-MM-DD') FROM employees;

-- Age calculation
SELECT name, AGE(CURRENT_DATE, hire_date) FROM employees;`},{heading:"12. Window Functions",content:["Window functions perform calculations across rows related to the current row. They are advanced but incredibly powerful for analytics."],code:`-- ROW_NUMBER: unique sequential number
SELECT
    name, department, salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as rank
FROM employees;

-- ROW_NUMBER with PARTITION BY (rank within group)
SELECT
    name, department, salary,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank
FROM employees;

-- RANK and DENSE_RANK
SELECT
    name, salary,
    RANK() OVER (ORDER BY salary DESC) as rank,
    DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank
FROM employees;
-- RANK: ties get same rank, next rank skips
-- DENSE_RANK: ties get same rank, no skipping

-- Running total
SELECT
    name, salary,
    SUM(salary) OVER (ORDER BY hire_date) as running_total
FROM employees;

-- Moving average (3-row window)
SELECT
    name, salary,
    AVG(salary) OVER (ORDER BY hire_date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_avg
FROM employees;

-- LAG and LEAD (access other rows)
SELECT
    name, salary,
    LAG(salary, 1) OVER (ORDER BY hire_date) as prev_salary,
    LEAD(salary, 1) OVER (ORDER BY hire_date) as next_salary
FROM employees;

-- FIRST_VALUE and LAST_VALUE
SELECT
    name, department, salary,
    FIRST_VALUE(name) OVER (PARTITION BY department ORDER BY salary DESC) as top_earner
FROM employees;`},{heading:"13. Common Table Expressions (CTEs)",content:["CTEs create temporary result sets that make complex queries readable."],code:`-- Basic CTE
WITH high_earners AS (
    SELECT * FROM employees WHERE salary > 60000
)
SELECT department, COUNT(*) as count
FROM high_earners
GROUP BY department;

-- Multiple CTEs
WITH dept_stats AS (
    SELECT department, AVG(salary) as avg_salary
    FROM employees
    GROUP BY department
),
company_avg AS (
    SELECT AVG(salary) as overall_avg FROM employees
)
SELECT
    d.department,
    d.avg_salary,
    c.overall_avg,
    d.avg_salary - c.overall_avg as diff
FROM dept_stats d
CROSS JOIN company_avg c;

-- Recursive CTE (hierarchical data)
WITH RECURSIVE org_chart AS (
    SELECT id, name, manager_id, 1 as level
    FROM employees WHERE manager_id IS NULL
    UNION ALL
    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart;`},{heading:"14. Views",content:["Views are saved queries that act like virtual tables."],code:`-- Create a view
CREATE VIEW active_employees AS
SELECT name, department, salary
FROM employees
WHERE is_active = TRUE;

-- Use the view
SELECT * FROM active_employees;
SELECT * FROM active_employees WHERE salary > 50000;

-- Drop a view
DROP VIEW active_employees;`}]},{id:"web-scraping-tutorial",title:"Web Scraping Tutorial — Complete Guide",category:"Data Collection",icon:"Globe",description:"Learn to extract data from websites using Python — Requests, BeautifulSoup, Selenium, and Scrapy from basics to advanced.",level:"Intermediate",estimatedTime:"50 min read",sections:[{heading:"What is Web Scraping?",content:["Web scraping is the process of automatically extracting data from websites. As a Data Analyst, you often need data that isn't available in a neat CSV or database — web scraping lets you collect it.","Common use cases: collecting product prices, scraping news articles, gathering job postings, extracting contact information, monitoring competitor data."]},{heading:"Legal and Ethical Considerations",content:["Before scraping, always consider:"],list:["Check the website's robots.txt file (e.g., example.com/robots.txt) — it tells you what you can scrape","Read the Terms of Service — some sites prohibit scraping","Don't overload the server — add delays between requests","Only scrape publicly available data","Respect copyright and don't redistribute scraped content","Consider using official APIs instead when available"]},{heading:"1. Installing Required Libraries",content:["Install the essential web scraping libraries:"],code:`pip install requests beautifulsoup4 selenium scrapy pandas
pip install webdriver-manager`},{heading:"2. Understanding HTML Structure",content:["Web pages are written in HTML. To scrape, you need to understand HTML structure.","Key HTML elements for scraping:"],code:`<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Main Heading</h1>
    <div class="product-list">
      <p class="item">Product 1</p>
      <p class="item">Product 2</p>
    </div>
    <a href="https://example.com" id="link1">Link</a>
    <table>
      <tr><th>Name</th><th>Price</th></tr>
      <tr><td>Item 1</td><td>$10</td></tr>
    </table>
  </body>
</html>`,list:["Tags: <p>, <div>, <a>, <table>, <h1>, <span>, <li>","Attributes: class, id, href, src, style","class — used for styling, multiple elements can share a class","id — unique identifier for a single element","href — link URL in <a> tags"]},{heading:"3. Using Requests",content:["The requests library fetches web page content (HTML)."],code:`import requests

# Fetch a web page
url = "https://example.com"
response = requests.get(url)

# Check if successful
print(response.status_code)   # 200 = success
print(response.ok)             # True if status < 400

# Get HTML content
html = response.text
print(html[:500])             # first 500 characters

# Add headers (some sites require them)
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}
response = requests.get(url, headers=headers)

# Handle errors
try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
except requests.exceptions.RequestException as e:
    print(f"Error: {e}")`},{heading:"4. BeautifulSoup — Parsing HTML",content:["BeautifulSoup parses HTML and makes it easy to navigate and extract data."],code:`from bs4 import BeautifulSoup
import requests

# Fetch and parse
url = "https://example.com"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# Find elements by tag
title = soup.find("title").text
print(title)

all_paragraphs = soup.find_all("p")
for p in all_paragraphs:
    print(p.text)

# Find by class
items = soup.find_all("p", class_="item")
for item in items:
    print(item.text)

# Find by id
link = soup.find(id="link1")
print(link.text)
print(link["href"])    # get attribute

# Find using CSS selectors
products = soup.select("div.product-list p.item")
for product in products:
    print(product.text)

# Navigate the tree
div = soup.find("div", class_="product-list")
children = div.find_all("p")
parent = div.parent
next_sibling = div.next_sibling`},{heading:"5. Scraping a Table",content:["Tables are common on websites. Here is how to scrape them."],code:`from bs4 import BeautifulSoup
import requests
import pandas as pd

url = "https://example.com/data-table"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# Find the table
table = soup.find("table")

# Extract headers
headers = []
for th in table.find_all("th"):
    headers.append(th.text.strip())

# Extract rows
rows = []
for tr in table.find_all("tr")[1:]:    # skip header row
    cells = [td.text.strip() for td in tr.find_all("td")]
    rows.append(cells)

# Create DataFrame
df = pd.DataFrame(rows, columns=headers)
print(df.head())

# Save to CSV
df.to_csv("scraped_data.csv", index=False)`},{heading:"6. Scraping Multiple Pages (Pagination)",content:["Most websites spread data across multiple pages. Here is how to scrape all pages."],code:`import requests
from bs4 import BeautifulSoup
import time

base_url = "https://example.com/products?page={}"
all_products = []

for page_num in range(1, 11):    # scrape 10 pages
    url = base_url.format(page_num)
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    products = soup.find_all("div", class_="product")
    for product in products:
        name = product.find("h3").text.strip()
        price = product.find("span", class_="price").text.strip()
        all_products.append({"name": name, "price": price})

    print(f"Scraped page {page_num}: {len(products)} items")

    # Be polite — add delay
    time.sleep(2)

print(f"Total products scraped: {len(all_products)}")`},{heading:"7. Selenium — Scraping Dynamic Websites",content:["Some websites use JavaScript to load content dynamically. Requests + BeautifulSoup cannot see this content. Selenium controls a real browser and can interact with JavaScript."],code:`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time

# Set up browser
driver = webdriver.Chrome(ChromeDriverManager().install())

# Navigate to page
driver.get("https://example.com")

# Wait for element to load
wait = WebDriverWait(driver, 10)
element = wait.until(EC.presence_of_element_located((By.CLASS_NAME, "product")))

# Find elements
products = driver.find_elements(By.CLASS_NAME, "product")
for product in products:
    name = product.find_element(By.TAG_NAME, "h3").text
    price = product.find_element(By.CLASS_NAME, "price").text
    print(f"{name}: {price}")

# Click a button
button = driver.find_element(By.ID, "load-more")
button.click()
time.sleep(2)    # wait for new content

# Scroll down
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
time.sleep(2)

# Close browser
driver.quit()`},{heading:"8. Handling Login-Required Pages",content:["Some data requires logging in. Selenium can fill in forms and submit them."],code:`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
driver.get("https://example.com/login")

# Fill in login form
username = driver.find_element(By.ID, "username")
password = driver.find_element(By.ID, "password")
username.send_keys("your_username")
password.send_keys("your_password")

# Submit
password.send_keys(Keys.RETURN)
time.sleep(3)    # wait for redirect

# Now you can scrape the protected page
data = driver.find_elements(By.CLASS_NAME, "data-row")
for row in data:
    print(row.text)

driver.quit()`},{heading:"9. Scrapy — Large-Scale Scraping",content:["Scrapy is a powerful framework for large-scale web scraping. It handles concurrency, pipelines, and data export automatically."],code:`# Create a Scrapy project (in terminal):
# scrapy startproject myscraper
# cd myscraper
# scrapy genspider example example.com

# In myscraper/spiders/example_spider.py:
import scrapy

class ExampleSpider(scrapy.Spider):
    name = "example"
    start_urls = ["https://example.com/products"]

    def parse(self, response):
        for product in response.css("div.product"):
            yield {
                "name": product.css("h3::text").get(),
                "price": product.css("span.price::text").get(),
                "link": product.css("a::attr(href)").get(),
            }

        # Follow pagination
        next_page = response.css("a.next-page::attr(href)").get()
        if next_page:
            yield response.follow(next_page, self.parse)

# Run the spider (in terminal):
# scrapy crawl example -o products.json`},{heading:"10. Best Practices",content:["Follow these practices for reliable and respectful scraping:"],list:["Always add delays between requests (time.sleep) to avoid overloading servers","Use realistic User-Agent headers","Handle errors gracefully — websites change, and your scraper should not crash","Store data incrementally — don't wait until the end to save","Cache responses during development to avoid repeated requests","Use proxies for large-scale scraping to avoid IP bans","Check robots.txt before scraping","Monitor your scraper — websites change structure over time"]}]},{id:"pandas-tutorial",title:"Pandas Tutorial — Complete Guide",category:"Python",icon:"Table",description:"Master Pandas from Series and DataFrames to advanced merging, grouping, and time series analysis.",level:"Intermediate",estimatedTime:"55 min read",sections:[{heading:"What is Pandas?",content:["Pandas is the most important Python library for data analysis. It provides two main data structures — Series (1D) and DataFrame (2D) — that make working with tabular data easy and intuitive.","If you learn only one Python library for data analysis, make it Pandas."]},{heading:"1. Installation and Import",content:["Install Pandas and import it. The convention is to import as pd."],code:`pip install pandas

import pandas as pd
import numpy as np`},{heading:"2. Series — One-Dimensional Data",content:["A Series is like a column in a spreadsheet — a one-dimensional array with labels (index)."],code:`# Create a Series
s = pd.Series([10, 20, 30, 40, 50])
print(s)
# 0    10
# 1    20
# 2    30
# 3    40
# 4    50
# dtype: int64

# With custom index
s = pd.Series([10, 20, 30], index=["a", "b", "c"])
print(s["a"])    # 10

# From dictionary
s = pd.Series({"apple": 5, "banana": 3, "cherry": 8})

# Basic operations
print(s.values)       # array of values
print(s.index)        # index labels
print(s.dtype)        # data type
print(s.shape)        # (3,)

# Series operations (vectorized)
s1 = pd.Series([1, 2, 3, 4])
s2 = pd.Series([10, 20, 30, 40])
print(s1 + s2)        # [11, 22, 33, 44]
print(s1 * 2)         # [2, 4, 6, 8]
print(s1.sum())       # 10
print(s1.mean())      # 2.5
print(s1.max())       # 4
print(s1.describe())  # summary statistics`},{heading:"3. DataFrame — Two-Dimensional Data",content:["A DataFrame is a 2D table with rows and columns — like a spreadsheet or SQL table."],code:`# Create from dictionary
df = pd.DataFrame({
    "name": ["Amit", "Priya", "Raj", "Sneha"],
    "age": [25, 30, 28, 35],
    "city": ["Mumbai", "Delhi", "Bangalore", "Pune"],
    "salary": [50000, 75000, 65000, 80000]
})

print(df)

# Create from list of lists
df = pd.DataFrame([
    ["Amit", 25, "Mumbai"],
    ["Priya", 30, "Delhi"]
], columns=["name", "age", "city"])

# Load from CSV
df = pd.read_csv("data.csv")

# Load from Excel
df = pd.read_excel("data.xlsx")

# Load from SQL
# import sqlite3
# conn = sqlite3.connect("database.db")
# df = pd.read_sql("SELECT * FROM employees", conn)

# Save data
df.to_csv("output.csv", index=False)
df.to_excel("output.xlsx", index=False)
df.to_json("output.json")`},{heading:"4. Viewing and Inspecting Data",content:["Pandas provides many ways to inspect your data."],code:`# View first/last rows
df.head()         # first 5 rows
df.head(10)       # first 10 rows
df.tail()         # last 5 rows
df.tail(3)        # last 3 rows

# Overview
df.info()         # data types, non-null counts, memory usage
df.describe()     # statistical summary of numeric columns
df.shape          # (rows, columns)
df.size           # total elements
df.columns        # column names
df.index          # row labels
df.dtypes         # data types of each column

# Sample random rows
df.sample(5)      # 5 random rows

# Unique values
df["city"].unique()           # unique values
df["city"].nunique()          # count of unique values
df["city"].value_counts()     # count of each value

# Check for missing values
df.isnull().sum()             # missing count per column
df.isnull().sum().sum()       # total missing`},{heading:"5. Selecting and Filtering Data",content:["Selecting specific rows and columns is the most common Pandas operation."],code:`# Select columns
df["name"]               # single column (returns Series)
df[["name", "age"]]      # multiple columns (returns DataFrame)

# Select rows by label (.loc)
df.loc[0]                # row with index 0
df.loc[0:2]              # rows 0 to 2 (inclusive!)
df.loc[0:2, "name"]      # rows 0-2, only name column
df.loc[0:2, ["name", "age"]]  # rows 0-2, name and age columns

# Select rows by position (.iloc)
df.iloc[0]               # first row
df.iloc[0:3]             # first 3 rows (exclusive, like Python)
df.iloc[0:3, 0:2]        # first 3 rows, first 2 columns

# Filter rows with conditions
df[df["age"] > 25]
df[df["city"] == "Mumbai"]
df[(df["age"] > 25) & (df["salary"] > 60000)]   # AND
df[(df["city"] == "Mumbai") | (df["city"] == "Delhi")]  # OR
df[df["city"].isin(["Mumbai", "Delhi", "Pune"])]
df[df["name"].str.startswith("A")]
df[df["age"].between(25, 35)]

# Filter with query() method
df.query("age > 25 and salary > 60000")`},{heading:"6. Adding, Modifying, and Removing Data",content:["Manipulating the structure of your DataFrame."],code:`# Add a new column
df["bonus"] = df["salary"] * 0.1
df["total_comp"] = df["salary"] + df["bonus"]
df["category"] = "Employee"    # constant value

# Add column with condition
df["level"] = df["salary"].apply(
    lambda x: "Senior" if x > 70000 else "Junior"
)

# Add a row
new_row = pd.DataFrame([{"name": "Karan", "age": 27, "city": "Chennai", "salary": 70000}])
df = pd.concat([df, new_row], ignore_index=True)

# Modify values
df.loc[df["name"] == "Amit", "salary"] = 55000   # update specific

# Rename columns
df.rename(columns={"name": "full_name", "age": "years"}, inplace=True)

# Drop columns and rows
df.drop("bonus", axis=1, inplace=True)           # drop column
df.drop(columns=["bonus", "level"], inplace=True) # drop multiple columns
df.drop(0, axis=0, inplace=True)                  # drop row by index

# Replace values
df["city"].replace({"Mumbai": "Bombay"}, inplace=True)
df.replace({"N/A": np.nan}, inplace=True)`},{heading:"7. Handling Missing Data",content:["Real-world data has missing values. Pandas makes it easy to handle them."],code:`# Check for missing values
df.isnull().sum()         # count per column
df.isnull().sum().sum()   # total
df.notnull().sum()        # non-null count per column

# Drop missing values
df.dropna()               # drop rows with any missing values
df.dropna(how="all")      # drop rows where ALL values are missing
df.dropna(subset=["salary"])  # drop rows where salary is missing
df.dropna(axis=1)         # drop columns with any missing values

# Fill missing values
df.fillna(0)                              # fill all with 0
df["salary"].fillna(df["salary"].mean())  # fill with mean
df["salary"].fillna(df["salary"].median()) # fill with median
df["city"].fillna("Unknown")              # fill categorical with default
df.fillna(method="ffill")                 # forward fill (use previous value)
df.fillna(method="bfill")                 # backward fill (use next value)

# Interpolate (estimate missing values)
df["salary"].interpolate(method="linear")`},{heading:"8. GroupBy — Grouping and Aggregation",content:["GroupBy is Pandas' most powerful feature for data analysis — it splits data into groups, applies a function, and combines results."],code:`# Group by one column
df.groupby("city")["salary"].mean()
# Average salary by city

# Group by multiple columns
df.groupby(["city", "level"])["salary"].mean()

# Multiple aggregations
df.groupby("city")["salary"].agg(["mean", "median", "min", "max", "count"])

# Different aggregations per column
df.groupby("city").agg({
    "salary": ["mean", "max"],
    "age": "mean",
    "name": "count"
})

# Named aggregations (cleaner output)
df.groupby("city").agg(
    avg_salary=("salary", "mean"),
    max_salary=("salary", "max"),
    employee_count=("name", "count")
)

# Custom aggregation function
df.groupby("city")["salary"].agg(
    lambda x: x.max() - x.min()   # salary range per city
)

# Iterate over groups
for city, group in df.groupby("city"):
    print(f"{city}: {len(group)} employees, avg salary {group['salary'].mean()}")`},{heading:"9. Merging and Joining DataFrames",content:["Combining multiple DataFrames is essential when data comes from different sources."],code:`# Two DataFrames to merge
employees = pd.DataFrame({
    "emp_id": [1, 2, 3, 4],
    "name": ["Amit", "Priya", "Raj", "Sneha"],
    "dept_id": [10, 20, 10, 30]
})

departments = pd.DataFrame({
    "dept_id": [10, 20, 30, 40],
    "dept_name": ["Sales", "Engineering", "Marketing", "HR"]
})

# Merge (like SQL JOIN)
pd.merge(employees, departments, on="dept_id", how="inner")  # INNER JOIN
pd.merge(employees, departments, on="dept_id", how="left")   # LEFT JOIN
pd.merge(employees, departments, on="dept_id", how="right")  # RIGHT JOIN
pd.merge(employees, departments, on="dept_id", how="outer")  # FULL OUTER JOIN

# Different column names
pd.merge(employees, departments,
         left_on="dept_id", right_on="dept_id", how="left")

# Concatenate (stack DataFrames)
pd.concat([df1, df2], axis=0)    # stack vertically (add rows)
pd.concat([df1, df2], axis=1)    # stack horizontally (add columns)

# Join on index
df1.join(df2, how="left")`},{heading:"10. Sorting and Ranking",content:["Sorting and ranking arrange data for analysis and reporting."],code:`# Sort by one column
df.sort_values("salary")
df.sort_values("salary", ascending=False)

# Sort by multiple columns
df.sort_values(["city", "salary"], ascending=[True, False])

# Sort by index
df.sort_index()

# Rank
df["salary_rank"] = df["salary"].rank(ascending=False)
# method: 'average' (default), 'min', 'max', 'first', 'dense'
df["dense_rank"] = df["salary"].rank(method="dense", ascending=False)`},{heading:"11. Applying Functions",content:["Apply custom functions to your data."],code:`# Apply to a Series (column)
df["salary_after_tax"] = df["salary"].apply(lambda x: x * 0.85)

# Apply to DataFrame (row or column wise)
df[["age", "salary"]].apply(np.sqrt)           # element-wise
df.apply(lambda row: row["salary"] / row["age"], axis=1)  # row-wise

# Map: transform values
df["city"] = df["city"].map({"Mumbai": "MUM", "Delhi": "DEL"})

# Applymap: element-wise on entire DataFrame (deprecated, use map)
df.map(lambda x: str(x).upper() if isinstance(x, str) else x)`},{heading:"12. Pivot Tables and Crosstabs",content:["Pivot tables reshape data for analysis — like Excel pivot tables but in Python."],code:`# Pivot table
pd.pivot_table(df, values="salary", index="city",
               columns="level", aggfunc="mean")

# Multiple aggregations in pivot
pd.pivot_table(df, values="salary", index="city",
               aggfunc=["mean", "sum", "count"])

# Crosstab (count of combinations)
pd.crosstab(df["city"], df["level"])

# Melt (wide to long format)
df_wide = pd.DataFrame({
    "name": ["Amit", "Priya"],
    "Jan": [100, 200],
    "Feb": [150, 250]
})
df_long = df_wide.melt(id_vars="name",
                       var_name="month", value_name="sales")

# Pivot (long to wide)
df_wide_again = df_long.pivot(index="name",
                              columns="month", values="sales")`},{heading:"13. Time Series with Pandas",content:["Pandas has excellent support for time series data."],code:`# Create date range
dates = pd.date_range("2024-01-01", periods=10, freq="D")
# Daily: "D", Monthly: "M", Yearly: "Y", Hourly: "H"

# Create time series DataFrame
ts = pd.DataFrame({
    "date": dates,
    "sales": [100, 120, 90, 150, 200, 180, 160, 210, 190, 220]
})
ts.set_index("date", inplace=True)

# Resample (change frequency)
ts.resample("3D").sum()     # 3-day totals
ts.resample("W").mean()     # weekly average

# Rolling window (moving average)
ts["7_day_avg"] = ts["sales"].rolling(window=3).mean()

# Shift (lag/lead)
ts["prev_day_sales"] = ts["sales"].shift(1)
ts["pct_change"] = ts["sales"].pct_change()

# Date components
ts["day_of_week"] = ts.index.day_name()
ts["month"] = ts.index.month

# Time-based indexing
ts["2024-01-03"]                    # single day
ts["2024-01-03":"2024-01-07"]      # date range`}]},{id:"powerbi-tutorial",title:"Power BI Tutorial — Complete Guide",category:"Visualization",icon:"LayoutDashboard",description:"Learn Power BI from connecting data to building interactive dashboards and DAX formulas.",level:"Intermediate",estimatedTime:"50 min read",sections:[{heading:"What is Power BI?",content:["Power BI is Microsoft's business analytics tool for creating interactive dashboards and reports. It connects to hundreds of data sources, transforms data with Power Query, and creates stunning visualizations.","Power BI has three main components:"],list:["Power BI Desktop — free desktop app for building reports (Windows only)","Power BI Service — cloud platform for sharing and collaborating","Power BI Mobile — view dashboards on mobile devices"]},{heading:"1. Getting Started with Power BI Desktop",content:["Download Power BI Desktop from the Microsoft Store or powerbi.microsoft.com. It is free.","The workflow is:"],list:["1. Connect to data (Get Data)","2. Transform data (Power Query Editor)","3. Create data model (relationships)","4. Add calculations (DAX)","5. Create visualizations","6. Format and design the report","7. Publish to Power BI Service"]},{heading:"2. Connecting to Data",content:["Power BI can connect to hundreds of data sources.","To connect: Home > Get Data > choose source > select file/table > Load or Transform Data.","Choose 'Transform Data' to open Power Query for cleaning. Choose 'Load' to import directly."],list:["Files: Excel, CSV, XML, JSON, PDF, folder","Databases: SQL Server, PostgreSQL, MySQL, Oracle","Cloud services: Azure, Salesforce, Google Analytics, SharePoint","Web: web pages, REST APIs","Other: Python/R scripts"]},{heading:"3. Power Query Editor in Power BI",content:["Power BI's Power Query is the same as in Excel — a visual data transformation tool."],list:["Remove columns: right-click column > Remove","Rename columns: double-click header","Change data types: click the type icon next to column name","Replace values: right-click column > Replace Values","Split columns: by delimiter, by number of characters","Merge queries: Home > Merge Queries (like SQL JOIN)","Append queries: Home > Append Queries (like SQL UNION)","Group by: Transform > Group By (aggregation)","Pivot/Unpivot: Transform > Pivot Column / Unpivot Columns","Conditional column: Add Column > Conditional Column (like IF)","Custom column: Add Column > Custom Column (write Power Query formula)"]},{heading:"4. Data Modeling — Relationships",content:["After loading data, create relationships between tables — this is the foundation of Power BI."],list:["Go to Model View (relationship icon on left sidebar)","Drag a field from one table to the matching field in another table","Relationship types:","  — One-to-Many (1:*): most common (e.g., one category to many products)","  — One-to-One (1:1): rare","  — Many-to-Many (*:*): avoid if possible","Cross-filter direction:","  — Single: filter flows one way (from the 'one' side)","  — Both: filter flows both directions (use carefully)","Cardinality is automatically detected — verify it's correct"]},{heading:"5. DAX — Data Analysis Expressions",content:["DAX is the formula language of Power BI. It is used to create calculated columns, measures, and calculated tables.","DAX vs Excel formulas: DAX works with tables and columns, not cells. It is more powerful but has a learning curve."]},{heading:"6. DAX — Basic Measures",content:["Measures are calculations that adapt to filter context in your report."],code:`-- Total Sales
Total Sales = SUM(Sales[Amount])

-- Total Quantity
Total Quantity = SUM(Sales[Quantity])

-- Average Price
Average Price = AVERAGE(Sales[Price])

-- Count of Orders
Order Count = COUNTROWS(Sales)

-- Distinct Count of Customers
Customer Count = DISTINCTCOUNT(Sales[CustomerID])

-- Minimum and Maximum
Min Sales = MIN(Sales[Amount])
Max Sales = MAX(Sales[Amount])`},{heading:"7. DAX — Calculated Columns",content:["Calculated columns add new columns to your table using DAX formulas."],code:`-- Profit column
Profit = Sales[Revenue] - Sales[Cost]

-- Profit margin
Profit Margin = DIVIDE(Sales[Profit], Sales[Revenue], 0)

-- Full name
Full Name = Customers[FirstName] & " " & Customers[LastName]

-- Category based on value
Sales Category =
    IF(Sales[Amount] > 1000, "High",
       IF(Sales[Amount] > 500, "Medium", "Low"))

-- Date column
Year = YEAR(Sales[Date])
Month Name = FORMAT(Sales[Date], "MMMM")
Quarter = "Q" & QUARTER(Sales[Date])`},{heading:"8. DAX — Time Intelligence Functions",content:["Time intelligence functions are one of Power BI's biggest strengths — they make period-over-period comparisons easy."],code:`-- Same period last year
Sales Last Year = CALCULATE([Total Sales],
    SAMEPERIODLASTYEAR(Calendar[Date]))

-- Year-to-date
Sales YTD = TOTALYTD([Total Sales], Calendar[Date])

-- Quarter-to-date
Sales QTD = TOTALQTD([Total Sales], Calendar[Date])

-- Month-to-date
Sales MTD = TOTALMTD([Total Sales], Calendar[Date])

-- Year-over-year growth
YoY Growth = DIVIDE(
    [Total Sales] - [Sales Last Year],
    [Sales Last Year],
    0
)

-- Rolling 12 months
Rolling 12M Sales = CALCULATE([Total Sales],
    DATESINPERIOD(Calendar[Date],
        MAX(Calendar[Date]), -12, MONTH))

-- Previous month
Prev Month Sales = CALCULATE([Total Sales],
    DATEADD(Calendar[Date], -1, MONTH))`},{heading:"9. DAX — Advanced Functions",content:["These functions unlock powerful analysis in DAX."],code:`-- CALCULATE (modifies filter context)
Red Products Sales = CALCULATE([Total Sales],
    Products[Color] = "Red")

-- CALCULATE with multiple filters
High Value Red Sales = CALCULATE([Total Sales],
    Products[Color] = "Red",
    Sales[Amount] > 500)

-- FILTER (table function)
Top Customers Sales = CALCULATE([Total Sales],
    FILTER(Customers,
        CALCULATE([Total Sales]) > 10000))

-- ALL (remove filters)
% of Total = DIVIDE([Total Sales],
    CALCULATE([Total Sales], ALL(Sales)))

-- ALLEXCEPT (keep some filters)
% of Category Total = DIVIDE([Total Sales],
    CALCULATE([Total Sales],
    ALLEXCEPT(Sales, Sales[Category])))

-- SWITCH (like CASE/switch)
Sales Tier = SWITCH(
    TRUE(),
    [Total Sales] > 10000, "Platinum",
    [Total Sales] > 5000, "Gold",
    [Total Sales] > 1000, "Silver",
    "Bronze"
)

-- RANKX
Sales Rank = RANKX(
    ALL(Customers),
    [Total Sales], , DESC
)

-- TOPN
Top 5 Customers Sales = CALCULATE([Total Sales],
    TOPN(5, Customers, [Total Sales], DESC))`},{heading:"10. Creating Visualizations",content:["Power BI offers many visualization types. Choose the right one for your data."],table:{headers:["Visualization","Best For","Example"],rows:[["Bar/Column Chart","Comparing categories","Sales by region"],["Line Chart","Trends over time","Monthly sales trend"],["Pie/Donut Chart","Part of whole (few categories)","Market share"],["Scatter Plot","Relationship between 2 variables","Price vs. demand"],["Table","Detailed data","Transaction list"],["Matrix","Multi-dimensional data","Sales by region and month"],["Card","Single KPI","Total revenue"],["Map","Geographic data","Sales by country"],["Funnel","Stages of a process","Sales pipeline"],["Gauge","Progress toward target","Goal completion"],["Treemap","Hierarchical proportions","Category/sub-category sales"],["Waterfall","Running total with increases/decreases","Profit breakdown"]]}},{heading:"11. Interactive Features",content:["Power BI visualizations are interactive — they filter each other automatically."],list:["Slicers: add filter panels (Insert > Slicer) for users to filter the report","Cross-filtering: clicking a bar in one chart filters all other charts","Drill-through: right-click a data point to open a detailed page","Tooltips: hover over visual to see detailed information","Bookmarks: save a view state and navigate between bookmarks","Buttons: add navigation buttons to switch between pages or bookmarks","Q&A: natural language questions (type 'show sales by region as bar chart')"]},{heading:"12. Power BI Service — Publishing and Sharing",content:["After building your report in Desktop, publish it to the Power BI Service for sharing."],list:["1. Sign in to Power BI Service (app.powerbi.com) — free account available","2. In Desktop: Home > Publish > select workspace","3. In Service: create a dashboard by pinning visuals from your report","4. Set up scheduled refresh to keep data current","5. Share with colleagues (requires Power BI Pro license for sharing)","6. Export to PDF or PowerPoint for presentations","7. Set up alerts on data changes"]},{heading:"13. Power BI Best Practices",content:["Following these practices makes your Power BI reports faster and more maintainable:"],list:["Use a dedicated calendar/date table for time intelligence","Keep your data model simple — star schema is ideal","Use measures instead of calculated columns when possible (they save memory)","Name measures clearly with a prefix (e.g., 'Sales Total', 'Sales YTD')","Format numbers consistently (currency, thousands separators)","Use consistent color schemes across all visuals","Don't put too many visuals on one page — it slows rendering","Use hierarchy for drill-down (Year > Quarter > Month > Day)","Document your DAX measures so others understand them"]}]},{id:"numpy-tutorial",title:"NumPy Tutorial — Complete Guide",category:"Python",icon:"Calculator",description:"Master NumPy arrays, operations, broadcasting, and linear algebra from basics to advanced.",level:"Intermediate",estimatedTime:"45 min read",sections:[{heading:"What is NumPy?",content:["NumPy (Numerical Python) is the foundation of scientific computing in Python. It provides fast, efficient n-dimensional arrays and mathematical functions. Pandas, Matplotlib, and most data science libraries are built on top of NumPy."]},{heading:"1. Installation and Import",content:["Install NumPy and import it. The convention is np."],code:`pip install numpy
import numpy as np`},{heading:"2. Creating Arrays",content:["NumPy arrays (ndarrays) are the core data structure — faster and more powerful than Python lists."],code:`# From a list
arr = np.array([1, 2, 3, 4, 5])
print(arr)            # [1 2 3 4 5]
print(type(arr))      # <class 'numpy.ndarray'>
print(arr.dtype)      # int64
print(arr.shape)      # (5,)
print(arr.ndim)       # 1 (number of dimensions)
print(arr.size)       # 5 (total elements)

# 2D array (matrix)
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.shape)   # (2, 3)
print(matrix.ndim)    # 2

# 3D array
arr3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
print(arr3d.shape)    # (2, 2, 2)
print(arr3d.ndim)     # 3

# Built-in array creation
np.zeros(5)                    # [0. 0. 0. 0. 0.]
np.zeros((3, 4))              # 3x4 matrix of zeros
np.ones((2, 3))               # 2x3 matrix of ones
np.full((2, 2), 7)            # 2x2 filled with 7
np.eye(3)                     # 3x3 identity matrix
np.arange(0, 10, 2)           # [0 2 4 6 8] (start, stop, step)
np.linspace(0, 1, 5)          # [0. 0.25 0.5 0.75 1.] (evenly spaced)
np.random.rand(3, 3)          # 3x3 random (0-1)
np.random.randn(3, 3)         # 3x3 random (normal distribution)
np.random.randint(0, 100, 5)  # 5 random integers 0-99
np.random.seed(42)            # reproducible random numbers`},{heading:"3. Array Data Types",content:["NumPy arrays have a single data type for all elements, making them efficient."],code:`# Specify data type
arr = np.array([1, 2, 3], dtype="float64")
print(arr.dtype)      # float64

arr = np.array([1.5, 2.7, 3.9], dtype="int32")
print(arr)            # [1 2 3] (truncated)

# Common types: int8, int16, int32, int64, float32, float64, bool, str

# Convert type
arr = np.array([1.5, 2.7, 3.9])
arr_int = arr.astype(int)
print(arr_int)        # [1 2 3]`},{heading:"4. Indexing and Slicing",content:["Access elements in arrays — similar to Python lists but more powerful."],code:`# 1D array
arr = np.array([10, 20, 30, 40, 50])
print(arr[0])         # 10
print(arr[-1])        # 50
print(arr[1:4])       # [20 30 40]
print(arr[:3])        # [10 20 30]
print(arr[2:])        # [30 40 50]
print(arr[::-1])      # [50 40 30 20 10] (reversed)

# 2D array
mat = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(mat[0, 0])      # 1 (row 0, col 0)
print(mat[1, 2])      # 6 (row 1, col 2)
print(mat[0])         # [1 2 3] (entire row 0)
print(mat[:, 0])      # [1 4 7] (entire column 0)
print(mat[0:2, 1:3])  # [[2 3] [5 6]] (sub-matrix)

# Boolean indexing (powerful!)
arr = np.array([10, 20, 30, 40, 50])
mask = arr > 25
print(arr[mask])      # [30 40 50]

# Direct boolean condition
print(arr[arr > 25])  # [30 40 50]
print(arr[(arr > 15) & (arr < 45)])  # [20 30 40]
print(arr[arr != 30]) # [10 20 40 50]

# Fancy indexing
print(arr[[0, 2, 4]]) # [10 30 50] (specific indices)`},{heading:"5. Array Operations",content:["NumPy supports element-wise operations without loops — this is called vectorization and it is much faster."],code:`# Arithmetic (element-wise)
a = np.array([1, 2, 3, 4])
b = np.array([10, 20, 30, 40])

print(a + b)      # [11 22 33 44]
print(a - b)      # [-9 -18 -27 -36]
print(a * b)      # [10 40 90 160]
print(b / a)      # [10. 10. 10. 10.]
print(a ** 2)     # [1 4 9 16]
print(a % 2)      # [1 0 1 0]

# Scalar operations
print(a + 100)    # [101 102 103 104]
print(a * 2)      # [2 4 6 8]
print(-a)         # [-1 -2 -3 -4]

# Comparison (returns boolean array)
print(a > 2)      # [False False  True  True]
print(a == b)     # [False False False False]

# Mathematical functions
arr = np.array([1, 4, 9, 16, 25])
print(np.sqrt(arr))     # [1. 2. 3. 4. 5.]
print(np.abs([-1, -2])) # [1 2]
print(np.exp(arr))      # e^arr
print(np.log(arr))      # natural log

# Trigonometric
angles = np.array([0, np.pi/2, np.pi])
print(np.sin(angles))   # [0 1 0]
print(np.cos(angles))   # [1 0 -1]

# Rounding
arr = np.array([1.2, 2.5, 3.7, 4.1])
print(np.round(arr))    # [1. 2. 4. 4.]
print(np.floor(arr))    # [1. 2. 3. 4.]
print(np.ceil(arr))     # [2. 3. 4. 5.]`},{heading:"6. Statistical Operations",content:["NumPy provides fast statistical functions for data analysis."],code:`arr = np.array([10, 20, 30, 40, 50])

print(np.sum(arr))         # 150
print(np.mean(arr))        # 30.0
print(np.median(arr))      # 30.0
print(np.std(arr))         # standard deviation
print(np.var(arr))         # variance
print(np.min(arr))         # 10
print(np.max(arr))         # 50
print(np.argmin(arr))      # 0 (index of min)
print(np.argmax(arr))      # 4 (index of max)
print(np.percentile(arr, 50))  # 30.0 (median)

# For 2D arrays (axis parameter)
mat = np.array([[1, 2, 3], [4, 5, 6]])
print(np.sum(mat))              # 21 (all elements)
print(np.sum(mat, axis=0))      # [5 7 9] (column sums)
print(np.sum(mat, axis=1))      # [6 15] (row sums)
print(np.mean(mat, axis=0))     # [2.5 3.5 4.5] (column means)
print(np.max(mat, axis=1))      # [3 6] (row maxes)

# Cumulative
print(np.cumsum(arr))      # [10 30 60 100 150]
print(np.cumprod(arr))     # [10 200 6000 240000 12000000]`},{heading:"7. Broadcasting",content:["Broadcasting is NumPy's way of performing operations on arrays of different shapes without explicitly duplicating data."],code:`# Scalar + array (scalar is 'broadcast' to each element)
arr = np.array([1, 2, 3])
print(arr + 10)         # [11 12 13]

# 1D + 2D (1D is broadcast across rows)
mat = np.array([[1, 2, 3], [4, 5, 6]])
row = np.array([10, 20, 30])
print(mat + row)
# [[11 22 33]
#  [14 25 36]]

# Column broadcast
col = np.array([[10], [20]])    # 2x1 array
print(mat + col)
# [[11 12 13]
#  [24 25 26]]

# Broadcasting rules:
# 1. Compare shapes from right to left
# 2. Dimensions must be equal or one of them must be 1
# 3. If shapes don't match, error

# Example: standardize data (z-score normalization)
data = np.array([10, 20, 30, 40, 50])
standardized = (data - np.mean(data)) / np.std(data)
print(standardized)    # [-1.41 -0.71 0. 0.71 1.41]`},{heading:"8. Reshaping and Transposing",content:["Change the shape of arrays without changing the data."],code:`# Reshape
arr = np.arange(12)             # [0 1 2 ... 11]
print(arr.reshape(3, 4))        # 3x4 matrix
print(arr.reshape(4, 3))        # 4x3 matrix
print(arr.reshape(2, 2, 3))     # 2x2x3 array
print(arr.reshape(-1, 4))       # auto-calculate rows: 3x4 (-1 means 'figure it out')

# Flatten
mat = np.array([[1, 2, 3], [4, 5, 6]])
print(mat.flatten())            # [1 2 3 4 5 6]
print(mat.ravel())              # same but returns a view (more memory efficient)

# Transpose
print(mat.T)                    # [[1 4] [2 5] [3 6]]
print(mat.transpose())          # same

# Swap axes (for 3D+ arrays)
arr3d = np.arange(24).reshape(2, 3, 4)
print(arr3d.swapaxes(0, 2).shape)   # (4, 3, 2)

# Resize (modifies in place, can repeat data)
arr = np.array([1, 2, 3])
arr.resize((2, 3))
print(arr)    # [[1 2 3] [1 2 3]]`},{heading:"9. Stacking and Splitting",content:["Combine and split arrays in various ways."],code:`a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Stack vertically
print(np.vstack([a, b]))
# [[1 2 3]
#  [4 5 6]]

# Stack horizontally
print(np.hstack([a, b]))
# [1 2 3 4 5 6]

# Stack as columns
print(np.column_stack([a, b]))
# [[1 4]
#  [2 5]
#  [3 6]]

# Concatenate
arr = np.array([[1, 2], [3, 4]])
print(np.concatenate([arr, arr], axis=0))   # vertical
print(np.concatenate([arr, arr], axis=1))   # horizontal

# Split
arr = np.arange(12)
print(np.split(arr, 3))        # 3 equal parts: [0-3] [4-7] [8-11]
print(np.array_split(arr, 5))  # 5 parts (unequal OK)
print(np.hsplit(arr.reshape(3,4), 2))  # split horizontally
print(np.vsplit(arr.reshape(3,4), 3))  # split vertically`},{heading:"10. Linear Algebra",content:["NumPy provides linear algebra functions essential for advanced data analysis and machine learning."],code:`# Matrix multiplication
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

print(A @ B)              # matrix multiplication (Python 3.5+)
print(np.dot(A, B))       # same thing
print(A.dot(B))           # same thing

# Element-wise multiplication
print(A * B)              # [[5 12] [21 32]]

# Determinant
print(np.linalg.det(A))   # -2.0

# Inverse
print(np.linalg.inv(A))

# Eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)

# Solve linear equations: Ax = B
# 2x + y = 5, x + 3y = 10
A = np.array([[2, 1], [1, 3]])
B = np.array([5, 10])
x = np.linalg.solve(A, B)
print(x)                  # [1. 3.] → x=1, y=3

# Norm (magnitude)
v = np.array([3, 4])
print(np.linalg.norm(v))  # 5.0

# Singular Value Decomposition (SVD)
U, S, V = np.linalg.svd(A)`},{heading:"11. Random Number Generation",content:["NumPy's random module is essential for simulations, sampling, and data generation."],code:`# Set seed for reproducibility
np.random.seed(42)

# Distributions
print(np.random.rand(5))            # uniform [0,1)
print(np.random.randn(5))           # standard normal
print(np.random.randint(0, 100, 5) # random integers
print(np.random.normal(50, 10, 5)) # mean=50, std=10
print(np.random.uniform(0, 1, 5))  # uniform
print(np.random.binomial(10, 0.5, 5)) # binomial
print(np.random.poisson(5, 5))     # Poisson

# Shuffling and sampling
arr = np.arange(10)
np.random.shuffle(arr)             # shuffle in place
print(arr)

sample = np.random.choice(arr, 5, replace=False)  # random sample
print(sample)

# Random permutation
print(np.random.permutation(10))`},{heading:"12. Performance: NumPy vs Python Lists",content:["NumPy is dramatically faster than pure Python for numerical operations because it uses optimized C code and contiguous memory."],code:`import time

# Python list
py_list = list(range(1000000))

# NumPy array
np_arr = np.arange(1000000)

# Time Python
start = time.time()
result = [x * 2 for x in py_list]
py_time = time.time() - start

# Time NumPy
start = time.time()
result = np_arr * 2
np_time = time.time() - start

print(f"Python: {py_time:.4f}s")
print(f"NumPy:  {np_time:.4f}s")
print(f"NumPy is {py_time/np_time:.1f}x faster")`}]},{id:"data-visualization-tutorial",title:"Data Visualization Tutorial",category:"Visualization",icon:"ChartArea",description:"Learn to create impactful charts with Matplotlib and Seaborn — bar, line, scatter, heatmap, and more.",level:"Intermediate",estimatedTime:"40 min read",sections:[{heading:"Why Data Visualization Matters",content:["Data visualization turns numbers into visual stories. A good chart communicates insights faster than a table of numbers. As a Data Analyst, visualization is how you communicate your findings to stakeholders."]},{heading:"Choosing the Right Chart Type",content:["Different data types and questions require different visualizations:"],table:{headers:["Question","Chart Type","Example"],rows:[["How does X compare across categories?","Bar chart","Sales by region"],["How does X change over time?","Line chart","Monthly revenue trend"],["What is the relationship between X and Y?","Scatter plot","Price vs. demand"],["What is the distribution of X?","Histogram","Age distribution of customers"],["What is the composition of X?","Pie/Donut chart","Market share"],["How is X distributed by category?","Box plot","Salary by department"],["What is the correlation between variables?","Heatmap","Correlation matrix"],["How do multiple variables relate?","Pair plot","All pairwise relationships"]]}},{heading:"1. Matplotlib Basics",content:["Matplotlib is Python's fundamental plotting library. It gives you full control over every element of a chart."],code:`import matplotlib.pyplot as plt
import numpy as np

# Line chart
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 5))
plt.plot(x, y, color="blue", linewidth=2, label="sin(x)")
plt.xlabel("X axis")
plt.ylabel("Y axis")
plt.title("Sine Wave")
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

# Bar chart
categories = ["A", "B", "C", "D"]
values = [23, 45, 12, 67]

plt.bar(categories, values, color=["#4CAF50", "#2196F3", "#FF9800", "#f44336"])
plt.xlabel("Category")
plt.ylabel("Value")
plt.title("Bar Chart")
plt.show()

# Histogram
data = np.random.randn(1000)
plt.hist(data, bins=30, color="teal", edgecolor="white", alpha=0.7)
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.title("Histogram")
plt.show()

# Scatter plot
x = np.random.rand(50)
y = 2 * x + np.random.randn(50) * 0.1
plt.scatter(x, y, color="purple", alpha=0.6)
plt.xlabel("X")
plt.ylabel("Y")
plt.title("Scatter Plot")
plt.show()`},{heading:"2. Matplotlib Customization",content:["Customize every aspect of your charts for professional results."],code:`# Subplots (multiple charts in one figure)
fig, axes = plt.subplots(2, 2, figsize=(12, 8))

axes[0, 0].plot([1, 2, 3], [1, 4, 9], "r-")
axes[0, 0].set_title("Line Chart")

axes[0, 1].bar(["A", "B", "C"], [3, 7, 2], color="skyblue")
axes[0, 1].set_title("Bar Chart")

axes[1, 0].scatter(np.random.rand(20), np.random.rand(20))
axes[1, 0].set_title("Scatter")

axes[1, 1].hist(np.random.randn(100), bins=20, color="salmon")
axes[1, 1].set_title("Histogram")

plt.tight_layout()
plt.show()

# Style
plt.style.available   # list all styles
plt.style.use("seaborn-v0_8-darkgrid")

# Save figure
plt.savefig("chart.png", dpi=300, bbox_inches="tight")
plt.savefig("chart.pdf")   # vector format
plt.savefig("chart.svg")   # scalable vector`},{heading:"3. Seaborn — Statistical Visualization",content:["Seaborn is built on Matplotlib and provides beautiful statistical visualizations with less code."],code:`import seaborn as sns
import pandas as pd

# Load sample dataset
df = pd.DataFrame({
    "category": np.random.choice(["A", "B", "C"], 100),
    "value": np.random.randn(100) * 10 + 50,
    "group": np.random.choice(["X", "Y"], 100)
})

# Box plot
sns.boxplot(data=df, x="category", y="value")
plt.title("Box Plot by Category")
plt.show()

# Violin plot
sns.violinplot(data=df, x="category", y="value")
plt.show()

# Distribution plot
sns.histplot(df["value"], kde=True, bins=20)
plt.show()

# Count plot
sns.countplot(data=df, x="category")
plt.show()

# Scatter with regression line
tips = sns.load_dataset("tips")
sns.regplot(data=tips, x="total_bill", y="tip")
plt.show()

# Pair plot (all pairwise relationships)
iris = sns.load_dataset("iris")
sns.pairplot(iris, hue="species")
plt.show()`},{heading:"4. Heatmaps and Correlation",content:["Heatmaps visualize matrices — commonly used for correlation analysis."],code:`# Correlation heatmap
data = pd.DataFrame({
    "sales": np.random.rand(100) * 100,
    "ads": np.random.rand(100) * 50,
    "price": np.random.rand(100) * 200,
    "season": np.random.rand(100) * 10
})

corr = data.corr()
sns.heatmap(corr, annot=True, cmap="coolwarm", center=0,
            square=True, linewidths=0.5)
plt.title("Correlation Heatmap")
plt.show()

# Pivot table heatmap
flights = sns.load_dataset("flights")
pivot = flights.pivot(index="month", columns="year", values="passengers")
sns.heatmap(pivot, cmap="YlOrRd", linewidths=0.5)
plt.title("Flight Passengers Heatmap")
plt.show()`},{heading:"5. Advanced Charts",content:["Specialized charts for specific analysis needs."],code:`# Pie / Donut chart
sizes = [30, 25, 20, 25]
labels = ["A", "B", "C", "D"]
colors = ["#ff9999", "#66b3ff", "#99ff99", "#ffcc99"]

plt.pie(sizes, labels=labels, colors=colors, autopct="%1.1f%%",
        startangle=90, wedgeprops={"width": 0.4})  # donut: width < 1
plt.title("Donut Chart")
plt.show()

# Area chart
x = range(12)
y = np.cumsum(np.random.rand(12) * 10)
plt.fill_between(x, y, alpha=0.3, color="teal")
plt.plot(x, y, color="teal")
plt.title("Area Chart")
plt.show()

# Multiple lines
for i in range(3):
    plt.plot(np.cumsum(np.random.randn(50)),
             label=f"Series {i+1}", alpha=0.7)
plt.legend()
plt.title("Multiple Line Chart")
plt.show()`},{heading:"6. Visualization Best Practices",content:["Good visualizations are clear, accurate, and tell a story:"],list:["Start with a clear question — know what you want to show","Choose the right chart type for your data and question","Use color meaningfully — not just for decoration","Label everything: axes, title, legend, data labels for key points","Remove clutter — less is more (chartjunk reduces clarity)","Use consistent scales across comparable charts","Sort bar charts by value (not alphabetically) for easier comparison","Avoid 3D charts — they distort perception","Limit pie charts to 5-7 categories max","Use appropriate aspect ratios — don't stretch or compress","Add context with annotations for important data points","Make charts accessible — choose colorblind-friendly palettes"]}]},{id:"data-cleanup-tutorial",title:"Data Cleaning & Preprocessing Tutorial",category:"Data Workflow",icon:"Sparkles",description:"Learn to clean messy real-world data — handling missing values, duplicates, outliers, and inconsistent formats.",level:"Intermediate",estimatedTime:"40 min read",sections:[{heading:"What is Data Cleaning?",content:["Data cleaning (or data cleansing) is the process of fixing or removing incorrect, corrupted, duplicate, or incomplete data within a dataset. Data scientists spend 60-80% of their time cleaning data — it is the most important step in any analysis.","The principle is simple: garbage in, garbage out. No matter how sophisticated your analysis, if your data is dirty, your results will be wrong."]},{heading:"1. Identifying Data Quality Issues",content:["Before cleaning, identify what needs fixing."],code:`import pandas as pd
import numpy as np

# Sample messy data
df = pd.DataFrame({
    "name": ["Amit", " amit ", "PRIYA", "Raj", "Raj", np.nan, "Sneha"],
    "age": [25, 25, -5, 999, 28, np.nan, 35],
    "email": ["amit@email.com", "amit@email.com", "priya@email.com",
              "raj@email.com", "raj@email.com", "", "sneha@email.com"],
    "salary": ["$50,000", "$75,000", "$60,000", "65000", "55000", np.nan, "$80,000"],
    "date": ["2023-01-15", "01/15/2023", "2023-03-20", "2023-06-01",
             "2023-06-01", "invalid", "2023-11-10"]
})

# Check for missing values
print(df.isnull().sum())

# Check data types
print(df.dtypes)

# Check for duplicates
print(df.duplicated().sum())

# View unique values
print(df["name"].unique())

# Summary statistics (helps spot outliers)
print(df.describe(include="all"))`},{heading:"2. Handling Missing Values",content:["Missing values are the most common data quality issue. You can drop them or fill (impute) them."],code:`# Drop rows with any missing values
df_clean = df.dropna()

# Drop rows where specific columns are missing
df_clean = df.dropna(subset=["name", "email"])

# Drop columns with too many missing values
df_clean = df.dropna(axis=1, thresh=len(df) * 0.7)  # keep if 70%+ non-null

# Fill with a constant
df["name"] = df["name"].fillna("Unknown")

# Fill numeric with mean/median
df["age"] = df["age"].fillna(df["age"].median())

# Forward fill / backward fill (for time series)
df["age"] = df["age"].ffill()   # use previous value
df["age"] = df["age"].bfill()   # use next value

# Fill categorical with mode
df["email"] = df["email"].replace("", np.nan)
df["email"] = df["email"].fillna(df["email"].mode()[0])

# Interpolation (for numeric data)
df["age"] = df["age"].interpolate(method="linear")`},{heading:"3. Removing Duplicates",content:["Duplicate data skews analysis. Identify and remove duplicates."],code:`# Find duplicates
print(df.duplicated())           # boolean mask
print(df.duplicated().sum())     # count
print(df[df.duplicated()])       # view duplicate rows

# Remove duplicates
df = df.drop_duplicates()        # keep first occurrence
df = df.drop_duplicates(keep="last")  # keep last
df = df.drop_duplicates(keep=False)   # remove all duplicates

# Check duplicates on specific columns
df = df.drop_duplicates(subset=["email"], keep="first")

# After removing, reset index
df = df.reset_index(drop=True)`},{heading:"4. Fixing Text and String Issues",content:["Text data often has inconsistent formatting — extra spaces, different cases, typos."],code:`# Remove leading/trailing whitespace
df["name"] = df["name"].str.strip()

# Standardize case
df["name"] = df["name"].str.title()  # "amit" → "Amit"
df["email"] = df["email"].str.lower()

# Replace values
df["name"] = df["name"].str.replace("  ", " ")  # double space to single

# Remove special characters
df["name"] = df["name"].str.replace("[^a-zA-Z ]", "", regex=True)

# Fix common typos with replace
df["city"] = df["city"].replace({
    "mumbai": "Mumbai",
    "MUMBAI": "Mumbai",
    "Bombay": "Mumbai"
})

# Standardize phone numbers
df["phone"] = df["phone"].str.replace(r"\\D", "", regex=True)  # digits only

# Extract information from strings
df["area_code"] = df["phone"].str[:3]`},{heading:"5. Fixing Data Types",content:["Columns often have wrong data types after import (e.g., numbers stored as text)."],code:`# Convert to numeric
df["age"] = pd.to_numeric(df["age"], errors="coerce")
# errors="coerce" turns invalid values to NaN

# Convert to datetime
df["date"] = pd.to_datetime(df["date"], errors="coerce",
                            format="mixed")

# Convert to string
df["name"] = df["name"].astype(str)

# Convert to category (saves memory for repeated values)
df["city"] = df["city"].astype("category")

# Convert to int (after ensuring no NaN)
df["age"] = df["age"].fillna(0).astype(int)

# Clean and convert currency
df["salary"] = df["salary"].str.replace("$", "", regex=False)
df["salary"] = df["salary"].str.replace(",", "", regex=False)
df["salary"] = pd.to_numeric(df["salary"], errors="coerce")`},{heading:"6. Handling Outliers",content:["Outliers are values far outside the normal range. They can be errors or genuine extreme values."],code:`# Identify outliers with IQR method
Q1 = df["age"].quantile(0.25)
Q3 = df["age"].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

outliers = df[(df["age"] < lower_bound) | (df["age"] > upper_bound)]
print(outliers)

# Remove outliers
df = df[(df["age"] >= lower_bound) & (df["age"] <= upper_bound)]

# Cap outliers (winsorize)
df["age"] = df["age"].clip(lower_bound, upper_bound)

# Replace with median
df.loc[df["age"] > upper_bound, "age"] = df["age"].median()

# Z-score method (for normally distributed data)
from scipy import stats
z_scores = np.abs(stats.zscore(df["age"]))
df = df[z_scores < 3]   # keep values within 3 std dev`},{heading:"7. Standardizing and Normalizing",content:["Scale numeric features to a standard range — important for comparisons and ML."],code:`# Min-Max normalization (0 to 1)
df["salary_norm"] = (df["salary"] - df["salary"].min()) / \\
                    (df["salary"].max() - df["salary"].min())

# Z-score standardization (mean=0, std=1)
df["salary_std"] = (df["salary"] - df["salary"].mean()) / df["salary"].std()

# Log transformation (for skewed data)
df["salary_log"] = np.log1p(df["salary"])   # log(1+x) handles zeros

# Using scikit-learn
# from sklearn.preprocessing import MinMaxScaler, StandardScaler
# scaler = MinMaxScaler()
# df[["salary_scaled"]] = scaler.fit_transform(df[["salary"]])`},{heading:"8. Data Cleaning Checklist",content:["Follow this checklist for every dataset:"],list:["1. Check data types and fix incorrect ones","2. Handle missing values (drop or impute)","3. Remove duplicate rows","4. Strip whitespace and standardize text case","5. Fix inconsistent formatting (dates, phone, currency)","6. Remove or cap outliers","7. Validate ranges (e.g., age should be 0-120)","8. Check for impossible values (negative prices, future dates)","9. Standardize categorical values (e.g., 'NYC' and 'New York City')","10. Verify no data was lost during cleaning","11. Document all changes you made"]}]},{id:"data-collection-tutorial",title:"Data Collection Tutorial",category:"Data Workflow",icon:"Download",description:"Learn methods and tools for collecting data — APIs, web scraping, databases, files, and surveys.",level:"Beginner",estimatedTime:"30 min read",sections:[{heading:"What is Data Collection?",content:["Data collection is the first step in any data analysis project. It involves gathering data from various sources — databases, files, APIs, web pages, sensors, surveys, and more. The quality of your analysis depends on the quality of the data you collect."]},{heading:"Sources of Data",content:["Data comes in two broad categories:"],list:["Primary data: collected directly (surveys, interviews, experiments, sensors)","Secondary data: existing data (databases, public datasets, APIs, web scraping)","","Common data sources for analysts:","Databases: SQL databases (PostgreSQL, MySQL), NoSQL (MongoDB)","Files: CSV, Excel, JSON, XML, Parquet","APIs: REST APIs that return JSON/XML data","Web scraping: extracting data from web pages","Public datasets: Kaggle, UCI ML Repository, government data","Cloud storage: AWS S3, Google Cloud Storage, Azure Blob","Spreadsheets: Google Sheets, Excel","CRM/ERP systems: Salesforce, SAP"]},{heading:"1. Reading Files with Python",content:["The simplest data source — reading from files."],code:`import pandas as pd

# CSV
df = pd.read_csv("data.csv")
df = pd.read_csv("data.csv", sep=";", encoding="utf-8")

# Excel
df = pd.read_excel("data.xlsx", sheet_name="Sheet1")

# JSON
df = pd.read_json("data.json")
import json
with open("data.json") as f:
    data = json.load(f)

# Multiple CSVs
import glob
files = glob.glob("data/*.csv")
df = pd.concat([pd.read_csv(f) for f in files], ignore_index=True)

# Parquet (efficient columnar format)
df = pd.read_parquet("data.parquet")

# From URL
df = pd.read_csv("https://example.com/data.csv")`},{heading:"2. Collecting Data from APIs",content:["APIs (Application Programming Interfaces) provide structured data. Many services offer free APIs."],code:`import requests
import pandas as pd

# Simple GET request
response = requests.get("https://api.example.com/data")
data = response.json()    # convert to Python dict/list

# With parameters
params = {"category": "electronics", "limit": 100}
response = requests.get("https://api.example.com/products",
                        params=params)
data = response.json()

# With API key (headers)
headers = {"Authorization": "Bearer YOUR_API_KEY"}
response = requests.get("https://api.example.com/secure",
                        headers=headers)

# Convert to DataFrame
df = pd.DataFrame(data["results"])
print(df.head())

# Handle pagination
all_data = []
page = 1
while True:
    response = requests.get(
        f"https://api.example.com/data?page={page}"
    )
    data = response.json()
    if not data["results"]:
        break
    all_data.extend(data["results"])
    page += 1

df = pd.DataFrame(all_data)`},{heading:"3. Connecting to Databases",content:["SQL databases are the most common data source in organizations."],code:`import pandas as pd
from sqlalchemy import create_engine

# Connect to PostgreSQL
engine = create_engine("postgresql://user:password@host:5432/database")

# Connect to MySQL
# engine = create_engine("mysql://user:password@host:3306/database")

# Connect to SQLite
# engine = create_engine("sqlite:///database.db")

# Read entire table
df = pd.read_sql("SELECT * FROM employees", engine)

# Read with query
df = pd.read_sql("""
    SELECT department, AVG(salary) as avg_salary
    FROM employees
    GROUP BY department
""", engine)

# Write to database
df.to_sql("processed_data", engine, if_exists="replace", index=False)`},{heading:"4. Public Datasets",content:["Free datasets for practice and projects:"],list:["Kaggle (kaggle.com/datasets) — thousands of free datasets","UCI ML Repository (archive.ics.uci.edu) — classic ML datasets","Google Dataset Search (datasetsearch.research.google.com)","Government data (data.gov, data.gov.in)","World Bank Open Data (data.worldbank.org)","Kaggle API: pip install kaggle, then kaggle datasets download","scikit-learn built-in datasets: from sklearn.datasets import load_iris","Seaborn built-in datasets: sns.load_dataset('tips')"]},{heading:"5. Data Collection Best Practices",content:["Collect data systematically and ethically:"],list:["Define what data you need before collecting — avoid collecting 'just in case'","Document the source, date, and method of collection","Check data licenses and usage rights","Store raw data unchanged — clean a copy, not the original","Automate collection with scripts (schedule with cron or task scheduler)","Validate data as it arrives — check for missing or invalid values","Keep track of data versions (use git or timestamp files)"]}]},{id:"data-exploration-tutorial",title:"Data Exploration (EDA) Tutorial",category:"Data Workflow",icon:"Search",description:"Exploratory Data Analysis — understand your data through statistics, distributions, and visual discovery.",level:"Intermediate",estimatedTime:"35 min read",sections:[{heading:"What is Exploratory Data Analysis (EDA)?",content:["EDA is the process of exploring a dataset to understand its main characteristics — distributions, patterns, relationships, anomalies, and structure. It is the detective work of data analysis: you ask questions and the data answers.","EDA is always the first step after data cleaning. You cannot build meaningful analysis without understanding your data first."]},{heading:"1. Initial Data Inspection",content:["Start by getting a high-level view of your dataset."],code:`import pandas as pd
import numpy as np

df = pd.read_csv("dataset.csv")

# Shape and size
print(f"Rows: {df.shape[0]}, Columns: {df.shape[1]}")

# First and last rows
print(df.head())
print(df.tail())

# Column names and data types
print(df.dtypes)

# Summary info
print(df.info())

# Statistical summary
print(df.describe())               # numeric columns
print(df.describe(include="all"))  # all columns

# Sample
print(df.sample(10))`},{heading:"2. Understanding Distributions",content:["Distribution shows how values are spread across a variable. This is foundational to understanding your data."],code:`import matplotlib.pyplot as plt
import seaborn as sns

# Histogram — distribution of a numeric variable
plt.figure(figsize=(10, 5))
sns.histplot(df["age"], bins=30, kde=True)
plt.title("Age Distribution")
plt.show()

# Box plot — shows median, quartiles, and outliers
sns.boxplot(x=df["salary"])
plt.title("Salary Box Plot")
plt.show()

# Box plot by category
sns.boxplot(data=df, x="department", y="salary")
plt.xticks(rotation=45)
plt.show()

# Violin plot — distribution + box plot
sns.violinplot(data=df, x="department", y="salary")
plt.show()

# Density plot
sns.kdeplot(df["salary"], shade=True)
plt.show()`},{heading:"3. Analyzing Categorical Variables",content:["Categorical variables need different exploration techniques."],code:`# Frequency counts
print(df["department"].value_counts())

# Proportions
print(df["department"].value_counts(normalize=True) * 100)

# Visual: bar chart
df["department"].value_counts().plot(kind="bar")
plt.title("Department Distribution")
plt.show()

# Visual: pie chart
df["department"].value_counts().plot(kind="pie", autopct="%1.1f%%")
plt.show()

# Cross tabulation (two categorical variables)
print(pd.crosstab(df["department"], df["gender"]))

# Stacked bar chart
pd.crosstab(df["department"], df["gender"]).plot(kind="bar", stacked=True)
plt.show()`},{heading:"4. Finding Relationships",content:["Explore how variables relate to each other."],code:`# Correlation matrix
numeric_df = df.select_dtypes(include=[np.number])
corr = numeric_df.corr()
print(corr)

# Correlation heatmap
plt.figure(figsize=(10, 8))
sns.heatmap(corr, annot=True, cmap="coolwarm", center=0)
plt.title("Correlation Matrix")
plt.show()

# Scatter plot (relationship between 2 variables)
plt.scatter(df["experience"], df["salary"])
plt.xlabel("Experience (years)")
plt.ylabel("Salary")
plt.title("Experience vs Salary")
plt.show()

# Pair plot (all pairwise relationships)
sns.pairplot(df[["age", "salary", "experience"]])
plt.show()

# Group statistics
print(df.groupby("department")["salary"].agg(["mean", "median", "std"]))`},{heading:"5. Identifying Outliers and Anomalies",content:["Outliers can be errors or genuine extreme values. EDA helps you find them."],code:`# Using IQR
Q1 = df["salary"].quantile(0.25)
Q3 = df["salary"].quantile(0.75)
IQR = Q3 - Q1
outliers = df[(df["salary"] < Q1 - 1.5*IQR) | (df["salary"] > Q3 + 1.5*IQR)]
print(f"Outliers: {len(outliers)}")
print(outliers)

# Z-score
from scipy import stats
z = np.abs(stats.zscore(df["salary"]))
outliers = df[z > 3]
print(outliers)

# Visual: box plot shows outliers as dots
sns.boxplot(x=df["salary"])
plt.show()`},{heading:"6. Handling Missing Data Exploration",content:["Understand the pattern of missing data."],code:`# Missing value counts
print(df.isnull().sum())

# Percentage missing
print((df.isnull().sum() / len(df)) * 100)

# Visual: missing value heatmap
sns.heatmap(df.isnull(), cbar=False, cmap="viridis")
plt.title("Missing Values Heatmap")
plt.show()

# Missing value bar chart
df.isnull().sum().plot(kind="bar")
plt.title("Missing Values per Column")
plt.show()`},{heading:"7. EDA Checklist",content:["Follow this process for every new dataset:"],list:["1. Check dimensions (rows, columns) and data types","2. View sample rows (head, tail, random sample)","3. Check for missing values and their patterns","4. Get summary statistics (mean, median, std, min, max)","5. Plot distributions of key numeric variables","6. Examine frequency of categorical variables","7. Look at correlations between numeric variables","8. Identify outliers and anomalies","9. Explore group differences (e.g., by category)","10. Note interesting patterns and form hypotheses","11. Document your findings"]}]},{id:"data-transformation-tutorial",title:"Data Transformation Tutorial",category:"Data Workflow",icon:"Wand2",description:"Reshape, normalize, and prepare data — melting, pivoting, binning, encoding, and feature engineering.",level:"Intermediate",estimatedTime:"35 min read",sections:[{heading:"What is Data Transformation?",content:["Data transformation converts data from one format or structure to another to make it suitable for analysis. This includes reshaping (wide to long, long to wide), normalizing, encoding, creating new features, and aggregating."]},{heading:"1. Reshaping Data — Melt and Pivot",content:["Melt converts wide-format data to long format. Pivot does the reverse."],code:`import pandas as pd

# Wide format
df_wide = pd.DataFrame({
    "name": ["Amit", "Priya", "Raj"],
    "Jan": [100, 200, 150],
    "Feb": [120, 210, 160],
    "Mar": [130, 220, 170]
})
print(df_wide)
#    name  Jan  Feb  Mar
# 0  Amit  100  120  130
# 1 Priya  200  210  220
# 2   Raj  150  160  170

# Melt to long format
df_long = df_wide.melt(id_vars="name",
                       var_name="month",
                       value_name="sales")
print(df_long)
#     name month  sales
# 0   Amit   Jan    100
# 1   Amit   Feb    120
# 2   Amit   Mar    130
# ...

# Pivot back to wide
df_wide_again = df_long.pivot(index="name",
                              columns="month",
                              values="sales").reset_index()`},{heading:"2. Binning and Discretization",content:["Convert continuous numeric values into discrete bins (categories)."],code:`# Equal-width bins
df["age_group"] = pd.cut(df["age"], bins=5)

# Custom bins
df["age_category"] = pd.cut(df["age"],
    bins=[0, 18, 35, 50, 100],
    labels=["Youth", "Young Adult", "Adult", "Senior"])

# Equal-frequency bins (quantiles)
df["salary_quartile"] = pd.qcut(df["salary"], q=4,
    labels=["Q1", "Q2", "Q3", "Q4"])

# View bin counts
print(df["age_category"].value_counts())`},{heading:"3. Encoding Categorical Variables",content:["Machine learning models need numbers, not text. Encoding converts categories to numbers."],code:`# Label encoding (ordinal)
df["grade_encoded"] = df["grade"].map({
    "F": 0, "D": 1, "C": 2, "B": 3, "A": 4
})

# One-hot encoding (nominal)
df_encoded = pd.get_dummies(df, columns=["department"],
                            prefix="dept")
# Creates: dept_Sales, dept_Engineering, dept_Marketing

# Using sklearn
# from sklearn.preprocessing import LabelEncoder, OneHotEncoder
# le = LabelEncoder()
# df["dept_encoded"] = le.fit_transform(df["department"])

# Frequency encoding
freq = df["city"].value_counts(normalize=True)
df["city_freq"] = df["city"].map(freq)

# Target encoding (encode with mean of target variable)
city_mean = df.groupby("city")["salary"].mean()
df["city_mean_salary"] = df["city"].map(city_mean)`},{heading:"4. Feature Engineering",content:["Create new features from existing data to improve analysis and modeling."],code:`# Date features
df["date"] = pd.to_datetime(df["date"])
df["year"] = df["date"].dt.year
df["month"] = df["date"].dt.month
df["day_of_week"] = df["date"].dt.day_name()
df["is_weekend"] = df["date"].dt.dayofweek >= 5
df["quarter"] = df["date"].dt.quarter

# Text features
df["name_length"] = df["name"].str.len()
df["word_count"] = df["description"].str.split().str.len()
df["has_email"] = df["email"].str.contains("@", na=False)

# Mathematical features
df["salary_per_year"] = df["salary"] / df["experience"]
df["log_salary"] = np.log1p(df["salary"])
df["salary_squared"] = df["salary"] ** 2

# Interaction features
df["age_experience_ratio"] = df["age"] / df["experience"]
df["dept_city"] = df["department"] + "_" + df["city"]`},{heading:"5. Normalization and Scaling",content:["Scale features to comparable ranges."],code:`# Min-Max scaling (0 to 1)
df["salary_scaled"] = (df["salary"] - df["salary"].min()) / \\
                      (df["salary"].max() - df["salary"].min())

# Standard scaling (mean=0, std=1)
df["salary_standardized"] = (df["salary"] - df["salary"].mean()) / \\
                            df["salary"].std()

# Robust scaling (using median and IQR — robust to outliers)
median = df["salary"].median()
IQR = df["salary"].quantile(0.75) - df["salary"].quantile(0.25)
df["salary_robust"] = (df["salary"] - median) / IQR

# Log transformation (for skewed data)
df["salary_log"] = np.log1p(df["salary"])

# Using scikit-learn
# from sklearn.preprocessing import MinMaxScaler, StandardScaler, RobustScaler
# scaler = StandardScaler()
# df[["salary_scaled"]] = scaler.fit_transform(df[["salary"]])`},{heading:"6. Aggregation and Roll-up",content:["Aggregate data at different levels of granularity."],code:`# Daily to monthly
df["date"] = pd.to_datetime(df["date"])
df["year_month"] = df["date"].dt.to_period("M")

monthly = df.groupby("year_month")["sales"].sum()
print(monthly)

# Multiple aggregations
summary = df.groupby(["department", "year_month"]).agg({
    "sales": ["sum", "mean", "count"],
    "profit": "sum"
})

# Pivot table for cross-tabulation
pivot = df.pivot_table(
    values="sales",
    index="department",
    columns="month",
    aggfunc="sum",
    fill_value=0
)`}]},{id:"data-manipulation-tutorial",title:"Data Manipulation Tutorial",category:"Data Workflow",icon:"Wrench",description:"Filter, sort, merge, and manipulate data with Pandas — the everyday toolkit of a Data Analyst.",level:"Intermediate",estimatedTime:"35 min read",sections:[{heading:"What is Data Manipulation?",content:["Data manipulation is the process of changing or restructuring data to make it more organized and easier to analyze. This includes filtering, sorting, merging, joining, appending, and updating data. It is the bread and butter of a Data Analyst's daily work."]},{heading:"1. Filtering Data",content:["Select rows based on conditions."],code:`import pandas as pd

# Single condition
high_salary = df[df["salary"] > 50000]

# Multiple conditions (AND / OR)
result = df[(df["salary"] > 50000) & (df["age"] < 30)]
result = df[(df["city"] == "Mumbai") | (df["city"] == "Delhi")]

# Using isin
result = df[df["city"].isin(["Mumbai", "Delhi", "Pune"])]

# String conditions
result = df[df["name"].str.contains("Am", case=False, na=False)]
result = df[df["email"].str.endswith("@gmail.com", na=False)]

# Between
result = df[df["age"].between(25, 40)]

# Negation
result = df[~df["city"].isin(["Mumbai"])]  # NOT Mumbai

# Query method (readable syntax)
result = df.query("salary > 50000 and age < 30")
result = df.query("city in ['Mumbai', 'Delhi']")

# Filter by null/not-null
result = df[df["email"].notna()]
result = df[df["email"].isna()]`},{heading:"2. Sorting Data",content:["Arrange rows by one or more columns."],code:`# Sort by one column
df_sorted = df.sort_values("salary")
df_sorted = df.sort_values("salary", ascending=False)

# Sort by multiple columns
df_sorted = df.sort_values(["department", "salary"],
                           ascending=[True, False])

# Sort by index
df_sorted = df.sort_index()

# Sort by absolute value
df_sorted = df.reindex(df["salary"].abs().sort_values(ascending=False).index)

# Sort and reset index
df_sorted = df.sort_values("salary", ascending=False).reset_index(drop=True)

# Top N
top_10 = df.nlargest(10, "salary")
bottom_10 = df.nsmallest(10, "salary")`},{heading:"3. Merging and Joining",content:["Combine multiple DataFrames — like SQL JOINs."],code:`# Inner join (only matching rows)
merged = pd.merge(df1, df2, on="id", how="inner")

# Left join (all from left, matching from right)
merged = pd.merge(df1, df2, on="id", how="left")

# Right join
merged = pd.merge(df1, df2, on="id", how="right")

# Full outer join
merged = pd.merge(df1, df2, on="id", how="outer")

# Different column names
merged = pd.merge(df1, df2,
                 left_on="employee_id",
                 right_on="emp_id",
                 how="left")

# Multiple keys
merged = pd.merge(df1, df2, on=["dept_id", "city"], how="inner")

# Suffixes for overlapping columns
merged = pd.merge(df1, df2, on="id", suffixes=("_left", "_right"))

# Join on index
merged = df1.join(df2, how="left")`},{heading:"4. Concatenating Data",content:["Stack DataFrames vertically or horizontally."],code:`# Stack vertically (add rows)
combined = pd.concat([df1, df2, df3], ignore_index=True)

# Stack horizontally (add columns)
combined = pd.concat([df1, df2], axis=1)

# Append (deprecated, use concat)
combined = pd.concat([df1, df2])

# Combine with different columns
# df1 has columns A, B; df2 has columns B, C
combined = pd.concat([df1, df2], ignore_index=True)
# Missing columns filled with NaN`},{heading:"5. Grouping and Aggregating",content:["Split-apply-combine: group data and compute summaries."],code:`# Group by one column
df.groupby("department")["salary"].mean()

# Group by multiple columns
df.groupby(["department", "city"])["salary"].mean()

# Multiple aggregations
df.groupby("department")["salary"].agg(
    ["mean", "median", "std", "min", "max", "count"]
)

# Named aggregations
result = df.groupby("department").agg(
    avg_salary=("salary", "mean"),
    max_salary=("salary", "max"),
    employee_count=("name", "count"),
    avg_age=("age", "mean")
)

# Custom aggregation
df.groupby("department")["salary"].agg(
    salary_range=lambda x: x.max() - x.min()
)

# Transform (return same shape as input)
df["dept_avg_salary"] = df.groupby("department")["salary"].transform("mean")

# Filter groups
large_depts = df.groupby("department").filter(
    lambda x: len(x) > 10
)

# Apply custom function per group
def top_earner(group):
    return group.nlargest(1, "salary")

top_earners = df.groupby("department").apply(top_earner)`},{heading:"6. Window Functions",content:["Perform calculations across rows — running totals, moving averages, rankings."],code:`# Running total
df["cumulative_sales"] = df["sales"].cumsum()

# Running max/min
df["running_max"] = df["sales"].cummax()
df["running_min"] = df["sales"].cummin()

# Moving average (window of 3)
df["moving_avg"] = df["sales"].rolling(window=3).mean()

# Expanding average (all previous rows)
df["expanding_avg"] = df["sales"].expanding().mean()

# Rank
df["rank"] = df["salary"].rank(ascending=False)
df["dense_rank"] = df["salary"].rank(method="dense", ascending=False)

# Rank within group
df["dept_rank"] = df.groupby("department")["salary"].rank(ascending=False)

# Shift (lag/lead)
df["prev_salary"] = df["salary"].shift(1)
df["next_salary"] = df["salary"].shift(-1)

# Percent change
df["salary_change_pct"] = df["salary"].pct_change() * 100`},{heading:"7. String Manipulation",content:["Clean and transform text data using Pandas string methods."],code:`# Split column into multiple
df[["first_name", "last_name"]] = df["full_name"].str.split(" ", n=1,
    expand=True)

# Extract with regex
df["phone_area"] = df["phone"].str.extract(r"(\\d{3})")

# Replace with regex
df["text"] = df["text"].str.replace(r"\\s+", " ", regex=True)

# String length
df["name_length"] = df["name"].str.len()

# Contains
df["is_gmail"] = df["email"].str.contains("gmail", case=False)

# Startswith / endswith
df["is_com"] = df["email"].str.endswith(".com")

# Pad strings
df["code"] = df["code"].str.zfill(5)  # pad with zeros: "42" → "00042"`},{heading:"8. Pivot Tables and Crosstabs",content:["Reshape data for reporting and analysis."],code:`# Pivot table
pivot = pd.pivot_table(df,
    values="sales",
    index="department",
    columns="month",
    aggfunc="sum",
    fill_value=0,
    margins=True      # add row/column totals
)

# Crosstab (count of combinations)
ct = pd.crosstab(df["department"], df["city"],
                 margins=True)

# Crosstab with values
ct = pd.crosstab(df["department"], df["city"],
                 values=df["salary"],
                 aggfunc="mean")`}]},{id:"charting-pivot-table-tutorial",title:"Charting & Pivot Tables Tutorial",category:"Reporting",icon:"ChartColumn",description:"Master Excel and Pandas pivot tables and create professional charts for reporting.",level:"Intermediate",estimatedTime:"35 min read",sections:[{heading:"Pivot Tables in Excel — Deep Dive",content:["Pivot tables are the most powerful tool in Excel for data analysis. They let you summarize thousands of rows into a compact report with just drag-and-drop."]},{heading:"1. Creating a Pivot Table (Step by Step)",content:["Follow these steps to create your first pivot table:"],list:["1. Click any cell inside your data (it should have headers)","2. Go to Insert > PivotTable","3. Excel auto-detects the data range — verify it's correct","4. Choose: New Worksheet (recommended) or Existing Worksheet","5. Click OK — the PivotTable Fields pane appears on the right","6. Drag fields to the four areas:","   FILTERS: filter the entire pivot table (e.g., Year)","   ROWS: group data vertically (e.g., Department)","   COLUMNS: split data horizontally (e.g., Month)","   VALUES: the metric to aggregate (e.g., Sum of Sales)","7. Right-click values > Summarize Values By > choose Sum/Average/Count/Max/Min"]},{heading:"2. Pivot Table Aggregations",content:["Pivot tables can aggregate data in many ways:"],table:{headers:["Function","Description","Use Case"],rows:[["Sum","Add values","Total sales by region"],["Count","Number of records","Number of orders per customer"],["Average","Mean value","Average order value per month"],["Max","Largest value","Highest sale per region"],["Min","Smallest value","Lowest price per category"],["Product","Multiply values","Rarely used"],["Count Numbers","Count numeric cells","Count of transactions"],["StdDev","Standard deviation","Variability of sales per region"],["Var","Variance","Spread of data per group"]]}},{heading:"3. Grouping in Pivot Tables",content:["Group data into categories for better analysis."],list:["Group by date: right-click date field > Group > choose Years, Quarters, Months, Days","Group by number range: right-click numeric field > Group > set start, end, and interval (e.g., 0-100 in bins of 10)","Manual grouping: select items > right-click > Group > rename the group","Ungroup: right-click grouped field > Ungroup"]},{heading:"4. Calculated Fields and Items",content:["Add custom calculations to pivot tables."],list:["Calculated Field: a new field computed from existing fields (PivotTable Analyze > Fields, Items & Sets > Calculated Field)","  Example: Profit = Revenue - Cost","Calculated Item: a new item within a field computed from other items","  Example: North America = North + South","Note: Calculated fields always use Sum regardless of the display aggregation"]},{heading:"5. Slicers and Timelines",content:["Slicers are visual filters that make pivot tables interactive."],list:["Add slicer: select pivot table > PivotTable Analyze > Insert Slicer > choose field","Slicers show buttons for each value — click to filter","Connect multiple pivot tables to one slicer: Slicer > Report Connections > check pivot tables","Timeline: for date fields, use Insert > Timeline for a date slider","Format slicers: right-click > Size and Properties for customization"]},{heading:"6. Pivot Charts in Excel",content:["Pivot charts visualize pivot table data and stay linked to the pivot table."],list:["Create: select pivot table > Insert > PivotChart > choose type","The chart updates automatically when you change the pivot table","Use Slicers and Timelines to filter both table and chart together","Recommended chart types:","  — Bar/Column: compare categories","  — Line: trends over time","  — Pie: show composition (max 5-7 slices)","  — Combo: bar + line (e.g., revenue as bars, growth rate as line)"]},{heading:"7. Pivot Tables in Pandas",content:["Pandas has its own pivot_table function that works like Excel pivot tables."],code:`import pandas as pd

# Sample data
df = pd.DataFrame({
    "department": ["Sales", "Sales", "Engineering", "Engineering",
                   "Marketing", "Marketing"],
    "month": ["Jan", "Feb", "Jan", "Feb", "Jan", "Feb"],
    "sales": [10000, 12000, 15000, 16000, 8000, 9000],
    "profit": [2000, 2500, 4000, 4200, 1500, 1800]
})

# Basic pivot table
pivot = pd.pivot_table(df, values="sales",
                       index="department",
                       columns="month",
                       aggfunc="sum")
print(pivot)
# month          Feb    Jan
# department
# Engineering  16000  15000
# Marketing     9000   8000
# Sales        12000  10000

# Multiple aggregations
pivot = pd.pivot_table(df,
    values=["sales", "profit"],
    index="department",
    aggfunc={"sales": "sum", "profit": "mean"}
)

# With margins (totals)
pivot = pd.pivot_table(df, values="sales",
                       index="department",
                       columns="month",
                       aggfunc="sum",
                       margins=True,
                       margins_name="Total")

# Fill NaN with 0
pivot = pd.pivot_table(df, values="sales",
                       index="department",
                       columns="month",
                       aggfunc="sum",
                       fill_value=0)`},{heading:"8. Creating Professional Charts",content:["Whether in Excel or Python, good charts follow design principles."],list:["Title: clear and descriptive — tell what the chart shows","Axis labels: always label what the axes represent (with units)","Color: use a consistent, meaningful palette — not random colors","Legend: place it where it doesn't obscure data","Data labels: show values on key data points","Gridlines: subtle, not overwhelming","Font size: readable at the size the chart will be displayed","Aspect ratio: avoid distortion — typically wider than tall (16:9 or 4:3)"]},{heading:"9. Chart Types in Depth",content:["Choose the right chart for your data:"],table:{headers:["Chart Type","When to Use","When NOT to Use"],rows:[["Column/Bar","Compare categories","Many categories (>15)"],["Line","Show trends over time","Non-continuous data"],["Pie","Show parts of a whole (5 max)","More than 7 categories"],["Scatter","Show relationship between 2 variables","Categorical data"],["Histogram","Show distribution of one variable","Categorical data"],["Box Plot","Show distribution + outliers","Single category"],["Heatmap","Show 2D data density","Single variable"],["Waterfall","Show cumulative effect","Non-financial data"],["Funnel","Show stages in a process","Non-sequential data"],["Combo","Show 2 related metrics with different scales","Unrelated metrics"]]}}]},{id:"deploy-wordpress-blogger",title:"Deploy This Website on WordPress & Google Blogger",category:"Deployment",icon:"Upload",description:"A complete, step-by-step guide to uploading and publishing this website on WordPress and Google Blogger — from beginner setup to advanced customization.",level:"Beginner",estimatedTime:"50 min read",sections:[{heading:"Overview — What You Will Learn",content:["This tutorial walks you through the full process of taking a React-based website (like this one) and publishing it on two popular platforms: WordPress and Google Blogger. We cover everything from exporting your build files to advanced theme customization and SEO optimization.","You do not need prior experience with either platform. By the end, you will have your site live and accessible to the world."]},{heading:"Prerequisites",content:["Before starting, make sure you have:"],list:["Your website project files (the built version — we will cover how to build)","A WordPress hosting account (WordPress.com or self-hosted with a hosting provider)","A Google account (for Blogger)","Basic understanding of file management (copying, pasting, uploading files)","A text editor (VS Code, Notepad++, or even Notepad) to make small edits"]},{heading:"Part 1: Building Your React Website for Deployment",content:["Before uploading anywhere, you need to create a production build of your React app. This generates static HTML, CSS, and JavaScript files that can be served by any platform."],list:["1. Open your project folder in a terminal","2. Run: npm run build","3. After the build completes, a new folder called 'dist' (or 'build') is created","4. This folder contains all the files you need to upload — index.html, assets folder, CSS, and JS files","5. Open the dist/index.html file in your browser to verify the site works locally"]},{heading:"Important: Understanding How React Builds Work",content:["When you build a React app, it creates static files. However, the file paths in index.html may be absolute (starting with /). For WordPress and Blogger, you need relative paths so the files load correctly when placed in a subdirectory or custom location."],code:`// In vite.config.ts, set the base to './' for relative paths
export default defineConfig({
  base: './',  // This makes all asset paths relative
  plugins: [react()],
  // ... rest of config
})`},{heading:"Part 2: Deploying on WordPress — Beginner Level",content:["WordPress is the world's most popular content management system. There are two ways to deploy your site on WordPress: as a custom page/post, or as a full custom theme."]},{heading:"Method A: Upload as a Custom HTML Block (Easiest)",content:["This method works best if you want to add your React site as a page within an existing WordPress site."],list:["1. Log in to your WordPress admin dashboard (usually yoursite.com/wp-admin)","2. Go to Pages > Add New (or Posts > Add New)","3. Click the + button to add a block and search for 'Custom HTML'","4. Open your built index.html file in a text editor","5. Copy the entire content of index.html and paste it into the Custom HTML block","6. You will also need to upload your CSS and JS files — go to Media > Add New and upload all files from the dist/assets folder","7. Get the URLs of the uploaded CSS and JS files and update the <link> and <script> tags in your HTML to point to those URLs","8. Click Publish to make the page live","9. Visit the page to verify it displays correctly"]},{heading:"Method A: Updating Asset Paths for WordPress",content:["When you upload assets to WordPress Media, they get URLs like https://yoursite.com/wp-content/uploads/2026/09/assets/index-abc123.js. You need to update your HTML to reference these URLs."],code:`<!-- Original from build -->
<link rel="stylesheet" href="/assets/index-abc123.css">
<script src="/assets/index-abc123.js"><\/script>

<!-- Updated for WordPress Media -->
<link rel="stylesheet" href="https://yoursite.com/wp-content/uploads/2026/09/index-abc123.css">
<script src="https://yoursite.com/wp-content/uploads/2026/09/index-abc123.js"><\/script>`},{heading:"Method B: Upload via File Manager / FTP (Intermediate)",content:["This method gives you more control and is better for full-page React apps."],list:["1. Access your hosting control panel (cPanel, Plesk, etc.)","2. Open the File Manager","3. Navigate to public_html (or the directory where your WordPress is installed)","4. Create a new folder, e.g., 'app' (your site will be at yoursite.com/app/)","5. Upload ALL files from your dist folder into this 'app' directory","6. Make sure index.html is in the root of the 'app' folder","7. Visit yoursite.com/app/ — your React site should load","8. If you get a blank page, check browser console for 404 errors on assets"]},{heading:"Method B: Using FTP (File Transfer Protocol)",content:["If your hosting does not have a File Manager, use an FTP client like FileZilla."],list:["1. Download and install FileZilla (filezilla-project.org)","2. Get your FTP credentials from your hosting provider (host, username, password, port)","3. Open FileZilla and enter your credentials in the Quickconnect bar","4. On the right side (Remote Site), navigate to public_html","5. Create a new folder called 'app'","6. On the left side (Local Site), navigate to your dist folder","7. Select all files in the dist folder and drag them to the 'app' folder on the right","8. Wait for all files to upload (this may take a few minutes)","9. Visit yoursite.com/app/ to verify"]},{heading:"Method C: Create a Custom WordPress Page Template (Advanced)",content:["This method integrates your React app seamlessly into WordPress as a page template. It is the most professional approach."],code:`<!-- In your WordPress theme folder, create a file:
     wp-content/themes/yourtheme/page-react-app.php -->

<?php
/**
 * Template Name: React App
 */

// Get the header
get_header();
?>

<!-- Your React app container -->
<div id="root"></div>

<!-- Load React assets -->
<link rel="stylesheet"
      href="<?php echo get_stylesheet_directory_uri(); ?>/react-app/assets/index.css">
<script type="module"
        src="<?php echo get_stylesheet_directory_uri(); ?>/react-app/assets/index.js">
<\/script>

<?php
// Get the footer
get_footer();
?>`},{heading:"Method C: Steps",content:["Follow these steps to set up the custom page template:"],list:["1. Upload your dist/assets files to wp-content/themes/yourtheme/react-app/assets/","2. Create the page-react-app.php template file shown above in your theme folder","3. In WordPress admin, go to Pages > Add New","4. In the Page Attributes panel, set Template to 'React App'","5. Publish the page","6. Visit the page — your React app loads within the WordPress theme structure"]},{heading:"WordPress: Handling React Router (Advanced)",content:["If your React app uses React Router (like this site does), WordPress may return 404 for sub-routes. You need a rewrite rule so all paths go to index.html."],code:`<!-- Add to your .htaccess file in the app subdirectory -->

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /app/
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /app/index.html [L]
</IfModule>`},{heading:"WordPress SEO Optimization (Advanced)",content:["To make your React site discoverable by search engines within WordPress:"],list:["Install the Yoast SEO or Rank Math plugin","Set a focus keyword for each page that embeds your React app","Add an XML sitemap (Yoast generates this automatically)","Submit your sitemap to Google Search Console","Add Open Graph tags in your page template for social sharing","Use the 'Custom HTML' block to add schema markup (JSON-LD) for structured data","Set canonical URLs to avoid duplicate content issues"]},{heading:"Part 3: Deploying on Google Blogger — Beginner Level",content:["Google Blogger (blogspot.com) is a free blogging platform. While it is not designed for React apps, you can still embed your site using HTML/JavaScript gadgets and custom themes."]},{heading:"Method A: Embed React App in a Blogger Post or Page (Easiest)",content:["This method works if you want your React site to appear as a blog post or static page."],list:["1. Go to blogger.com and sign in with your Google account","2. Click 'Create New Blog' or select an existing blog","3. Click 'New Post' or create a new Page","4. Switch to HTML view (click the pencil icon > HTML view)","5. Host your CSS and JS files on a CDN (GitHub Pages, jsDelivr, or Google Drive)","6. Paste your index.html content, with updated asset URLs pointing to the CDN","7. Click Publish","8. View your blog post to verify the React app loads"]},{heading:"Method A: Hosting Assets on GitHub Pages for Blogger",content:["GitHub Pages is a free way to host your static assets. Here is how to set it up."],list:["1. Create a new repository on GitHub (e.g., my-app-assets)","2. Upload all files from your dist folder to this repository","3. Go to Settings > Pages > Source > Deploy from branch > main","4. Wait a few minutes — GitHub will publish your files","5. Your files will be available at https://yourusername.github.io/my-app-assets/","6. Use this URL as the base for your CSS and JS links in Blogger"],code:`<!-- In Blogger HTML view, paste this -->
<div id="root"></div>
<link rel="stylesheet"
      href="https://yourusername.github.io/my-app-assets/assets/index-abc123.css">
<script type="module"
        src="https://yourusername.github.io/my-app-assets/assets/index-abc123.js">
<\/script>`},{heading:"Method A: Using jsDelivr CDN as an Alternative",content:["jsDelivr is a free CDN that can serve files directly from GitHub. This is often faster than GitHub Pages."],code:`<!-- jsDelivr URL format:
     https://cdn.jsdelivr.net/gh/USERNAME/REPO@BRANCH/FILE_PATH -->

<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/yourusername/my-app-assets@main/assets/index-abc123.css">
<script type="module"
        src="https://cdn.jsdelivr.net/gh/yourusername/my-app-assets@main/assets/index-abc123.js">
<\/script>`},{heading:"Method B: Use Blogger Custom Theme (Intermediate)",content:["You can replace the entire Blogger theme with your React app. This gives a seamless experience."],list:["1. In Blogger, go to Theme > Edit HTML","2. Backup your current theme first (Theme > Backup > Download)","3. Delete all existing HTML in the editor","4. Paste your modified index.html content with CDN-hosted assets","5. Add the Blogger-required XML namespace to the <html> tag","6. Click Save","7. Visit your blog URL — your React app loads as the full site"]},{heading:"Method B: Blogger Theme HTML Template",content:["Blogger requires specific XML namespaces in the theme. Here is a minimal template that loads your React app."],code:`<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:version='2' class='v2'
      xmlns='http://www.w3.org/1999/xhtml'
      xmlns:b='http://www.google.com/2005/gml/b'
      xmlns:data='http://www.google.com/2005/gml/data'
      xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>My Website</title>
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/yourusername/my-app-assets@main/assets/index.css">
  <b:skin><![CDATA[
    /* Blogger requires this section, can be empty */
  ]]></b:skin>
</head>
<body>
  <div id="root"></div>
  <b:section id='main' showaddelement='no' />
  <script type="module"
          src="https://cdn.jsdelivr.net/gh/yourusername/my-app-assets@main/assets/index.js">
  <\/script>
</body>
</html>`},{heading:"Blogger: Handling React Router Routes",content:["Blogger does not support server-side rewrite rules like WordPress. For React Router, use HashRouter instead of BrowserRouter so all routing happens client-side via URL fragments (#)."],code:`// In your React App.tsx, change BrowserRouter to HashRouter
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/tutorials/:id" element={<TutorialDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}`},{heading:"Blogger: Custom Domain Setup (Advanced)",content:["You can use your own domain name with Blogger instead of the default blogspot.com URL."],list:["1. Purchase a domain from a registrar (Namecheap, GoDaddy, Google Domains)","2. In Blogger, go to Settings > Custom Domain > Enter your domain","3. Blogger will show you DNS records to add (CNAME records)","4. Log in to your domain registrar's DNS settings","5. Add the CNAME records as specified by Blogger","6. Wait for DNS to propagate (can take up to 48 hours, usually faster)","7. Enable HTTPS in Blogger Settings > HTTPS > Enable HTTPS","8. Set up redirects: Settings > HTTPS > Always use HTTPS"]},{heading:"Part 4: Advanced Deployment — Professional Level",content:["For a truly professional deployment, consider these advanced techniques that work with both WordPress and Blogger."]},{heading:"Performance Optimization",content:["Make your site load faster with these optimizations:"],list:["Enable Gzip/Brotli compression on your hosting server (WordPress: use a caching plugin like W3 Total Cache or WP Rocket)","Minify CSS and JavaScript — Vite does this automatically during build","Use lazy loading for React components: React.lazy() and Suspense","Optimize images — compress and use WebP format, use the Pexels CDN for stock photos","Set cache headers for static assets so browsers cache them","Use a CDN like Cloudflare in front of your WordPress or Blogger site","Preload critical resources with <link rel='preload'> tags"],code:`<!-- Preload critical assets in your HTML head -->
<link rel="preload"
      href="https://cdn.jsdelivr.net/gh/yourusername/my-app-assets@main/assets/index.css"
      as="style">
<link rel="preload"
      href="https://cdn.jsdelivr.net/gh/yourusername/my-app-assets@main/assets/index.js"
      as="script">`},{heading:"Analytics and Tracking (Advanced)",content:["Track visitor behavior on your deployed site:"],list:["Google Analytics 4: Create a property at analytics.google.com, add the tracking code to your index.html or WordPress/Blogger theme","Google Search Console: Verify your domain ownership and submit your sitemap","Hotjar or Microsoft Clarity: for heatmaps and session recordings","For WordPress: use the MonsterInsights plugin for easy GA4 integration","For Blogger: paste the GA4 tracking code directly in Theme > Edit HTML, before </head>"],code:`<!-- Google Analytics 4 tracking code -->
<!-- Add before </head> in your HTML -->
<script async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX">
<\/script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
<\/script>`},{heading:"Deployment Checklist",content:["Before you go live, verify each item:"],table:{headers:["Check","Why It Matters","Status"],rows:[["All asset paths are correct URLs","Broken paths = blank page","Verify"],["Site loads on mobile devices","60%+ of traffic is mobile","Verify"],["React Router works (test all routes)","Broken routes = bad UX","Verify"],["HTTPS is enabled","Security and SEO","Verify"],["Custom domain is configured","Professional branding","Verify"],["SEO meta tags are set","Search engine visibility","Verify"],["Analytics tracking is installed","Measure visitor behavior","Verify"],["Page load time < 3 seconds","User experience and SEO","Verify"],["Favicon is set","Brand recognition in browser tabs","Verify"],["404 page works gracefully","Prevent user frustration","Verify"]]}},{heading:"Troubleshooting Common Issues",content:["If something goes wrong, check these common problems:"],table:{headers:["Problem","Cause","Solution"],rows:[["Blank white page","Asset paths are wrong","Check browser console for 404 errors, fix paths to absolute URLs"],["CSS not loading","Relative path used on different domain","Use full URLs (https://...) for all CSS/JS links"],["Router 404 on refresh","Server not redirecting to index.html","WordPress: add .htaccess rewrite. Blogger: use HashRouter"],["Assets too large","No code splitting","Configure Vite manualChunks, use React.lazy()"],["CORS errors","CDN blocking cross-origin requests","Use jsDelivr (supports CORS) or same-origin hosting"],["Blogger theme error","Missing required XML tags","Ensure b:version, b:skin, and b:section tags are present"],["WordPress custom template not showing","Theme not activated","Activate the theme and clear cache"]]}}]},{id:"advanced-python",title:"Advanced Python — Professional Techniques",category:"Programming",icon:"Code2",description:"Master advanced Python concepts used by professional developers — decorators, generators, metaclasses, async, context managers, and design patterns.",level:"Advanced",estimatedTime:"60 min read",sections:[{heading:"1. Decorators — Modifying Function Behavior",content:["Decorators are functions that wrap other functions to add behavior without modifying the original function. They are heavily used in web frameworks (Flask, Django), logging, authentication, and more."],code:`# Basic decorator
import functools

def log_execution(func):
    @functools.wraps(func)  # preserves original function metadata
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args={args}, kwargs={kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@log_execution
def add(a, b):
    return a + b

add(3, 5)
# Calling add with args=(3, 5), kwargs={}
# add returned 8

# Decorator with arguments
def repeat(times):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            result = None
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello, {name}!")

greet("Amit")  # prints 3 times

# Class-based decorator
class CountCalls:
    def __init__(self, func):
        functools.update_wrapper(self, func)
        self.func = func
        self.count = 0

    def __call__(self, *args, **kwargs):
        self.count += 1
        print(f"Call {self.count} of {self.func.__name__}")
        return self.func(*args, **kwargs)

@CountCalls
def say_hello():
    print("Hello!")

say_hello()  # Call 1
say_hello()  # Call 2
say_hello()  # Call 3`},{heading:"2. Generators — Lazy Evaluation",content:["Generators produce values one at a time, on demand, using the yield keyword. They are memory-efficient for large datasets because they don't store all values in memory at once."],code:`# Generator function
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num, end=" ")
# 0 1 1 2 3 5 8 13 21 34

# Generator expression (like list comprehension but lazy)
squares_gen = (x**2 for x in range(1000000))
print(next(squares_gen))  # 0
print(next(squares_gen))  # 1
# Does NOT create a list of 1M items in memory

# Reading large files with generators
def read_large_file(filepath):
    with open(filepath, "r") as f:
        for line in f:
            yield line.strip()

# Process line by line — constant memory
for line in read_large_file("big_data.csv"):
    process(line)

# Infinite generator
def counter(start=0):
    count = start
    while True:
        yield count
        count += 1

c = counter(10)
print(next(c))  # 10
print(next(c))  # 11
print(next(c))  # 12

# Pipeline of generators (data processing)
def numbers():
    for i in range(100):
        yield i

def evens(gen):
    for n in gen:
        if n % 2 == 0:
            yield n

def squared(gen):
    for n in gen:
        yield n ** 2

# Chain generators — each processes one item at a time
pipeline = squared(evens(numbers()))
for val in pipeline:
    if val > 100:
        break
    print(val)`},{heading:"3. Context Managers — Resource Management",content:["Context managers ensure resources are properly cleaned up using the with statement. They are essential for file handling, database connections, and locks."],code:`# Using the contextlib decorator
from contextlib import contextmanager
import time

@contextmanager
def timer(label):
    start = time.time()
    try:
        yield  # code inside 'with' runs here
    finally:
        elapsed = time.time() - start
        print(f"{label}: {elapsed:.4f}s")

with timer("Data processing"):
    # Simulate work
    total = sum(x**2 for x in range(1000000))
    print(f"Result: {total}")

# Custom context manager class
class DatabaseConnection:
    def __init__(self, connection_string):
        self.conn_str = connection_string
        self.conn = None

    def __enter__(self):
        print("Opening database connection...")
        self.conn = f"Connection({self.conn_str})"
        return self.conn

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Closing database connection...")
        self.conn = None
        if exc_type:
            print(f"Error occurred: {exc_val}")
        return False  # don't suppress exceptions

with DatabaseConnection("postgresql://localhost/mydb") as conn:
    print(f"Using {conn}")
    # Do database operations`},{heading:"4. Async / Await — Asynchronous Programming",content:["Async programming allows concurrent operations without threads. It is essential for I/O-bound tasks like API calls, web scraping, and database operations."],code:`import asyncio
import aiohttp

# Basic async function
async def fetch_data(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()

# Run multiple requests concurrently
async def fetch_all(urls):
    tasks = [fetch_data(url) for url in urls]
    results = await asyncio.gather(*tasks)
    return results

urls = [
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3",
]

# Run the async event loop
results = asyncio.run(fetch_all(urls))
# All 3 requests run concurrently — much faster than sequential

# Async with rate limiting
async def fetch_with_delay(url, delay=1):
    await asyncio.sleep(delay)
    return await fetch_data(url)

# Producer-consumer pattern
async def producer(queue, items):
    for item in items:
        await queue.put(item)
        print(f"Produced: {item}")
    await queue.put(None)  # sentinel

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print(f"Consumed: {item}")
        queue.task_done()

async def main():
    queue = asyncio.Queue(maxsize=5)
    await asyncio.gather(
        producer(queue, range(10)),
        consumer(queue)
    )

asyncio.run(main())`},{heading:"5. Metaclasses — Customizing Class Creation",content:["Metaclasses are classes that create classes. They allow you to customize how classes are defined — useful for frameworks, ORM patterns, and plugin systems."],code:`# Metaclass that enforces a naming convention
class CamelCaseMeta(type):
    def __new__(mcs, name, bases, namespace):
        # Check that all method names are lowercase
        for attr in namespace:
            if callable(namespace[attr]) and not attr.startswith('__'):
                if attr != attr.lower():
                    raise ValueError(f"Method '{attr}' must be lowercase")
        return super().__new__(mcs, name, bases, namespace)

class MyAPI(metaclass=CamelCaseMeta):
    def get_data(self):     # OK
        return "data"

    # def GetData(self):    # ValueError: Method 'GetData' must be lowercase

# Metaclass for automatic registration (plugin pattern)
class PluginMeta(type):
    registry = {}

    def __new__(mcs, name, bases, namespace):
        cls = super().__new__(mcs, name, bases, namespace)
        if bases:  # skip base class
            PluginMeta.registry[name.lower()] = cls
        return cls

class Plugin(metaclass=PluginMeta):
    pass

class CSVLoader(Plugin):
    def load(self):
        return "CSV data"

class JSONLoader(Plugin):
    def load(self):
        return "JSON data"

print(PluginMeta.registry)
# {'csvloader': <class CSVLoader>, 'jsonloader': <class JSONLoader>}

# Use the registry
loader = PluginMeta.registry['csvloader']()
print(loader.load())  # CSV data`},{heading:"6. Type Hinting and Data Validation",content:["Modern Python uses type hints extensively. Combined with Pydantic, you get runtime validation — essential for APIs and data pipelines."],code:`from pydantic import BaseModel, validator, Field
from typing import List, Optional

class User(BaseModel):
    id: int
    name: str = Field(..., min_length=2, max_length=50)
    email: str
    age: int = Field(..., gt=0, lt=150)
    skills: List[str] = []
    address: Optional[str] = None

    @validator('email')
    def validate_email(cls, v):
        if '@' not in v:
            raise ValueError('Invalid email')
        return v.lower()

# Creating a user — automatically validated
user = User(id=1, name="Amit", email="AMIT@Example.com", age=25, skills=["Python"])
print(user.email)  # amit@example.com (lowercased by validator)

# Invalid data raises an error
try:
    bad_user = User(id=2, name="X", email="bad", age=200)
except Exception as e:
    print(e)
    # 2 validation errors for User

# Serialize to dict / JSON
print(user.dict())
print(user.json())`},{heading:"7. Design Patterns in Python",content:["Design patterns are proven solutions to common problems. Here are the most useful ones for data professionals."],code:`# Singleton — only one instance exists
class Database:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.connection = "connected"
        return cls._instance

db1 = Database()
db2 = Database()
print(db1 is db2)  # True — same instance

# Factory — create objects without specifying exact class
class DataProcessor:
    @staticmethod
    def create(type_):
        if type_ == "csv":
            return CSVProcessor()
        elif type_ == "json":
            return JSONProcessor()
        elif type_ == "xml":
            return XMLProcessor()
        raise ValueError(f"Unknown type: {type_}")

# Strategy — interchangeable algorithms
from abc import ABC, abstractmethod

class SortStrategy(ABC):
    @abstractmethod
    def sort(self, data):
        pass

class QuickSort(SortStrategy):
    def sort(self, data):
        return sorted(data)  # simplified

class MergeSort(SortStrategy):
    def sort(self, data):
        return sorted(data, reverse=True)

class DataAnalyzer:
    def __init__(self, strategy: SortStrategy):
        self.strategy = strategy

    def analyze(self, data):
        return self.strategy.sort(data)`},{heading:"8. Performance Profiling and Optimization",content:["Professional Python code is measured and optimized. Use these tools to find and fix bottlenecks."],code:`import timeit
import cProfile
import functools

# Time a snippet
time = timeit.timeit(
    '[x**2 for x in range(1000)]',
    number=10000
)
print(f"List comprehension: {time:.4f}s")

# Profile a function
def expensive_function():
    return sum(x**2 for x in range(1000000))

cProfile.run('expensive_function()')

# Memoization with lru_cache
from functools import lru_cache

@lru_cache(maxsize=128)
def expensive_computation(n):
    # Simulate expensive operation
    result = sum(i**2 for i in range(n))
    return result

# First call — computes and caches
print(expensive_computation(10000))
# Second call — instant (from cache)
print(expensive_computation(10000))

# Numba for numerical speedup
from numba import jit
import numpy as np

@jit(nopython=True)
def fast_matrix_multiply(a, b):
    return np.dot(a, b)`}]},{id:"advanced-sql",title:"Advanced SQL — Professional Analytics",category:"Databases",icon:"Database",description:"Master advanced SQL techniques used by professional data analysts — complex window functions, query optimization, pivoting, recursive queries, and performance tuning.",level:"Advanced",estimatedTime:"55 min read",sections:[{heading:"1. Advanced Window Functions",content:["Window functions are the most powerful SQL feature for analytics. Beyond the basics, these patterns solve complex ranking, comparison, and aggregation problems."],code:`-- Running total with partition reset
SELECT
    date, department, sales,
    SUM(sales) OVER (
        PARTITION BY department
        ORDER BY date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) as running_total,
    -- Percent of department total
    sales / SUM(sales) OVER (PARTITION BY department) as pct_of_dept,
    -- Rank within department by date
    RANK() OVER (PARTITION BY department ORDER BY sales DESC) as dept_rank
FROM daily_sales
ORDER BY department, date;

-- Year-over-year and month-over-month comparisons
SELECT
    date,
    revenue,
    -- Same period last year
    LAG(revenue, 365) OVER (ORDER BY date) as revenue_last_year,
    -- Month-over-month growth
    (revenue - LAG(revenue, 1) OVER (ORDER BY date))
        / LAG(revenue, 1) OVER (ORDER BY date) * 100 as mom_growth_pct,
    -- 7-day moving average
    AVG(revenue) OVER (
        ORDER BY date
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) as rolling_7day_avg,
    -- Cumulative distribution
    CUME_DIST() OVER (ORDER BY revenue) as cumulative_pct,
    -- NTile — divide into 4 quartiles
    NTILE(4) OVER (ORDER BY revenue) as quartile
FROM daily_revenue;

-- First and last value with proper window frame
SELECT
    department,
    employee_name,
    salary,
    FIRST_VALUE(employee_name) OVER w as highest_paid,
    LAST_VALUE(employee_name) OVER w as lowest_paid,
    -- Ratio to department average
    salary / AVG(salary) OVER w as ratio_to_avg
FROM employees
WINDOW w AS (
    PARTITION BY department
    ORDER BY salary DESC
    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
);`},{heading:"2. PIVOT and UNPIVOT",content:["Pivoting transforms rows into columns, and unpivoting does the reverse. These are essential for reporting and reshaping data."],code:`-- PIVOT: Convert rows to columns (SQL Server / PostgreSQL)
-- Before: monthly sales as rows
-- After:  one row per product, columns for each month

-- PostgreSQL crosstab approach
SELECT *
FROM crosstab(
    'SELECT product, month, sales
     FROM monthly_sales
     ORDER BY product, month'
) AS ct(product TEXT, jan INT, feb INT, mar INT, apr INT);

-- Standard SQL approach with conditional aggregation
SELECT
    product,
    SUM(CASE WHEN month = 'Jan' THEN sales ELSE 0 END) as jan_sales,
    SUM(CASE WHEN month = 'Feb' THEN sales ELSE 0 END) as feb_sales,
    SUM(CASE WHEN month = 'Mar' THEN sales ELSE 0 END) as mar_sales,
    SUM(CASE WHEN month = 'Apr' THEN sales ELSE 0 END) as apr_sales,
    SUM(sales) as total_sales
FROM monthly_sales
GROUP BY product
ORDER BY total_sales DESC;

-- UNPIVOT: Convert columns to rows
-- Before: one row with jan, feb, mar, apr columns
-- After:  one row per month

SELECT product, 'Jan' as month, jan_sales as sales FROM product_sales
UNION ALL
SELECT product, 'Feb' as month, feb_sales as sales FROM product_sales
UNION ALL
SELECT product, 'Mar' as month, mar_sales as sales FROM product_sales
UNION ALL
SELECT product, 'Apr' as month, apr_sales as sales FROM product_sales
ORDER BY product, month;`},{heading:"3. Recursive CTEs — Hierarchical Data",content:["Recursive CTEs are essential for organizational charts, bill of materials, category trees, and any hierarchical data."],code:`-- Organizational hierarchy with levels
WITH RECURSIVE org_tree AS (
    -- Base case: top-level managers
    SELECT
        id, name, manager_id, department,
        1 as level,
        name::VARCHAR(1000) as hierarchy_path,
        0 as total_reports
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive case: direct reports
    SELECT
        e.id, e.name, e.manager_id, e.department,
        ot.level + 1,
        ot.hierarchy_path || ' > ' || e.name,
        0
    FROM employees e
    INNER JOIN org_tree ot ON e.manager_id = ot.id
)
SELECT
    REPEAT('  ', level - 1) || name as indented_name,
    level,
    hierarchy_path,
    hierarchy_path
FROM org_tree
ORDER BY hierarchy_path;

-- Bill of materials — calculating total cost
WITH RECURSIVE bom AS (
    -- Base: top-level product
    SELECT
        product_id, product_name,
        1 as quantity,
        unit_cost,
        unit_cost as total_cost,
        product_name::VARCHAR(1000) as component_path
    FROM products
    WHERE product_id = 100  -- the product we are building

    UNION ALL

    -- Recursive: components of components
    SELECT
        c.component_id,
        p.product_name,
        b.quantity * c.quantity,
        p.unit_cost,
        b.total_cost + (b.quantity * c.quantity * p.unit_cost),
        b.component_path || ' > ' || p.product_name
    FROM bom b
    JOIN components c ON b.product_id = c.parent_id
    JOIN products p ON c.component_id = p.product_id
)
SELECT * FROM bom ORDER BY component_path;`},{heading:"4. Query Optimization Techniques",content:["Slow queries are the most common performance problem. Here is how to identify and fix them."],code:`-- Use EXPLAIN ANALYZE to see the execution plan
EXPLAIN ANALYZE
SELECT * FROM orders o
JOIN customers c ON o.customer_id = c.id
WHERE o.order_date >= '2026-01-01';

-- Common optimizations:

-- 1. Avoid SELECT * — only select needed columns
-- Bad:  SELECT * FROM orders;
-- Good: SELECT order_id, customer_id, total FROM orders;

-- 2. Use covering indexes
CREATE INDEX idx_orders_covering
ON orders (customer_id, order_date)
INCLUDE (total, status);

-- 3. Use EXISTS instead of IN for subqueries
-- Bad (slow for large lists):
SELECT * FROM orders
WHERE customer_id IN (SELECT id FROM customers WHERE country = 'India');

-- Good (stops at first match):
SELECT * FROM orders o
WHERE EXISTS (
    SELECT 1 FROM customers c
    WHERE c.id = o.customer_id AND c.country = 'India'
);

-- 4. Use UNION ALL instead of UNION (when no duplicates)
-- UNION removes duplicates (expensive sort)
-- UNION ALL does not (faster)
SELECT name FROM customers WHERE country = 'India'
UNION ALL
SELECT name FROM suppliers WHERE country = 'India';

-- 5. Partition large tables
CREATE TABLE orders (
    order_id BIGINT,
    order_date DATE,
    customer_id BIGINT,
    total DECIMAL(10,2)
) PARTITION BY RANGE (order_date);

CREATE TABLE orders_2026_q1
    PARTITION OF orders
    FOR VALUES FROM ('2026-01-01') TO ('2026-04-01');

CREATE TABLE orders_2026_q2
    PARTITION OF orders
    FOR VALUES FROM ('2026-04-01') TO ('2026-07-01');

-- 6. Use materialized views for expensive aggregations
CREATE MATERIALIZED VIEW daily_sales_summary AS
SELECT
    date,
    COUNT(*) as order_count,
    SUM(total) as total_revenue,
    AVG(total) as avg_order_value
FROM orders
GROUP BY date;

-- Refresh periodically
REFRESH MATERIALIZED VIEW daily_sales_summary;`},{heading:"5. Advanced Aggregation Patterns",content:["Professional reporting requires complex aggregations — here are the patterns that solve real business questions."],code:`-- Rollup: hierarchical subtotals
SELECT
    COALESCE(country, 'All Countries') as country,
    COALESCE(region, 'All Regions') as region,
    COALESCE(product, 'All Products') as product,
    SUM(sales) as total_sales
FROM sales_data
GROUP BY ROLLUP (country, region, product);
-- Produces subtotals at each level + grand total

-- Cube: all possible subtotal combinations
SELECT
    COALESCE(country, 'All') as country,
    COALESCE(region, 'All') as region,
    SUM(sales) as total
FROM sales_data
GROUP BY CUBE (country, region);
-- Produces subtotals for every combination

-- Grouping sets: specify exact combinations
SELECT
    COALESCE(country, 'All') as country,
    COALESCE(product, 'All') as product,
    SUM(sales) as total
FROM sales_data
GROUP BY GROUPING SETS (
    (country, product),
    (country),
    (product),
    ()
);

-- Cohort analysis with window functions
WITH user_purchases AS (
    SELECT
        user_id,
        DATE_TRUNC('month', first_purchase_date) as cohort_month,
        DATE_TRUNC('month', purchase_date) as purchase_month,
        COUNT(*) as purchase_count
    FROM (
        SELECT
            user_id,
            purchase_date,
            MIN(purchase_date) OVER (PARTITION BY user_id) as first_purchase_date
        FROM orders
    ) x
    GROUP BY user_id, first_purchase_date, purchase_date
)
SELECT
    cohort_month,
    purchase_month,
    AGE(purchase_month, cohort_month) as months_since_first,
    COUNT(DISTINCT user_id) as active_users
FROM user_purchases
GROUP BY cohort_month, purchase_month
ORDER BY cohort_month, months_since_first;`},{heading:"6. JSON and Array Operations (PostgreSQL)",content:["Modern databases support JSON and array columns. These are essential for working with semi-structured data and API responses."],code:`-- JSON column operations
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    event_type TEXT,
    event_data JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Insert JSON data
INSERT INTO events (event_type, event_data) VALUES
('purchase', '{"product": "laptop", "price": 999.99, "qty": 1}'),
('view', '{"page": "/home", "duration": 45}'),
('purchase', '{"product": "mouse", "price": 29.99, "qty": 3}');

-- Query JSON fields
SELECT
    event_data->>'product' as product,
    (event_data->>'price')::DECIMAL as price,
    (event_data->>'qty')::INT as quantity
FROM events
WHERE event_type = 'purchase';

-- JSON aggregation — combine rows into JSON
SELECT
    json_agg(
        json_build_object(
            'product', event_data->>'product',
            'price', event_data->>'price'
        )
    ) as purchases
FROM events
WHERE event_type = 'purchase';

-- Array operations
SELECT
    ARRAY_AGG(product_name ORDER BY price DESC) as top_products,
    ARRAY_LENGTH(ARRAY_AGG(product_name), 1) as product_count
FROM products;

-- Unnest array into rows
SELECT unnest(ARRAY['apple', 'banana', 'cherry']) as fruit;`},{heading:"7. Performance Tuning Checklist",content:["Use this checklist to systematically improve query performance."],table:{headers:["Technique","Impact","When to Use"],rows:[["Add indexes on JOIN/WHERE columns","High","Frequently filtered or joined columns"],["Use covering indexes (INCLUDE)","High","When query only needs a few columns"],["Partition large tables by date","High","Tables with 10M+ rows, time-based queries"],["Materialize expensive views","High","Slow aggregations run frequently"],["Avoid SELECT *","Medium","Always — select only needed columns"],["Use EXISTS instead of IN","Medium","Subquery returns many rows"],["Use UNION ALL instead of UNION","Medium","When duplicates are impossible"],["Batch large INSERTs","Medium","Loading 1000+ rows"],["Vacuum and analyze tables","Medium","After bulk updates (PostgreSQL)"],["Use connection pooling","High","Production applications with many connections"]]}}]},{id:"advanced-pandas",title:"Advanced Pandas — Professional Data Engineering",category:"Python",icon:"Table",description:"Master professional Pandas techniques — multi-indexing, method chaining, vectorized operations, memory optimization, custom accessors, and production patterns.",level:"Advanced",estimatedTime:"55 min read",sections:[{heading:"1. Multi-Index DataFrames",content:["Multi-indexing allows hierarchical row and column labels — essential for complex data like panel data, time series with multiple entities, and reshaped data."],code:`import pandas as pd
import numpy as np

# Create multi-index DataFrame
data = {
    ('Mumbai', 'Sales'): [100, 120, 130],
    ('Mumbai', 'Profit'): [20, 25, 28],
    ('Delhi', 'Sales'): [80, 90, 95],
    ('Delhi', 'Profit'): [15, 18, 20],
}
df = pd.DataFrame(data, index=['Jan', 'Feb', 'Mar'])
print(df.columns)
# MultiIndex([('Mumbai', 'Sales'), ('Mumbai', 'Profit'),
#             ('Delhi', 'Sales'), ('Delhi', 'Profit')])

# Select from multi-index
print(df['Mumbai'])               # both Sales and Profit for Mumbai
print(df['Mumbai', 'Sales'])      # only Sales for Mumbai
print(df.xs('Sales', level=1, axis=1))  # Sales for all cities

# Row multi-index
df2 = pd.DataFrame({
    'sales': [100, 120, 80, 90, 130, 95],
}, index=pd.MultiIndex.from_tuples([
    ('Mumbai', 'Jan'), ('Mumbai', 'Feb'),
    ('Delhi', 'Jan'), ('Delhi', 'Feb'),
    ('Pune', 'Jan'), ('Pune', 'Feb'),
], names=['city', 'month']))

# Group by level
print(df2.groupby(level='city').sum())
print(df2.groupby(level=['city', 'month']).mean())

# Unstack — pivot a level to columns
pivoted = df2.unstack(level='month')
#         sales
# month    Feb  Jan
# city
# Delhi     90   80
# Mumbai   120  100
# Pune      95  130`},{heading:"2. Method Chaining — Clean Data Pipelines",content:["Method chaining creates readable, pipe-like data transformations without intermediate variables. This is how professional data engineers write Pandas code."],code:`import pandas as pd

# Without chaining (harder to read, many variables)
df = pd.read_csv('sales.csv')
df = df.dropna(subset=['price'])
df = df[df['price'] > 0]
df['price_category'] = df['price'].apply(lambda x: 'High' if x > 100 else 'Low')
df = df.groupby(['region', 'price_category'])['price'].agg(['mean', 'count'])
df = df.sort_values('mean', ascending=False)
df = df.head(10)

# With method chaining (clean, readable, no intermediate variables)
result = (
    pd.read_csv('sales.csv')
    .dropna(subset=['price'])
    .query('price > 0')
    .assign(price_category=lambda x: np.where(x['price'] > 100, 'High', 'Low'))
    .groupby(['region', 'price_category'])['price']
    .agg(['mean', 'count'])
    .sort_values('mean', ascending=False)
    .head(10)
)

# Using pipe() for custom functions in the chain
def remove_outliers(df, column, n_std=3):
    mean, std = df[column].mean(), df[column].std()
    return df[(df[column] >= mean - n_std * std) &
              (df[column] <= mean + n_std * std)]

def normalize(df, column):
    df = df.copy()
    df[column] = (df[column] - df[column].min()) / (df[column].max() - df[column].min())
    return df

clean_data = (
    pd.read_csv('data.csv')
    .pipe(remove_outliers, 'price', n_std=2)
    .pipe(remove_outliers, 'quantity', n_std=2)
    .pipe(normalize, 'price')
)`},{heading:"3. Vectorized Operations — Speeding Up Pandas",content:["Vectorized operations are 100-1000x faster than loops or apply(). Always prefer vectorized methods."],code:`import pandas as pd
import numpy as np
import time

df = pd.DataFrame({'price': np.random.rand(1_000_000) * 100})

# SLOW: iterrows (loop over rows)
start = time.time()
result = []
for _, row in df.iterrows():
    result.append(row['price'] * 1.1)
result = pd.Series(result)
print(f"iterrows: {time.time() - start:.3f}s")

# FASTER: apply
start = time.time()
result = df['price'].apply(lambda x: x * 1.1)
print(f"apply: {time.time() - start:.3f}s")

# FASTEST: vectorized (numpy)
start = time.time()
result = df['price'] * 1.1
print(f"vectorized: {time.time() - start:.3f}s")

# Vectorized conditional logic with np.select
conditions = [
    df['price'] < 25,
    (df['price'] >= 25) & (df['price'] < 75),
    df['price'] >= 75,
]
choices = ['Low', 'Medium', 'High']
df['category'] = np.select(conditions, choices)

# Vectorized string operations
df['product'] = df['product'].str.upper()
df['has_discount'] = df['description'].str.contains('discount', case=False)
df['word_count'] = df['description'].str.split().str.len()

# Vectorized date operations
df['date'] = pd.to_datetime(df['date'])
df['day_of_week'] = df['date'].dt.day_name()
df['is_weekend'] = df['date'].dt.dayofweek >= 5
df['quarter'] = df['date'].dt.quarter`},{heading:"4. Memory Optimization",content:["Large datasets can exhaust memory. These techniques reduce memory usage by 50-90%."],code:`import pandas as pd

# Check memory usage
df = pd.read_csv('large_file.csv')
print(df.memory_usage(deep=True).sum() / 1e6, 'MB')

# 1. Downcast numeric types
def optimize_dtypes(df):
    # Integers
    int_cols = df.select_dtypes(include=['int64']).columns
    df[int_cols] = df[int_cols].apply(pd.to_numeric, downcast='integer')

    # Floats
    float_cols = df.select_dtypes(include=['float64']).columns
    df[float_cols] = df[float_cols].apply(pd.to_numeric, downcast='float')

    return df

df = optimize_dtypes(df)
print(df.memory_usage(deep=True).sum() / 1e6, 'MB (optimized)')

# 2. Convert strings to categories
for col in ['country', 'product_category', 'status']:
    df[col] = df[col].astype('category')
# category type uses 1-2 bytes per value vs 50+ bytes for strings

# 3. Read only needed columns
df = pd.read_csv('large_file.csv', usecols=['date', 'price', 'quantity'])

# 4. Specify dtypes on read
dtypes = {
    'id': 'int32',
    'price': 'float32',
    'quantity': 'int16',
    'category': 'category',
}
df = pd.read_csv('data.csv', dtype=dtypes, parse_dates=['date'])

# 5. Read in chunks for very large files
chunks = pd.read_csv('huge_file.csv', chunksize=100_000)
results = []
for chunk in chunks:
    result = chunk.groupby('category')['price'].sum()
    results.append(result)
total = pd.concat(results).groupby(level=0).sum()`},{heading:"5. Advanced Merging and Joining",content:["Real-world data comes from multiple sources. Master these merge patterns to combine data correctly."],code:`import pandas as pd

customers = pd.DataFrame({
    'customer_id': [1, 2, 3, 4],
    'name': ['Amit', 'Priya', 'Raj', 'Sneha'],
    'city': ['Mumbai', 'Delhi', 'Pune', 'Bangalore']
})

orders = pd.DataFrame({
    'order_id': [101, 102, 103, 104, 105],
    'customer_id': [1, 2, 2, 3, 5],  # customer 5 doesn't exist
    'amount': [100, 200, 150, 300, 50]
})

# Inner merge — only matching rows
inner = customers.merge(orders, on='customer_id', how='inner')

# Left merge — all customers, with nulls for no orders
left = customers.merge(orders, on='customer_id', how='left')

# Full outer merge — all rows from both, nulls where no match
outer = customers.merge(orders, on='customer_id', how='outer',
                        indicator=True)
# indicator adds a '_merge' column: left_only, right_only, both

# Merge with different column names
df1 = pd.DataFrame({'id': [1, 2], 'name': ['A', 'B']})
df2 = pd.DataFrame({'user_id': [1, 2], 'email': ['a@x.com', 'b@x.com']})
merged = df1.merge(df2, left_on='id', right_on='user_id')

# Merge on multiple columns
merged = sales.merge(targets, on=['region', 'quarter'])

# Cross join — every combination (use with caution, can be huge)
cross = customers.merge(orders, how='cross')

# As-of merge — merge with nearest key (time series)
trades = pd.DataFrame({
    'time': pd.to_datetime(['10:00', '10:05', '10:10']),
    'price': [100, 102, 101]
})
quotes = pd.DataFrame({
    'time': pd.to_datetime(['10:00', '10:07', '10:12']),
    'bid': [99, 101, 100]
})
# Match each trade to the most recent quote
result = pd.merge_asof(
    trades.sort_values('time'),
    quotes.sort_values('time'),
    on='time',
    direction='backward'
)`},{heading:"6. Time Series Analysis",content:["Pandas has powerful time series capabilities — essential for financial data, sales forecasting, and trend analysis."],code:`import pandas as pd
import numpy as np

# Create time series data
dates = pd.date_range('2026-01-01', periods=365, freq='D')
ts = pd.DataFrame({
    'date': dates,
    'sales': np.random.randn(365).cumsum() + 100
}).set_index('date')

# Resampling — change frequency
daily_to_weekly = ts.resample('W').sum()
daily_to_monthly = ts.resample('M').agg(['mean', 'sum', 'min', 'max'])
daily_to_quarterly = ts.resample('Q').mean()

# Rolling window calculations
ts['rolling_mean_7'] = ts['sales'].rolling(window=7).mean()
ts['rolling_std_30'] = ts['sales'].rolling(window=30).std()
ts['ewm_mean'] = ts['sales'].ewm(span=7).mean()  # exponentially weighted

# Shifting — lag and lead
ts['prev_day'] = ts['sales'].shift(1)
ts['next_day'] = ts['sales'].shift(-1)
ts['pct_change'] = ts['sales'].pct_change()
ts['diff_7'] = ts['sales'].diff(7)  # difference from 7 days ago

# Time-based indexing and slicing
jan_data = ts.loc['2026-01']
q1_data = ts.loc['2026-01':'2026-03']

# Decomposition (trend + seasonality + residual)
from statsmodels.tsa.seasonal import seasonal_decompose
decomposition = seasonal_decompose(ts['sales'], model='additive', period=7)
trend = decomposition.trend
seasonal = decomposition.seasonal
residual = decomposition.resid

# Business day frequency
bday = pd.date_range('2026-01-01', periods=30, freq='B')  # B = business day`},{heading:"7. Production Patterns — Testing and Reproducibility",content:["Professional Pandas code is tested, documented, and reproducible. Here are the patterns that make it production-ready."],code:`import pandas as pd
import pytest

# Create test fixtures
@pytest.fixture
def sample_data():
    return pd.DataFrame({
        'product': ['A', 'B', 'C', 'A', 'B'],
        'price': [10, 20, 30, 15, 25],
        'quantity': [2, 1, 3, 5, 2],
    })

def test_total_revenue(sample_data):
    result = (sample_data
              .assign(revenue=lambda x: x['price'] * x['quantity'])
              .groupby('product')['revenue']
              .sum())
    assert result['A'] == 95  # 10*2 + 15*5
    assert result['B'] == 70  # 20*1 + 25*2
    assert result['C'] == 90  # 30*3

def test_no_nulls_after_cleaning(sample_data):
    cleaned = sample_data.dropna()
    assert cleaned.isnull().sum().sum() == 0

# Reproducible random operations
np.random.seed(42)  # set seed at the start
sample = df.sample(n=100, random_state=42)

# Save and load DataFrames reliably
df.to_parquet('data.parquet')  # preserves dtypes, smaller than CSV
df_loaded = pd.read_parquet('data.parquet')
assert df.equals(df_loaded)  # exact match

# Logging for data pipelines
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def process_data(filepath):
    logger.info(f"Reading {filepath}")
    df = pd.read_csv(filepath)
    logger.info(f"Loaded {len(df)} rows")
    df = df.dropna()
    logger.info(f"After cleaning: {len(df)} rows")
    return df`}]},{id:"advanced-statistics",title:"Advanced Statistics for Data Analysts",category:"Data Analytics",icon:"BarChart3",description:"Master the statistical methods used by senior analysts — A/B testing, regression analysis, Bayesian thinking, time series forecasting, and causal inference.",level:"Advanced",estimatedTime:"65 min read",sections:[{heading:"1. A/B Testing — End to End",content:["A/B testing is the core methodology for data-driven decision making. This section covers the full process from hypothesis to conclusion."],code:`import numpy as np
from scipy import stats

# Define the experiment
# H0: The new design does not change conversion rate
# H1: The new design increases conversion rate

# Data
control_conversions = 1200
control_visitors = 10000
variant_conversions = 1380
variant_visitors = 10000

control_rate = control_conversions / control_visitors  # 12%
variant_rate = variant_conversions / variant_visitors  # 13.8%

# Two-proportion z-test
pooled_rate = (control_conversions + variant_conversions) / (control_visitors + variant_visitors)
se = np.sqrt(pooled_rate * (1 - pooled_rate) * (1/control_visitors + 1/variant_visitors))
z_score = (variant_rate - control_rate) / se
p_value = 1 - stats.norm.cdf(z_score)

print(f"Control rate: {control_rate:.4f}")
print(f"Variant rate: {variant_rate:.4f}")
print(f"Lift: {(variant_rate - control_rate) / control_rate * 100:.1f}%")
print(f"Z-score: {z_score:.4f}")
print(f"P-value: {p_value:.4f}")

if p_value < 0.05:
    print("Result: Statistically significant — ship the new design")
else:
    print("Result: Not significant — keep the current design")

# Power analysis — how many visitors do we need?
from statsmodels.stats.power import NormalIndPower
from statsmodels.stats.proportion import proportion_effectsize

effect_size = proportion_effectsize(0.12, 0.14)  # control, expected variant
power_analysis = NormalIndPower()
sample_size = power_analysis.solve_power(
    effect_size=effect_size,
    alpha=0.05,
    power=0.80,  # 80% chance of detecting the effect
    ratio=1
)
print(f"Required sample size per group: {int(sample_size)}")`},{heading:"2. Linear and Logistic Regression",content:["Regression analysis is the foundation of predictive analytics. Understand both the math and the practical application."],code:`import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.metrics import r2_score, mean_squared_error, accuracy_score
import statsmodels.api as sm

# Linear regression with statsmodels (gives detailed statistics)
data = pd.DataFrame({
    'ad_spend': [100, 200, 300, 400, 500, 600, 700, 800],
    'sales': [50, 95, 130, 180, 210, 260, 290, 340],
})

X = sm.add_constant(data['ad_spend'])
model = sm.OLS(data['sales'], X).fit()
print(model.summary())
# Coefficients, p-values, R-squared, confidence intervals
# Interpretation: for every $1 increase in ad spend,
# sales increase by $0.47 (coefficient), p < 0.001

# Multiple regression with sklearn
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

X = data[['ad_spend', 'seasonality_index', 'competitor_price']]
y = data['sales']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

model = LinearRegression()
model.fit(X_train_scaled, y_train)
predictions = model.predict(X_test_scaled)

print(f"R-squared: {r2_score(y_test, predictions):.4f}")
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, predictions)):.4f}")
print(f"Coefficients: {dict(zip(X.columns, model.coef_))}")

# Logistic regression — for binary outcomes
# Example: predict customer churn (0 = stays, 1 = churns)
churn_data = pd.DataFrame({
    'tenure_months': [12, 24, 6, 36, 18, 48, 3, 8],
    'monthly_charges': [50, 80, 30, 60, 70, 90, 20, 45],
    'churned': [0, 1, 1, 0, 0, 1, 1, 0],
})

X = churn_data[['tenure_months', 'monthly_charges']]
y = churn_data['churned']

log_model = LogisticRegression()
log_model.fit(X, y)

# Predict probability of churn
probabilities = log_model.predict_proba(X)[:, 1]
print(f"Churn probabilities: {probabilities}")
print(f"Coefficients: {dict(zip(X.columns, log_model.coef_[0]))}")
# Negative coefficient for tenure = longer tenure reduces churn probability`},{heading:"3. Bayesian Thinking",content:["Bayesian statistics updates beliefs as new evidence arrives. This approach is increasingly used in modern data analysis."],code:`import numpy as np
from scipy.stats import beta

# Bayesian A/B testing with Beta distribution
# Prior: uniform (Beta(1, 1))
# After observing data: Beta(1 + conversions, 1 + non-conversions)

# Control: 1200 conversions out of 10000
control_alpha = 1 + 1200
control_beta = 1 + (10000 - 1200)

# Variant: 1380 conversions out of 10000
variant_alpha = 1 + 1380
variant_beta = 1 + (10000 - 1380)

# Sample from both distributions to estimate probability variant is better
samples = 100000
control_samples = beta.rvs(control_alpha, control_beta, size=samples)
variant_samples = beta.rvs(variant_alpha, variant_beta, size=samples)

# Probability that variant is better than control
p_variant_better = np.mean(variant_samples > control_samples)
print(f"P(variant > control) = {p_variant_better:.4f}")

# Expected lift
lift = (variant_samples - control_samples) / control_samples
print(f"Expected lift: {np.mean(lift) * 100:.2f}%")
print(f"95% credible interval: [{np.percentile(lift, 2.5) * 100:.2f}%, "
      f"{np.percentile(lift, 97.5) * 100:.2f}%]")

# Bayesian updating — update belief as new data arrives
prior_alpha, prior_beta = 1, 1  # start with uniform prior

# Week 1: 100 conversions out of 800
prior_alpha += 100
prior_beta += 700
print(f"After week 1: Beta({prior_alpha}, {prior_beta})")
print(f"  Mean: {prior_alpha / (prior_alpha + prior_beta):.4f}")

# Week 2: 130 conversions out of 900
prior_alpha += 130
prior_beta += 770
print(f"After week 2: Beta({prior_alpha}, {prior_beta})")
print(f"  Mean: {prior_alpha / (prior_alpha + prior_beta):.4f}")`},{heading:"4. Time Series Forecasting",content:["Forecasting is critical for business planning. Here are practical methods from simple to advanced."],code:`import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.holtwinters import ExponentialSmoothing
from prophet import Prophet  # Facebook's forecasting library

# Create sample time series
dates = pd.date_range('2025-01-01', periods=365, freq='D')
sales = 100 + np.arange(365) * 0.1 + np.sin(np.arange(365) * 2 * np.pi / 7) * 10
ts = pd.DataFrame({'ds': dates, 'y': sales})

# Method 1: Exponential Smoothing (good for trend + seasonality)
model = ExponentialSmoothing(
    ts['y'],
    trend='add',
    seasonal='add',
    seasonal_periods=7
).fit()
forecast = model.forecast(30)  # next 30 days

# Method 2: ARIMA (autoregressive integrated moving average)
arima_model = ARIMA(ts['y'], order=(5, 1, 2)).fit()
arima_forecast = arima_model.forecast(30)

# Method 3: Prophet (handles holidays, changepoints automatically)
prophet_model = Prophet(
    yearly_seasonality=True,
    weekly_seasonality=True,
    daily_seasonality=False
)
prophet_model.fit(ts)
future = prophet_model.make_future_dataframe(periods=30)
prophet_forecast = prophet_model.predict(future)

# Evaluate forecasts with train/test split
train = ts.iloc[:300]
test = ts.iloc[300:]

model = ExponentialSmoothing(
    train['y'], trend='add', seasonal='add', seasonal_periods=7
).fit()
predictions = model.forecast(len(test))

from sklearn.metrics import mean_absolute_error, mean_absolute_percentage_error
mae = mean_absolute_error(test['y'], predictions)
mape = mean_absolute_percentage_error(test['y'], predictions)
print(f"MAE: {mae:.2f}")
print(f"MAPE: {mape * 100:.1f}%")`},{heading:"5. Causal Inference — Beyond Correlation",content:["Correlation does not imply causation. These methods help estimate causal effects from observational data."],code:`import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler

# Difference-in-Differences (DiD)
# Compare the change in a treatment group vs a control group over time
# Example: effect of a price increase on sales

did_data = pd.DataFrame({
    'period': [0, 0, 0, 0, 1, 1, 1, 1],  # 0=before, 1=after
    'treated': [0, 0, 1, 1, 0, 0, 1, 1],  # 0=control, 1=treatment
    'sales': [100, 105, 120, 125, 95, 100, 100, 105],
})

# DiD estimate
before_control = did_data[(did_data['period']==0) & (did_data['treated']==0)]['sales'].mean()
after_control = did_data[(did_data['period']==1) & (did_data['treated']==0)]['sales'].mean()
before_treated = did_data[(did_data['period']==0) & (did_data['treated']==1)]['sales'].mean()
after_treated = did_data[(did_data['period']==1) & (did_data['treated']==1)]['sales'].mean()

control_change = after_control - before_control
treated_change = after_treated - before_treated
did_estimate = treated_change - control_change
print(f"DiD estimate: {did_estimate}")
# Negative means the price increase reduced sales (causal effect)

# Propensity Score Matching
from sklearn.linear_model import LogisticRegression

# Estimate propensity scores (probability of being treated)
features = ['age', 'income', 'previous_purchases']
X = data[features]
treatment = data['received_promotion']

prop_model = LogisticRegression()
prop_model.fit(X, treatment)
propensity_scores = prop_model.predict_proba(X)[:, 1]

# Match treated and control with similar propensity scores
data['propensity'] = propensity_scores
treated = data[data['received_promotion'] == 1]
control = data[data['received_promotion'] == 0]

# For each treated unit, find nearest control by propensity score
from scipy.spatial import KDTree
tree = KDTree(control[['propensity']].values)
_, indices = tree.query(treated[['propensity']].values)
matched_control = control.iloc[indices.flatten()]

# Average Treatment Effect on Treated (ATT)
att = treated['outcome'].mean() - matched_control['outcome'].mean()
print(f"Average Treatment Effect: {att:.4f}")`},{heading:"6. Choosing the Right Statistical Test",content:["Selecting the correct test is critical. Use this reference guide."],table:{headers:["Scenario","Test","Python Function"],rows:[["Compare means of 2 groups","t-test","scipy.stats.ttest_ind()"],["Compare means of 3+ groups","ANOVA","scipy.stats.f_oneway()"],["Compare proportions (A/B test)","z-test","statsmodels.stats.proportion"],["Test independence of categories","Chi-square","scipy.stats.chi2_contingency()"],["Test normality","Shapiro-Wilk","scipy.stats.shapiro()"],["Compare distributions","Kolmogorov-Smirnov","scipy.stats.ks_2samp()"],["Correlation (continuous)","Pearson","scipy.stats.pearsonr()"],["Correlation (ordinal)","Spearman","scipy.stats.spearmanr()"],["Non-parametric 2 groups","Mann-Whitney U","scipy.stats.mannwhitneyu()"],["Non-parametric 3+ groups","Kruskal-Wallis","scipy.stats.kruskal()"],["Paired data","Paired t-test","scipy.stats.ttest_rel()"],["Multiple comparisons","Bonferroni / Tukey","statsmodels.stats.multicomp"]]}},{heading:"7. Common Statistical Mistakes to Avoid",content:["Even experienced analysts make these errors. Being aware of them is the difference between amateur and professional."],list:["p-hacking — running many tests until one is significant. Pre-register your hypothesis and test it once.","Ignoring multiple comparison correction — when running many tests, use Bonferroni or FDR correction.","Confusing statistical significance with practical significance — a tiny effect can be statistically significant with a large sample.","Using the wrong test for your data — check assumptions (normality, equal variance, independence) before choosing a test.","Ignoring effect sizes — always report effect sizes alongside p-values to show the magnitude of the effect.","Simpson's paradox — a trend in the overall data can reverse within subgroups. Always check subgroup analysis.","Survivorship bias — only analyzing successful cases leads to biased conclusions. Include failures in your analysis.","Correlation fishing — testing hundreds of variable pairs inflates false positive rate. Use domain knowledge to guide analysis."]}]},{id:"machine-learning-fundamentals",title:"Machine Learning Fundamentals for Analysts",category:"Data Analytics",icon:"Sparkles",description:"Bridge from data analysis to machine learning — understand the ML workflow, model selection, evaluation metrics, and when to use ML vs traditional statistics.",level:"Advanced",estimatedTime:"55 min read",sections:[{heading:"1. The Machine Learning Workflow",content:["Machine learning is not magic — it is a structured process. Understanding this workflow is essential before applying any algorithm."],list:["1. Define the problem — classification, regression, or clustering?","2. Collect and prepare data — the most time-consuming step (60-80% of effort)","3. Split data — training set (70-80%), validation set (10-15%), test set (10-15%)","4. Choose a model based on the problem type and data characteristics","5. Train the model on the training set","6. Tune hyperparameters using the validation set","7. Evaluate on the test set (only once, at the end)","8. Deploy the model to production","9. Monitor performance and retrain when needed"]},{heading:"2. Supervised Learning — Classification",content:["Classification predicts categorical outcomes. Here are the key algorithms with practical examples."],code:`import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.svm import SVC
from sklearn.metrics import (classification_report, confusion_matrix,
                             accuracy_score, precision_score, recall_score,
                             f1_score, roc_auc_score)

# Load and prepare data
df = pd.read_csv('customer_churn.csv')
X = df.drop('churned', axis=1)
y = df['churned']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Compare multiple models
models = {
    'Logistic Regression': LogisticRegression(),
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'Gradient Boosting': GradientBoostingClassifier(random_state=42),
    'SVM': SVC(probability=True, random_state=42),
}

results = {}
for name, model in models.items():
    model.fit(X_train_scaled, y_train)
    y_pred = model.predict(X_test_scaled)
    y_prob = model.predict_proba(X_test_scaled)[:, 1]

    results[name] = {
        'accuracy': accuracy_score(y_test, y_pred),
        'precision': precision_score(y_test, y_pred),
        'recall': recall_score(y_test, y_pred),
        'f1': f1_score(y_test, y_pred),
        'roc_auc': roc_auc_score(y_test, y_prob),
    }

results_df = pd.DataFrame(results).T
print(results_df)

# Cross-validation for robust evaluation
cv_scores = cross_val_score(
    RandomForestClassifier(n_estimators=100, random_state=42),
    X_train_scaled, y_train, cv=5, scoring='f1'
)
print(f"CV F1: {cv_scores.mean():.4f} (+/- {cv_scores.std():.4f})")`},{heading:"3. Supervised Learning — Regression",content:["Regression predicts continuous values. Understanding regularization is key to avoiding overfitting."],code:`from sklearn.linear_model import LinearRegression, Ridge, Lasso, ElasticNet
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
import numpy as np

# Compare regression models
models = {
    'Linear': LinearRegression(),
    'Ridge (L2)': Ridge(alpha=1.0),
    'Lasso (L1)': Lasso(alpha=0.1),
    'ElasticNet': ElasticNet(alpha=0.1, l1_ratio=0.5),
    'Random Forest': RandomForestRegressor(n_estimators=100, random_state=42),
    'Gradient Boosting': GradientBoostingRegressor(random_state=42),
}

for name, model in models.items():
    model.fit(X_train_scaled, y_train)
    y_pred = model.predict(X_test_scaled)

    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    mae = mean_absolute_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)

    print(f"{name:20s} | RMSE: {rmse:.4f} | MAE: {mae:.4f} | R2: {r2:.4f}")

# Feature importance from Random Forest
rf = RandomForestRegressor(n_estimators=100, random_state=42)
rf.fit(X_train_scaled, y_train)
importance = pd.DataFrame({
    'feature': X.columns,
    'importance': rf.feature_importances_,
}).sort_values('importance', ascending=False)
print(importance.head(10))

# Lasso for feature selection — coefficients become exactly 0
lasso = Lasso(alpha=0.1)
lasso.fit(X_train_scaled, y_train)
selected_features = X.columns[lasso.coef_ != 0]
print(f"Selected features: {list(selected_features)}")`},{heading:"4. Unsupervised Learning — Clustering",content:["Clustering finds groups in data without labels. It is used for customer segmentation, anomaly detection, and pattern discovery."],code:`from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering
from sklearn.decomposition import PCA
from sklearn.metrics import silhouette_score
import matplotlib.pyplot as plt

# K-Means with optimal K selection (elbow method + silhouette)
inertias = []
silhouettes = []
k_range = range(2, 11)

for k in k_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    labels = kmeans.fit_predict(X_scaled)
    inertias.append(kmeans.inertia_)
    silhouettes.append(silhouette_score(X_scaled, labels))

# Plot elbow curve
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))
ax1.plot(k_range, inertias, 'bo-')
ax1.set_xlabel('K'); ax1.set_ylabel('Inertia'); ax1.set_title('Elbow Method')
ax2.plot(k_range, silhouettes, 'ro-')
ax2.set_xlabel('K'); ax2.set_ylabel('Silhouette Score'); ax2.set_title('Silhouette Method')
plt.tight_layout(); plt.show()

# Choose optimal K (highest silhouette)
optimal_k = k_range[np.argmax(silhouettes)]
kmeans = KMeans(n_clusters=optimal_k, random_state=42, n_init=10)
clusters = kmeans.fit_predict(X_scaled)

# DBSCAN — density-based clustering (finds any shape, detects outliers)
dbscan = DBSCAN(eps=0.5, min_samples=5)
dbscan_clusters = dbscan.fit_predict(X_scaled)
# -1 means outlier/noise

# PCA for visualization (reduce to 2D)
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)
print(f"Explained variance: {pca.explained_variance_ratio_}")

# Visualize clusters
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=clusters, cmap='viridis', alpha=0.6)
plt.xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.1%})')
plt.ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.1%})')
plt.title(f'K-Means Clustering (K={optimal_k})')
plt.colorbar(label='Cluster')
plt.show()

# Cluster profiling — understand what each cluster represents
df['cluster'] = clusters
cluster_profile = df.groupby('cluster').agg({
    'age': 'mean',
    'income': 'mean',
    'spending_score': 'mean',
    'customer_id': 'count',
}).round(2)
print(cluster_profile)`},{heading:"5. Model Evaluation Metrics — Choosing the Right One",content:["Using the wrong metric can lead to wrong conclusions. Choose metrics based on the business problem."],table:{headers:["Metric","When to Use","Interpretation"],rows:[["Accuracy","Balanced classes","Overall correctness — misleading if classes are imbalanced"],["Precision","False positives are costly","Of predicted positives, how many are correct"],["Recall","False negatives are costly","Of actual positives, how many did we find"],["F1-Score","Balance precision and recall","Harmonic mean of precision and recall"],["ROC-AUC","Binary classification, any threshold","Ability to rank positives above negatives"],["RMSE","Regression, large errors matter","Root mean squared error — sensitive to outliers"],["MAE","Regression, outliers less important","Mean absolute error — robust to outliers"],["R-squared","Regression, explaining variance","Proportion of variance explained (0-1)"],["MAPE","Regression, relative error matters","Mean absolute percentage error"],["Silhouette","Clustering quality","How similar objects are to their cluster (-1 to 1)"]]}},{heading:"6. Handling Imbalanced Data",content:["Real-world data is often imbalanced (e.g., 99% normal, 1% fraud). These techniques address the problem."],code:`from imblearn.over_sampling import SMOTE
from imblearn.under_sampling import RandomUnderSampler
from sklearn.utils.class_weight import compute_class_weight
import numpy as np

# Check class distribution
print(y_train.value_counts(normalize=True))
# 0: 0.95, 1: 0.05  — highly imbalanced

# Method 1: Class weights — penalize errors on minority class
weights = compute_class_weight('balanced', classes=np.unique(y_train), y=y_train)
class_weight = dict(zip(np.unique(y_train), weights))
model = RandomForestClassifier(class_weight=class_weight, random_state=42)

# Method 2: SMOTE — synthetic oversampling of minority class
smote = SMOTE(random_state=42)
X_train_smote, y_train_smote = smote.fit_resample(X_train_scaled, y_train)
print(y_train_smote.value_counts(normalize=True))
# 0: 0.5, 1: 0.5  — balanced

# Method 3: Undersampling — reduce majority class
undersampler = RandomUnderSampler(random_state=42)
X_train_under, y_train_under = undersampler.fit_resample(X_train_scaled, y_train)

# Method 4: Combined — SMOTE + undersampling
from imblearn.pipeline import Pipeline
pipeline = Pipeline([
    ('smote', SMOTE(sampling_strategy=0.5, random_state=42)),  # 1:2 ratio
    ('undersampler', RandomUnderSampler(sampling_strategy=0.8, random_state=42)),
])

# Evaluate with precision-recall curve (better than ROC for imbalanced data)
from sklearn.metrics import precision_recall_curve, average_precision_score
precision, recall, thresholds = precision_recall_curve(y_test, y_prob)
avg_precision = average_precision_score(y_test, y_prob)
print(f"Average Precision: {avg_precision:.4f}")`},{heading:"7. When to Use ML vs Traditional Statistics",content:["Machine learning is not always the answer. Sometimes a simple statistical test is more appropriate and interpretable."],table:{headers:["Use Traditional Statistics","Use Machine Learning"],rows:[["You need to understand relationships and causality","You need accurate predictions"],["Interpretability is critical","Performance is more important than interpretability"],["You have a specific hypothesis to test","You want to discover patterns"],["Sample size is small (< 1000)","You have large datasets (> 10,000 rows)"],["You need confidence intervals and p-values","You need a deployable model"],["The problem is well-understood mathematically","The problem is complex with many variables"],["Stakeholders need to trust and understand the result","Automated decisions are acceptable"]]}}]}],ft=[{id:"sales-data-analysis",title:"Sales Data Analysis Dashboard",category:"Data Analysis",icon:"ShoppingCart",description:"Analyze sales data to find trends, top products, and regional performance. Build a complete analysis pipeline from CSV to visual dashboard.",difficulty:"Beginner",estimatedTime:"2-3 hours",technologies:["Python","Pandas","Matplotlib","Seaborn"],objectives:["Load and clean sales data from a CSV file","Analyze monthly sales trends","Identify top-selling products and categories","Compare performance across regions","Create visual dashboards with multiple charts"],dataset:"Generate synthetic sales data or download from Kaggle (search 'sales dataset'). We will generate it in the setup step.",setupSteps:["1. Install Python 3.10+ from python.org (check 'Add to PATH' during install)","2. Open terminal/command prompt","3. Create a project folder: mkdir sales-analysis && cd sales-analysis","4. Create virtual environment: python -m venv venv","5. Activate: Windows: venv\\Scripts\\activate | Mac/Linux: source venv/bin/activate","6. Install packages: pip install pandas matplotlib seaborn numpy","7. Create a file named generate_data.py (to create sample data)","8. Create a file named analysis.py (the main analysis script)","9. Run generate_data.py first to create the CSV, then run analysis.py"],code:`# generate_data.py - Run this first to create sample data
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

np.random.seed(42)

# Generate 1000 sales records
n = 1000
products = ["Laptop", "Phone", "Tablet", "Headphones", "Speaker",
            "Camera", "Watch", "Charger", "Cable", "Mouse"]
categories = ["Electronics", "Electronics", "Electronics", "Audio",
              "Audio", "Electronics", "Wearable", "Accessory",
              "Accessory", "Accessory"]
regions = ["North", "South", "East", "West", "Central"]

data = {
    "order_id": range(1, n+1),
    "date": [datetime(2024, 1, 1) + timedelta(days=np.random.randint(0, 365))
             for _ in range(n)],
    "product": np.random.choice(products, n),
    "category": np.random.choice(categories, n),
    "region": np.random.choice(regions, n),
    "quantity": np.random.randint(1, 10, n),
    "unit_price": np.random.uniform(10, 1000, n).round(2),
    "customer_type": np.random.choice(["New", "Returning"], n)
}
data["revenue"] = (data["quantity"] * data["unit_price"]).round(2)

df = pd.DataFrame(data)
df.to_csv("sales_data.csv", index=False)
print(f"Generated {len(df)} sales records -> sales_data.csv")`,codeExplanation:"This script generates 1000 realistic sales records with random dates, products, regions, quantities, and prices. It saves the data as a CSV file that the analysis script will load.",runSteps:["1. In terminal: python generate_data.py (creates sales_data.csv)","2. Then: python analysis.py (runs the analysis and shows charts)","3. Charts will appear in separate windows — close them to see the next one","4. The summary report prints in the terminal"],expectedOutput:"You will see a sales summary with total revenue, top products, monthly trends chart, regional comparison bar chart, and a category breakdown pie chart.",enhancements:["Add a filter to analyze specific months or regions","Export results to an Excel file with multiple sheets","Build an interactive dashboard using Plotly or Streamlit","Add customer segmentation analysis"]},{id:"covid-data-tracker",title:"COVID-19 Data Tracker",category:"Data Visualization",icon:"Activity",description:"Track COVID-19 cases, deaths, and vaccinations across countries using public API data. Visualize trends over time.",difficulty:"Intermediate",estimatedTime:"3-4 hours",technologies:["Python","Pandas","Matplotlib","Requests"],objectives:["Fetch COVID-19 data from a public API","Clean and process time-series data","Track cases and deaths by country","Visualize trends with line and bar charts","Create a comparative analysis between countries"],dataset:"Public COVID-19 API (disease.sh or similar) — fetched programmatically. No manual download needed.",setupSteps:["1. Install Python 3.10+ from python.org","2. Open terminal","3. mkdir covid-tracker && cd covid-tracker","4. python -m venv venv && activate it (see project 1 for steps)","5. pip install pandas matplotlib requests","6. Create covid_tracker.py","7. Run: python covid_tracker.py"],code:`import requests
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Fetch COVID data from public API
url = "https://disease.sh/v3/covid-19/historical?lastdays=365"
response = requests.get(url, timeout=10)
data = response.json()

# Extract data for specific countries
countries = ["USA", "India", "Brazil", "UK", "Germany"]
records = []

for country_data in data:
    if country_data.get("country") in countries:
        country = country_data["country"]
        timeline = country_data["timeline"]["cases"]
        for date, cases in timeline.items():
            records.append({
                "country": country,
                "date": pd.to_datetime(date),
                "cases": cases
            })

df = pd.DataFrame(records)
df = df.sort_values(["country", "date"])
df["daily_cases"] = df.groupby("country")["cases"].diff().fillna(0)

# Analysis
print("=== COVID-19 Summary ===")
print(f"Total records: {len(df)}")
print(f"Countries: {df['country'].unique()}")
print(df.groupby("country")["daily_cases"].agg(["mean", "max", "sum"]))

# Visualize
fig, axes = plt.subplots(2, 1, figsize=(14, 10))

# Cumulative cases over time
for country in countries:
    country_df = df[df["country"] == country]
    axes[0].plot(country_df["date"], country_df["cases"],
                 label=country, linewidth=2)
axes[0].set_title("Cumulative COVID-19 Cases by Country")
axes[0].set_xlabel("Date")
axes[0].set_ylabel("Total Cases")
axes[0].legend()
axes[0].grid(True, alpha=0.3)

# 7-day moving average of daily cases
for country in countries:
    country_df = df[df["country"] == country]
    rolling = country_df["daily_cases"].rolling(7).mean()
    axes[1].plot(country_df["date"], rolling, label=country, linewidth=1.5)
axes[1].set_title("7-Day Moving Average of Daily Cases")
axes[1].set_xlabel("Date")
axes[1].set_ylabel("Daily Cases (7-day avg)")
axes[1].legend()
axes[1].grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig("covid_dashboard.png", dpi=200)
plt.show()`,codeExplanation:"This script fetches real COVID-19 data from a public API, extracts cases for five countries, calculates daily new cases, and creates a two-panel chart showing cumulative cases and a 7-day moving average of daily cases.",runSteps:["1. Make sure you have an internet connection (the script fetches data from an API)","2. Run: python covid_tracker.py","3. The chart appears in a window and is also saved as covid_dashboard.png","4. Summary statistics print in the terminal"],expectedOutput:"A two-panel chart: top shows cumulative cases for 5 countries over the past year, bottom shows 7-day moving average of daily new cases. Terminal shows summary statistics.",enhancements:["Add vaccination data to the analysis","Create an interactive map visualization","Build a web app with Streamlit or Flask","Add prediction/forecasting using simple models"]},{id:"stock-price-analyzer",title:"Stock Price Analyzer",category:"Financial Analysis",icon:"TrendingUp",description:"Download stock price data, calculate moving averages, analyze returns, and visualize price trends with technical indicators.",difficulty:"Intermediate",estimatedTime:"3 hours",technologies:["Python","Pandas","Matplotlib","yfinance"],objectives:["Download historical stock prices using yfinance","Calculate daily returns and cumulative returns","Compute moving averages (SMA, EMA)","Calculate volatility and risk metrics","Visualize price trends with technical indicators"],dataset:"Stock data fetched using yfinance library (free). No manual download needed — requires internet.",setupSteps:["1. Install Python 3.10+ from python.org","2. mkdir stock-analyzer && cd stock-analyzer","3. python -m venv venv && activate it","4. pip install pandas matplotlib yfinance numpy","5. Create stock_analyzer.py","6. Run: python stock_analyzer.py"],code:`import yfinance as yf
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Download stock data
ticker = "AAPL"
stock = yf.Ticker(ticker)
df = stock.history(period="2y")  # 2 years of data

print(f"Downloaded {len(df)} days of {ticker} data")
print(df.head())

# Calculate moving averages
df["SMA_20"] = df["Close"].rolling(window=20).mean()
df["SMA_50"] = df["Close"].rolling(window=50).mean()
df["EMA_12"] = df["Close"].ewm(span=12).mean()

# Calculate returns
df["daily_return"] = df["Close"].pct_change()
df["cumulative_return"] = (1 + df["daily_return"]).cumprod() - 1

# Calculate volatility (30-day rolling standard deviation)
df["volatility"] = df["daily_return"].rolling(30).std() * np.sqrt(252)

# Bollinger Bands
df["BB_middle"] = df["Close"].rolling(20).mean()
df["BB_upper"] = df["BB_middle"] + 2 * df["Close"].rolling(20).std()
df["BB_lower"] = df["BB_middle"] - 2 * df["Close"].rolling(20).std()

# Analysis
print(f"\\n=== {ticker} Analysis ===")
print(f"Current Price: \${df['Close'][-1]:.2f}")
print(f"52-week High: \${df['Close'].max():.2f}")
print(f"52-week Low: \${df['Close'].min():.2f}")
print(f"Total Return: {df['cumulative_return'][-1]*100:.2f}%")
print(f"Annual Volatility: {df['volatility'][-1]*100:.2f}%")
print(f"Avg Daily Return: {df['daily_return'].mean()*100:.4f}%")
print(f"Sharpe Ratio (approx): "
      f"{df['daily_return'].mean() / df['daily_return'].std() * np.sqrt(252):.2f}")

# Visualize
fig, axes = plt.subplots(3, 1, figsize=(14, 12))

# Price with moving averages and Bollinger Bands
axes[0].plot(df.index, df["Close"], label="Close", color="black", linewidth=1)
axes[0].plot(df.index, df["SMA_20"], label="SMA 20", alpha=0.7)
axes[0].plot(df.index, df["SMA_50"], label="SMA 50", alpha=0.7)
axes[0].fill_between(df.index, df["BB_upper"], df["BB_lower"],
                     alpha=0.1, color="blue", label="Bollinger Bands")
axes[0].set_title(f"{ticker} Stock Price with Indicators")
axes[0].legend()
axes[0].grid(True, alpha=0.3)

# Daily returns
axes[1].plot(df.index, df["daily_return"], color="blue", alpha=0.5)
axes[1].axhline(y=0, color="black", linewidth=0.5)
axes[1].set_title("Daily Returns")
axes[1].grid(True, alpha=0.3)

# Cumulative returns
axes[2].plot(df.index, df["cumulative_return"] * 100, color="green")
axes[2].fill_between(df.index, 0, df["cumulative_return"] * 100,
                     alpha=0.2, color="green")
axes[2].set_title("Cumulative Return (%)")
axes[2].set_ylabel("Return %")
axes[2].grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig("stock_analysis.png", dpi=200)
plt.show()`,codeExplanation:"This script downloads 2 years of Apple stock data, calculates moving averages (SMA and EMA), Bollinger Bands, daily returns, cumulative returns, volatility, and Sharpe ratio. It produces a 3-panel chart showing price with indicators, daily returns, and cumulative return.",runSteps:["1. Run: python stock_analyzer.py (requires internet for data download)","2. Terminal shows analysis summary (price, return, volatility, Sharpe ratio)","3. A 3-panel chart appears: price + indicators, daily returns, cumulative return","4. Chart is also saved as stock_analysis.png"],expectedOutput:"Terminal shows current price, 52-week high/low, total return percentage, annual volatility, and Sharpe ratio. Charts show price trends with technical indicators.",enhancements:["Compare multiple stocks side by side","Add buy/sell signals based on moving average crossovers","Build a portfolio tracker with multiple stocks","Add a simple price prediction model"]},{id:"weather-data-analysis",title:"Weather Data Analysis",category:"Data Analysis",icon:"CloudSun",description:"Analyze weather patterns using historical temperature, rainfall, and humidity data. Find seasonal trends and anomalies.",difficulty:"Beginner",estimatedTime:"2 hours",technologies:["Python","Pandas","Matplotlib","Seaborn"],objectives:["Generate and work with time-series weather data","Analyze seasonal patterns in temperature and rainfall","Identify weather anomalies and extreme events","Create multi-variable visualizations","Calculate monthly and seasonal statistics"],dataset:"Generated programmatically (synthetic weather data simulating a full year). You can also use real data from NOAA or OpenWeatherMap API.",setupSteps:["1. Install Python 3.10+","2. mkdir weather-analysis && cd weather-analysis","3. python -m venv venv && activate it","4. pip install pandas matplotlib seaborn numpy","5. Create weather_analysis.py","6. Run: python weather_analysis.py"],code:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

np.random.seed(42)

# Generate synthetic weather data for one year
dates = pd.date_range("2024-01-01", "2024-12-31", freq="D")
n = len(dates)

# Simulate seasonal temperature (Northern Hemisphere)
day_of_year = np.arange(n)
base_temp = 20 + 15 * np.sin(2 * np.pi * (day_of_year - 80) / 365)
temperature = base_temp + np.random.normal(0, 3, n)

# Simulate rainfall (more in monsoon months)
rainfall = np.zeros(n)
for i in range(n):
    month = dates[i].month
    if month in [6, 7, 8, 9]:  # Monsoon
        rainfall[i] = max(0, np.random.exponential(15))
    else:
        rainfall[i] = max(0, np.random.exponential(2))

# Humidity correlated with rainfall
humidity = 50 + rainfall * 0.5 + np.random.normal(0, 10, n)
humidity = np.clip(humidity, 20, 100)

df = pd.DataFrame({
    "date": dates,
    "temperature": temperature.round(1),
    "rainfall": rainfall.round(1),
    "humidity": humidity.round(1)
})
df["month"] = df["date"].dt.month
df["month_name"] = df["date"].dt.month_name()
df["season"] = df["month"].map({
    12: "Winter", 1: "Winter", 2: "Winter",
    3: "Spring", 4: "Spring", 5: "Spring",
    6: "Summer", 7: "Summer", 8: "Summer",
    9: "Autumn", 10: "Autumn", 11: "Autumn"
})

# Analysis
print("=== Weather Analysis Summary ===")
print(f"\\nTemperature: mean={df['temperature'].mean():.1f}°C, "
      f"min={df['temperature'].min():.1f}°C, max={df['temperature'].max():.1f}°C")
print(f"\\nTotal Rainfall: {df['rainfall'].sum():.1f} mm")
print(f"\\nMonthly Statistics:")
print(df.groupby("month_name")[["temperature", "rainfall", "humidity"]].mean()
      .round(1))

# Find hottest and coldest days
hottest = df.loc[df["temperature"].idxmax()]
coldest = df.loc[df["temperature"].idxmin()]
print(f"\\nHottest day: {hottest['date'].date()} at {hottest['temperature']}°C")
print(f"Coldest day: {coldest['date'].date()} at {coldest['temperature']}°C")
print(f"Rainy days (>10mm): {(df['rainfall'] > 10).sum()}")

# Visualize
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Temperature over time
axes[0, 0].plot(df["date"], df["temperature"], alpha=0.5, color="orange")
axes[0, 0].plot(df["date"], df["temperature"].rolling(7).mean(),
                color="red", linewidth=2, label="7-day avg")
axes[0, 0].set_title("Temperature Over the Year")
axes[0, 0].set_ylabel("Temperature (°C)")
axes[0, 0].legend()

# Rainfall by month
monthly_rain = df.groupby("month_name")["rainfall"].sum()
monthly_rain = monthly_rain.reindex([
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
])
axes[0, 1].bar(range(12), monthly_rain, color="skyblue")
axes[0, 1].set_xticks(range(12))
axes[0, 1].set_xticklabels([m[:3] for m in monthly_rain.index], rotation=45)
axes[0, 1].set_title("Total Rainfall by Month")
axes[0, 1].set_ylabel("Rainfall (mm)")

# Temperature distribution by season
sns.boxplot(data=df, x="season", y="temperature", ax=axes[1, 0],
            order=["Winter", "Spring", "Summer", "Autumn"])
axes[1, 0].set_title("Temperature Distribution by Season")

# Temperature vs Humidity scatter
axes[1, 1].scatter(df["temperature"], df["humidity"],
                   c=df["rainfall"], cmap="Blues", alpha=0.6)
axes[1, 1].set_xlabel("Temperature (°C)")
axes[1, 1].set_ylabel("Humidity (%)")
axes[1, 1].set_title("Temperature vs Humidity (color = rainfall)")

plt.tight_layout()
plt.savefig("weather_analysis.png", dpi=200)
plt.show()`,codeExplanation:"This script generates a year of synthetic daily weather data with seasonal temperature patterns, monsoon rainfall, and correlated humidity. It calculates monthly statistics, finds extreme days, and creates a 4-panel dashboard showing temperature trends, monthly rainfall, seasonal distributions, and temperature-humidity relationships.",runSteps:["1. Run: python weather_analysis.py","2. Terminal displays temperature summary, rainfall totals, monthly statistics, and extreme days","3. A 4-panel dashboard appears: temperature trend, rainfall by month, seasonal box plot, and temp-humidity scatter","4. Dashboard is saved as weather_analysis.png"],expectedOutput:"Terminal shows mean/min/max temperature, total rainfall, monthly averages, hottest/coldest days. Dashboard shows temperature trend line, monthly rainfall bars, seasonal temperature distribution, and temperature-humidity scatter.",enhancements:["Use real weather data from OpenWeatherMap API","Add forecasting for future temperatures","Create an interactive dashboard with Plotly","Analyze multi-year trends and climate change indicators"]},{id:"customer-segmentation",title:"Customer Segmentation Analysis",category:"Machine Learning",icon:"Users",description:"Segment customers based on purchasing behavior using RFM analysis and K-Means clustering. Identify customer groups for targeted marketing.",difficulty:"Advanced",estimatedTime:"4-5 hours",technologies:["Python","Pandas","Scikit-learn","Matplotlib","Seaborn"],objectives:["Generate customer transaction data","Perform RFM (Recency, Frequency, Monetary) analysis","Apply K-Means clustering to segment customers","Visualize segments and their characteristics","Generate marketing recommendations for each segment"],dataset:"Generated programmatically — synthetic customer transaction data simulating an e-commerce store.",setupSteps:["1. Install Python 3.10+","2. mkdir customer-segmentation && cd customer-segmentation","3. python -m venv venv && activate it","4. pip install pandas matplotlib seaborn scikit-learn numpy","5. Create segmentation.py","6. Run: python segmentation.py"],code:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

np.random.seed(42)

# Generate customer transaction data
n_customers = 500
n_transactions = 3000

customer_ids = np.random.randint(1, n_customers + 1, n_transactions)
dates = pd.date_range("2024-01-01", "2024-12-31").to_series()
transaction_dates = np.random.choice(dates, n_transactions)
amounts = np.random.exponential(50, n_transactions).round(2)

transactions = pd.DataFrame({
    "customer_id": customer_ids,
    "date": transaction_dates,
    "amount": amounts
})

# RFM Analysis
snapshot_date = transactions["date"].max() + pd.Timedelta(days=1)

rfm = transactions.groupby("customer_id").agg({
    "date": lambda x: (snapshot_date - x.max()).days,  # Recency
    "customer_id": "count",                             # Frequency
    "amount": "sum"                                     # Monetary
}).rename(columns={
    "date": "recency",
    "customer_id": "frequency",
    "amount": "monetary"
})

print("=== RFM Summary ===")
print(rfm.describe())

# Scale data for clustering
scaler = StandardScaler()
rfm_scaled = scaler.fit_transform(rfm)

# Find optimal number of clusters (Elbow method)
inertias = []
for k in range(1, 11):
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(rfm_scaled)
    inertias.append(kmeans.inertia_)

# Apply K-Means with 4 clusters
kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
rfm["cluster"] = kmeans.fit_predict(rfm_scaled)

# Analyze clusters
cluster_summary = rfm.groupby("cluster").agg({
    "recency": "mean",
    "frequency": "mean",
    "monetary": "mean",
    "cluster": "count"
}).rename(columns={"cluster": "count"})

print("\\n=== Cluster Summary ===")
print(cluster_summary)

# Name the segments
segment_names = {
    0: "At-Risk",       # High recency, low frequency
    1: "Champions",     # Low recency, high frequency, high monetary
    2: "New Customers", # Low recency, low frequency
    3: "Loyal"          # Medium recency, medium frequency
}
rfm["segment"] = rfm["cluster"].map(segment_names)

print("\\n=== Segment Distribution ===")
print(rfm["segment"].value_counts())

# Visualize
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Elbow plot
axes[0, 0].plot(range(1, 11), inertias, "bo-")
axes[0, 0].set_xlabel("Number of Clusters")
axes[0, 0].set_ylabel("Inertia")
axes[0, 0].set_title("Elbow Method for Optimal K")

# Scatter: Recency vs Frequency
sns.scatterplot(data=rfm, x="recency", y="frequency",
                hue="segment", ax=axes[0, 1], palette="Set2")
axes[0, 1].set_title("Recency vs Frequency by Segment")

# Scatter: Frequency vs Monetary
sns.scatterplot(data=rfm, x="frequency", y="monetary",
                hue="segment", ax=axes[1, 0], palette="Set2")
axes[1, 0].set_title("Frequency vs Monetary by Segment")

# Segment counts
rfm["segment"].value_counts().plot(kind="bar", ax=axes[1, 1],
                                    color="teal")
axes[1, 1].set_title("Customer Count by Segment")
axes[1, 1].set_ylabel("Count")

plt.tight_layout()
plt.savefig("customer_segments.png", dpi=200)
plt.show()`,codeExplanation:"This script generates customer transactions, performs RFM (Recency, Frequency, Monetary) analysis to quantify customer behavior, uses the Elbow Method to find the optimal number of clusters, applies K-Means clustering to segment customers into groups (Champions, Loyal, New, At-Risk), and visualizes the segments with multiple charts.",runSteps:["1. Run: python segmentation.py","2. Terminal shows RFM summary statistics, cluster summary with mean values per segment, and segment distribution","3. A 4-panel dashboard appears: Elbow plot, Recency vs Frequency scatter, Frequency vs Monetary scatter, and segment count bar chart","4. Dashboard is saved as customer_segments.png"],expectedOutput:"Terminal shows RFM statistics and cluster summaries. Dashboard shows the Elbow Method chart for optimal cluster count, two scatter plots showing customer segments, and a bar chart of segment sizes.",enhancements:["Add demographic data (age, location) to enrich segments","Implement hierarchical clustering and compare with K-Means","Create a Streamlit web app for interactive segmentation","Add time-based cohort analysis"]},{id:"web-scraping-ecommerce",title:"E-Commerce Price Scraper",category:"Web Scraping",icon:"Globe",description:"Build a web scraper to extract product names, prices, and ratings from an e-commerce website. Track price changes over time.",difficulty:"Intermediate",estimatedTime:"3 hours",technologies:["Python","BeautifulSoup","Requests","Pandas"],objectives:["Scrape product data from a website","Extract product names, prices, and ratings","Handle pagination (multiple pages)","Save data to CSV for analysis","Clean and analyze scraped data"],dataset:"Scraped from a sample e-commerce website (books.toscrape.com — a site specifically designed for scraping practice).",setupSteps:["1. Install Python 3.10+","2. mkdir price-scraper && cd price-scraper","3. python -m venv venv && activate it","4. pip install requests beautifulsoup4 pandas","5. Create scraper.py","6. Run: python scraper.py"],code:`import requests
from bs4 import BeautifulSoup
import pandas as pd
import time

# Scrape books.toscrape.com (a practice site for web scraping)
base_url = "https://books.toscrape.com/catalogue/page-{}.html"
all_books = []

for page in range(1, 11):  # scrape 10 pages (200 books)
    url = base_url.format(page)
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    books = soup.find_all("article", class_="product_pod")

    for book in books:
        title = book.find("h3").find("a")["title"]
        price = book.find("p", class_="price_color").text.strip()
        price = float(price.replace("£", "").replace("Â", ""))

        rating_class = book.find("p", class_="star-rating")["class"]
        rating = rating_class[1]  # One, Two, Three, Four, Five
        rating_map = {"One": 1, "Two": 2, "Three": 3,
                      "Four": 4, "Five": 5}
        rating_num = rating_map.get(rating, 0)

        availability = book.find("p", class_="instock").text.strip()

        all_books.append({
            "title": title,
            "price": price,
            "rating": rating_num,
            "availability": availability
        })

    print(f"Scraped page {page}: {len(books)} books")
    time.sleep(1)  # be polite

# Create DataFrame
df = pd.DataFrame(all_books)
print(f"\\nTotal books scraped: {len(df)}")

# Save to CSV
df.to_csv("books_data.csv", index=False)
print("Saved to books_data.csv")

# Analysis
print("\\n=== Scraped Data Analysis ===")
print(f"Average price: £{df['price'].mean():.2f}")
print(f"Price range: £{df['price'].min():.2f} - £{df['price'].max():.2f}")
print(f"Average rating: {df['rating'].mean():.1f} stars")
print(f"\\nRating distribution:")
print(df["rating"].value_counts().sort_index())
print(f"\\nTop 5 most expensive books:")
print(df.nlargest(5, "price")[["title", "price", "rating"]])
print(f"\\nTop 5 cheapest books:")
print(df.nsmallest(5, "price")[["title", "price", "rating"]])`,codeExplanation:"This script scrapes 10 pages (200 books) from books.toscrape.com — a practice site designed for learning web scraping. It extracts title, price, rating (converted from text to number), and availability. It saves the data to CSV and performs basic analysis including price statistics and top/bottom books by price.",runSteps:["1. Run: python scraper.py (requires internet connection)","2. Terminal shows progress: 'Scraped page 1: 20 books' for each page","3. After scraping, analysis results print in terminal","4. Data is saved to books_data.csv in the same folder — open it in Excel to view"],expectedOutput:"Terminal shows scraping progress for 10 pages, total books scraped, average price and rating, rating distribution, and top 5 most expensive and cheapest books. A CSV file with all 200 books is created.",enhancements:["Scrape all 50 pages (1000 books) and add category filtering","Schedule the scraper to run daily and track price changes","Build a price drop alert system","Create a visualization of price vs. rating"]},{id:"movie-database-analysis",title:"Movie Database Analysis",category:"Data Analysis",icon:"Film",description:"Analyze a movie dataset to find trends in genres, ratings, box office performance, and director success patterns.",difficulty:"Intermediate",estimatedTime:"3 hours",technologies:["Python","Pandas","Matplotlib","Seaborn"],objectives:["Generate and analyze movie data","Find highest-rated and highest-grossing movies","Analyze genre popularity over years","Identify the most successful directors","Explore relationships between budget, rating, and revenue"],dataset:"Generated programmatically. Alternatively, use the TMDB 5000 dataset from Kaggle for real data.",setupSteps:["1. Install Python 3.10+","2. mkdir movie-analysis && cd movie-analysis","3. python -m venv venv && activate it","4. pip install pandas matplotlib seaborn numpy","5. Create movie_analysis.py","6. Run: python movie_analysis.py"],code:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

np.random.seed(42)

# Generate movie dataset
n = 500
genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi",
          "Romance", "Thriller", "Animation"]
directors = ["Director A", "Director B", "Director C", "Director D",
             "Director E", "Director F", "Director G", "Director H",
             "Director I", "Director J"]

df = pd.DataFrame({
    "title": [f"Movie {i}" for i in range(1, n+1)],
    "genre": np.random.choice(genres, n),
    "director": np.random.choice(directors, n),
    "year": np.random.randint(2000, 2025, n),
    "rating": np.clip(np.random.normal(6.5, 1.5, n), 1, 10).round(1),
    "budget_m": np.random.exponential(50, n).round(1),
    "revenue_m": np.zeros(n)
})
# Revenue correlated with budget and rating
df["revenue_m"] = (df["budget_m"] * np.random.uniform(0.5, 3, n) *
                   (df["rating"] / 10)).round(1)
df["profit_m"] = (df["revenue_m"] - df["budget_m"]).round(1)
df["roi"] = (df["profit_m"] / df["budget_m"] * 100).round(1)

# Analysis
print("=== Movie Database Analysis ===")
print(f"Total movies: {len(df)}")
print(f"\\nGenre distribution:")
print(df["genre"].value_counts())

print(f"\\nTop 10 highest-rated movies:")
print(df.nlargest(10, "rating")[["title", "genre", "rating", "year"]])

print(f"\\nTop 10 highest-grossing movies:")
print(df.nlargest(10, "revenue_m")[["title", "genre",
      "revenue_m", "profit_m"]])

print(f"\\nMost successful directors (by avg revenue):")
print(df.groupby("director")["revenue_m"].agg(["mean", "count"])
      .round(1).sort_values("mean", ascending=False).head())

print(f"\\nAverage rating by genre:")
print(df.groupby("genre")["rating"].mean().round(2).sort_values(
    ascending=False))

print(f"\\nProfit statistics:")
print(f"Profitable movies: {(df['profit_m'] > 0).sum()} "
      f"({(df['profit_m'] > 0).mean()*100:.1f}%)")
print(f"Average ROI: {df['roi'].mean():.1f}%")

# Visualize
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Rating distribution by genre
sns.boxplot(data=df, x="genre", y="rating", ax=axes[0, 0])
axes[0, 0].set_xticklabels(axes[0, 0].get_xticklabels(), rotation=45)
axes[0, 0].set_title("Rating Distribution by Genre")

# Budget vs Revenue scatter
axes[0, 1].scatter(df["budget_m"], df["revenue_m"],
                   c=df["rating"], cmap="viridis", alpha=0.6)
axes[0, 1].set_xlabel("Budget ($M)")
axes[0, 1].set_ylabel("Revenue ($M)")
axes[0, 1].set_title("Budget vs Revenue (color = rating)")

# Movies per year
df["year"].value_counts().sort_index().plot(kind="bar",
    ax=axes[1, 0], color="coral")
axes[1, 0].set_title("Movies Released per Year")
axes[1, 0].set_xlabel("Year")

# Genre profitability
df.groupby("genre")["profit_m"].mean().sort_values().plot(kind="barh",
    ax=axes[1, 1], color="teal")
axes[1, 1].set_title("Average Profit by Genre")
axes[1, 1].set_xlabel("Profit ($M)")

plt.tight_layout()
plt.savefig("movie_analysis.png", dpi=200)
plt.show()`,codeExplanation:"This script generates 500 movies with genres, directors, ratings, budgets, and revenues (with revenue correlated to budget and rating). It analyzes top-rated and top-grossing movies, director success, genre popularity, profitability, and creates a 4-panel dashboard with rating distributions, budget-revenue scatter, release trends, and genre profitability.",runSteps:["1. Run: python movie_analysis.py","2. Terminal shows genre distribution, top 10 movies by rating and revenue, best directors, and profit statistics","3. A 4-panel dashboard appears: rating by genre, budget vs revenue scatter, movies per year, and profit by genre","4. Dashboard saved as movie_analysis.png"],expectedOutput:"Terminal shows movie statistics including top-rated and top-grossing films, best directors, and profitability. Dashboard shows rating distributions, budget-revenue relationship, release trends, and genre profitability comparison.",enhancements:["Use real data from the TMDB or IMDB dataset on Kaggle","Add actor/actress analysis","Build a recommendation system based on genre preferences","Create an interactive dashboard with Plotly or Streamlit"]},{id:"hr-analytics-dashboard",title:"HR Analytics Dashboard",category:"Business Intelligence",icon:"Briefcase",description:"Analyze employee data to understand attrition, salary distribution, performance, and departmental insights. Build an HR analytics report.",difficulty:"Intermediate",estimatedTime:"3-4 hours",technologies:["Python","Pandas","Matplotlib","Seaborn"],objectives:["Generate realistic employee data","Analyze attrition rates by department and factors","Examine salary distribution and gender pay gap","Evaluate performance ratings across the organization","Create a comprehensive HR dashboard"],dataset:"Generated programmatically. Alternatively, use IBM HR Analytics Employee Attrition dataset from Kaggle.",setupSteps:["1. Install Python 3.10+","2. mkdir hr-analytics && cd hr-analytics","3. python -m venv venv && activate it","4. pip install pandas matplotlib seaborn numpy","5. Create hr_analysis.py","6. Run: python hr_analysis.py"],code:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

np.random.seed(42)
n = 1000

departments = ["Sales", "Engineering", "HR", "Marketing",
               "Finance", "Operations"]
genders = ["Male", "Female"]
education = ["Bachelor", "Master", "PhD", "Diploma"]

df = pd.DataFrame({
    "employee_id": range(1, n+1),
    "department": np.random.choice(departments, n),
    "gender": np.random.choice(genders, n),
    "age": np.random.randint(22, 60, n),
    "education": np.random.choice(education, n, p=[0.4, 0.3, 0.1, 0.2]),
    "years_at_company": np.random.randint(0, 20, n),
    "salary": np.zeros(n),
    "performance_rating": np.random.randint(1, 6, n),
    "satisfaction_score": np.clip(np.random.normal(3.5, 1, n), 1, 5).round(1),
    "attrition": np.random.choice(["Yes", "No"], n, p=[0.15, 0.85])
})

# Salary based on department, years, education
base_salary = {"Sales": 50000, "Engineering": 70000, "HR": 55000,
               "Marketing": 58000, "Finance": 65000, "Operations": 48000}
edu_bonus = {"Diploma": 0, "Bachelor": 5000, "Master": 10000, "PhD": 15000}
df["salary"] = df.apply(lambda r: base_salary[r["department"]] +
                        edu_bonus[r["education"]] +
                        r["years_at_company"] * 2000 +
                        np.random.normal(0, 5000), axis=1).round(0)

# Analysis
print("=== HR Analytics Summary ===")
print(f"Total employees: {len(df)}")
print(f"Attrition rate: {(df['attrition']=='Yes').mean()*100:.1f}%")

print(f"\\nAttrition by department:")
attrition_dept = df[df["attrition"]=="Yes"].groupby(
    "department").size() / df.groupby("department").size() * 100
print(attrition_dept.round(1).sort_values(ascending=False))

print(f"\\nSalary statistics:")
print(df.groupby("department")["salary"].agg(
    ["mean", "median", "min", "max"]).round(0))

print(f"\\nGender pay gap by department:")
gender_pay = df.groupby(["department", "gender"])["salary"].mean().unstack()
gender_pay["gap"] = gender_pay["Male"] - gender_pay["Female"]
print(gender_pay[["Male", "Female", "gap"]].round(0))

print(f"\\nAverage performance by department:")
print(df.groupby("department")["performance_rating"].mean().round(2))

print(f"\\nSatisfaction vs Attrition:")
print(df.groupby("attrition")["satisfaction_score"].mean().round(2))

# Visualize
fig, axes = plt.subplots(2, 3, figsize(18, 10))

# Attrition by department
attrition_dept.sort_values().plot(kind="barh", ax=axes[0, 0],
    color="salmon")
axes[0, 0].set_title("Attrition Rate by Department (%)")
axes[0, 0].set_xlabel("Attrition %")

# Salary distribution
for dept in departments:
    data = df[df["department"]==dept]["salary"]
    axes[0, 1].hist(data, alpha=0.5, label=dept, bins=20)
axes[0, 1].set_title("Salary Distribution by Department")
axes[0, 1].legend(fontsize=7)

# Age vs Salary
axes[0, 2].scatter(df["age"], df["salary"], alpha=0.3, color="teal")
axes[0, 2].set_xlabel("Age")
axes[0, 2].set_ylabel("Salary")
axes[0, 2].set_title("Age vs Salary")

# Performance by department
sns.boxplot(data=df, x="department", y="performance_rating", ax=axes[1, 0])
axes[1, 0].set_xticklabels(axes[1, 0].get_xticklabels(), rotation=45)
axes[1, 0].set_title("Performance by Department")

# Satisfaction vs Attrition
sns.boxplot(data=df, x="attrition", y="satisfaction_score", ax=axes[1, 1])
axes[1, 1].set_title("Satisfaction Score vs Attrition")

# Years at company distribution
df["years_at_company"].hist(bins=20, ax=axes[1, 2], color="coral",
    edgecolor="white")
axes[1, 2].set_title("Years at Company Distribution")
axes[1, 2].set_xlabel("Years")

plt.tight_layout()
plt.savefig("hr_dashboard.png", dpi=200)
plt.show()`,codeExplanation:"This script generates 1000 employee records with realistic salary calculations based on department, education, and tenure. It analyzes attrition rates, salary distributions, gender pay gap, performance ratings, and satisfaction scores. The dashboard includes 6 panels covering all key HR metrics.",runSteps:["1. Run: python hr_analysis.py","2. Terminal shows overall attrition rate, attrition by department, salary statistics, gender pay gap, performance averages, and satisfaction vs attrition","3. A 6-panel HR dashboard appears with charts for all key metrics","4. Dashboard saved as hr_dashboard.png"],expectedOutput:"Terminal shows HR statistics including attrition rates, salary analysis, gender pay gap, and satisfaction metrics. Dashboard shows 6 charts: attrition by department, salary distributions, age-salary scatter, performance box plots, satisfaction vs attrition, and tenure distribution.",enhancements:["Use real HR data from Kaggle (IBM HR Analytics)","Add predictive modeling for attrition risk","Build an interactive Power BI or Tableau dashboard","Add employee segmentation based on performance and satisfaction"]},{id:"banking-data-analysis",title:"Banking Transaction Analysis",category:"Financial Analysis",icon:"CreditCard",description:"Analyze banking transaction data to detect spending patterns, identify fraud indicators, and understand customer behavior.",difficulty:"Advanced",estimatedTime:"4-5 hours",technologies:["Python","Pandas","Matplotlib","Seaborn","NumPy"],objectives:["Generate realistic banking transaction data","Analyze spending patterns by category and time","Detect anomalous transactions (potential fraud)","Identify customer segments based on spending","Create a financial analysis dashboard"],dataset:"Generated programmatically — synthetic banking transactions with categories, amounts, and timestamps.",setupSteps:["1. Install Python 3.10+","2. mkdir banking-analysis && cd banking-analysis","3. python -m venv venv && activate it","4. pip install pandas matplotlib seaborn numpy","5. Create banking_analysis.py","6. Run: python banking_analysis.py"],code:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta

np.random.seed(42)

# Generate banking transactions
n_transactions = 5000
n_customers = 200

categories = ["Groceries", "Dining", "Transport", "Shopping",
              "Entertainment", "Bills", "Healthcare", "Transfer",
              "ATM Withdrawal", "Fuel"]
channels = ["Online", "POS", "ATM", "Mobile", "Branch"]

customer_ids = np.random.randint(1, n_customers+1, n_transactions)
start_date = datetime(2024, 1, 1)
dates = [start_date + timedelta(
    days=np.random.randint(0, 365),
    hours=np.random.randint(0, 24),
    minutes=np.random.randint(0, 60)
) for _ in range(n_transactions)]

# Transaction amounts vary by category
category_amounts = {
    "Groceries": (20, 200, "normal"),
    "Dining": (10, 150, "normal"),
    "Transport": (2, 50, "normal"),
    "Shopping": (50, 1000, "exponential"),
    "Entertainment": (10, 300, "normal"),
    "Bills": (100, 2000, "normal"),
    "Healthcare": (50, 500, "exponential"),
    "Transfer": (100, 5000, "exponential"),
    "ATM Withdrawal": (100, 500, "normal"),
    "Fuel": (20, 100, "normal")
}

amounts = []
cats = np.random.choice(categories, n_transactions)
for cat in cats:
    low, high, dist = category_amounts[cat]
    if dist == "exponential":
        amt = np.random.exponential((low + high) / 2)
    else:
        amt = np.random.normal((low + high) / 2, (high - low) / 4)
    amounts.append(max(low, min(high * 2, amt)))

df = pd.DataFrame({
    "transaction_id": range(1, n_transactions+1),
    "customer_id": customer_ids,
    "date": dates,
    "category": cats,
    "amount": np.round(amounts, 2),
    "channel": np.random.choice(channels, n_transactions),
    "is_fraud": np.zeros(n_transactions, dtype=int)
})

# Inject some fraud transactions (unusual patterns)
fraud_indices = np.random.choice(n_transactions, 50, replace=False)
df.loc[fraud_indices, "amount"] = df.loc[fraud_indices, "amount"] * 5
df.loc[fraud_indices, "category"] = "Shopping"
df.loc[fraud_indices, "channel"] = "Online"
df.loc[fraud_indices, "is_fraud"] = 1

# Add time features
df["hour"] = df["date"].dt.hour
df["day_of_week"] = df["date"].dt.day_name()
df["month"] = df["date"].dt.month

# Analysis
print("=== Banking Transaction Analysis ===")
print(f"Total transactions: {len(df)}")
print(f"Total amount: \${df['amount'].sum():,.2f}")
print(f"Average transaction: \${df['amount'].mean():.2f}")
print(f"Fraud transactions: {df['is_fraud'].sum()} "
      f"({df['is_fraud'].mean()*100:.1f}%)")

print(f"\\nSpending by category:")
print(df.groupby("category")["amount"].agg(["count", "sum", "mean"])
      .round(2).sort_values("sum", ascending=False))

print(f"\\nTransactions by channel:")
print(df["channel"].value_counts())

print(f"\\nTop 10 customers by spending:")
top_customers = df.groupby("customer_id")["amount"].sum().nlargest(10)
print(top_customers.round(2))

# Fraud detection: transactions > 3 std dev from mean
mean_amt = df["amount"].mean()
std_amt = df["amount"].std()
df["is_anomaly"] = (df["amount"] > mean_amt + 3 * std_amt).astype(int)
print(f"\\nAnomalous transactions (>3 std dev): {df['is_anomaly'].sum()}")
print(f"Of which flagged as fraud: "
      f"{(df['is_anomaly'] & df['is_fraud']).sum()}")

# Visualize
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Spending by category
df.groupby("category")["amount"].sum().sort_values().plot(
    kind="barh", ax=axes[0, 0], color="teal")
axes[0, 0].set_title("Total Spending by Category")
axes[0, 0].set_xlabel("Amount ($)")

# Transaction volume by hour
df["hour"].value_counts().sort_index().plot(
    kind="bar", ax=axes[0, 1], color="coral")
axes[0, 1].set_title("Transaction Volume by Hour")
axes[0, 1].set_xlabel("Hour of Day")

# Transaction amount distribution
axes[1, 0].hist(df[df["amount"] < 1000]["amount"], bins=50,
                color="skyblue", edgecolor="white")
axes[1, 0].set_title("Transaction Amount Distribution")
axes[1, 0].set_xlabel("Amount ($)")

# Fraud vs normal amount comparison
sns.boxplot(data=df, x="is_fraud", y="amount", ax=axes[1, 1])
axes[1, 1].set_xticklabels(["Normal", "Fraud"])
axes[1, 1].set_title("Amount: Fraud vs Normal")

plt.tight_layout()
plt.savefig("banking_analysis.png", dpi=200)
plt.show()`,codeExplanation:"This script generates 5000 banking transactions across 200 customers with realistic amounts per category, injects 50 fraud transactions (unusually high online shopping amounts), adds time features for analysis, detects anomalies using standard deviation, and creates a 4-panel dashboard showing spending patterns, transaction timing, amount distributions, and fraud comparison.",runSteps:["1. Run: python banking_analysis.py","2. Terminal shows transaction summary, spending by category, channel distribution, top customers, and fraud/anomaly detection results","3. A 4-panel dashboard appears: spending by category, hourly volume, amount distribution, and fraud vs normal comparison","4. Dashboard saved as banking_analysis.png"],expectedOutput:"Terminal shows total transaction count and amount, fraud rate, category breakdown, channel distribution, top spending customers, and anomaly detection results. Dashboard shows spending patterns, timing, distributions, and fraud indicators.",enhancements:["Implement a proper fraud detection model using Isolation Forest","Add real-time transaction monitoring simulation","Create customer spending profiles and recommendations","Build an interactive Streamlit dashboard for exploration"]},{id:"ipl-cricket-analysis",title:"IPL Cricket Data Analysis",category:"Sports Analytics",icon:"Trophy",description:"Analyze IPL cricket data to find top players, team performance, match outcomes, and statistical insights about the tournament.",difficulty:"Intermediate",estimatedTime:"3-4 hours",technologies:["Python","Pandas","Matplotlib","Seaborn"],objectives:["Generate realistic IPL match and player data","Analyze team performance across seasons","Identify top batsmen and bowlers","Examine win/loss patterns and toss impact","Create a sports analytics dashboard"],dataset:"Generated programmatically. For real data, download IPL datasets from Kaggle (search 'IPL complete dataset').",setupSteps:["1. Install Python 3.10+","2. mkdir ipl-analysis && cd ipl-analysis","3. python -m venv venv && activate it","4. pip install pandas matplotlib seaborn numpy","5. Create ipl_analysis.py","6. Run: python ipl_analysis.py"],code:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

np.random.seed(42)

# Generate IPL match data
teams = ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore",
         "Kolkata Knight Riders", "Delhi Capitals", "Punjab Kings",
         "Rajasthan Royals", "Sunrisers Hyderabad"]
venues = ["Mumbai", "Chennai", "Bangalore", "Kolkata", "Delhi",
          "Punjab", "Jaipur", "Hyderabad"]
player_names = ["Player_" + str(i) for i in range(1, 101)]

n_matches = 300
matches = []
for i in range(n_matches):
    team1, team2 = np.random.choice(teams, 2, replace=False)
    toss_winner = np.random.choice([team1, team2])
    toss_decision = np.random.choice(["bat", "field"], p=[0.3, 0.7])
    winner = np.random.choice([team1, team2, "No Result"], p=[0.48, 0.48, 0.04])
    venue = np.random.choice(venues)
    season = np.random.choice(range(2015, 2025))

    matches.append({
        "match_id": i+1,
        "season": season,
        "team1": team1,
        "team2": team2,
        "toss_winner": toss_winner,
        "toss_decision": toss_decision,
        "winner": winner,
        "venue": venue,
        "player_of_match": np.random.choice(player_names)
    })

df_matches = pd.DataFrame(matches)

# Generate batting statistics
n_batting = 500
batting = pd.DataFrame({
    "player": np.random.choice(player_names, n_batting),
    "match_id": np.random.randint(1, n_matches+1, n_batting),
    "runs": np.random.choice(
        [0, 0, 0, 5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 100],
        n_batting, p=[0.15, 0.15, 0.1, 0.1, 0.1, 0.08, 0.07,
                      0.06, 0.05, 0.04, 0.04, 0.02, 0.02, 0.02]),
    "balls": np.random.randint(1, 70, n_batting),
    "fours": np.random.randint(0, 15, n_batting),
    "sixes": np.random.randint(0, 8, n_batting)
})
batting["strike_rate"] = (batting["runs"] / batting["balls"] * 100).round(1)

# Analysis
print("=== IPL Cricket Analysis ===")
print(f"Total matches: {len(df_matches)}")

# Team performance
team_wins = df_matches[df_matches["winner"] != "No Result"]["winner"].value_counts()
print(f"\\nMost wins by team:")
print(team_wins.head(5))

# Toss impact
toss_winners = df_matches[df_matches["winner"] != "No Result"]
toss_impact = (toss_winners["toss_winner"] == toss_winners["winner"]).mean()
print(f"\\nToss winner also won match: {toss_impact*100:.1f}%")

# Toss decision impact
print(f"\\nWin rate by toss decision:")
for decision in ["bat", "field"]:
    subset = toss_winners[toss_winners["toss_decision"] == decision]
    won = (subset["toss_winner"] == subset["winner"]).mean()
    print(f"  {decision}: {won*100:.1f}%")

# Top batsmen
top_batsmen = batting.groupby("player")["runs"].agg(["sum", "mean", "count"])
top_batsmen = top_batsmen.sort_values("sum", ascending=False).head(10)
print(f"\\nTop 10 batsmen by total runs:")
print(top_batsmen)

# Centuries and fifties
centuries = (batting["runs"] >= 100).sum()
fifties = ((batting["runs"] >= 50) & (batting["runs"] < 100)).sum()
print(f"\\nCenturies: {centuries}, Fifties: {fifties}")

# Highest individual score
highest = batting.loc[batting["runs"].idxmax()]
print(f"Highest score: {highest['runs']} runs")

# Visualize
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Team wins
team_wins.sort_values().plot(kind="barh", ax=axes[0, 0], color="darkblue")
axes[0, 0].set_title("Total Wins by Team")
axes[0, 0].set_xlabel("Wins")

# Matches per season
df_matches["season"].value_counts().sort_index().plot(
    kind="bar", ax=axes[0, 1], color="orange")
axes[0, 1].set_title("Matches per Season")
axes[0, 1].set_xlabel("Season")

# Top batsmen runs
top_batsmen["sum"].sort_values().plot(kind="barh", ax=axes[1, 0],
    color="green")
axes[1, 0].set_title("Top 10 Batsmen by Total Runs")
axes[1, 0].set_xlabel("Runs")

# Run distribution
axes[1, 1].hist(batting["runs"], bins=20, color="purple",
    edgecolor="white")
axes[1, 1].set_title("Distribution of Individual Scores")
axes[1, 1].set_xlabel("Runs")

plt.tight_layout()
plt.savefig("ipl_analysis.png", dpi=200)
plt.show()`,codeExplanation:"This script generates 300 IPL matches and 500 batting performances across 8 teams and 10 seasons. It analyzes team win counts, toss impact on match results, top batsmen by runs, centuries/fifties count, and creates a 4-panel dashboard with team performance, seasonal trends, top batsmen, and score distributions.",runSteps:["1. Run: python ipl_analysis.py","2. Terminal shows total matches, most wins by team, toss impact statistics, top 10 batsmen, and century/fifty counts","3. A 4-panel dashboard appears: team wins bar chart, matches per season, top batsmen, and score distribution","4. Dashboard saved as ipl_analysis.png"],expectedOutput:"Terminal shows team rankings, toss statistics, batting records, and milestone counts. Dashboard shows team performance comparison, seasonal match counts, top run-scorers, and distribution of individual scores.",enhancements:["Use real IPL data from Kaggle for authentic analysis","Add bowling statistics and all-rounder analysis","Build a head-to-head team comparison tool","Create a player performance prediction model"]},{id:"streamlit-dashboard-project",title:"Interactive Data Dashboard with Streamlit",category:"Web Application",icon:"LayoutDashboard",description:"Build a fully interactive web dashboard using Streamlit that lets users upload data, filter, visualize, and download results — all in the browser.",difficulty:"Advanced",estimatedTime:"5-6 hours",technologies:["Python","Streamlit","Pandas","Plotly"],objectives:["Build an interactive web app with Streamlit","Allow users to upload CSV files","Add interactive filters and controls","Create dynamic charts that respond to user input","Enable data download from the app"],dataset:"Users upload their own CSV file, or use the built-in sample data. No pre-download needed.",setupSteps:["1. Install Python 3.10+","2. mkdir streamlit-dashboard && cd streamlit-dashboard","3. python -m venv venv && activate it","4. pip install streamlit pandas plotly","5. Create app.py (the main application file)","6. Run: streamlit run app.py (this starts a local web server)","7. Your browser opens automatically at http://localhost:8501"],code:`import streamlit as st
import pandas as pd
import plotly.express as px
import numpy as np

# Page configuration
st.set_page_config(
    page_title="Data Analysis Dashboard",
    page_icon="📊",
    layout="wide"
)

# Title
st.title("📊 Interactive Data Analysis Dashboard")
st.markdown("Upload your CSV file or use sample data to explore interactively.")

# Sidebar
st.sidebar.header("Settings")

# Data source selection
data_source = st.sidebar.radio(
    "Choose data source:",
    ["Upload CSV", "Use Sample Data"]
)

if data_source == "Upload CSV":
    uploaded_file = st.sidebar.file_uploader(
        "Upload CSV file", type=["csv"])
    if uploaded_file is not None:
        df = pd.read_csv(uploaded_file)
    else:
        st.info("Please upload a CSV file or select 'Use Sample Data'")
        st.stop()
else:
    # Generate sample data
    np.random.seed(42)
    n = 500
    df = pd.DataFrame({
        "product": np.random.choice(
            ["Laptop", "Phone", "Tablet", "Speaker"], n),
        "region": np.random.choice(
            ["North", "South", "East", "West"], n),
        "sales": np.random.exponential(500, n).round(2),
        "quantity": np.random.randint(1, 20, n),
        "date": pd.date_range("2024-01-01", periods=n, freq="D"),
        "rating": np.random.uniform(1, 5, n).round(1)
    })
    st.success("Using sample data (500 records)")

# Display data
st.header("Data Preview")
st.dataframe(df.head(100), use_container_width=True)

# Basic statistics
st.header("Summary Statistics")
col1, col2, col3 = st.columns(3)
col1.metric("Total Rows", len(df))
col2.metric("Total Columns", len(df.columns))
col3.metric("Missing Values", df.isnull().sum().sum())

# Column selector
numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
categorical_cols = df.select_dtypes(
    include=["object"]).columns.tolist()

# Filters
st.header("Filters")
filter_col = st.selectbox(
    "Filter by column:", ["No filter"] + categorical_cols)

if filter_col != "No filter":
    unique_values = df[filter_col].unique()
    selected = st.multiselect(
        f"Select {filter_col} values:", unique_values,
        default=unique_values[:3])
    df_filtered = df[df[filter_col].isin(selected)]
else:
    df_filtered = df.copy()

st.write(f"Showing {len(df_filtered)} of {len(df)} rows")

# Charts
st.header("Visualizations")
col_a, col_b = st.columns(2)

with col_a:
    if numeric_cols:
        x_col = st.selectbox("X axis:", df.columns, key="x")
        chart_type = st.selectbox(
            "Chart type:", ["Bar", "Line", "Scatter", "Histogram"])

        if chart_type == "Bar":
            fig = px.bar(df_filtered, x=x_col, y=numeric_cols[0])
        elif chart_type == "Line":
            fig = px.line(df_filtered, x=x_col, y=numeric_cols[0])
        elif chart_type == "Scatter":
            fig = px.scatter(df_filtered, x=x_col, y=numeric_cols[0])
        elif chart_type == "Histogram":
            fig = px.histogram(df_filtered, x=x_col)

        st.plotly_chart(fig, use_container_width=True)

with col_b:
    if len(numeric_cols) >= 2:
        st.subheader("Correlation Heatmap")
        corr = df_filtered[numeric_cols].corr()
        fig = px.imshow(corr, color_continuous_scale="RdBu",
                        zmin=-1, zmax=1)
        st.plotly_chart(fig, use_container_width=True)

# Group by analysis
st.header("Group Analysis")
if categorical_cols and numeric_cols:
    group_col = st.selectbox("Group by:", categorical_cols)
    agg_col = st.selectbox("Aggregate:", numeric_cols)
    agg_func = st.selectbox(
        "Function:", ["mean", "sum", "count", "min", "max"])

    grouped = df_filtered.groupby(group_col)[agg_col].agg(agg_func)
    st.bar_chart(grouped)

# Download filtered data
st.header("Export")
csv = df_filtered.to_csv(index=False).encode()
st.download_button(
    "Download Filtered Data as CSV",
    data=csv,
    file_name="filtered_data.csv",
    mime="text/csv"
)`,codeExplanation:"This is a complete Streamlit web application. It lets users upload their own CSV or use sample data, shows a data preview with key metrics, provides interactive filters, dynamic charts (bar, line, scatter, histogram), a correlation heatmap, group-by analysis with aggregation, and a download button to export filtered data. The entire app runs in the browser.",runSteps:["1. Run: streamlit run app.py (note: 'streamlit run', not 'python')","2. Your browser opens automatically at http://localhost:8501","3. Select 'Use Sample Data' or upload your own CSV file","4. Use the filters and chart selectors to explore the data interactively","5. Click 'Download Filtered Data as CSV' to export results","6. To stop: press Ctrl+C in the terminal"],expectedOutput:"A full interactive web dashboard opens in your browser. You can upload data, filter by categories, choose chart types, view correlations, analyze groups, and download results — all without writing code.",enhancements:["Add user authentication for multi-user access","Connect to a live database instead of CSV upload","Add machine learning predictions (regression, classification)","Deploy to Streamlit Cloud for public access"]},{id:"csv-excel-data-analysis",title:"CSV & Excel Data Analysis Toolkit",category:"Data Analysis",icon:"FileSpreadsheet",description:"Load any CSV or Excel file and perform a full suite of data analysis operations — cleaning, filtering, grouping, pivot tables, statistical summaries, and visualizations. Step-by-step guide to run on your desktop.",difficulty:"Beginner",estimatedTime:"2-3 hours",technologies:["Python","Pandas","Matplotlib","Seaborn","openpyxl"],objectives:["Load data from both CSV and Excel files","Clean data — handle missing values, duplicates, and type conversions","Perform filtering, sorting, and conditional selection","Create group-by aggregations and pivot tables","Generate statistical summaries and correlation analysis","Visualize data with multiple chart types","Export cleaned and analyzed results back to CSV and Excel"],dataset:"The project generates a sample employee dataset CSV automatically. You can also replace it with your own CSV or Excel file — just change the filename in the script.",setupSteps:["1. Install Python 3.10+ from python.org (check 'Add to PATH' during install)","2. Open Command Prompt (Windows) or Terminal (Mac/Linux)","3. Create a project folder: mkdir csv-analysis && cd csv-analysis","4. Create a virtual environment: python -m venv venv","5. Activate it — Windows: venv\\Scripts\\activate | Mac/Linux: source venv/bin/activate","6. Install packages: pip install pandas matplotlib seaborn numpy openpyxl","7. Create a file named generate_data.py (creates a sample CSV file)","8. Create a file named analyze.py (the main analysis script)","9. Run generate_data.py first: python generate_data.py","10. Then run the analysis: python analyze.py","11. To use your own file: replace 'employee_data.csv' with your filename in analyze.py","12. For Excel files: change pd.read_csv('employee_data.csv') to pd.read_excel('your_file.xlsx')"],code:`# ============================================
# generate_data.py — Run this first to create sample data
# ============================================
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

np.random.seed(42)

# Generate 500 employee records
n = 500
departments = ["Sales", "Engineering", "HR", "Marketing",
               "Finance", "Operations"]
cities = ["Mumbai", "Delhi", "Bangalore", "Pune",
          "Chennai", "Kolkata"]
genders = ["Male", "Female"]

df = pd.DataFrame({
    "employee_id": range(1, n + 1),
    "name": [f"Employee_{i}" for i in range(1, n + 1)],
    "department": np.random.choice(departments, n),
    "city": np.random.choice(cities, n),
    "gender": np.random.choice(genders, n),
    "age": np.random.randint(22, 60, n),
    "experience_years": np.random.randint(0, 35, n),
    "salary": np.zeros(n),
    "performance_score": np.clip(
        np.random.normal(7, 1.5, n), 1, 10).round(1),
    "join_date": [
        datetime(2015, 1, 1) + timedelta(
            days=np.random.randint(0, 365 * 10))
        for _ in range(n)
    ],
})

# Realistic salary based on department, experience, age
base_salary = {"Sales": 40000, "Engineering": 60000,
               "HR": 45000, "Marketing": 50000,
               "Finance": 55000, "Operations": 42000}
df["salary"] = df.apply(
    lambda r: base_salary[r["department"]]
    + r["experience_years"] * 2500
    + np.random.normal(0, 5000), axis=1
).round(0)

# Add some missing values and duplicates for cleaning practice
df.loc[np.random.choice(n, 20, replace=False), "salary"] = np.nan
df.loc[np.random.choice(n, 10, replace=False), "age"] = np.nan
df = pd.concat([df, df.iloc[:5]], ignore_index=True)  # 5 duplicates

df.to_csv("employee_data.csv", index=False)
print(f"Generated {len(df)} employee records -> employee_data.csv")
print("The data includes missing values and duplicates for cleaning practice.")`,codeExplanation:"This script creates a realistic employee dataset with 505 rows (including 5 duplicates and some missing values) and saves it as a CSV. It includes departments, cities, salaries, performance scores, and join dates — everything needed to practice data cleaning and analysis.",runSteps:["1. In your terminal: python generate_data.py (creates employee_data.csv)","2. Then: python analyze.py (runs the full analysis pipeline)","3. Terminal shows step-by-step analysis output with statistics","4. Charts appear in a window — close each to see the next","5. Cleaned data is saved as cleaned_employee_data.csv and cleaned_employee_data.xlsx","6. Open the Excel file in Microsoft Excel to verify the cleaned data"],expectedOutput:"Terminal output shows each analysis step with statistics. Multiple chart windows appear showing distributions, correlations, and group comparisons. Two output files are created: a cleaned CSV and a cleaned Excel file with multiple sheets.",enhancements:["Replace the sample data with your own CSV or Excel file","Add more chart types (box plots, heatmaps, pair plots)","Build an interactive version with Streamlit","Add outlier detection and removal","Export a formatted Excel report with charts embedded"]},{id:"web-scraping-guide",title:"Web Scraping Project — Step-by-Step Desktop Guide",category:"Web Scraping",icon:"Globe",description:"A complete hands-on web scraping project that extracts product data from a real website. Includes step-by-step instructions to install, configure, run, and analyze — all from your desktop.",difficulty:"Intermediate",estimatedTime:"3-4 hours",technologies:["Python","Requests","BeautifulSoup","Pandas","Selenium"],objectives:["Understand how websites are structured (HTML, CSS classes, IDs)","Install and set up Python web scraping libraries on your desktop","Scrape product names, prices, ratings, and availability from a real website","Handle multiple pages (pagination) automatically","Clean the scraped data and remove unwanted characters","Save scraped data to CSV and Excel files","Analyze scraped data with statistics and visualizations","Scrape JavaScript-loaded content using Selenium"],dataset:"Scraped from books.toscrape.com — a sandbox website specifically created for practicing web scraping safely and legally.",setupSteps:["STEP 1: Install Python","  1a. Go to python.org and download Python 3.10 or later","  1b. Run the installer — IMPORTANT: check 'Add Python to PATH' before clicking Install","  1c. Verify: open Command Prompt (Windows) or Terminal (Mac) and type: python --version","  1d. You should see: Python 3.12.x (or similar)","","STEP 2: Create the project folder","  2a. Open Command Prompt / Terminal","  2b. Type: mkdir web-scraper && cd web-scraper","  2c. Create a virtual environment: python -m venv venv","  2d. Activate it — Windows: venv\\Scripts\\activate | Mac: source venv/bin/activate","  2e. You should see (venv) at the start of your command line","","STEP 3: Install required packages","  3a. Run: pip install requests beautifulsoup4 pandas matplotlib openpyxl selenium webdriver-manager","  3b. Wait for all packages to download and install",`  3c. Verify: python -c "import requests, bs4, pandas; print('All packages installed')"`,"","STEP 4: Create the scraper script","  4a. Create a file named scraper.py in your web-scraper folder","  4b. Open it in a text editor (VS Code, Notepad++, or any editor)","  4c. Copy the code from the code section below and paste it into scraper.py","  4d. Save the file","","STEP 5: Run the scraper","  5a. In your terminal (with venv activated), run: python scraper.py","  5b. Watch the terminal — it shows progress for each page being scraped","  5c. After scraping completes, analysis results print automatically","  5d. Two files are created: scraped_books.csv and scraped_books.xlsx","  5e. A chart window opens showing price distribution and rating analysis","  5f. Close the chart window to finish"],code:`# ============================================
# scraper.py — Web Scraping Project
# Scrapes book data from books.toscrape.com
# ============================================

import requests
from bs4 import BeautifulSoup
import pandas as pd
import matplotlib.pyplot as plt
import time
import re

# ============================================
# PART 1: SCRAPING WITH REQUESTS + BEAUTIFULSOUP
# ============================================

print("=" * 60)
print("WEB SCRAPING PROJECT — Book Data Extractor")
print("=" * 60)

base_url = "https://books.toscrape.com/catalogue/page-{}.html"
all_books = []
total_pages = 10  # Scrape 10 pages (200 books)

for page in range(1, total_pages + 1):
    url = base_url.format(page)
    response = requests.get(url, timeout=10)

    if response.status_code != 200:
        print(f"  Page {page}: Failed (status {response.status_code})")
        continue

    soup = BeautifulSoup(response.text, "html.parser")
    books = soup.find_all("article", class_="product_pod")

    for book in books:
        # Extract title
        title = book.find("h3").find("a")["title"]

        # Extract price and clean it
        price_text = book.find("p", class_="price_color").text.strip()
        # Remove currency symbols and extra characters
        price = float(re.sub(r'[^\\d.]', '', price_text))

        # Extract rating (stored as CSS class: "star-rating Three")
        rating_class = book.find("p", class_="star-rating")["class"]
        rating_word = rating_class[1]  # One, Two, Three, Four, Five
        rating_map = {"One": 1, "Two": 2, "Three": 3,
                      "Four": 4, "Five": 5}
        rating = rating_map.get(rating_word, 0)

        # Extract availability
        availability = book.find("p", class_="instock").text.strip()

        # Extract product URL
        link = book.find("h3").find("a")["href"]
        product_url = f"https://books.toscrape.com/catalogue/{link}"

        all_books.append({
            "title": title,
            "price": price,
            "rating": rating,
            "availability": availability,
            "url": product_url,
        })

    print(f"  Page {page}/{total_pages}: Scraped {len(books)} books")
    time.sleep(1)  # Be polite — wait 1 second between requests

# ============================================
# PART 2: CREATE DATAFRAME AND SAVE
# ============================================

df = pd.DataFrame(all_books)
print(f"\\nTotal books scraped: {len(df)}")

# Save to CSV
df.to_csv("scraped_books.csv", index=False)
print("Saved to scraped_books.csv")

# Save to Excel
df.to_excel("scraped_books.xlsx", index=False)
print("Saved to scraped_books.xlsx")

# ============================================
# PART 3: DATA CLEANING
# ============================================

print("\\n--- Data Cleaning ---")
print(f"Original rows: {len(df)}")
print(f"Missing values: {df.isnull().sum().sum()}")
print(f"Duplicate titles: {df['title'].duplicated().sum()}")

# Remove duplicates
df = df.drop_duplicates(subset='title')
print(f"After removing duplicates: {len(df)}")

# ============================================
# PART 4: DATA ANALYSIS
# ============================================

print("\\n" + "=" * 60)
print("DATA ANALYSIS RESULTS")
print("=" * 60)

print(f"\\nTotal books: {len(df)}")
print(f"Price statistics:")
print(f"  Minimum: \\u00a3{df['price'].min():.2f}")
print(f"  Maximum: \\u00a3{df['price'].max():.2f}")
print(f"  Average: \\u00a3{df['price'].mean():.2f}")
print(f"  Median:  \\u00a3{df['price'].median():.2f}")
print(f"  Std Dev: \\u00a3{df['price'].std():.2f}")

print(f"\\nRating distribution:")
rating_dist = df["rating"].value_counts().sort_index()
for star, count in rating_dist.items():
    bar = "#" * count
    print(f"  {star} star: {count:3d} {bar}")

print(f"\\nAverage price by rating:")
print(df.groupby("rating")["price"].mean().round(2))

print(f"\\nTop 5 most expensive books:")
print(df.nlargest(5, "price")[["title", "price", "rating"]].to_string())

print(f"\\nTop 5 cheapest books:")
print(df.nsmallest(5, "price")[["title", "price", "rating"]].to_string())

print(f"\\nTop 5 highest rated books (by price):")
top_rated = df[df["rating"] == 5].nlargest(5, "price")
print(top_rated[["title", "price", "rating"]].to_string())

# ============================================
# PART 5: VISUALIZATION
# ============================================

fig, axes = plt.subplots(2, 2, figsize=(14, 10))
fig.suptitle("Web Scraping Results — Book Analysis",
             fontsize=16, fontweight="bold")

# Price distribution histogram
axes[0, 0].hist(df["price"], bins=30, color="teal",
                edgecolor="white", alpha=0.8)
axes[0, 0].set_title("Price Distribution")
axes[0, 0].set_xlabel("Price (\\u00a3)")
axes[0, 0].set_ylabel("Number of Books")

# Rating distribution bar chart
rating_dist.plot(kind="bar", ax=axes[0, 1], color="coral",
                 edgecolor="white")
axes[0, 1].set_title("Rating Distribution")
axes[0, 1].set_xlabel("Rating (Stars)")
axes[0, 1].set_ylabel("Number of Books")
axes[0, 1].set_xticklabels(
    [f"{i} Star" for i in rating_dist.index], rotation=0)

# Price vs Rating scatter
axes[1, 0].scatter(df["rating"], df["price"], alpha=0.4,
                   color="steelblue")
axes[1, 0].set_title("Price vs Rating")
axes[1, 0].set_xlabel("Rating (Stars)")
axes[1, 0].set_ylabel("Price (\\u00a3)")

# Average price by rating
avg_price = df.groupby("rating")["price"].mean()
avg_price.plot(kind="bar", ax=axes[1, 1], color="seagreen",
               edgecolor="white")
axes[1, 1].set_title("Average Price by Rating")
axes[1, 1].set_xlabel("Rating (Stars)")
axes[1, 1].set_ylabel("Average Price (\\u00a3)")
axes[1, 1].set_xticklabels(
    [f"{i} Star" for i in avg_price.index], rotation=0)

plt.tight_layout()
plt.savefig("scraping_analysis.png", dpi=200)
print(f"\\nChart saved as scraping_analysis.png")
plt.show()

# ============================================
# PART 6 (BONUS): SCRAPING DYNAMIC CONTENT
# WITH SELENIUM
# ============================================
# Uncomment the code below to scrape JavaScript-loaded
# websites that BeautifulSoup cannot see.
#
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from webdriver_manager.chrome import ChromeDriverManager
#
# driver = webdriver.Chrome(ChromeDriverManager().install())
# driver.get("https://quotes.toscrape.com/js/")
#
# wait = WebDriverWait(driver, 10)
# quotes = wait.until(
#     EC.presence_of_all_elements_located(
#         (By.CLASS_NAME, "quote")))
#
# for quote in quotes:
#     text = quote.find_element(By.CLASS_NAME, "text").text
#     author = quote.find_element(By.CLASS_NAME, "author").text
#     print(f"{author}: {text}")
#
# driver.quit()

print("\\n" + "=" * 60)
print("SCRAPING COMPLETE!")
print("Files created:")
print("  - scraped_books.csv (open in Excel)")
print("  - scraped_books.xlsx (open in Excel)")
print("  - scraping_analysis.png (chart image)")
print("=" * 60)`,codeExplanation:"This script has 6 parts: (1) Scraping — uses Requests to fetch web pages and BeautifulSoup to parse HTML and extract book titles, prices, ratings, and availability from 10 pages. (2) Saving — stores data in both CSV and Excel formats. (3) Cleaning — removes duplicates and checks for missing values. (4) Analysis — calculates price statistics, rating distributions, and identifies top/bottom books. (5) Visualization — creates a 4-panel dashboard with price distribution, ratings, price-vs-rating scatter, and average price by rating. (6) Bonus — commented Selenium code for scraping JavaScript-loaded pages.",runSteps:["1. Make sure your virtual environment is activated (you see (venv) in terminal)","2. Run: python scraper.py","3. Terminal shows scraping progress: 'Page 1/10: Scraped 20 books' for each page","4. After scraping, data cleaning results print (duplicates removed, missing values checked)","5. Analysis results print: price statistics, rating distribution with visual bars, top/bottom books","6. A 4-panel chart window opens showing price distribution, ratings, and comparisons","7. Close the chart window to finish","8. Three files are created in your project folder:","   - scraped_books.csv (open in Excel or any text editor)","   - scraped_books.xlsx (open in Microsoft Excel)","   - scraping_analysis.png (the chart image)"],expectedOutput:"Terminal shows page-by-page scraping progress, then data cleaning results, then a full analysis report with price statistics and rating breakdowns. A 4-panel chart window appears with visualizations. Three output files are saved to your folder.",enhancements:["Scrape all 50 pages (1000 books) by changing total_pages to 50","Scrape book categories by following each book's URL and extracting the category","Uncomment the Selenium section to scrape JavaScript-loaded websites","Schedule the scraper to run daily using Windows Task Scheduler or cron","Build a price tracking system that saves results with timestamps and shows price trends over time","Add error handling for network timeouts and website structure changes","Export results to a SQLite database for querying"]}];function Sa(e){return{Map:pg,FileSpreadsheet:ng,BarChart3:Xl,Code2:Ao,Database:Fu,Globe:ig,Table:xg,LayoutDashboard:dg,Calculator:Jh,ChartArea:Zh,Sparkles:ks,Download:ag,Search:No,Wand2:kg,Wrench:Cg,ChartColumn:Xl,ShoppingCart:vg,Activity:Kh,TrendingUp:Po,CloudSun:eg,Users:Eg,Film:rg,Briefcase:ju,CreditCard:tg,Trophy:_g,FolderGit2:Pr,Upload:bg,Server:gg}[e]||En}function Mg(){const e=Je.slice(0,6),t=ft.slice(0,4),a=[{label:"Tutorials",value:Je.length,icon:En},{label:"Projects",value:ft.length,icon:Pr},{label:"Topics Covered",value:"15+",icon:Po},{label:"From Basic to Advanced",value:"100%",icon:ks}];return o.jsxs("div",{className:"min-h-screen bg-[#0a0a0a]",children:[o.jsxs("section",{className:"relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent"}),o.jsx("div",{className:"absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl"}),o.jsxs("div",{className:"relative max-w-7xl mx-auto text-center",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 animate-fade-in",children:[o.jsx(ks,{className:"w-4 h-4 text-emerald-400"}),o.jsx("span",{className:"text-emerald-400 text-sm font-medium",children:"Data Analyst Roadmap — Complete Guide"})]}),o.jsxs("h1",{className:"text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in-up leading-tight",children:["Learn Data Analysis",o.jsx("br",{}),o.jsx("span",{className:"bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent",children:"From Zero to Pro"})]}),o.jsx("p",{className:"text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed",children:"Complete tutorials covering Excel, SQL, Python, Pandas, NumPy, Power BI, Web Scraping, Data Visualization, and 10 hands-on projects — all following the Data Analyst Roadmap."}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up",children:[o.jsxs(W,{to:"/tutorials",className:"group inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl transition-all hover:scale-105",children:["Start Learning",o.jsx(yt,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]}),o.jsxs(W,{to:"/projects",className:"inline-flex items-center gap-2 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl transition-all border border-zinc-700",children:["View Projects",o.jsx(Pr,{className:"w-5 h-5"})]})]})]})]}),o.jsx("section",{className:"px-4 sm:px-6 lg:px-8 py-12",children:o.jsx("div",{className:"max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4",children:a.map((n,r)=>{const i=n.icon;return o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-center hover:border-emerald-500/30 transition-all",children:[o.jsx(i,{className:"w-8 h-8 text-emerald-400 mx-auto mb-3"}),o.jsx("div",{className:"text-3xl font-bold text-white",children:n.value}),o.jsx("div",{className:"text-sm text-zinc-500 mt-1",children:n.label})]},r)})})}),o.jsx("section",{className:"px-4 sm:px-6 lg:px-8 py-16",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsxs("div",{className:"flex items-center justify-between mb-8",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-3xl font-bold text-white mb-2",children:"Featured Tutorials"}),o.jsx("p",{className:"text-zinc-500",children:"Start with these essential topics"})]}),o.jsxs(W,{to:"/tutorials",className:"text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-1",children:["View All ",o.jsx(yt,{className:"w-4 h-4"})]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(n=>{const r=Sa(n.icon);return o.jsxs(W,{to:`/tutorials/${n.id}`,className:"group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/30 hover:bg-zinc-900 transition-all",children:[o.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0",children:o.jsx(r,{className:"w-6 h-6 text-emerald-400"})}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("span",{className:"text-xs text-emerald-400 font-medium",children:n.category}),o.jsx("h3",{className:"text-white font-semibold text-lg group-hover:text-emerald-400 transition-colors leading-tight",children:n.title})]})]}),o.jsx("p",{className:"text-zinc-500 text-sm line-clamp-2 mb-4",children:n.description}),o.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[o.jsx("span",{className:"px-2 py-1 rounded-md bg-zinc-800 text-zinc-400",children:n.level}),o.jsx("span",{className:"text-zinc-600",children:n.estimatedTime})]})]},n.id)})})]})}),o.jsx("section",{className:"px-4 sm:px-6 lg:px-8 py-16",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-900/30 border border-zinc-800 p-8 sm:p-12",children:[o.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"}),o.jsxs("div",{className:"relative",children:[o.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"The Data Analyst Roadmap"}),o.jsx("p",{className:"text-zinc-400 max-w-2xl mb-6",children:"Follow a structured path from beginner to advanced. Every tutorial on this blog is mapped to the official Data Analyst Roadmap."}),o.jsx("div",{className:"flex flex-wrap gap-3 mb-6",children:["Excel","SQL","Python","Pandas","NumPy","Power BI","Web Scraping","Data Viz","Statistics"].map(n=>o.jsx("span",{className:"px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm",children:n},n))}),o.jsxs(W,{to:"/tutorials/data-analyst-roadmap",className:"inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium",children:["View the Roadmap ",o.jsx(yt,{className:"w-5 h-5"})]})]})]})})}),o.jsx("section",{className:"px-4 sm:px-6 lg:px-8 py-16",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsxs("div",{className:"flex items-center justify-between mb-8",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-3xl font-bold text-white mb-2",children:"Hands-On Projects"}),o.jsx("p",{className:"text-zinc-500",children:"Apply what you learn with 10 real-world projects"})]}),o.jsxs(W,{to:"/projects",className:"text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-1",children:["View All ",o.jsx(yt,{className:"w-4 h-4"})]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.map(n=>{const r=Sa(n.icon);return o.jsx(W,{to:`/projects/${n.id}`,className:"group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all",children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0",children:o.jsx(r,{className:"w-6 h-6 text-teal-400"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx("span",{className:"text-xs text-teal-400 font-medium",children:n.category}),o.jsx("span",{className:"text-xs text-zinc-600",children:"•"}),o.jsx("span",{className:"text-xs text-zinc-500",children:n.difficulty})]}),o.jsx("h3",{className:"text-white font-semibold text-lg group-hover:text-teal-400 transition-colors mb-2",children:n.title}),o.jsx("p",{className:"text-zinc-500 text-sm line-clamp-2 mb-3",children:n.description}),o.jsx("div",{className:"flex flex-wrap gap-2",children:n.technologies.slice(0,3).map(i=>o.jsx("span",{className:"text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400",children:i},i))})]})]})},n.id)})})]})})]})}const de={name:"Amit Prasad",title:"Data Analyst | MIS Executive | Business & Operations Analytics",tagline:"10+ years transforming business data into structured reports, dashboards, and actionable insights",location:"Asansol (Burnpur), West Bengal – 713325",email:"amitatall@hotmail.com",phone:"09339383631",about:`Data Analyst and MIS Executive with 10+ years of experience across MIS reporting, operations analytics, inventory and attendance data management, dashboard reporting, and business data analysis. Hands-on experience with Excel, SQL, Python, Power BI, SAFAL / SAP ERP and operational reporting. Experienced in transforming business data into structured reports, dashboards and actionable management insights.

I believe that great data analysis is not just about technical skills — it's about asking the right questions, understanding the business context, and communicating findings clearly. I am continuously learning and exploring new tools and techniques in the ever-evolving field of data science.`,skills:[{category:"Data & BI",items:["Data Analysis","Data Cleaning & Transformation","Power BI","DAX","Data Visualization","KPI Reporting"]},{category:"Programming & Database",items:["Python","SQL","MySQL","ETL","Database Management"]},{category:"MIS & Excel",items:["Advanced Excel","Pivot Tables","VLOOKUP","XLOOKUP","MIS Reporting","Dashboard Creation"]},{category:"ERP & Operations",items:["SAFAL / SAP ERP","Inventory Management","Attendance & Payroll Analytics","Operational Reporting"]}],experience:[{role:"MIS Executive",organization:"FSNL Private Limited (on behalf of Mira Enterprises, Fero Struct Engineers & SD Enterprises)",duration:"May 2022 – Present",description:"Handling day-to-day transactions and data management using SAFAL / SAP ERP, preparing MIS reports, and developing Excel-based dashboards for operational monitoring.",highlights:["Handled day-to-day transactions and data management using SAFAL / SAP ERP","Managed sales, purchase, inventory/stock, material transactions, GRN, invoices, billing, and related documentation","Maintained vendor/customer master data and monitored inward/outward material transactions","Verified system entries, quantities and supporting documents; performed reconciliation between system and physical/document records","Prepared daily, weekly and monthly MIS, shipment, production, bought-out services, roster, attendance, equipment performance and utilization reports","Prepared and maintained FMS, IMS, PMS and operational checklists for monitoring and compliance","Developed Excel-based dashboards and reports using Pivot Tables, VLOOKUP, XLOOKUP and advanced formulas","Coordinated with departments and stakeholders for timely collection, validation and submission of operational data"],projects:[{name:"Payroll & Attendance Analytics",description:"Built an analytics dashboard using Excel, SQL, Python and Power BI to analyze attendance, absenteeism, payroll metrics, overtime and workforce productivity.",tools:"Excel, SQL, Python, Power BI"},{name:"Material Inventory & Stock Monitoring",description:"Developed an inventory monitoring solution to track stock levels, consumption, reorder requirements, material movement and warehouse performance.",tools:"Excel, SQL, Python, Power BI"},{name:"Operations Performance Analytics",description:"Analyzed shipment data, equipment utilization and diesel consumption; created Power BI dashboards for operational KPIs and trend analysis.",tools:"Excel, SQL, Python, Power BI"}]},{role:"Data Analyst",organization:"Dipankar Management & Solution Private Limited",duration:"2016 – 2022",description:"Developed sales performance dashboards, maintained customer databases, and generated MIS reports using Excel, SQL, Python, Power BI and MySQL.",highlights:["Developed sales performance dashboards to analyze revenue, profitability, customer behavior and product performance","Maintained customer databases, performed data validation and analysis, and generated MIS reports","Used Excel, SQL, Python, Power BI and MySQL for reporting, analysis and dashboard development"]},{role:"Data Analyst",organization:"Frameworx Enterprise, Dhanbad",duration:"2013 – 2016",description:"Worked on Interior Design Business Analytics covering project cost, material consumption, customer preferences, vendor performance and completion timelines.",highlights:["Worked on an Interior Design Business Analytics project covering project cost, material consumption, customer preferences, vendor performance and completion timelines","Created analytical dashboards for budget utilization, profitability, material inventory and customer trends using Excel, SQL, Python and Power BI"]}],internships:[{role:"Full Stack Web Development Intern",organization:"InAmigos Foundation (via Internshala)",duration:"Completed May 2026",description:"Worked on responsive web applications, front-end UI development, back-end logic and database integration. Debugged and tested applications and collaborated on real-world web development projects."},{role:"Content Writing Intern",organization:"InAmigos Foundation (via Internshala)",duration:"Completed May 2026",description:"Worked on content writing and research tasks and created online content."}],education:[{degree:"B.Tech – Computer Science Engineering",institution:"Vel Tech Dr. R.R. & Dr. S.R. Technical University, Chennai (Avadi)",duration:"2009 – 2013",description:"Foundation in computer science, programming, engineering mathematics, and database management systems."}],certifications:["Google Data Analytics Professional Certificate","Microsoft Power BI Data Analyst (PL-300)","Python for Data Science and Machine Learning"],interests:["Theater","Environmental Conservation","Travelling"],social:{github:"https://github.com/",linkedin:"https://linkedin.com/",email:"amitatall@hotmail.com"}};function Lg(){return o.jsx("div",{className:"min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-5xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-16 animate-fade-in-up",children:[o.jsx("div",{className:"w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center mx-auto mb-6",children:o.jsx("span",{className:"text-5xl font-bold text-black",children:"A"})}),o.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white mb-2",children:de.name}),o.jsx("p",{className:"text-lg sm:text-xl text-emerald-400 font-medium mb-3",children:de.title}),o.jsx("p",{className:"text-zinc-500 max-w-2xl mx-auto",children:de.tagline})]}),o.jsx("section",{className:"mb-12",children:o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Professional Summary"}),o.jsx("div",{className:"space-y-4",children:de.about.split(`

`).map((e,t)=>o.jsx("p",{className:"text-zinc-400 leading-relaxed",children:e},t))})]})}),o.jsx("section",{className:"mb-12",children:o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex items-center gap-3",children:[o.jsx(Bu,{className:"w-5 h-5 text-emerald-400 flex-shrink-0"}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("div",{className:"text-xs text-zinc-500",children:"Email"}),o.jsx("div",{className:"text-sm text-zinc-300 truncate",children:de.email})]})]}),o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex items-center gap-3",children:[o.jsx(fg,{className:"w-5 h-5 text-emerald-400 flex-shrink-0"}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("div",{className:"text-xs text-zinc-500",children:"Mobile"}),o.jsx("div",{className:"text-sm text-zinc-300 truncate",children:de.phone})]})]}),o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex items-center gap-3",children:[o.jsx(ug,{className:"w-5 h-5 text-emerald-400 flex-shrink-0"}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("div",{className:"text-xs text-zinc-500",children:"Location"}),o.jsx("div",{className:"text-sm text-zinc-300 truncate",children:de.location})]})]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("a",{href:de.social.github,target:"_blank",rel:"noopener noreferrer",className:"flex-1 bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex items-center justify-center hover:border-emerald-500/30 transition-all",children:o.jsx(Ou,{className:"w-5 h-5 text-zinc-400"})}),o.jsx("a",{href:de.social.linkedin,target:"_blank",rel:"noopener noreferrer",className:"flex-1 bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex items-center justify-center hover:border-emerald-500/30 transition-all",children:o.jsx(zu,{className:"w-5 h-5 text-zinc-400"})})]})]})}),o.jsxs("section",{className:"mb-12",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[o.jsx(Ao,{className:"w-6 h-6 text-emerald-400"}),o.jsx("h2",{className:"text-2xl font-bold text-white",children:"Core Skills"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:de.skills.map((e,t)=>o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 rounded-xl p-5",children:[o.jsx("h3",{className:"text-emerald-400 font-semibold text-sm mb-3",children:e.category}),o.jsx("div",{className:"flex flex-wrap gap-2",children:e.items.map(a=>o.jsx("span",{className:"px-3 py-1 rounded-lg bg-zinc-800 text-zinc-300 text-xs",children:a},a))})]},t))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[o.jsx(ju,{className:"w-6 h-6 text-emerald-400"}),o.jsx("h2",{className:"text-2xl font-bold text-white",children:"Professional Experience"})]}),o.jsx("div",{className:"space-y-6",children:de.experience.map((e,t)=>o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 rounded-xl p-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3",children:[o.jsx("h3",{className:"text-white font-semibold text-lg",children:e.role}),o.jsx("span",{className:"text-emerald-400 text-sm",children:e.duration})]}),o.jsx("p",{className:"text-zinc-400 font-medium text-sm mb-3",children:e.organization}),o.jsx("p",{className:"text-zinc-500 text-sm leading-relaxed mb-4",children:e.description}),e.highlights&&o.jsx("ul",{className:"space-y-2 mb-4",children:e.highlights.map((a,n)=>o.jsxs("li",{className:"flex items-start gap-2 text-sm text-zinc-400",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"}),o.jsx("span",{children:a})]},n))}),e.projects&&e.projects.length>0&&o.jsxs("div",{className:"mt-4 pt-4 border-t border-zinc-800",children:[o.jsx("h4",{className:"text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-3",children:"Selected Analytics Projects"}),o.jsx("div",{className:"space-y-3",children:e.projects.map((a,n)=>o.jsxs("div",{className:"bg-zinc-800/50 rounded-lg p-4",children:[o.jsxs("div",{className:"flex items-center justify-between mb-1",children:[o.jsx("h5",{className:"text-white font-medium text-sm",children:a.name}),o.jsx("span",{className:"text-xs text-zinc-500",children:a.tools})]}),o.jsx("p",{className:"text-zinc-500 text-xs leading-relaxed",children:a.description})]},n))})]})]},t))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[o.jsx(En,{className:"w-6 h-6 text-emerald-400"}),o.jsx("h2",{className:"text-2xl font-bold text-white",children:"Internships"})]}),o.jsx("div",{className:"space-y-4",children:de.internships.map((e,t)=>o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 rounded-xl p-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3",children:[o.jsx("h3",{className:"text-white font-semibold text-lg",children:e.role}),o.jsx("span",{className:"text-emerald-400 text-sm",children:e.duration})]}),o.jsx("p",{className:"text-zinc-400 font-medium text-sm mb-2",children:e.organization}),o.jsx("p",{className:"text-zinc-500 text-sm leading-relaxed",children:e.description})]},t))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[o.jsx(sg,{className:"w-6 h-6 text-emerald-400"}),o.jsx("h2",{className:"text-2xl font-bold text-white",children:"Education"})]}),o.jsx("div",{className:"space-y-4",children:de.education.map((e,t)=>o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 rounded-xl p-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3",children:[o.jsx("h3",{className:"text-white font-semibold text-lg",children:e.degree}),o.jsx("span",{className:"text-emerald-400 text-sm",children:e.duration})]}),o.jsx("p",{className:"text-zinc-400 font-medium text-sm mb-2",children:e.institution}),o.jsx("p",{className:"text-zinc-500 text-sm leading-relaxed",children:e.description})]},t))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[o.jsx(Yl,{className:"w-6 h-6 text-emerald-400"}),o.jsx("h2",{className:"text-2xl font-bold text-white",children:"Certifications"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:de.certifications.map((e,t)=>o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex items-center gap-3",children:[o.jsx(Yl,{className:"w-5 h-5 text-emerald-400 flex-shrink-0"}),o.jsx("span",{className:"text-zinc-300 text-sm",children:e})]},t))})]}),o.jsxs("section",{children:[o.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[o.jsx(og,{className:"w-6 h-6 text-emerald-400"}),o.jsx("h2",{className:"text-2xl font-bold text-white",children:"Interests"})]}),o.jsx("div",{className:"flex flex-wrap gap-3",children:de.interests.map((e,t)=>o.jsx("span",{className:"px-4 py-2 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-sm",children:e},t))})]})]})})}function Dg(){const[e,t]=y.useState(""),[a,n]=y.useState("All"),r=["All",...Array.from(new Set(Je.map(s=>s.category)))],i=Je.filter(s=>{const l=s.title.toLowerCase().includes(e.toLowerCase())||s.description.toLowerCase().includes(e.toLowerCase()),d=a==="All"||s.category===a;return l&&d});return o.jsx("div",{className:"min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-12 animate-fade-in-up",children:[o.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white mb-4",children:"Tutorials"}),o.jsx("p",{className:"text-zinc-500 max-w-2xl mx-auto",children:"Complete data analysis tutorials from basic to advanced — covering the entire Data Analyst Roadmap."})]}),o.jsx("div",{className:"max-w-xl mx-auto mb-8",children:o.jsxs("div",{className:"relative",children:[o.jsx(No,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"}),o.jsx("input",{type:"text",placeholder:"Search tutorials...",value:e,onChange:s=>t(s.target.value),className:"w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"})]})}),o.jsx("div",{className:"flex flex-wrap gap-2 justify-center mb-10",children:r.map(s=>o.jsx("button",{onClick:()=>n(s),className:`px-4 py-2 rounded-lg text-sm font-medium transition-all ${a===s?"bg-emerald-500 text-black":"bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-emerald-500/30 hover:text-white"}`,children:s},s))}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map(s=>{const l=Sa(s.icon);return o.jsxs(W,{to:`/tutorials/${s.id}`,className:"group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/30 hover:bg-zinc-900 transition-all",children:[o.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0",children:o.jsx(l,{className:"w-6 h-6 text-emerald-400"})}),o.jsxs("div",{className:"min-w-0 flex-1",children:[o.jsx("span",{className:"text-xs text-emerald-400 font-medium",children:s.category}),o.jsx("h3",{className:"text-white font-semibold text-lg group-hover:text-emerald-400 transition-colors leading-tight",children:s.title})]})]}),o.jsx("p",{className:"text-zinc-500 text-sm line-clamp-3 mb-4",children:s.description}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[o.jsx("span",{className:"px-2 py-1 rounded-md bg-zinc-800 text-zinc-400",children:s.level}),o.jsxs("span",{className:"flex items-center gap-1 text-zinc-600",children:[o.jsx(Kr,{className:"w-3 h-3"}),s.estimatedTime]})]}),o.jsx(yt,{className:"w-4 h-4 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all"})]})]},s.id)})}),i.length===0&&o.jsx("div",{className:"text-center py-20",children:o.jsx("p",{className:"text-zinc-500 text-lg",children:"No tutorials found matching your search."})})]})})}function Ig(){const{id:e}=Au(),t=Je.find(s=>s.id===e);if(!t)return o.jsx("div",{className:"min-h-screen bg-[#0a0a0a] pt-24 px-4 flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("p",{className:"text-zinc-400 text-xl mb-4",children:"Tutorial not found."}),o.jsx(W,{to:"/tutorials",className:"text-emerald-400 hover:text-emerald-300 font-medium",children:"Back to Tutorials"})]})});const a=Sa(t.icon),n=Je.findIndex(s=>s.id===e),r=n>0?Je[n-1]:null,i=n<Je.length-1?Je[n+1]:null;return o.jsx("div",{className:"min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsxs(W,{to:"/tutorials",className:"inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors mb-8 text-sm",children:[o.jsx(Nr,{className:"w-4 h-4"}),"All Tutorials"]}),o.jsxs("div",{className:"mb-10 animate-fade-in-up",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[o.jsx("div",{className:"w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0",children:o.jsx(a,{className:"w-8 h-8 text-emerald-400"})}),o.jsxs("div",{children:[o.jsx("span",{className:"text-sm text-emerald-400 font-medium",children:t.category}),o.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white leading-tight",children:t.title})]})]}),o.jsx("p",{className:"text-zinc-400 text-lg leading-relaxed",children:t.description}),o.jsxs("div",{className:"flex items-center gap-4 mt-4",children:[o.jsx("span",{className:"px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm",children:t.level}),o.jsxs("span",{className:"flex items-center gap-2 text-zinc-500 text-sm",children:[o.jsx(Kr,{className:"w-4 h-4"}),t.estimatedTime]}),o.jsxs("span",{className:"flex items-center gap-2 text-zinc-500 text-sm",children:[o.jsx(En,{className:"w-4 h-4"}),t.sections.length," sections"]})]})]}),o.jsx("div",{className:"bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-10",children:o.jsx("div",{className:"prose-content",children:t.sections.map((s,l)=>o.jsxs("div",{children:[o.jsx("h2",{children:s.heading}),s.content.map((d,c)=>o.jsx("p",{dangerouslySetInnerHTML:{__html:d}},c)),s.list&&o.jsx("ul",{children:s.list.map((d,c)=>o.jsx("li",{dangerouslySetInnerHTML:{__html:d}},c))}),s.code&&o.jsx("pre",{children:o.jsx("code",{children:s.code})}),s.table&&o.jsxs("table",{children:[o.jsx("thead",{children:o.jsx("tr",{children:s.table.headers.map((d,c)=>o.jsx("th",{children:d},c))})}),o.jsx("tbody",{children:s.table.rows.map((d,c)=>o.jsx("tr",{children:d.map((m,f)=>o.jsx("td",{dangerouslySetInnerHTML:{__html:m}},f))},c))})]})]},l))})}),o.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-8",children:[r?o.jsxs(W,{to:`/tutorials/${r.id}`,className:"group bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-emerald-500/30 transition-all",children:[o.jsxs("div",{className:"flex items-center gap-2 text-zinc-500 text-xs mb-2",children:[o.jsx(Nr,{className:"w-4 h-4"}),"Previous"]}),o.jsx("p",{className:"text-white font-medium text-sm group-hover:text-emerald-400 transition-colors",children:r.title})]}):o.jsx("div",{}),i?o.jsxs(W,{to:`/tutorials/${i.id}`,className:"group bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-emerald-500/30 transition-all text-right",children:[o.jsxs("div",{className:"flex items-center justify-end gap-2 text-zinc-500 text-xs mb-2",children:["Next",o.jsx(yt,{className:"w-4 h-4"})]}),o.jsx("p",{className:"text-white font-medium text-sm group-hover:text-emerald-400 transition-colors",children:i.title})]}):o.jsx("div",{})]})]})})}function jg(){const[e,t]=y.useState(""),[a,n]=y.useState("All"),r=["All","Beginner","Intermediate","Advanced"],i=ft.filter(s=>{const l=s.title.toLowerCase().includes(e.toLowerCase())||s.description.toLowerCase().includes(e.toLowerCase()),d=a==="All"||s.difficulty===a;return l&&d});return o.jsx("div",{className:"min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-12 animate-fade-in-up",children:[o.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white mb-4",children:"Data Analyst Projects"}),o.jsx("p",{className:"text-zinc-500 max-w-2xl mx-auto",children:"10 hands-on projects with detailed setup instructions, complete code, and step-by-step guides to run on your desktop."})]}),o.jsx("div",{className:"max-w-xl mx-auto mb-8",children:o.jsxs("div",{className:"relative",children:[o.jsx(No,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"}),o.jsx("input",{type:"text",placeholder:"Search projects...",value:e,onChange:s=>t(s.target.value),className:"w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-teal-500/50 transition-colors"})]})}),o.jsx("div",{className:"flex flex-wrap gap-2 justify-center mb-10",children:r.map(s=>o.jsx("button",{onClick:()=>n(s),className:`px-4 py-2 rounded-lg text-sm font-medium transition-all ${a===s?"bg-teal-500 text-black":"bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-teal-500/30 hover:text-white"}`,children:s},s))}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:i.map(s=>{const l=Sa(s.icon);return o.jsxs(W,{to:`/projects/${s.id}`,className:"group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-teal-500/30 hover:bg-zinc-900 transition-all",children:[o.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0",children:o.jsx(l,{className:"w-6 h-6 text-teal-400"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx("span",{className:"text-xs text-teal-400 font-medium",children:s.category}),o.jsx("span",{className:"text-xs text-zinc-600",children:"•"}),o.jsx("span",{className:"text-xs text-zinc-500",children:s.difficulty})]}),o.jsx("h3",{className:"text-white font-semibold text-lg group-hover:text-teal-400 transition-colors leading-tight",children:s.title})]})]}),o.jsx("p",{className:"text-zinc-500 text-sm line-clamp-2 mb-4",children:s.description}),o.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.technologies.slice(0,4).map(d=>o.jsx("span",{className:"text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400",children:d},d))}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("span",{className:"flex items-center gap-1 text-zinc-600 text-xs",children:[o.jsx(Kr,{className:"w-3 h-3"}),s.estimatedTime]}),o.jsx(yt,{className:"w-4 h-4 text-zinc-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all"})]})]},s.id)})}),i.length===0&&o.jsx("div",{className:"text-center py-20",children:o.jsx("p",{className:"text-zinc-500 text-lg",children:"No projects found matching your search."})})]})})}function Fg(){const{id:e}=Au(),t=ft.find(s=>s.id===e);if(!t)return o.jsx("div",{className:"min-h-screen bg-[#0a0a0a] pt-24 px-4 flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("p",{className:"text-zinc-400 text-xl mb-4",children:"Project not found."}),o.jsx(W,{to:"/projects",className:"text-teal-400 hover:text-teal-300 font-medium",children:"Back to Projects"})]})});const a=Sa(t.icon),n=ft.findIndex(s=>s.id===e),r=n>0?ft[n-1]:null,i=n<ft.length-1?ft[n+1]:null;return o.jsx("div",{className:"min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsxs(W,{to:"/projects",className:"inline-flex items-center gap-2 text-zinc-400 hover:text-teal-400 transition-colors mb-8 text-sm",children:[o.jsx(Nr,{className:"w-4 h-4"}),"All Projects"]}),o.jsxs("div",{className:"mb-10 animate-fade-in-up",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[o.jsx("div",{className:"w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center flex-shrink-0",children:o.jsx(a,{className:"w-8 h-8 text-teal-400"})}),o.jsxs("div",{children:[o.jsx("span",{className:"text-sm text-teal-400 font-medium",children:t.category}),o.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white leading-tight",children:t.title})]})]}),o.jsx("p",{className:"text-zinc-400 text-lg leading-relaxed",children:t.description}),o.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[o.jsx("span",{className:"px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm",children:t.difficulty}),o.jsxs("span",{className:"flex items-center gap-2 text-zinc-500 text-sm",children:[o.jsx(Kr,{className:"w-4 h-4"}),t.estimatedTime]}),t.technologies.map(s=>o.jsx("span",{className:"text-xs px-2 py-1 rounded bg-teal-500/10 text-teal-400",children:s},s))]})]}),o.jsxs("section",{className:"bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(wg,{className:"w-5 h-5 text-teal-400"}),o.jsx("h2",{className:"text-xl font-bold text-white",children:"Project Objectives"})]}),o.jsx("ul",{className:"space-y-2",children:t.objectives.map((s,l)=>o.jsxs("li",{className:"text-zinc-400 text-sm leading-relaxed flex items-start gap-2",children:[o.jsx("span",{className:"text-teal-400 mt-1",children:"•"}),s]},l))})]}),o.jsxs("section",{className:"bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(Fu,{className:"w-5 h-5 text-teal-400"}),o.jsx("h2",{className:"text-xl font-bold text-white",children:"Dataset"})]}),o.jsx("p",{className:"text-zinc-400 text-sm leading-relaxed",children:t.dataset})]}),o.jsxs("section",{className:"bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(yg,{className:"w-5 h-5 text-teal-400"}),o.jsx("h2",{className:"text-xl font-bold text-white",children:"How to Set Up on Your Desktop"})]}),o.jsx("ol",{className:"space-y-3",children:t.setupSteps.map((s,l)=>o.jsxs("li",{className:"text-zinc-400 text-sm leading-relaxed flex items-start gap-3",children:[o.jsx("span",{className:"text-teal-400 font-mono text-xs bg-teal-500/10 px-2 py-1 rounded flex-shrink-0",children:l+1}),o.jsx("span",{dangerouslySetInnerHTML:{__html:s}})]},l))})]}),o.jsxs("section",{className:"bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(Ao,{className:"w-5 h-5 text-teal-400"}),o.jsx("h2",{className:"text-xl font-bold text-white",children:"Complete Code"})]}),o.jsx("pre",{className:"bg-[#18181b] border border-zinc-800 rounded-xl p-4 overflow-x-auto",children:o.jsx("code",{className:"text-sm text-zinc-300 leading-relaxed",children:t.code})}),o.jsx("div",{className:"mt-4 p-4 bg-teal-500/5 border border-teal-500/20 rounded-xl",children:o.jsxs("p",{className:"text-zinc-400 text-sm leading-relaxed",children:[o.jsx("span",{className:"text-teal-400 font-medium",children:"Code Explanation: "}),t.codeExplanation]})})]}),o.jsxs("section",{className:"bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(hg,{className:"w-5 h-5 text-teal-400"}),o.jsx("h2",{className:"text-xl font-bold text-white",children:"How to Run"})]}),o.jsx("ol",{className:"space-y-3",children:t.runSteps.map((s,l)=>o.jsxs("li",{className:"text-zinc-400 text-sm leading-relaxed flex items-start gap-3",children:[o.jsx("span",{className:"text-teal-400 font-mono text-xs bg-teal-500/10 px-2 py-1 rounded flex-shrink-0",children:l+1}),o.jsx("span",{dangerouslySetInnerHTML:{__html:s}})]},l))})]}),o.jsxs("section",{className:"bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(Po,{className:"w-5 h-5 text-teal-400"}),o.jsx("h2",{className:"text-xl font-bold text-white",children:"Expected Output"})]}),o.jsx("p",{className:"text-zinc-400 text-sm leading-relaxed",children:t.expectedOutput})]}),o.jsxs("section",{className:"bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-8",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(cg,{className:"w-5 h-5 text-teal-400"}),o.jsx("h2",{className:"text-xl font-bold text-white",children:"Ideas to Enhance This Project"})]}),o.jsx("ul",{className:"space-y-2",children:t.enhancements.map((s,l)=>o.jsxs("li",{className:"text-zinc-400 text-sm leading-relaxed flex items-start gap-2",children:[o.jsx("span",{className:"text-teal-400 mt-1",children:"•"}),s]},l))})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r?o.jsxs(W,{to:`/projects/${r.id}`,className:"group bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-teal-500/30 transition-all",children:[o.jsxs("div",{className:"flex items-center gap-2 text-zinc-500 text-xs mb-2",children:[o.jsx(Nr,{className:"w-4 h-4"}),"Previous Project"]}),o.jsx("p",{className:"text-white font-medium text-sm group-hover:text-teal-400 transition-colors",children:r.title})]}):o.jsx("div",{}),i?o.jsxs(W,{to:`/projects/${i.id}`,className:"group bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-teal-500/30 transition-all text-right",children:[o.jsxs("div",{className:"flex items-center justify-end gap-2 text-zinc-500 text-xs mb-2",children:["Next Project",o.jsx(yt,{className:"w-4 h-4"})]}),o.jsx("p",{className:"text-white font-medium text-sm group-hover:text-teal-400 transition-colors",children:i.title})]}):o.jsx("div",{})]})]})})}function Og(){return o.jsx(Oh,{children:o.jsxs("div",{className:"min-h-screen bg-[#0a0a0a] flex flex-col",children:[o.jsx(Rg,{}),o.jsx("main",{className:"flex-1",children:o.jsxs(fh,{children:[o.jsx(jt,{path:"/",element:o.jsx(Mg,{})}),o.jsx(jt,{path:"/about",element:o.jsx(Lg,{})}),o.jsx(jt,{path:"/tutorials",element:o.jsx(Dg,{})}),o.jsx(jt,{path:"/tutorials/:id",element:o.jsx(Ig,{})}),o.jsx(jt,{path:"/projects",element:o.jsx(jg,{})}),o.jsx(jt,{path:"/projects/:id",element:o.jsx(Fg,{})})]})}),o.jsx(Pg,{})]})})}cu(document.getElementById("root")).render(o.jsx(y.StrictMode,{children:o.jsx(Og,{})}));
