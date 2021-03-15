(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-app-2/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"43bb":function(t,e,a){"use strict";a("7184")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/home"}},[t._v("Home")]),t._v(" | "),a("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),a("router-link",{attrs:{to:"/films"}},[t._v("Films")]),t._v(" | "),a("router-link",{attrs:{to:"/covid"}},[t._v("Covid-19")])],1),a("router-view")],1)},s=[],i=(a("034f"),a("2877")),o={},c=Object(i["a"])(o,r,s,!1,null,null,null),l=c.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h2",[t._v("Tom POYVRE")])])}],m={name:"Home",components:{}},v=m,f=Object(i["a"])(v,d,p,!1,null,null,null),h=f.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h2",[t._v("Tom POYVRE")]),a("h4",[t._v("Page en vue.js utilisant une api non-local ainsi que différentes routes")]),a("span",[t._v("API permettant de rechercher des films afin d'en sortir une bande annonce et le lien de la page CinéSéries")])])}],y={name:"About"},g=y,x=Object(i["a"])(g,b,_,!1,null,null,null),C=x.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"films"},[a("link",{attrs:{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossorigin:"anonymous"}}),a("h2",[t._v("Films")]),a("div",{staticClass:"container",attrs:{id:"films"}},[a("label",{attrs:{for:"filmName"}},[t._v("Entrez un nom de film")]),t._v(" "),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.npm,expression:"npm "}],attrs:{type:"text",placeholder:"ex: Intouchable",id:"filmName"},domProps:{value:t.npm},on:{input:function(e){e.target.composing||(t.npm=e.target.value)}}}),a("br"),t._v(" "),a("br"),a("label",{attrs:{for:"date"}},[t._v("Entrez la date de sortie (AAAA-MM-JJ)")]),t._v(" "),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchDate,expression:"searchDate"}],attrs:{type:"text",placeholder:"ex: 2011-11-02",id:"date"},domProps:{value:t.searchDate},on:{input:function(e){e.target.composing||(t.searchDate=e.target.value)}}}),a("br"),t._v(" "),a("br"),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:t.getFilms}},[t._v("Envoyer les informations")]),a("hr")]),t.filmdata?a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-body"},[a("h3",{staticClass:"card-title"},[t._v(" "+t._s(t.filmdata.title))]),a("a",{staticClass:"btn btn-success",attrs:{href:t.filmdata.url}},[t._v("Lien du site")]),a("br"),t._v(" "),a("br"),a("a",{staticClass:"btn btn-success",attrs:{href:t.filmdata.videos["Bande Annonce"].fr}},[t._v(" Lien de la bande annonce")])])]):t._e()])},O=[],P=a("bc3a"),A=a.n(P),j="https://wiki-wars.fr/tom/redirect_movies.php?q=",E={name:"films",data:function(){return{filmdata:void 0,searchQuery:null,searchDate:null}},methods:{getFilms:function(){var t=this;A.a.get(j+this.searchQuery+"&release_date="+this.searchDate).then((function(e){t.filmdata=e.data})).catch((function(e){t.errors=e}))}}},S=E,k=(a("43bb"),Object(i["a"])(S,w,O,!1,null,null,null)),Q=k.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Covid"},[a("link",{attrs:{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossorigin:"anonymous"}}),a("h3",[t._v("STATISTIQUES COVID-19")]),a("div",{staticClass:"container",attrs:{id:"covid"}},[a("label",{attrs:{for:"country"}},[t._v("Entrez un Pays")]),t._v(" "),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],attrs:{type:"text",placeholder:"ex: France",id:"country"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),a("br"),t._v(" "),a("br"),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:t.getStats}},[t._v("Rechercher")]),a("hr")]),t.data?a("div",{staticClass:"card"},[a("h5",{staticClass:"card-header"},[t._v(t._s(t.data.location))]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Dernière mise à jour: "+t._s(t.data.lastChecked))]),a("p",{staticClass:"card-text"},[t._v("Morts: "+t._s(t.data.deaths))]),a("p",{staticClass:"card-text"},[t._v("Cas covid: "+t._s(t.data.confirmed))])])]):t._e()])},T=[],D="https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=",J={"x-rapidapi-key":"bae9f86238msh30eafe6a89a1f0bp1274fdjsnac82f157c759","x-rapidapi-host":"covid-19-coronavirus-statistics.p.rapidapi.com"},X={name:"covid",data:function(){return{data:void 0,searchQuery:null}},methods:{getStats:function(){var t=this;A.a.get(D+this.searchQuery,{},J).then((function(e){t.data=e.data})).catch((function(e){t.errors=e}))}}},$=X,I=(a("69b2"),Object(i["a"])($,F,T,!1,null,null,null)),M=I.exports;n["a"].use(u["a"]);var N=[{path:"/",name:"Home",component:h},{path:"/home",name:"Home",component:h},{path:"/about",name:"About",component:C},{path:"/films",name:"Films",component:Q},{path:"/covid",name:"Covid",component:M}],W=new u["a"]({routes:N}),R=W;n["a"].config.productionTip=!1,new n["a"]({router:R,render:function(t){return t(l)}}).$mount("#app")},"69b2":function(t,e,a){"use strict";a("e4e9")},7184:function(t,e,a){},"85ec":function(t,e,a){},e4e9:function(t,e,a){}});
//# sourceMappingURL=app.2a4016a6.js.map