(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2541329c"],{"014b":function(t,e,r){"use strict";var n=r("e53d"),c=r("07e3"),i=r("8e60"),o=r("63b6"),a=r("9138"),s=r("ebfd").KEY,u=r("294c"),f=r("dbdb"),l=r("45f2"),d=r("62a0"),h=r("5168"),p=r("ccb9"),b=r("6718"),v=r("47ee"),m=r("9003"),y=r("e4ae"),g=r("f772"),w=r("36c3"),O=r("1bc3"),x=r("aebd"),S=r("a159"),A=r("0395"),j=r("bf0b"),_=r("d9f6"),P=r("c3a1"),k=j.f,E=_.f,F=A.f,C=n.Symbol,N=n.JSON,D=N&&N.stringify,$="prototype",I=h("_hidden"),T=h("toPrimitive"),U={}.propertyIsEnumerable,J=f("symbol-registry"),R=f("symbols"),L=f("op-symbols"),K=Object[$],W="function"==typeof C,X=n.QObject,q=!X||!X[$]||!X[$].findChild,G=i&&u(function(){return 7!=S(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=k(K,e);n&&delete K[e],E(t,e,r),n&&t!==K&&E(K,e,n)}:E,M=function(t){var e=R[t]=S(C[$]);return e._k=t,e},Y=W&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},z=function(t,e,r){return t===K&&z(L,e,r),y(t),e=O(e,!0),y(r),c(R,e)?(r.enumerable?(c(t,I)&&t[I][e]&&(t[I][e]=!1),r=S(r,{enumerable:x(0,!1)})):(c(t,I)||E(t,I,x(1,{})),t[I][e]=!0),G(t,e,r)):E(t,e,r)},H=function(t,e){y(t);var r,n=v(e=w(e)),c=0,i=n.length;while(i>c)z(t,r=n[c++],e[r]);return t},Q=function(t,e){return void 0===e?S(t):H(S(t),e)},B=function(t){var e=U.call(this,t=O(t,!0));return!(this===K&&c(R,t)&&!c(L,t))&&(!(e||!c(this,t)||!c(R,t)||c(this,I)&&this[I][t])||e)},V=function(t,e){if(t=w(t),e=O(e,!0),t!==K||!c(R,e)||c(L,e)){var r=k(t,e);return!r||!c(R,e)||c(t,I)&&t[I][e]||(r.enumerable=!0),r}},Z=function(t){var e,r=F(w(t)),n=[],i=0;while(r.length>i)c(R,e=r[i++])||e==I||e==s||n.push(e);return n},tt=function(t){var e,r=t===K,n=F(r?L:w(t)),i=[],o=0;while(n.length>o)!c(R,e=n[o++])||r&&!c(K,e)||i.push(R[e]);return i};W||(C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(r){this===K&&e.call(L,r),c(this,I)&&c(this[I],t)&&(this[I][t]=!1),G(this,t,x(1,r))};return i&&q&&G(K,t,{configurable:!0,set:e}),M(t)},a(C[$],"toString",function(){return this._k}),j.f=V,_.f=z,r("6abf").f=A.f=Z,r("355d").f=B,r("9aa9").f=tt,i&&!r("b8e3")&&a(K,"propertyIsEnumerable",B,!0),p.f=function(t){return M(h(t))}),o(o.G+o.W+o.F*!W,{Symbol:C});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)h(et[rt++]);for(var nt=P(h.store),ct=0;nt.length>ct;)b(nt[ct++]);o(o.S+o.F*!W,"Symbol",{for:function(t){return c(J,t+="")?J[t]:J[t]=C(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in J)if(J[e]===t)return e},useSetter:function(){q=!0},useSimple:function(){q=!1}}),o(o.S+o.F*!W,"Object",{create:Q,defineProperty:z,defineProperties:H,getOwnPropertyDescriptor:V,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),N&&o(o.S+o.F*(!W||u(function(){var t=C();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))})),"JSON",{stringify:function(t){var e,r,n=[t],c=1;while(arguments.length>c)n.push(arguments[c++]);if(r=e=n[1],(g(e)||void 0!==t)&&!Y(t))return m(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!Y(e))return e}),n[1]=e,D.apply(N,n)}}),C[$][T]||r("35e8")(C[$],T,C[$].valueOf),l(C,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},"0395":function(t,e,r){var n=r("36c3"),c=r("6abf").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return c(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?a(t):c(n(t))}},"268f":function(t,e,r){t.exports=r("fde4")},"32a6":function(t,e,r){var n=r("241e"),c=r("c3a1");r("ce7e")("keys",function(){return function(t){return c(n(t))}})},4282:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("vs-card",[r("add-archer"),r("vs-table",{attrs:{data:t.archers},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return t._l(n,function(e,c){return r("vs-tr",{key:c,attrs:{data:e}},[r("vs-td",{attrs:{data:e.name}},[t._v(t._s(e.name))]),r("vs-td",[t._v(t._s(n[c].description))]),r("vs-td",[t._v(t._s(n[c].createdAt.split("T")[0]))]),r("vs-td",[r("div",{staticClass:"vx-row"},[r("vs-button",{attrs:{color:"danger",type:"border",icon:"delete",radius:""},on:{click:function(r){t.openConfirm(e._id)}}})],1)])],1)})}}])},[r("template",{slot:"thead"},[r("vs-th",[t._v("Name")]),r("vs-th",[t._v("Description")]),r("vs-th",[t._v("Created At")]),r("vs-th")],1)],2)],1)],1)},c=[],i=r("cebc"),o=(r("96cf"),r("3b8d")),a=r("2f62"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-6 pb-2 pt-6"},[r("vs-button",{attrs:{icon:"add"},on:{click:t.openDialog}},[t._v("Add Archer")]),r("vs-prompt",{attrs:{"vs-title":"Add Archer","vs-accept-text":"Add Archer","vs-button-cancel":"border","vs-is-valid":t.validateForm,"vs-active":t.activePrompt},on:{"vs-cancel":t.clearFields,"vs-accept":t.submit,"vs-close":t.clearFields,"update:vsActive":function(e){t.activePrompt=e}}},[r("div",[r("form",[r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col w-full"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mb-4 mt-5",attrs:{name:"title",placeholder:"Name",color:t.validateForm?"success":"danger"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),r("vs-textarea",{attrs:{rows:"5",label:"Add description"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1)])])])])],1)},u=[],f=(r("7f7f"),r("98ca")),l=r("ed08"),d={data:function(){return{activePrompt:!1,name:"",desc:""}},computed:{validateForm:function(){return!this.errors.any()&&""!=this.title},localUser:function(){return Object(l["b"])("user")}},methods:{submit:function(){var t=this;this.$validator.validateAll().then(function(e){e&&t.addArcher()})},clearFields:function(){this.name="",this.desc="",this.$store.commit("archer/SET_ARCHER_DIALOG_STATUS",!1)},addArcher:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["a"].add({name:this.name,userId:this.localUser.id,description:this.desc});case 2:this.$vs.notify({color:"success",title:"Add success",text:"Success in add archer"}),this.$store.dispatch("archer/getArcherList",this.localUser.id),this.clearFields();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),openDialog:function(){this.activePrompt=!0}}},h=d,p=r("2877"),b=Object(p["a"])(h,s,u,!1,null,"8bfbe49c",null),v=b.exports,m={data:function(){return{users:[{email:"user@mail.com",username:"user1",website:"XXX.com",id:"123"}],selId:null}},mounted:function(){this.$store.dispatch("archer/getArcherList",this.localUser.id)},methods:{onClickEditbtn:function(t){console.log("edit button clicked"),console.log(t)},openConfirm:function(t){this.selId=t,this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure delete this archer?",accept:this.deleteArcher})},deleteArcher:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["a"].removeArcher(this.selId);case 2:this.$vs.notify({type:"success",title:"Success",text:"Success in remove archer"}),this.$store.dispatch("archer/getArcherList",this.localUser.id);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),gotoArcherDetail:function(t){console.log(t),this.$router.push({path:"/archer-detail/".concat(t)})}},components:{AddArcher:v},computed:Object(i["a"])({localUser:function(){return Object(l["b"])("user")}},Object(a["b"])({archers:function(t){return t.archer.archers}}))},y=m,g=Object(p["a"])(y,n,c,!1,null,"eb1d0c0a",null);e["default"]=g.exports},"454f":function(t,e,r){r("46a7");var n=r("584a").Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},"46a7":function(t,e,r){var n=r("63b6");n(n.S+n.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"47ee":function(t,e,r){var n=r("c3a1"),c=r("9aa9"),i=r("355d");t.exports=function(t){var e=n(t),r=c.f;if(r){var o,a=r(t),s=i.f,u=0;while(a.length>u)s.call(t,o=a[u++])&&e.push(o)}return e}},6718:function(t,e,r){var n=r("e53d"),c=r("584a"),i=r("b8e3"),o=r("ccb9"),a=r("d9f6").f;t.exports=function(t){var e=c.Symbol||(c.Symbol=i?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:o.f(t)})}},"6abf":function(t,e,r){var n=r("e6f3"),c=r("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,c)}},"85f2":function(t,e,r){t.exports=r("454f")},"8aae":function(t,e,r){r("32a6"),t.exports=r("584a").Object.keys},9003:function(t,e,r){var n=r("6b4c");t.exports=Array.isArray||function(t){return"Array"==n(t)}},a4bb:function(t,e,r){t.exports=r("8aae")},bf0b:function(t,e,r){var n=r("355d"),c=r("aebd"),i=r("36c3"),o=r("1bc3"),a=r("07e3"),s=r("794b"),u=Object.getOwnPropertyDescriptor;e.f=r("8e60")?u:function(t,e){if(t=i(t),e=o(e,!0),s)try{return u(t,e)}catch(r){}if(a(t,e))return c(!n.f.call(t,e),t[e])}},bf90:function(t,e,r){var n=r("36c3"),c=r("bf0b").f;r("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return c(n(t),e)}})},ccb9:function(t,e,r){e.f=r("5168")},ce7e:function(t,e,r){var n=r("63b6"),c=r("584a"),i=r("294c");t.exports=function(t,e){var r=(c.Object||{})[t]||Object[t],o={};o[t]=e(r),n(n.S+n.F*i(function(){r(1)}),"Object",o)}},cebc:function(t,e,r){"use strict";var n=r("268f"),c=r.n(n),i=r("e265"),o=r.n(i),a=r("a4bb"),s=r.n(a),u=r("85f2"),f=r.n(u);function l(t,e,r){return e in t?f()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=s()(r);"function"===typeof o.a&&(n=n.concat(o()(r).filter(function(t){return c()(r,t).enumerable}))),n.forEach(function(e){l(t,e,r[e])})}return t}r.d(e,"a",function(){return d})},e265:function(t,e,r){t.exports=r("ed33")},ebfd:function(t,e,r){var n=r("62a0")("meta"),c=r("f772"),i=r("07e3"),o=r("d9f6").f,a=0,s=Object.isExtensible||function(){return!0},u=!r("294c")(function(){return s(Object.preventExtensions({}))}),f=function(t){o(t,n,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!c(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,n)){if(!s(t))return"F";if(!e)return"E";f(t)}return t[n].i},d=function(t,e){if(!i(t,n)){if(!s(t))return!0;if(!e)return!1;f(t)}return t[n].w},h=function(t){return u&&p.NEED&&s(t)&&!i(t,n)&&f(t),t},p=t.exports={KEY:n,NEED:!1,fastKey:l,getWeak:d,onFreeze:h}},ed33:function(t,e,r){r("014b"),t.exports=r("584a").Object.getOwnPropertySymbols},fde4:function(t,e,r){r("bf90");var n=r("584a").Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-2541329c.03f5ae02.js.map