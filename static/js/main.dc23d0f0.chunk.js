(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{432:function(e,t,n){"use strict";n.r(t);var a,r=n(12),c=n.n(r),i=n(485),o=n(484),s=n(92),u=n(276),l=n(66),j=n(26),d=n(54),b=n(61),h=n(152),p=n(280),m=n.n(p),O=n(148),x=n.n(O),f=x.a.create({baseURL:""});x.a.create({baseURL:""});!function(e){e.CHANGE_TOKEN="CHANGE_TOKEN",e.CLEAR_TOKEN="CLEAR_TOKEN"}(a||(a={}));var v,g={},y=n(16);!function(e){e.CHANGE_USER="CHANGE_USER",e.CLEAR_USER="CLEAR_USER"}(v||(v={}));var k=null,E=Object(b.a)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.CHANGE_TOKEN:var n=t.payload;return f.defaults.headers.common.Authorization="Bearer ".concat(n),{token:n};case a.CLEAR_TOKEN:return delete f.defaults.headers.common.Authorization,g;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.CHANGE_USER:return e?Object(y.a)(Object(y.a)({},e),t.payload):t.payload||null;case v.CLEAR_USER:return k;default:return e}}}),S=Object(h.a)({key:"root",whitelist:["auth","user"],storage:m.a},E),C=Object(b.b)(S),w=Object(h.b)(C),_=s.c,D=n(289),R=n(33),A=Object(D.a)({palette:{primary:{main:R.a.blue[800]}}}),P=n(21),I=n(2),N=function(e){var t=_((function(e){return e.user})),n=_((function(e){return e.auth.token}));return t&&n?Object(I.jsx)(P.b,Object(y.a)({},e)):Object(I.jsx)(P.a,{to:"/login"})},T=function(e){var t=_((function(e){return e.user})),n=_((function(e){return e.auth.token}));return t&&n?Object(I.jsx)(P.a,{to:"/veiculos"}):Object(I.jsx)(P.b,Object(y.a)({},e))},L=n(8),V=n.n(L),F=n(19),U=n(23),z=n(0),K=n(465),G=n(466),H=n(467),M=n(468),W=n(469),q=n(437),J=function(e){var t=e.vehicles,n=e.onSelect;return Object(I.jsx)(K.a,{container:!0,spacing:2,children:t.map((function(e){return Object(I.jsx)(K.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(I.jsx)(G.a,{children:Object(I.jsxs)(H.a,{component:"button",onClick:function(){return n(e)},children:[Object(I.jsx)(M.a,{image:e.image,title:e.model,style:{height:160}}),Object(I.jsx)(W.a,{children:Object(I.jsxs)(K.a,{container:!0,children:[Object(I.jsx)(K.a,{item:!0,xs:!1,children:Object(I.jsx)(q.a,{variant:"h6",component:"h2",children:e.model})}),Object(I.jsx)(K.a,{item:!0,xs:12,children:Object(I.jsxs)(K.a,{container:!0,spacing:1,justifyContent:"space-between",children:[Object(I.jsx)(K.a,{item:!0,children:Object(I.jsx)(q.a,{variant:"body2",component:"h3",children:e.brand})}),Object(I.jsx)(K.a,{item:!0,children:Object(I.jsx)(q.a,{variant:"body2",component:"h3",children:e.year})})]})})]})})]})})},e._id)}))})};J.defaultProps={onSelect:function(){}};var B=function(e){var t=Object.assign({},e);return Object(I.jsx)(J,Object(y.a)({},t))};B.defaultProps=Object(y.a)({},J.defaultProps);var Q=[{_id:"mady4ccqzcki0rnf",brand:"HAFEI",model:"Towner Pick_up Ba",year:2011,image:"https://picsum.photos/300",mileage:5e3,color:"Preto"},{_id:"88r3hsueh1vd78fd",brand:"VW - VolksWagen",model:"Fox Rock in Rio 1.6 Mi Total Flex 8V 5p",year:2012,image:"https://picsum.photos/400",mileage:12051,color:"Dourado"},{_id:"kl4k3t6ya996dqng",brand:"RELY",model:"PICK-UP Q22D CS 1.0 2p",year:2014,image:"https://picsum.photos/310",mileage:5600,color:"Cinza"},{_id:"nkwib3jx81zxkk36",brand:"Fibravan",model:"Buggy Vip 1.6 8V Total Flex",year:2007,image:"https://picsum.photos/200",mileage:105090,color:"Azul"},{_id:"32e3wpjsy1rcc13f",brand:"CHERY",model:"QQ 1.0 ACT FL 12V 69cv 5p",year:2015,image:"https://picsum.photos/450",mileage:5590,color:"Prata"},{_id:"z8cqhgx6i7oy6ala",brand:"Seat",model:"Cordoba Vario 1.6L",year:2e3,image:"https://picsum.photos/500",mileage:130589,color:"Vermelho"}],Y=function(e){var t=Q.find((function(t){return t._id===e}));if(!t)throw new Error("NOT_FOUND");return t},X=function(){var e=Object(P.g)(),t=Object(z.useState)([]),n=Object(U.a)(t,2),a=n[0],r=n[1];Object(z.useEffect)((function(){(function(){var e=Object(F.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(Q);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(I.jsx)(B,{vehicles:a,onSelect:function(t){e.push("/veiculos/".concat(t._id))}})},Z=n(482),$=n(475),ee=n(35),te=n(88),ne=n(284);te.setLocale(ne.ptShort);var ae=te.object().shape({pickupDate:te.mixed().required(),returnDate:te.mixed().required().test("diff-days-lower-than-30","O per\xedodo m\xe1ximo de loca\xe7\xe3o \xe9 de 30 dias seguidos",(function(e,t){var n=e,a=t.parent.pickupDate;return n.diff(a,"days")<=30}))}),re=n(120),ce=n(290),ie=n(486),oe=["name","control","defaultValue"],se=function(e){var t=e.name,n=e.control,a=e.defaultValue,r=Object(ce.a)(e,oe);return Object(I.jsx)(ee.a,{name:t,control:n,defaultValue:a,render:function(e){var t=e.field,n=t.ref,a=t.value,c=t.onChange,i=t.onBlur,o=e.fieldState.error;return Object(I.jsx)(ie.a,Object(y.a)(Object(y.a)({},r),{},{onChange:c,onBlur:i,value:a,inputRef:n,error:!!o,helperText:null===o||void 0===o?void 0:o.message}))}})};se.defaultProps={fullWidth:!0,inputVariant:"outlined",format:"DD/MM/y",defaultValue:null};var ue=n(56),le=n.n(ue),je=function(e){return le()(e)},de={pickupDate:je(),returnDate:je().add(1,"day")},be=function(e){var t=e.onSubmit,n=Object(ee.e)({defaultValues:de,resolver:Object(re.a)(ae)}),a=n.control,r=n.handleSubmit,c=n.watch,i=n.formState.isSubmitting,o=n.setValue,s=c("pickupDate"),u=c("returnDate");return Object(z.useEffect)((function(){s>u&&(de.pickupDate!==s&&o("returnDate",je(s).add(1,"day")),de.returnDate!==u&&o("pickupDate",je(u).subtract(1,"day")),de.pickupDate=s,de.returnDate=u)}),[s,u,o]),Object(I.jsx)("form",{onSubmit:r(t),children:Object(I.jsxs)(K.a,{container:!0,direction:"column",spacing:2,children:[Object(I.jsx)(K.a,{item:!0,children:Object(I.jsx)(q.a,{children:"Per\xedodo da reserva"})}),Object(I.jsx)(K.a,{item:!0,children:Object(I.jsx)(se,{label:"Data de retirada",control:a,name:"pickupDate",minDate:je()})}),Object(I.jsx)(K.a,{item:!0,children:Object(I.jsx)(se,{label:"Data de devolu\xe7\xe3o",control:a,name:"returnDate"})}),Object(I.jsx)(K.a,{item:!0,children:Object(I.jsx)($.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",disabled:i,children:"Finalizar reserva"})})]})})};be.defaultProps={onSubmit:function(){}};var he=n(481),pe={image:{height:"350px"}},me=function(e){var t=e.vehicle;return Object(I.jsxs)(K.a,{container:!0,spacing:2,direction:"column",children:[Object(I.jsx)(K.a,{item:!0,children:Object(I.jsx)(M.a,{image:t.image,style:pe.image})}),Object(I.jsx)(K.a,{item:!0,children:Object(I.jsxs)(K.a,{container:!0,direction:"column",spacing:1,children:[Object(I.jsx)(K.a,{item:!0,children:Object(I.jsxs)(q.a,{variant:"body1",component:"span",children:["Ano: ",t.year]})}),Object(I.jsx)(he.a,{}),Object(I.jsx)(K.a,{item:!0,children:Object(I.jsxs)(q.a,{variant:"body1",component:"h2",children:["Cor: ",t.color]})}),Object(I.jsx)(he.a,{}),Object(I.jsx)(K.a,{item:!0,children:Object(I.jsxs)(q.a,{variant:"body1",component:"h2",children:["Marca: ",t.brand]})}),Object(I.jsx)(he.a,{}),Object(I.jsx)(K.a,{item:!0,children:Object(I.jsxs)(q.a,{variant:"body1",component:"h2",children:["Quilometragem: ",t.mileage]})})]})})]})},Oe=function(e){var t=e.children;return Object(I.jsx)(q.a,{variant:"h6",component:"h2",children:t})},xe=function(e){var t=e.vehicle,n=e.onSubmit;return t?Object(I.jsxs)(K.a,{container:!0,spacing:2,children:[Object(I.jsx)(K.a,{item:!0,xs:12,children:Object(I.jsx)(Oe,{children:t.model})}),Object(I.jsx)(K.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(me,{vehicle:t})}),Object(I.jsx)(K.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(be,{onSubmit:n})})]}):Object(I.jsx)(Z.a,{})};xe.defaultProps=Object(y.a)(Object(y.a)({},me.defaultProps),be.defaultProps);var fe=function(){var e=Object(F.a)(V.a.mark((function e(t){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=_((function(e){return e.user})),t=Object(P.h)()._id,n=Object(P.g)(),a=Object(l.b)().enqueueSnackbar,r=Object(z.useState)(void 0),c=Object(U.a)(r,2),i=c[0],o=c[1];Object(z.useEffect)((function(){(function(){var e=Object(F.a)(V.a.mark((function e(){var r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(t);case 3:r=e.sent,o(r),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),a("Ve\xedculo n\xe3o encontrado",{variant:"warning"}),n.push("/veiculos");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t,a,n]);var s=function(){var r=Object(F.a)(V.a.mark((function r(c){var i,o;return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=c.pickupDate,o=c.returnDate,r.prev=2,r.next=5,fe({pickupDate:i,returnDate:o,vehicle:t,user:e._id});case 5:a("Reserva criada com sucesso",{variant:"success"}),n.push("/veiculos"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),a("Erro ao criar reserva",{variant:"error"});case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}();return Object(I.jsx)(xe,{vehicle:i,onSubmit:s})},ge={container:{minHeight:"calc(100vh - 128px)"},containerItem:{maxWidth:"450px"}},ye=n(479),ke=function(){return Object(I.jsxs)(K.a,{container:!0,spacing:2,children:[Object(I.jsx)(K.a,{item:!0,xs:12,children:Object(I.jsx)(q.a,{align:"center",variant:"h3",component:"h2","data-testid":"login-header-title",children:"Login ou cadastro"})}),Object(I.jsx)(K.a,{item:!0,xs:12,children:Object(I.jsx)(q.a,{align:"center",variant:"subtitle1",component:"p","data-testid":"login-header-subtitle",children:"Acesse para realizar sua reserva"})})]})},Ee=te.object().shape({email:te.string().required().min(3).email(),name:te.string().required().min(3)}),Se=function(e){var t,n,a=e.onSubmit,r=Object(ee.e)({resolver:Object(re.a)(Ee)}),c=r.register,i=r.handleSubmit,o=r.formState,s=o.errors,u=o.isSubmitting;return Object(I.jsx)("form",{onSubmit:i(a),"data-testid":"login-form",children:Object(I.jsxs)(K.a,{container:!0,spacing:3,children:[Object(I.jsx)(K.a,{item:!0,xs:12,children:Object(I.jsx)(ke,{})}),Object(I.jsx)(K.a,{item:!0,xs:12,children:Object(I.jsxs)(K.a,{container:!0,spacing:2,children:[Object(I.jsx)(K.a,{item:!0,xs:12,children:Object(I.jsx)(ye.a,Object(y.a)(Object(y.a)({label:"E-mail",variant:"outlined",fullWidth:!0,inputProps:{"data-testid":"login-form-input-email"}},c("email")),{},{helperText:null===(t=s.email)||void 0===t?void 0:t.message,error:!!s.email}))}),Object(I.jsx)(K.a,{item:!0,xs:12,children:Object(I.jsx)(ye.a,Object(y.a)(Object(y.a)({label:"Nome",variant:"outlined",fullWidth:!0,inputProps:{"data-testid":"login-form-input-name"}},c("name")),{},{helperText:null===(n=s.name)||void 0===n?void 0:n.message,error:!!s.name}))})]})}),Object(I.jsx)(K.a,{item:!0,xs:12,children:Object(I.jsx)($.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",disabled:u,children:"Acessar / Cadastrar"})})]})})};Se.defaultProps={onSubmit:function(){}};var Ce=function(e){var t=e.onSubmit;return Object(I.jsx)(K.a,{container:!0,justifyContent:"center",alignItems:"center",style:ge.container,children:Object(I.jsx)(K.a,{item:!0,xs:12,style:ge.containerItem,children:Object(I.jsx)(Se,{onSubmit:t})})})};Ce.defaultProps=Object(y.a)({},Se.defaultProps);var we=function(e){return{type:v.CHANGE_USER,payload:e}},_e=function(){var e=Object(F.a)(V.a.mark((function e(t){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={user:Object(y.a)({_id:"900150983cd24fb0d6963f7d28e17f72"},t),token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"},C.dispatch((r=n.token,{type:a.CHANGE_TOKEN,payload:r})),C.dispatch(we(n.user)),e.abrupt("return",n);case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}(),De=function(){C.dispatch({type:a.CLEAR_TOKEN}),C.dispatch({type:v.CLEAR_USER})},Re=function(){var e=Object(l.b)().enqueueSnackbar,t=function(){var t=Object(F.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_e({name:n.name,email:n.email});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),e("Usu\xe1rio ou senha inv\xe1lidos",{variant:"warning"});case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}();return Object(I.jsx)(Ce,{onSubmit:t})},Ae=function(){return Object(I.jsxs)(P.d,{children:[Object(I.jsx)(N,{path:"/veiculos",exact:!0,children:Object(I.jsx)(X,{})}),Object(I.jsx)(N,{path:"/veiculos/:_id",exact:!0,children:Object(I.jsx)(ve,{})}),Object(I.jsx)(T,{path:"/login",exact:!0,children:Object(I.jsx)(Re,{})}),Object(I.jsx)(P.a,{to:"/login"})]})},Pe=n(483),Ie=n(478),Ne={toolbar:{padding:0},title:{flex:1}},Te=function(e){var t=e.user,n=e.onLogout,a=(null===t||void 0===t?void 0:t.name.split(" "))||[],r=Object(U.a)(a,2),c=r[0],i=r[1];return Object(I.jsx)(Pe.a,{position:"static",children:Object(I.jsx)(o.a,{children:Object(I.jsx)(Ie.a,{style:Ne.toolbar,children:Object(I.jsxs)(K.a,{container:!0,justifyContent:"space-between",children:[Object(I.jsx)(K.a,{item:!0,children:Object(I.jsx)(q.a,{variant:"h6",component:"h1",children:"Locadora"})}),Object(I.jsx)(K.a,{item:!0,children:t&&Object(I.jsxs)(K.a,{container:!0,spacing:2,alignItems:"center",children:[Object(I.jsx)(K.a,{item:!0,children:Object(I.jsxs)(q.a,{variant:"body2",component:"h1",children:["Ol\xe1, ",c," ",i]})}),Object(I.jsx)(K.a,{item:!0,children:Object(I.jsx)($.a,{color:"inherit",size:"small",onClick:n,children:"Sair"})})]})})]})})})})};Te.defaultProps={onLogout:function(){}};var Le=function(){var e=_((function(e){return e.user}));return Object(I.jsx)(Te,{user:e,onLogout:function(){De()}})},Ve=n(288),Fe=(n(430),n(431),"pt-br");le.a.locale(Fe);var Ue=function(){return Object(I.jsx)(s.a,{store:C,children:Object(I.jsx)(u.a,{persistor:w,children:Object(I.jsx)(i.a,{theme:A,children:Object(I.jsx)(l.a,{maxSnack:3,children:Object(I.jsx)(j.a,{utils:Ve.a,locale:Fe,children:Object(I.jsxs)(d.a,{children:[Object(I.jsx)(Le,{}),Object(I.jsx)(o.a,{style:{marginTop:32,marginBottom:32},children:Object(I.jsx)(Ae,{})})]})})})})})})},ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,488)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};c.a.render(Object(I.jsx)(Ue,{}),document.getElementById("root")),ze()}},[[432,1,2]]]);
//# sourceMappingURL=main.dc23d0f0.chunk.js.map