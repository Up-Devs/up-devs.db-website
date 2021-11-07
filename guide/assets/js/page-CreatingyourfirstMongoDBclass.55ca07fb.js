(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{427:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"creating-your-first-mongodb-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-first-mongodb-class"}},[t._v("#")]),t._v(" Creating your first MongoDB class")]),t._v(" "),a("h2",{attrs:{id:"creating-a-mongodb-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-mongodb-class"}},[t._v("#")]),t._v(" Creating a MongoDB class")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If you don't have a mongo database yet, please check "),a("RouterLink",{attrs:{to:"/guide/mongoDB/start.html"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MongoDB "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'up-devs.db'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" db "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MongoDB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mongodb+srv://username:password@updevs-db.mongodb.net/mongo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Your mongo connection string */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'up-devs.db'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Your model name */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" consoleEvents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* or false */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://updevs-db.js.org/docs/#/docs/main/main/class/MongoDB",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docs 📗"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Warning")]),t._v(" "),a("p",[t._v("NEVER, EVER publish or publicly share your mongo connection string. If someone can access it; they can delete datas, save other datas and they can access your datas.\n"),a("br"),a("br"),t._v("To prevent this from happening, create this class in a private file.")])]),t._v(" "),a("h2",{attrs:{id:"setting-deleting-and-fetching-datas-basic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-deleting-and-fetching-datas-basic"}},[t._v("#")]),t._v(" Setting, deleting and fetching datas (basic)")]),t._v(" "),a("h3",{attrs:{id:"setting-a-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-a-data"}},[t._v("#")]),t._v(" Setting a data")]),t._v(" "),a("p",[t._v("The most important thing for a database: Setting a data. You can easily do this with:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://updevs-db.js.org/docs/#/docs/main/main/class/MongoDB?scrollTo=set",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docs 📗"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("You can see your setted datas in your MongoDB Compass.\nGuide "),a("RouterLink",{attrs:{to:"/guide/mongoDB/start.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"deleting-a-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deleting-a-data"}},[t._v("#")]),t._v(" Deleting a data")]),t._v(" "),a("p",[t._v("When you don't like a data, you can throw it in the trash! It's easy as:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://updevs-db.js.org/docs/#/docs/main/main/class/MongoDB?scrollTo=delete",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docs 📗"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("When you delete a data it's irrecoverable, so think twice before deleting them.")]),t._v(" "),a("h3",{attrs:{id:"fetching-a-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetching-a-data"}},[t._v("#")]),t._v(" Fetching a data")]),t._v(" "),a("p",[t._v("When you save a data, you can access it with:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://updevs-db.js.org/docs/#/docs/main/main/class/MongoDB?scrollTo=fetch",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docs 📗"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);