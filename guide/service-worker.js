if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,i,r)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return a;case"module":return d;default:return s(e)}}))).then((s=>{const e=r(...s);return a.default||(a.default=e),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(s){"use strict";s.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/0.styles.215a03e6.css",revision:"9066b152b266a0d3940aa292f432aa4f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/18.834a6059.js",revision:"407dc1af20bd2394ffb92a7efe9c5d9d"},{url:"assets/js/19.09ddcea6.js",revision:"efb55082f2dda54d96dd697334272f80"},{url:"assets/js/app.919bb363.js",revision:"92b4259ce523c3ecd96a1650c6d5890b"},{url:"assets/js/layout-Blog.be8ae81a.js",revision:"cbb78f2ea3003357f2a2bc6778745c14"},{url:"assets/js/layout-Layout.1998cff3.js",revision:"615af1cdfdb2892ed4c398bae9720f46"},{url:"assets/js/layout-NotFound.d937943a.js",revision:"8d185edde91003af7ef134fea8819980"},{url:"assets/js/layout-Slide.f80f02fe.js",revision:"af9f6e7d6daf4cd0646726bcf01b3847"},{url:"assets/js/page-CreatingyourfirstJsonDBclass.6b775775.js",revision:"c266645d86cfab4b190cd8485510d29a"},{url:"assets/js/page-CreatingyourfirstMongoDBclass.0ac07ba9.js",revision:"788a242c61abd50aab80df4e37d06e0a"},{url:"assets/js/page-GettingStarted.ae14d003.js",revision:"a19fafafd46285e34ecadebb29cee1e3"},{url:"assets/js/page-Home.3a5437d2.js",revision:"4ecef982c7858c724d603a12cc9b2c39"},{url:"assets/js/page-ImportdatastoJsonDB.ada314b3.js",revision:"7c4240d629e5ddb54bd2cbfd2585d274"},{url:"assets/js/page-ImportdatastoMongoDB.c63f1717.js",revision:"a919979b2ae47b357b0bd03f98e7da54"},{url:"assets/js/page-InstallingNodejsandUp-DevsDB.2115729f.js",revision:"5021e57aa6985bbc9092f9aa90c04465"},{url:"assets/js/page-Welcome!.bec0ea52.js",revision:"aaa51f17e8caf912ef2cfc6f8fbd49a4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.fee4a75c.js",revision:"f389f9834b63a1265d745b7854e2d063"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.955cc1eb.js",revision:"fdae14f628d11cb64bd2c920a02b10f3"},{url:"assets/js/vendors~layout-Layout.2a364318.js",revision:"47f7b7ba142aa004a2ee54449331e883"},{url:"assets/js/vendors~photo-swipe.29950414.js",revision:"c9526b4cb9077d20b6b29921718fb470"},{url:"404.html",revision:"c1323e5a3a53c249ef2f6523d83f6f49"},{url:"guide/index.html",revision:"bab6145df83506509c9ca8314adbc2f3"},{url:"guide/jsonDB/first/index.html",revision:"ebc461c63281cfcbffbcb7b2b1480876"},{url:"guide/jsonDB/import/index.html",revision:"9d360b8ff326c007b1fcd19094716aac"},{url:"guide/jsonDB/start/index.html",revision:"3ab836a20e0ba3023bd008fe1722c0b2"},{url:"guide/mongoDB/first/index.html",revision:"983443dee8d2eec96f41e49455908a4b"},{url:"guide/mongoDB/import/index.html",revision:"81da60e443fcc0088655de4016b117d6"},{url:"guide/mongoDB/start/index.html",revision:"2f9a33bb57670490525b1692ccdbc61c"},{url:"guide/start/installation/index.html",revision:"f033e66d10d56f97873dacbda496510c"},{url:"index.html",revision:"126a85896b2923f89f562b86fc401ce1"}],{}),s.cleanupOutdatedCaches()}));
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
