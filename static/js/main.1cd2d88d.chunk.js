(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},242:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(69),c=n.n(l),o=(n(80),n(13)),u=(n(86),function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"lds-dual-ring"}))}),s=(n(88),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("span",null,r.a.createElement("strong",null,"\xa9Expense Tracker")," by Alejandro Fuenmayor with ReactJs+Redux. All right reserved"))}),i=(n(90),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"bg"},r.a.createElement("div",{className:"typo"},r.a.createElement("h1",null,"The most easiest way to track your expense")),r.a.createElement("div",{className:"bt",onClick:function(){return e.handleRoute("signin")}},"Start"),r.a.createElement(s,null)))}),d=n(4),m=n(8),E=(n(92),function(e){var t=e.users,n=e.handleRoute,l=e.handleAuth,c=e.handleError,o=e.error,u=Object(a.useState)({username:"",password:""}),s=Object(m.a)(u,2),i=s[0],E=s[1],p=Object(a.useRef)(null),f=function(){i.username.length&&i.password.length?t.filter(function(e,n){return t[n].username===i.username}).length?l(!0):(E({username:"",password:""}),c(!0,"User doesn't exist"),p.current.focus()):(c(!0,"please enter valid username and password"),p.current.focus())},h=function(e){13===e.keyCode&&f()};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"back",onClick:function(){return n("home")}},"Back"),r.a.createElement("div",{className:"signin"},r.a.createElement("div",{className:"box"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("p",null,"User:"),r.a.createElement("input",{ref:p,type:"text",placeholder:"User",value:i.username,onChange:function(e){return E(Object(d.a)({},i,{username:e.target.value}))},onKeyDown:function(e){h(e)}}),r.a.createElement("br",null),r.a.createElement("p",null,"Password:"),r.a.createElement("input",{type:"password",placeholder:"Password",value:i.password,onChange:function(e){return E(Object(d.a)({},i,{password:e.target.value}))},onKeyDown:function(e){h(e)}}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",onClick:f},"Submit"),o.stat?r.a.createElement("p",{style:{color:"red"}},i.error.message):null)))}),p=(n(94),function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("p",null,"Expense Tracker"))}),f=(n(96),function(e){var t=e.modalManage,n=e.children,a=e.handleError;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"backdrop",onClick:function(){t(!1),a(!1)}}),r.a.createElement("div",{className:"modalBox"},n)))}),h=(n(47),function(e){var t=e.logExpense,n=e.modalManage,l=e.handleError,c=e.error,o=e.total,u=e.currencySymbol,s=e.xpId,i=Object(a.useState)(""),d=Object(m.a)(i,2),E=d[0],p=d[1],f=Object(a.useState)(""),h=Object(m.a)(f,2),g=h[0],v=h[1],b=Object(a.useRef)(null);Object(a.useEffect)(function(){b.current.focus()},[b]);var y=function(){p(""),v(""),b.current.focus()};return r.a.createElement("div",{className:"addexp"},r.a.createElement("h2",null,"Add an expense"),r.a.createElement("div",{className:"form"},r.a.createElement("p",null,"Description:"),r.a.createElement("input",{ref:b,type:"text",placeholder:"Description",value:E,onChange:function(e){return p(e.target.value)}}),r.a.createElement("p",null,"Spend:"),r.a.createElement("input",{type:"text",placeholder:u,value:g,onChange:function(e){return v(e.target.value)}})),r.a.createElement("div",{className:"addBtn",onClick:function(){var e=parseFloat(g);if(0===o||o<e)l(!0,"Please add funds"),y();else if(g.length&&E.length){if(t(E,-e,s),l(!1),y(),!n)return null;n(!1)}else l(!0,"Please provide valid information and try again"),y()}},"Add"),c.stat?r.a.createElement("p",{style:{color:"red"}},c.message):null)}),g=(n(99),function(e){var t=e.xp,n=e.deleteLog,a=e.date,l=e.detail,c=e.sp,o=e.id,u=e.currencySymbol;return r.a.createElement("div",{className:"expenseLog"},r.a.createElement("div",{className:"delete",onClick:function(){return n(t,o,-c)}},"X"),r.a.createElement("div",{className:"date"},r.a.createElement("p",null,a.day,r.a.createElement("br",null)," ",a.month)),r.a.createElement("div",{className:"detail"},r.a.createElement("p",null,l)),r.a.createElement("div",{className:"sp"},r.a.createElement("p",{style:-1===Math.sign(c)?{color:"red"}:1===Math.sign(c)?{color:"green"}:null},u,c.toFixed(2))))}),v=(n(101),function(e){e.users;var t=e.handleAuth;return r.a.createElement("div",{className:"itemPro"},r.a.createElement("div",{className:"user"},r.a.createElement("p",null,"Test")),r.a.createElement("div",{className:"profileBtn"},"View profile"),r.a.createElement("div",{className:"logoutBtn",onClick:function(){return t(!1)}},"Log out"))}),b=n(15),y=n(71),N=function(e){var t=function(e){return e.map(function(e){return-1===Math.sign(e.sp)?-e.sp:null}).reduce(function(e,t){return e+t},0)}(e.xp),n=(new Date).getDate(),a=new Array(n).fill(0,0,n-1),l=Object(b.a)(a).concat([t]),c={labels:Object(b.a)(Array(30).keys()),datasets:[{label:"Your expenses",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:l}]};return r.a.createElement(y.a,{data:c})},x=function(e){var t=e.logExpense,n=e.modalManage,l=e.addFund,c=e.handleError,o=e.error,u=e.currencySymbol,s=Object(a.useState)(""),i=Object(m.a)(s,2),d=i[0],E=i[1],p=Object(a.useRef)(null);Object(a.useEffect)(function(){p.current.focus()},[p]);return r.a.createElement("div",{className:"addexp"},r.a.createElement("h2",null,"Add fund"),r.a.createElement("div",{className:"form"},r.a.createElement("p",null,"Fund:"),r.a.createElement("input",{ref:p,type:"text",placeholder:u,value:d,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",{className:"addBtn",onClick:function(){var e=parseFloat(d);d.length?(t("Reload",e),l(e),n(!1)):(E(""),c(!0,"Please add a fund"),p.current.focus())}},"Add"),o.stat?r.a.createElement("p",{style:{color:"red"}},o.message):null)},O=function(e){var t=e.currency,n=e.handleCurrency,l=e.total,c=e.xp,o=e.changeCurrenciesSymbol,u=Object(a.useRef)("USD");return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Change currency: "),r.a.createElement("select",{ref:u,onChange:function(e){n(t,e.target.value,l,c),o(e.target.value)}},r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"EUR"},"EUR"),r.a.createElement("option",{value:"PEN"},"PEN")))},A=function(e,t){return{type:"ERROR_MANAGE",stat:e,message:t}},w=["Ene","Feb","March","April","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],C=(n(242),Object(o.b)(function(e){return{modal:e.ui.modal,modalRoute:e.ui.modalRoute,total:e.xp.total,error:e.ui.error,xp:e.xp.xp,currency:e.xp.currency,auth:e.auth.auth}},function(e){return{modalManage:function(t,n){return e(function(e,t){return{type:"MODAL_MANAGE",stat:e,route:t}}(t,n))},logExpense:function(t,n,a){return e(function(e,t,n){return function(n){var a=new Date,r=a.getDate(),l=a.getMonth(),c=w[l],o=Date.now();n({type:"ADD_EXPENSE",expense:{id:o,date:{day:r,month:c},detail:e,sp:t}})}}(t,n))},handleError:function(t,n){return e(A(t,n))},addFund:function(t){return e(function(e){return{type:"ADD_FUND",fund:e}}(t))},deleteLog:function(t,n,a){return e(function(e,t,n){return function(a){a(function(e,t){return{type:"DEL_EXPENSE",deleted:e,sp:t}}(e.filter(function(e){return t!==e.id}),n))}}(t,n,a))},handleCurrency:function(t,n,a,r){return e(function(e,t,n,a){return function(r){fetch("https://free.currencyconverterapi.com/api/v6/convert?q=".concat(e,"_").concat(t,"&compact=ultra")).then(function(e){return e.json()}).then(function(e){var l=Object.values(e)[0],c=n*l,o=a.reduce(function(e,t,n){var a=Object(d.a)({},t,{sp:t.sp*l});return e.concat(a)},[]);r({type:"CALCULATE_RATE",newTotal:c,newArray:o}),r({type:"CHANGE_CURRENCY",newCu:t})})}}(t,n,a,r))}}})(function(e){var t=e.xp,n=e.modal,l=e.modalManage,c=e.modalRoute,o=e.total,u=e.logExpense,i=e.handleError,d=e.error,E=e.addFund,b=e.deleteLog,y=e.users,A=e.currency,w=e.handleCurrency,C=e.handleAuth,j=Object(a.useState)("$"),R=Object(m.a)(j,2),D=R[0],S=R[1];Object(a.useEffect)(function(){0===o&&l(!0,"addFund")},[o]);var k=t.sort(function(e,t){return t.id-e.id}).map(function(e,n){return r.a.createElement(g,{xp:t,currencySymbol:D,deleteLog:b,date:t[n].date,detail:t[n].detail,sp:t[n].sp,id:t[n].id,key:n})}),U=r.a.createElement("div",{className:"dashboard"},r.a.createElement(p,null),r.a.createElement("div",{className:"phoneLogout",onClick:function(){return C(!1)}},r.a.createElement("p",null,"Log out")),r.a.createElement("div",{className:"counter"},r.a.createElement("div",{className:"text"},D,o.toFixed(2)),r.a.createElement("div",{className:"countBt",onClick:function(){return l(!0,"expense")}},r.a.createElement("i",{className:"fas fa-plus"})),r.a.createElement("div",{className:"countBtGraph",onClick:function(){return l(!0,"graph")}},r.a.createElement("i",{className:"fas fa-chart-line"})),r.a.createElement("div",{className:"changeCurrency"},r.a.createElement(O,{changeCurrenciesSymbol:function(e){switch(e){case"EUR":S("\u20ac");break;case"PEN":S("S/.");break;case"USD":S("$");break;default:S("$")}},xp:t,total:o,currency:A,handleCurrency:w}))),r.a.createElement("div",{className:"profile"},r.a.createElement(v,{handleAuth:C,user:y})),r.a.createElement("div",{className:"add"},r.a.createElement(h,{total:o,error:d,handleError:i,logExpense:u,currencySymbol:D})),r.a.createElement("div",{className:"graph"},r.a.createElement(N,{xp:t})),r.a.createElement("div",{className:"log"},t.length>=1?k:r.a.createElement("p",{style:{textAlign:"center"}},"You don't have any expense registered")),r.a.createElement(s,null));return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{modalManage:l,handleError:i},"expense"===c?r.a.createElement(h,{modalManage:l,logExpense:u,handleError:i,error:d,total:o,currencySymbol:D,xpId:t.id}):"addFund"===c?r.a.createElement(x,{modalManage:l,logExpense:u,addFund:E,handleError:i,error:d,currencySymbol:D}):"graph"===c?r.a.createElement(N,{xp:t}):null),U):U)})),j=n(43),R=n.n(j),D=n(73),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;return new Promise(function(t){setTimeout(function(){t(!0)},e)})},k=function(e){return{type:"AUTH",stat:e}},U=function(e){return{type:"LOADING",stat:e}},_=Object(o.b)(function(e){return{users:e.auth.users,route:e.ui.route,auth:e.auth.auth,error:e.ui.error,loading:e.ui.loading}},function(e){return{handleRoute:function(t){return e(function(e){return{type:"ROUTE",route:e}}(t))},handleAuth:function(t){return e(function(e){return function(){var t=Object(D.a)(R.a.mark(function t(n){return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(U(!0)),t.next=3,S(2e3);case 3:n(U(!1)),n(k(e));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}(t))},handleError:function(t,n){return e(A(t,n))}}})(function(e){var t=e.users,n=e.route,a=e.auth,l=e.handleRoute,c=e.handleAuth,o=e.handleError,s=e.error,d=e.loading;return r.a.createElement(r.a.Fragment,null,d?r.a.createElement(u,null):a?r.a.createElement(C,{handleAuth:c,users:t}):"signin"===n?r.a.createElement(E,{handleError:o,users:t,handleRoute:l,handleAuth:c,error:s}):r.a.createElement(i,{handleRoute:l}))}),F=n(12),M=n(74),L={route:"",modal:!1,modalRoute:"",loading:!1,error:{stat:!1,message:""}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROUTE":return Object(d.a)({},e,{route:t.route});case"MODAL_MANAGE":return Object(d.a)({},e,{modal:t.stat,modalRoute:t.route});case"ERROR_MANAGE":return Object(d.a)({},e,{error:{stat:t.stat,message:t.message}});case"LOADING":return Object(d.a)({},e,{loading:t.stat});default:return e}},B={users:[{username:"test",password:"1234"}],auth:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return Object(d.a)({},e,{auth:t.stat});default:return e}},G={xp:[],total:0,currency:"USD"},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return"Reload"===t.expense.detail?Object(d.a)({},e,{xp:Object(b.a)(e.xp).concat([t.expense])}):Object(d.a)({},e,{total:e.total+t.expense.sp,xp:Object(b.a)(e.xp).concat([t.expense])});case"ADD_FUND":return Object(d.a)({},e,{total:e.total+t.fund});case"CHANGE_CURRENCY":return Object(d.a)({},e,{currency:t.newCu});case"DEL_EXPENSE":return Object(d.a)({},e,{total:e.total+t.sp,xp:t.deleted});case"CALCULATE_RATE":return Object(d.a)({},e,{total:t.newTotal,xp:t.newArray});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.d,X=Object(F.c)({ui:T,auth:P,xp:H}),J=Object(F.e)(X,I(Object(F.a)(M.a))),W=r.a.createElement(o.a,{store:J},r.a.createElement(_,null));c.a.render(W,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,t,n){},75:function(e,t,n){e.exports=n(246)},80:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){},99:function(e,t,n){}},[[75,2,1]]]);
//# sourceMappingURL=main.1cd2d88d.chunk.js.map