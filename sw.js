var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,c=(e,t)=>{for(var s in t||(t={}))n.call(t,s)&&i(e,s,t[s]);if(a)for(var s of a(t))r.call(t,s)&&i(e,s,t[s]);return e},o=(e,a)=>t(e,s(a));try{self["workbox:core:6.1.5"]&&_()}catch(ee){}const h=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class l extends Error{constructor(e,t){super(h(e,t)),this.name=e,this.details=t}}const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},d=e=>[u.prefix,e,u.suffix].filter((e=>e&&e.length>0)).join("-"),p=e=>{(e=>{for(const t of Object.keys(u))e(t)})((t=>{"string"==typeof e[t]&&(u[t]=e[t])}))},f=e=>e||d(u.precache),w=e=>e||d(u.runtime);function g(e,t){const s=t();return e.waitUntil(s),s}try{self["workbox:precaching:6.1.5"]&&_()}catch(ee){}function m(e){if(!e)throw new l("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new l("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),n=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:n.href}}class y{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class b{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let v;async function R(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new l("cross-origin-copy-response",{origin:s});const a=e.clone(),n={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},r=t?t(n):n,i=function(){if(void 0===v){const t=new Response("");if("body"in t)try{new Response(t.body),v=!0}catch(e){v=!1}v=!1}return v}()?a.body:await a.blob();return new Response(i,r)}function x(e,t){const s=new URL(e);for(const a of t)s.searchParams.delete(a);return s.href}class C{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const U=new Set;try{self["workbox:strategies:6.1.5"]&&_()}catch(ee){}function q(e){return"string"==typeof e?new Request(e):e}class T{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new C,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=q(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(r){throw new l("plugin-error-request-will-fetch",{thrownError:r})}const n=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:n,response:e});return e}catch(i){throw a&&await this.runCallbacks("fetchDidFail",{error:i,event:t,originalRequest:a.clone(),request:n.clone()}),i}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=q(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i=c(c({},n),{cacheName:a});s=await caches.match(r,i);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await c({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=q(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const n=await this.getCacheKey(s,"write");if(!t)throw new l("cache-put-with-no-response",{url:(r=n.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:h,matchOptions:u}=this._strategy,d=await self.caches.open(h),p=this.hasCallback("cacheDidUpdate"),f=p?await async function(e,t,s,a){const n=x(t.url,s);if(t.url===n)return e.match(t,a);const r=o(c({},a),{ignoreSearch:!0}),i=await e.keys(t,r);for(const c of i)if(n===x(c.url,s))return e.match(c,a)}(d,n.clone(),["__WB_REVISION__"],u):null;try{await d.put(n,p?i.clone():i)}catch(w){throw"QuotaExceededError"===w.name&&await async function(){for(const e of U)await e()}(),w}for(const c of this.iterateCallbacks("cacheDidUpdate"))await c({cacheName:h,oldResponse:f,newResponse:i.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=q(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=o(c({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class k{constructor(e={}){this.cacheName=w(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new T(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new l("no-response",{url:t.url})}catch(n){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(c){r=c}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}class E extends k{constructor(e={}){e.cacheName=f(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(E.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new l("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!(await t.cachePut(e,s.clone())))throw new l("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==E.copyRedirectedCacheableResponsesPlugin&&(a===E.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(E.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}E.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},E.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await R(e):e};class L{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new E({cacheName:f(e),plugins:[...t,new b({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=m(s),n="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,n),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return g(e,(async()=>{const t=new y;this.strategy.plugins.push(t);for(const[n,r]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(n),a=new Request(n,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return g(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new l("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=c({cacheKey:t},s.params),this.strategy.handle(s))}}let N;const P=()=>(N||(N=new L),N);try{self["workbox:routing:6.1.5"]&&_()}catch(ee){}const K=e=>e&&"object"==typeof e?e:{handle:e};class O{constructor(e,t,s="GET"){this.handler=K(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=K(e)}}class A extends O{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class M{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:n,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:n})}catch(l){o=Promise.reject(l)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async a=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:n})}catch(r){a=r}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw a}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const r of n){let n;const i=r.match({url:e,sameOrigin:t,request:s,event:a});if(i)return n=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,K(e))}setCatchHandler(e){this._catchHandler=K(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new l("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let S;const j=()=>(S||(S=new M,S.addFetchListener(),S.addCacheListener()),S);function D(e,t,s){let a;if("string"==typeof e){const n=new URL(e,location.href);a=new O((({url:e})=>e.href===n.href),t,s)}else if(e instanceof RegExp)a=new A(e,t,s);else if("function"==typeof e)a=new O(e,t,s);else{if(!(e instanceof O))throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return j().registerRoute(a),a}class I extends O{constructor(e,t){super((({request:s})=>{const a=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}function W(e){e.then((()=>{}))}class H{constructor(e,t,{onupgradeneeded:s,onversionchange:a}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=a||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise(((e,t)=>{let s=!1;setTimeout((()=>{s=!0,t(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const a=indexedDB.open(this._name,this._version);a.onerror=()=>t(a.error),a.onupgradeneeded=e=>{s?(a.transaction.abort(),a.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},a.onsuccess=()=>{const t=a.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}})),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map((e=>e.key))}async getAllMatching(e,{index:t,query:s=null,direction:a="next",count:n,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",((i,c)=>{const o=i.objectStore(e),h=t?o.index(t):o,l=[],u=h.openCursor(s,a);u.onsuccess=()=>{const e=u.result;e?(l.push(r?e:e.value),n&&l.length>=n?c(l):e.continue()):c(l)}}))}async transaction(e,t,s){return await this.open(),await new Promise(((a,n)=>{const r=this._db.transaction(e,t);r.onabort=()=>n(r.error),r.oncomplete=()=>a(),s(r,(e=>a(e)))}))}async _call(e,t,s,...a){return await this.transaction([t],s,((s,n)=>{const r=s.objectStore(t),i=r[e].apply(r,a);i.onsuccess=()=>n(i.result)}))}close(){this._db&&(this._db.close(),this._db=null)}}H.prototype.OPEN_TIMEOUT=2e3;const F={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[_,te]of Object.entries(F))for(const e of te)e in IDBObjectStore.prototype&&(H.prototype[e]=async function(t,...s){return await this._call(e,t,_,...s)});const B={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};try{self["workbox:expiration:6.1.5"]&&_()}catch(ee){}const Q=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class G{constructor(e){this._cacheName=e,this._db=new H("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise(((t,s)=>{const a=indexedDB.deleteDatabase(e);a.onerror=()=>{s(a.error)},a.onblocked=()=>{s(new Error("Delete blocked"))},a.onsuccess=()=>{t()}}))})(this._cacheName)}async setTimestamp(e,t){const s={url:e=Q(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put("cache-entries",s)}async getTimestamp(e){return(await this._db.get("cache-entries",this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction("cache-entries","readwrite",((s,a)=>{const n=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),r=[];let i=0;n.onsuccess=()=>{const s=n.result;if(s){const a=s.value;a.cacheName===this._cacheName&&(e&&a.timestamp<e||t&&i>=t?r.push(s.value):i++),s.continue()}else a(r)}})),a=[];for(const n of s)await this._db.delete("cache-entries",n.id),a.push(n.url);return a}_getId(e){return this._cacheName+"|"+Q(e)}}class ${constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new G(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const a of t)await s.delete(a,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,W(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class V{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:a})=>{if(!a)return null;const n=this._isResponseDateFresh(a),r=this._getCacheExpiration(s);W(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(c){}return n?a:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),U.add(t))}_getCacheExpiration(e){if(e===w())throw new l("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new $(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}try{self["workbox:cacheable-response:6.1.5"]&&_()}catch(ee){}class J{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}var z,X;p({prefix:"djs",suffix:"v3",precache:"precache",runtime:"runtime"}),caches.delete("djs-precache-v1"),caches.delete("djs-cdn-v1"),caches.delete("djs-external-v1"),caches.delete("djs-docs-v1"),function(e){P().precache(e)}([{"revision":"f89b5cffce92176bd24119e82ee67ba7","url":"assets/[...all].6c73002e.js"},{"revision":"3daa89a40a51671c07008ebd0c51828c","url":"assets/[class].32241939.css"},{"revision":"f2dadfcf4b54750d5df32a179bc5f8be","url":"assets/[class].c7bbb7a5.js"},{"revision":"cc55a132e17efb4c9431e4f7fbfe9219","url":"assets/[file].f2089d9f.js"},{"revision":"aaf26ae2534f1cc9e42a99650707ea3e","url":"assets/[typedef].a9e2afe4.js"},{"revision":"8a6be42b56a2d0d28eca47ee80658a6d","url":"assets/chevron-down.97d24cca.js"},{"revision":"8de51a99590aa246726b4871214cbabb","url":"assets/docs.16b3162d.js"},{"revision":"ae18be84077a8474c08b0c3f43d66aca","url":"assets/docs.675be814.css"},{"revision":"c0dd545ff64265fb63831d8c16da91a8","url":"assets/headlessui.esm.5c113eea.js"},{"revision":"d5b9735678b8eb3f4987ae3a2f94fbf5","url":"assets/index.50bb8ff7.js"},{"revision":"9417931a3f1a767975ae185b6c0335cc","url":"assets/index.7868bdff.css"},{"revision":"dea3111d85d350ff9a9045c87fe0ccca","url":"assets/index.e705fb90.js"},{"revision":"85318940f0219997c7e2b0fb96a835ee","url":"assets/search.055dc457.css"},{"revision":"4861d5a12f7d7bc57de90053cb44b421","url":"assets/search.59f2977c.js"},{"revision":"d309aeb3671cd9ba1f855d4b00f3e392","url":"assets/See.vue_vue&type=script&setup=true&lang.3783ae66.js"},{"revision":"43521ec5c448d0cf3d04cf45d245a1c0","url":"assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css"},{"revision":"104ee45aa9c68e74768813b01ddd3333","url":"assets/SourceButton.vue_vue&type=script&setup=true&lang.692174f2.js"},{"revision":"54f81455561049f59a226ec21e2968c7","url":"assets/Spinner.af24072b.css"},{"revision":"24c709e623f24d0eb78e0c02fe792621","url":"assets/Spinner.e9e738a2.js"},{"revision":"7cd0df9eba7a586b3279766c4dc353af","url":"assets/vendor.334b0b9f.js"},{"revision":"d209702f83a7636ccd38edfaa0c72f99","url":"index.html"},{"revision":"399792787f22d2d23920f097016e0587","url":"service-worker.js"},{"revision":"e4c2b2dc7c05ef954dbb61150f0af3a0","url":"android-chrome-192x192.png"},{"revision":"e4c2b2dc7c05ef954dbb61150f0af3a0","url":"android-chrome-512x512.png"},{"revision":"1322de21de41cbd323de0e20eb595699","url":"manifest.webmanifest"}]),function(e){const t=P();D(new I(t,e))}(z),self.addEventListener("activate",(e=>{const t=f();e.waitUntil((async(e,t="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e));return await Promise.all(s.map((e=>self.caches.delete(e)))),s})(t).then((e=>{})))})),D(new class extends O{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super((e=>this._match(e)),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const s=e.pathname+e.search;for(const a of this._denylist)if(a.test(s))return!1;return!!this._allowlist.some((e=>e.test(s)))}}((X="index.html",P().createHandlerBoundToURL(X))));const Y=new class extends k{constructor(e){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(B)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));let a,n=await t.cacheMatch(e);if(n);else try{n=await s}catch(r){a=r}if(!n)throw new l("no-response",{url:e.url,error:a});return n}}({cacheName:"djs-external-v3",plugins:[new V({maxEntries:50,maxAgeSeconds:86400,purgeOnQuotaError:!0}),new class{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new J(e)}}({statuses:[0,200]})]});var Z;Z=e=>"GET"===e.request.method?Y.handle(e):fetch(e.request),j().setDefaultHandler(Z),D(/^https:\/\/raw\.githubusercontent\.com\/brawlup\/.*\.json/i,new class extends k{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(B),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[],a=[];let n;if(this._networkTimeoutSeconds){const{id:r,promise:i}=this._getTimeoutPromise({request:e,logs:s,handler:t});n=r,a.push(i)}const r=this._getNetworkPromise({timeoutId:n,request:e,logs:s,handler:t});a.push(r);const i=await t.waitUntil((async()=>await t.waitUntil(Promise.race(a))||await r)());if(!i)throw new l("no-response",{url:e.url});return i}_getTimeoutPromise({request:e,logs:t,handler:s}){let a;return{promise:new Promise((t=>{a=setTimeout((async()=>{t(await s.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:a}){let n,r;try{r=await a.fetchAndCachePut(t)}catch(i){n=i}return e&&clearTimeout(e),!n&&r||(r=await a.cacheMatch(t)),r}}({cacheName:"djs-docs-v3",plugins:[new V({maxEntries:20,maxAgeSeconds:604800,purgeOnQuotaError:!0})]})),D(/^.*\\.(png|jpg|jpeg|gif|svg|ico)/i,new class extends k{async _handle(e,t){let s,a=await t.cacheMatch(e);if(!a)try{a=await t.fetchAndCachePut(e)}catch(n){s=n}if(!a)throw new l("no-response",{url:e.url,error:s});return a}}({cacheName:"djs-media-v3",plugins:[new V({maxEntries:50,maxAgeSeconds:86400,purgeOnQuotaError:!0})]})),self.addEventListener("install",(()=>{self.skipWaiting()})),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}));
