(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{236:function(e,t,a){e.exports=a(529)},241:function(e,t,a){},49:function(e,t,a){},529:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(35),l=a.n(r),s=(a(241),a(20)),c=a(21),i=a(24),u=a(22),d=a(23),m=(a(49),a(50),a(3)),h=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(m.q,null,o.a.createElement(m.g,{sectioned:!0},o.a.createElement(m.l,null,"Alexa App Explanation"),o.a.createElement("br",null),o.a.createElement(m.h,{size:"small"},"We take your info and submit to amazon to create your very own skill, they review it and approve, and then you can reach your customers via their Alexa Flash Briefings."),o.a.createElement("br",null),o.a.createElement(m.c,{id:"BtnTextStyle",url:"/alex/collect-info",submit:!0}," Next "))))}}]),t}(n.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(m.q,null,o.a.createElement(m.g,{sectioned:!0},o.a.createElement("iframe",{width:"100%",src:"https://briefify.coldsmoke.co/alex/",id:"iframe"}))))}}]),t}(n.Component),g=a(48),f=a(46),b=a(36),E=a(17),v=a.n(E),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={public_name:"",one_sent_desc:"",detail_desc:"",whats_new:"",small_icon:[],large_icon:[],category:"",keywords:"",privacy:"",terms:"",skill_purchase_money:"Yes",personal_info:"info_yes",target_children:"target_yes",advertising:"advert_yes",testing_instructions:"",access_skill:"public",categories:"",selected:"",rejectedSmallIcon:[],rejectedLargeIcon:[],hasError:!1,popoverActive:!0,message:""},a.handleChange=function(e){return function(t){return a.setState(Object(b.a)({},e,t))}},a.handleRadioChange=function(e,t){"info_no"===t||"info_yes"===t?a.setState({personal_info:t}):"target_no"===t||"target_yes"===t?a.setState({target_children:t}):"advert_no"===t||"advert_yes"===t?a.setState({advertising:t}):"public"===t||"business"===t?a.setState({access_skill:t}):a.setState({skill_purchase_money:t})},a.handleCatChange=function(e){return a.setState({selected:e})},a.togglePopover=function(){a.setState(function(e){return{popoverActive:!e.popoverActive}})},a.validateForm=function(){return console.log(a.state),a.setState(Object(f.a)({},a.state,{errors:Object(f.a)({},a.state.error,{hasError:!a.state.small_icon[0]||!a.state.large_icon[0]||!a.state.selected||!a.state.public_name,small_icon:!a.state.small_icon[0]||void 0,large_icon:!a.state.large_icon[0]||void 0,category:!a.state.selected||void 0,public_name:!a.state.public_name||void 0})}),function(){return console.log(a.state)}),!a.state.small_icon[0]||!a.state.large_icon[0]||!a.state.selected||!a.state.public_name},a.handleSubmit=function(e){if(!a.validateForm()){var t=new FormData;t.append("small_icon",a.state.small_icon[0]),t.append("large_icon",a.state.large_icon[0]),t.append("public_name",a.state.public_name),t.append("one_sent_desc",a.state.one_sent_desc),t.append("detail_desc",a.state.detail_desc),t.append("whats_new",a.state.whats_new),t.append("category",a.state.selected),t.append("keywords",a.state.keywords),t.append("privacy",a.state.privacy),t.append("terms",a.state.terms),t.append("skill_purchase_money",a.state.skill_purchase_money),t.append("personal_info",a.state.personal_info),t.append("target_children",a.state.target_children),t.append("advertising",a.state.advertising),t.append("testing_instructions",a.state.testing_instructions),t.append("access_skill",a.state.access_skill),t.append("shop",a.props.shopName),fetch("files/information.php",{method:"POST",body:t}).then(function(e){return e.json()}).then(function(e){a.setState({message:e.message,active:!0}),window.location.href="/alex/"}).catch(function(e){a.setState({message:e})})}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("files/categoryList.php",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0}}).then(function(e){return e.json()}).then(function(t){e.setState({categories:t})}).catch(function(t){e.setState({message:t,categories:[]})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.public_name,n=t.one_sent_desc,r=t.detail_desc,l=t.whats_new,s=(t.categories,t.selected,t.keywords),c=t.privacy,i=t.terms,u=t.skill_purchase_money,d=t.personal_info,h=t.target_children,p=t.advertising,f=t.testing_instructions,b=t.access_skill,E=t.small_icon,v=t.rejectedSmallIcon,_=t.hasError,y=t.large_icon,S=t.rejectedLargeIcon,C=(o.a.createElement(m.c,{onClick:this.togglePopover},"Options"),!E.length&&o.a.createElement(m.i.FileUpload,null)),w=E.length>0&&o.a.createElement(m.v,{vertical:!0},E.map(function(e,t){return o.a.createElement(m.v,{alignment:"center",key:t},o.a.createElement("div",null,e.name," ",o.a.createElement(m.f,null,e.size," bytes")))})),j=!y.length&&o.a.createElement(m.i.FileUpload,null),x=y.length>0&&o.a.createElement(m.v,{vertical:!0},y.map(function(e,t){return o.a.createElement(m.v,{alignment:"center",key:t},o.a.createElement("div",null,e.name," ",o.a.createElement(m.f,null,e.size," bytes")))})),k=_&&o.a.createElement(m.b,{title:"The following images couldn\u2019t be uploaded:",status:"critical"},o.a.createElement(m.o,{type:"bullet"},v.map(function(e,t){return o.a.createElement(m.o.Item,{key:t},'"'.concat(e.name,'" is not supported. File type must be .mp3.'))}))),O=_&&o.a.createElement(m.b,{title:"The following images couldn\u2019t be uploaded:",status:"critical"},o.a.createElement(m.o,{type:"bullet"},S.map(function(e,t){return o.a.createElement(m.o.Item,{key:t},'"'.concat(e.name,'" is not supported. File type must be .mp3.'))})));return o.a.createElement(m.a,null,o.a.createElement(m.q,null,o.a.createElement(m.g,{sectioned:!0},o.a.createElement(m.l,null,"Information Required"),o.a.createElement("br",null),o.a.createElement(m.j,{action:"",method:"post",onSubmit:this.handleSubmit},o.a.createElement(m.k,null,!!this.state.errors&&!!this.state.errors.public_name&&o.a.createElement(m.n,{message:"Public Name is required"}),o.a.createElement(m.z,{value:a,placeholder:"Enter a name for your skill for the English (US) store",maxLength:50,max:50,label:"Public Name",onChange:this.handleChange("public_name")}),o.a.createElement(m.z,{value:n,maxLength:160,placeholder:"Enter a short description(160 character maximum) about your skill",label:"One Sentence Description",onChange:this.handleChange("one_sent_desc")}),o.a.createElement(m.z,{value:r,maxLength:4e3,label:"Detailed Description",placeholder:"Enter an emerging description of the skill's purpose, features and how it works",onChange:this.handleChange("detail_desc"),multiline:5}),o.a.createElement(m.z,{value:l,maxLength:2e3,label:"What's new?",onChange:this.handleChange("whats_new"),multiline:5}),o.a.createElement(m.v,{vertical:!0},k,!!this.state.errors&&!!this.state.errors.small_icon&&o.a.createElement(m.n,{message:"Small Skill icon is required"}),o.a.createElement(m.i,{accept:"image/*",type:"image",label:"Small Skill icon (108 * 108)",onDrop:function(t,a,n){e.setState({small_icon:[].concat(Object(g.a)(e.state.small_icon),Object(g.a)(a)),rejectedSmallIcon:n,hasError:n.length>0})}},w,C)),o.a.createElement(m.v,{vertical:!0},O,!!this.state.errors&&!!this.state.errors.large_icon&&o.a.createElement(m.n,{message:"Large Skill icon is required"}),o.a.createElement(m.i,{accept:"image/*",type:"image",label:"Large Skill icon (512 * 512)",onDrop:function(t,a,n){e.setState({large_icon:[].concat(Object(g.a)(e.state.large_icon),Object(g.a)(a)),rejectedLargeIcon:n,hasError:n.length>0})}},x,j)),!!this.state.errors&&!!this.state.errors.category&&o.a.createElement(m.n,{message:"Category is required"}),o.a.createElement(m.t,{label:"Category",placeholder:"Select",options:this.state.categories,onChange:this.handleCatChange,value:this.state.selected}),o.a.createElement(m.z,{value:s,maxLength:30,label:"Keywords",placeholder:"Enter search terms that you would use to describe your skill",onChange:this.handleChange("keywords")}),o.a.createElement(m.z,{value:c,label:"Privacy & Policy URL",placeholder:"Enter a link to the privacy policy that applies to this skill",onChange:this.handleChange("privacy")}),o.a.createElement(m.z,{value:i,label:"Terms of Use URL",placeholder:"Enter a link to the terms of use document for this skill",onChange:this.handleChange("terms")}),o.a.createElement(m.A,{variation:"strong"},"Does this skill allow users to make purchases or spend real money? *"),o.a.createElement(m.s,{label:"Yes",checked:"Yes"===u,id:"Yes",name:"skill_purchase_money",onChange:this.handleRadioChange}),o.a.createElement(m.s,{label:"No",id:"No",name:"skill_purchase_money",checked:"No"===u,onChange:this.handleRadioChange}),o.a.createElement(m.A,{variation:"strong"},"Does this Alexa skill collect users' personal information? *"),o.a.createElement(m.A,{variation:"subdued"},"For example: anything that can identify the user such as name, email, password, phone number, birth date, etc."),o.a.createElement(m.s,{label:"Yes",checked:"info_yes"===d,id:"info_yes",name:"personal_info",onChange:this.handleRadioChange}),o.a.createElement(m.s,{label:"No",id:"info_no",name:"personal_info",checked:"info_no"===d,onChange:this.handleRadioChange}),o.a.createElement(m.A,{variation:"strong"},"Is this skill directed to or does it target children under the age of 13? *"),o.a.createElement(m.A,{variation:"subdued"},"Please indicate if this skill is directed to children under the age of 13"," "),o.a.createElement(m.s,{label:"Yes",checked:"target_yes"===h,id:"target_yes",name:"target_children",onChange:this.handleRadioChange}),o.a.createElement(m.s,{label:"No",id:"target_no",name:"target_children",checked:"target_no"===h,onChange:this.handleRadioChange}),o.a.createElement(m.A,{variation:"strong"},"Does this skill contain advertising? *"),o.a.createElement(m.s,{label:"Yes",checked:"advert_yes"===p,id:"advert_yes",name:"advertising",onChange:this.handleRadioChange}),o.a.createElement(m.s,{label:"No",id:"advert_no",name:"advertising",checked:"advert_no"===p,onChange:this.handleRadioChange}),o.a.createElement(m.z,{value:f,maxLength:2e3,label:"Testing Instructions",onChange:this.handleChange("testing_instructions"),multiline:5}),o.a.createElement(m.A,{variation:"strong"},"Who should have access to this skill? *"),o.a.createElement(m.s,{label:"Public",checked:"public"===b,id:"public",name:"access_skill",onChange:this.handleRadioChange}),o.a.createElement(m.s,{label:"Alexa for Business Organizations",id:"business",name:"access_skill",checked:"business"===b,onChange:this.handleRadioChange}),o.a.createElement(m.c,{id:"BtnTextStyle",submit:!0},"Save & Continue"))))))}}]),t}(n.Component),y=a(45),S=a(66),C=a(55),w=a.n(C),j=a(67),x=a.n(j),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).defaultState={timer:900,showBanner:!1,showSuccessBanner:!1,countDownTime:"00:00",featured_discount:"",product_collection:"",general_announcement:"",last_update:"2019-04-24 4:24:00",count:0,active:!1,audioError:!1,text:"Collecting Information",progress:100,files:[],blob:"",rejectedFiles:[],hasError:!1,selectedTab:0,audio:"",url:"",shopID:0,paidStore:!1},a.PublishedIcon=function(){return o.a.createElement("div",{style:{float:"right",marginLeft:"10px",marginTop:"2px",width:"12px",height:"12px",borderStyle:"solid",borderWidth:"0.5px",borderColor:"#fff",borderRadius:"6px",backgroundColor:"Green"}})},a.convertUTCDateToLocalDate=function(e){var t=new Date(e.getTime()+60*e.getTimezoneOffset()*1e3),a=e.getTimezoneOffset()/60,n=e.getHours();return t.setHours(n-a),t},a.goForMonthlyPayment=function(){var e=new FormData;e.append("shop_id",a.state.shopID),fetch("files/pay.php",{method:"POST",body:e}).then(function(e){return e.json()}).then(function(e){console.log(e),window.location.href=e.recurring_application_charge.confirmation_url}).catch(function(e){a.setState({message:e})})},a.handleChange=function(e){return function(t){return a.setState(Object(b.a)({},e,t))}},a.handleModalChange=function(){a.setState(function(e){return{active:!e.active}})},a.handleErrorModalChange=function(){a.setState(function(e){return{audioError:!e.audioError}})},a.pad=function(e,t){for(var a=e+"";a.length<t;)a="0"+a;return a},a.setContent=function(e){a.setState(Object(f.a)({},a.state,{selectedTab:"text"==e?0:1}))},a.handleSubmit=function(e){if("1"==a.state.selectedTab&&v.a.isEmptyObject(a.state.files)&&v.a.isEmptyObject(a.state.blob))return a.setState(Object(f.a)({},a.state,{audioError:!0})),!1;var t=new FormData;v.a.isEmptyObject(a.state.files)&&!v.a.isEmptyObject(a.state.blob)?t.append("file",a.state.blob):!v.a.isEmptyObject(a.state.files)&&v.a.isEmptyObject(a.state.blob)&&t.append("file",a.state.files[0]),t.append("featured_discount",a.state.featured_discount),t.append("product_collection",a.state.product_collection),t.append("general_announcement",a.state.general_announcement),t.append("is_textbriefing","0"==a.state.selectedTab?"1":"2"),t.append("shop",a.props.shopName),fetch("files/data.php",{method:"POST",body:t}).then(function(e){return e.json()}).then(function(e){a.setState({message:e.message,is_textbriefing:e.is_textbriefing,active:!0,timer:900,showBanner:!0}),a.startCountdown()}).catch(function(e){a.setState({message:e})})},a.showBriefingCountDown=function(){a.getAppData(),a.setState({showBanner:!0,timer:900}),a.startCountdown(),console.log("Called From Outside")},a.startCountdown=function(){a.timer&&clearInterval(a.timer),a.timer=setInterval(function(){a.state.timer-1<1&&(clearInterval(a.timer),a.closeBanner(!0)),a.setState(Object(f.a)({},a.state,{timer:a.state.timer-1,countDownTime:a.countDown(a.state.timer-1)}))},1e3)},a.countDown=function(e){var t=Math.floor(e/60),n=e-60*t;return a.pad(t,2)+":"+a.pad(n,2)},a.closeBanner=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];a.setState({showBanner:!1,showSuccessBanner:e})},a.componentDidMount=function(){a.getAppData()},a.getAppData=function(){fetch("files/show.php?shop="+a.props.shopName,{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0}}).then(function(e){return e.json()}).then(function(e){""==e.id?window.location.href="intro":(a.setState({featured_discount:e.featured_discount,product_collection:e.product_collection,general_announcement:e.general_announcement,last_update:e.last_update,selectedTab:"1"==e.is_textbriefing?0:1,is_textbriefing:e.is_textbriefing,audio:e.audio,progress:e.precentage,paidStore:e.paid_store,shopID:e.id,text:e.textProgress}),a.state.progress<=40?v()(".Polaris-ProgressBar__Indicator").addClass("red"):a.state.progress<=70?v()(".Polaris-ProgressBar__Indicator").addClass("orange"):v()(".Polaris-ProgressBar__Indicator").addClass("green"))}).catch(function(e){a.setState({message:e})}),a.setState({count:1})},a._onRecordingComplete=function(e){x()(e,function(t,n){t?console.error(t):(a.setState({blob:e,files:[]}),a.state.url&&window.URL.revokeObjectURL(a.state.url),a.setState({url:window.URL.createObjectURL(e)}))})},a._onRecordingError=function(e){console.log("error recording",e.message),!!window.chrome&&(console.log("Open external"),window.open("/alex/external/record","_blank")),console.log(e.code,typeof e,e.name),a.state.url&&window.URL.revokeObjectURL(a.state.url),a.setState({url:null}),console.log(e+" == DOMException")},a.state=a.defaultState,console.log(a.props.shopName),window.app=Object(y.a)(Object(y.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.featured_discount,n=t.product_collection,r=t.general_announcement,l=(t.count,t.active),s=t.audioError,c=t.showBanner,i=t.showSuccessBanner,u=(t.progress,t.text,t.audio),d=t.files,h=t.hasError,p=t.rejectedFiles,b=t.selectedTab,E=t.is_textbriefing,v=t.url,_=!d.length&&o.a.createElement(m.i.FileUpload,null),y=d.length>0&&o.a.createElement(m.v,{vertical:!0},d.map(function(e,t){return o.a.createElement(m.v,{alignment:"center",key:t},o.a.createElement("div",null,e.name," ",o.a.createElement(m.f,null,e.size," bytes")))})),C=h&&o.a.createElement(m.b,{title:"The following images couldn\u2019t be uploaded:",status:"critical"},o.a.createElement(m.o,{type:"bullet"},p.map(function(e,t){return o.a.createElement(m.o.Item,{key:t},'"'.concat(e.name,'" is not supported. File type must be .mp3.'))}))),j=[o.a.createElement(m.x.Panel,{id:"panel1"},o.a.createElement(m.g,{sectioned:!0},o.a.createElement(m.j,{action:"",method:"post",onSubmit:this.handleSubmit},o.a.createElement(m.k,null,o.a.createElement(m.z,{value:a,label:"Featured Discount",onChange:this.handleChange("featured_discount")}),o.a.createElement(m.z,{value:n,label:"Product Collection",onChange:this.handleChange("product_collection")}),o.a.createElement(m.z,{value:r,label:"General Announcement",onChange:this.handleChange("general_announcement")}),o.a.createElement(m.c,{id:"BtnTextStyle",submit:!0},"Save"))))),o.a.createElement(m.x.Panel,{id:"panel2"},o.a.createElement(m.g,{sectioned:!0},o.a.createElement(m.j,{action:"",method:"post",onSubmit:this.handleSubmit},o.a.createElement(m.k,null,o.a.createElement("div",null,!!u&&"0"==E&&o.a.createElement(m.y,null,o.a.createElement(m.l,null,"Published Audio"),o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},o.a.createElement(w.a,{src:"https://briefify.coldsmoke.co/alex/uploads/"+u,controls:!0,style:{minWidth:"500px"}}))),o.a.createElement(m.y,null,o.a.createElement(m.l,null,"New Audio"),o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(S.a,{onRecordingComplete:this._onRecordingComplete,onRecordingError:this._onRecordingError,style:{margin:"0 auto"}}),o.a.createElement("p",null,"Click and hold to start recording mp3."),v&&o.a.createElement("div",null,o.a.createElement(w.a,{src:v,controls:!0,style:{minWidth:"500px"}})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("strong",null,"OR"),o.a.createElement("br",null),o.a.createElement("br",null))))),o.a.createElement(m.v,{vertical:!0},C,o.a.createElement(m.i,{accept:"audio/mp3",type:"file",onDrop:function(t,a,n){e.setState({files:[].concat(Object(g.a)(e.state.files),Object(g.a)(a)),rejectedFiles:n,hasError:n.length>0,blob:""})}},y,_)),o.a.createElement("p",null,o.a.createElement("strong",null,"Note :")," Please see the"," ",o.a.createElement("a",{rel:"noopener noreferrer",href:"https://developer.amazon.com/docs/flashbriefing/flash-briefing-skill-api-feed-reference.html#cert-audio-content",target:"_blank"},"link")," ","and go through the guide before uploading audio content in alexa skill"," "),o.a.createElement(m.c,{id:"BtnAudioStyle",submit:!0},"Save")))))];return this.state.count,o.a.createElement(m.a,null,this.state.progress&&this.state.progress>0?o.a.createElement(m.q,null,o.a.createElement(m.p,{open:l,size:"Medium",onClose:this.handleModalChange,title:"Alexa Submission ",primaryAction:{content:"OK",onAction:this.handleModalChange}},o.a.createElement(m.p.Section,null,o.a.createElement(m.y,null,o.a.createElement(m.m,{source:"save",color:"green"}),o.a.createElement("p",{className:"Savetext"},"Your Alexa Briefing is successfully saved."," ")))),o.a.createElement(m.g,{sectioned:!0},o.a.createElement(m.l,{h1:!0},"App Submission Progress"),o.a.createElement(m.w,null,this.state.text," - ",this.state.progress,"% Completed"),o.a.createElement(m.r,{progress:this.state.progress,size:"large"})),c&&o.a.createElement(m.b,{title:"Briefing Publishing",status:"warning"},o.a.createElement("p",null,"Flash briefing will be available on alexa in"," ",this.state.countDownTime," mins")),i&&o.a.createElement(m.b,{title:"Briefing Published",onDismiss:function(){e.setState(Object(f.a)({},e.state,{showSuccessBanner:!1}))},status:"success"}),!this.state.paidStore&&o.a.createElement(m.e,{title:"Update to Pro",illustration:"https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg",primaryAction:{content:"Upgrade to Pro",onAction:function(){return console.log("Clicked")}}},o.a.createElement("p",null,"Upload or Record audio for alexa")),o.a.createElement(m.g,{title:"Briefing Types ",sectioned:"true"},o.a.createElement(m.d,{segmented:!0},o.a.createElement(m.c,{primary:0==b,onClick:function(){return e.setContent("text")}},o.a.createElement("p",null,"Text ","1"==E&&o.a.createElement(this.PublishedIcon,null)," ",!this.state.formErrorMessage)),o.a.createElement(m.c,{primary:1==b,onClick:function(){return e.setContent("audio")}},o.a.createElement("p",null,"Audio ","0"==E&&o.a.createElement(this.PublishedIcon,null)))),"0000-00-00 00:00:00"!==this.state.last_update&&o.a.createElement("p",null,o.a.createElement("br",null),"Last updated on"," ",this.convertUTCDateToLocalDate(new Date(this.state.last_update)).toLocaleString())),j[b],s&&o.a.createElement(m.p,{open:s,size:"Medium",onClose:this.handleErrorModalChange,title:"Alexa Submission ",primaryAction:{content:"OK",onAction:this.handleErrorModalChange}},o.a.createElement(m.p.Section,null,o.a.createElement(m.y,null,o.a.createElement(m.m,{source:"save",color:"red"}),o.a.createElement("p",{className:"errortext"},"Please upload or record audio"))))):o.a.createElement("div",{style:{textAlign:"center",marginTop:"100px"}},o.a.createElement(m.q,null,o.a.createElement(m.u,{size:"large",color:"teal"}))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).defaultState={username:"",password:""},a.handleChange=function(e){return function(t){return a.setState(Object(b.a)({},e,t))}},a.handleSubmit=function(e){fetch("https://briefify.coldsmoke.co/alex/files/auth.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0},body:JSON.stringify({username:a.state.username,password:a.state.password})}).then(function(e){return e.json()}).then(function(e){console.log(e),"1"==e.status&&(localStorage.setItem("login",e.status),window.location.href="dashboard")}).catch(function(e){a.setState({message:e})})},a.componentDidMount=function(){},a.state=a.defaultState,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){"1"===localStorage.getItem("login")&&(window.location.href="dashboard");var e=this.state,t=e.username,a=e.password;return o.a.createElement(m.a,null,o.a.createElement(m.q,null,o.a.createElement(m.g,{sectioned:!0},o.a.createElement(m.l,null,"Login Form"),o.a.createElement("br",null),o.a.createElement(m.j,{action:"",method:"post",onSubmit:this.handleSubmit},o.a.createElement(m.k,null,o.a.createElement(m.z,{value:t,label:"Username",onChange:this.handleChange("username")}),o.a.createElement(m.z,{value:a,label:"Password",type:"password",onChange:this.handleChange("password")}),o.a.createElement(m.c,{id:"BtnTextStyle",submit:!0},"Login"))))))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={selectedStatus:"",selectedStore:"",message:"",active:!1,count:0,options:"",activeModal:!1},a.handleModalChange=function(){a.setState(function(e){return{activeModal:!e.activeModal}})},a.handleStatusChange=function(e){a.setState({selectedStatus:e})},a.handleSubmit=function(e){fetch("https://briefify.coldsmoke.co/alex/files/submit_progress.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0},body:JSON.stringify({selectedStore:a.state.selectedStore,selectedStatus:a.state.selectedStatus})}).then(function(e){return e.json()}).then(function(e){a.setState({message:e.message,activeModal:!0})}).catch(function(e){a.setState({message:e})})},a.handleChange=function(e){a.setState({selectedStore:e}),fetch("https://briefify.coldsmoke.co/alex/files/getProgress.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0},body:JSON.stringify({store:e})}).then(function(e){return e.json()}).then(function(e){e.collect_information?a.setState({selectedStatus:"collect-information"}):e.submit_approval?a.setState({selectedStatus:"submit-approval"}):e.approved?a.setState({selectedStatus:"approved"}):a.setState({selectedStatus:""}),a.setState({active:!0})}).catch(function(e){a.setState({selectedStatus:"",active:!1})})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.active,n=(t.count,t.options),r=t.activeModal,l=localStorage.getItem("login");console.log(l),null===l&&(window.location.href="/alex/admin"),0===this.state.count&&(fetch("https://briefify.coldsmoke.co/alex/files/fetch_shops.php",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0}}).then(function(e){return e.json()}).then(function(t){e.setState({options:t})}).catch(function(t){e.setState({message:t,options:""})}),this.setState({count:1}));return o.a.createElement(m.a,null,o.a.createElement(m.q,null,o.a.createElement(m.g,{sectioned:!0},o.a.createElement(m.l,null,"Dashboard"),o.a.createElement("br",null),o.a.createElement(m.j,{action:"",method:"post",onSubmit:this.handleSubmit},o.a.createElement(m.k,null,o.a.createElement(m.t,{label:"Select Store",options:n,onChange:this.handleChange,value:this.state.selectedStore}),!0===a&&o.a.createElement(m.t,{label:"Select Status",options:[{label:"--Selected--",value:""},{label:"Collect Information",value:"collect-information"},{label:"Approval Submission",value:"submit-approval"},{label:"Approved & Publised",value:"approved"}],onChange:this.handleStatusChange,value:this.state.selectedStatus}),!0===a&&o.a.createElement(m.c,{id:"BtnStyle",submit:!0},"Save"))),o.a.createElement(m.p,{open:r,onClose:this.handleModalChange,title:"App Status",primaryAction:{content:"OK",onAction:this.handleModalChange}},o.a.createElement(m.p.Section,null,o.a.createElement(m.y,null,o.a.createElement(m.m,{source:"save",color:"green"}),o.a.createElement("p",{className:"Savetext"},"Successfully saved entry.")))))))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={url:""},a._onRecordingComplete=function(e){x()(e,function(t,n){if(t)console.error(t);else{console.log("recording",e);var o=new FormData;o.append("data",e),fetch("data.php",{method:"POST",body:o}).then(function(e){return e.blob()}),a.state.url&&window.URL.revokeObjectURL(a.state.url),a.setState({url:window.URL.createObjectURL(e)})}})},a._onRecordingError=function(e){console.log("error recording",e),a.state.url&&window.URL.revokeObjectURL(a.state.url),a.setState({url:null})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.url;return o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",minHeight:"100vh"}},o.a.createElement("div",null,o.a.createElement(S.a,{onRecordingComplete:this._onRecordingComplete,onRecordingError:this._onRecordingError,style:{margin:"0 auto"}}),o.a.createElement("p",null,"Click and hold to start recording mp3."),e&&o.a.createElement("div",null,o.a.createElement(w.a,{src:e,controls:!0,style:{minWidth:"500px"}})))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).defaultState={featured_discount:"",product_collection:"",general_announcement:"",count:0,active:!1,text:"Collecting Information",progress:0,files:[],blob:"",rejectedFiles:[],hasError:!1,selectedTab:0,url:""},a.handleChange=function(e){return function(t){return a.setState(Object(b.a)({},e,t))}},a.handleModalChange=function(){a.setState(function(e){return{active:!e.active}})},a.handleSubmit=function(e){console.log(a.state);var t=new FormData;v.a.isEmptyObject(a.state.files)&&!v.a.isEmptyObject(a.state.blob)?t.append("file",a.state.blob):!v.a.isEmptyObject(a.state.files)&&v.a.isEmptyObject(a.state.blob)&&t.append("file",a.state.files[0]),t.append("featured_discount",a.state.featured_discount),t.append("product_collection",a.state.product_collection),t.append("general_announcement",a.state.general_announcement),t.append("shop",a.props.shopName),fetch("/alex/files/data.php",{method:"POST",body:t}).then(function(e){return e.json()}).then(function(e){a.setState({message:e.message,active:!0}),window.opener.app.showBriefingCountDown(),window.close()}).catch(function(e){a.setState({message:e})})},a.componentDidMount=function(){fetch("/alex/files/show.php?shop="+a.props.shopName,{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0}}).then(function(e){return e.json()}).then(function(e){""==e.id?window.location.href="intro":(a.setState({featured_discount:e.featured_discount,product_collection:e.product_collection,general_announcement:e.general_announcement,progress:e.precentage,text:e.textProgress}),a.state.progress<=40?v()(".Polaris-ProgressBar__Indicator").addClass("red"):a.state.progress<=70?v()(".Polaris-ProgressBar__Indicator").addClass("orange"):v()(".Polaris-ProgressBar__Indicator").addClass("green"))}).catch(function(e){a.setState({message:e})})},a._onRecordingComplete=function(e){x()(e,function(t,n){t?console.error(t):(a.setState({blob:e,files:[]}),a.state.url&&window.URL.revokeObjectURL(a.state.url),a.setState({url:window.URL.createObjectURL(e)}))})},a._onRecordingError=function(e){console.log("error recording",e),a.state.url&&window.URL.revokeObjectURL(a.state.url),a.setState({url:null})},a.handleTabChange=a.handleTabChange.bind(Object(y.a)(Object(y.a)(a))),a.state=a.defaultState,console.log(a.props.shopName),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleTabChange",value:function(e){this.setState({selectedTab:e})}},{key:"render",value:function(){var e=this,t=this.state,a=(t.featured_discount,t.product_collection,t.general_announcement,t.count,t.active),n=(t.progress,t.text,t.files),r=t.hasError,l=t.rejectedFiles,s=(t.selectedTab,t.url);!n.length&&o.a.createElement(m.i.FileUpload,null),n.length>0&&o.a.createElement(m.v,{vertical:!0},n.map(function(e,t){return o.a.createElement(m.v,{alignment:"center",key:t},o.a.createElement("div",null,e.name," ",o.a.createElement(m.f,null,e.size," bytes")))})),r&&o.a.createElement(m.b,{title:"The following images couldn\u2019t be uploaded:",status:"critical"},o.a.createElement(m.o,{type:"bullet"},l.map(function(e,t){return o.a.createElement(m.o.Item,{key:t},'"'.concat(e.name,'" is not supported. File type must be .mp3.'))})));return 0===this.state.count&&(fetch("files/show.php?shop="+this.props.shopName,{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0}}).then(function(e){return e.json()}).then(function(t){""==t.id?window.location.href="intro":(e.setState({featured_discount:t.featured_discount,product_collection:t.product_collection,general_announcement:t.general_announcement,progress:t.precentage,text:t.textProgress}),e.state.progress<=40?v()(".Polaris-ProgressBar__Indicator").addClass("red"):e.state.progress<=70?v()(".Polaris-ProgressBar__Indicator").addClass("orange"):v()(".Polaris-ProgressBar__Indicator").addClass("green"))}).catch(function(t){e.setState({message:t})}),this.setState({count:1})),o.a.createElement(m.a,null,o.a.createElement(m.q,null,o.a.createElement(m.p,{open:a,size:"Medium",onClose:this.handleModalChange,title:"Alexa Submission ",primaryAction:{content:"OK",onAction:this.handleModalChange}},o.a.createElement(m.p.Section,null,o.a.createElement(m.y,null,o.a.createElement(m.m,{source:"save",color:"green"}),o.a.createElement("p",{className:"Savetext"},"Your Alexa Briefing is successfully saved."," ")))),o.a.createElement(m.g,{sectioned:!0},o.a.createElement(m.j,{action:"",method:"post",onSubmit:this.handleSubmit},o.a.createElement(m.k,null,o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(S.a,{onRecordingComplete:this._onRecordingComplete,onRecordingError:this._onRecordingError,style:{margin:"0 auto"}}),o.a.createElement("p",null,"Click and hold to start recording mp3."),s&&o.a.createElement("div",null,o.a.createElement(w.a,{src:s,controls:!0,style:{minWidth:"500px"}})),o.a.createElement("br",null),o.a.createElement("br",null)))),o.a.createElement("p",null,o.a.createElement("strong",null,"Note :")," Please see the"," ",o.a.createElement("a",{rel:"noopener noreferrer",href:"https://developer.amazon.com/docs/flashbriefing/flash-briefing-skill-api-feed-reference.html#cert-audio-content",target:"_blank"},"link")," ","and go through the guide before uploading audio content in alexa skill"," "),o.a.createElement(m.c,{id:"BtnAudioStyle",submit:!0}," ","Publish and Close"," "))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(531),D=a(532);v()(window).on("load",function(){v()("iframe").attr("allow","microphone")});var I=window.location.href,L=new URL(I);if(L.searchParams.get("shop"))var B=L.searchParams.get("shop");else B="";B&&localStorage.setItem("shopName",B),localStorage.getItem("shopName")&&(B=localStorage.getItem("shopName")),l.a.render(o.a.createElement(T.a,null,o.a.createElement("div",null,o.a.createElement(D.a,{exact:!0,path:"/alex/external/record",render:function(e){return o.a.createElement(A,Object.assign({shopName:B},e))}}),o.a.createElement(D.a,{exact:!0,path:"/alex/demo",component:R}),o.a.createElement(D.a,{exact:!0,path:"/alex/",render:function(e){return o.a.createElement(k,Object.assign({shopName:B},e))}}),o.a.createElement(D.a,{exact:!0,path:"/alex/iframe",component:p}),o.a.createElement(D.a,{exact:!0,path:"/alex/intro",render:function(e){return o.a.createElement(h,Object.assign({shopName:B},e))}}),o.a.createElement(D.a,{exact:!0,path:"/alex/collect-info",render:function(e){return o.a.createElement(_,Object.assign({shopName:B},e))}}),o.a.createElement(D.a,{exact:!0,path:"/alex/app",render:function(e){return o.a.createElement(k,Object.assign({shopName:B},e))}}),o.a.createElement(D.a,{exact:!0,path:"/alex/admin",component:O}),o.a.createElement(D.a,{exact:!0,path:"/alex/admin/dashboard",component:P}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[236,2,1]]]);
//# sourceMappingURL=main.8b04b335.chunk.js.map