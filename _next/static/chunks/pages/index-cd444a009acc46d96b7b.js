(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8158:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r,i=n(9008),o=n(7294);!function(e){e.RESET="RESET",e.SET_REGION="SET_REGION",e.SET_PROVINCE="SET_PROVINCE",e.SET_CITY="SET_CITY",e.SET_STREET="SET_STREET",e.SET_NUMBER_EGON="SET_NUMBER_EGON"}(r||(r={}));var a={region:"",province:"",city:"",street:"",number:"",egon:""},c=function(e,t){switch(t.type){case r.RESET:return a;case r.SET_REGION:return{region:t.payload};case r.SET_PROVINCE:return{region:e.region,province:t.payload};case r.SET_CITY:return{region:e.region,province:e.province,city:t.payload};case r.SET_STREET:return{region:e.region,province:e.province,city:e.city,street:t.payload};case r.SET_NUMBER_EGON:return{region:e.region,province:e.province,city:e.city,street:e.street,number:t.payload,egon:t.egon};default:return e}},s=n(5893),l=(0,o.createContext)({state:a,dispatch:function(){}}),u=function(){return(0,o.useContext)(l)},d=function(e){var t=e.children,n=(0,o.useReducer)(c,a),r=n[0],i=n[1];return(0,s.jsx)(l.Provider,{value:{state:r,dispatch:i},children:t})},p=function(e){var t=e.href,n=e.text,r=e.children,i=e.className;return(0,s.jsxs)("a",{className:"text-sm font-light text-gray-300 hover:underline ".concat(i),target:"_blank",rel:"noopener noreferrer",href:t,children:[n,r]})},f=function(){return(0,s.jsxs)("footer",{className:"flex flex-col items-center justify-center w-full bg-indigo-900 py-2",children:[(0,s.jsxs)("p",{children:["Creato da"," ",(0,s.jsx)(p,{href:"https://edoardo.ranghieri.com",text:"TheEdoRan",className:"text-white !text-base font-semibold hover:no-underline"})," ","con \u2764\ufe0f"]}),(0,s.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,s.jsx)("p",{children:(0,s.jsx)(p,{href:"https://github.com/theedoran/mappatura2021",text:"Codice Sorgente"})}),(0,s.jsx)("p",{children:(0,s.jsx)(p,{href:"https://forum.fibra.click/d/22321-esiti-mappatura-infratel-2021",text:"Informazioni"})})]})]})},x=n(5861),m=n(5671),h=n(7326),b=n(136),g=n(2963),v=n(1120),j=n(2407),y=n(4942),E=n(7757),w=n.n(E),C=n(4156),N=n.n(C),O=n(9066);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,v.Z)(e);if(t){var i=(0,v.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,g.Z)(this,n)}}var _=function(e){(0,b.Z)(n,e);var t=S(n);function n(e,r){var i;return(0,m.Z)(this,n),i=t.call(this),(0,y.Z)((0,h.Z)(i),"status",0),i.message=e,i.status=r,i}return n}((0,j.Z)(Error)),T=function(e){429===e.status?O.ZP.error("Hey, vacci piano!\nRiprova tra una decina di minuti.",{id:"search-field-too-many-requests-error"}):O.ZP.error("Errore nel comunicare con il server.\nRiprova pi\xf9 tardi.",{id:"search-field-error"})},R=function(){var e=(0,x.Z)(w().mark((function e(t){var n;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mappatura2021.duckdns.org/api").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new _(n.statusText,n.status);case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=N()(R,{promise:!0,primitive:!0});function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,y.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=(0,n(5152).default)((function(){return Promise.all([n.e(774),n.e(384)]).then(n.bind(n,9384))}),{ssr:!1,loadableGenerated:{webpack:function(){return[9384]},modules:["../components/layout/SearchField.tsx -> react-select"]}}),Z=function(e){return e.map((function(e){return{value:e,label:e}}))},U=function(e){return e.map((function(e){return{value:e.number,label:e.number,egon:e.egon}}))},F=function(e){var t=e.context,n=e.disabled,i=e.title,a=e.className,c=e.menuPlacement,l=e.showOptionsOnClick,d=void 0!==l&&l,p=u(),f=p.state,m=p.dispatch,h=(0,o.useState)([]),b=h[0],g=h[1],v=(0,o.useState)(""),j=v[0],y=v[1],E=(0,o.useCallback)((function(e){var n,i,o=e.get,a=e.fetch,c=e.payload,s=e.egon;switch(t){case"regions":return o?f.region:a?k("/regions"):m({type:r.SET_REGION,payload:c});case"provinces":return o?f.province:a?(i=f.region,k("/".concat(encodeURIComponent(i),"/provinces"))):m({type:r.SET_PROVINCE,payload:c});case"cities":return o?f.city:a?(n=f.province,k("/".concat(encodeURIComponent(n),"/cities"))):m({type:r.SET_CITY,payload:c});case"streets":return o?f.street:a?function(e,t){return k("/".concat(encodeURIComponent(e),"/").concat(encodeURIComponent(t),"/streets"))}(f.province,f.city):m({type:r.SET_STREET,payload:c});case"numbers":return o?f.number:a?function(e,t,n){return k("/".concat(encodeURIComponent(e),"/").concat(encodeURIComponent(t),"/").concat(encodeURIComponent(n),"/numbers"))}(f.province,f.city,f.street):m({type:r.SET_NUMBER_EGON,payload:c,egon:s});default:return}}),[t,m,f]),C=(0,o.useCallback)((0,x.Z)(w().mark((function e(){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,E({fetch:!0});case 5:if(r=e.sent,"numbers"!==t){e.next=9;break}return g(U(r)),e.abrupt("return");case 9:g(Z(r)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0),T(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,12]])}))),[t,E,n]),N=(0,o.useCallback)((function(){if(!d&&!j)return[{label:"Digita un nome",value:"__search_placeholder",isDisabled:!0}];var e=b.filter((function(e){var t=e.label;return null===t||void 0===t?void 0:t.toLowerCase().includes(j.toLowerCase())}));return"numbers"!==t&&j&&(e=e.sort((function(e,t){var n=e.label,r=t.label;return n.length-r.length||n.localeCompare(r)})).slice(0,100)),e}),[b,d,j,t]);return(0,o.useEffect)((function(){C()}),[f,C]),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("h3",{className:"text-indigo-200 text-xl mb-3",children:i}),(0,s.jsx)(M,{isDisabled:n,cacheOptions:!0,defaultOptions:!0,options:N(),onInputChange:function(e){return y(e)},menuPlacement:c,styles:{control:function(e,t){var n=t.isDisabled;return I(I({},e),{},{backgroundColor:n?"#b0b0b0":"#f7f7f7",fontStyle:n?"italic":"normal"})},option:function(e,t){var n=t.isDisabled,r=t.isFocused;return I(I({},e),{},{backgroundColor:n?"transparent":r?"#deebff":"white",color:"#4760a3"})},placeholder:function(e){return I(I({},e),{},{lineHeight:"1rem"})}},value:function(){var e=E({get:!0});return e?{label:e,value:e}:null}(),onChange:function(e){!function(e){var t=e.payload,n=e.egon;E({get:!1,payload:t,egon:n})}({payload:e.value,egon:e.egon})},noOptionsMessage:function(e){return e.inputValue?"Nessun risultato":""},className:"w-full text-blue-900 ".concat(a),placeholder:"".concat(d?"Seleziona":"Cerca"," ").concat(i.toLowerCase())})]})},D={"":{text:"bianco",className:"bg-white text-black border-black"},n:{text:"nero",className:"bg-black border-white"},g:{text:"grigio",className:"bg-gray-500 border-whtie"}},V={30:"30-99 Mbit/s",100:"100-199 Mbit/s",200:"200-299 Mbit/s",300:"300-1000 Mbit/s",1e3:"> 1000 Mbit/s"},G={0:"< 30 Mbit/s",1:"< 300 Mbit/s",2:">= 300 Mbit/s"},z=function(e){var t=e.text,n=e.children;return(0,s.jsxs)("h2",{className:"text-2xl sm:text-3xl text-indigo-100 uppercase",children:[t," ",n]})},B=function(e){var t=e.children;return(0,s.jsx)("div",{className:"flex flex-col gap-5 items-center",children:t})},L=function(e){var t=e.data,n=(0,o.useRef)(null);return(0,o.useEffect)((function(){var e;null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[]),(0,s.jsxs)("div",{ref:n,className:"flex flex-col items-center gap-10",children:[(0,s.jsxs)(B,{children:[(0,s.jsx)(z,{text:"Colore del civico",children:(0,s.jsx)("span",{className:"text-white font-medium",children:t.number})}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"text-4xl sm:text-5xl py-3 px-4 border-2 ".concat(D[t.color].className),children:D[t.color].text.toUpperCase()}),(0,s.jsx)(p,{href:"https://fibra.click/aree-nere-grigie-bianche/",text:"Maggiori informazioni sui colori"})]})]}),!!t.peakSpeed&&(0,s.jsxs)(B,{children:[(0,s.jsx)(z,{text:"Velocit\xe0 di picco"}),(0,s.jsx)("pre",{className:"text-3xl sm:text-5xl",children:V[t.peakSpeed]})]}),(0,s.jsxs)(B,{children:[(0,s.jsx)(z,{text:"Velocit\xe0 massima"}),(0,s.jsx)("pre",{className:"text-3xl sm:text-5xl",children:G[t.below300Mbps]})]})]})},Y=function(e){var t=e.children,n=e.disabled,r=e.className,i=e.onClick,o=e.type;return(0,s.jsx)("button",{disabled:n,className:"mt-3 outline-none border-2 py-2 px-2 sm:px-4 sm:py-3 rounded-lg shadow-sm transition-all hover:brightness-110 disabled:hover:brightness-100 disabled:grayscale disabled:cursor-default ".concat(r),type:o,onClick:i,children:t})},W=function(){return(0,s.jsx)("div",{className:"w-full border-t lg:w-auto lg:border-l border-gray-300 opacity-30"})},q=function(e){var t=e.className;return(0,s.jsxs)("svg",{className:"w-16 h-16 text-indigo-100 animate-spin ".concat(t),viewBox:"0 0 186 186",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M186 93C186 144.362 144.362 186 93 186C41.6375 186 0 144.362 0 93C0 41.6375 41.6375 0 93 0C144.362 0 186 41.6375 186 93ZM20.46 93C20.46 133.063 52.9373 165.54 93 165.54C133.063 165.54 165.54 133.063 165.54 93C165.54 52.9373 133.063 20.46 93 20.46C52.9373 20.46 20.46 52.9373 20.46 93Z",fill:"#F5F5F5",fillOpacity:"0.2"}),(0,s.jsx)("path",{d:"M29.8863 24.6943C47.1213 8.76942 69.7393 -0.0515139 93.2051 0.000226065C116.671 0.0519661 139.25 8.97255 156.414 24.9733L142.463 39.9392C129.075 27.4586 111.463 20.5005 93.1599 20.4602C74.8566 20.4198 57.2146 27.3001 43.7713 39.7216L29.8863 24.6943Z",fill:"#F5F5F5",fillOpacity:"0.8"})]})},Q=function(){var e=u(),t=e.state,n=e.dispatch,i=(0,o.useState)(null),a=i[0],c=i[1],l=(0,o.useState)(!1),d=l[0],p=l[1];return(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:items-stretch w-full pb-5 gap-10 lg:gap-20",children:[(0,s.jsxs)("form",{className:"flex flex-col items-center gap-6 w-80 sm:w-[28rem]",onSubmit:function(e){var n;(e.preventDefault(),t.egon)&&(p(!0),c(null),(n=t.egon,k("/egon?id=".concat(n))).then((function(e){return c(e)})).catch((function(e){console.error(e),T(e)})).finally((function(){return p(!1)})))},children:[(0,s.jsx)(F,{title:"Regione",context:"regions",menuPlacement:"bottom",showOptionsOnClick:!0}),(0,s.jsx)(F,{title:"Provincia",context:"provinces",disabled:!t.region,menuPlacement:"bottom",showOptionsOnClick:!0}),(0,s.jsx)(F,{title:"Citt\xe0",context:"cities",disabled:!t.region||!t.province,menuPlacement:"bottom",showOptionsOnClick:!0}),(0,s.jsxs)("div",{className:"flex w-full gap-2",children:[(0,s.jsx)(F,{title:"Via",context:"streets",disabled:!t.region||!t.province||!t.city,menuPlacement:"top"}),(0,s.jsx)(F,{title:"Civico",context:"numbers",disabled:!t.region||!t.province||!t.city||!t.street,menuPlacement:"top",showOptionsOnClick:!0})]}),(0,s.jsxs)("div",{className:"flex justify-center items-center gap-5",children:[(0,s.jsx)(Y,{disabled:!t.egon,className:"bg-yellow-400 text-blue-900",type:"submit",children:t.egon&&a||d?"Riesegui la ricerca":"Esegui la ricerca"}),!!a&&!!t.egon&&(0,s.jsx)(Y,{className:"bg-red-500 text-indigo-100",type:"button",onClick:function(e){e.preventDefault(),c(null),n({type:r.RESET})},children:"Pulisci i campi"})]})]}),d&&!a&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(W,{}),(0,s.jsx)("div",{className:"flex items-center justify-center w-80",children:(0,s.jsx)(q,{})})]}),!d&&!!a&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(W,{}),(0,s.jsx)(L,{data:a})]})]})};function H(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{children:"Esito Mappatura Infratel 2021 | Ricerca il tuo numero civico"}),(0,s.jsx)("meta",{name:"description",content:"Scopri le informazioni riguardanti la copertura in fibra ottica prevista entro il 2026 al tuo indirizzo."}),(0,s.jsx)("meta",{name:"google-site-verification",content:"J21o39Q5f6SmTWkCZmkgJq6KV6aZ-FC5E6WSOQxgL0U"}),(0,s.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"favicon.ico"})]}),(0,s.jsxs)("main",{className:"flex flex-1 flex-col p-5 justify-center items-center w-full",children:[(0,s.jsx)("h1",{className:"text-2xl sm:text-4xl font-medium mb-1 drop-shadow-lg",children:"Mappatura Infratel 2021"}),(0,s.jsx)("h2",{className:"sm:text-lg italic font-light text-blue-300 drop-shadow-lg mb-10",children:"Copertura prevista entro il 2026 in Italia"}),(0,s.jsx)(d,{children:(0,s.jsx)(Q,{})}),(0,s.jsx)(p,{className:"text-center whitespace-pre-line mt-6",href:"https://www.paypal.com/donate/?hosted_button_id=KYWCW2M82AY28",text:"Questo sito \xe8 gratis e senza pubblicit\xe0.\nOffrimi un \ud83c\udf75 per tenere in vita questo progetto."})]}),(0,s.jsx)(f,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8158)}])}},function(e){e.O(0,[774,829,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);