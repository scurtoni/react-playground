(()=>{"use strict";var e,t,r,n,a={4122:(e,t,r)=>{var n=r(7294),a=r(745),l=r(9655),o=r(9250),i=r(5998),u=r(7054),c=r(879),s=(r(4857),r(883)),f=r(2146),p=r(6605),d=function(e,t,r,n){return new(r||(r=Promise))((function(a,l){function o(e){try{u(n.next(e))}catch(e){l(e)}}function i(e){try{u(n.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}u((n=n.apply(e,t||[])).next())}))},h=function(e,t){var r,n,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;l&&(l=0,i[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},m=p.Z.create({baseURL:"https://swapi.dev/api/",headers:{"content-type":"application/json",accept:"application/json"}});const b=function(){return d(void 0,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return[4,m.get("people/").then((function(e){return e.data.data}))];case 1:return[2,e.sent()]}}))}))};var y=(0,u.hg)(f.I.API_REDUX_LIST_THUNK,(function(){return e=void 0,t=void 0,n=function(){return function(e,t){var r,n,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;l&&(l=0,i[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(e){switch(e.label){case 0:return[4,b()];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))},new((r=void 0)||(r=Promise))((function(a,l){function o(e){try{u(n.next(e))}catch(e){l(e)}}function i(e){try{u(n.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}u((n=n.apply(e,t||[])).next())}));var e,t,r,n}));const v=(0,u.oM)({name:"search",initialState:{term:"",results:[]},reducers:{updateResults:function(e,t){e.results=t.payload}},extraReducers:function(e){e.addCase(y.fulfilled,(function(e,t){e.results=t.payload}))}});var E=r(7877),g=r(9127),x=r(9635),w=r(9304),_=(0,c.UY)({search:v.reducer}),S=(0,s.l)((function(e){return e.pipe((0,w.l)(f.I.API_REDUX_LIST_OBSERVABLE),(0,E.z)((function(e){return(0,x.D)(b()).pipe((0,g.U)((function(e){return v.actions.updateResults(e)})))})))}));const A=(0,r(3512).ZP)(),k=(0,u.Bx)({thunk:!0}),P=(0,r(7469).k)();var T=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,l=t.length;a<l;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},N=T(T([],function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,l=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=l.next()).done;)o.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=l.return)&&r.call(l)}finally{if(a)throw a.error}}return o}(k),!1),[A,P],!1),O=r(4480),I=r(1663),U=r(1580),L=(r(660),r(2346)),R=r(7117),j=function(){var e=(0,u.xC)({reducer:_,devTools:!0,middleware:N});return P.run(S),e}();I.ZP.use(U.Z).use(R.Db).init({debug:!1,backend:{backends:[L.Z],backendOptions:[{loadPath:"http://base-url.com"}]},lng:document.documentElement.lang,fallbackLng:!1,load:"currentOnly",interpolation:{escapeValue:!1,prefix:"{",suffix:"}"},cache:{enabled:!0,prefix:"i18n_",expirationTime:36e5}});var C=n.lazy((function(){return r.e(28).then(r.bind(r,4028))})),B=n.lazy((function(){return r.e(312).then(r.bind(r,3312))})),D=n.lazy((function(){return r.e(715).then(r.bind(r,715))})),z=n.lazy((function(){return r.e(460).then(r.bind(r,8460))})),W=n.lazy((function(){return r.e(988).then(r.bind(r,8988))})),X=n.lazy((function(){return r.e(369).then(r.bind(r,5457))})),H=n.lazy((function(){return Promise.all([r.e(439),r.e(290)]).then(r.bind(r,5290))}));(0,a.s)(document.getElementById("root")).render(n.createElement((function(){return n.createElement(O.Wh,null,n.createElement(i.zt,{store:j},n.createElement(l.VK,null,n.createElement("div",null,n.createElement("ul",{className:"flex"},n.createElement("li",{className:"mr-6"},n.createElement(l.rU,{to:"/",className:"text-blue-500 hover:text-blue-800"},"Home")),n.createElement("li",{className:"mr-6"},n.createElement(l.rU,{to:"/redux-list",className:"text-blue-500 hover:text-blue-800"},"People List (Redux)")),n.createElement("li",{className:"mr-6"},n.createElement(l.rU,{to:"/recoil-list",className:"text-blue-500 hover:text-blue-800"},"People list (Recoil)")),n.createElement("li",{className:"mr-6"},n.createElement(l.rU,{to:"/contract-list",className:"text-blue-500 hover:text-blue-800"},"Contract list")),n.createElement("li",{className:"mr-6"},n.createElement(l.rU,{to:"/tailwind",className:"text-blue-500 hover:text-blue-800"},"Tailwind sample")),n.createElement("li",{className:"mr-6"},n.createElement(l.rU,{to:"/request-form",className:"text-blue-500 hover:text-blue-800"},"Request form"))),n.createElement("hr",null),n.createElement(n.Suspense,{fallback:n.createElement("div",null,"Loading..")},n.createElement(o.Z5,null,n.createElement(o.AW,{path:"/",element:n.createElement(C,null)}),n.createElement(o.AW,{path:"/redux-list",element:n.createElement(B,null)}),n.createElement(o.AW,{path:"/redux-list/:id",element:n.createElement(W,null)}),n.createElement(o.AW,{path:"/request-form",element:n.createElement(H,null)}),n.createElement(o.AW,{path:"/contract-list",element:n.createElement(z,null)}),n.createElement(o.AW,{path:"/recoil-list",element:n.createElement(D,null)}),n.createElement(o.AW,{path:"/tailwind",element:n.createElement(X,null)})))))))}),null))},2146:(e,t,r)=>{r.d(t,{I:()=>n});var n={SEARCH_POSTS:"@@search/SEARCH_POSTS",API_REDUX_LIST_OBSERVABLE:"@@search/API_REDUX_LIST_OBSERVABLE",API_REDUX_LIST_THUNK:"@@search/API_REDUX_LIST_THUNK",API_REDUX_LIST_SAGA:"@@search/API_REDUX_LIST_SAGA"}}},l={};function o(e){if(l[e])return l[e].exports;var t=l[e]={exports:{}};return a[e](t,t.exports,o),t.exports}o.m=a,o.x=e=>{},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var a=Object.create(null);o.r(a);var l={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>l[e]=()=>r[e]));return l.default=()=>r,o.d(a,l),a},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+".chunk.js",o.miniCssF=e=>e+".app.css",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="react-playground:",o.l=(e,t,a)=>{if(r[e])r[e].push(t);else{var l,i;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var s=u[c];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+a){l=s;break}}l||(i=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",n+a),l.src=e),r[e]=[t];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=r[e];if(delete r[e],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),i&&document.head.appendChild(l)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{if("undefined"!=typeof document){var e={143:0};o.f.miniCss=(t,r)=>{e[t]?r.push(e[t]):0!==e[t]&&{369:1}[t]&&r.push(e[t]=(e=>new Promise(((t,r)=>{var n=o.miniCssF(e),a=o.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(o=r[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var l=document.getElementsByTagName("style");for(n=0;n<l.length;n++){var o;if((a=(o=l[n]).getAttribute("data-href"))===e||a===t)return o}})(n,a))return t();((e,t,r,n,a)=>{var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onerror=l.onload=r=>{if(l.onerror=l.onload=null,"load"===r.type)n();else{var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=i,l.parentNode.removeChild(l),a(u)}},l.href=t,document.head.appendChild(l)})(e,a,0,t,r)})))(t).then((()=>{e[t]=0}),(r=>{throw delete e[t],r})))}}})(),(()=>{var e={143:0},t=[[4122,306]];o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>{n=e[t]=[r,a]}));r.push(n[2]=a);var l=o.p+o.u(t),i=new Error;o.l(l,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",i.name="ChunkLoadError",i.type=a,i.request=l,n[1](i)}}),"chunk-"+t)}};var r=e=>{},n=(n,a)=>{for(var l,i,[u,c,s,f]=a,p=0,d=[];p<u.length;p++)i=u[p],o.o(e,i)&&e[i]&&d.push(e[i][0]),e[i]=0;for(l in c)o.o(c,l)&&(o.m[l]=c[l]);for(s&&s(o),n&&n(a);d.length;)d.shift()();return f&&t.push.apply(t,f),r()},a=self.webpackChunkreact_playground=self.webpackChunkreact_playground||[];function l(){for(var r,n=0;n<t.length;n++){for(var a=t[n],l=!0,i=1;i<a.length;i++){var u=a[i];0!==e[u]&&(l=!1)}l&&(t.splice(n--,1),r=o(o.s=a[0]))}return 0===t.length&&(o.x(),o.x=e=>{}),r}a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a));var i=o.x;o.x=()=>(o.x=i||(e=>{}),(r=l)())})(),o.x()})();