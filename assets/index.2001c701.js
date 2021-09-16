import{s as t,r as e,c as s,a as n,u as o,d as a,o as r,b as l,e as i,t as c,f as d,g as u,w as h,h as p,i as m,j as g,k as f,l as v,m as b,n as w,p as x,q as y,v as k,x as _,y as M,z as S,F as j,A as C,T as R,B as D,C as T,D as O,E as A,G as z,H as $,I as E,V as L}from"./vendor.334b0b9f.js";const P=t=>{if(!t.ok)throw new Error("Failed to fetch docs data file from GitHub");return t.json()};const U=new Set(["gh-pages","web","docs"]);var B=new class{constructor(t){var e,s,n,o,a;this.options=t,this.id=this.options.id,this.name=this.options.name,this.global=this.options.global,this.repo=this.options.repo,this.defaultTag=null!=(e=this.options.defaultTag)?e:"main",this.defaultFile=null!=(s=this.options.defaultFile)?s:{category:"general",id:"welcome"},this.source=null!=(n=this.options.source)?n:`https://github.com/${this.repo}/blob/`,this.branchFilter=null!=(o=this.options.branchFilter)?o:t=>"main"!==t,this.tagFilter=null!=(a=this.options.tagFilter)?a:()=>!0,this.tags=null,this.recentTag=null}fetchTags(){return this.tags?Promise.resolve(this.tags):Promise.all([fetch(`https://api.github.com/repos/${this.repo}/branches`).then(P),fetch(`https://api.github.com/repos/${this.repo}/tags`).then(P)]).catch((t=>{if(localStorage[`source-${this.id}`]){console.error(t);const e=JSON.parse(localStorage[`source-${this.id}`]);return[e.branches,e.tags]}throw t})).then((e=>{const[s,n]=e;this.tags=[this.defaultTag],localStorage[`source-${this.id}`]=JSON.stringify({branches:s,tags:n});for(const t of s)t.name!==this.defaultTag&&this.branchFilter(t.name)&&this.tags.push(t.name);const o={};for(const a of n)if(t.valid(a.name)){const e=`${t.major(a.name)}.${t.minor(a.name)}`,s=t.patch(a.name);if(s<o[e])continue;o[e]=s}for(const a of n)if(a.name!==this.defaultTag&&this.tagFilter(a.name)){if(t.valid(a.name)){const e=`${t.major(a.name)}.${t.minor(a.name)}`;if(t.patch(a.name)<o[e])continue}this.tags.push(a.name)}return this.tags}))}async fetchDocs(t){const e=await fetch(`https://raw.githubusercontent.com/${this.repo}/docs/${t}.json`);return P(e)}}({id:"main",name:"Main library",global:"upDB",repo:"Up-Devs/up-devs.db",defaultTag:"main",branchFilter:t=>!U.has(t)&&!t.startsWith("dependabot"),tagFilter:e=>t.gte(e,"9.0.0")});const N=e(!1);class W{constructor(t,e){this.name=t.toLowerCase(),this.related=new Set([e])}addRelated(t){this.related.add(t)}matches(t){return t.includes(this.name)}}var G,I;(I=G||(G={}))[I.Class=0]="Class",I[I.Method=1]="Method",I[I.Property=2]="Property",I[I.Events=3]="Events",I[I.Typedefs=4]="Typedefs";class J{constructor(t,e,s,n,o,a){switch(this.name=t,this.type=e,this.parentName=s,this.parentType=n,this.access=o,this.scope=a,e){case 0:case 4:this.computedName=t;break;case 1:this.computedName=`${null!=s?s:""}.${t}()`;break;case 2:this.computedName=`${null!=s?s:""}.${t}`;break;case 3:this.computedName=`${null!=s?s:""}#${t}`}this.nameLowerCase=t.toLowerCase(),this.cleanedComputedName=this.computedName.replace(/[().#]/,"").toLowerCase()}get isPriority(){return 0===this.type||4===this.type}getLinkPath(){var t,e;if(4===this.type||4===this.parentType)return{name:"docs-source-tag-typedef-typedef",params:{typedef:null!=(t=this.parentName)?t:this.name}};const s={name:"docs-source-tag-class-class",params:{class:null!=(e=this.parentName)?e:this.name}};return 1!==this.type&&2!==this.type||(s.query={scrollTo:this.name}),3===this.type&&(s.query={scrollTo:`e-${this.name}`}),s}}const F=s((()=>K.state.searchIndex)),H=s((()=>K.state.searchRef));function V(t){const e=t.replace(/[\s().#]/g,"").toLowerCase();if(""===e)return[];let s=F.value.reduce(((t,s)=>{if(e.includes(s.name))for(const e of s.related){const n=t.get(e);n?(n.numMatches+=1,n.lengthMatches+=s.name.length):t.set(e,{numMatches:1,lengthMatches:s.name.length})}return t}),new Map);0===s.size&&e.length<10&&(s=F.value.reduce(((t,s)=>{if(s.name.includes(e))for(const e of s.related){const n=t.get(e);n?(n.numMatches+=1,n.lengthMatches+=s.name.length):t.set(e,{numMatches:1,lengthMatches:s.name.length})}return t}),new Map));return Array.from(s.entries()).map((([t,e])=>[H.value[t],e])).filter((([t])=>"private"!==t.access||N.value)).sort((([t,s],[n,o])=>{let a=0;return t.nameLowerCase===e?a+=t.isPriority?-10:-4:n.nameLowerCase===e&&(a+=n.isPriority?10:4),e.length>=7&&(t.cleanedComputedName.includes(e)&&(a-=30),n.cleanedComputedName.includes(e)&&(a+=30)),s.numMatches===o.numMatches&&(t.isPriority&&(a-=6),n.isPriority&&(a+=6),s.numMatches>1&&(a+=Math.abs(e.length-t.computedName.length)-Math.abs(e.length-n.computedName.length)),a+=o.lengthMatches-s.lengthMatches),o.numMatches-s.numMatches+a})).map((([t,e])=>t))}const Y=e(null),q=Symbol("docs"),K=n({state:{sources:[{source:B,name:B.name,id:B.id}],source:B,tag:B.defaultTag,docs:null,branches:[],file:null,stats:{downloads:`${225e6.toLocaleString()}+`,stars:`${11e3.toLocaleString()}+`,contributors:`${100..toLocaleString()}+`},searchIndex:[],searchRef:[]},mutations:{setSource(t,{source:e}){t.source=e},setTag(t,{tag:e}){t.tag=e},setDocs(t,{docs:e}){t.docs=e},setBranches(t,{branches:e}){t.branches=e},setFile(t,{file:e}){t.file=e},setStats(t,{stats:e}){t.stats=e},setSearchIndex(t,{searchIndex:e,searchRef:s}){t.searchIndex=e,t.searchRef=s}},actions:{fetchStats:async({commit:t})=>{let e=0,s=0,n=0;const o=t=>t.json(),a=()=>{},[r,l,i]=await Promise.all([fetch("https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/up-devs.db").then(o,a),fetch("https://api.github.com/repos/Up-Devs/up-devs.db").then(o,a),fetch("https://api.github.com/repos/Up-Devs/up-devs.db/stats/contributors").then(o,a)]);if(r){e=0;for(const t of r.downloads)e+=t.downloads}l&&(s=l.stargazers_count),i&&(n=i.length),t({type:"setStats",stats:{downloads:`${e.toLocaleString()}+`,stars:`${s.toLocaleString()}+`,contributors:`${n.toLocaleString()}+`}})},fetchDocs:async({commit:t},{inputSource:e,inputTag:s=e.defaultTag})=>{var n,o,a,r;let l;try{l=await e.fetchDocs(s)}catch(h){return t({type:"setDocs",docs:null}),t({type:"setTag",docs:null}),void(Y.value=h)}const i=[],c=[];let d=0;const u=(t,e,s,n,o,a)=>{const r=function(t){var e,s;return/^[_A-Z]+$/.test(t)?null!=(e=t.match(/[A-Z]+/g))?e:[]:null!=(s=t.match(/(([A-Z]{2,})(?=[A-Z]))|[A-Z][a-z]+|[a-z]+/g))?s:[]}(t),l=new J(t,e,s,n,o,a);i.push(l);const u=[];for(const i of r){const t=i.toLowerCase();let e=c.findIndex((e=>e.name===t));e>-1?c[e].addRelated(d):e=c.push(new W(t,d))-1,u.push(e)}return d+=1,u};for(const p of l.classes){const t=u(p.name,G.Class,void 0,void 0,p.access,p.scope),e=[];for(const s of null!=(n=p.methods)?n:[])u(s.name,G.Method,p.name,G.Class,s.access,s.scope),e.push(d-1);for(const s of null!=(o=p.props)?o:[])u(s.name,G.Property,p.name,G.Class,s.access,s.scope),e.push(d-1);for(const s of null!=(a=p.events)?a:[])u(s.name,G.Events,p.name,G.Class,s.access,s.scope),e.push(d-1);for(const s of t)for(const t of e)c[s].related.add(t)}for(const p of l.typedefs){const t=u(p.name,G.Typedefs,void 0,void 0,p.access,p.scope),e=[];for(const s of null!=(r=p.props)?r:[])u(s.name,G.Property,p.name,G.Typedefs,s.access,s.scope),e.push(d-1);for(const s of t)for(const t of e)c[s].related.add(t)}t({type:"setSearchIndex",searchIndex:c,searchRef:i}),l.classes.sort(((t,e)=>t.name.localeCompare(e.name))),l.typedefs.sort(((t,e)=>t.name.localeCompare(e.name)));for(const p of l.classes)p.props&&p.props.sort(((t,e)=>t.name.localeCompare(e.name))),p.methods&&p.methods.sort(((t,e)=>t.name.localeCompare(e.name))),p.events&&p.events.sort(((t,e)=>t.name.localeCompare(e.name)));l.links={any:"https://flow.org/en/docs/types/any",string:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",number:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",bigint:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",boolean:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",symbol:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",void:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",Object:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",Function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",Array:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",Set:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",Map:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",Date:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",RegExp:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",Promise:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",Error:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",EventEmitter:"https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter",Timeout:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout",Immediate:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_immediate",Buffer:"https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer",ReadableStream:"https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",ChildProcess:"https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_class_childprocess",Worker:"https://nodejs.org/api/worker_threads.html#worker_threads_class_worker",MessagePort:"https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport",MongooseDocument:"https://mongoosejs.com/docs/documents.html",MongooseConnection:"https://mongoosejs.com/docs/connections.html",ConnectionOptions:"https://mongoosejs.com/docs/connections.html"},l.externals=l.externals||[],l.classes=l.classes||[],l.typedefs=l.typedefs||[];for(const p of l.externals)l.links[p.name]=p.see[0].replace(/\{@link\s+(.+?)\s*\ Constants\}/i,"$1");for(const p of l.classes)l.links[p.name]={name:"docs-source-tag-class-class",params:{class:p.name}};for(const p of l.typedefs)l.links[p.name]={name:"docs-source-tag-typedef-typedef",params:{typedef:p.name}};"commando"===e.id&&(l.links.Message={name:"docs-source-tag-class-class",params:{source:"main",tag:"master",class:"Message"}}),l.global=e.global,l.source=e.source,l.id=e.id,l.tag=s,t({type:"setDocs",docs:l})},fetchTags:async({commit:t},{currentSource:e})=>{t({type:"setBranches",branches:await e.fetchTags()})}}});function Z(){return o(q)}var Q=a({setup(t){const e=Z(),n=s((()=>e.state.stats.downloads)),o=s((()=>e.state.stats.stars)),a=s((()=>e.state.stats.contributors));return(t,e)=>(r(),l("ul",null,[i("li",null,c(d(n))+" downloads",1),i("li",null,c(d(o))+" stars",1),i("li",null,c(d(a))+" contributors",1)]))}});const X={class:"bg-discord-red-560"},tt={class:"max-w-3xl mx-auto text-center px-16 pt-10 pb-4 text-gray-200"},et=p("Up-Devs.DB"),st=i("p",{class:"mb-4"},"An useful data-base for your projects. Helpful for storing your datas.",-1),nt=i("p",{class:"mb-4"},"Website originally created by the discord.js team",-1),ot={class:"text-xs break-words-legacy"},at=i("br",null,null,-1);var rt=a({setup(t){const s=e("83aedc4d3ae84daf62d50cb87b2a1890059e1e2b"),n=e(new Date(1631805933167).toUTCString());return(t,e)=>{const o=u("router-link");return r(),l("footer",X,[i("div",tt,[i("strong",null,[i(o,{to:"/"},{default:h((()=>[et])),_:1})]),st,nt,i(Q,{class:"mb-4"}),i("p",ot,[p(" commit: "+c(s.value),1),at,p(" built at: "+c(n.value),1)])])])}}});const lt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},it=i("g",{fill:"none"},[i("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var ct={name:"heroicons-outline-external-link",render:function(t,e){return r(),l("svg",lt,[it])}};const dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ut=i("g",{fill:"none"},[i("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var ht={name:"heroicons-outline-sun",render:function(t,e){return r(),l("svg",dt,[ut])}};const pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},mt=i("g",{fill:"none"},[i("path",{d:"M20.354 15.354A9 9 0 0 1 8.646 3.646A9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var gt={name:"heroicons-outline-moon",render:function(t,e){return r(),l("svg",pt,[mt])}};const ft={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},vt=i("g",{fill:"none"},[i("path",{d:"M21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var bt={name:"heroicons-outline-search",render:function(t,e){return r(),l("svg",ft,[vt])}};const wt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},xt=i("g",{fill:"none"},[i("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var yt={name:"heroicons-outline-arrow-right",render:function(t,e){return r(),l("svg",wt,[xt])}};const kt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},_t=i("g",{fill:"none"},[i("path",{d:"M4 6h16M4 12h16M4 18h16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Mt={name:"heroicons-outline-menu",render:function(t,e){return r(),l("svg",kt,[_t])}};const St={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},jt=i("g",{fill:"none"},[i("path",{d:"M6 18L18 6M6 6l12 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Ct={name:"heroicons-outline-x",render:function(t,e){return r(),l("svg",St,[jt])}};const Rt=m({storageKey:"theme"}),Dt=g(Rt),Tt={class:"sticky top-0 z-20"},Ot={class:"bg-discord-red-560"},At={class:"max-w-7xl mx-auto px-2 sm:px-4 md:flex md:justify-between lg:px-8"},zt={class:"hidden md:flex md:py-2 md:space-x-4 lg:space-x-8","aria-label":"Global navigation"},$t=p(" Up-Devs.DB "),Et=p(" Documentation "),Lt=i("span",{class:"mr-2"},"GitHub",-1),Pt={class:"relative h-16 flex md:max-w-md md:w-full lg:max-w-lg"},Ut={class:"relative z-10 flex items-center md:hidden"},Bt={class:"relative z-0 flex-1 px-2 flex lg:gap-2 items-center justify-center md:justify-end"},Nt=i("label",{for:"search",class:"sr-only"},"Search",-1),Wt={class:"relative"},Gt={class:"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center","aria-hidden":"true"},It={class:"relative z-10 flex items-center md:hidden"},Jt=i("span",{class:"sr-only"},"Open menu",-1),Ft={key:0,id:"mobile-menu",class:"md:hidden","aria-label":"Global navigation"},Ht={class:"pt-2 pb-3 px-2 space-y-1"},Vt=p("Up-Devs.DB"),Yt=p("Documentation"),qt=i("span",{class:"mr-2"},"Github",-1),Kt=i("span",{class:"mr-2"},"Guide",-1);var Zt=a({setup(t){const n=f(),o=v(),a=Z(),m=b(w).greater("md"),g=e(!1),D=e(),T=e(""),O=e(!1),A=e(-1),z=s((()=>{var t;return null==(t=a.state.source)?void 0:t.repo})),$=s((()=>(A.value=-1,V(T.value).slice(0,7)))),E=()=>{if($.value.length)return O.value=!1,A.value>=0?(n.push($.value[A.value].getLinkPath()),void(A.value=-1)):n.push({name:"docs-source-tag-search",query:{query:T.value}})},L=t=>{A.value+=1,A.value>Math.min(6,$.value.length-1)&&(A.value=0),t.preventDefault()},P=t=>{A.value-=1,A.value<0&&(A.value=Math.min(6,$.value.length-1)),t.preventDefault()},U=t=>{if(!t.target)return;const e=t.target.getAttribute("data-index");e&&(A.value=parseInt(e,10))};return x(m,(()=>g.value=!1)),y(D,(()=>{O.value=!1,A.value=-1})),(t,e)=>{const s=u("router-link"),n=ct,a=ht,m=gt,f=bt,v=yt,b=Mt,w=Ct;return r(),l("div",Tt,[i("header",Ot,[i("div",At,[i("nav",zt,[i(s,{to:"/",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t","active-class":"bg-discord-red-600"},{default:h((()=>[$t])),_:1}),i(s,{to:"/docs",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t","active-class":"bg-discord-red-600"},{default:h((()=>[Et])),_:1}),i("a",{href:`https://github.com/${d(z)}`,class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t",target:"_blank",rel:"noopener"},[Lt,i(n,{class:"h-5 w-5"})],8,["href"])]),i("div",Pt,[i("div",Ut,[i("button",{class:"\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\thover:bg-discord-red-630\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white focus:bg-discord-red-630\n\t\t\t\t\t\t\t","aria-label":"Switch to "+(d(Rt)?"light theme":"dark theme"),onClick:e[1]||(e[1]=t=>d(Dt)())},[d(Rt)?(r(),l(m,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(r(),l(a,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,["aria-label"])]),i("div",Bt,[i("button",{class:"\n\t\t\t\t\t\t\t\thidden\n\t\t\t\t\t\t\t\tmd:block\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\thover:bg-discord-red-630\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-1 focus:ring-inset focus:ring-white\n\t\t\t\t\t\t\t","aria-label":"Switch to "+(d(Rt)?"light theme":"dark theme"),onClick:e[2]||(e[2]=t=>d(Dt)())},[d(Rt)?(r(),l(m,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(r(),l(a,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,["aria-label"]),"/"!==d(o).path?(r(),l("div",{key:0,ref:D,class:"w-full sm:max-w-lg lg:max-w-xs"},[Nt,i("div",Wt,[i("div",Gt,[i(f,{class:"h-5 w-5 text-gray-200"})]),k(i("input",{id:"search","onUpdate:modelValue":e[3]||(e[3]=t=>T.value=t),name:"search",class:"\n\t\t\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\tbg-discord-red-600\n\t\t\t\t\t\t\t\t\t\tborder border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\tpl-10\n\t\t\t\t\t\t\t\t\t\tpr-3\n\t\t\t\t\t\t\t\t\t\ttext-base text-white\n\t\t\t\t\t\t\t\t\t\tplaceholder-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus:bg-discord-red-630\n\t\t\t\t\t\t\t\t\t\tfocus:text-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:placeholder-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:ring-2\n\t\t\t\t\t\t\t\t\t\tfocus:ring-inset\n\t\t\t\t\t\t\t\t\t\tfocus:ring-white\n\t\t\t\t\t\t\t\t\t\tlg:focus:ring-1\n\t\t\t\t\t\t\t\t\t",placeholder:"Search",type:"search",autocomplete:"off",autocapitalize:"off",autocorrect:"off",onFocus:e[4]||(e[4]=t=>O.value=!0),onInput:e[5]||(e[5]=t=>O.value=!0),onKeyup:M(E,["enter"]),onKeydown:[M(P,["up"]),M(L,["down"])]},null,40,["onKeyup","onKeydown"]),[[_,T.value]]),O.value&&T.value&&d($).length?(r(),l("div",{key:0,class:"absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center","aria-hidden":"true",onClick:E},[i(v,{class:"h-5 w-5 text-gray-200"})])):S("",!0),O.value&&T.value&&d($).length?(r(),l("div",{key:1,class:"absolute mt-1 w-full break-words-legacy border bg-discord-red-600 rounded-md",onMouseover:U},[i("ul",null,[(r(!0),l(j,null,C(d($),((t,n)=>(r(),l("li",{key:t.computedName,class:["\n\t\t\t\t\t\t\t\t\t\t\t\teven:bg-discord-red-560\n\t\t\t\t\t\t\t\t\t\t\t\tdark:even:bg-discord-red-630\n\t\t\t\t\t\t\t\t\t\t\t\thover:bg-discord-red-630\n\t\t\t\t\t\t\t\t\t\t\t\tdark:hover:bg-discord-red-660\n\t\t\t\t\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\t\t\t\t",{"ring-1 ring-gray-200 even:bg-discord-red-630 dark:even:bg-discord-red-660 bg-discord-red-630 dark:bg-discord-red-660":n===A.value}]},[i(s,{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-3\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-4\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:rounded-md\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:bg-discord-red-630\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:focus-visible:bg-discord-red-660\n\t\t\t\t\t\t\t\t\t\t\t\t",exact:"",to:t.getLinkPath(),"data-index":n,onClick:e[6]||(e[6]=t=>O.value=!1)},{default:h((()=>[p(c(t.computedName),1)])),_:2},1032,["to","data-index"])],2)))),128))])],32)):S("",!0)])],512)):S("",!0)]),i("div",It,[i("button",{type:"button",class:"\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white\n\t\t\t\t\t\t\t","aria-controls":"mobile-menu","aria-expanded":g.value,onClick:e[7]||(e[7]=t=>g.value=!g.value)},[Jt,i(b,{class:{hidden:g.value,block:!g.value},"aria-hidden":"true"},null,8,["class"]),i(w,{class:{block:g.value,hidden:!g.value},"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"])])])]),i(R,{"enter-active-class":"transition transform-gpu duration-300 ease-out","enter-from-class":"translate-x-12 opacity-0","enter-to-class":"translate-x-0 opacity-100"},{default:h((()=>[g.value?(r(),l("nav",Ft,[i("div",Ht,[i(s,{to:"/",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",onClick:e[8]||(e[8]=t=>g.value=!g.value)},{default:h((()=>[Vt])),_:1}),i(s,{to:"/docs",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",onClick:e[9]||(e[9]=t=>g.value=!g.value)},{default:h((()=>[Yt])),_:1}),i("a",{href:`https://github.com/${d(z)}`,class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",target:"_blank",rel:"noopener",onClick:e[10]||(e[10]=t=>g.value=!g.value)},[qt,i(n,{class:"h-5 w-5 inline-block"})],8,["href"]),i("a",{href:"https://updevs-db.js.org/guide",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",target:"_blank",rel:"noopener",onClick:e[11]||(e[11]=t=>g.value=!g.value)},[Kt,i(n,{class:"h-5 w-5 inline-block"})])])])):S("",!0)])),_:1})])])}}});const Qt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Xt=i("g",{fill:"none"},[i("path",{d:"M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var te={name:"heroicons-outline-download",render:function(t,e){return r(),l("svg",Qt,[Xt])}};function ee(t={}){const{immediate:s=!0,onNeedRefresh:n,onOfflineReady:o}=t,a=e(!1),r=e(!1);return{updateServiceWorker:function(t={}){const{immediate:e=!1,onNeedRefresh:s,onOfflineReady:n}=t;let o;return"serviceWorker"in navigator&&(o=new D("/sw.js",{scope:"/"}),o.addEventListener("activated",(t=>{t.isUpdate?window.location.reload():null==n||n()})),o.register({immediate:e}).then((t=>t))),async(t=!0)=>{}}({immediate:s,onNeedRefresh(){a.value=!0,null==n||n()},onOfflineReady(){r.value=!0,null==o||o()}}),offlineReady:r,needRefresh:a}}const se={key:0,class:"fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-20"},ne={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},oe={class:"p-2 rounded-lg bg-discord-red-600 dark:bg-discord-red-700 shadow-lg sm:p-3"},ae={class:"flex items-center justify-between flex-wrap"},re={class:"w-0 flex-1 flex items-center"},le={class:"flex p-2 rounded-lg bg-discord-red-530 dark:bg-discord-red-630"},ie={class:"ml-3 font-medium text-white truncate"},ce={class:"sm:hidden"},de={class:"hidden sm:inline"},ue={key:0,class:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},he={class:"order-2 flex-shrink-0 sm:order-3 sm:ml-2"},pe=i("span",{class:"sr-only"},"Dismiss",-1);var me=a({setup(t){const{offlineReady:e,needRefresh:s,updateServiceWorker:n}=ee(),o=()=>{e.value=!1,s.value=!1};return(t,a)=>{const u=te,h=Ct;return d(e)||d(s)?(r(),l("div",se,[i("div",ne,[i("div",oe,[i("div",ae,[i("div",re,[i("span",le,[i(u,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})]),i("p",ie,[i("span",ce,c(d(e)?"App ready to work offline.":"New content available."),1),i("span",de,c(d(e)?"App ready to work offline.":"New content available, click refresh to update."),1)])]),d(s)?(r(),l("div",ue,[i("button",{class:"\n\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\tpx-4\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tborder border-transparent\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\tfont-medium\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\tbg-discord-red-530\n\t\t\t\t\t\t\t\tdark:bg-discord-red-630\n\t\t\t\t\t\t\t\thover:bg-discord-red-460\n\t\t\t\t\t\t\t\tdark:hover:bg-discord-red-600\n\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t",onClick:a[1]||(a[1]=t=>d(n)(!0))}," Refresh ")])):S("",!0),i("div",he,[i("button",{type:"button",class:"-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white",onClick:o},[pe,i(h,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})])])])])])])):S("",!0)}}});const ge={class:"min-h-full grid grid-layout"},fe={id:"container",class:"grid grid-layout-container lg:custom-scroll"},ve={class:"bg-white dark:bg-[#1d1d1d]"};var be=a({setup:t=>(Z().dispatch("fetchStats"),(t,e)=>{const s=u("router-view"),n=rt;return r(),l(j,null,[i("div",ge,[i(Zt),i("div",fe,[i("div",ve,[i(s)]),i(n)])]),i(me)],64)})});let we;const xe={},ye=function(t,e){if(!e||0===e.length)return t();if(void 0===we){const t=document.createElement("link").relList;we=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if((t=`/${t}`)in xe)return;xe[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const n=document.createElement("link");return n.rel=e?"stylesheet":we,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e?new Promise(((t,e)=>{n.addEventListener("load",t),n.addEventListener("error",e)})):void 0}))).then((()=>t()))},ke={},_e={id:"app"},Me=i("img",{src:"https://user-images.githubusercontent.com/77716705/131206307-0840de3c-a3f7-48e8-9076-f97d163055c3.png"},null,-1);ke.render=function(t,e){return r(),l("div",_e,[Me])};const Se={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},je=i("g",{fill:"none"},[i("path",{d:"M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0l3-3m-3 3l3 3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Ce={name:"heroicons-outline-clipboard-copy",render:function(t,e){return r(),l("svg",Se,[je])}};const Re={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},De=i("g",{fill:"none"},[i("path",{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2l4-4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Te={name:"heroicons-outline-clipboard-check",render:function(t,e){return r(),l("svg",Re,[De])}};const Oe={class:"text-gray-200 bg-discord-red-560 p-4 md:text-lg mx-auto rounded-md shadow flex items-center"},Ae=i("span",{class:"hover:text-white mr-2"},"npm install up-devs.db",-1);var ze=a({setup(t){const s=e(),n=e(!1),o=T((t=>{t(),n.value=!1}),1e3),{show:a,hide:c}=O(s,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),d=async()=>{try{await navigator.clipboard.writeText("npm install up-devs.db"),a()}catch{}n.value=!0,o(c)};return(t,e)=>{const o=Ce,a=Te;return r(),l("code",Oe,[Ae,i("button",{ref:s,class:"focus:outline-none","aria-label":"Copy install command"},[n.value?(r(),l(a,{key:1,class:"inline-block fill-current text-discord-red-500 cursor-pointer mb-1","aria-hidden":"true",onClick:d})):(r(),l(o,{key:0,class:"inline-block fill-current text-gray-200 cursor-pointer hover:text-white mb-1","aria-hidden":"true",onClick:d}))],512)])}}});const $e={class:"bg-discord-red-500 py-20"},Ee={class:"max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12"},Le={class:"\n\t\t\tprose prose-discord\n\t\t\tdark:prose-light\n\t\t\tlg:prose-lg\n\t\t\tpx-6\n\t\t\tmx-auto\n\t\t\tpb-8\n\t\t\tw-full\n\t\t\txl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl\n\t\t"},Pe=A('<div class="col-span-full"><h2>About</h2><p> Up-Devs.DB is a powerful Node.js module which can be used saving your datas in data-bases very easily. </p><p> Currently supports <img src="https://i.imgur.com/QT0aT7z.png" height="17" width="17" alt="Class icon"> <a href="/#/docs/main/main/class/JsonDB" rel="noopener">JSON database</a> and <img src="https://i.imgur.com/QT0aT7z.png" height="17" width="17" alt="Class icon"> <a href="/#/docs/main/main/class/MongoDB" rel="noopener">MongoDB</a>! </p></div><div><h2>Why?</h2><ul><li>Easy to use!</li><li>Has extra methods/properties!</li><li>Similar to <a href="https://www.npmjs.com/package/quick.db" target="_blank" rel="noopener">Quick.DB</a> and <a href="https://www.npmjs.com/package/quickmongo" target="_blank" rel="noopener">QuickMongo</a>!</li></ul></div>',2),Ue=i("h2",null,"Statistics",-1),Be=i("p",{class:"text-center"},"... and growing!",-1);const Ne=[{name:"index",path:"/",component:a({setup(t){const e=Z();return s((()=>e.state.docs)).value||(e.dispatch("fetchDocs",{inputSource:B}),e.dispatch("fetchTags",{currentSource:B})),(t,e)=>(r(),l(j,null,[i("div",$e,[i("div",Ee,[i(ke,{class:"filter drop-shadow-lg my-6"}),i(ze)])]),i("div",Le,[Pe,i("div",null,[Ue,i(Q),Be])])],64))}}),props:!0},{path:"/docs",component:()=>ye((()=>import("./docs.aa89ba0b.js")),["assets/docs.aa89ba0b.js","assets/docs.675be814.css","assets/vendor.334b0b9f.js","assets/chevron-down.97d24cca.js","assets/headlessui.esm.5c113eea.js","assets/Spinner.e9e738a2.js","assets/Spinner.af24072b.css"]),children:[{name:"docs-source",path:":source",component:()=>ye((()=>import("./index.e705fb90.js")),["assets/index.e705fb90.js","assets/Spinner.e9e738a2.js","assets/Spinner.af24072b.css","assets/vendor.334b0b9f.js"]),props:!0},{name:"docs-source-tag-search",path:":source/:tag/search",component:()=>ye((()=>import("./search.dc1b4fb2.js")),["assets/search.dc1b4fb2.js","assets/search.055dc457.css","assets/vendor.334b0b9f.js"]),props:!0},{name:"docs-source-tag-category-file",path:":source/:tag/:category/:file",component:()=>ye((()=>import("./[file].45186766.js")),["assets/[file].45186766.js","assets/vendor.334b0b9f.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.76a1d2b2.js"]),props:!0},{name:"docs-source-tag-class-class",path:":source/:tag/class/:class",component:()=>ye((()=>import("./[class].e4ef70d8.js")),["assets/[class].e4ef70d8.js","assets/[class].32241939.css","assets/vendor.334b0b9f.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.76a1d2b2.js","assets/See.vue_vue&type=script&setup=true&lang.2d7bbf52.js","assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css","assets/chevron-down.97d24cca.js","assets/headlessui.esm.5c113eea.js"]),props:!0},{name:"docs-source-tag-typedef-typedef",path:":source/:tag/typedef/:typedef",component:()=>ye((()=>import("./[typedef].d0639aba.js")),["assets/[typedef].d0639aba.js","assets/vendor.334b0b9f.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.76a1d2b2.js","assets/See.vue_vue&type=script&setup=true&lang.2d7bbf52.js","assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css","assets/headlessui.esm.5c113eea.js"]),props:!0}],props:!0},{name:"all",path:"/:all(.*)*",component:()=>ye((()=>import("./[...all].6c73002e.js")),["assets/[...all].6c73002e.js","assets/vendor.334b0b9f.js"]),props:!0}];var We=z({history:$(),routes:Ne});const Ge=E(be);Ge.use(K,q),Ge.use(We),Ge.use(L),Ge.mount("#app");export{G as D,B as M,Ce as _,Te as a,ct as b,Y as f,N as i,V as s,Z as u};
