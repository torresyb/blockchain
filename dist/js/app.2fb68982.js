webpackJsonp([1],{"+VGo":function(e,t){},0:function(e,t,r){e.exports=r("NHnr")},"2O8E":function(e,t){},Btnx:function(e,t){},GSHz:function(e,t){},IcnI:function(e,t,r){"use strict";var s,a=r("/5sW"),n=r("NYxO"),o=r("fKPv"),i=r.n(o),c=r("Pyo4"),l="GET_NUMBERS",u="GET_LIST",d={initNum:{},listObj:[]},m=(s={},i()(s,l,function(e,t){e.initNum=t}),i()(s,u,function(e,t){e.listObj=JSON.parse(t)}),s),f={getNumberHandle:function(e){var t=e.commit;Object(c["b"])().then(function(e){t(l,e.data.data)})},getListObjHandle:function(e,t){var r=e.commit;Object(c["a"])(t).then(function(e){r(u,e.data.data)})}},p={getNums:function(e){return e.initNum},getLists:function(e){return e.listObj}},b={state:d,mutations:m,actions:f,getters:p};a["default"].use(n["a"]);var g=new n["a"].Store({state:{},mutations:{},modules:{home:b},strict:!1});t["a"]=g},La6V:function(e,t){},M93x:function(e,t,r){"use strict";var s={name:"nprogress-container"},a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nprogress-container"})},n=[],o=r("XyMi");function i(e){r("wgGW")}var c=!1,l=i,u=null,d=null,m=Object(o["a"])(s,a,n,c,l,u,d),f=m.exports,p={name:"app",components:{NprogressContainer:f}},b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nprogress-container"),r("router-view")],1)},g=[];function v(e){r("+VGo")}var j=!1,h=v,y=null,_=null,O=Object(o["a"])(p,b,g,j,h,y,_);t["a"]=O.exports},MRsc:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=r("uMhA"),s=(r.n(t),r("tvR6")),a=(r.n(s),r("/5sW")),n=r("M93x"),o=r("YaEn"),i=r("IcnI"),c=r("zL8q"),l=r.n(c),u=r("GtG6"),d=r.n(u),m=r("PJh5"),f=r.n(m),p=r("Q0Ca"),b=r("VuIw");e.moment=f.a,e.storage=b,a["default"].use(l.a),a["default"].use(d.a),Object.keys(p).forEach(function(e){a["default"].filter(e,p[e])});var g=new d.a({parent:".nprogress-container"});a["default"].config.productionTip=!1,window.vm=new a["default"]({nprogress:g,router:o["a"],store:i["a"],render:function(e){return e(n["a"])}}).$mount("#app")}.call(t,r("DuR2"))},Pyo4:function(e,t,r){"use strict";t["b"]=n,t["a"]=o;var s=r("mjRP"),a=r("Y8t/");function n(){var e=Object(s["b"])("/index/queryszs");return a["a"].get(e)}function o(e){var t=Object(s["a"])(e),r=Object(s["b"])("/index/query?"+t);return a["a"].get(r)}},Q0Ca:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){t["formatMoneyFixedTow"]=n,t["formatMoney"]=o,t["timeFormat"]=i;var s=r("mJx5"),a=(r.n(s),r("VjuZ"));r.n(a);function n(e){var t=Number(e).toFixed(2);if("NaN"==t)return"0.00";var r="0"===t?"-":t.replace(/(\d{1,3})(?=(\d{3})+(?:$|\D))/g,"$1,"),s=r.toString().split(".");return 1==s.length?(r=r.toString()+".00",r):(s.length>1&&s[1].length<2&&(r=r.toString()+"0"),r)}function o(e){var t=Number(e).toFixed(0);if("NaN"==t)return"0";var r=t.replace(/(\d{1,3})(?=(\d{3})+(?:$|\D))/g,"$1,");return r}function i(t){var r=e.moment(t).format("YYYY-MM-DD");return r}}.call(t,r("DuR2"))},VuIw:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["set"]=a,t["setMulti"]=n,t["get"]=o,t["getMulti"]=i,t["clear"]=c,t["clearMulti"]=l;var s=window.localStorage;function a(e,t){s.setItem(e,t)}function n(e){e.forEach(function(e){return a(e.key,e.value)})}function o(e){return s.getItem(e)}function i(e){return e.map(function(e){return o(e)})}function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?s.clear():s.removeItem(e)}function l(e){e.forEach(function(e){return c(e)})}},"Y8t/":function(e,t,r){"use strict";var s=r("y9m4"),a=(r.n(s),r("mtWM")),n=r.n(a);function o(e){if(e.data&&"0000"!=e.data.code)throw window.vm.$message.error(e.data.msg),new Error}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(r,s){n.a.get(e,t).then(function(e){o(e),r(e)}).catch(function(e){s(e)})})}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(s,a){n.a.post(e,t,r).then(function(e){o(e),s(e)}).catch(function(e){a(e)})})}n.a.interceptors.response.use(function(e){return e},function(e){return window.vm.$message.error("接口连接错误!"),Promise.reject(e)}),t["a"]={get:i,post:c}},YaEn:function(e,t,r){"use strict";var s=r("rzQm"),a=r.n(s),n=r("/5sW"),o=r("/ocq"),i={name:"index",data:function(){return{msg:" :) 选择要查看的项目(:"}}},c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"empty"},[r("h1",[e._v(e._s(e.msg))])])},l=[],u=r("XyMi");function d(e){r("MRsc")}var m=!1,f=d,p="data-v-67da62ef",b=null,g=Object(u["a"])(i,c,l,m,f,p,b),v=g.exports,j=r("Biqn"),h=r.n(j),y=(r("EuXz"),r("NYxO")),_=r("Pyo4"),O={name:"headers",data:function(){return{isRouterChange:!1,dialogFormVisible:!1,searchText:""}},computed:h()({},Object(y["c"])(["getLists"])),mounted:function(){var e=this;document.onkeydown=function(t){if(t=t||window.event,13==t.keyCode)return e.searchHandle(),!1}},methods:{addContractHandle:function(){this.dialogFormVisible=!this.dialogFormVisible,this.$emit("dialogContractHandle",this.dialogFormVisible)},searchHandle:function(){var e=this;Object(_["a"])({type:"o"===this.$route.params.oc?"o":"c",state:Number(this.$route.params.type)+1}).then(function(t){var r=JSON.parse(t.data.data),s=r.filter(function(t){return t.Record.name.indexOf(e.searchText)>-1});if(s.length>0){var a=s[0].Key;e.$router.push({name:"detail",params:{oc:e.$route.params.oc,type:e.$route.params.type,id:a}})}else e.$router.push({name:"empty",params:{oc:e.$route.params.oc,type:e.$route.params.type}});e.$store.commit("GET_LIST",JSON.stringify(s)),e.searchText=""})}}},x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"clearfix",attrs:{id:"header"}},[r("div",{staticClass:"hd-left fl"},[r("el-button",{attrs:{type:"primary"},on:{click:e.addContractHandle}},[e._v("新建贸易合同")])],1),r("div",{staticClass:"hd-right fr"},[r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchHandle},slot:"append"})],1)],1)])},w=[];function k(e){r("tcHq")}var C=!1,$=k,H="data-v-ff03487a",N=null,F=Object(u["a"])(O,x,w,C,$,H,N),R=F.exports,L={name:"menus",data:function(){return{}},computed:h()({},Object(y["c"])(["getNums"]))},z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"slideInLeft",attrs:{id:"menus"}},[r("div",{attrs:{id:"logo"}},[e._v("Jennifer Garner")]),r("div",{attrs:{id:"sideMenus"}},[r("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:!0,"default-active":e.$route.path.indexOf("detail")>-1?("o"==e.$route.params.oc?"/order":"/contract")+"/"+e.$route.params.oc+"/"+e.$route.params.type:e.$route.path,"default-openeds":["/order/o/0","/contract/c/0"],"background-color":"#292d30","text-color":"#7fa0a9","active-text-color":"#7fa0a9"}},[r("el-submenu",{attrs:{index:"/order/o/0"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-menu"}),r("span",[e._v("采购订单列表")])]),r("el-menu-item",{attrs:{index:"/order/o/0"}},[r("span",{attrs:{slot:"title"},slot:"title"},[e._v("未确认订单 "),r("i",{staticClass:"badge"},[e._v(e._s(e.getNums["o1"]))])])]),r("el-menu-item",{attrs:{index:"/order/o/1"}},[r("span",{attrs:{slot:"title"},slot:"title"},[e._v("已确认订单 "),r("i",{staticClass:"badge"},[e._v(e._s(e.getNums["o2"]))])])])],2),r("el-submenu",{attrs:{index:"/contract/c/0"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-document"}),r("span",[e._v("贸易合同列表")])]),r("el-menu-item",{attrs:{index:"/contract/c/0"}},[r("span",{attrs:{slot:"title"},slot:"title"},[e._v("未确认合同 "),r("i",{staticClass:"badge"},[e._v(e._s(e.getNums["c1"]))])])]),r("el-menu-item",{attrs:{index:"/contract/c/1"}},[r("span",{attrs:{slot:"title"},slot:"title"},[e._v("已确认合同 "),r("i",{staticClass:"badge"},[e._v(e._s(e.getNums["c2"]))])])])],2)],1)],1)])},q=[];function E(e){r("La6V")}var S=!1,V=E,M="data-v-66ae3dbe",P=null,I=Object(u["a"])(L,z,q,S,V,M,P),T=I.exports,D={name:"submenus",data:function(){return{}},computed:h()({},Object(y["c"])(["getLists"]))},G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"submenu"}},[e.getLists.length>0?r("ul",e._l(e.getLists,function(t){return r("li",{key:t.key},[r("a",{class:e.$route.params.id==t.Key?"active":"",attrs:{href:"#/detail/"+e.$route.params.oc+"/"+e.$route.params.type+"/"+encodeURIComponent(t.Key)}},[r("p",{staticClass:"title"},[e._v(e._s(t.Record.name))]),r("el-row",{staticClass:"item-flex",attrs:{type:"flex",justify:"space-between"}},["c"==e.$route.params.oc?[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content"},[e._v("项目编号："+e._s(t.Record.code&&t.Record.code.length>12?t.Record.code.substring(0,12)+"...":t.Record.code))])]),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content"},[e._v("招标编号："+e._s(t.Record.bidcode&&t.Record.bidcode.length>12?t.Record.bidcode.substring(0,12)+"...":t.Record.bidcode))])])]:[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content"},[e._v("订单编号："+e._s(t.Record.OrderId&&t.Record.OrderId.length>12?t.Record.OrderId.substring(0,12)+"...":t.Record.OrderId))])]),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content"},[e._v("项目编号："+e._s(t.Record.contractCode&&t.Record.contractCode.length>12?t.Record.contractCode.substring(0,12)+"...":t.Record.contractCode))])])]],2),r("el-row",{staticClass:"item-flex item-gray",attrs:{type:"flex",justify:"space-between"}},["c"==e.$route.params.oc?[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content"},[e._v("供货方式："+e._s(t.Record.ordermode))])]),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content"},[e._v("日期："+e._s(e._f("timeFormat")(t.Record.time)))])])]:[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content"},[e._v("规格："+e._s(t.Record.spec&&t.Record.spec.length>12?t.Record.spec.substring(0,12)+"...":t.Record.spec))])]),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content"},[e._v("总计："+e._s(t.Record.total))])])]],2)],1)])})):r("div",{staticClass:"empty"},[e._v(":) 无相关信息 (:")])])},W=[];function X(e){r("GSHz")}var J=!1,U=X,B="data-v-2d137886",Y=null,A=Object(u["a"])(D,G,W,J,U,B,Y),K=A.exports,Q=r("mjRP"),Z=r("Y8t/");function ee(e){var t=Object(Q["a"])(e),r=Object(Q["b"])("/contract/get?"+t);return Z["a"].get(r)}function te(e){var t=Object(Q["b"])("/contract/new");return Z["a"].post(t,e)}function re(e){var t=Object(Q["b"])("/contract/confirm");return Z["a"].post(t,e)}var se={name:"home",components:{HeaderComponent:R,NavigatorComponent:T,SubmenuComponent:K},data:function(){return{fullscreenLoading:!1,dialogFormVisible:!1,formLabelWidth:"120px",form:{name:"",code:"",bidcode:"",fpinfo:"",spinfo:"",time:"",money:"",ordermode:""},rules:{name:[{required:!0,message:"请填写项目名称",trigger:"blur"},{max:50,message:"项目名称长度不得超过50字符",trigger:"blur"}],code:[{required:!0,message:"请填写项目编号",trigger:"blur"},{max:50,message:"项目编号长度不得超过50字符",trigger:"blur"}],bidcode:[{required:!0,message:"请填写招标编号",trigger:"blur"},{max:50,message:"招标编号长度不得超过50字符",trigger:"blur"}],fpinfo:[{required:!0,message:"请填写甲方信息",trigger:"blur"},{max:50,message:"甲方信息长度不得超过50字符",trigger:"blur"}],spinfo:[{required:!0,message:"请填写乙方信息",trigger:"blur"},{max:50,message:"乙方信息长度不得超过50字符",trigger:"blur"}],time:[{required:!0,message:"请选择项目时间",trigger:"blur"}],money:[{required:!0,message:"请填写项目金额",trigger:"blur"}],ordermode:[{required:!0,message:"请选择订货方式",trigger:"change"}]}}},beforeRouteUpdate:function(e,t,r){"contract"!==e.name&&"order"!==e.name||(this.getNumberHandle(),this.getListObjHandle({type:"o"===e.params.oc?"o":"c",state:Number(e.params.type)+1})),r()},mounted:function(){this.getNumberHandle();var e={type:"o"===this.$route.params.oc?"o":"c",state:Number(this.$route.params.type)+1};this.getListObjHandle(e)},methods:h()({},Object(y["b"])(["getNumberHandle","getListObjHandle"]),{dialogContractHandle:function(){this.dialogFormVisible=!this.dialogFormVisible},contractSubmitHandle:function(){var e=this;this.$refs["contractForm"].validate(function(t){if(e.dialogFormVisible=!1,!t)return!1;e.fullscreenLoading=!0,te(e.form).then(function(t){"0000"===t.data.code&&(e.fullscreenLoading=!1,e.getNumberHandle(),e.getListObjHandle({type:"c",state:1}),e.$message.success("新建合同成功！"),e.$router.push({name:"contract",params:{oc:"c",type:0}}),e.$refs["contractForm"].resetFields())}).catch(function(t){console.log(t),e.fullscreenLoading=!1})})},closeHandle:function(e){this.$refs["contractForm"].resetFields(),e()},closeRstHandle:function(){this.dialogFormVisible=!1,this.$refs["contractForm"].resetFields()}})},ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{id:"appWrap"}},[r("header-component",{on:{dialogContractHandle:e.dialogContractHandle}}),r("navigator-component"),r("div",{staticClass:"clearfix",attrs:{id:"contentWrap"}},[r("submenu-component"),r("transition",{attrs:{name:"fade",mode:"out-in"}},[e.$route.meta.keepAlive?r("keep-alive",[r("router-view",{key:e.$route.fullPath,attrs:{id:"content"}})],1):e._e(),e.$route.meta.keepAlive?e._e():r("router-view",{key:e.$route.fullPath,attrs:{id:"content"}})],1)],1),r("el-dialog",{attrs:{title:"新建合同",visible:e.dialogFormVisible,width:"40%","before-close":e.closeHandle},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"contractForm",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"项目编号",prop:"code"}},[r("el-input",{model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),r("el-form-item",{attrs:{label:"招标编号",prop:"bidcode"}},[r("el-input",{model:{value:e.form.bidcode,callback:function(t){e.$set(e.form,"bidcode",t)},expression:"form.bidcode"}})],1),r("el-form-item",{attrs:{label:"甲方信息",prop:"fpinfo"}},[r("el-input",{model:{value:e.form.fpinfo,callback:function(t){e.$set(e.form,"fpinfo",t)},expression:"form.fpinfo"}})],1),r("el-form-item",{attrs:{label:"乙方信息",prop:"spinfo"}},[r("el-input",{model:{value:e.form.spinfo,callback:function(t){e.$set(e.form,"spinfo",t)},expression:"form.spinfo"}})],1),r("el-form-item",{attrs:{label:"项目时间",prop:"time"}},[r("el-date-picker",{staticStyle:{width:"140px"},attrs:{type:"date",placeholder:"选择日期",editable:!1,clearable:!1},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),r("el-form-item",{attrs:{label:"项目金额",prop:"money"}},[r("el-input",{staticStyle:{width:"218px"},attrs:{type:"number"},model:{value:e.form.money,callback:function(t){e.$set(e.form,"money",t)},expression:"form.money"}})],1),r("el-form-item",{attrs:{label:"订货方式",prop:"ordermode"}},[r("el-select",{attrs:{placeholder:"请选择订货方式"},model:{value:e.form.ordermode,callback:function(t){e.$set(e.form,"ordermode",t)},expression:"form.ordermode"}},[r("el-option",{attrs:{label:"临供",value:"临供"}})],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.closeRstHandle}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.contractSubmitHandle}},[e._v("确 定")])],1)],1)],1)},ne=[];function oe(e){r("2O8E"),r("Btnx")}var ie=!1,ce=oe,le="data-v-e24e037c",ue=null,de=Object(u["a"])(se,ae,ne,ie,ce,le,ue),me=de.exports;r("n12u"),r("XtiL");function fe(e){var t=Object(Q["a"])(e),r=Object(Q["b"])("/order/get?"+t);return Z["a"].get(r)}function pe(e){var t=Object(Q["b"])("/order/confirm");return Z["a"].post(t,e)}function be(e){var t=Object(Q["b"])("/order/new");return Z["a"].post(t,e)}var ge={data:function(){var e=function(e,t,r){setTimeout(function(){Number.isInteger(Number(t))?r():r(new Error("请输入数整数"))},1e3)};return{fullscreenLoading:!1,dialogFormVisible:!1,detailObj:{},orderLists:[],contractObj:{},form:{name:"",spec:"",price:"",amount:"",total:"0"},rules:{name:[{required:!0,message:"请填写品名",trigger:"blur"},{max:50,message:"品名长度不得超过50字符",trigger:"blur"}],spec:[{required:!0,message:"请填写规格",trigger:"blur"},{max:50,message:"规格长度不得超过50字符",trigger:"blur"}],price:[{required:!0,message:"请填写金额",trigger:"blur"},{validator:e,trigger:"blur"}],amount:[{required:!0,message:"请填写数量",trigger:"blur"},{validator:e,trigger:"blur"}],total:[{required:!0,message:"请填写合计",trigger:"blur"}]}}},watch:{"form.amount":function(e){this.form.total=e*this.form.price+""},"form.price":function(e){this.form.total=e*this.form.amount+""}},created:function(){"o"==this.$route.params.oc?this.lookOrderDetailHandle():this.lookContractDetailHandle()},methods:h()({},Object(y["b"])(["getNumberHandle","getListObjHandle"]),{lookOrderDetailHandle:function(){var e=this;fe({id:decodeURIComponent(this.$route.params.id)}).then(function(t){return e.detailObj=JSON.parse(t.data.data),e.detailObj.contractCode}).then(function(e){return ee({code:e.substr(1)})}).then(function(t){e.contractObj=JSON.parse(t.data.data)})},lookContractDetailHandle:function(){var e=this;this.orderLists=[],ee({code:decodeURIComponent(this.$route.params.id.substr(1))}).then(function(t){return e.contractObj=JSON.parse(t.data.data),e.contractObj}).then(function(t){Object.keys(t.orders).map(function(t){fe({id:t}).then(function(t){e.orderLists.push(JSON.parse(t.data.data))})})})},addOrderHandle:function(){this.dialogFormVisible=!this.dialogFormVisible},orderSubmitHandle:function(){var e=this;this.$refs["orderForm"].validate(function(t){if(e.dialogFormVisible=!1,!t)return!1;e.fullscreenLoading=!0;var r=Object.assign({},e.form,{contractCode:e.contractObj.code.substr(1)});be(r).then(function(t){"0000"===t.data.code&&(e.getNumberHandle(),e.$message.success("新建订单成功！"),e.$refs["orderForm"].resetFields(),e.lookContractDetailHandle(),e.fullscreenLoading=!1)}).catch(function(t){console.log(t),e.fullscreenLoading=!1})})},confirmOrderHandle:function(){var e=this;this.fullscreenLoading=!0,pe({id:this.$route.params.id}).then(function(t){"0000"===t.data.code&&(e.fullscreenLoading=!1,e.getNumberHandle(),e.getListObjHandle({type:"o",state:1}),e.$message.success("确认订单操作成功！"),e.$router.push({name:"order",params:{oc:"o",type:"0"}}))}).catch(function(t){console.log(t),e.fullscreenLoading=!1})},confirmContractHandle:function(){var e=this;this.fullscreenLoading=!0,re({code:this.$route.params.id.substr(1)}).then(function(t){"0000"===t.data.code&&(e.fullscreenLoading=!1,e.getNumberHandle(),e.getListObjHandle({type:"c",state:1}),e.$message.success("确认合同操作成功！"),e.$router.push({name:"contract",params:{oc:"c",type:"0"}}))}).catch(function(t){console.log(t),e.fullscreenLoading=!1})},closeHandle:function(e){this.$refs["orderForm"].resetFields(),e()},closeRstHandle:function(){this.dialogFormVisible=!1,this.$refs["orderForm"].resetFields()}})},ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"detailWrap"},[r("el-row",{staticClass:"detialTitle",attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("el-col",{attrs:{span:14}},[r("div",{staticClass:"title"},[e._v(e._s(e.detailObj.name||e.contractObj.name))])]),r("el-col",{attrs:{span:5}},[r("span",[e._v("2018-03-22 12:32")])]),r("el-col",{attrs:{span:5}},[2==e.contractObj.state&&"c"==e.$route.params.oc?r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.addOrderHandle}},[e._v("新建订单")]):e._e(),1==e.detailObj.state&&"o"==e.$route.params.oc?r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.confirmOrderHandle}},[e._v("确认订单")]):e._e(),1==e.contractObj.state&&"c"==e.$route.params.oc?r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.confirmContractHandle}},[e._v("确认合同")]):e._e()],1)],1),r("div",{staticClass:"detailContent"},["o"==e.$route.params.oc?r("div",[r("el-row",{staticClass:"detialNumber",attrs:{type:"flex",justify:"space-between",gutter:20}},[r("el-col",{attrs:{span:12}},[e._v("订单编号："+e._s(e.detailObj.OrderId))]),r("el-col",{attrs:{span:12}},[e._v("项目编号："+e._s(e.detailObj.contractCode))])],1),r("div",{staticClass:"detialText"},[r("el-row",{attrs:{type:"flex",justify:"space-between",gutter:20}},[r("el-col",{attrs:{span:12}},[e._v("品名："+e._s(e.detailObj.name))]),r("el-col",{attrs:{span:12}},[e._v("规格："+e._s(e.detailObj.spec))])],1),r("el-row",{attrs:{type:"flex",justify:"space-between",gutter:20}},[r("el-col",{attrs:{span:12}},[e._v("单价："+e._s(e.detailObj.price))]),r("el-col",{attrs:{span:12}},[e._v("数量："+e._s(e.detailObj.amount))])],1),r("el-row",{attrs:{type:"flex",justify:"space-between"}},[r("el-col",{attrs:{span:12}},[e._v("总计："+e._s(e.detailObj.total))])],1)],1)],1):e._e(),"o"==e.$route.params.oc?r("h3",{staticClass:"title"},[e._v("所属合同")]):e._e(),r("div",{class:"o"==e.$route.params.oc?"orderDetail":"contractDetail"},[r("el-row",{staticClass:"detialNumber",attrs:{type:"flex",justify:"space-between",gutter:20}},[r("el-col",{attrs:{span:12}},[e._v("招标编号："+e._s(e.contractObj.bidcode))]),r("el-col",{attrs:{span:12}},[e._v("项目编号："+e._s(e.contractObj.code))])],1),r("div",{staticClass:"detialText"},[r("el-row",{attrs:{type:"flex",justify:"space-between"}},[r("el-col",{attrs:{span:12}},[e._v("项目名称："+e._s(e.contractObj.name))])],1),r("el-row",{attrs:{type:"flex",justify:"space-between",gutter:20}},[r("el-col",{attrs:{span:12}},[e._v("甲方信息："+e._s(e.contractObj.fpinfo))]),r("el-col",{attrs:{span:12}},[e._v("乙方信息："+e._s(e.contractObj.spinfo))])],1),r("el-row",{attrs:{type:"flex",justify:"space-between",gutter:20}},[r("el-col",{attrs:{span:12}},[e._v("项目时间："+e._s(e._f("timeFormat")(e.contractObj.time)))]),r("el-col",{attrs:{span:12}},[e._v("项目金额："+e._s(e.contractObj.money)+"元")])],1),r("el-row",{attrs:{type:"flex",justify:"space-between",gutter:20}},[r("el-col",{attrs:{span:12}},[e._v("订货方式："+e._s(e.contractObj.ordermode))]),r("el-col",{attrs:{span:12}},[e._v("交货地点及验收方式：")])],1),r("el-row",{attrs:{type:"flex",justify:"space-between",gutter:20}},[r("el-col",{attrs:{span:12}},[e._v("结算方式：")]),r("el-col",{attrs:{span:12}},[e._v("结算时间：")])],1),r("el-row",{attrs:{type:"flex",justify:"space-between",gutter:20}},[r("el-col",{attrs:{span:12}},[e._v("付款方式：")]),r("el-col",{attrs:{span:12}},[e._v("账户信息：")])],1)],1)],1),e.orderLists.length>0?r("h3",{staticClass:"title"},[e._v("订单列表")]):e._e(),e._l(e.orderLists,function(t){return e.orderLists.length>0?r("div",{key:t.OrderId,staticClass:"orderList"},[r("p",{staticClass:"tip"},[1==t.state?r("span",[e._v("未确认")]):r("span",[e._v("已确认")])]),r("el-row",{attrs:{type:"flex",justify:"space-between",gutter:20}},[r("el-col",{attrs:{span:12}},[e._v("订单编号："+e._s(t.OrderId))]),r("el-col",{attrs:{span:12}},[e._v("项目编号："+e._s(t.contractCode))])],1),r("div",{staticClass:"detialText"},[r("el-row",{attrs:{type:"flex",justify:"space-between",gutter:20}},[r("el-col",{attrs:{span:12}},[e._v("品名："+e._s(t.name))]),r("el-col",{attrs:{span:12}},[e._v("规格："+e._s(t.spec))])],1),r("el-row",{attrs:{type:"flex",justify:"space-between",gutter:20}},[r("el-col",{attrs:{span:12}},[e._v("单价："+e._s(t.price))]),r("el-col",{attrs:{span:12}},[e._v("数量："+e._s(t.amount))])],1),r("el-row",{attrs:{type:"flex",justify:"space-between"}},[r("el-col",{attrs:{span:12}},[e._v("总计："+e._s(t.total))])],1)],1)],1):e._e()})],2),r("el-dialog",{attrs:{title:"新建订单",visible:e.dialogFormVisible,width:"40%","before-close":e.closeHandle},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"orderForm",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"品名",prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"规格",prop:"spec"}},[r("el-input",{model:{value:e.form.spec,callback:function(t){e.$set(e.form,"spec",t)},expression:"form.spec"}})],1),r("el-form-item",{attrs:{label:"单价",prop:"price"}},[r("el-input",{staticStyle:{width:"218px"},attrs:{type:"number"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"数量",prop:"amount"}},[r("el-input",{staticStyle:{width:"218px"},attrs:{type:"number"},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})],1),r("el-form-item",{attrs:{label:"合计",prop:"total"}},[r("el-input",{staticStyle:{width:"218px"},attrs:{disabled:"",type:"number"},model:{value:e.form.total,callback:function(t){e.$set(e.form,"total",t)},expression:"form.total"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.closeRstHandle}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.orderSubmitHandle}},[e._v("确 定")])],1)],1)],1)},je=[];function he(e){r("c1RM")}var ye=!1,_e=he,Oe="data-v-f1e18990",xe=null,we=Object(u["a"])(ge,ve,je,ye,_e,Oe,xe),ke=we.exports,Ce=[{path:"/",component:me,children:[{path:"/order/:oc/:type",component:v,name:"order",meta:{keepAlive:!0}},{path:"/contract/:oc/:type",component:v,name:"contract",meta:{keepAlive:!0}},{path:"/detail/:oc/:type/:id",component:ke,name:"detail",meta:{keepAlive:!1}},{path:"/detail/:oc/:type",component:v,name:"empty",meta:{keepAlive:!0}},{path:"/",redirect:"/order/o/0"}]}];n["default"].use(o["a"]);var $e=a()(Ce),He=new o["a"]({routes:$e});t["a"]=He},c1RM:function(e,t){},mjRP:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return n});var s={dev:"http://192.168.184.25:9093",build:"/"},a=function(e){return s.build+e},n=function(e){var t="";for(var r in e)t+=r+"="+e[r]+"&";return t.substring(0,t.length-1)}},tcHq:function(e,t){},tvR6:function(e,t){},uMhA:function(e,t){},uslO:function(e,t,r){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(e){return r(n(e))}function n(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id="uslO"},wgGW:function(e,t){}},[0]);
//# sourceMappingURL=app.2fb68982.js.map