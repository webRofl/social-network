"use strict";(self.webpackChunkfirst_project=self.webpackChunkfirst_project||[]).push([[453],{9453:function(e,o,t){t.r(o),t.d(o,{default:function(){return z}});var r=t(1413),i=t(5671),s=t(3144),n=t(136),a=t(3668),l=t(2791),c=t(364),u=t(6508),p={},d={body:"Post_body__24xsd",wrapper:"Post_wrapper__RHGcN",header:"Post_header__TiwhZ",logo:"Post_logo__GC1JY",description:"Post_description__tx7U5",media:"Post_media__ynmhW",socialActivity:"Post_socialActivity__mEt+B"},f=t(184),m=function(e){return(0,f.jsx)("div",{className:"body",children:(0,f.jsxs)("div",{className:d.wrapper,children:[(0,f.jsxs)("div",{className:d.header,children:[(0,f.jsx)("div",{className:d.logo,children:(0,f.jsx)("img",{src:"https://i.pinimg.com/originals/65/41/1a/65411a51ae58ed21711131ac3918846b.jpg",alt:"author logo"})}),(0,f.jsxs)("div",{className:d.postInfo,children:[(0,f.jsx)("div",{className:d.author,children:(0,f.jsx)("span",{children:(0,f.jsx)("a",{href:"#",children:e.name})})}),(0,f.jsx)("div",{className:d.time,children:(0,f.jsx)("span",{children:"October 30 at 8:20 AM"})})]})]}),(0,f.jsxs)("div",{className:d.description,children:[(0,f.jsx)("p",{children:"Keep, pedaling."}),(0,f.jsx)("a",{href:"https://instagram.com",children:"instagram.com/jjhead"})]}),(0,f.jsx)("div",{className:d.media,children:(0,f.jsx)("img",{src:"https://gt-news.ru/wp-content/uploads/2021/03/2.jpg",alt:"media content"})}),(0,f.jsxs)("div",{className:d.socialActivity,children:[(0,f.jsxs)("div",{className:"like",children:[(0,f.jsx)("button",{children:"Like"}),(0,f.jsx)("p",{className:d.likesCount,children:e.likesCount})]}),(0,f.jsxs)("div",{className:d.comment,children:[(0,f.jsx)("button",{children:"Comment"}),(0,f.jsx)("p",{className:d.commentCount,children:"34"})]}),(0,f.jsxs)("div",{className:d.share,children:[(0,f.jsx)("button",{children:"Share"}),(0,f.jsx)("p",{className:d.shareCount,children:"56"})]})]})]})})},_=t(5705),h="MyPostForm_myPostForm__nzTdP",b="MyPostForm_myPostForm__text__vtJ0S",g="MyPostForm_myPostForm__btn__5zCaV",x=function(e){return(0,f.jsx)(_.J9,{initialValues:{postName:""},onSubmit:function(o,t){e.addPost(o.postName.trim()),t.resetForm({postName:""})},children:function(){return(0,f.jsxs)(_.l0,{className:h,children:[(0,f.jsx)(_.gN,{name:"postName",placeholder:"Enter new post name",type:"text",className:b}),(0,f.jsx)("button",{type:"submit",className:g,children:"Add Post"})]})}})},j=function(e){var o=e.myPostsState.posts.map((function(e,o){return(0,f.jsx)(m,{name:e.name,likesCount:e.likesCount},o)}));return(0,f.jsxs)("div",{children:[(0,f.jsx)(x,{addPost:e.addPost}),o]})},k=(0,c.$j)((function(e){return{myPostsState:e.profilePage}}),{addPost:u.q2})(j),N={appWrapper__profileLogo:"ProfileInfo_appWrapper__profileLogo__JH++F",profileLogo__logo:"ProfileInfo_profileLogo__logo__N-WNu",profileLogo__logoBlock:"ProfileInfo_profileLogo__logoBlock__XAINo",profileLogo__inputBlock:"ProfileInfo_profileLogo__inputBlock__+URhr",profileLogo__uploadFileInput:"ProfileInfo_profileLogo__uploadFileInput__oUhr8"},F=t(3154),P=t(3193),v=t(885),y="StatusComponent_wrapper__profileStatusBlock__Ro+Pq",M="StatusComponent_wrapper__profileStatusTip__JPUMb",S="StatusComponent_wrapper__profileStatus__aTKCO",A="StatusComponent_wrapper__profileStatusInput__xz6tg",w=function(e){var o=(0,l.useState)(!1),t=(0,v.Z)(o,2),r=t[0],i=t[1],s=(0,l.useState)(e.status),n=(0,v.Z)(s,2),a=n[0],c=n[1];return(0,l.useEffect)((function(){c(e.status)}),[e.status]),(0,f.jsxs)("div",{className:y,children:[(0,f.jsx)("span",{className:M,children:"Status: "}),r?(0,f.jsx)("input",{type:"text",value:a,onBlur:function(){i(!1),e.setStatus(a)},autoFocus:!0,onChange:function(e){return function(e){c(e)}(e.currentTarget.value)},className:"".concat(A," ").concat(S)}):(0,f.jsx)("span",{onDoubleClick:function(){i(!0)},className:S,children:a||"click for create your first status"})]})},J="ProfileData_wrapper__profileDataBlock__3f1HH",L="ProfileData_wrapper__profileDataEditBtn__t2aZ1",C=function(e){var o=function(e,o){return e?(0,f.jsxs)("li",{children:[(0,f.jsxs)("b",{children:[o," : "]}),(0,f.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:e})]}):null};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("ul",{className:J,children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("b",{children:"Name : "})," ",e.fullName]}),e.aboutMe?(0,f.jsxs)("li",{children:[(0,f.jsx)("b",{children:"About Me : "})," ",e.aboutMe]}):null,e.lookingForAJob?(0,f.jsx)("li",{children:(0,f.jsx)("b",{children:"Looking For A Job"})}):(0,f.jsx)("li",{children:(0,f.jsx)("b",{children:"Not Looking For A Job"})}),e.lookingForAJobDescription&&e.lookingForAJob?(0,f.jsxs)("li",{children:[(0,f.jsx)("b",{children:"Job Description : "})," ",e.lookingForAJobDescription]}):null,o(e.contacts.facebook,"Facebook"),o(e.contacts.github,"GitHub"),o(e.contacts.instagram,"Instagram"),o(e.contacts.mainLink,"My Link"),o(e.contacts.twitter,"Twitter"),o(e.contacts.vk,"Vk"),o(e.contacts.website,"Personal Website"),o(e.contacts.youtube,"Youtube"),e.isOwner()&&!e.editMode?(0,f.jsx)("input",{type:"button",value:"Edit profile",onClick:e.editModeHandler,className:L}):null]})})},D=t(5861),I=t(7757),Z=t.n(I),B="ProfileDataForm_editProfile__modalForm__Hw2PM",E="ProfileDataForm_editProfile__submitBtn__aF8Sf",U="ProfileDataForm_editProfile__checkboxBlock__FuKHg",H="ProfileDataForm_editProfile__checkbox__CLesM",T="ProfileDataForm_editProfile__btn__mOTGY",W=function(e){var o=function e(o){var t=o.trim(),r=t.search(/( |_)/);return-1===r?t:e(t.slice(0,r)+t[r+1].toUpperCase()+t.slice(r+2))},t=function(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("label",{children:e}),(0,f.jsx)(_.gN,{name:e[0].toLowerCase()+o(e.slice(1)),placeholder:e,type:"text"})]})},r=function(){var o=(0,D.Z)(Z().mark((function o(t){var r,i;return Z().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r={fullName:t.fullName,aboutMe:t.aboutMe,lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription},i={facebook:t.facebook,webSite:t.webSite,vk:t.vk,twitter:t.twitter,instagram:t.instagram,youtube:t.youtube,github:t.github,mainLink:t.mainLink},o.next=4,e.updateProfile(r,i);case 4:0===o.sent&&e.setEditMode(!1);case 6:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}(),i=(0,l.useState)(!1),s=(0,v.Z)(i,2),n=s[0],a=s[1],c=function(){a(!n)};return(0,f.jsx)(_.J9,{initialValues:{fullName:e.fullName||"",aboutMe:e.aboutMe||"",lookingForAJob:e.lookingForAJob||!1,lookingForAJobDescription:e.lookingForAJobDescription||"",facebook:e.contacts.facebook||"",webSite:e.contacts.webSite||"",vk:e.contacts.vk||"",twitter:e.contacts.twitter||"",instagram:e.contacts.instagram||"",youtube:e.contacts.youtube||"",github:e.contacts.github||"",mainLink:e.contacts.mainLink||""},onSubmit:r,children:function(o){return(0,f.jsxs)(_.l0,{className:B,children:[t("Full name"),t("About me"),(0,f.jsxs)("div",{className:U,children:[(0,f.jsx)("label",{children:"Looking for a job?"}),(0,f.jsx)(_.gN,{type:"checkbox",name:"lookingForAJob",className:H})]}),(0,f.jsx)("label",{children:"Skills"}),(0,f.jsx)(_.gN,{type:"text",name:"lookingForAJobDescription",placeholder:"Skills",disabled:!o.values.lookingForAJob}),(0,f.jsx)("input",{type:"button",value:"Show contacts",onClick:c,className:T}),n?(0,f.jsxs)(f.Fragment,{children:[t("Facebook"),t("WebSite"),t("Vk"),t("Twitter"),t("Instagram"),t("Youtube"),t("Github"),t("MainLink")]}):null,e.errorForm?(0,f.jsx)("span",{children:e.errorForm}):null,(0,f.jsx)("button",{type:"submit",className:"".concat(T," ").concat(E),children:"Submit"})]})}})},G=function(e){if(!e.profile)return(0,f.jsx)(F.Z,{});var o=function(){return e.id===parseInt(e.url.params.userId)};return(0,f.jsxs)("div",{className:N.appWrapper__profileLogo,children:[(0,f.jsxs)("div",{className:N.profileLogo__logoBlock,children:[(0,f.jsx)("img",{className:N.profileLogo__logo,src:e.profile.photos.large?e.profile.photos.large:P,alt:"big avatar"}),o()?(0,f.jsxs)("div",{className:N.profileLogo__inputBlock,children:[(0,f.jsx)("span",{className:N.profileLogo__uploadFileBtn,children:"Upload photo"}),(0,f.jsx)("input",{type:"file",onChange:function(o){o.target.files.length&&e.updatePhoto(o.target.files[0])},className:N.profileLogo__uploadFileInput})]}):null]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(w,{status:e.status,setStatus:e.setStatus}),e.editMode?(0,f.jsx)(W,{setEditMode:e.setEditMode,updateProfile:e.updateProfile,errorForm:e.errorForm,contacts:e.profile.contacts,fullName:e.profile.fullName,lookingForAJob:e.profile.lookingForAJob,lookingForAJobDescription:e.profile.lookingForAJobDescription,aboutMe:e.profile.aboutMe}):(0,f.jsx)(C,{aboutMe:e.profile.aboutMe,contacts:e.profile.contacts,fullName:e.profile.fullName,lookingForAJob:e.profile.lookingForAJob,lookingForAJobDescription:e.profile.lookingForAJobDescription,isOwner:o,editModeHandler:function(){e.setEditMode(!0)},editMode:e.editMode})]})]})},O=function(e){return(0,f.jsxs)("div",{className:p.wrapper,children:[(0,f.jsx)(G,(0,r.Z)({},e)),(0,f.jsx)(k,{})]})},V=t(7343),R=t(6871),Y=t(7781),q=function(e){(0,n.Z)(t,e);var o=(0,a.Z)(t);function t(){return(0,i.Z)(this,t),o.apply(this,arguments)}return(0,s.Z)(t,[{key:"refreshProfile",value:function(){this.props.getMyProfile(this.props.url.params.userId),this.props.getStatus(this.props.url.params.userId)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){var o;parseInt(this.props.url.params.userId)!==(null===(o=e.profile)||void 0===o?void 0:o.userId)&&this.refreshProfile()}},{key:"render",value:function(){return(0,f.jsx)(O,(0,r.Z)({},this.props))}}]),t}(l.Component),z=(0,Y.qC)((0,c.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,id:e.auth.userId,editMode:e.profilePage.editMode,errorForm:e.profilePage.errorForm}}),{getMyProfile:u.US,getStatus:u.lR,setUserStatus:u.ij,setStatus:u.Tf,updatePhoto:u.tU,updateProfile:u.ck,setEditMode:u.Mb}),V.D,(function(e){return function(o){var t=(0,R.bS)("/profile/:userId");return(0,f.jsx)(e,(0,r.Z)((0,r.Z)({},o),{},{url:t}))}}))(q)},7343:function(e,o,t){t.d(o,{D:function(){return a}});var r=t(1413),i=(t(2791),t(6871)),s=t(364),n=t(184),a=function(e){return(0,s.$j)((function(e){return{isAuth:e.auth.isAuth}}),null)((function(o){return o.isAuth?(0,n.jsx)(e,(0,r.Z)({},o)):(0,n.jsx)(i.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=453.1c0aa2d2.chunk.js.map