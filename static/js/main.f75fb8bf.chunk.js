(this["webpackJsonpmesto-react-app"]=this["webpackJsonpmesto-react-app"]||[]).push([[0],{20:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(22),o=n.n(c),i=n(8),r=(n(20),n(25)),l=n(3),u=n(2),d=s.a.createContext(),m=n(0);var p=function(e){var t=s.a.useContext(d),n=e.owner._id===t._id,a="element__delete ".concat(n?"element__delete_show":""),c=e.likes.some((function(e){return e._id===t._id})),o="element__like ".concat(c?"element__like_active":"");return Object(m.jsxs)("li",{className:"element",children:[Object(m.jsx)("button",{type:"button",className:a,onClick:function(){e.onCardDelete(e)}}),Object(m.jsx)("img",{className:"element__foto",src:e.link,alt:e.name,onClick:function(){e.onCardClick(e.name,e.link)}}),Object(m.jsxs)("div",{className:"element__lable",children:[Object(m.jsx)("p",{className:"element__title",children:e.name}),Object(m.jsxs)("div",{className:"element__lable-likes",children:[Object(m.jsx)("button",{type:"button",className:o,onClick:function(){e.onCardLike(e)}}),Object(m.jsx)("p",{className:"element__numder-likes",children:e.likes.length})]})]})]})},h=n.p+"static/media/logo.bbe2a6ea.svg";var b=function(e){return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("a",{href:"/",target:"_self",className:"header__link",children:Object(m.jsx)("img",{src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"})}),Object(m.jsxs)("div",{className:"header__info",children:[Object(m.jsx)("p",{className:"header__email",children:e.email}),e.loggedIn?Object(m.jsx)("button",{onClick:e.onLogout,className:"header__button",children:"\u0412\u044b\u0439\u0442\u0438"}):Object(m.jsx)(i.b,{to:e.link,className:"header__text",children:e.linkText})]})]})};var j=function(e){var t=s.a.useContext(d);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{email:e.userDate,link:"/signin",linkText:"\u0412\u044b\u0439\u0442\u0438",onLogout:e.onLogout,loggedIn:e.loggedIn}),Object(m.jsxs)("main",{className:"main",children:[Object(m.jsxs)("section",{className:"profile",children:[Object(m.jsx)("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430",className:"profile__avatar"}),Object(m.jsx)("button",{type:"button",background:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB9SURBVHgB7dbBCYAwDAXQ4ASO4CiO4AgdwQ10BDfqKBklpjRCKIiXfLzkQyi95PHppUSAiMiiU9tJqBjC0sMQbEAEgr0gTypF5AOJaZRIIokkksifiEEFjjjsRDY5/DKHxTaxhTxgezSyQt/CMuls7j7rFEJE+kfvas0ImBsR7skYWCY75QAAAABJRU5ErkJggg==",className:"profile__avatar-activ",onClick:e.onEditAvatar}),Object(m.jsxs)("div",{className:"profile-info",children:[Object(m.jsx)("h1",{className:"profile-info__title",children:t.name}),Object(m.jsx)("button",{type:"button",className:"profile-info__button",onClick:e.onEditProfile}),Object(m.jsx)("p",{className:"profile-info__text",children:t.about})]}),Object(m.jsx)("button",{type:"button",className:"profile__button",onClick:e.onAddPlace})]}),Object(m.jsx)("section",{children:Object(m.jsx)("ul",{className:"elements",children:e.cards.map((function(t){return Object(m.jsx)(p,{name:t.name,link:t.link,likes:t.likes,_id:t._id,owner:t.owner,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})]})};var f=function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var x=function(e){return Object(m.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen),children:Object(m.jsxs)("div",{className:"popup__content",children:[Object(m.jsx)("button",{type:"button",className:"popup__button popup__button_profile popup__button-close",onClick:e.onClose}),Object(m.jsx)("h2",{className:"popup__title",children:"".concat(e.title)}),Object(m.jsx)("form",{name:"".concat(e.name),className:"form form_profile",id:"".concat(e.id),onSubmit:e.onSubmit,children:Object(m.jsxs)("fieldset",{className:"form__container",children:[e.children,Object(m.jsx)("button",{type:"submit",className:"form__button",children:e.buttonText})]})})]})})};var O=function(e){var t=s.a.useState(""),n=Object(l.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(l.a)(o,2),r=i[0],u=i[1],p=s.a.useContext(d);return s.a.useEffect((function(){c(p.name),u(p.about)}),[p,e.isOpen]),Object(m.jsxs)(x,{isOpen:e.isOpen?"popup_is-opened":"",onClose:e.onClose,name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",id:"profileFormValidator",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:r})},children:[Object(m.jsx)("input",{name:"user_name",value:a||"",onChange:function(e){c(e.target.value)},id:"user_name",className:"form__text form__text_edit_name",type:"text",placeholder:"\u0418\u043c\u044f",requiredminlength:"2",maxLength:"40"}),Object(m.jsx)("span",{id:"user_name-error",className:"form__input-error"}),Object(m.jsx)("input",{name:"activity",value:r||"",onChange:function(e){u(e.target.value)},id:"activity",className:"form__text form__text_edit_about-me",type:"text",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",requiredminlength:"2",maxLength:"200"}),Object(m.jsx)("span",{id:"activity-error",className:"form__input-error"})]})};var g=function(e){var t=s.a.useRef();return Object(m.jsxs)(x,{isOpen:e.isOpen?"popup_is-opened":"",onClose:e.onClose,name:"edit-avatar",id:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(m.jsx)("input",{name:"url_avatar",ref:t,id:"url_avatar",className:"form__text form__text_edit_about-me",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",required:!0}),Object(m.jsx)("span",{id:"url_avatar-error",className:"form__input-error"})]})};var _=function(e){var t=s.a.useState(""),n=Object(l.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(l.a)(o,2),r=i[0],u=i[1];return Object(m.jsxs)(x,{isOpen:e.isOpen?"popup_is-opened":"",onClose:e.onClose,name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",id:"cardFormValidator",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:r}),c(""),u("")},children:[Object(m.jsx)("input",{name:"image_name",value:a,onChange:function(e){c(e.target.value)},id:"image_name",className:"form__text form__text_edit_name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",requiredminlength:"2",maxLength:"30"}),Object(m.jsx)("span",{id:"image_name-error",className:"form__input-error"}),Object(m.jsx)("input",{name:"url_image",value:r,onChange:function(e){u(e.target.value)},id:"url_image",className:"form__text form__text_edit_about-me",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(m.jsx)("span",{id:"url_image-error",className:"form__input-error"})]})};var A=function(e){return Object(m.jsx)("div",{className:"popup popup_type_image ".concat(e.isOpen),children:Object(m.jsxs)("div",{className:"images-content",children:[Object(m.jsx)("button",{type:"button",className:"images-content__button popup__button-close",onClick:e.onClose}),Object(m.jsx)("img",{className:"images-content__foto",src:e.link,alt:e.name}),Object(m.jsx)("h2",{className:"images-content__title",children:e.name})]})})};var v=function(e){return Object(m.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen),children:Object(m.jsxs)("div",{className:"tooltip",children:[Object(m.jsx)("button",{type:"button",className:"tooltip__button popup__button-close",onClick:e.onClose}),Object(m.jsx)("img",{className:"tooltip__image",src:e.isLuck?"data:image/png;base64,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":"data:image/png;base64,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",alt:"\u0433\u0430\u043b\u043e\u0447\u043a\u0430"}),Object(m.jsx)("p",{className:"tooltip__title",children:e.isLuck?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})},k=n(11),N=n(9);var C=function(e){return Object(m.jsxs)("div",{className:"page-form",children:[Object(m.jsx)("h2",{className:"page-form__title",children:"".concat(e.title)}),Object(m.jsx)("form",{name:"".concat(e.name),className:"form",onSubmit:e.onSubmit,children:Object(m.jsxs)("fieldset",{className:"form__container",children:[e.children,Object(m.jsx)("button",{type:"submit",className:"form__button form__button_page",children:e.buttonText})]})}),Object(m.jsxs)("p",{className:"page-form__text",children:[e.text," ",Object(m.jsx)(i.b,{to:"".concat(e.link),className:"page-form__text",children:e.linkText})]})]})};var y=function(e){var t=e.onLogin,n=s.a.useState({email:"",password:""}),a=Object(l.a)(n,2),c=a[0],o=a[1];function i(e){var t=e.target,n=t.name,a=t.value;o(Object(N.a)(Object(N.a)({},c),{},Object(k.a)({},n,a)))}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{link:"/signup",linkText:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(m.jsxs)(C,{title:"\u0412\u0445\u043e\u0434",buttonText:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(e){e.preventDefault();var n=c.email,a=c.password;t({email:n,password:a})},children:[Object(m.jsx)("input",{name:"email",value:c.email||"",onChange:i,className:"form__text form__text_page",type:"email",placeholder:"Email",requiredminlength:"2",maxLength:"40"}),Object(m.jsx)("input",{name:"password",value:c.password||"",onChange:i,className:"form__text form__text_page",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",requiredminlength:"2",maxLength:"200"})]})]})};var S=function(e){var t=e.onRegister,n=s.a.useState({email:"",password:""}),a=Object(l.a)(n,2),c=a[0],o=a[1];function i(e){var t=e.target,n=t.name,a=t.value;o(Object(N.a)(Object(N.a)({},c),{},Object(k.a)({},n,a)))}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{link:"/signin",linkText:"\u0412\u043e\u0439\u0442\u0438"}),Object(m.jsxs)(C,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",text:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",link:"/signin",linkText:"\u0412\u043e\u0439\u0442\u0438",name:"register",onSubmit:function(e){e.preventDefault();var n=c.email,a=c.password;t({email:n,password:a})},children:[Object(m.jsx)("input",{id:"email",name:"email",value:c.email||"",onChange:i,className:"form__text form__text_page",type:"email",placeholder:"Email",requiredminlength:"2",maxLength:"40"}),Object(m.jsx)("input",{id:"password",name:"password",value:c.password||"",onChange:i,className:"form__text form__text_page",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",requiredminlength:"3",maxLength:"20"})]})]})},w=n(26),E=["component"],R=function(e){var t=e.component,n=Object(w.a)(e,E);return Object(m.jsx)(u.b,{children:function(){return n.loggedIn?Object(m.jsx)(t,Object(N.a)({},n)):Object(m.jsx)(u.a,{to:"/signin"})}})},U=n(15),L=n(16),I=new(function(){function e(){Object(U.a)(this,e),this._baseUrl="https://auth.nomoreparties.co",this._headers={Accept:"application/json","Content-Type":"application/json"}}return Object(L.a)(e,[{key:"addUser",value:function(e){return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",headers:this._headers,body:JSON.stringify({email:e.email,password:e.password})}).then(this._checkResponse)}},{key:"enterUser",value:function(e){return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",headers:this._headers,body:JSON.stringify({email:e.email,password:e.password})}).then(this._checkResponse)}},{key:"getToken",value:function(e){var t=e.jwt;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}()),X=new(function(){function e(){Object(U.a)(this,e),this._baseUrl="https://mesto.nomoreparties.co/v1/cohort-26",this._headers={authorization:"d3e97d43-b7f6-462d-a435-bd7e94d9d5b6","Content-Type":"application/json"}}return Object(L.a)(e,[{key:"getItemsUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getItemsCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getAllNeededData",value:function(){return Promise.all([this.getItemsUser(),this.getItemsCards()])}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addCardForm",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCardUser",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"toggleLikeCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}());var q=function(){var e=s.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],c=s.a.useState(!1),o=Object(l.a)(c,2),i=o[0],p=o[1],h=s.a.useState(!1),b=Object(l.a)(h,2),k=b[0],N=b[1],C=s.a.useState(!1),w=Object(l.a)(C,2),E=w[0],U=w[1],L=s.a.useState(""),q=Object(l.a)(L,2),P=q[0],B=q[1],J=s.a.useState({isOpen:!1,name:"",link:""}),K=Object(l.a)(J,2),Y=K[0],T=K[1],Z=s.a.useState({}),H=Object(l.a)(Z,2),M=H[0],D=H[1],Q=s.a.useState([]),V=Object(l.a)(Q,2),F=V[0],G=V[1],z=s.a.useState(!1),W=Object(l.a)(z,2),$=W[0],ee=W[1],te=s.a.useState({_id:"",email:""}),ne=Object(l.a)(te,2),ae=ne[0],se=ne[1],ce=Object(u.g)();function oe(){var e=localStorage.getItem("jwt");e&&I.getToken({jwt:e}).then((function(e){var t=e.data,n=t._id,a=t.email;se({_id:n,email:a}),ee(!0)})).catch((function(e){console.log(e)}))}function ie(e){B(e),U(!0)}function re(){a(!1),p(!1),N(!1),T({isOpen:!1,name:"",link:""}),U(!1)}return s.a.useEffect((function(){!0===$&&ce.push("/")}),[$,ce]),s.a.useEffect((function(){oe()}),[]),s.a.useEffect((function(){!0===P&&ce.push("/signin")}),[P,ce]),s.a.useEffect((function(){X.getItemsUser().then((function(e){D(e)})).catch((function(e){console.log(e)}))}),[]),s.a.useEffect((function(){X.getItemsCards().then((function(e){G(e)})).catch((function(e){console.log(e)}))}),[]),s.a.useEffect((function(){var e=function(e){"Escape"===e.key&&re()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(m.jsx)("div",{className:"root",children:Object(m.jsxs)(d.Provider,{value:M,children:[Object(m.jsxs)(u.d,{children:[Object(m.jsx)(u.b,{exact:!0,path:"/signin",children:Object(m.jsx)(y,{onLogin:function(e){var t=e.email,n=e.password;I.enterUser({email:t,password:n}).then((function(e){localStorage.setItem("jwt",e.token),ee(!0),se({email:t})})).catch((function(e){console.log(e)}))},tokenCheck:oe})}),Object(m.jsx)(u.b,{path:"/signup",children:Object(m.jsx)(S,{onRegister:function(e){var t=e.email,n=e.password;I.addUser({email:t,password:n}).then((function(e){var t=e.data,n=t._id,a=t.email;se({_id:n,email:a}),ie(!0)})).catch((function(e){ie(!1),console.log(e)}))}})}),Object(m.jsx)(R,{path:"/",loggedIn:$,component:j,onEditAvatar:function(){N(!0)},onEditProfile:function(){a(!0)},onAddPlace:function(){p(!0)},onCardClick:function(e,t){T({isOpen:!0,name:e,link:t})},cards:F,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===M._id}));X.toggleLikeCard(e._id,t).then((function(t){G((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){X.deleteCardUser(e._id).then((function(){G((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log(e)}))},onLogout:function(){localStorage.removeItem("jwt"),se({_id:"",email:""}),ee(!1)},userDate:ae.email})]}),Object(m.jsx)(f,{}),Object(m.jsx)(O,{isOpen:n,onClose:re,onUpdateUser:function(e){X.editProfile(e).then((function(e){D(e),re()})).catch((function(e){console.log(e)}))}}),Object(m.jsx)(g,{isOpen:k,onClose:re,onUpdateAvatar:function(e){X.editAvatar(e).then((function(e){D(e),re()})).catch((function(e){console.log(e)}))}}),Object(m.jsx)(_,{isOpen:i,onClose:re,onAddPlace:function(e){X.addCardForm(e).then((function(e){G([e].concat(Object(r.a)(F))),re()})).catch((function(e){console.log(e)}))}}),Object(m.jsx)(x,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(m.jsx)(A,{isOpen:Y.isOpen?"popup_is-opened":"",onClose:re,name:Y.name,link:Y.link}),Object(m.jsx)(v,{isOpen:E?"popup_is-opened":"",onClose:re,name:"tooltipe",isLuck:P})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(q,{})})}),document.getElementById("root")),P()}},[[37,1,2]]]);
//# sourceMappingURL=main.f75fb8bf.chunk.js.map