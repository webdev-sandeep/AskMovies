(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v(" Ask Movies ")]),a("v-list-item-subtitle",[t._v(" MEVN stack project ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:""}},[a("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,r){return a("v-list-item",{key:r,attrs:{to:e.link}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Movies")])],1),a("v-main",[a("router-view")],1)],1)},s=[],o={data:function(){return{drawer:null,selectedItem:1,items:[{text:"Home",icon:"mdi-home",link:"/"},{text:"Add Post",icon:"mdi-note-plus",link:"/add-post"},{text:"About",icon:"mdi-help-box",link:"/about"}]}}},i=o,c=a("2877"),u=a("6544"),l=a.n(u),p=a("7496"),d=a("40dc"),m=a("5bc1"),v=a("ce7e"),f=a("132d"),g=a("8860"),b=a("da13"),h=a("5d23"),x=a("1baa"),w=a("34c3"),y=a("f6c4"),V=a("f774"),_=a("2a7f"),C=Object(c["a"])(i,n,s,!1,null,null,null),k=C.exports;l()(C,{VApp:p["a"],VAppBar:d["a"],VAppBarNavIcon:m["a"],VDivider:v["a"],VIcon:f["a"],VList:g["a"],VListItem:b["a"],VListItemContent:h["a"],VListItemGroup:x["a"],VListItemIcon:w["a"],VListItemSubtitle:h["b"],VListItemTitle:h["c"],VMain:y["a"],VNavigationDrawer:V["a"],VToolbarTitle:_["a"]});var P=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[this.$route.params.message?a("v-alert",{attrs:{border:"left","close-text":"Close Alert",color:"green accent-4",dark:"",dismissible:""}},[t._v(t._s(this.$route.params.message))]):t._e(),a("v-row",{attrs:{"no-gutters":""}},t._l(t.posts,(function(e){return a("v-col",{key:e._id,staticClass:"pa-3",attrs:{sm:"4"}},[a("v-card",{staticClass:"pa-1",attrs:{to:{name:"Post",params:{id:e._id}}}},[a("v-img",{attrs:{height:"250",src:"/"+e.image}}),a("v-btn",{staticClass:"ml-4 mt-3",attrs:{small:"",outlined:"",color:"indigo"}},[t._v(t._s(e.category))]),a("v-card-title",{staticClass:"headline"},[t._v(t._s(e.title))]),a("v-card-text",{staticClass:"py-0"},[a("p",[t._v(t._s(e.content.substring(0,100)+"..."))])])],1)],1)})),1)],1)},O=[],R=a("1da1"),$=(a("96cf"),a("d4ec")),I=a("bee2"),T=a("bc3a"),F=a.n(T),A="/api/post",E=function(){function t(){Object($["a"])(this,t)}return Object(I["a"])(t,null,[{key:"getAllPosts",value:function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.get(A);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getPostById",value:function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.get("".concat(A,"/").concat(e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"addPost",value:function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.post(A,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"updatePost",value:function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e,a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.patch("".concat(A,"/").concat(e),a);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"deletePost",value:function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.delete("".concat(A,"/").concat(e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),B={name:"Home",data:function(){return{posts:[]}},created:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.getAllPosts();case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{}},D=B,S=a("0798"),M=a("8336"),L=a("b0af"),H=a("99d9"),N=a("62ad"),z=a("a523"),J=a("adda"),q=a("0fd9"),G=Object(c["a"])(D,j,O,!1,null,null,null),U=G.exports;l()(G,{VAlert:S["a"],VBtn:M["a"],VCard:L["a"],VCardText:H["c"],VCardTitle:H["d"],VCol:N["a"],VContainer:z["a"],VImg:J["a"],VRow:q["a"]});var K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],W={},X=Object(c["a"])(W,K,Q,!1,null,null,null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"mx-auto",attrs:{sm:"10"}},[a("v-card",{staticClass:"pa-5"},[a("v-card-title",[t._v("Add New Post")]),a("v-divider"),a("v-form",{ref:"form",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[a("v-text-field",{attrs:{label:"Title","prepend-icon":"mdi-note",rules:t.rules},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}),a("v-text-field",{attrs:{label:"Category","prepend-icon":"mdi-view-list",rules:t.rules},model:{value:t.post.category,callback:function(e){t.$set(t.post,"category",e)},expression:"post.category"}}),a("v-textarea",{attrs:{label:"Content","prepend-icon":"mdi-note-plus",rules:t.rules},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}}),a("v-file-input",{attrs:{label:"Select Image",rules:t.rules,"show-size":"",counter:"",multiple:""},on:{change:t.selectFile}}),a("v-btn",{staticClass:"mt-3",attrs:{type:"submit",color:"primary"}},[t._v("Add Post")])],1)],1)],1)],1)],1)},tt=[],et={data:function(){return{rules:[function(t){return!!t||"This Field is required!"}],post:{title:"",category:"",content:"",image:""},image:""}},methods:{selectFile:function(t){this.image=t[0]},submitForm:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=new FormData,a.append("image",t.image),a.append("title",t.post.title),a.append("category",t.post.category),a.append("content",t.post.content),!t.$refs.form.validate()){e.next=10;break}return e.next=8,E.addPost(a);case 8:r=e.sent,t.$router.push({name:"Home",params:{message:r.message}});case 10:case"end":return e.stop()}}),e)})))()}}},at=et,rt=a("23a7"),nt=a("4bd4"),st=a("8654"),ot=a("a844"),it=Object(c["a"])(at,Z,tt,!1,null,null,null),ct=it.exports;l()(it,{VBtn:M["a"],VCard:L["a"],VCardTitle:H["d"],VCol:N["a"],VContainer:z["a"],VDivider:v["a"],VFileInput:rt["a"],VForm:nt["a"],VRow:q["a"],VTextField:st["a"],VTextarea:ot["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pa-4 mx-auto",attrs:{sm:"10"}},[a("v-card",{staticClass:"pa-2"},[a("v-img",{attrs:{src:"/"+t.post.image}}),a("v-card-actions",{staticClass:"pb-0"},[a("v-row",{staticClass:"mt-1 mx-1"},[a("v-col",{attrs:{sm:"2"}},[a("v-btn",{attrs:{small:"",outlined:"",color:"primary"}},[t._v(t._s(t.post.category))])],1),a("v-col",{staticClass:"d-flex justify-end",attrs:{sm:"10"}},[a("v-btn",{attrs:{color:"success",text:"",to:{name:"EditPost",params:{id:t.post._id}}}},[t._v("Edit")]),a("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){return t.deletePost(t.post._id)}}},[t._v("Delete")])],1)],1)],1),a("v-card-subtitle",{staticClass:"headline"},[a("h3",[t._v(t._s(t.post.title))])]),a("v-card-text",{staticClass:"grey--text"},[a("p",[t._v(t._s(t.post.content))]),a("p",[t._v(t._s(t.post.createdAt))])])],1)],1)],1)],1)],1)},lt=[],pt={data:function(){return{post:{}}},created:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.getPostById(t.$route.params.id);case 2:t.post=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{deletePost:function(t){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,E.deletePost(t);case 2:r=a.sent,e.$router.push({name:"Home",params:{message:r.message}});case 4:case"end":return a.stop()}}),a)})))()}}},dt=pt,mt=Object(c["a"])(dt,ut,lt,!1,null,null,null),vt=mt.exports;l()(mt,{VBtn:M["a"],VCard:L["a"],VCardActions:H["a"],VCardSubtitle:H["b"],VCardText:H["c"],VCol:N["a"],VContainer:z["a"],VImg:J["a"],VRow:q["a"]});var ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"mx-auto",attrs:{sm:"10"}},[a("v-card",{staticClass:"pa-5"},[a("v-card-title",[t._v("Edit Post")]),a("v-divider"),a("v-form",{ref:"form",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.updateForm.apply(null,arguments)}}},[a("v-text-field",{attrs:{label:"Title","prepend-icon":"mdi-note"},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}),a("v-text-field",{attrs:{label:"Category","prepend-icon":"mdi-view-list"},model:{value:t.post.category,callback:function(e){t.$set(t.post,"category",e)},expression:"post.category"}}),a("v-textarea",{attrs:{label:"Content","prepend-icon":"mdi-note-plus"},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}}),a("v-file-input",{attrs:{label:"Select Image","show-size":"",counter:"",multiple:""},on:{change:t.selectFile}}),a("v-img",{attrs:{src:"/"+t.post.image,width:"120"}}),a("v-btn",{staticClass:"mt-3",attrs:{type:"submit",color:"success"}},[t._v("Update Post")])],1)],1)],1)],1)],1)},gt=[],bt={data:function(){return{post:{title:"",category:"",content:"",image:""},image:""}},created:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.getPostById(t.$route.params.id);case 2:t.post=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{selectFile:function(t){this.image=t[0]},updateForm:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=new FormData,a.append("image",t.image),a.append("title",t.post.title),a.append("category",t.post.category),a.append("content",t.post.content),a.append("old_image",t.post.image),!t.$refs.form.validate()){e.next=11;break}return e.next=9,E.updatePost(t.$route.params.id,a);case 9:r=e.sent,t.$router.push({name:"Home",params:{message:r.message}});case 11:case"end":return e.stop()}}),e)})))()}}},ht=bt,xt=Object(c["a"])(ht,ft,gt,!1,null,null,null),wt=xt.exports;l()(xt,{VBtn:M["a"],VCard:L["a"],VCardTitle:H["d"],VCol:N["a"],VContainer:z["a"],VDivider:v["a"],VFileInput:rt["a"],VForm:nt["a"],VImg:J["a"],VRow:q["a"],VTextField:st["a"],VTextarea:ot["a"]}),r["a"].use(P["a"]);var yt=[{path:"/",name:"Home",component:U},{path:"/add-post",name:"AddPost",component:ct},{path:"/about",name:"About",component:Y},{path:"/post/:id",name:"Post",component:vt},{path:"/edit-post/:id",name:"EditPost",component:wt}],Vt=new P["a"]({mode:"history",base:"/",routes:yt}),_t=Vt,Ct=a("f309");r["a"].use(Ct["a"]);var kt=new Ct["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:_t,vuetify:kt,render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=app.a8625d82.js.map