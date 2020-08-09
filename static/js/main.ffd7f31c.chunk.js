(this["webpackJsonpcalculador-gastos"]=this["webpackJsonpcalculador-gastos"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(5),s=a.n(r),c=(a(12),a(6)),l=a(1),m=function(e){var t=e.text;return n.a.createElement("p",{className:"error"},t)},i=function(e){var t=e.guardarMontoAgregado,a=e.guardarRestante,r=e.setMostrarFormularioMonto,s=Object(o.useState)(0),c=Object(l.a)(s,2),i=c[0],u=c[1],g=Object(o.useState)(!1),b=Object(l.a)(g,2),d=b[0],_=b[1];return n.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),i<=0||isNaN(i)?_(!0):(_(!1),t(i),a(i),r(!1))}},n.a.createElement("div",{className:"form__item"},n.a.createElement("label",{className:"form__item--label"},"Escribe el monto con el que cuentas"),n.a.createElement("input",{value:i,onChange:function(e){var t=parseInt(e.target.value,10);u(t)},name:"monto",className:"form__item--input",type:"number",placeholder:"S/00.00"}),d&&n.a.createElement(m,{text:"Por favor ingrese un monto valido."})),n.a.createElement("button",{className:"form__item--button",type:"submit"},"Registrar tu monto"))},u=a(15),g=function(e){e.key;var t=e.nombreGasto,a=e.montoGasto;return n.a.createElement("div",{className:"description__list--gastos"},n.a.createElement("p",null,t),n.a.createElement("p",null,"S/ ",a))},b=function(e,t){return console.log(e,t),e/4>t?"color__red":e/2>t?"color__orange":""},d=function(e){var t=e.listaGastos,a=e.montoAgregado,r=e.restante,s=e.guardarGasto,c=e.guardarCrearGasto,i=Object(o.useState)(""),d=Object(l.a)(i,2),_=d[0],f=d[1],p=Object(o.useState)(0),E=Object(l.a)(p,2),v=E[0],N=E[1],j=Object(o.useState)(!1),O=Object(l.a)(j,2),h=O[0],S=O[1],G=Object(o.useState)(!1),y=Object(l.a)(G,2),M=y[0],w=y[1];return n.a.createElement("div",{className:"gastos__description"},n.a.createElement("div",{className:"form gastos__form"},n.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),v<1||isNaN(v))w(!0);else if(""!==_.trim()){S(!1),w(!1);var t={nombreGasto:_,montoGasto:v,id:Object(u.a)()};s(t),c(!0),f(""),N(0)}else S(!0)}},n.a.createElement("div",{className:"gastos__item"},n.a.createElement("label",{className:"form__item--label"},"Nombre del gasto"),n.a.createElement("input",{onChange:function(e){return f(e.target.value)},value:_,name:"nombreGasto",className:"form__item--input",type:"text",placeholder:" nombre del gasto"}),h&&n.a.createElement(m,{text:"Agrega en que gastaras."})),n.a.createElement("div",{className:"gastos__item"},n.a.createElement("label",{className:"form__item--label"},"Monto a gastar"),n.a.createElement("input",{onChange:function(e){return N(parseInt(e.target.value))},value:v,name:"montoGasto",className:"form__item--input",type:"number",placeholder:"S/00.00"}),M&&n.a.createElement(m,{text:"Agrega un monto valido."})),0===r?n.a.createElement("button",{disabled:!0,className:"form__item--button-agotado",type:"submit"},"Has agotado tu presupuesto."):n.a.createElement("button",{className:"form__item--button",type:"submit"},"Agregar gasto"))),n.a.createElement("div",{className:" description__list"},n.a.createElement("div",{className:"description__header"},n.a.createElement("p",{className:"monto__init"},"Monto inicial: ",n.a.createElement("strong",null,"S/",a)),n.a.createElement("p",null,"Monto restante: ",n.a.createElement("strong",{className:b(a,r)},"S/",r))),t.length<=0&&n.a.createElement("p",{className:"empty"},"No hay gastos agregados."),t.map((function(e){return n.a.createElement(g,{key:e.id,nombreGasto:e.nombreGasto,montoGasto:e.montoGasto})}))))},_=function(){var e=Object(o.useState)(0),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(o.useState)(0),m=Object(l.a)(s,2),u=m[0],g=m[1],b=Object(o.useState)(!0),_=Object(l.a)(b,2),f=_[0],p=_[1],E=Object(o.useState)([]),v=Object(l.a)(E,2),N=v[0],j=v[1],O=Object(o.useState)({}),h=Object(l.a)(O,2),S=h[0],G=h[1],y=Object(o.useState)(!1),M=Object(l.a)(y,2),w=M[0],A=M[1];return Object(o.useEffect)((function(){if(w){j([].concat(Object(c.a)(N),[S]));var e=u-S.montoGasto;console.log(e),g(e)}}),[S]),n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"form__content"},n.a.createElement("h1",{className:"form__title"},"Calculador de gastos"),f?n.a.createElement(i,{guardarMontoAgregado:r,guardarRestante:g,setMostrarFormularioMonto:p}):n.a.createElement(d,{guardarGasto:G,guardarCrearGasto:A,montoAgregado:a,restante:u,listaGastos:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.ffd7f31c.chunk.js.map