(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9845)}])},9845:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ie}});var i,r=n(5893),o=n(9008),a=n.n(o),l=n(7294);!function(e){e.RESET="RESET",e.SET_REGION="SET_REGION",e.SET_PROVINCE="SET_PROVINCE",e.SET_CITY="SET_CITY",e.SET_STREET="SET_STREET",e.SET_NUMBER_EGON="SET_NUMBER_EGON"}(i||(i={}));var s={region:"",province:"",city:"",street:"",number:"",egon:""},c=function(e,t){switch(t.type){case i.RESET:return s;case i.SET_REGION:return{region:t.payload};case i.SET_PROVINCE:return{region:e.region,province:t.payload};case i.SET_CITY:return{region:e.region,province:e.province,city:t.payload};case i.SET_STREET:return{region:e.region,province:e.province,city:e.city,street:t.payload};case i.SET_NUMBER_EGON:return{region:e.region,province:e.province,city:e.city,street:e.street,number:t.payload,egon:t.egon};default:return e}},u=(0,l.createContext)({state:s,dispatch:function(){}}),d=function(){return(0,l.useContext)(u)},p=function(e){var t=e.children,n=(0,l.useReducer)(c,s),i=n[0],o=n[1];return(0,r.jsx)(u.Provider,{value:{state:i,dispatch:o},children:t})},f=function(e){var t=e.href,n=e.text,i=e.children,o=e.className;return(0,r.jsxs)("a",{className:"text-sm font-light text-gray-300 hover:underline ".concat(o),target:"_blank",rel:"noopener noreferrer",href:t,children:[n,i]})};function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(s){l=!0,r=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(e){var t=e.text,n=e.children;return(0,r.jsxs)("details",{className:"pb-3",children:[(0,r.jsx)("summary",{className:"text-xl text-indigo-100 cursor-pointer",children:t}),(0,r.jsx)("div",{className:"ml-5 text-indigo-200",children:n})]})},b=function(){var e=m(l.useState(!1),2),t=e[0],n=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{className:"text-sm font-light text-gray-300 hover:underline",type:"button",onClick:function(){return n(!0)},children:"FAQ"}),t?(0,r.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/30 outline-none focus:outline-none",onClick:function(){return n(!1)},children:(0,r.jsxs)("div",{className:"flex flex-col rounded-lg shadow-lg w-[48rem] h-[70vh] m-6 bg-indigo-900 text-indigo-50",onClick:function(e){return e.stopPropagation()},children:[(0,r.jsxs)("div",{className:"flex justify-between p-4 sm:px-6 border-b border-indigo-50",children:[(0,r.jsx)("h1",{className:"text-2xl sm:text-3xl font-semibold",children:"FAQ"}),(0,r.jsx)("button",{className:"text-2xl sm:text-3xl font-semibold",type:"button",onClick:function(){return n(!1)},children:"\xd7"})]}),(0,r.jsxs)("div",{className:"px-4 my-4 sm:px-6 overflow-y-auto overflow-y-overlay scrollbar-gutter-stable scrollbar-thin",children:[(0,r.jsxs)(h,{text:"Perch\xe9 non trovo il mio indirizzo?",children:["Probabilmente perch\xe9 il tuo indirizzo non era censito o era bianco nelle consultazioni del 2015-17.",(0,r.jsx)("br",{}),"Se il tuo comune, la tua via o il tuo civico sono cambiati negli ultimi cinque anni, prova a cercare sia con i dati vecchi che con i nuovi."]}),(0,r.jsx)(h,{text:"Perch\xe9 alcuni civici sono duplicati?",children:"Perch\xe9 nei dati pubblicati da Infratel sono presenti con la stessa denominazione ma id diverso. In caso di civici duplicati l'esponente \xe8 utilizzato per numerarli."}),(0,r.jsxs)(h,{text:"Cosa rappresenta il colore del civico?",children:["Il colore del civico \xe8 un modo per indicare quanto \xe8 redditizio per gli operatori privati quel civico. Nello specifico un civico \xe8 ",(0,r.jsx)("b",{children:"nero"})," se \xe8 coperto da pi\xf9 reti NGA indipendenti, ",(0,r.jsx)("b",{children:"grigio"})," se \xe8 coperto da una sola rete NGA, ",(0,r.jsx)("b",{children:"bianco"})," se non \xe8 coperto da alcuna rete NGA.",(0,r.jsx)("br",{}),"La definizione di reti indipendenti \xe8 cambiata negli anni, nelle consultazioni pi\xf9 recenti reti NGA dello stesso operatore e reti di operatori diversi che condividono l'ultimo miglio (es. FTTC SLU) non sono considerate indipendenti."]}),(0,r.jsx)(h,{text:"Cosa significa NGA?",children:"Una rete si definisce NGA se \xe8 in grado di fornire almeno 30 Mbps in download e almeno 15 Mbps in upload ad un singolo utente. Da questa definizione vengono tipicamente escluse le FWA su frequenze non licenziate."}),(0,r.jsxs)(h,{text:"Cosa significa VHCN?",children:["Per rete VHCH si intende, genericamente, una rete che \xe8 o sar\xe0 in grado di fornire 1 Gbps in download ad un singolo utente in tipiche condizioni di picco di traffico. La definizione precisa applicata nelle consultazioni \xe8 per\xf2 cambiata nel tempo.",(0,r.jsx)("br",{}),"Nella consultazione 2019 una rete era definita VHCN se era una rete FTTH o FTTB in grado di fornire almeno 100 Mbps in download e almeno 50 Mbps in upload ad un singolo utente.",(0,r.jsx)("br",{}),"Dalla consultazione 2020 in poi alla definizione precedente \xe8 stata aggiunta una specifica per le reti FWA, sono considerate VHCN le reti FWA che sono in grado di fornire, ad un singolo utente in tipiche condizioni di picco di traffico, almeno 1 Gbps in download, almeno 200 Mbps in upload e latenza inferiore o uguale a 10 millisecondi al primo peering point."]}),(0,r.jsx)(h,{text:"Perch\xe9 nella consultazione 2021 non \xe8 indicato il colore del mio civico?",children:"La consultazione 2021 \xe8 divisa in due parti, una per i civici che nelle consultazioni del 2015-17 erano risultati grigi o neri, un'altra per quelli che erano risultati bianchi ma esclusi dal piano BUL. Nei risultati di quest'ultima non \xe8 indicato il colore del civico."}),(0,r.jsxs)(h,{text:"Cos'\xe8 la velocit\xe0 nelle ore di punta?",children:["La velocit\xe0 nelle ore di punta (",(0,r.jsx)("i",{children:"velocit\xe0 di picco"})," nei documenti Infratel) \xe8 una stima della banda disponibile per un singolo utente quando tutti gli altri utenti (che condividono la stessa infrastruttura) stanno utilizzando attivamente la loro connessione, ad esempio per guardare una partita di calcio in streaming.",(0,r.jsx)("br",{}),"Nei documenti Infratel c'\xe8 una formula di riferimento per calcolare tale valore."]}),(0,r.jsxs)(h,{text:"Perch\xe9 la velocit\xe0 nelle ore di punta \xe8 pi\xf9 alta di quella massima?",children:["Innanzitutto, nei risultati della consultazione 2021 aree grigie e nere la velocit\xe0 nelle ore di punta aveva pi\xf9 intervalli di quella massima, quindi non \xe8 anomalo avere velocit\xe0 massima maggiore o uguale a 300 Mbps e velocit\xe0 nelle ore di punta maggiore o uguale a 1000 Mbps.",(0,r.jsx)("br",{}),"Per gli altri casi \xe8 possibile che l'operatore dichiarante abbia tenuto conto dell'offerta commerciale nel dichiarare la velocit\xe0 massima. Ad esempio considerando un albero GPON 1:64 con taglio massimo commerciale di 100 Mbps in download e 20 Mbps in upload, 100 Mbps potrebbe essere la velocit\xe0 massima e 1900 Mbps quella nelle ore di punta."]}),(0,r.jsx)(h,{text:"Perch\xe9 nella consultazione 2020 il colore del mio civico \xe8 nero e in quella 2021 \xe8 grigio?",children:"Probabilmente perch\xe9 i risultati per civico della consultazione 2021 includono solo la copertura cablata, cio\xe8 sono state escluse da quei risultati le FWA."}),(0,r.jsxs)(h,{text:"Come si interpretano i risultati della consultazione 2020?",children:["I risultati della consultazione 2020 possono assumere questi valori: ",(0,r.jsx)("i",{children:"bianco"}),", ",(0,r.jsx)("i",{children:"non coperti"}),", ",(0,r.jsx)("i",{children:"grigio novhcn fwa"}),", ",(0,r.jsx)("i",{children:"grigio novhcn rame"}),", ",(0,r.jsx)("i",{children:"grigio vhcn fwa"}),", ",(0,r.jsx)("i",{children:"grigio vhcn fo"}),", ",(0,r.jsx)("i",{children:"grigio vhcn fo"}),", ",(0,r.jsx)("i",{children:"nero novhcn"}),", ",(0,r.jsx)("i",{children:"nero vhcn fwa"}),", ",(0,r.jsx)("i",{children:"nero vhcn fo"}),".",(0,r.jsx)("br",{}),"Nei risultati di questo sito ",(0,r.jsx)("i",{children:"non coperti"})," \xe8 stato accorpato a ",(0,r.jsx)("i",{children:"bianco"}),", ",(0,r.jsx)("i",{children:"novhcn"})," sostituito con NGA e ",(0,r.jsx)("i",{children:"fo"})," con FTTH.",(0,r.jsx)("br",{}),"La prima parte del risultato indica il colore del civico, la seconda parte indica se la rete NGA di categoria massima \xe8 VHCN o meno, la terza parte indica l'architettura della rete di categoria massima (in caso di ex aequo FTTH ha priorit\xe0 su FWA)."]}),(0,r.jsx)(h,{text:"Perch\xe9 i risultati della consultazione 2020 per la provincia di Rimini sono incompleti?",children:"Perch\xe9 gli identificativi di quei civici avevano al pi\xf9 4 cifre significative su 15..."}),(0,r.jsx)(h,{text:"Perch\xe9 nei risultati della consultazione 2019 vedo NGA-VHCN e su questo sito \u2265 100Mbps?",children:"Ho deciso di applicare una semplificazione per rendere i risultati della consultazione 2019 pi\xf9 simili a quelli delle altre consultazioni. La copertura NGA \xe8 diventata velocit\xe0 maggiore o uguale a 30 Mbps, copertura NGA-VHCN \xe8 diventata velocit\xe0 maggiore o uguale a 100 Mbps."}),(0,r.jsx)(h,{text:"Cosa significa non censito?",children:"Che quell'indirizzo non era presente nei risultati per civico di quella consultazione."}),(0,r.jsx)(h,{text:"Perch\xe9 mancano i risultati della consultazione 201x?",children:"Perch\xe9 non sono riuscito a trovare i risultati per civico di quella consultazione."}),(0,r.jsx)(h,{text:"Perch\xe9 gli intervalli di velocit\xe0 differiscono da quelli Infratel?",children:"Gli intervalli di velocit\xe0 di Infratel possono essere ambigui, in alcuni casi hanno interpretazioni diverse nello stesso documento. Su questo sito ho usato l'interpretazione che mi \xe8 parsa pi\xf9 logica."}),(0,r.jsx)(h,{text:"Le velocit\xe0 si riferiscono al download, all'upload o entrambi?",children:"Le velocit\xe0 riportate nei risultati di questo sito si riferiscono esclusivamente al download."}),(0,r.jsx)(h,{text:"Cos'\xe8 il piano Italia 1 Giga?",children:"Il piano Italia 1 Giga, precedentemente noto come piano aree grigie, \xe8 un piano per portare una connessione VHCN, tramite finanziamento misto pubblico-privato, ai civici che nel 2026 non ne avranno una (da operatori privati) e che non sono stati oggetto di interventi diretti o a concessione nell'ambito del piano BUL."}),(0,r.jsxs)(h,{text:"Come fai a conoscere i vincitori del Piano Italia 1 Giga?",children:["La fonte \xe8 questo articolo del CorCom: ",(0,r.jsx)(f,{className:"text-base",href:"https://www.corrierecomunicazioni.it/telco/banda-ultralarga/banda-ultralarga-open-fiber-batte-tim-nella-gara-aree-grigie/",children:"Banda ultralarga, Open Fiber batte Tim nella gara aree grigie"}),"."]}),(0,r.jsx)(h,{text:"Cosa significa vincitore non ancora noto?",children:"Che il corrispondente lotto del piano Italia 1 giga non \xe8 stato ancora assegnato o non ne si conosce il vincitore."}),(0,r.jsxs)(h,{text:"I risultati di questo sito sono affidabili?",children:["Non sono pi\xf9 affidabili dei dati su cui si basa.",(0,r.jsx)("br",{}),"Considerando che le consultazioni sono soggette ad errori di vario genere io le interpreterei come delle promesse che ahim\xe8 possono essere disattese. Discorso analogo per il Piano Italia 1 Giga, entro certi limiti e a determinate condizioni possono essere aggiunti o rimossi civici dal piano."]}),(0,r.jsxs)(h,{text:"Dove trovo i dati su cui si basa questo sito?",children:["In questa repo su GitHub: ",(0,r.jsx)(f,{className:"text-base",href:"https://github.com/HandyMenny/database-Infratel",children:"Database Infratel"}),"."]})]})]})}):null]})},v=function(){return(0,r.jsxs)("footer",{className:"flex flex-col items-center justify-center w-full bg-indigo-900 py-2",children:[(0,r.jsxs)("p",{children:["Basato su "," ",(0,r.jsx)(f,{href:"https://theedoran.github.io/mappatura2021",text:"Mappatura Infratel 2021",className:"text-white !text-base italic font-semibold hover:no-underline"})," ","  di"," ",(0,r.jsx)(f,{href:"https://edoardo.ranghieri.com",text:"TheEdoRan",className:"text-white !text-base font-semibold hover:no-underline"})," "]}),(0,r.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,r.jsx)(b,{}),(0,r.jsx)("p",{children:(0,r.jsx)(f,{href:"https://github.com/HandyMenny/mappaturaInfratel",text:"Codice Sorgente"})})]})]})},g=n(4051),j=n.n(g),y=n(4156),N=n.n(y),w=n(4931);function C(e,t,n,i,r,o,a){try{var l=e[o](a),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(i,r)}function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function z(e,t,n){return(z=E()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return n&&_(r,n.prototype),r}).apply(null,arguments)}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return!t||"object"!==P(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function O(e){var t="function"===typeof Map?new Map:void 0;return O=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return z(e,arguments,T(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),_(i,e)},O(e)}function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=T(e);if(t){var r=T(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return S(this,n)}}var M=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(n,e);var t=I(n);function n(e,i){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(r=t.call(this)).status=0,r.message=e,r.status=i,r}return n}(O(Error)),R=function(e){429===e.status?w.ZP.error("Hey, vacci piano!\nRiprova tra una decina di minuti.",{id:"search-field-too-many-requests-error"}):w.ZP.error("Errore nel comunicare con il server.\nRiprova pi\xf9 tardi.",{id:"search-field-error"})},k=function(){var e,t=(e=j().mark((function e(t){var n;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mappatura.amennillo.eu").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new M(n.statusText,n.status);case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function a(e){C(o,i,r,a,l,"next",e)}function l(e){C(o,i,r,a,l,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),G=N()(k,{promise:!0,primitive:!0}),q=n(5152);function A(e,t,n,i,r,o,a){try{var l=e[o](a),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(i,r)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){F(e,t,n[t])}))}return e}var H=n.n(q)()((function(){return n.e(538).then(n.bind(n,5538))}),{loadableGenerated:{webpack:function(){return[5538]}},ssr:!1}),U=function(e){return e.map((function(e){return{value:e,label:e}}))},L=function(e){return e.map((function(e){return{value:e.number,label:e.number,egon:e.egon}}))},D=function(e){var t,n=e.context,o=e.disabled,a=e.title,s=e.className,c=e.menuPlacement,u=e.showOptionsOnClick,p=void 0!==u&&u,f=d(),x=f.state,m=f.dispatch,h=(0,l.useState)([]),b=h[0],v=h[1],g=(0,l.useState)(""),y=g[0],N=g[1],w=(0,l.useCallback)((function(e){var t,r,o=e.get,a=e.fetch,l=e.payload,s=e.egon;switch(n){case"regions":return o?x.region:a?G("/regions"):m({type:i.SET_REGION,payload:l});case"provinces":return o?x.province:a?(r=x.region,G("/".concat(encodeURIComponent(r),"/provinces"))):m({type:i.SET_PROVINCE,payload:l});case"cities":return o?x.city:a?(t=x.province,G("/".concat(encodeURIComponent(t),"/cities"))):m({type:i.SET_CITY,payload:l});case"streets":return o?x.street:a?function(e,t){return G("/".concat(encodeURIComponent(e),"/").concat(encodeURIComponent(t),"/streets"))}(x.province,x.city):m({type:i.SET_STREET,payload:l});case"numbers":return o?x.number:a?function(e,t,n){return G("/".concat(encodeURIComponent(e),"/").concat(encodeURIComponent(t),"/").concat(encodeURIComponent(n),"/numbers"))}(x.province,x.city,x.street):m({type:i.SET_NUMBER_EGON,payload:l,egon:s});default:return}}),[n,m,x]),C=(0,l.useCallback)((t=j().mark((function e(){var t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,w({fetch:!0});case 5:if(t=e.sent,"numbers"!==n){e.next=9;break}return v(L(t)),e.abrupt("return");case 9:v(U(t)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0),R(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})),function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function a(e){A(o,i,r,a,l,"next",e)}function l(e){A(o,i,r,a,l,"throw",e)}a(void 0)}))}),[n,w,o]),E=(0,l.useCallback)((function(){return p||b.length<30?b:y?b.filter((function(e){var t=e.label;return null===t||void 0===t?void 0:t.toLowerCase().includes(y.trim().toLowerCase())})).sort((function(e,t){var n=e.label,i=t.label;return n.localeCompare(i)})).slice(0,100):[{label:"Digita un nome",value:"__search_placeholder",isDisabled:!0}]}),[b,p,y]);return(0,l.useEffect)((function(){C()}),[x,C]),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("h3",{className:"text-indigo-200 text-xl mb-3",children:a}),(0,r.jsx)(H,{isDisabled:o,options:E(),onInputChange:function(e){return N(e)},menuPlacement:c,styles:{control:function(e,t){var n=t.isDisabled;return V({},e,{backgroundColor:n?"#b0b0b0":"#f7f7f7",fontStyle:n?"italic":"normal"})},option:function(e,t){var n=t.isDisabled,i=t.isFocused;return V({},e,{backgroundColor:n?"transparent":i?"#deebff":"white",color:"#4760a3"})},placeholder:function(e){return V({},e,{lineHeight:"1rem"})}},value:function(){var e=w({get:!0});return e?{label:e,value:e}:null}(),onChange:function(e){!function(e){var t=e.payload,n=e.egon;w({get:!1,payload:t,egon:n})}({payload:e.value,egon:e.egon})},noOptionsMessage:function(e){return e.inputValue?"Nessun risultato":""},className:"w-full text-blue-900 ".concat(s),placeholder:"".concat(p?"Seleziona":"Cerca"," ").concat(a.toLowerCase())})]})},B={"":{text:"bianco",className:"bg-white text-black border-black"},n:{text:"nero",className:"bg-black text-indigo-100 border-white"},g:{text:"grigio",className:"bg-gray-500 text-indigo-100 border-whtie"}},W={0:"< 30 Mbit/s",1:"< 300 Mbit/s",2:">= 300 Mbit/s",30:"30-99 Mbit/s",100:"100-199 Mbit/s",200:"200-299 Mbit/s",300:"300-999 Mbit/s",1e3:">= 1000 Mbit/s"},Z={0:"< 300 Mbit/s",1:">= 300 Mbit/s"},Y={0:"< 30 Mbit/s",30:"30-99 Mbit/s",100:">= 100 Mbit/s"},Q=function(e){var t=e.text,n=e.children;return(0,r.jsxs)("summary",{className:"text-2xl sm:text-3xl text-indigo-100 uppercase text-center",children:[t," ",n]})},X=function(e){var t=e.text,n=e.children;return(0,r.jsxs)("h2",{className:"text-xl sm:text-2xl text-indigo-200 uppercase text-center mt-3",children:[t," ",n]})},$=function(e){var t=e.children,n=e.open;return(0,r.jsx)("details",{className:"flex flex-col items-center cursor-pointer",open:n,children:t})},J=function(e){var t=e.data,n=(0,l.useRef)(null);(0,l.useEffect)((function(){var e;null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[]);var i=(0,r.jsxs)($,{children:[(0,r.jsx)(Q,{text:"Consultazione 2021"}),(0,r.jsx)(X,{text:"Non censito"})]});null!=t.below300Mbps&&(i=(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)($,{children:[(0,r.jsx)(Q,{text:"Consultazione 2021"}),null!=t.color&&(0,r.jsx)(X,{text:"Colore del civico",children:(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("div",{className:"text-3xl sm:text-4xl py-3 px-4 m-auto w-[calc(100%_-_2.9rem)] border-2 ".concat(B[t.color].className),children:B[t.color].text.toUpperCase()})})}),(0,r.jsx)(X,{text:"Velocit\xe0 massima",children:(0,r.jsx)("div",{children:null!=t.color?W[t.below300Mbps]:Z[t.below300Mbps]})}),(0,r.jsx)(X,{text:"Velocit\xe0 ore di punta",children:(0,r.jsx)("div",{children:null!=t.color?W[t.peakSpeed]:Z[t.peakSpeed]})})]})}));var o=(0,r.jsxs)($,{children:[(0,r.jsx)(Q,{text:"Consultazione 2020"}),(0,r.jsx)(X,{text:"Non censito"})]});null!=t.class19&&(o=(0,r.jsxs)($,{children:[(0,r.jsx)(Q,{text:"Consultazione 2020"}),(0,r.jsx)(X,{text:"Copertura 2019",children:(0,r.jsxs)("div",{className:"text-2xl sm:text-3xl py-3 px-4 m-auto w-[calc(100%_-_2.9rem)] border-2 ".concat(B[t.class19[0]||""].className),children:[B[t.class19[0]||""].text.toUpperCase(),"v"==t.class19[1]?" VHCN":"n"==t.class19[1]||"n"==t.class19[0]?" NGA":"","r"==t.class19[2]?" RAME":"w"==t.class19[2]?" FWA":"f"==t.class19[2]?" FTTH":""]})}),(0,r.jsx)(X,{text:"Copertura 2022",children:(0,r.jsxs)("div",{className:"text-2xl sm:text-3xl py-3 px-4 m-auto w-[calc(100%_-_2.9rem)] border-2 ".concat(B[t.class22[0]||""].className),children:[B[t.class22[0]||""].text.toUpperCase(),"v"==t.class22[1]?" VHCN":"n"==t.class22[1]||"n"==t.class22[0]?" NGA":"","r"==t.class22[2]?" RAME":"w"==t.class22[2]?" FWA":"f"==t.class22[2]?" FTTH":""]})})]}));var a=(0,r.jsxs)($,{children:[(0,r.jsx)(Q,{text:"Consultazione 2019"}),(0,r.jsx)(X,{text:"Non censito"})]});null!=t.cat18&&(a=(0,r.jsxs)($,{children:[(0,r.jsx)(Q,{text:"Consultazione 2019"}),(0,r.jsx)(X,{text:"Velocit\xe0 massima 2018",children:(0,r.jsx)("div",{children:Y[t.cat18]})}),(0,r.jsx)(X,{text:"Velocit\xe0 massima 2021",children:(0,r.jsx)("div",{children:Y[t.cat21]})})]}));var s=(0,r.jsxs)($,{children:[(0,r.jsx)(Q,{text:"Consultazione 2017"}),(0,r.jsx)(X,{text:"Non censito"})]});null!=t.speed20&&(s=(0,r.jsxs)($,{children:[(0,r.jsx)(Q,{text:"Consultazione 2017"}),(0,r.jsx)(X,{text:"Velocit\xe0 massima 2020",children:(0,r.jsx)("div",{children:Y[t.speed20]})})]}));var c=(0,r.jsxs)($,{open:!0,children:[(0,r.jsx)(Q,{text:"Piano Italia 1 Giga"}),(0,r.jsx)(X,{text:"Incluso nel bando",children:(0,r.jsx)("div",{children:t.bando1Giga?"S\xec":"No"})}),!!t.bando1Giga&&(0,r.jsx)(X,{text:"Vincitore Bando",children:(0,r.jsx)("div",{children:1==t.bando1Giga?" Openfiber":2==t.bando1Giga?" TIM":" Non ancora noto"})})]});return(0,r.jsxs)("div",{ref:n,className:"flex flex-col items-center justify-evenly gap-8",children:[c,i,o,a,s]})},K=function(e){var t=e.children,n=e.disabled,i=e.className,o=e.onClick,a=e.type;return(0,r.jsx)("button",{disabled:n,className:"mt-3 outline-none border-2 py-2 px-2 sm:px-4 sm:py-3 rounded-lg shadow-sm transition-all hover:brightness-110 disabled:hover:brightness-100 disabled:grayscale disabled:cursor-default ".concat(i),type:a,onClick:o,children:t})},ee=function(){return(0,r.jsx)("div",{className:"w-full border-t lg:w-auto lg:border-l border-gray-300 opacity-30"})},te=function(e){var t=e.className;return(0,r.jsxs)("svg",{className:"w-16 h-16 text-indigo-100 animate-spin ".concat(t),viewBox:"0 0 186 186",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M186 93C186 144.362 144.362 186 93 186C41.6375 186 0 144.362 0 93C0 41.6375 41.6375 0 93 0C144.362 0 186 41.6375 186 93ZM20.46 93C20.46 133.063 52.9373 165.54 93 165.54C133.063 165.54 165.54 133.063 165.54 93C165.54 52.9373 133.063 20.46 93 20.46C52.9373 20.46 20.46 52.9373 20.46 93Z",fill:"#F5F5F5",fillOpacity:"0.2"}),(0,r.jsx)("path",{d:"M29.8863 24.6943C47.1213 8.76942 69.7393 -0.0515139 93.2051 0.000226065C116.671 0.0519661 139.25 8.97255 156.414 24.9733L142.463 39.9392C129.075 27.4586 111.463 20.5005 93.1599 20.4602C74.8566 20.4198 57.2146 27.3001 43.7713 39.7216L29.8863 24.6943Z",fill:"#F5F5F5",fillOpacity:"0.8"})]})},ne=function(){var e=d(),t=e.state,n=e.dispatch,o=(0,l.useState)(null),a=o[0],s=o[1],c=(0,l.useState)(!1),u=c[0],p=c[1];return(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:items-stretch w-full pb-5 gap-10 lg:gap-20",children:[(0,r.jsxs)("form",{className:"flex flex-col items-center gap-6 w-80 sm:w-[28rem]",onSubmit:function(e){var n;(e.preventDefault(),t.egon)&&(p(!0),s(null),(n=t.egon,G("/egon?id=".concat(n))).then((function(e){return s(e)})).catch((function(e){console.error(e),R(e)})).finally((function(){return p(!1)})))},children:[(0,r.jsx)(D,{title:"Regione",context:"regions",menuPlacement:"bottom",showOptionsOnClick:!0}),(0,r.jsx)(D,{title:"Provincia",context:"provinces",disabled:!t.region,menuPlacement:"bottom",showOptionsOnClick:!0}),(0,r.jsx)(D,{title:"Citt\xe0",context:"cities",disabled:!t.region||!t.province,menuPlacement:"bottom",showOptionsOnClick:!0}),(0,r.jsxs)("div",{className:"flex w-full gap-2",children:[(0,r.jsx)(D,{title:"Via",context:"streets",disabled:!t.region||!t.province||!t.city,menuPlacement:"top"}),(0,r.jsx)(D,{title:"Civico",context:"numbers",disabled:!t.region||!t.province||!t.city||!t.street,menuPlacement:"top",showOptionsOnClick:!0})]}),(0,r.jsxs)("div",{className:"flex justify-center items-center gap-5",children:[(0,r.jsx)(K,{disabled:!t.egon,className:"bg-yellow-400 text-blue-900",type:"submit",children:t.egon&&a||u?"Riesegui la ricerca":"Esegui la ricerca"}),!!a&&!!t.egon&&(0,r.jsx)(K,{className:"bg-red-500 text-indigo-100",type:"button",onClick:function(e){e.preventDefault(),s(null),n({type:i.RESET})},children:"Pulisci i campi"})]})]}),u&&!a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ee,{}),(0,r.jsx)("div",{className:"flex items-center justify-center w-80",children:(0,r.jsx)(te,{})})]}),!u&&!!a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ee,{}),(0,r.jsx)(J,{data:a})]})]})};function ie(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Esiti Mappatura Infratel | Ricerca il tuo civico"}),(0,r.jsx)("meta",{name:"description",content:"Scopri le informazioni riguardanti la copertura in fibra ottica prevista entro il 2026 al tuo indirizzo."}),(0,r.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"favicon.ico"})]}),(0,r.jsxs)("main",{className:"flex flex-1 flex-col p-5 justify-center items-center w-full",children:[(0,r.jsx)("h1",{className:"text-2xl sm:text-4xl font-medium mb-1 drop-shadow-lg",children:"Mappatura Infratel 2017-2021"}),(0,r.jsx)("h2",{className:"sm:text-lg italic font-light text-blue-300 drop-shadow-lg mb-10",children:"Copertura prevista entro il 2026 in Italia"}),(0,r.jsx)(p,{children:(0,r.jsx)(ne,{})})]}),(0,r.jsx)(v,{})]})}}},function(e){e.O(0,[588,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);