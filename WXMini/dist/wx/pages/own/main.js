require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{"9gNZ":function(t,i,s){"use strict";var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{staticClass:"card"},[s("div",{staticClass:"item"},[s("i-row",{attrs:{mpcomid:"2"}},[s("i-col",{attrs:{span:"8",mpcomid:"0"}},[s("div",{staticClass:"avatar"},[s("image",{staticStyle:{width:"80px",height:"80px","border-radius":"8px"},attrs:{src:t.myInfo.avatar||"/static/images/header.png"}})])]),t._v(" "),s("i-col",{attrs:{span:"16",mpcomid:"1"}},[s("div",{staticClass:"right"},[s("div",{staticClass:"username"},[t._v(t._s(t.myInfo.nick))]),t._v(" "),s("div",{staticClass:"account"},[t._v("帐号："+t._s(t.myInfo.userID))])])])],1)],1)]),t._v(" "),s("div",{staticClass:"revise"},[s("i-button",{attrs:{type:"primary",long:"true",shape:"circle",eventid:"0",mpcomid:"3"},on:{click:t.reviseInfo}},[t._v("修改资料")])],1),t._v(" "),s("div",{staticClass:"revise"},[s("i-button",{attrs:{type:"error",long:"true",shape:"circle",eventid:"1",mpcomid:"4"},on:{click:t.logout}},[t._v("退出登录")])],1)])},staticRenderFns:[]};i.a=e},PpMG:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("5nAL"),a=s.n(e),r=s("nVT/");new a.a(r.a).$mount()},T6iq:function(t,i,s){"use strict";i.a={data:function(){return{search:"",myInfo:{}}},methods:{reviseInfo:function(){wx.navigateTo({url:"../profile/main"})},logout:function(){this.$store.commit("resetGroup"),this.$store.commit("resetUser"),this.$store.commit("resetCurrentConversation"),this.$store.commit("resetAllConversation"),wx.$app.logout(),wx.reLaunch({url:"../login/main"})}},onShow:function(){this.myInfo=this.$store.state.user.myInfo}}},mm4L:function(t,i){},"nVT/":function(t,i,s){"use strict";var e=s("T6iq"),a=s("9gNZ");var r=function(t){s("mm4L")},n=s("ybqe")(e.a,a.a,r,"data-v-79f2eaaa",null);i.a=n.exports}},["PpMG"]);