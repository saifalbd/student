(function(e){function t(t){for(var n,i,o=t[0],u=t[1],c=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("4160"),r("b64b"),r("159b"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("8c4f"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app",[r("b-card",[r("b-table",{attrs:{striped:"",items:e.items,"sort-desc.sync":"name",fields:e.fields,responsive:"sm"},scopedSlots:e._u([{key:"cell(action)",fn:function(t){return[r("b-button",{staticClass:"mr-2",attrs:{size:"sm"},on:{click:t.toggleDetails}},[e._v(" "+e._s(t.detailsShowing?"Hide":"Show")+" Details ")])]}},{key:"row-details",fn:function(t){return[r("b-card",[r("b-row",{staticClass:"mb-2"},[r("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[r("b",[e._v("birth_date:")])]),r("b-col",[e._v(e._s(t.item.birth_date))])],1),r("b-row",{staticClass:"mb-2"},[r("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[r("b",[e._v("phone:")])]),r("b-col",[e._v(e._s(t.item.phone))])],1),r("b-row",{staticClass:"mb-2"},[r("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[r("b",[e._v("address:")])]),r("b-col",[e._v(e._s(t.item.address.join(",")))])],1),r("b-row",{staticClass:"mb-2"},[r("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[r("b",[e._v("show:")])]),r("b-col",[r("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(r){return e.go(t.item)}}},[e._v(" show student ")])],1)],1),r("b-button",{attrs:{size:"sm"},on:{click:t.toggleDetails}},[e._v("Hide Details")])],1)]}}])})],1)],1)},i=[],o=(r("d81d"),r("96cf"),r("1da1")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",{staticClass:"m-0"},[r("b-col",{attrs:{cols:"12"}},[r("navBar")],1),r("b-col",{attrs:{cols:"3"}},[r("sideMenu")],1),r("b-col",{attrs:{cols:"9"}},[r("b-jumbotron",{attrs:{header:"students",lead:"students list"}},[e._t("default")],2)],1),r("b-col",{attrs:{cols:"12"}},[e._v("footer")])],1)},c=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"info"}},[r("b-navbar-brand",{attrs:{href:"#"}},[e._v("NavBar")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#"}},[e._v("Link")]),r("b-nav-item",{attrs:{href:"#",disabled:""}},[e._v("Disabled")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),r("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Search")])],1),r("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[r("b-dropdown-item",{attrs:{href:"#"}},[e._v("EN")]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("ES")]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("RU")]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("FA")])],1),r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("em",[e._v("User")])]},proxy:!0}])},[r("b-dropdown-item",{attrs:{href:"#"}},[e._v("Profile")]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("Sign Out")])],1)],1)],1)],1)],1)},d=[],m={},p=m,v=r("2877"),f=Object(v["a"])(p,l,d,!1,null,"2bfc28fc",null),b=f.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-list-group",[r("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[r("b-link",{attrs:{href:"/"}},[e._v("home")])],1),r("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[r("b-link",{attrs:{href:"/create"}},[e._v("create")])],1),r("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[r("b-link",{attrs:{href:"register"}},[e._v("register")])],1),r("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[r("b-link",{attrs:{href:"login"}},[e._v("login")])],1)],1)},g=[],_={},w=_,x=Object(v["a"])(w,h,g,!1,null,"d86f7a04",null),y=x.exports,k={components:{navBar:b,sideMenu:y}},j=k,S=Object(v["a"])(j,u,c,!1,null,null,null),O=S.exports,$=r("bc3a"),C=r.n($),R=r("5f35"),E=r.n(R),D=C.a.create({baseURL:E.a.devServer.proxy,timeout:2e3,headers:{Accept:"application/json","Content-Type":"application/json"}}),q=D,A={components:{app:O},data:function(){return{fields:["id","name","class_name","section","fee","action"],downFields:["birth_date","phone","division_id","district_id","address","created_at","updated_at"],items:[]}},methods:{go:function(e){this.$router.push({name:"show",params:{id:e.id}})},fetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.get("students");case 2:r=t.sent,n=r.data,e.items=n.map((function(e){return e.action="",e})),console.log(Object.keys(n[0]));case 6:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetch()}},P=A,F=Object(v["a"])(P,s,i,!1,null,"1efcb53c",null),L=F.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app",[r("vo",{ref:"form"},[r("b-form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.onSubmit()},reset:e.resetForm}},[r("b-card",{attrs:{header:"featured","header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[r("h4",{staticClass:"mb-0"},[e._v("add new Student")])]},proxy:!0}])},[r("b-card-text",[r("b-row",e._l(e.models,(function(t,n){return r("div",{key:n,staticClass:"col-6"},[r("vp",{attrs:{rules:t.rules},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.valid,s=n.errors;return[r("b-form-group",{attrs:{label:t.label,"invalid-feedback":e.invalidFeedback(s[0]),id:t.name}},[t.type&&"date"==t.type?r("b-form-datepicker",{attrs:{name:t.name,state:e.state(a,s,t.name),trim:""},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}}):t.type&&"tags"==t.type?r("b-form-tags",{attrs:{name:t.name,state:e.state(a,s),trim:""},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}}):t.options||t.type?r("b-form-select",{attrs:{name:t.name,disabled:!!t.disabled,state:e.state(a,s),trim:""},on:{change:function(r){return e.change(r,t.name)}},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}},[r("option",{attrs:{value:"",selected:""}},[e._v("select "+e._s(t.label))]),e._l(t.options,(function(t,n){return r("option",{key:n,domProps:{value:t.v,textContent:e._s(t.t)}})}))],2):r("b-form-input",{attrs:{placeholder:t.pl,name:t.name,state:e.state(a,s),trim:""},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}})],1)]}}],null,!0)})],1)})),0)],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Add New Student")])],1)],1)],1)],1)},B=[],M=(r("7db0"),r("b0c0"),r("d3b7"),{makeError:function(e){var t=document.createElement("div");return t.setAttribute("tabindex","-1"),t.setAttribute("tabindex","-1"),t.setAttribute("role","alert"),t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.setAttribute("class","invalid-feedback"),t.textContent=e,t},addError:function(e){for(var t in e){console.log(t);var r=this.$el.querySelector("#".concat(t));if(r){var n=r.querySelector('div[role="group"]');n&&function(){console.log(n);var r=n.querySelector('[name="'.concat(t,'"]'));console.log(r),r.classList.contains("is-valid")&&r.classList.remove("is-valid"),r.classList.add("is-invalid");var a=M.makeError(e[t]);r.addEventListener("focus",(function(){a.remove()})),n.appendChild(a)}()}}},fileSrc:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){t(n.result)},n.onerror=function(e){r(e)}})));case 1:case"end":return t.stop()}}),t)})))()}}),N=M,T={components:{app:O},methods:{go:function(e){this.$router.push({name:"show",params:{id:e.id}})},hasSsError:function(e){return console.log(this.sserrors),e in this.sserrors&&this.errors[e][0]},invalidFeedback:function(e){return e},formData:function(){var e=new Object;return this.models.forEach((function(t){e[t.name]=t.value})),e},resetForm:function(){},onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.form.validate();case 2:if(r=t.sent,r){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,n=e.formData(),t.next=9,q.post("students",n);case 9:a=t.sent,s=a.data,e.go(s),console.log(s),t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](5),i=t.t0.response.status,422==i&&(e.sserrors=t.t0.response.data.errors,N.addError.call(e,e.sserrors));case 19:case"end":return t.stop()}}),t,null,[[5,15]])})))()},state:function(e,t){return!t[0]&&(!!e||null)},fetchDivisions:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.get("divisions");case 3:r=t.sent,n=r.data,a=e.models.find((function(e){return"division_id"==e.name})),a.options=n.map((function(e){return{v:e.id,t:e.name}})),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},fetchDistricts:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,n=t.models.find((function(e){return"district_id"==e.name})),n.disabled=!0,n.value="",r.next=6,q.get("divisions/"+e);case 6:a=r.sent,s=a.data,console.log(s),n.options=s.map((function(e){return{v:e.id,t:e.name}})),n.disabled=!1,r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](0),console.error(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})))()},change:function(e,t){"division_id"==t&&this.fetchDistricts(e)}},created:function(){this.fetchDivisions()},data:function(){return{sserrors:{},models:[{name:"name",label:"name",pl:"student name hear",value:" ",rules:"required",message:""},{name:"class_name",label:"class name",value:"1",rules:"required",message:"",options:[{v:1,t:"one"},{v:2,t:"two"},{v:3,t:"three"},{v:4,t:"four"},{v:5,t:"five"},{v:6,t:"six"},{v:7,t:"seven"},{v:8,t:"eight"},{v:9,t:"nine"},{v:10,t:"ten"}]},{name:"section",label:"section",rules:"required",value:"A",message:"",options:[{v:"A",t:"Section A"},{v:"B",t:"Section B"},{v:"C",t:"Section C"}]},{type:"date",name:"birth_date",label:"birth date",pl:"student fee hear",rules:"required",value:"",message:""},{name:"fee",label:"fee per month",pl:"student fee hear",rules:"required|numeric",value:" ",message:""},{name:"phone",label:"phone (optional)",pl:"student phone number",rules:"required",value:" ",message:""},{name:"division_id",label:"division",rules:"required",value:"1",message:"",options:[]},{disabled:!0,name:"district_id",label:"district",rules:"required",value:"",message:"",options:[]},{type:"tags",name:"address",label:"address",pl:"student address hear",value:[],rules:"",message:"amar ssonar bangla"}]}},mounted:function(){}},U=T,H=Object(v["a"])(U,z,B,!1,null,"6535d19e",null),J=H.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app",[r("b-card",[r("b-table",{attrs:{stacked:"",items:e.items,"sort-desc.sync":"name",fields:e.fields,responsive:"sm"},scopedSlots:e._u([{key:"cell(action)",fn:function(t){return[r("b-button",{attrs:{size:"sm",variant:"outline-danger"},on:{click:function(t){return e.edit()}}},[e._v("edit")]),r("b-button",{attrs:{size:"sm",variant:"outline-danger"},on:{click:function(r){return e.remove(t.id)}}},[e._v("remove ")])]}},{key:"cell(address)",fn:function(t){return[e._v(" "+e._s(t.item.address.join(","))+" ")]}}])})],1)],1)},I=[],K={components:{app:O},data:function(){return{fields:["id","name","class_name","section","fee","birth_date","phone","division_id","district_id","address","created_at","updated_at","action"],downFields:[],items:[]}},methods:{edit:function(){var e=this.$route.params.id;this.$router.push({name:"edit",params:{id:e}})},remove:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,n=t.$route.params.id,r.next=4,q.delete("students/"+n);case 4:t.$router.push({name:"home"}),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error(r.t0);case 10:console.log(e);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))()},fetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=e.$route.params.id,t.next=4,q.get("students/"+r);case 4:n=t.sent,a=n.data,e.items=[a].map((function(e){return e.action="",e})),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},created:function(){this.fetch()}},Q=K,V=Object(v["a"])(Q,G,I,!1,null,"69d595e1",null),W=V.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app",[r("vo",{ref:"form"},[r("b-form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.onSubmit()},reset:e.resetForm}},[r("b-card",{attrs:{header:"featured","header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[r("h4",{staticClass:"mb-0"},[e._v("add new Student")])]},proxy:!0}])},[r("b-card-text",[r("b-row",e._l(e.models,(function(t,n){return r("div",{key:n,staticClass:"col-6"},[r("vp",{attrs:{rules:t.rules},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.valid,s=n.errors;return[r("b-form-group",{attrs:{label:t.label,"invalid-feedback":e.invalidFeedback(s[0]),id:t.name}},[t.type&&"date"==t.type?r("b-form-datepicker",{attrs:{name:t.name,state:e.state(a,s,t.name),trim:""},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}}):t.type&&"tags"==t.type?r("b-form-tags",{attrs:{name:t.name,state:e.state(a,s),trim:""},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}}):t.options||t.type?r("b-form-select",{attrs:{name:t.name,disabled:!!t.disabled,state:e.state(a,s),trim:""},on:{change:function(r){return e.change(r,t.name)}},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}},[r("option",{attrs:{value:"",selected:""}},[e._v("select "+e._s(t.label))]),e._l(t.options,(function(t,n){return r("option",{key:n,domProps:{value:t.v,textContent:e._s(t.t)}})}))],2):r("b-form-input",{attrs:{placeholder:t.pl,name:t.name,state:e.state(a,s),trim:""},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}})],1)]}}],null,!0)})],1)})),0)],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Add New Student")])],1)],1)],1)],1)},Y=[],Z={components:{app:O},methods:{hasSsError:function(e){return console.log(this.sserrors),e in this.sserrors&&this.errors[e][0]},invalidFeedback:function(e){return e},formData:function(){var e=new Object;return this.models.forEach((function(t){e[t.name]=t.value})),e},resetForm:function(){},onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.form.validate();case 2:if(r=t.sent,r){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,n=e.$route.params.id,a=e.formData(),t.next=10,q.put("students/"+n,a);case 10:e.$router.push({name:"show",params:{id:n}}),t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](5),s=t.t0.response.status,422==s&&(e.sserrors=t.t0.response.data.errors,N.addError.call(e,e.sserrors));case 17:case"end":return t.stop()}}),t,null,[[5,13]])})))()},state:function(e,t){return!t[0]&&(!!e||null)},fetchDivisions:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.get("divisions");case 3:r=t.sent,n=r.data,a=e.models.find((function(e){return"division_id"==e.name})),a.options=n.map((function(e){return{v:e.id,t:e.name}})),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},fetchDistricts:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,n=t.models.find((function(e){return"district_id"==e.name})),n.disabled=!0,n.value="",r.next=6,q.get("divisions/"+e);case 6:a=r.sent,s=a.data,console.log(s),n.options=s.map((function(e){return{v:e.id,t:e.name}})),n.disabled=!1,r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](0),console.error(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})))()},change:function(e,t){"division_id"==t&&this.fetchDistricts(e)},fetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=e.$route.params.id,t.next=4,q.get("students/"+r);case 4:for(i in n=t.sent,a=n.data,s=function(t){var r=e.models.find((function(e){return e.name==t}));r&&(r.value=a[t])},a)s(i);return o=a.name,e.models.find((function(e){return"name"==e.name})).value=o,t.abrupt("return",Promise.resolve(a));case 13:t.prev=13,t.t0=t["catch"](0),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetch();case 2:e.fetchDivisions();case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{sserrors:{},models:[{name:"name",label:"name",pl:"student name hear",value:" ",rules:"required",message:""},{name:"class_name",label:"class name",value:"1",rules:"required",message:"",options:[{v:1,t:"one"},{v:2,t:"two"},{v:3,t:"three"},{v:4,t:"four"},{v:5,t:"five"},{v:6,t:"six"},{v:7,t:"seven"},{v:8,t:"eight"},{v:9,t:"nine"},{v:10,t:"ten"}]},{name:"section",label:"section",rules:"required",value:"A",message:"",options:[{v:"A",t:"Section A"},{v:"B",t:"Section B"},{v:"C",t:"Section C"}]},{type:"date",name:"birth_date",label:"birth date",pl:"student fee hear",rules:"required",value:"",message:""},{name:"fee",label:"fee per month",pl:"student fee hear",rules:"required|numeric",value:" ",message:""},{name:"phone",label:"phone (optional)",pl:"student phone number",rules:"required",value:" ",message:""},{name:"division_id",label:"division",rules:"required",value:"1",message:"",options:[]},{disabled:!0,name:"district_id",label:"district",rules:"required",value:"",message:"",options:[]},{type:"tags",name:"address",label:"address",pl:"student address hear",value:[],rules:"",message:"amar ssonar bangla"}]}}},ee=Z,te=Object(v["a"])(ee,X,Y,!1,null,"774aea67",null),re=te.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-jumbotron",{attrs:{header:"login",lead:"put username and password"}})},ae=[],se={},ie=se,oe=Object(v["a"])(ie,ne,ae,!1,null,"5518ba30",null),ue=oe.exports,ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-jumbotron",{attrs:{header:"login",lead:"put username and password"}},[e._t("default")],2)},le=[],de={},me=de,pe=Object(v["a"])(me,ce,le,!1,null,"445bf1b2",null),ve=pe.exports;n["default"].use(a["a"]);var fe=[{path:"/",name:"home",component:L},{path:"/create",name:"create",component:J},{path:"/show/:id",name:"show",component:W},{path:"/edit/:id",name:"edit",component:re},{path:"/login",name:"login",component:ue},{path:"/register",name:"register",component:ve}],be=new a["a"]({mode:"history",base:"",routes:fe}),he=be,ge=r("5f5b"),_e=r("b1e0"),we=(r("f9e3"),r("2dd8"),r("7bb1")),xe=r("4c93"),ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},ke=[],je={name:"App",components:{}},Se=je,Oe=(r("034f"),Object(v["a"])(Se,ye,ke,!1,null,null,null)),$e=Oe.exports;n["default"].use(ge["a"]),n["default"].use(_e["a"]),Object.keys(xe).forEach((function(e){Object(we["c"])(e,xe[e])})),n["default"].component("vp",we["b"]),n["default"].component("vo",we["a"]),n["default"].config.productionTip=!1,new n["default"]({router:he,render:function(e){return e($e)}}).$mount("#app")},"5f35":function(e,t,r){e.exports={devServer:{proxy:"/api/"},publicPath:"",assetsDir:"",outputDir:"../public_html",filenameHashing:!0,indexPath:"../server/resources/views/vue.blade.php"}},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.ce24681a.js.map