require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([15],{"4USg":function(t,e,s){"use strict";var i=s("Bi6f"),o=s("Rqt0");var a=function(t){s("J5dR")},n=s("ybqe")(i.a,o.a,a,"data-v-71681a0a",null);e.a=n.exports},Bi6f:function(t,e,s){"use strict";var i=s("mvHQ"),o=s.n(i),a=s("Dd8w"),n=s.n(a),c=s("NYxO"),r=s("lRgn"),l=s("0xDb"),d=wx.createInnerAudioContext(),u=wx.getRecorderManager(),m={duration:6e4,sampleRate:44100,numberOfChannels:1,encodeBitRate:192e3,format:"aac"};e.a={data:function(){return{messageContent:"",conversation:{},messageKey:"",lastMsgTime:"",count:15,isEmojiOpen:!1,isMoreOpen:!1,isFocus:!1,isGroup:!1,messageList:[],emojiName:r.b,emojiMap:r.a,emojiUrl:r.c,height:0,modalVisible:!1,downloadInfo:{},percent:0,sysInfo:{},customModalVisible:!1,customData:"",customDescription:"",customExtension:"",safeBottom:34,isIpx:!1,isRecord:!1,isRecording:!1,canSend:!0,startPoint:0,title:"正在录音",rateModal:!1,rate:5,isShow:!1,faceUrl:"https://webim-1252463788.file.myqcloud.com/assets/face-elem/",videoStatus:l.e}},onShow:function(){this.isShow=!0},onLoad:function(t){var e=this;this.set=t.toAccount,wx.setNavigationBarTitle({title:this.set});var s=wx.getSystemInfoSync();this.sysInfo=s,this.height=s.windowHeight,this.isIpx=s.model.indexOf("iPhone X")>-1;var i=wx.createSelectorQuery(),o=this;wx.$app.on(this.TIM.EVENT.MESSAGE_RECEIVED,function(){i.select("#chat").boundingClientRect(function(t){t.bottom-o.height<150&&o.scrollToBottom()}).exec()});var a=setInterval(function(){0!==e.currentMessageList.length&&(e.scrollToBottom(),clearInterval(a))},600);this.$bus.$off("atUser"),this.$bus.$on("atUser",function(t){e.messageContent+=t.userID,e.messageContent+=" "}),u.onStart(function(){console.log("开始录音")}),u.onPause(function(){console.log("暂停录音")}),u.onStop(function(t){if(console.log("结束录音"),wx.hideLoading(),e.canSend)if(t.duration<1e3)e.$store.commit("showToast",{title:"录音时间太短"});else{var s=wx.$app.createAudioMessage({to:e.$store.getters.toAccount,conversationType:e.$store.getters.currentConversationType,payload:{file:t}});e.$store.commit("sendMessage",s),wx.$app.sendMessage(s)}}),this.$bus.$on("groupNameUpdate",function(t){t.groupProfile.groupID===e.toAccount&&wx.setNavigationBarTitle({title:t.newGroupProfile.name})})},onUnload:function(){wx.$app.setMessageRead({conversationID:this.$store.state.conversation.currentConversationID}),this.isEmojiOpen=!1,this.rateModal=!1,this.isMoreOpen=!1,this.messageContent="",this.isShow=!1},onPullDownRefresh:function(){Object(l.d)(this.getMessageList,1e3)()},computed:n()({},Object(c.c)({currentMessageList:function(t){return t.conversation.currentMessageList}}),Object(c.b)(["currentConversationType","currentConversationID","myInfo","toAccount"])),methods:{onChange:function(t){this.rate=t.mp.detail.index},handleLongPress:function(t){this.startPoint=t.touches[0],"record"===t.target.id&&(this.title="正在录音",this.isRecording=!0,this.startRecording(),this.canSend=!0)},chooseRecord:function(){this.isRecord=!this.isRecord},handleTouchMove:function(t){this.isRecording&&(this.startPoint.clientY-t.touches[t.touches.length-1].clientY>100?(this.title="松开手指，取消发送",this.canSend=!1):this.startPoint.clientY-t.touches[t.touches.length-1].clientY>20?(this.title="上划可取消",this.canSend=!0):(this.title="正在录音",this.canSend=!0))},handleTouchEnd:function(){this.isRecording=!1,wx.hideLoading(),u.stop()},startRecording:function(){var t=this;wx.authorize({scope:"scope.record",success:function(){console.log("录音授权成功"),u.start(m)},fail:function(){t.isRecording=!1,console.log("第一次录音授权失败"),wx.showModal({title:"提示",content:"您未授权录音，功能将无法使用",showCancel:!0,confirmText:"授权",success:function(t){t.confirm?wx.openSetting({success:function(t){t.authSetting["scope.record"]?(wx.showToast({title:"授权成功",icon:"none",duration:500}),u.start(m)):(console.log("未设置录音授权"),wx.showModal({title:"提示",content:"您未授权录音，功能将无法使用",showCancel:!1,success:function(t){wx.showToast({title:"授权成功"})}}))},fail:function(){wx.showToast({title:"授权失败",icon:"none",duration:500})}}):t.cancel&&console.log("取消授权录音")},fail:function(){wx.showToast({title:"打开授权失败",icon:"none",duration:500})}})}})},scrollToBottom:function(){this.isShow&&wx.pageScrollTo({scrollTop:99999})},customModal:function(){this.customModalVisible=!this.customModalVisible},sendCustomMessage:function(){if(0!==this.customData.length||0!==this.customDescription.length||0!==this.customExtension.length){var t=wx.$app.createCustomMessage({to:this.$store.getters.toAccount,conversationType:this.$store.getters.currentConversationType,payload:{data:o()({data:this.customData}),description:this.customDescription,extension:this.customExtension}});this.$store.commit("sendMessage",t),wx.$app.sendMessage(t),this.customModal(),this.customData="",this.customDescription="",this.customExtension=""}else this.$store.commit("showToast",{title:"不能为空"})},loseFocus:function(){this.handleClose()},handleModalShow:function(){this.modalVisible=!this.modalVisible},handleDownload:function(t){var e=t.fileUrl.slice(t.fileUrl.lastIndexOf(".")).toLowerCase();["doc","docx","xls","xlsx","ppt","pptx","pdf"].indexOf(e)>-1?(this.percent=0,this.downloadInfo=t,this.handleModalShow()):this.$store.commit("showToast",{title:"小程序不支持该文件预览哦",icon:"none",duration:2e3})},download:function(){var t=this,e=wx.downloadFile({url:t.downloadInfo.fileUrl,success:function(t){console.log("开始下载文件: ",t)},fail:function(e){e.errMsg;t.$store.commit("showToast",{title:"文件下载出错",icon:"none",duration:1500}),t.handleModalShow()},complete:function(s){e=null,wx.openDocument({filePath:s.tempFilePath,success:function(e){t.$store.commit("showToast",{title:"打开文档成功",icon:"none",duration:1e3}),t.percent=0,t.handleModalShow()},fail:function(e){console.log("打开文件失败",e),t.$store.commit("showToast",{title:"小程序打开该文件失败",icon:"none",duration:2e3}),t.handleModalShow()}})}});e.onProgressUpdate(function(e){t.percent=e.progress})},toDetail:function(){var t=this,e=this.$store.state.conversation.currentConversationID;if(this.isGroup=0===e.indexOf(this.TIM.TYPES.CONV_GROUP),this.isGroup){wx.navigateTo({url:"../groupDetail/main"})}else{var s={userIDList:[e.substring(3)]};wx.$app.getUserProfile(s).then(function(e){var s=e.data[0];switch(s.gender){case t.TIM.TYPES.GENDER_UNKNOWN:s.gender=t.$type.GENDER_UNKNOWN;break;case t.TIM.TYPES.GENDER_MALE:s.gender=t.$type.GENDER_MALE;break;case t.TIM.TYPES.GENDER_FEMALE:s.gender=t.$type.GENDER_FEMALE}t.$store.commit("updateUserProfile",s);wx.navigateTo({url:"../detail/main"})})}},getMessageList:function(){this.$store.dispatch("getMessageList"),wx.stopPullDownRefresh()},handleEmoji:function(){this.isFocus?(this.isFocus=!1,this.isEmojiOpen=!0):(this.isEmojiOpen=!this.isEmojiOpen,this.isMoreOpen=!1)},handleMore:function(){this.isFocus?(this.isFocus=!1,this.isMoreOpen=!0):(this.isMoreOpen=!this.isMoreOpen,this.isEmojiOpen=!1)},handleClose:function(){this.rateModal=!1,this.isFocus=!1,this.isMoreOpen=!1,this.isEmojiOpen=!1},isnull:function(t){if(""===t)return!0;return new RegExp("^[ ]+$").test(t)},sendMessage:function(){var t=this;if(this.isnull(this.messageContent))this.$store.commit("showToast",{title:"消息不能为空"});else{var e=wx.$app.createTextMessage({to:this.$store.getters.toAccount,conversationType:this.$store.getters.currentConversationType,payload:{text:this.messageContent}}),s=this.$store.state.conversation.currentMessageList.length;this.$store.commit("sendMessage",e),wx.$app.sendMessage(e).catch(function(){t.$store.commit("changeMessageStatus",s)}),this.messageContent=""}this.isFocus=!1,this.isEmojiOpen=!1,this.isMoreOpen=!1},sendPhoto:function(t){var e=this;"album"===t?this.chooseImage(t):"camera"===t&&wx.getSetting({success:function(s){s.authSetting["scope.camera"]?e.chooseImage(t):wx.authorize({scope:"scope.camera",success:function(){e.chooseImage(t)}})}})},videoError:function(t){this.$store.commit("showToast",{title:"视频出现错误，错误信息"+t.mp.detail.errMsg,duration:1500})},chooseImage:function(t){var e=this,s={};wx.chooseImage({sourceType:[t],count:1,success:function(t){var i=this;s=wx.$app.createImageMessage({to:e.$store.getters.toAccount,conversationType:e.$store.getters.currentConversationType,payload:{file:t},onProgress:function(t){e.percent=t}}),e.$store.commit("sendMessage",s),wx.$app.sendMessage(s).then(function(){e.percent=0}).catch(function(t){i.$store.commit("showToast",{title:t.message,duration:200})})}}),this.handleClose()},previewImage:function(t){wx.previewImage({current:t,urls:[t]})},chooseEmoji:function(t){this.messageContent+=t},handleResend:function(t){"fail"===t.status&&wx.$app.resendMessage(t)},sendSurvey:function(){if(this.customExtension){var t=wx.$app.createCustomMessage({to:this.$store.getters.toAccount,conversationType:this.$store.getters.currentConversationType,payload:{data:"survey",description:String(this.rate),extension:this.customExtension}});this.rate=0,this.customExtension="",this.$store.commit("sendMessage",t),wx.$app.sendMessage(t),this.handleClose()}else this.$store.commit("showToast",{title:"建议不要为空哦！"})},openAudio:function(t){var e=this;d.src=t.url,d.play(),d.onPlay(function(){}),d.onEnded(function(){wx.hideToast()}),d.onError(function(){e.$store.commit("showToast",{title:"小程序暂不支持播放该音频格式",icon:"none",duration:2e3})})},video:function(){var t=this;wx.chooseVideo({sourceType:["album","camera"],maxDuration:60,camera:"back",success:function(e){var s=wx.$app.createVideoMessage({to:t.$store.getters.toAccount,conversationType:t.$store.getters.currentConversationType,payload:{file:e}});t.$store.commit("sendMessage",s),wx.$app.sendMessage(s),t.handleClose()}})},getRandomInt:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t},generateUUID:function(){return"2.3.0-"+Object(l.c)()},call:function(){var t={call_id:this.generateUUID(),version:3,room_id:this.getRandomInt(0,4294967295),action:0,duration:0,invited_list:[]},e=o()(t),s=wx.$app.createCustomMessage({to:this.$store.getters.toAccount,conversationType:this.$store.getters.currentConversationType,payload:{data:e,description:"",extension:""}});this.$store.commit("sendMessage",s),wx.$app.sendMessage(s);var i="../call/main?args="+e+"&&from="+s.from+"&&to="+s.to;wx.navigateTo({url:i})}},destory:function(){}}},J5dR:function(t,e){},Rqt0:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat",style:{paddingBottom:t.isIpx?t.safeBottom+40+"px":"40px"},attrs:{id:"chat",eventid:"27"},on:{longpress:t.handleLongPress,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[s("div",{staticClass:"nav",attrs:{eventid:"0"},on:{click:t.toDetail}},[t._v("\n      查看资料\n    ")]),t._v(" "),s("div",{staticClass:"record-modal",class:t.isRecording?"":"modal-display"},[t._m(0),t._v(" "),s("div",{staticClass:"modal-title"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),s("i-modal",{attrs:{title:"确认下载？",visible:t.modalVisible,"s@cancel":"handleModalShow",eventid:"1",mpcomid:"0"},on:{ok:t.download}},[s("div",{staticClass:"input-wrapper"},[t._v("\n        进度"+t._s(t.percent)+"%\n      ")])]),t._v(" "),s("i-modal",{attrs:{title:"发送自定义消息","i-class":"custom-modal",visible:t.customModalVisible,eventid:"5",mpcomid:"1"},on:{ok:t.sendCustomMessage,cancel:t.customModal}},[s("div",{staticClass:"custom-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model.lazy:value",value:t.customData,expression:"customData",modifiers:{"lazy:value":!0}}],staticClass:"custom-input",attrs:{type:"text",placeholder:"输入数据",eventid:"2"},domProps:{value:t.customData},on:{input:function(e){e.target.composing||(t.customData=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.lazy:value",value:t.customDescription,expression:"customDescription",modifiers:{"lazy:value":!0}}],staticClass:"custom-input",attrs:{type:"text",placeholder:"输入描述",eventid:"3"},domProps:{value:t.customDescription},on:{input:function(e){e.target.composing||(t.customDescription=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.lazy:value",value:t.customExtension,expression:"customExtension",modifiers:{"lazy:value":!0}}],staticClass:"custom-input",attrs:{type:"text",placeholder:"输入其他",eventid:"4"},domProps:{value:t.customExtension},on:{input:function(e){e.target.composing||(t.customExtension=e.target.value)}}})])]),t._v(" "),s("i-modal",{attrs:{title:"对IM demo的评分和评价","i-class":"custom-modal",visible:t.rateModal,eventid:"8",mpcomid:"3"},on:{ok:t.sendSurvey,cancel:function(e){t.rateModal=!1}}},[s("div",{staticClass:"custom-wrapper"},[s("i-rate",{attrs:{value:t.rate,eventid:"6",mpcomid:"2"},on:{change:t.onChange}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.lazy:value",value:t.customExtension,expression:"customExtension",modifiers:{"lazy:value":!0}}],staticClass:"custom-input",attrs:{type:"text",placeholder:"输入评价",eventid:"7"},domProps:{value:t.customExtension},on:{input:function(e){e.target.composing||(t.customExtension=e.target.value)}}})],1)]),t._v(" "),s("div",{attrs:{id:"list",eventid:"14"},on:{click:t.loseFocus}},t._l(t.currentMessageList,function(e,i){return s("li",{key:e.ID,attrs:{id:e.ID}},["TIMGroupTipElem"===e.type||"TIMGroupSystemNoticeElem"===e.type?s("div",{staticClass:"notice"},[s("div",{staticClass:"content"},t._l(e.virtualDom,function(i,o){return s("span",{key:e.ID+o},[(i.name,s("span",[t._v(t._s(i.text))]))])}))]):s("div",{class:"out"===e.flow?"item-right":"item-left"},[s("div",{staticClass:"load",attrs:{eventid:"9_"+i},on:{click:function(s){t.handleResend(e)}}},[s("div",{class:e.status})]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"name"},[t._v("\n              "+t._s(e.nick||e.from)+"\n            ")]),t._v(" "),"TIMTextElem"===e.type?s("div",{staticClass:"message"},[s("div",{staticClass:"text-message"},t._l(e.virtualDom,function(i,o){return s("span",{key:e.ID+o},["span"===i.name?s("span",[t._v(t._s(i.text))]):t._e(),t._v(" "),"img"===i.name?s("image",{staticStyle:{width:"20px",height:"20px"},attrs:{src:i.src}}):t._e()])}))]):"TIMImageElem"===e.type?s("div",{staticClass:"message",attrs:{eventid:"10_"+i},on:{click:function(s){t.previewImage(e.payload.imageInfoArray[1].url)}}},[s("image",{staticClass:"img",staticStyle:{"max-width":"200px",height:"150px"},attrs:{src:e.payload.imageInfoArray[1].url,mode:"aspectFit"}})]):"TIMFileElem"===e.type?s("div",{staticClass:"message"},[s("div",{staticClass:"file",attrs:{eventid:"11_"+i},on:{click:function(s){t.handleDownload(e.payload)}}},[s("i-avatar",{attrs:{src:"../../../static/images/file.png",size:"large",shape:"square",mpcomid:"4_"+i}}),t._v(" "),s("div",[t._v(t._s(e.payload.fileName))])],1)]):"TIMCustomElem"===e.type?s("div",{staticClass:"message"},["survey"===e.payload.data?s("div",{staticClass:"survey"},[s("div",{staticClass:"title"},[t._v("\n                  对IM DEMO的评分和建议\n                ")]),t._v(" "),s("div",{staticClass:"description"},[s("i-rate",{attrs:{disabled:"true",value:e.payload.description,mpcomid:"5_"+i}})],1),t._v(" "),s("div",{staticClass:"suggestion"},[s("div",[t._v(t._s(e.payload.extension))])])]):"group_create"===e.payload.data?s("div",[s("div",[t._v(t._s(e.payload.extension))])]):"videoCall"===e.virtualDom[0].name?s("div",{staticClass:"custom-elem"},[s("div",[t._v(t._s(e.virtualDom[0].text))])]):s("div",{staticClass:"custom-elem"},[t._v("自定义消息")])]):"TIMSoundElem"===e.type?s("div",{staticClass:"message",attrs:{url:e.payload.url}},[s("div",{staticClass:"box",attrs:{eventid:"12_"+i},on:{click:function(s){t.openAudio(e.payload)}}},[s("image",{staticStyle:{height:"20px",width:"14px"},attrs:{src:"/static/images/audio.png"}}),t._v(" "),s("div",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(e.payload.second)+"s")])])]):"TIMFaceElem"===e.type?s("div",{staticClass:"message"},[s("div",{staticClass:"custom-elem"},[s("image",{staticStyle:{height:"90px",width:"90px"},attrs:{src:"@"===e.payload.data[4]?t.faceUrl+e.payload.data+".png":t.faceUrl+e.payload.data+"@2x.png"}})])]):"TIMVideoFileElem"===e.type?s("div",{staticClass:"message"},[s("video",{staticClass:"video",attrs:{src:e.payload.videoUrl,poster:""===e.payload.thumbUrl?"https://webim-1252463788.file.myqcloud.com/assets/images/video-poster.png":e.payload.thumbUrl,"object-fit":"contain",eventid:"13_"+i},on:{error:t.videoError}})]):t._e()]),t._v(" "),s("div",{staticClass:"avatar"},[s("i-avatar",{attrs:{src:e.avatar||"../../../static/images/header.png",shape:"square",mpcomid:"6_"+i}})],1)])])})),t._v(" "),s("div",{staticClass:"bottom",style:{paddingBottom:t.isIpx?t.safeBottom+"px":""}},[s("div",{staticClass:"bottom-div"},[s("div",{staticClass:"btn",attrs:{eventid:"15"},on:{click:t.chooseRecord}},[s("image",{staticClass:"btn-small",attrs:{src:"/static/images/record.png"}})]),t._v(" "),t.isRecord?t._e():s("div",{staticStyle:{width:"80%"}},[s("input",{directives:[{name:"model",rawName:"v-model.lazy:value",value:t.messageContent,expression:"messageContent",modifiers:{"lazy:value":!0}}],staticClass:"input",attrs:{type:"text","confirm-type":"send",focus:t.isFocus,eventid:"16"},domProps:{value:t.messageContent},on:{confirm:t.sendMessage,input:function(e){e.target.composing||(t.messageContent=e.target.value)}}})]),t._v(" "),t.isRecord?s("div",{staticClass:"record",attrs:{id:"record"}},[t.isRecording?t._e():[t._v("\n            长按进行录音\n          ")],t._v(" "),t.isRecording?[t._v("\n            抬起停止录音\n          ")]:t._e()],2):t._e(),t._v(" "),s("div",{staticClass:"btn",attrs:{eventid:"17"},on:{click:function(e){t.handleEmoji()}}},[s("image",{staticClass:"btn-small",attrs:{src:"/static/images/emoji.png"}})]),t._v(" "),s("div",{staticClass:"btn",attrs:{eventid:"18"},on:{click:function(e){t.handleMore()}}},[s("image",{staticClass:"btn-small",attrs:{src:"/static/images/plus.png"}})])]),t._v(" "),t.isEmojiOpen?s("div",{staticClass:"bottom-emoji"},[s("div",{staticClass:"emojis"},t._l(t.emojiName,function(e,i){return s("div",{key:e,staticClass:"emoji",attrs:{eventid:"19_"+i},on:{click:function(s){t.chooseEmoji(e)}}},[s("image",{staticStyle:{width:"25px",height:"25px"},attrs:{src:t.emojiUrl+t.emojiMap[e]}})])})),t._v(" "),s("div",{staticClass:"emoji-tab"},[s("i-row",{attrs:{mpcomid:"11"}},[s("i-col",{attrs:{span:"21",mpcomid:"9"}},[s("div",{staticStyle:{"line-height":"26px"}},[t._v("\n                😄\n              ")])]),t._v(" "),s("i-col",{attrs:{span:"3",mpcomid:"10"}},[s("div",{staticClass:"sending",attrs:{eventid:"20"},on:{click:function(e){t.sendMessage()}}},[t._v("发送")])])],1)],1)]):t._e(),t._v(" "),t.isMoreOpen?s("div",{staticClass:"bottom-image"},[s("div",{staticClass:"images"},[s("div",{staticClass:"block",attrs:{eventid:"21"},on:{click:function(e){t.sendPhoto("album")}}},[t._m(1),t._v(" "),s("div",{staticClass:"name"},[t._v("\n              图片\n            ")])]),t._v(" "),s("div",{staticClass:"block",attrs:{eventid:"22"},on:{click:function(e){t.sendPhoto("camera")}}},[t._m(2),t._v(" "),s("div",{staticClass:"name"},[t._v("\n              拍照\n            ")])]),t._v(" "),s("div",{staticClass:"block",attrs:{eventid:"23"},on:{click:t.video}},[t._m(3),t._v(" "),s("div",{staticClass:"name"},[t._v("\n              视频\n            ")])]),t._v(" "),s("div",{staticClass:"block",attrs:{eventid:"24"},on:{click:function(e){t.rateModal=!0}}},[t._m(4),t._v(" "),s("div",{staticClass:"name"},[t._v("\n              评分\n            ")])])]),t._v(" "),s("div",{staticClass:"images"},[s("div",{staticClass:"block",attrs:{eventid:"25"},on:{click:function(e){t.customModal()}}},[t._m(5),t._v(" "),s("div",{staticClass:"name"},[t._v("\n              自定义\n            ")])]),t._v(" "),"C2C"===t.currentConversationType?s("div",{staticClass:"block",attrs:{eventid:"26"},on:{click:t.call}},[t._m(6),t._v(" "),s("div",{staticClass:"name"},[t._v("\n              视频通话\n            ")])]):t._e()])]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"modal-loading"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"image"},[e("image",{staticClass:"icon",attrs:{src:"/static/images/image.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"image"},[e("image",{staticClass:"icon",attrs:{src:"/static/images/photo.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"image"},[e("image",{staticClass:"icon",attrs:{src:"/static/images/video.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"image"},[e("image",{staticClass:"icon",attrs:{src:"/static/images/dice.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"image"},[e("image",{staticClass:"icon",attrs:{src:"/static/images/define.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"image"},[e("image",{staticClass:"icon",attrs:{src:"/static/images/video-call.png"}})])}]};e.a=i},cSaW:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("5nAL"),o=s.n(i),a=s("4USg");new o.a(a.a).$mount()}},["cSaW"]);