(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1402"],{"44f2":function(t,n,o){"use strict";o.r(n);var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"vs-con-loading__container",attrs:{id:"div-configuration-information"}},[o("vx-card",{attrs:{title:"Configuration Information"}},[o("vs-table",{attrs:{"max-items":"10",pagination:"",data:t.confInfoList},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.data;return t._l(i,function(n,i){return o("vs-tr",{key:i,attrs:{data:n}},[o("vs-td",[t._v(t._s(n.section_group))]),o("vs-td",[t._v(t._s(n.section_name))]),o("vs-td",[t._v(t._s(n.data_point_group_key))]),o("vs-td",[t._v(t._s(n.data_point))]),o("vs-td",[t._v(t._s(n.data_point_value))])],1)})}}])},[o("template",{slot:"thead"},[o("vs-th",[t._v("Section Group")]),o("vs-th",[t._v("Section Name")]),o("vs-th",[t._v("DataPoint GroupKey")]),o("vs-th",[t._v("Data Point")]),o("vs-th",[t._v("Data Point Value")])],1)],2)],1)],1)},s=[],e=o("8055"),a=o.n(e),r=o("60fe"),c=o("ed08"),u={data:function(){return{socket:a()(r["SERVER_URL"]),archerId:this.$route.params.id,confInfoList:[]}},computed:{user:function(){return Object(c["b"])("user")}},mounted:function(){this.getConfigInfoList(),this.responseSocket()},methods:{getConfigInfoList:function(){this.$vs.loading({container:"#div-configuration-information",scale:.6});var t={archerId:this.archerId,userId:this.user.id,database:"Configuration"};this.socket.emit("REQ_DB_CONFIGURATION",t)},responseSocket:function(){var t=this;this.socket.on("connect",function(){t.socket.emit("REQ_USER_CONNECTED",t.user.id)}),this.socket.on("RES_DB_CONFIGURATION",function(n){t.confInfoList=n,t.$vs.loading.close("#div-configuration-information > .con-vs-loading")})}}},d=u,v=o("2877"),f=Object(v["a"])(d,i,s,!1,null,"624e349c",null);n["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0c1402.642fa06f.js.map