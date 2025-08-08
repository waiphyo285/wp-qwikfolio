import{o as m,p as be,s as ye,q as ve,F as H,t as ge,a as oe,i as se,v as qe,k as _e,e as $,h as p,j as we,w as C,m as ne,R as $e,x as Pe,Q as Se}from"./q-DCXSaQnY.js";const R={manifestHash:"cxgbeh",core:"q-BYpjGX92.js",preloader:"q-CSnWScGr.js",qwikLoader:"q-CuPr1DR2.js",bundleGraphAsset:"assets/DwM_2zle-bundle-graph.json",injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"/assets/Dz0ciIJc-style.css"}}],mapping:{s_aI4KKAKxcU4:"q-CU5LDkkY.js",s_2RRkgMs0PAg:"q-De5W1dqo.js",s_GGhFpGnSULk:"q-Cj7bB1lz.js",s_4SsrHeqp21I:"q-D1zX3sZd.js",s_I4xUY8l4lvk:"q-CU5LDkkY.js",s_lFcCnGIFiVI:"q-CU5LDkkY.js",s_wOtQxsLC26s:"q-ClsyyNqi.js",s_wt4g0PO47PI:"q-CeyJVX8D.js",s_0N3zluBGkRw:"q-66-4FBP1.js",s_39s0bJzjD0c:"q-BYpjGX92.js",s_3g6xSOtCv1M:"q-DSeq4fRz.js",s_6Pi5bMR0qSc:"q-BwzS8vcF.js",s_AWoSzoM0dWs:"q-CeyJVX8D.js",s_FpZmj0K0uyU:"q-FNoTmPW_.js",s_ILAS0CFLtf4:"q-B1U2QMiV.js",s_Ijf6GdaX6O4:"q-D1zX3sZd.js",s_QgJ8Gmg2UTA:"q-YrQuRtzc.js",s_SGW8CrxXevI:"q-ISQySJ6G.js",s_ZH4AEbBS9Xk:"q-CU5LDkkY.js",s_Zfayh4RqwKw:"q-De5W1dqo.js",s_bH2NuzMV8kU:"q-BnWp00A3.js",s_dID8pul3q1w:"q-BZZwu9rf.js",s_fhvmWRgRMqw:"q-CvFnahyy.js",s_gFVMgiNPlek:"q-D6Qa0WJb.js",s_l9TbKo4Oigs:"q-ClsyyNqi.js",s_mrt09LF6hRg:"q-ePARUPQl.js",s_uakQeEPO9es:"q-Borasm-8.js",s_v4TzFARpgpg:"q-DcOPuD3J.js",s_05k440gQ2Ns:"q-De5W1dqo.js",s_3c9LWoI2nvE:"q-BVU8P24-.js",s_OAcdfdLmsHk:"q-Dn5FX72m.js",s_aYuGgEwodFI:"q-C5KETjfU.js",s_n8uZ0M0YwJ4:"q-n7XqrVRA.js",s_0CoLh9fd8aY:"q-CU5LDkkY.js",s_7iYtOaQnh6c:"q-De5W1dqo.js",s_EVnhpoysKN0:"q-CvFnahyy.js",s_TJheHyt0Zb0:"q-BYpjGX92.js",s_YGoDWeDE01I:"q-DSeq4fRz.js",s_ZAGU41i3r6w:"q-ClsyyNqi.js",s_ZpeDu9en4ao:"q-CeyJVX8D.js",s_ewHduk1P09k:"q-YrQuRtzc.js",s_o0350CmKG84:"q-CeyJVX8D.js",s_y6Fric01s9o:"q-DSeq4fRz.js",s_yj48VEUC0Hc:"q-De5W1dqo.js"}};/**
 * @license
 * @builder.io/qwik/server 1.15.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var ke=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),Ee="<sync>";function je(t,e){const n=e==null?void 0:e.mapper,r=t.symbolMapper?t.symbolMapper:(o,i,a)=>{var l;if(n){const u=D(o),c=n[u];if(!c){if(u===Ee)return[u,""];if((l=globalThis.__qwik_reg_symbols)==null?void 0:l.has(u))return[o,"_"];if(a)return[o,`${a}?qrl=${o}`];console.error("Cannot resolve symbol",o,"in",n,a)}return c}};return{isServer:!0,async importSymbol(o,i,a){var v;const l=D(a),u=(v=globalThis.__qwik_reg_symbols)==null?void 0:v.get(l);if(u)return u;let c=String(i);c.endsWith(".js")||(c+=".js");const h=ke(c);if(!(a in h))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${c}'.`);return h[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(i=>{setTimeout(()=>{i(o())})}),chunkForSymbol(o,i,a){return r(o,n,a)}}}async function Ce(t,e){const n=je(t,e);ye(n)}var D=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t},De="q:instance",A={$DEBUG$:!1,$invPreloadProbability$:.65},Ae=Date.now(),Le=/\.[mc]?js$/,ie=0,Ie=1,Ne=2,xe=3,B,O,Te=(t,e)=>({$name$:t,$state$:Le.test(t)?ie:xe,$deps$:le?e==null?void 0:e.map(n=>({...n,$factor$:1})):e,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),Re=t=>{const e=new Map;let n=0;for(;n<t.length;){const r=t[n++],s=[];let o,i=1;for(;o=t[n],typeof o=="number";)o<0?i=-o/10:s.push({$name$:t[o],$importProbability$:i,$factor$:1}),n++;e.set(r,s)}return e},ae=t=>{let e=F.get(t);if(!e){let n;if(O){if(n=O.get(t),!n)return;n.length||(n=void 0)}e=Te(t,n),F.set(t,e)}return e},Be=(t,e)=>{e&&("debug"in e&&(A.$DEBUG$=!!e.debug),typeof e.preloadProbability=="number"&&(A.$invPreloadProbability$=1-e.preloadProbability)),!(B!=null||!t)&&(B="",O=Re(t))},F=new Map,le,L,ce=0,k=[],Oe=(...t)=>{console.log(`Preloader ${Date.now()-Ae}ms ${ce}/${k.length} queued>`,...t)},Fe=()=>{F.clear(),L=!1,le=!0,ce=0,k.length=0},Ue=()=>{L&&(k.sort((t,e)=>t.$inverseProbability$-e.$inverseProbability$),L=!1)},Qe=()=>{Ue();let t=.4;const e=[];for(const n of k){const r=Math.round((1-n.$inverseProbability$)*10);r!==t&&(t=r,e.push(t)),e.push(n.$name$)}return e},ue=(t,e,n)=>{if(n!=null&&n.has(t))return;const r=t.$inverseProbability$;if(t.$inverseProbability$=e,!(r-t.$inverseProbability$<.01)&&(B!=null&&t.$state$<Ne&&t.$inverseProbability$<A.$invPreloadProbability$&&(t.$state$===ie&&(t.$state$=Ie,k.push(t),A.$DEBUG$&&Oe(`queued ${Math.round((1-t.$inverseProbability$)*100)}%`,t.$name$)),L=!0),t.$deps$)){n||(n=new Set),n.add(t);const s=1-t.$inverseProbability$;for(const o of t.$deps$){const i=ae(o.$name$);if(i.$inverseProbability$===0)continue;let a;if(o.$importProbability$>.5&&(s===1||s>=.99&&U<100))U++,a=Math.min(.01,1-o.$importProbability$);else{const l=1-o.$importProbability$*s,u=o.$factor$,c=l/u;a=Math.max(.02,i.$inverseProbability$*c),o.$factor$=c}ue(i,a,n)}}},re=(t,e)=>{const n=ae(t);n&&n.$inverseProbability$>e&&ue(n,e)},U,He=(t,e)=>{if(!(t!=null&&t.length))return;U=0;let n=e?1-e:.4;if(Array.isArray(t))for(let r=t.length-1;r>=0;r--){const s=t[r];typeof s=="number"?n=1-s/10:re(s,n)}else re(t,n)};function Ge(t){const e=[],n=r=>{if(r)for(const s of r)e.includes(s.url)||(e.push(s.url),s.imports&&n(s.imports))};return n(t),e}var We=t=>{var n;const e=ge();return(n=t==null?void 0:t.qrls)==null?void 0:n.map(r=>{var a;const s=r.$refSymbol$||r.$symbol$,o=r.$chunk$,i=e.chunkForSymbol(s,o,(a=r.dev)==null?void 0:a.file);return i?i[1]:o}).filter(Boolean)};function ze(t,e,n){const r=e.prefetchStrategy;if(r===null)return[];if(!(n!=null&&n.manifest.bundleGraph))return We(t);if(typeof(r==null?void 0:r.symbolsToPrefetch)=="function")try{const o=r.symbolsToPrefetch({manifest:n.manifest});return Ge(o)}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}const s=new Set;for(const o of(t==null?void 0:t.qrls)||[]){const i=D(o.$refSymbol$||o.$symbol$);i&&i.length>=10&&s.add(i)}return[...s]}var Je=(t,e)=>{if(!(e!=null&&e.manifest.bundleGraph))return[...new Set(t)];Fe();let n=.99;for(const r of t.slice(0,15))He(r,n),n*=.85;return Qe()},Q=(t,e)=>{if(e==null)return null;const n=`${t}${e}`.split("/"),r=[];for(const s of n)s===".."&&r.length>0?r.pop():r.push(s);return r.join("/")},Ye=(t,e,n,r,s)=>{var l;const o=Q(t,(l=e==null?void 0:e.manifest)==null?void 0:l.preloader),i="/"+(e==null?void 0:e.manifest.bundleGraphAsset);if(o&&i&&n!==!1){const u=typeof n=="object"?{debug:n.debug,preloadProbability:n.ssrPreloadProbability}:void 0;Be(e==null?void 0:e.manifest.bundleGraph,u);const c=[];n!=null&&n.debug&&c.push("d:1"),n!=null&&n.maxIdlePreloads&&c.push(`P:${n.maxIdlePreloads}`),n!=null&&n.preloadProbability&&c.push(`Q:${n.preloadProbability}`);const h=c.length?`,{${c.join(",")}}`:"",v=`let b=fetch("${i}");import("${o}").then(({l})=>l(${JSON.stringify(t)},b${h}));`;r.push(m("link",{rel:"modulepreload",href:o}),m("link",{rel:"preload",href:i,as:"fetch",crossorigin:"anonymous"}),m("script",{type:"module",async:!0,dangerouslySetInnerHTML:v,nonce:s}))}const a=Q(t,e==null?void 0:e.manifest.core);a&&r.push(m("link",{rel:"modulepreload",href:a}))},Ve=(t,e,n,r,s)=>{if(r.length===0||n===!1)return null;const{ssrPreloads:o,ssrPreloadProbability:i}=Ke(typeof n=="boolean"?void 0:n);let a=o;const l=[],u=[],c=e==null?void 0:e.manifest.manifestHash;if(a){const g=e==null?void 0:e.manifest.preloader,f=e==null?void 0:e.manifest.core,E=Je(r,e);let S=4;const j=i*10;for(const y of E)if(typeof y=="string"){if(S<j)break;if(y===g||y===f)continue;if(u.push(y),--a===0)break}else S=y}const h=Q(t,c&&(e==null?void 0:e.manifest.preloader));let P=u.length?`${JSON.stringify(u)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(t)}+l;document.head.appendChild(e)});`:"";return h&&(P+=`window.addEventListener('load',f=>{f=_=>import("${h}").then(({p})=>p(${JSON.stringify(r)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),P&&l.push(m("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:P,nonce:s})),l.length>0?m(H,{children:l}):null},Xe=(t,e,n,r,s)=>{var o;if(n.preloader!==!1){const i=ze(e,n,r);if(i.length>0){const a=Ve(t,r,n.preloader,i,(o=n.serverData)==null?void 0:o.nonce);a&&s.push(a)}}};function Ke(t){return{...Ze,...t}}var Ze={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},Me='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),i=t=>{const e=[];return o.forEach((n=>e.push(...s(n,t)))),e},a=t=>{g(t),s(t,"[q\\\\:shadowroot]").forEach((t=>{const e=t.shadowRoot;e&&a(e)}))},c=t=>t&&"function"==typeof t.then;let l=!0;const f=(t,e,n=e.type)=>{let o=l;i("[on"+t+"\\\\:"+n+"]").forEach((r=>{o=!0,b(r,t,e,n)})),o||window[t.slice(1)].removeEventListener(n,"-window"===t?d:_)},p=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},u=(t,e)=>new CustomEvent(t,{detail:e}),b=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const i=e._qc_,a=i&&i.li.filter((t=>t[0]===s));if(a&&a.length>0){for(const t of a){const n=t[1].getFn([e,o],(()=>e.isConnected))(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",i=n.getAttribute("q:manifest-hash")||"dev",a=new URL(r,t.baseURI);for(const f of l.split("\\n")){const l=new URL(f,a),u=l.href,b=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,w;const m=f.startsWith("#"),y={qBase:r,qManifest:i,qVersion:s,href:u,symbol:b,element:e,reqTime:q};if(m){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(b)],_||(d="sync",w=Error("sym:"+b))}else{h("qsymbol",y);const t=l.href.split("#")[0];try{const e=import(t);p(n),_=(await e)[b],_||(d="no-symbol",w=Error(`${b} not in ${t}`))}catch(t){d||(d="async"),w=t}}if(!_){h("qerror",{importError:d,error:w,...y}),console.error(w);break}const g=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){h("qerror",{error:t,...y})}finally{t.__q_context__=g}}}},h=(e,n)=>{t.dispatchEvent(u(e,n))},q=t=>t.replace(/([A-Z])/g,(t=>"-"+t.toLowerCase())),_=async t=>{let e=q(t.type),n=t.target;for(f("-document",t,e);n&&n.getAttribute;){const o=b(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},d=t=>{f("-window",t,q(t.type))},w=()=>{var s;const c=t.readyState;if(!r&&("interactive"==c||"complete"==c)&&(o.forEach(a),r=1,h("qinit"),(null!=(s=e.requestIdleCallback)?s:e.setTimeout).bind(e)((()=>h("qidle"))),n.has("qvisible"))){const t=i("[on\\\\:qvisible]"),e=new IntersectionObserver((t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),b(n.target,"",u("qvisible",n)))}));t.forEach((t=>e.observe(t)))}},m=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})};let y;const g=(...t)=>{l=!0,clearTimeout(y),y=setTimeout((()=>l=!1),2e4);for(const r of t)"string"==typeof r?n.has(r)||(o.forEach((t=>m(t,r,_,!0))),m(e,r,d,!0),n.add(r)):o.has(r)||(n.forEach((t=>m(r,t,_,!0))),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?g(...r):g("click","input")),e.qwikevents={events:n,roots:o,push:g},m(t,"readystatechange",w),w()}',et=`const doc = document;
const win = window;
const events = /* @__PURE__ */ new Set();
const roots = /* @__PURE__ */ new Set([doc]);
let hasInitialized;
const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
const querySelectorAll = (query) => {
  const elements = [];
  roots.forEach((root) => elements.push(...nativeQuerySelectorAll(root, query)));
  return elements;
};
const findShadowRoots = (fragment) => {
  processEventOrNode(fragment);
  nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent) => {
    const shadowRoot = parent.shadowRoot;
    shadowRoot && findShadowRoots(shadowRoot);
  });
};
const isPromise = (promise) => promise && typeof promise.then === "function";
let doNotClean = true;
const broadcast = (infix, ev, type = ev.type) => {
  let found = doNotClean;
  querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el) => {
    found = true;
    dispatch(el, infix, ev, type);
  });
  if (!found) {
    window[infix.slice(1)].removeEventListener(
      type,
      infix === "-window" ? processWindowEvent : processDocumentEvent
    );
  }
};
const resolveContainer = (containerEl) => {
  if (containerEl._qwikjson_ === void 0) {
    const parentJSON = containerEl === doc.documentElement ? doc.body : containerEl;
    let script = parentJSON.lastElementChild;
    while (script) {
      if (script.tagName === "SCRIPT" && script.getAttribute("type") === "qwik/json") {
        containerEl._qwikjson_ = JSON.parse(
          script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1")
        );
        break;
      }
      script = script.previousElementSibling;
    }
  }
};
const createEvent = (eventName, detail) => new CustomEvent(eventName, {
  detail
});
const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
  const attrName = "on" + onPrefix + ":" + eventName;
  if (element.hasAttribute("preventdefault:" + eventName)) {
    ev.preventDefault();
  }
  if (element.hasAttribute("stoppropagation:" + eventName)) {
    ev.stopPropagation();
  }
  const ctx = element._qc_;
  const relevantListeners = ctx && ctx.li.filter((li) => li[0] === attrName);
  if (relevantListeners && relevantListeners.length > 0) {
    for (const listener of relevantListeners) {
      const results = listener[1].getFn([element, ev], () => element.isConnected)(ev, element);
      const cancelBubble = ev.cancelBubble;
      if (isPromise(results)) {
        await results;
      }
      if (cancelBubble) {
        ev.stopPropagation();
      }
    }
    return;
  }
  const attrValue = element.getAttribute(attrName);
  if (attrValue) {
    const container = element.closest("[q\\\\:container]");
    const qBase = container.getAttribute("q:base");
    const qVersion = container.getAttribute("q:version") || "unknown";
    const qManifest = container.getAttribute("q:manifest-hash") || "dev";
    const base = new URL(qBase, doc.baseURI);
    for (const qrl of attrValue.split("\\n")) {
      const url = new URL(qrl, base);
      const href = url.href;
      const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
      const reqTime = performance.now();
      let handler;
      let importError;
      let error;
      const isSync = qrl.startsWith("#");
      const eventData = {
        qBase,
        qManifest,
        qVersion,
        href,
        symbol,
        element,
        reqTime
      };
      if (isSync) {
        const hash = container.getAttribute("q:instance");
        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
        if (!handler) {
          importError = "sync";
          error = new Error("sym:" + symbol);
        }
      } else {
        emitEvent("qsymbol", eventData);
        const uri = url.href.split("#")[0];
        try {
          const module = import(
                        uri
          );
          resolveContainer(container);
          handler = (await module)[symbol];
          if (!handler) {
            importError = "no-symbol";
            error = new Error(\`\${symbol} not in \${uri}\`);
          }
        } catch (err) {
          importError || (importError = "async");
          error = err;
        }
      }
      if (!handler) {
        emitEvent("qerror", {
          importError,
          error,
          ...eventData
        });
        console.error(error);
        break;
      }
      const previousCtx = doc.__q_context__;
      if (element.isConnected) {
        try {
          doc.__q_context__ = [element, ev, url];
          const results = handler(ev, element);
          if (isPromise(results)) {
            await results;
          }
        } catch (error2) {
          emitEvent("qerror", { error: error2, ...eventData });
        } finally {
          doc.__q_context__ = previousCtx;
        }
      }
    }
  }
};
const emitEvent = (eventName, detail) => {
  doc.dispatchEvent(createEvent(eventName, detail));
};
const camelToKebab = (str) => str.replace(/([A-Z])/g, (a) => "-" + a.toLowerCase());
const processDocumentEvent = async (ev) => {
  let type = camelToKebab(ev.type);
  let element = ev.target;
  broadcast("-document", ev, type);
  while (element && element.getAttribute) {
    const results = dispatch(element, "", ev, type);
    let cancelBubble = ev.cancelBubble;
    if (isPromise(results)) {
      await results;
    }
    cancelBubble || (cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type));
    element = ev.bubbles && cancelBubble !== true ? element.parentElement : null;
  }
};
const processWindowEvent = (ev) => {
  broadcast("-window", ev, camelToKebab(ev.type));
};
const processReadyStateChange = () => {
  var _a;
  const readyState = doc.readyState;
  if (!hasInitialized && (readyState == "interactive" || readyState == "complete")) {
    roots.forEach(findShadowRoots);
    hasInitialized = 1;
    emitEvent("qinit");
    const riC = (_a = win.requestIdleCallback) != null ? _a : win.setTimeout;
    riC.bind(win)(() => emitEvent("qidle"));
    if (events.has("qvisible")) {
      const results = querySelectorAll("[on\\\\:qvisible]");
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            dispatch(entry.target, "", createEvent("qvisible", entry));
          }
        }
      });
      results.forEach((el) => observer.observe(el));
    }
  }
};
const addEventListener = (el, eventName, handler, capture = false) => {
  el.addEventListener(eventName, handler, { capture, passive: false });
};
let cleanTimer;
const processEventOrNode = (...eventNames) => {
  doNotClean = true;
  clearTimeout(cleanTimer);
  cleanTimer = setTimeout(() => doNotClean = false, 2e4);
  for (const eventNameOrNode of eventNames) {
    if (typeof eventNameOrNode === "string") {
      if (!events.has(eventNameOrNode)) {
        roots.forEach(
          (root) => addEventListener(root, eventNameOrNode, processDocumentEvent, true)
        );
        addEventListener(win, eventNameOrNode, processWindowEvent, true);
        events.add(eventNameOrNode);
      }
    } else {
      if (!roots.has(eventNameOrNode)) {
        events.forEach(
          (eventName) => addEventListener(eventNameOrNode, eventName, processDocumentEvent, true)
        );
        roots.add(eventNameOrNode);
      }
    }
  }
};
if (!("__q_context__" in doc)) {
  doc.__q_context__ = 0;
  const qwikevents = win.qwikevents;
  if (qwikevents) {
    if (Array.isArray(qwikevents)) {
      processEventOrNode(...qwikevents);
    } else {
      processEventOrNode("click", "input");
    }
  }
  win.qwikevents = {
    events,
    roots,
    push: processEventOrNode
  };
  addEventListener(doc, "readystatechange", processReadyStateChange);
  processReadyStateChange();
}`;function tt(t={}){return t.debug?et:Me}function T(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function nt(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var rt="<!DOCTYPE html>";async function ot(t,e){var J,Y,V;let n=e.stream,r=0,s=0,o=0,i=0,a="",l;const u=((J=e.streaming)==null?void 0:J.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},c=e.containerTagName??"html",h=e.containerAttributes??{},v=n,P=T(),g=nt(e),f=it(e.manifest);function E(){a&&(v.write(a),a="",r=0,o++,o===1&&(i=P()))}function S(d){const b=d.length;r+=b,s+=b,a+=d}switch(u.strategy){case"disabled":n={write:S};break;case"direct":n=v;break;case"auto":let d=0,b=!1;const X=u.maximunChunk??0,x=u.maximunInitialChunk??0;n={write(w){w==="<!--qkssr-f-->"?b||(b=!0):w==="<!--qkssr-pu-->"?d++:w==="<!--qkssr-po-->"?d--:S(w),d===0&&(b||r>=(o===0?x:X))&&(b=!1,E())}};break}c==="html"?n.write(rt):n.write("<!--cq-->"),f||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Ce(e,f);const j=f==null?void 0:f.manifest.injections,y=j?j.map(d=>m(d.tag,d.attributes??{})):[],I=((Y=e.qwikLoader)==null?void 0:Y.include)??"auto",N=f==null?void 0:f.manifest.qwikLoader;let G=!1;I!=="never"&&N&&(y.unshift(m("link",{rel:"modulepreload",href:`${g}${N}`}),m("script",{type:"module",async:!0,src:`${g}${N}`})),G=!0),Ye(g,f,e.preloader,y,(V=e.serverData)==null?void 0:V.nonce);const fe=T(),de=[];let W=0,z=0;await be(t,{stream:n,containerTagName:c,containerAttributes:h,serverData:e.serverData,base:g,beforeContent:y,beforeClose:async(d,b,X,x)=>{var Z,M,ee,te;W=fe();const w=T();l=await ve(d,b,void 0,x);const q=[];Xe(g,l,e,f,q);const pe=JSON.stringify(l.state,void 0,void 0);if(q.push(m("script",{type:"qwik/json",dangerouslySetInnerHTML:at(pe),nonce:(Z=e.serverData)==null?void 0:Z.nonce})),l.funcs.length>0){const _=h[De];q.push(m("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:ut(_,l.funcs),nonce:(M=e.serverData)==null?void 0:M.nonce}))}const he=!l||l.mode!=="static";if(!G&&(I==="always"||I==="auto"&&he)){const _=tt({debug:e.debug});q.push(m("script",{id:"qwikloader",async:!0,type:"module",dangerouslySetInnerHTML:_,nonce:(ee=e.serverData)==null?void 0:ee.nonce}))}const K=Array.from(b.$events$,_=>JSON.stringify(_));if(K.length>0){const _=`(window.qwikevents||(window.qwikevents=[])).push(${K.join(",")})`;q.push(m("script",{dangerouslySetInnerHTML:_,nonce:(te=e.serverData)==null?void 0:te.nonce}))}return lt(de,d),z=w(),m(H,{children:q})},manifestHash:(f==null?void 0:f.manifest.manifestHash)||"dev"+st()}),c!=="html"&&n.write("<!--/cq-->"),E();const me=l.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:o,manifest:f==null?void 0:f.manifest,size:s,isStatic:!me,timing:{render:W,snapshot:z,firstFlush:i}}}function st(){return Math.random().toString(36).slice(2)}function it(t){const e=t?{...R,...t}:R;if(!e||"mapper"in e)return e;if(e.mapping){const n={};return Object.entries(e.mapping).forEach(([r,s])=>{n[D(r)]=[r,s]}),{mapper:n,manifest:e,injections:e.injections||[]}}}var at=t=>t.replace(/<(\/?script)/gi,"\\x3C$1");function lt(t,e){var n;for(const r of e){const s=(n=r.$componentQrl$)==null?void 0:n.getSymbol();s&&!t.includes(s)&&t.push(s)}}var ct='document["qFuncs_HASH"]=';function ut(t,e){return ct.replace("HASH",t)+`[${e.join(`,
`)}]`}const ft=()=>{var n;const t=qe(),e=_e();return $(H,{children:[p("title",null,null,t.title,1,null),p("link",null,{rel:"canonical",href:we(r=>r.url.href,[e],"p0.url.href")},null,3,null),p("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),p("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),p("meta",{content:(n=t.meta.find(r=>r.name==="description"))==null?void 0:n.content},{name:"description"},null,3,null),p("link",null,{rel:"preconnect",href:"https://fonts.googleapis.com"},null,3,null),p("link",null,{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""},null,3,null),p("link",null,{href:"https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap",rel:"stylesheet"},null,3,null),t.meta.map(r=>C("meta",{...r},null,0,r.key)),t.links.map(r=>C("link",{...r},null,0,r.key)),t.styles.map(r=>C("style",{...r.props,get dangerouslySetInnerHTML(){return r.style},dangerouslySetInnerHTML:ne(r,"style")},null,0,r.key)),t.scripts.map(r=>C("script",{...r.props,get dangerouslySetInnerHTML(){return r.script},dangerouslySetInnerHTML:ne(r,"script")},null,0,r.key))]},1,"j2_0")},dt=oe(se(ft,"s_dID8pul3q1w")),mt=()=>$(Se,{children:[p("head",null,null,[p("meta",null,{charSet:"utf-8"},null,3,null),p("link",null,{rel:"manifest",href:"/manifest.json"},null,3,null),$(dt,null,3,"UU_0")],1,null),p("body",null,{lang:"en"},[$($e,null,3,"UU_1"),$(Pe,null,3,"UU_2")],1,null)]},1,"UU_3"),pt=oe(se(mt,"s_mrt09LF6hRg"));function vt(t){return ot($(pt,null,3,"E2_0"),{manifest:R,...t,containerAttributes:{lang:"en-us",...t.containerAttributes}})}export{vt as default};
