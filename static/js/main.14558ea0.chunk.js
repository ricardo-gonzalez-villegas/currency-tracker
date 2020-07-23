(this["webpackJsonpcurrency-exchange-app"]=this["webpackJsonpcurrency-exchange-app"]||[]).push([[0],{148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(44),o=a.n(c),l=(a(52),a(2)),i=r.a.createContext(),s=r.a.createContext();function u(){return Object(n.useContext)(i)}function d(e){var t=e.children,a=Object(n.useState)(!1),c=Object(l.a)(a,2),o=c[0],u=c[1];return r.a.createElement(i.Provider,{value:o},r.a.createElement(s.Provider,{value:function(){u((function(e){return!e}))}},t))}function p(e){var t=e.children,a={width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:u()?"#2e3033":"#497da6",fontFamily:"helvetica"};return r.a.createElement("div",{style:a},t)}function m(e){var t=e.children;return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",width:"55vw",height:"40vh"}},t)}var f=a(45),h=a(4),b=a.n(h),v=a(9),y="https://api.exchangeratesapi.io/",x=function(){var e=Object(v.a)(b.a.mark((function e(t,a){var n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(y,"latest?base=").concat(t,"&symbols=").concat(a));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.rates[a],e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(v.a)(b.a.mark((function e(t,a,n,r){var c,o,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(y,"history?start_at=").concat(n,"&end_at=").concat(r,"&base=").concat(t,"&symbols=").concat(a));case 3:return c=e.sent,e.next=6,c.json();case 6:return o=e.sent,l=o.rates,e.abrupt("return",l);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a,n,r){return e.apply(this,arguments)}}(),E=a(3),D=a.n(E),R=r.a.createContext(),S=r.a.createContext();function C(){return Object(n.useContext)(R)}function F(){return Object(n.useContext)(S)}var w=D()().subtract(30,"days").calendar(),O=D()(w).format("YYYY-MM-DD"),Y=D()().format("YYYY-MM-DD"),j=function(e){var t=e.sort((function(e,t){return e.date-t.date}));return t.forEach((function(e){e.date=D()(e.date).format("YYYY-MM-DD")})),t};function K(e){var t=e.children,a=Object(n.useState)("USD"),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)("JPY"),u=Object(l.a)(s,2),d=u[0],p=u[1],m=Object(n.useState)(O),f=Object(l.a)(m,2),h=f[0],y=f[1],E=Object(n.useState)(Y),D=Object(l.a)(E,2),C=D[0],F=D[1],w=Object(n.useState)(""),K=Object(l.a)(w,2),N=K[0],B=K[1],H=Object(n.useState)(""),P=Object(l.a)(H,2),I=P[0],U=P[1],L=Object(n.useState)(""),M=Object(l.a)(L,2),k=M[0],A=M[1],G=function(){var e=Object(v.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,a);case 2:return n=e.sent,B(n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=function(){var e=Object(v.a)(b.a.mark((function e(t,a,n,r){var c,o,l,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t,a,n,r);case 2:for(s in c=e.sent,o=[],l=[],i=[],c)i.push({date:new Date(s),rate:c[s][a]});j(i).forEach((function(e){o.push(e.date),l.push(e.rate)})),A(o),U(l);case 11:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}();return r.a.createElement(R.Provider,{value:{base:o,symbol:d,start:h,end:C,latestRate:N,historicalDates:k,historicalRates:I}},r.a.createElement(S.Provider,{value:{updateBase:function(e){i(e)},updateSymbol:function(e){p(e)},updateStartDate:function(e){y(e)},updateEndDate:function(e){F(e)},updateLatestRate:G,updateHistory:T}},t))}function N(){var e=C(),t=e.historicalDates,a=e.historicalRates,n=u(),c={width:"45vw",padding:"15px 15px",backgroundColor:n?"#4f5052":"#FFF",borderRadius:"5px",boxShadow:"-7px 9px 4px rgba(0, 0, 0, 0.25)"},o={scales:{yAxes:[{gridLines:{color:n?"#FFF":"#9e9e9d"},ticks:{fontColor:n?"#FFF":"#000",fontWeight:"bold",fontFamily:"helvetica"}}],xAxes:[{display:!1}]},legend:{display:!1}},l=t&&a;return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("div",{style:c},r.a.createElement(f.a,{data:function(e){var n=e.getContext("2d"),r=n.createLinearGradient(300,200,700,500);return r.addColorStop(0,"rgba(174,206,238,0.6)"),r.addColorStop(1,"rgba(76,228,142,0.6)"),n.fillStyle=r,{labels:t,datasets:[{data:a,backgroundColor:r,borderWidth:1,pointRadius:3}]}},options:o})))}a(148);function B(){var e=Object(n.useContext)(s);return r.a.createElement("div",{className:"Toggle"},r.a.createElement("input",{onChange:e,type:"checkbox",id:"switch"}),r.a.createElement("label",{for:"switch"},"Toggle"))}function H(){var e={logo:{fontSize:"4rem",color:"#FFF"},button:{paddingLeft:"25px"},display:"flex",alignItems:"center",justifyContent:"space-around",width:"100vw",height:"10vh",paddingTop:"10px"};return r.a.createElement("div",{style:e},r.a.createElement("h1",{style:e.logo},"Currency Tracker"),r.a.createElement(B,null))}var P={USD:"USD",JPY:"JPY",CAD:"CAD",HKD:"HKD",ISK:"ISK",PHP:"PHP",DKK:"DKK",HUF:"HUF",CZK:"CZK",GBP:"GBP",RON:"RON",SEK:"SEK",IDR:"IDR",INR:"INR",BRL:"BRL",RUB:"RUB",HRK:"HRK",THB:"THB",CHF:"CHF",EUR:"EUR",MYR:"MYR",BGN:"BGN",TRY:"TRY",CNY:"CNY",NOK:"NOK",NZD:"NZD",ZAR:"ZAR",MXN:"MXN",SGD:"SGD",AUD:"AUD",ILS:"ILS",KRW:"KRW",PLN:"PLN"},I=[];for(var U in P)P.hasOwnProperty(U)&&I.push(P[U]);var L={USD:"\ud83c\uddfa\ud83c\uddf8",JPY:"\ud83c\uddef\ud83c\uddf5",CAD:"\ud83c\udde8\ud83c\udde6",HKD:"\ud83c\udded\ud83c\uddf0",ISK:"\ud83c\uddee\ud83c\uddf8",PHP:"\ud83c\uddf5\ud83c\udded",DKK:"\ud83c\udde9\ud83c\uddf0",HUF:"\ud83c\udded\ud83c\uddfa",CZK:"\ud83c\udde8\ud83c\uddff",GBP:"\ud83c\uddec\ud83c\udde7",RON:"\ud83c\uddf7\ud83c\uddf4",SEK:"\ud83c\uddf8\ud83c\uddea",IDR:"\ud83c\uddee\ud83c\udde9",INR:"\ud83c\uddee\ud83c\uddf3",BRL:"\ud83c\udde7\ud83c\uddf7",RUB:"\ud83c\uddf7\ud83c\uddfa",HRK:"\ud83c\udded\ud83c\uddf7",THB:"\ud83c\uddf9\ud83c\udded",CHF:"\ud83c\udde8\ud83c\udded",EUR:"\ud83c\uddea\ud83c\uddfa",MYR:"\ud83c\uddf2\ud83c\uddfe",BGN:"\ud83c\udde7\ud83c\uddec",TRY:"\ud83c\uddf9\ud83c\uddf7",CNY:"\ud83c\udde8\ud83c\uddf3",NOK:"\ud83c\uddf3\ud83c\uddf4",NZD:"\ud83c\uddf3\ud83c\uddff",ZAR:"\ud83c\uddff\ud83c\udde6",MXN:"\ud83c\uddf2\ud83c\uddfd",SGD:"\ud83c\uddf8\ud83c\uddec",AUD:"\ud83c\udde6\ud83c\uddfa",ILS:"\ud83c\uddee\ud83c\uddf1",KRW:"\ud83c\uddf0\ud83c\uddf7",PLN:"\ud83c\uddf5\ud83c\uddf1"},M=function(e,t){switch(e){case P.USD:return t.toFixed(2);case P.JPY:return t.toFixed(0);case P.CAD:case P.HKD:case P.ISK:case P.PHP:case P.DKK:case P.HUF:case P.CZK:case P.GBP:case P.RON:case P.SEK:case P.IDR:case P.INR:case P.BRL:case P.RUB:case P.HRK:case P.THB:case P.CHF:case P.EUR:case P.MYR:case P.BGN:case P.TRY:case P.CNY:case P.NOK:case P.NZD:case P.ZAR:case P.MXN:case P.SGD:case P.AUD:case P.ILS:case P.KRW:case P.PLN:return t.toFixed(2);default:return t}},k=r.a.createContext();function A(e){var t=e.children,a=C(),c=a.base,o=a.symbol,i=a.start,s=a.end,u=a.latestRate,d=Object(n.useState)(M(c,1)),p=Object(l.a)(d,2),m=p[0],f=p[1],h=Object(n.useState)(""),b=Object(l.a)(h,2),v=b[0],y=b[1],x=F(),g=x.updateBase,E=x.updateSymbol,D=x.updateLatestRate,R=x.updateHistory;Object(n.useEffect)((function(){D(c,o).then((function(e){var t=M(o,e);y(t),R(c,o,i,s)}))}),[]);return r.a.createElement(k.Provider,{value:{baseDisplay:m,symbolDisplay:v,handleBaseInput:function(e){""===e&&(e=0),f(e);var t=M(o,u*e);y(t)},handleBaseSelect:function(e){g(e),D(e,o).then((function(t){R(e,o,i,s);var a=M(e,v/t);f(a)}))},handleSymbolInput:function(e){""===e&&(e=0),y(e);var t=M(c,e/u);f(t)},handleSymbolSelect:function(e){E(e),D(c,e).then((function(t){R(c,e,i,s);var a=M(e,m*t);y(a)}))}}},t)}function G(){var e=u(),t=C(),a=t.base,c=t.symbol,o=Object(n.useContext)(k),l=o.baseDisplay,i=o.symbolDisplay,s=o.handleBaseInput,d=o.handleBaseSelect,p=o.handleSymbolInput,m=o.handleSymbolSelect,f=I.map((function(e){return r.a.createElement("option",{key:e,value:e},"".concat(L[e]," ").concat(e))})),h="#51709c",b="#4f5052",v={container:{width:"30%"},form:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"},div:{display:"flex",width:"100%",boxShadow:"-7px 9px 4px rgba(0, 0, 0, 0.25)"},input:{fontSize:"1.2rem",fontFamily:"helvetica",width:"100%",height:"5vh",padding:"5px",borderRadius:"5px 0 0 5px",border:"1px solid #b0b1b5",borderRight:"none"},select:{backgroundColor:e?b:h,color:"#FFF",border:"1px solid ".concat(e?b:h),borderLeft:"none",borderRadius:"0 5px 5px 0",paddingRight:"5px",paddingLeft:"5px"},label:{fontSize:"1.5rem",color:"#FFF",marginBottom:"10px"},miniContainer:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}};return r.a.createElement("div",{style:v.container},r.a.createElement("form",{style:v.form},r.a.createElement("div",{style:v.miniContainer},r.a.createElement("label",{style:v.label,htmlFor:"base"},"Base"),r.a.createElement("div",{style:v.div},r.a.createElement("input",{style:v.input,autoFocus:!0,name:"base",type:"text",value:l,placeholder:0,onChange:function(e){return s(e.target.value)}}),r.a.createElement("select",{style:v.select,value:a,onChange:function(e){return d(e.target.value)},name:"currency"},f))),r.a.createElement("div",{style:v.miniContainer},r.a.createElement("label",{style:v.label,htmlFor:"base"},"Foreign"),r.a.createElement("div",{style:v.div},r.a.createElement("input",{style:v.input,name:"symbol",type:"text",value:i,placeholder:i,onChange:function(e){return p(e.target.value)}}),r.a.createElement("select",{style:v.select,value:c,onChange:function(e){return m(e.target.value)},name:"currency"},f)))))}var T=D()().subtract(1,"days").calendar(),Z=D()(T).format("YYYY-MM-DD"),W=D()().format("YYYY-MM-DD");function J(){var e=C(),t=e.base,a=e.symbol,n=e.start,c=e.end,o=F(),l=o.updateStartDate,i=o.updateEndDate,s=o.updateHistory,u={container:{width:"30%"},form:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"},div:{display:"flex",flexDirection:"column",alignItems:"center"},input:{fontSize:"1.2rem",fontFamily:"helvetica",width:"100%",height:"5vh",padding:"5px 5px 5px 5px",borderRadius:"5px",border:"1px solid #b0b1b5",boxShadow:"-7px 9px 4px rgba(0, 0, 0, 0.25)"},label:{fontSize:"1.5rem",color:"#FFF",marginBottom:"10px"}};return r.a.createElement("div",{style:u.container},r.a.createElement("form",{style:u.form},r.a.createElement("div",{style:u.div},r.a.createElement("label",{style:u.label,htmlFor:"start"},"Start"),r.a.createElement("input",{style:u.input,type:"date",name:"start",min:"1999-01-01",max:Z,value:n,onChange:function(e){return n=e.target.value,l(n),void s(t,a,n,c);var n}})),r.a.createElement("div",{style:u.div},r.a.createElement("label",{style:u.label},"End"),r.a.createElement("input",{style:u.input,type:"date",name:"start",min:"1999-01-02",max:W,value:c,onChange:function(e){return r=e.target.value,i(r),void s(t,a,n,r);var r}}))))}function z(){return r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement(d,null,r.a.createElement(p,null,r.a.createElement(K,null,r.a.createElement(H,null),r.a.createElement(A,null,r.a.createElement(m,null,r.a.createElement(G,null),r.a.createElement(J,null))),r.a.createElement(N,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,a){e.exports=a(149)},52:function(e,t,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.14558ea0.chunk.js.map