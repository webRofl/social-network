"use strict";(self.webpackChunkfirst_project=self.webpackChunkfirst_project||[]).push([[493],{4493:function(t,e,s){s.r(e),s.d(e,{default:function(){return D}});var r=s(1413),i=s(5671),o=s(3144),n=s(136),a=s(3668),l=s(2791),c=s(364),u=s(6508),d={},p="MyPosts_posts__GSiZ2",h="MyPosts_addPost__vrj7C",f={body:"Post_body__24xsd",wrapper:"Post_wrapper__RHGcN",header:"Post_header__TiwhZ",logo:"Post_logo__GC1JY",description:"Post_description__tx7U5",media:"Post_media__ynmhW",socialActivity:"Post_socialActivity__mEt+B"},m=s(184),j=function(t){return(0,m.jsx)("div",{className:"body",children:(0,m.jsxs)("div",{className:f.wrapper,children:[(0,m.jsxs)("div",{className:f.header,children:[(0,m.jsx)("div",{className:f.logo,children:(0,m.jsx)("img",{src:"https://i.pinimg.com/originals/65/41/1a/65411a51ae58ed21711131ac3918846b.jpg",alt:"author logo"})}),(0,m.jsxs)("div",{className:f.postInfo,children:[(0,m.jsx)("div",{className:f.author,children:(0,m.jsx)("span",{children:(0,m.jsx)("a",{href:"#",children:t.name})})}),(0,m.jsx)("div",{className:f.time,children:(0,m.jsx)("span",{children:"October 30 at 8:20 AM"})})]})]}),(0,m.jsxs)("div",{className:f.description,children:[(0,m.jsx)("p",{children:"Keep, pedaling."}),(0,m.jsx)("a",{href:"https://instagram.com",children:"instagram.com/jjhead"})]}),(0,m.jsx)("div",{className:f.media,children:(0,m.jsx)("img",{src:"https://gt-news.ru/wp-content/uploads/2021/03/2.jpg",alt:"media content"})}),(0,m.jsxs)("div",{className:f.socialActivity,children:[(0,m.jsxs)("div",{className:"like",children:[(0,m.jsx)("button",{children:"Like"}),(0,m.jsx)("p",{className:f.likesCount,children:t.likesCount})]}),(0,m.jsxs)("div",{className:f.comment,children:[(0,m.jsx)("button",{children:"Comment"}),(0,m.jsx)("p",{className:f.commentCount,children:"34"})]}),(0,m.jsxs)("div",{className:f.share,children:[(0,m.jsx)("button",{children:"Share"}),(0,m.jsx)("p",{className:f.shareCount,children:"56"})]})]})]})})},x=s(5705),g="MyPostForm_wrapper__KOzZs",v=function(t){return(0,m.jsx)(x.J9,{initialValues:{postName:""},onSubmit:function(e,s){t.addPost(e.postName.trim()),s.resetForm({postName:""})},children:function(){return(0,m.jsxs)(x.l0,{className:g,children:[(0,m.jsx)(x.gN,{name:"postName",placeholder:"Enter new post name",type:"text"}),(0,m.jsx)("button",{type:"submit",children:"Add Post"})]})}})},_=function(t){var e=t.myPostsState.posts.map((function(t,e){return(0,m.jsx)(j,{name:t.name,likesCount:t.likesCount},e)}));return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:h,children:(0,m.jsx)(v,{addPost:t.addPost})}),(0,m.jsx)("div",{className:p,children:e})]})},b=(0,c.$j)((function(t){return{myPostsState:t.profilePage}}),{addPost:u.q2})(_),N={logo:"ProfileInfo_logo__csfgK",wrapper:"ProfileInfo_wrapper__mO+zt"},k=s(3154),P=s(3193),y=s(885),w=function(t){var e=(0,l.useState)(!1),s=(0,y.Z)(e,2),r=s[0],i=s[1],o=(0,l.useState)(t.status),n=(0,y.Z)(o,2),a=n[0],c=n[1];return(0,l.useEffect)((function(){c(t.status)}),[t.status]),(0,m.jsx)("div",{children:r?(0,m.jsx)("div",{children:(0,m.jsx)("input",{type:"text",value:a,onBlur:function(){i(!1),t.setStatus(a)},autoFocus:!0,onChange:function(t){return function(t){c(t)}(t.currentTarget.value)}})}):(0,m.jsx)("div",{children:(0,m.jsx)("span",{onDoubleClick:function(){i(!0)},children:a||"click for create your first status"})})})},A="ProfileData_description__QBhvE",C=function(t){var e=function(t,e){return t?(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"http://www."+t,target:"_blank",rel:"noreferrer",children:e})}):null};return(0,m.jsx)("div",{className:A,children:(0,m.jsxs)("ul",{children:[(0,m.jsxs)("li",{children:["Name: ",t.fullName]}),t.aboutMe?(0,m.jsxs)("li",{children:["About Me: ",t.aboutMe]}):null,t.lookingForAJob?(0,m.jsx)("li",{children:"Looking For A Job"}):(0,m.jsx)("li",{children:"Not Looking For A Job"}),t.lookingForAJobDescription&&t.lookingForAJob?(0,m.jsxs)("li",{children:["Job Description: ",t.lookingForAJobDescription]}):null,e(t.contacts.facebook,"Facebook"),e(t.contacts.github,"GitHub"),e(t.contacts.instagram,"Instagram"),e(t.contacts.mainLink,"My Link"),e(t.contacts.twitter,"Twitter"),e(t.contacts.vk,"Vk"),e(t.contacts.website,"Personal Website"),e(t.contacts.youtube,"Youtube")]})})},S=function(t){if(!t.profile)return(0,m.jsx)(k.Z,{});return(0,m.jsxs)("div",{className:N.wrapper,children:[(0,m.jsxs)("div",{className:N.logoDiv,children:[(0,m.jsx)("img",{className:N.logo,src:t.profile.photos.large?t.profile.photos.large:P,alt:"big avatar"}),t.id===parseInt(t.url.params.userId)?(0,m.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.updatePhoto(e.target.files[0])}}):null]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(w,{status:t.status,setStatus:t.setStatus}),(0,m.jsx)(C,{aboutMe:t.profile.aboutMe,contacts:t.profile.contacts,fullName:t.profile.fullName,lookingForAJob:t.profile.lookingForAJob,lookingForAJobDescription:t.profile.lookingForAJobDescription})]})]})},F=function(t){return(0,m.jsxs)("div",{className:d.wrapper,children:[(0,m.jsx)(S,(0,r.Z)({},t)),(0,m.jsx)(b,{})]})},Z=s(7343),I=s(6871),J=s(7781),M=function(t){(0,n.Z)(s,t);var e=(0,a.Z)(s);function s(){return(0,i.Z)(this,s),e.apply(this,arguments)}return(0,o.Z)(s,[{key:"refreshProfile",value:function(){this.props.getMyProfile(this.props.url.params.userId),this.props.getStatus(this.props.url.params.userId)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){var e;parseInt(this.props.url.params.userId)!==(null===(e=t.profile)||void 0===e?void 0:e.userId)&&this.refreshProfile()}},{key:"render",value:function(){return(0,m.jsx)(F,(0,r.Z)({},this.props))}}]),s}(l.Component),D=(0,J.qC)((0,c.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,id:t.auth.userId}}),{getMyProfile:u.US,getStatus:u.lR,setUserStatus:u.ij,setStatus:u.Tf,updatePhoto:u.tU}),Z.D,(function(t){return function(e){var s=(0,I.bS)("/profile/:userId");return(0,m.jsx)(t,(0,r.Z)((0,r.Z)({},e),{},{url:s}))}}))(M)},7343:function(t,e,s){s.d(e,{D:function(){return a}});var r=s(1413),i=(s(2791),s(6871)),o=s(364),n=s(184),a=function(t){return(0,o.$j)((function(t){return{isAuth:t.auth.isAuth}}),null)((function(e){return e.isAuth?(0,n.jsx)(t,(0,r.Z)({},e)):(0,n.jsx)(i.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=493.1a97ff67.chunk.js.map