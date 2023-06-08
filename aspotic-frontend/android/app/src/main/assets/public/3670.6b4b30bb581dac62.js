"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3670],{7423:(N,B,y)=>{y.d(B,{Uw:()=>P,fo:()=>x,xz:()=>d});var c=y(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var a=(()=>{return(r=a||(a={})).Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",a;var r})();class d extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const j=r=>{var e,t,o,i,n;const l=r.CapacitorCustomPlatform||null,s=r.Capacitor||{},m=s.Plugins=s.Plugins||{},u=r.CapacitorPlatforms,T=(null===(e=null==u?void 0:u.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==l?l.name:(r=>{var e,t;return null!=r&&r.androidBridge?"android":null!==(t=null===(e=null==r?void 0:r.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(r)),ae=(null===(t=null==u?void 0:u.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==T()),le=(null===(o=null==u?void 0:u.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(f=>{const p=H.get(f);return!!(null!=p&&p.platforms.has(T())||q(f))}),q=(null===(i=null==u?void 0:u.currentPlatform)||void 0===i?void 0:i.getPluginHeader)||(f=>{var p;return null===(p=s.PluginHeaders)||void 0===p?void 0:p.find(A=>A.name===f)}),H=new Map,pe=(null===(n=null==u?void 0:u.currentPlatform)||void 0===n?void 0:n.registerPlugin)||((f,p={})=>{const A=H.get(f);if(A)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),A.proxy;const E=T(),U=q(f);let _;const me=function(){var g=(0,c.Z)(function*(){return!_&&E in p?_=_="function"==typeof p[E]?yield p[E]():p[E]:null!==l&&!_&&"web"in p&&(_=_="function"==typeof p.web?yield p.web():p.web),_});return function(){return g.apply(this,arguments)}}(),G=g=>{let v;const w=(...k)=>{const C=me().then(b=>{const O=((g,v)=>{var w,k;if(!U){if(g)return null===(k=g[v])||void 0===k?void 0:k.bind(g);throw new d(`"${f}" plugin is not implemented on ${E}`,a.Unimplemented)}{const C=null==U?void 0:U.methods.find(b=>v===b.name);if(C)return"promise"===C.rtype?b=>s.nativePromise(f,v.toString(),b):(b,O)=>s.nativeCallback(f,v.toString(),b,O);if(g)return null===(w=g[v])||void 0===w?void 0:w.bind(g)}})(b,g);if(O){const S=O(...k);return v=null==S?void 0:S.remove,S}throw new d(`"${f}.${g}()" is not implemented on ${E}`,a.Unimplemented)});return"addListener"===g&&(C.remove=(0,c.Z)(function*(){return v()})),C};return w.toString=()=>`${g.toString()}() { [capacitor code] }`,Object.defineProperty(w,"name",{value:g,writable:!1,configurable:!1}),w},J=G("addListener"),Y=G("removeListener"),ve=(g,v)=>{const w=J({eventName:g},v),k=function(){var b=(0,c.Z)(function*(){const O=yield w;Y({eventName:g,callbackId:O},v)});return function(){return b.apply(this,arguments)}}(),C=new Promise(b=>w.then(()=>b({remove:k})));return C.remove=(0,c.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield k()}),C},K=new Proxy({},{get(g,v){switch(v){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return U?ve:J;case"removeListener":return Y;default:return G(v)}}});return m[f]=K,H.set(f,{name:f,proxy:K,platforms:new Set([...Object.keys(p),...U?[E]:[]])}),K});return s.convertFileSrc||(s.convertFileSrc=f=>f),s.getPlatform=T,s.handleError=f=>r.console.error(f),s.isNativePlatform=ae,s.isPluginAvailable=le,s.pluginMethodNoop=(f,p,A)=>Promise.reject(`${A} does not have an implementation of "${p}".`),s.registerPlugin=pe,s.Exception=d,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},h=(r=>r.Capacitor=j(r))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),x=h.registerPlugin;class P{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var o=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n);const l=function(){var m=(0,c.Z)(function*(){return o.removeListener(e,t)});return function(){return m.apply(this,arguments)}}(),s=Promise.resolve({remove:l});return Object.defineProperty(s,"remove",{value:(m=(0,c.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield l()}),function(){return m.apply(this,arguments)})}),s;var m}removeAllListeners(){var e=this;return(0,c.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const o=this.listeners[e];o&&o.forEach(i=>i(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new h.Exception(e,a.Unimplemented)}unavailable(e="not available"){return new h.Exception(e,a.Unavailable)}removeListener(e,t){var o=this;return(0,c.Z)(function*(){const i=o.listeners[e];if(!i)return;const n=i.indexOf(t);o.listeners[e].splice(n,1),o.listeners[e].length||o.removeWindowListener(o.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const F=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),V=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class te extends P{getCookies(){return(0,c.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[i,n]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=V(i).trim(),n=V(n).trim(),t[i]=n}),t})()}setCookie(e){return(0,c.Z)(function*(){try{const t=F(e.key),o=F(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,n=(e.path||"/").replace("path=",""),l=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${i}; path=${n}; ${l};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,c.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,c.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,c.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}x("CapacitorCookies",{web:()=>new te});const re=function(){var r=(0,c.Z)(function*(e){return new Promise((t,o)=>{const i=new FileReader;i.onload=()=>{const n=i.result;t(n.indexOf(",")>=0?n.split(",")[1]:n)},i.onerror=n=>o(n),i.readAsDataURL(e)})});return function(t){return r.apply(this,arguments)}}();class ie extends P{request(e){return(0,c.Z)(function*(){const t=((r,e={})=>{const t=Object.assign({method:r.method||"GET",headers:r.headers},e),i=((r={})=>{const e=Object.keys(r);return Object.keys(r).map(i=>i.toLocaleLowerCase()).reduce((i,n,l)=>(i[n]=r[e[l]],i),{})})(r.headers)["content-type"]||"";if("string"==typeof r.data)t.body=r.data;else if(i.includes("application/x-www-form-urlencoded")){const n=new URLSearchParams;for(const[l,s]of Object.entries(r.data||{}))n.set(l,s);t.body=n.toString()}else if(i.includes("multipart/form-data")){const n=new FormData;if(r.data instanceof FormData)r.data.forEach((s,m)=>{n.append(m,s)});else for(const s of Object.keys(r.data))n.append(s,r.data[s]);t.body=n;const l=new Headers(t.headers);l.delete("content-type"),t.headers=l}else(i.includes("application/json")||"object"==typeof r.data)&&(t.body=JSON.stringify(r.data));return t})(e,e.webFetchExtra),o=((r,e=!0)=>r?Object.entries(r).reduce((o,i)=>{const[n,l]=i;let s,m;return Array.isArray(l)?(m="",l.forEach(u=>{s=e?encodeURIComponent(u):u,m+=`${n}=${s}&`}),m.slice(0,-1)):(s=e?encodeURIComponent(l):l,m=`${n}=${s}`),`${o}&${m}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),i=o?`${e.url}?${o}`:e.url,n=yield fetch(i,t),l=n.headers.get("content-type")||"";let m,u,{responseType:s="text"}=n.ok?e:{};switch(l.includes("application/json")&&(s="json"),s){case"arraybuffer":case"blob":u=yield n.blob(),m=yield re(u);break;case"json":m=yield n.json();break;default:m=yield n.text()}const M={};return n.headers.forEach((T,R)=>{M[R]=T}),{data:m,headers:M,status:n.status,url:n.url}})()}get(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}x("CapacitorHttp",{web:()=>new ie})},1468:(N,B,y)=>{y.d(B,{z:()=>z});var c=y(529),D=y(4004),W=y(4650),I=y(7151);let z=(()=>{class ${constructor(a,d){this.http=a,this.authService=d,this.url="http://webapps.mycnsamastertaii.tech:3000/api"}searchSong(a,d,L){return this.http.get(`${this.url}/search/track/${encodeURI(a)}?offset=${d}&limit=${L}`).pipe((0,D.U)(j=>j.map(h=>{const x={id:h.album.id,name:h.album.name,artists:h.album.artists.map(P=>({id:P.id,name:P.name})),images:h.album.images.map(P=>({height:P.height,url:P.url,width:P.width})),release_date:h.album.release_date,release_date_precision:h.album.release_date_precision,total_tracks:h.album.total_tracks};return h.comments.map(P=>({author:P.author,comment:P.comment,rate:P.rate})),{_id:h._id,name:h.name,duration_ms:h.duration_ms,album:x,comments:[],userId:"",id:h.id,preview_url:h.preview_url}})))}getRecomendations(){return this.http.get(`${this.url}/recomendations`)}createTracks(a){const d={headers:new c.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.post(`${this.url}/tracks`,{tracks:a},d)}createTrack(a){const d={headers:new c.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.post(`${this.url}/track`,a,d)}getTracks(){return this.http.get(`${this.url}/getTracks`)}getTrackById(a){return this.http.get(`${this.url}/tracks/${a}`)}addCommentToTrack(a,d){const L=`${this.url}/tracks/${a}/comments`,j=this.authService.getUserIdFromToken();return d.userId=j,this.http.post(L,d)}deleteTrack(a){const d={headers:new c.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.delete(`${this.url}/track/${a}`,d)}deleteComment(a,d){return this.http.delete(`${this.url}/tracks/${a}/comments/${d}`)}getTracksByArtist(a){return this.http.get(`${this.url}/tracks/searchArtistName/${a}`)}getTracksByName(a){return this.http.get(`${this.url}/tracks/searchTrackName/${a}`)}getTracksByDate(a){return this.http.get(`${this.url}/tracks/searchTrackDate/${a}`)}editTrack(a,d){const L={headers:new c.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.put(`${this.url}/track/${a}`,d,L)}}return $.\u0275fac=function(a){return new(a||$)(W.LFG(c.eN),W.LFG(I.e))},$.\u0275prov=W.Yz7({token:$,factory:$.\u0275fac,providedIn:"root"}),$})()}}]);