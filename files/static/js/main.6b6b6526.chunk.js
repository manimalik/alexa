(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{236:function(e,t,a){e.exports=a(526)},241:function(e,t,a){},50:function(e,t,a){},526:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(36),r=a.n(o),s=(a(241),a(21)),c=a(22),i=a(25),u=a(23),d=a(24),m=(a(50),a(51),a(3)),h=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement(m.o,null,l.a.createElement(m.e,{sectioned:!0},l.a.createElement(m.j,null,"Alexa App Explanation"),l.a.createElement("br",null),l.a.createElement(m.f,{size:"small"},"We take your info and submit to amazon to create your very own skill, they review it and approve, and then you can reach your customers via their Alexa Flash Briefings."),l.a.createElement("br",null),l.a.createElement(m.c,{id:"BtnTextStyle",url:"/alex/collect-info",submit:!0}," Next "))))}}]),t}(n.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement(m.o,null,l.a.createElement(m.e,{sectioned:!0},l.a.createElement("iframe",{width:"100%",src:"https://briefify.coldsmoke.co/alex/",id:"iframe"}))))}}]),t}(n.Component),g=a(49),f=a(81),b=a(37),E=a(17),v=a.n(E),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={public_name:"",one_sent_desc:"",detail_desc:"",whats_new:"",small_icon:[],large_icon:[],category:"",keywords:"",privacy:"",terms:"",skill_purchase_money:"Yes",personal_info:"info_yes",target_children:"target_yes",advertising:"advert_yes",testing_instructions:"",access_skill:"public",categories:"",selected:"",rejectedSmallIcon:[],rejectedLargeIcon:[],hasError:!1,popoverActive:!0,message:""},a.handleChange=function(e){return function(t){return a.setState(Object(b.a)({},e,t))}},a.handleRadioChange=function(e,t){"info_no"===t||"info_yes"===t?a.setState({personal_info:t}):"target_no"===t||"target_yes"===t?a.setState({target_children:t}):"advert_no"===t||"advert_yes"===t?a.setState({advertising:t}):"public"===t||"business"===t?a.setState({access_skill:t}):a.setState({skill_purchase_money:t})},a.handleCatChange=function(e){return a.setState({selected:e})},a.togglePopover=function(){a.setState(function(e){return{popoverActive:!e.popoverActive}})},a.validateForm=function(){return console.log(a.state),a.setState(Object(f.a)({},a.state,{errors:Object(f.a)({},a.state.error,{hasError:!a.state.small_icon[0]||!a.state.large_icon[0]||!a.state.selected||!a.state.public_name,small_icon:!a.state.small_icon[0]||void 0,large_icon:!a.state.large_icon[0]||void 0,category:!a.state.selected||void 0,public_name:!a.state.public_name||void 0})}),function(){return console.log(a.state)}),!a.state.small_icon[0]||!a.state.large_icon[0]||!a.state.selected||!a.state.public_name},a.handleSubmit=function(e){if(!a.validateForm()){var t=new FormData;t.append("small_icon",a.state.small_icon[0]),t.append("large_icon",a.state.large_icon[0]),t.append("public_name",a.state.public_name),t.append("one_sent_desc",a.state.one_sent_desc),t.append("detail_desc",a.state.detail_desc),t.append("whats_new",a.state.whats_new),t.append("category",a.state.selected),t.append("keywords",a.state.keywords),t.append("privacy",a.state.privacy),t.append("terms",a.state.terms),t.append("skill_purchase_money",a.state.skill_purchase_money),t.append("personal_info",a.state.personal_info),t.append("target_children",a.state.target_children),t.append("advertising",a.state.advertising),t.append("testing_instructions",a.state.testing_instructions),t.append("access_skill",a.state.access_skill),t.append("shop",a.props.shopName),fetch("files/information.php",{method:"POST",body:t}).then(function(e){return e.json()}).then(function(e){a.setState({message:e.message,active:!0}),window.location.href="/alex/"}).catch(function(e){a.setState({message:e})})}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("files/categoryList.php",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0}}).then(function(e){return e.json()}).then(function(t){e.setState({categories:t})}).catch(function(t){e.setState({message:t,categories:[]})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.public_name,n=t.one_sent_desc,o=t.detail_desc,r=t.whats_new,s=(t.categories,t.selected,t.keywords),c=t.privacy,i=t.terms,u=t.skill_purchase_money,d=t.personal_info,h=t.target_children,p=t.advertising,f=t.testing_instructions,b=t.access_skill,E=t.small_icon,v=t.rejectedSmallIcon,_=t.hasError,y=t.large_icon,S=t.rejectedLargeIcon,C=(l.a.createElement(m.c,{onClick:this.togglePopover},"Options"),!E.length&&l.a.createElement(m.g.FileUpload,null)),w=E.length>0&&l.a.createElement(m.t,{vertical:!0},E.map(function(e,t){return l.a.createElement(m.t,{alignment:"center",key:t},l.a.createElement("div",null,e.name," ",l.a.createElement(m.d,null,e.size," bytes")))})),j=!y.length&&l.a.createElement(m.g.FileUpload,null),x=y.length>0&&l.a.createElement(m.t,{vertical:!0},y.map(function(e,t){return l.a.createElement(m.t,{alignment:"center",key:t},l.a.createElement("div",null,e.name," ",l.a.createElement(m.d,null,e.size," bytes")))})),k=_&&l.a.createElement(m.b,{title:"The following images couldn\u2019t be uploaded:",status:"critical"},l.a.createElement(m.m,{type:"bullet"},v.map(function(e,t){return l.a.createElement(m.m.Item,{key:t},'"'.concat(e.name,'" is not supported. File type must be .mp3.'))}))),O=_&&l.a.createElement(m.b,{title:"The following images couldn\u2019t be uploaded:",status:"critical"},l.a.createElement(m.m,{type:"bullet"},S.map(function(e,t){return l.a.createElement(m.m.Item,{key:t},'"'.concat(e.name,'" is not supported. File type must be .mp3.'))})));return l.a.createElement(m.a,null,l.a.createElement(m.o,null,l.a.createElement(m.e,{sectioned:!0},l.a.createElement(m.j,null,"Information Required"),l.a.createElement("br",null),l.a.createElement(m.h,{action:"",method:"post",onSubmit:this.handleSubmit},l.a.createElement(m.i,null,!!this.state.errors&&!!this.state.errors.public_name&&l.a.createElement(m.l,{message:"Public Name is required"}),l.a.createElement(m.x,{value:a,placeholder:"Enter a name for your skill for the English (US) store",maxLength:50,max:50,label:"Public Name",onChange:this.handleChange("public_name")}),l.a.createElement(m.x,{value:n,maxLength:160,placeholder:"Enter a short description(160 character maximum) about your skill",label:"One Sentence Description",onChange:this.handleChange("one_sent_desc")}),l.a.createElement(m.x,{value:o,maxLength:4e3,label:"Detailed Description",placeholder:"Enter an emerging description of the skill's purpose, features and how it works",onChange:this.handleChange("detail_desc"),multiline:5}),l.a.createElement(m.x,{value:r,maxLength:2e3,label:"What's new?",onChange:this.handleChange("whats_new"),multiline:5}),l.a.createElement(m.t,{vertical:!0},k,!!this.state.errors&&!!this.state.errors.small_icon&&l.a.createElement(m.l,{message:"Small Skill icon is required"}),l.a.createElement(m.g,{accept:"image/*",type:"image",label:"Small Skill icon (108 * 108)",onDrop:function(t,a,n){e.setState({small_icon:[].concat(Object(g.a)(e.state.small_icon),Object(g.a)(a)),rejectedSmallIcon:n,hasError:n.length>0})}},w,C)),l.a.createElement(m.t,{vertical:!0},O,!!this.state.errors&&!!this.state.errors.large_icon&&l.a.createElement(m.l,{message:"Large Skill icon is required"}),l.a.createElement(m.g,{accept:"image/*",type:"image",label:"Large Skill icon (512 * 512)",onDrop:function(t,a,n){e.setState({large_icon:[].concat(Object(g.a)(e.state.large_icon),Object(g.a)(a)),rejectedLargeIcon:n,hasError:n.length>0})}},x,j)),!!this.state.errors&&!!this.state.errors.category&&l.a.createElement(m.l,{message:"Category is required"}),l.a.createElement(m.r,{label:"Category",placeholder:"Select",options:this.state.categories,onChange:this.handleCatChange,value:this.state.selected}),l.a.createElement(m.x,{value:s,maxLength:30,label:"Keywords",placeholder:"Enter search terms that you would use to describe your skill",onChange:this.handleChange("keywords")}),l.a.createElement(m.x,{value:c,label:"Privacy & Policy URL",placeholder:"Enter a link to the privacy policy that applies to this skill",onChange:this.handleChange("privacy")}),l.a.createElement(m.x,{value:i,label:"Terms of Use URL",placeholder:"Enter a link to the terms of use document for this skill",onChange:this.handleChange("terms")}),l.a.createElement(m.y,{variation:"strong"},"Does this skill allow users to make purchases or spend real money? *"),l.a.createElement(m.q,{label:"Yes",checked:"Yes"===u,id:"Yes",name:"skill_purchase_money",onChange:this.handleRadioChange}),l.a.createElement(m.q,{label:"No",id:"No",name:"skill_purchase_money",checked:"No"===u,onChange:this.handleRadioChange}),l.a.createElement(m.y,{variation:"strong"},"Does this Alexa skill collect users' personal information? *"),l.a.createElement(m.y,{variation:"subdued"},"For example: anything that can identify the user such as name, email, password, phone number, birth date, etc."),l.a.createElement(m.q,{label:"Yes",checked:"info_yes"===d,id:"info_yes",name:"personal_info",onChange:this.handleRadioChange}),l.a.createElement(m.q,{label:"No",id:"info_no",name:"personal_info",checked:"info_no"===d,onChange:this.handleRadioChange}),l.a.createElement(m.y,{variation:"strong"},"Is this skill directed to or does it target children under the age of 13? *"),l.a.createElement(m.y,{variation:"subdued"},"Please indicate if this skill is directed to children under the age of 13"," "),l.a.createElement(m.q,{label:"Yes",checked:"target_yes"===h,id:"target_yes",name:"target_children",onChange:this.handleRadioChange}),l.a.createElement(m.q,{label:"No",id:"target_no",name:"target_children",checked:"target_no"===h,onChange:this.handleRadioChange}),l.a.createElement(m.y,{variation:"strong"},"Does this skill contain advertising? *"),l.a.createElement(m.q,{label:"Yes",checked:"advert_yes"===p,id:"advert_yes",name:"advertising",onChange:this.handleRadioChange}),l.a.createElement(m.q,{label:"No",id:"advert_no",name:"advertising",checked:"advert_no"===p,onChange:this.handleRadioChange}),l.a.createElement(m.x,{value:f,maxLength:2e3,label:"Testing Instructions",onChange:this.handleChange("testing_instructions"),multiline:5}),l.a.createElement(m.y,{variation:"strong"},"Who should have access to this skill? *"),l.a.createElement(m.q,{label:"Public",checked:"public"===b,id:"public",name:"access_skill",onChange:this.handleRadioChange}),l.a.createElement(m.q,{label:"Alexa for Business Organizations",id:"business",name:"access_skill",checked:"business"===b,onChange:this.handleRadioChange}),l.a.createElement(m.c,{id:"BtnTextStyle",submit:!0},"Save & Continue"))))))}}]),t}(n.Component),y=a(48),S=a(66),C=a(67),w=a.n(C),j=a(68),x=a.n(j),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).defaultState={timer:900,showBanner:!1,countDownTime:"00:00",featured_discount:"",product_collection:"",general_announcement:"",count:0,active:!1,text:"Collecting Information",progress:0,files:[],blob:"",rejectedFiles:[],hasError:!1,selectedTab:0,url:""},a.handleChange=function(e){return function(t){return a.setState(Object(b.a)({},e,t))}},a.handleModalChange=function(){a.setState(function(e){return{active:!e.active}})},a.pad=function(e,t){for(var a=e+"";a.length<t;)a="0"+a;return a},a.handleSubmit=function(e){var t=new FormData;v.a.isEmptyObject(a.state.files)&&!v.a.isEmptyObject(a.state.blob)?t.append("file",a.state.blob):!v.a.isEmptyObject(a.state.files)&&v.a.isEmptyObject(a.state.blob)&&t.append("file",a.state.files[0]),t.append("featured_discount",a.state.featured_discount),t.append("product_collection",a.state.product_collection),t.append("general_announcement",a.state.general_announcement),t.append("shop",a.props.shopName),fetch("files/data.php",{method:"POST",body:t}).then(function(e){return e.json()}).then(function(e){a.setState({message:e.message,active:!0,showBanner:!0}),a.startCountdown()}).catch(function(e){a.setState({message:e})})},a.startCountdown=function(){a.timer=setInterval(function(){a.state.timer-1<1&&a.closeBanner(),a.setState(Object(f.a)({},a.state,{timer:a.state.timer-1,countDownTime:a.countDown(a.state.timer-1)}))},1e3)},a.countDown=function(e){var t=Math.floor(e/60),n=e-60*t;return a.pad(t,2)+":"+a.pad(n,2)},a.closeBanner=function(){clearInterval(a.timer),a.setState({showBanner:!1})},a.componentDidMount=function(){},a._onRecordingComplete=function(e){x()(e,function(t,n){t?console.error(t):(a.setState({blob:e,files:[]}),a.state.url&&window.URL.revokeObjectURL(a.state.url),a.setState({url:window.URL.createObjectURL(e)}))})},a._onRecordingError=function(e){console.log("error recording",e.message),!!window.chrome&&(console.log("Open external"),window.open("/alex/external/record","_blank")),console.log(e.code,typeof e,e.name),a.state.url&&window.URL.revokeObjectURL(a.state.url),a.setState({url:null}),console.log(e+" == DOMException")},a.handleTabChange=a.handleTabChange.bind(Object(y.a)(Object(y.a)(a))),a.state=a.defaultState,console.log(a.props.shopName),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleTabChange",value:function(e){this.setState({selectedTab:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.featured_discount,n=t.product_collection,o=t.general_announcement,r=(t.count,t.active),s=t.showBanner,c=(t.progress,t.text,t.files),i=t.hasError,u=t.rejectedFiles,d=t.selectedTab,h=t.url,p=!c.length&&l.a.createElement(m.g.FileUpload,null),f=c.length>0&&l.a.createElement(m.t,{vertical:!0},c.map(function(e,t){return l.a.createElement(m.t,{alignment:"center",key:t},l.a.createElement("div",null,e.name," ",l.a.createElement(m.d,null,e.size," bytes")))})),b=i&&l.a.createElement(m.b,{title:"The following images couldn\u2019t be uploaded:",status:"critical"},l.a.createElement(m.m,{type:"bullet"},u.map(function(e,t){return l.a.createElement(m.m.Item,{key:t},'"'.concat(e.name,'" is not supported. File type must be .mp3.'))}))),E=[l.a.createElement(m.v.Panel,{id:"panel1"},l.a.createElement(m.e,{sectioned:!0},l.a.createElement(m.h,{action:"",method:"post",onSubmit:this.handleSubmit},l.a.createElement(m.i,null,l.a.createElement(m.x,{value:a,label:"Featured Discount",onChange:this.handleChange("featured_discount")}),l.a.createElement(m.x,{value:n,label:"Product Collection",onChange:this.handleChange("product_collection")}),l.a.createElement(m.x,{value:o,label:"General Announcement",onChange:this.handleChange("general_announcement")}),l.a.createElement(m.c,{id:"BtnTextStyle",submit:!0},"Save"))))),l.a.createElement(m.v.Panel,{id:"panel2"},l.a.createElement(m.e,{sectioned:!0},l.a.createElement(m.h,{action:"",method:"post",onSubmit:this.handleSubmit},l.a.createElement(m.i,null,l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(S.a,{onRecordingComplete:this._onRecordingComplete,onRecordingError:this._onRecordingError,style:{margin:"0 auto"}}),l.a.createElement("p",null,"Click and hold to start recording mp3."),h&&l.a.createElement("div",null,l.a.createElement(w.a,{src:h,controls:!0,style:{minWidth:"500px"}})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("strong",null,"OR"),l.a.createElement("br",null),l.a.createElement("br",null)))),l.a.createElement(m.t,{vertical:!0},b,l.a.createElement(m.g,{accept:"audio/mp3",type:"file",onDrop:function(t,a,n){e.setState({files:[].concat(Object(g.a)(e.state.files),Object(g.a)(a)),rejectedFiles:n,hasError:n.length>0,blob:""})}},f,p)),l.a.createElement("p",null,l.a.createElement("strong",null,"Note :")," Please see the"," ",l.a.createElement("a",{rel:"noopener noreferrer",href:"https://developer.amazon.com/docs/flashbriefing/flash-briefing-skill-api-feed-reference.html#cert-audio-content",target:"_blank"},"link")," ","and go through the guide before uploading audio content in alexa skill"," "),l.a.createElement(m.c,{id:"BtnAudioStyle",submit:!0},"Save")))))];return 0===this.state.count&&(fetch("files/show.php?shop="+this.props.shopName,{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0}}).then(function(e){return e.json()}).then(function(t){""==t.id?window.location.href="intro":(e.setState({featured_discount:t.featured_discount,product_collection:t.product_collection,general_announcement:t.general_announcement,progress:t.precentage,text:t.textProgress}),e.state.progress<=40?v()(".Polaris-ProgressBar__Indicator").addClass("red"):e.state.progress<=70?v()(".Polaris-ProgressBar__Indicator").addClass("orange"):v()(".Polaris-ProgressBar__Indicator").addClass("green"))}).catch(function(t){e.setState({message:t})}),this.setState({count:1})),l.a.createElement(m.a,null,this.state.progress&&this.state.progress>0?l.a.createElement(m.o,null,l.a.createElement(m.n,{open:r,size:"Medium",onClose:this.handleModalChange,title:"Alexa Submission ",primaryAction:{content:"OK",onAction:this.handleModalChange}},l.a.createElement(m.n.Section,null,l.a.createElement(m.w,null,l.a.createElement(m.k,{source:"save",color:"green"}),l.a.createElement("p",{className:"Savetext"},"Your Alexa Briefing is successfully saved."," ")))),l.a.createElement(m.e,{sectioned:!0},l.a.createElement(m.j,{h1:!0},"App Submission Progress"),l.a.createElement(m.u,null,this.state.text," - ",this.state.progress,"% Completed"),l.a.createElement(m.p,{progress:this.state.progress,size:"large"})),s&&l.a.createElement(m.b,{title:"Feed Published",onDismiss:this.closeBanner},l.a.createElement("p",null,"Feed will be available on alexa in ",this.state.countDownTime," ","mins")),l.a.createElement(m.v,{selected:d,tabs:[{id:"tab1",content:"Text",panelID:"panel2"},{id:"tab2",content:"Audio",panelID:"panel2"}],onSelect:this.handleTabChange}),E[d]):l.a.createElement("div",{style:{textAlign:"center",marginTop:"100px"}},l.a.createElement(m.o,null,l.a.createElement(m.s,{size:"large",color:"teal"}))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).defaultState={username:"",password:""},a.handleChange=function(e){return function(t){return a.setState(Object(b.a)({},e,t))}},a.handleSubmit=function(e){fetch("https://briefify.coldsmoke.co/alex/files/auth.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0},body:JSON.stringify({username:a.state.username,password:a.state.password})}).then(function(e){return e.json()}).then(function(e){console.log(e),"1"==e.status&&(localStorage.setItem("login",e.status),window.location.href="dashboard")}).catch(function(e){a.setState({message:e})})},a.componentDidMount=function(){},a.state=a.defaultState,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){"1"===localStorage.getItem("login")&&(window.location.href="dashboard");var e=this.state,t=e.username,a=e.password;return l.a.createElement(m.a,null,l.a.createElement(m.o,null,l.a.createElement(m.e,{sectioned:!0},l.a.createElement(m.j,null,"Login Form"),l.a.createElement("br",null),l.a.createElement(m.h,{action:"",method:"post",onSubmit:this.handleSubmit},l.a.createElement(m.i,null,l.a.createElement(m.x,{value:t,label:"Username",onChange:this.handleChange("username")}),l.a.createElement(m.x,{value:a,label:"Password",type:"password",onChange:this.handleChange("password")}),l.a.createElement(m.c,{id:"BtnTextStyle",submit:!0},"Login"))))))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={selectedStatus:"",selectedStore:"",message:"",active:!1,count:0,options:"",activeModal:!1},a.handleModalChange=function(){a.setState(function(e){return{activeModal:!e.activeModal}})},a.handleStatusChange=function(e){a.setState({selectedStatus:e})},a.handleSubmit=function(e){fetch("https://briefify.coldsmoke.co/alex/files/submit_progress.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0},body:JSON.stringify({selectedStore:a.state.selectedStore,selectedStatus:a.state.selectedStatus})}).then(function(e){return e.json()}).then(function(e){a.setState({message:e.message,activeModal:!0})}).catch(function(e){a.setState({message:e})})},a.handleChange=function(e){a.setState({selectedStore:e}),fetch("https://briefify.coldsmoke.co/alex/files/getProgress.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0},body:JSON.stringify({store:e})}).then(function(e){return e.json()}).then(function(e){e.collect_information?a.setState({selectedStatus:"collect-information"}):e.submit_approval?a.setState({selectedStatus:"submit-approval"}):e.approved?a.setState({selectedStatus:"approved"}):a.setState({selectedStatus:""}),a.setState({active:!0})}).catch(function(e){a.setState({selectedStatus:"",active:!1})})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.active,n=(t.count,t.options),o=t.activeModal,r=localStorage.getItem("login");console.log(r),null===r&&(window.location.href="/alex/admin"),0===this.state.count&&(fetch("https://briefify.coldsmoke.co/alex/files/fetch_shops.php",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0}}).then(function(e){return e.json()}).then(function(t){e.setState({options:t})}).catch(function(t){e.setState({message:t,options:""})}),this.setState({count:1}));return l.a.createElement(m.a,null,l.a.createElement(m.o,null,l.a.createElement(m.e,{sectioned:!0},l.a.createElement(m.j,null,"Dashboard"),l.a.createElement("br",null),l.a.createElement(m.h,{action:"",method:"post",onSubmit:this.handleSubmit},l.a.createElement(m.i,null,l.a.createElement(m.r,{label:"Select Store",options:n,onChange:this.handleChange,value:this.state.selectedStore}),!0===a&&l.a.createElement(m.r,{label:"Select Status",options:[{label:"--Selected--",value:""},{label:"Collect Information",value:"collect-information"},{label:"Approval Submission",value:"submit-approval"},{label:"Approved & Publised",value:"approved"}],onChange:this.handleStatusChange,value:this.state.selectedStatus}),!0===a&&l.a.createElement(m.c,{id:"BtnStyle",submit:!0},"Save"))),l.a.createElement(m.n,{open:o,onClose:this.handleModalChange,title:"App Status",primaryAction:{content:"OK",onAction:this.handleModalChange}},l.a.createElement(m.n.Section,null,l.a.createElement(m.w,null,l.a.createElement(m.k,{source:"save",color:"green"}),l.a.createElement("p",{className:"Savetext"},"Successfully saved entry.")))))))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={url:""},a._onRecordingComplete=function(e){x()(e,function(t,n){if(t)console.error(t);else{console.log("recording",e);var l=new FormData;l.append("data",e),fetch("data.php",{method:"POST",body:l}).then(function(e){return e.blob()}),a.state.url&&window.URL.revokeObjectURL(a.state.url),a.setState({url:window.URL.createObjectURL(e)})}})},a._onRecordingError=function(e){console.log("error recording",e),a.state.url&&window.URL.revokeObjectURL(a.state.url),a.setState({url:null})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.url;return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement(S.a,{onRecordingComplete:this._onRecordingComplete,onRecordingError:this._onRecordingError,style:{margin:"0 auto"}}),l.a.createElement("p",null,"Click and hold to start recording mp3."),e&&l.a.createElement("div",null,l.a.createElement(w.a,{src:e,controls:!0,style:{minWidth:"500px"}})))))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).defaultState={featured_discount:"",product_collection:"",general_announcement:"",count:0,active:!1,text:"Collecting Information",progress:0,files:[],blob:"",rejectedFiles:[],hasError:!1,selectedTab:0,url:""},a.handleChange=function(e){return function(t){return a.setState(Object(b.a)({},e,t))}},a.handleModalChange=function(){a.setState(function(e){return{active:!e.active}})},a.handleSubmit=function(e){console.log(a.state);var t=new FormData;v.a.isEmptyObject(a.state.files)&&!v.a.isEmptyObject(a.state.blob)?t.append("file",a.state.blob):!v.a.isEmptyObject(a.state.files)&&v.a.isEmptyObject(a.state.blob)&&t.append("file",a.state.files[0]),t.append("featured_discount",a.state.featured_discount),t.append("product_collection",a.state.product_collection),t.append("general_announcement",a.state.general_announcement),t.append("shop",a.props.shopName),fetch("/alex/files/data.php",{method:"POST",body:t}).then(function(e){return e.json()}).then(function(e){a.setState({message:e.message,active:!0}),window.close()}).catch(function(e){a.setState({message:e})})},a.componentDidMount=function(){fetch("/alex/files/show.php?shop="+a.props.shopName,{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0}}).then(function(e){return e.json()}).then(function(e){""==e.id?window.location.href="intro":(a.setState({featured_discount:e.featured_discount,product_collection:e.product_collection,general_announcement:e.general_announcement,progress:e.precentage,text:e.textProgress}),a.state.progress<=40?v()(".Polaris-ProgressBar__Indicator").addClass("red"):a.state.progress<=70?v()(".Polaris-ProgressBar__Indicator").addClass("orange"):v()(".Polaris-ProgressBar__Indicator").addClass("green"))}).catch(function(e){a.setState({message:e})})},a._onRecordingComplete=function(e){x()(e,function(t,n){t?console.error(t):(a.setState({blob:e,files:[]}),a.state.url&&window.URL.revokeObjectURL(a.state.url),a.setState({url:window.URL.createObjectURL(e)}))})},a._onRecordingError=function(e){console.log("error recording",e),a.state.url&&window.URL.revokeObjectURL(a.state.url),a.setState({url:null})},a.handleTabChange=a.handleTabChange.bind(Object(y.a)(Object(y.a)(a))),a.state=a.defaultState,console.log(a.props.shopName),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleTabChange",value:function(e){this.setState({selectedTab:e})}},{key:"render",value:function(){var e=this,t=this.state,a=(t.featured_discount,t.product_collection,t.general_announcement,t.count,t.active),n=(t.progress,t.text,t.files),o=t.hasError,r=t.rejectedFiles,s=(t.selectedTab,t.url);!n.length&&l.a.createElement(m.g.FileUpload,null),n.length>0&&l.a.createElement(m.t,{vertical:!0},n.map(function(e,t){return l.a.createElement(m.t,{alignment:"center",key:t},l.a.createElement("div",null,e.name," ",l.a.createElement(m.d,null,e.size," bytes")))})),o&&l.a.createElement(m.b,{title:"The following images couldn\u2019t be uploaded:",status:"critical"},l.a.createElement(m.m,{type:"bullet"},r.map(function(e,t){return l.a.createElement(m.m.Item,{key:t},'"'.concat(e.name,'" is not supported. File type must be .mp3.'))})));return 0===this.state.count&&(fetch("files/show.php?shop="+this.props.shopName,{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0}}).then(function(e){return e.json()}).then(function(t){""==t.id?window.location.href="intro":(e.setState({featured_discount:t.featured_discount,product_collection:t.product_collection,general_announcement:t.general_announcement,progress:t.precentage,text:t.textProgress}),e.state.progress<=40?v()(".Polaris-ProgressBar__Indicator").addClass("red"):e.state.progress<=70?v()(".Polaris-ProgressBar__Indicator").addClass("orange"):v()(".Polaris-ProgressBar__Indicator").addClass("green"))}).catch(function(t){e.setState({message:t})}),this.setState({count:1})),l.a.createElement(m.a,null,l.a.createElement(m.o,null,l.a.createElement(m.n,{open:a,size:"Medium",onClose:this.handleModalChange,title:"Alexa Submission ",primaryAction:{content:"OK",onAction:this.handleModalChange}},l.a.createElement(m.n.Section,null,l.a.createElement(m.w,null,l.a.createElement(m.k,{source:"save",color:"green"}),l.a.createElement("p",{className:"Savetext"},"Your Alexa Briefing is successfully saved."," ")))),l.a.createElement(m.e,{sectioned:!0},l.a.createElement(m.h,{action:"",method:"post",onSubmit:this.handleSubmit},l.a.createElement(m.i,null,l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(S.a,{onRecordingComplete:this._onRecordingComplete,onRecordingError:this._onRecordingError,style:{margin:"0 auto"}}),l.a.createElement("p",null,"Click and hold to start recording mp3."),s&&l.a.createElement("div",null,l.a.createElement(w.a,{src:s,controls:!0,style:{minWidth:"500px"}})),l.a.createElement("br",null),l.a.createElement("br",null)))),l.a.createElement("p",null,l.a.createElement("strong",null,"Note :")," Please see the"," ",l.a.createElement("a",{rel:"noopener noreferrer",href:"https://developer.amazon.com/docs/flashbriefing/flash-briefing-skill-api-feed-reference.html#cert-audio-content",target:"_blank"},"link")," ","and go through the guide before uploading audio content in alexa skill"," "),l.a.createElement(m.c,{id:"BtnAudioStyle",submit:!0}," ","Save and Close"," "))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(527),A=a(528);v()(window).on("load",function(){v()("iframe").attr("allow","microphone")});var L=window.location.href,N=new URL(L);if(N.searchParams.get("shop"))var D=N.searchParams.get("shop");else D="";D&&localStorage.setItem("shopName",D),localStorage.getItem("shopName")&&(D=localStorage.getItem("shopName")),r.a.render(l.a.createElement(I.a,null,l.a.createElement("div",null,l.a.createElement(A.a,{exact:!0,path:"/alex/external/record",render:function(e){return l.a.createElement(T,Object.assign({shopName:D},e))}}),l.a.createElement(A.a,{exact:!0,path:"/alex/demo",component:R}),l.a.createElement(A.a,{exact:!0,path:"/alex/",render:function(e){return l.a.createElement(k,Object.assign({shopName:D},e))}}),l.a.createElement(A.a,{exact:!0,path:"/alex/iframe",component:p}),l.a.createElement(A.a,{exact:!0,path:"/alex/intro",render:function(e){return l.a.createElement(h,Object.assign({shopName:D},e))}}),l.a.createElement(A.a,{exact:!0,path:"/alex/collect-info",render:function(e){return l.a.createElement(_,Object.assign({shopName:D},e))}}),l.a.createElement(A.a,{exact:!0,path:"/alex/app",render:function(e){return l.a.createElement(k,Object.assign({shopName:D},e))}}),l.a.createElement(A.a,{exact:!0,path:"/alex/admin",component:O}),l.a.createElement(A.a,{exact:!0,path:"/alex/admin/dashboard",component:P}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[236,2,1]]]);
//# sourceMappingURL=main.6b6b6526.chunk.js.map