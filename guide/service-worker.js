if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,r,i)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+e.slice(1)};return Promise.all(r.map((e=>{switch(e){case"exports":return a;case"module":return d;default:return s(e)}}))).then((s=>{const e=i(...s);return a.default||(a.default=e),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(s){"use strict";s.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/0.styles.215a03e6.css",revision:"9066b152b266a0d3940aa292f432aa4f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/13.4c32234d.js",revision:"7002f4971b75aec32a9cbcdbd149966b"},{url:"assets/js/14.09cdaa57.js",revision:"4268655e34485f79d5aace6d0574527c"},{url:"assets/js/app.31f4525b.js",revision:"43db648dd2a12810298cab82c1dce68f"},{url:"assets/js/layout-Blog.be8ae81a.js",revision:"cbb78f2ea3003357f2a2bc6778745c14"},{url:"assets/js/layout-Layout.1998cff3.js",revision:"615af1cdfdb2892ed4c398bae9720f46"},{url:"assets/js/layout-NotFound.d937943a.js",revision:"8d185edde91003af7ef134fea8819980"},{url:"assets/js/layout-Slide.f80f02fe.js",revision:"af9f6e7d6daf4cd0646726bcf01b3847"},{url:"assets/js/page-Home.c5adeff5.js",revision:"b21361f661ddc9324dede89808c4f9e2"},{url:"assets/js/page-InstallingNodejsandUp-DevsDB.076fe184.js",revision:"e927ae40f270bd01320a2441fb4c7873"},{url:"assets/js/page-Welcome!.c20a18a6.js",revision:"4e961349beb17a6af2af6e9a8ed9d45f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.fee4a75c.js",revision:"f389f9834b63a1265d745b7854e2d063"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.955cc1eb.js",revision:"fdae14f628d11cb64bd2c920a02b10f3"},{url:"assets/js/vendors~layout-Layout.8a8b30c0.js",revision:"87a79fe9707acf8e36ab6a4fdfdf8b43"},{url:"assets/js/vendors~photo-swipe.fadd62dc.js",revision:"62719a783a16907b748a5e7087ccb372"},{url:"404.html",revision:"e876c7764e3a782b191cedf049764d65"},{url:"guide/index.html",revision:"ce935ea593b98df1b57be259af8c070a"},{url:"guide/start/installation/index.html",revision:"d0d30db84039d93dec35d3c0b551af2c"},{url:"index.html",revision:"4ff6503cf961e08321c27b7b24191260"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
