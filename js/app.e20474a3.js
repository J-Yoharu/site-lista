(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01de":function(t,e,n){},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"36bc":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("lista-tag"),n("footer-tag")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("img",{attrs:{src:n("dcd8"),alt:""}})])])])}],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-footer bg-light font-small blue pt-4"},[a("div",{staticClass:"container-fluid text-center text-md-left"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 mt-md-0 mt-3 d-flex align-items-center justify-content-center"},[a("p",[t._v("Tenha a lista de música para videokê sempre com você!!!")])]),a("hr",{staticClass:"clearfix w-100 d-md-none pb-3"}),a("div",{staticClass:"col-md-3 mb-md-0 mb-3 text-center"},[a("h5",{staticClass:"text-uppercase"},[t._v("Contato")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:"https://api.whatsapp.com/send?phone=5511947466026",target:"_blank"}},[a("img",{staticStyle:{width:"10%"},attrs:{src:n("667b"),alt:""}})])])])])]),a("div",{staticClass:"row footer-copyright text-center py-3"},[a("div",{staticClass:"col"},[t._v(" © 2020 Copyright: "),a("span",[t._v(" J-Yoharu / joaodiadema")])])])])])}],c={},l=c,u=n("2877"),d=Object(u["a"])(l,i,s,!1,null,null,null),f=d.exports,p={name:"App",components:{"footer-tag":f}},m=p,v=(n("034f"),Object(u["a"])(m,r,o,!1,null,null,null)),h=v.exports,g=(n("4989"),n("ab8b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container",staticStyle:{"min-height":"100vh"}},[n("search-bar",{on:{atualizarLista:function(e){t.musicas=e}}}),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("table",{staticClass:"table table-bordered table-hover table-dark"},[t._m(0),t._l(t.musicas,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.cantor))]),n("td",[t._v(t._s(e.titulo))]),n("td",[t._v(t._s(e.cod))])])}))],2)])])],1)])}),b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("Cantor")]),n("td",[t._v("Musica")]),n("td",[t._v("Código")])])}],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col"},[n("input",{staticClass:"form-control form-control-lg",staticStyle:{"border-radius":"100px 100px 100px 100px"},attrs:{id:"autoComplete",placeholder:"Digite sua música ou cantor"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},blur:t.search}})])]),n("div",{staticClass:"row mt-4 mb-4"},[n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",on:{click:function(e){return t.search()}}},[t._v("PESQUISAR")])])])])},y=[],_=(n("4de4"),n("c975"),n("d81d"),n("d3b7"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),x=[],w=[],k={props:["nomeLista"],data:function(){return{title:"",version:""}},methods:{bdCatalogo:function(){return Object(_["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0!=localStorage.bdCatalogo){t.next=5;break}return t.next=3,fetch("./bd.json",{method:"GET"}).then((function(t){return t.json()}));case 3:e=t.sent,localStorage.bdCatalogo=JSON.stringify(e);case 5:x=JSON.parse(localStorage.bdCatalogo),x.data.map((function(t){w.push(t.cantor),w.push(t.titulo)})),w=w.filter((function(t,e){return w.indexOf(t)===e}));case 8:case"end":return t.stop()}}),t)})))()},search:function(){var t=this;setTimeout((function(){var e=t.normalizeString(document.getElementById("autoComplete").value);document.getElementById("autoComplete").value="";var n=t.filterItem(e,"cantor");t.$emit("atualizarLista",n),n.length}),200)},filterItem:function(t){var e=this;return x.data.filter((function(n){return e.normalizeString(n.titulo).indexOf(t)>-1||e.normalizeString(n.cantor).indexOf(t)>-1}))},normalizeString:function(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}},created:function(){this.bdCatalogo()},mounted:function(){E(document.getElementById("autoComplete"),w)}};function E(t,e){var n;function a(t){if(!t)return!1;r(t),n>=t.length&&(n=0),n<0&&(n=t.length-1),t[n].classList.add("autocomplete-active")}function r(t){for(var e=0;e<t.length;e++)t[e].classList.remove("autocomplete-active")}function o(e){for(var n=document.getElementsByClassName("autocomplete-items"),a=0;a<n.length;a++)e!=n[a]&&e!=t&&n[a].parentNode.removeChild(n[a])}t.addEventListener("input",(function(a){var r,i,s,c=this.value;if(o(),!c)return!1;for(n=-1,r=document.createElement("DIV"),r.setAttribute("id",this.id+"autocomplete-list"),r.setAttribute("class","autocomplete-items"),this.parentNode.appendChild(r),s=0;s<e.length;s++)e[s].substr(0,c.length).toUpperCase()==c.toUpperCase()&&(i=document.createElement("DIV"),i.innerHTML="<strong>"+e[s].substr(0,c.length)+"</strong>",i.innerHTML+=e[s].substr(c.length),i.innerHTML+="<input type='hidden' value='"+e[s]+"'>",i.addEventListener("click",(function(e){t.value=this.innerText,o()})),r.appendChild(i))})),t.addEventListener("keydown",(function(t){var e=document.getElementById(this.id+" autocomplete-list");e&&(e=e.getElementsByTagName("div")),40==t.keyCode?(n++,a(e)):38==t.keyCode?(n--,a(e)):13==t.keyCode&&(t.preventDefault(),n>-1&&e&&e[n].click())})),document.addEventListener("click",(function(t){o(t.target)}))}var O=k,S=(n("cda7"),Object(u["a"])(O,C,y,!1,null,null,null)),j=S.exports,L={components:{searchBar:j},data:function(){return{musicas:""}}},T=L,I=(n("b33f"),Object(u["a"])(T,g,b,!1,null,"6181435e",null)),M=I.exports;a["a"].component("lista-tag",M),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(h)},beforeMount:function(){console.log("Bem vindo à lista de músicas do Augusto!!!")}}).$mount("#app")},"667b":function(t,e,n){t.exports=n.p+"img/whatsapp.a95ce0d8.png"},"85ec":function(t,e,n){},b33f:function(t,e,n){"use strict";var a=n("36bc"),r=n.n(a);r.a},cda7:function(t,e,n){"use strict";var a=n("01de"),r=n.n(a);r.a},dcd8:function(t,e,n){t.exports=n.p+"img/Logo.52526040.png"}});
//# sourceMappingURL=app.e20474a3.js.map