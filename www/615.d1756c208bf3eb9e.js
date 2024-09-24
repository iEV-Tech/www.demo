"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[615],{1038:(T,F,d)=>{d.d(F,{v:()=>s});var v=d(467),b=d(5972);const s=function(){var U=(0,v.A)(function*(r){r.params=r.params||{};var m=[];r.params.subFolder&&(r.params.subFolder=r.params.subFolder.replace(/[^a-zA-Z0-9\/]/gm,"").replace(/\/+/gm,"/").replace(/^\//,"").replace(/\/$/,""),r.params.subFolder&&m.push(r.params.subFolder)),r.params.isconvertvideo=!!r.params.isconvertvideo,r.params.isconvertpdf2image=!!r.params.isconvertpdf2image,r.params.isconvertoffice2image=!!r.params.isconvertoffice2image,r.params.isresizeimage=!!r.params.isresizeimage;const a=new FormData;a.append("path",m.join("/")),a.append("types",r.params.fileType||null),a.append("file",r.params.file||null),a.append("base64",r.params.base64||!1),a.append("isconvertvideo",r.params.isconvertvideo),a.append("isconvertpdf2image",r.params.isconvertpdf2image),a.append("isconvertoffice2image",r.params.isconvertoffice2image),a.append("isresizeimage",r.params.isresizeimage),(0,b.ZD)({url:"files",formData:a,success:e=>{"function"==typeof r.callback&&r.callback(e||null)},error:e=>{"function"==typeof r.callback&&r.callback(),console.error(r,e)},loading:r.loading,loadingController:r.loadingController})});return function(m){return U.apply(this,arguments)}}()},9946:(T,F,d)=>{d.d(F,{ks:()=>U,sh:()=>r,z:()=>s});var v=d(467),b=d(5972);const s=function(){var m=(0,v.A)(function*(a){a.params=a.params||{},(0,b.hm)({url:"api/User/get-user",params:{},success:e=>{"function"==typeof a.callback&&a.callback(e.data||null)},error:e=>{var p;"function"==typeof a.callback&&a.callback(null==e||null===(p=e.response)||void 0===p?void 0:p.data),console.error(e)},loading:a.loading,loadingController:a.loadingController})});return function(e){return m.apply(this,arguments)}}(),U=function(){var m=(0,v.A)(function*(a){var e,p,f,g,C,M;a.params=a.params||{},(0,b.IH)({url:"api/User/update-user",params:{FullName:null!==(e=a.params.FullName)&&void 0!==e?e:null,PersonEmail:null!==(p=a.params.Email)&&void 0!==p?p:null,Phone:null!==(f=a.params.Phone)&&void 0!==f?f:null,Address:null!==(g=a.params.Address)&&void 0!==g?g:null,Gender:null!==(C=a.params.Gender)&&void 0!==C?C:null,Birthday:null!==(M=a.params.Birthday)&&void 0!==M?M:null},success:_=>{"function"==typeof a.callback&&a.callback(_.data||null)},error:_=>{var R;"function"==typeof a.callback&&a.callback(null==_||null===(R=_.response)||void 0===R?void 0:R.data),console.error(_)},loading:a.loading,loadingController:a.loadingController})});return function(e){return m.apply(this,arguments)}}(),r=function(){var m=(0,v.A)(function*(a){var e,p;a.params=a.params||{},(0,b.IH)({url:"api/User/update-avatar",params:{UserId:null!==(e=a.params.UserId)&&void 0!==e?e:null,Avatar:null!==(p=a.params.Avatar)&&void 0!==p?p:null},success:f=>{"function"==typeof a.callback&&a.callback(f.data||null)},error:f=>{var g;"function"==typeof a.callback&&a.callback(null==f||null===(g=f.response)||void 0===g?void 0:g.data),console.error(f)},loading:a.loading,loadingController:a.loadingController})});return function(e){return m.apply(this,arguments)}}()},615:(T,F,d)=>{d.r(F),d.d(F,{UserInfoPageModule:()=>J});var v=d(177),b=d(9417),s=d(4742),U=d(7625),r=d(467),m=d(9946),a=d(8650),e=d(4438),p=d(4842);function f(o,u){if(1&o){const l=e.RV6();e.qex(0),e.j41(1,"ion-content")(2,"div",4)(3,"ion-list",5)(4,"div",6)(5,"label"),e.EFF(6),e.nI1(7,"translate"),e.j41(8,"span",7),e.EFF(9,"*"),e.k0s()(),e.j41(10,"div",8)(11,"ion-item")(12,"ion-input",9),e.nI1(13,"translate"),e.bIt("ionChange",function(n){e.eBV(l);const i=e.XpG();return e.Njj(i.changeFullName(n))}),e.k0s()()()(),e.j41(14,"div",6)(15,"label"),e.EFF(16),e.nI1(17,"translate"),e.k0s(),e.j41(18,"div",8)(19,"ion-item")(20,"ion-input",10),e.nI1(21,"translate"),e.bIt("ionChange",function(n){e.eBV(l);const i=e.XpG();return e.Njj(i.changeEmail(n))}),e.k0s()()()(),e.j41(22,"div",6)(23,"label"),e.EFF(24),e.nI1(25,"translate"),e.k0s(),e.j41(26,"div",8)(27,"ion-item")(28,"ion-input",10),e.nI1(29,"translate"),e.bIt("ionChange",function(n){e.eBV(l);const i=e.XpG();return e.Njj(i.changePhone(n))}),e.k0s()()()(),e.j41(30,"div",6)(31,"label"),e.EFF(32),e.nI1(33,"translate"),e.k0s(),e.j41(34,"div",8)(35,"ion-item")(36,"ion-textarea",11),e.nI1(37,"translate"),e.bIt("ionChange",function(n){e.eBV(l);const i=e.XpG();return e.Njj(i.changeAddress(n))}),e.k0s()()()()()()(),e.j41(38,"ion-footer")(39,"div",12)(40,"ion-button",13),e.bIt("click",function(n){e.eBV(l);const i=e.XpG();return e.Njj(i.submit(n))}),e.j41(41,"ion-label"),e.EFF(42),e.nI1(43,"translate"),e.k0s()()()(),e.bVm()}if(2&o){const l=e.XpG();e.R7$(6),e.SpI("",e.bMT(7,14,"FullName")," "),e.R7$(6),e.FS9("placeholder",e.bMT(13,16,"FullName")),e.Y8G("value",l.dataForm.FullName),e.R7$(4),e.JRh(e.bMT(17,18,"Email")),e.R7$(4),e.FS9("placeholder",e.bMT(21,20,"Email")),e.Y8G("value",l.dataForm.Email),e.R7$(4),e.JRh(e.bMT(25,22,"Mobile")),e.R7$(4),e.FS9("placeholder",e.bMT(29,24,"Mobile")),e.Y8G("value",l.dataForm.Phone),e.R7$(4),e.JRh(e.bMT(33,26,"Address")),e.R7$(4),e.FS9("placeholder",e.bMT(37,28,"Address")),e.Y8G("autoGrow",!0)("value",l.dataForm.Address),e.R7$(6),e.JRh(e.bMT(43,30,"Complete"))}}let g=(()=>{var o;class u{constructor(t,n,i){this.modalController=t,this.toastController=n,this.loadingController=i,this.user={},this.dataForm={}}ngOnInit(){(0,m.z)({loadingController:this.loadingController,callback:t=>{var n,i,c;this.response=t,null!=t&&t.Succeeded?(this.user=null!==(n=t.Data)&&void 0!==n?n:{},this.dataForm={FullName:this.user.FullName,Email:null===(i=this.user.Person)||void 0===i?void 0:i.Email,Phone:null===(c=this.user.Person)||void 0===c?void 0:c.Phone,Address:this.user.Address}):(0,a.cX)(this.toastController,{},t).then(h=>h.present())}})}close(t){var n=this;return(0,r.A)(function*(){n.modalController.dismiss(null,"cancel")})()}submit(t){var n=this;return(0,r.A)(function*(){(0,m.ks)({loadingController:n.loadingController,params:n.dataForm,callback:i=>{null!=i&&i.Succeeded?n.modalController.dismiss(null,"success"):(0,a.cX)(n.toastController,{},i).then(c=>c.present())}})})()}changeFullName(t){var n=this;return(0,r.A)(function*(){n.dataForm.FullName=t.detail.value})()}changeEmail(t){var n=this;return(0,r.A)(function*(){n.dataForm.Email=t.detail.value})()}changePhone(t){var n=this;return(0,r.A)(function*(){n.dataForm.Phone=t.detail.value})()}changeAddress(t){var n=this;return(0,r.A)(function*(){n.dataForm.Address=t.detail.value})()}}return(o=u).\u0275fac=function(t){return new(t||o)(e.rXU(s.W3),e.rXU(s.K_),e.rXU(s.Xi))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-modal-update-user"]],decls:9,vars:4,consts:[["slot","start"],[3,"click"],["src","../../../assets/icon/ion-icon/arrow-left.svg"],[4,"ngIf"],[1,"card-info","bg-white","container","py-3","min-h-100"],["lines","none"],[1,"form-group"],[1,"text-danger"],[1,"ion-item-input"],[3,"ionChange","placeholder","value"],["type","email",3,"ionChange","placeholder","value"],[3,"ionChange","autoGrow","placeholder","value"],[1,"container","py-3"],["color","primary","expand","block","shape","round",3,"click"]],template:function(t,n){1&t&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),e.bIt("click",function(c){return n.close(c)}),e.nrm(4,"ion-icon",2),e.k0s()(),e.j41(5,"ion-title"),e.EFF(6),e.nI1(7,"translate"),e.k0s()()(),e.DNE(8,f,44,32,"ng-container",3)),2&t&&(e.R7$(6),e.JRh(e.bMT(7,2,"UpdateInfo")),e.R7$(2),e.Y8G("ngIf",null==n.response?null:n.response.Succeeded))},dependencies:[v.bT,s.Jm,s.QW,s.W9,s.M0,s.eU,s.iq,s.$w,s.uz,s.he,s.nf,s.nc,s.BC,s.ai,s.Gw,p.D9],styles:[".card-info[_ngcontent-%COMP%]{border-top-left-radius:1.5rem;border-top-right-radius:1.5rem}"]}),u})();var C=d(5312),M=d(1038),_=d(6539),R=d(8517),P=d(8833);function k(o,u){if(1&o&&(e.j41(0,"div",7)(1,"small",8),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"div",11)(5,"b"),e.EFF(6),e.k0s(),e.j41(7,"ion-chip",12)(8,"ion-label"),e.EFF(9),e.nI1(10,"translate"),e.k0s()()()()),2&o){const l=e.XpG(2);e.R7$(2),e.JRh(e.bMT(3,3,"Mobile")),e.R7$(4),e.JRh(l.APP_FUNC_FormatMobileNumber(l.user.PhoneNumber)),e.R7$(3),e.JRh(e.bMT(10,5,"Verified"))}}function j(o,u){if(1&o&&(e.j41(0,"div",7)(1,"small",8),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"div",11)(5,"b"),e.EFF(6),e.k0s(),e.j41(7,"ion-chip",12)(8,"ion-label"),e.EFF(9),e.nI1(10,"translate"),e.k0s()()()()),2&o){const l=e.XpG(2);e.R7$(2),e.JRh(e.bMT(3,3,"Email")),e.R7$(4),e.JRh(l.user.Email),e.R7$(3),e.JRh(e.bMT(10,5,"Verified"))}}function A(o,u){if(1&o&&(e.j41(0,"div",7)(1,"small",8),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"div",11)(5,"b",13),e.EFF(6),e.k0s(),e.j41(7,"ion-chip",12)(8,"ion-label"),e.EFF(9),e.nI1(10,"translate"),e.k0s()()()()),2&o){const l=e.XpG(2);e.R7$(2),e.JRh(e.bMT(3,4,"AccountLinkedTo")),e.R7$(3),e.Y8G("title",l.user.UserName),e.R7$(),e.JRh(l.user.SocialType),e.R7$(3),e.JRh(e.bMT(10,6,"Verified"))}}function y(o,u){if(1&o&&(e.j41(0,"div",6)(1,"div",7)(2,"small",8),e.EFF(3),e.nI1(4,"translate"),e.k0s(),e.j41(5,"p",9)(6,"b"),e.EFF(7),e.nI1(8,"translate"),e.k0s()()(),e.DNE(9,k,11,7,"div",7)(10,j,11,7,"div",7)(11,A,11,8,"div",7),e.j41(12,"div",10)(13,"i"),e.EFF(14),e.nI1(15,"translate"),e.k0s()(),e.nrm(16,"hr"),e.j41(17,"div",7)(18,"small",8),e.EFF(19),e.nI1(20,"translate"),e.k0s(),e.j41(21,"p",9)(22,"b"),e.EFF(23),e.nI1(24,"translate"),e.k0s()()(),e.j41(25,"div",7)(26,"small",8),e.EFF(27),e.nI1(28,"translate"),e.k0s(),e.j41(29,"p",9)(30,"b"),e.EFF(31),e.nI1(32,"translate"),e.k0s()()(),e.j41(33,"div",7)(34,"small",8),e.EFF(35),e.nI1(36,"translate"),e.k0s(),e.j41(37,"p",9)(38,"b"),e.EFF(39),e.nI1(40,"translate"),e.k0s()()()()),2&o){const l=e.XpG();e.R7$(3),e.JRh(e.bMT(4,12,"FullName")),e.R7$(4),e.JRh(l.user.FullName||e.bMT(8,14,"NotUpdate")),e.R7$(2),e.vxM(9,l.user.PhoneNumberConfirmed&&l.user.PhoneNumber?9:-1),e.R7$(),e.vxM(10,l.user.EmailConfirmed&&l.user.Email?10:-1),e.R7$(),e.vxM(11,l.user.IsSocial&&l.user.SocialType?11:-1),e.R7$(3),e.JRh(e.bMT(15,16,"Verified_MoreInfo")),e.R7$(5),e.JRh(e.bMT(20,18,"Email")),e.R7$(4),e.JRh((null==l.user.Person?null:l.user.Person.Email)||e.bMT(24,20,"NotUpdate")),e.R7$(4),e.JRh(e.bMT(28,22,"Mobile")),e.R7$(4),e.JRh(l.APP_FUNC_FormatMobileNumber(null==l.user.Person?null:l.user.Person.Phone)||e.bMT(32,24,"NotUpdate")),e.R7$(4),e.JRh(e.bMT(36,26,"Address")),e.R7$(4),e.JRh(l.user.Address||e.bMT(40,28,"NotUpdate"))}}function $(o,u){if(1&o){const l=e.RV6();e.j41(0,"ion-footer")(1,"div",14)(2,"ion-button",15),e.bIt("click",function(n){e.eBV(l);const i=e.XpG();return e.Njj(i.presentModalUpdateUser(n))}),e.j41(3,"ion-label"),e.EFF(4),e.nI1(5,"translate"),e.k0s()()()()}2&o&&(e.R7$(4),e.JRh(e.bMT(5,1,"Update")))}const N=[{path:"",component:(()=>{var o;class u{constructor(t,n,i){this.modalController=t,this.toastController=n,this.loadingController=i,this.APP_ROUTE=P._,this.api_url=C.c.api_url,this.APP_FUNC_FormatMobileNumber=R.IV}ngOnInit(){var t=this;(0,r.A)(function*(){(yield(0,_.kU)())&&t.refreshData()})()}onIonRefresher(t){this.refreshData(()=>{t.target.complete()})}refreshData(t){var n=this;return(0,r.A)(function*(){(0,m.z)({loadingController:n.loadingController,callback:i=>{var c;n.response=i,null!=i&&i.Succeeded?n.user=null!==(c=i.Data)&&void 0!==c?c:{}:(0,a.cX)(n.toastController,{},i).then(h=>h.present()),t&&t()}})})()}presentModalUpdateUser(t){var n=this;return(0,r.A)(function*(){let i=yield n.modalController.create({component:g});i.onDidDismiss().then(c=>{"success"==c.role&&n.refreshData()}),i.present()})()}changeAvatar(t){var n=this;return(0,r.A)(function*(){(0,R.oG)({accept:"image/*"},function(){var i=(0,r.A)(function*(c){(0,M.v)({loadingController:n.loadingController,params:{file:c[0],subFolder:"avatar",fileType:"image"},callback:h=>{var E;0==(null==h?void 0:h.ReturnCode)?(0,m.sh)({loadingController:n.loadingController,params:{UserId:null===(E=n.user)||void 0===E?void 0:E.UserId,Avatar:`${h.path}/${h.file.name}`},callback:I=>{null!=I&&I.Succeeded?n.refreshData():(0,a.cX)(n.toastController,{},I).then(D=>D.present())}}):(0,a.cX)(n.toastController,{},h).then(I=>I.present())}})});return function(c){return i.apply(this,arguments)}}())})()}}return(o=u).\u0275fac=function(t){return new(t||o)(e.rXU(s.W3),e.rXU(s.K_),e.rXU(s.Xi))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-user-info"]],decls:12,vars:6,consts:[["mode","ios"],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","card-info bg-white container py-3 min-h-100",4,"ngIf"],[4,"ngIf"],[1,"card-info","bg-white","container","py-3","min-h-100"],[1,"mb-3"],[1,"text-muted"],[1,"mt-1","mb-0"],[1,"fs-10","text-muted"],[1,"d-flex","align-items-center","justify-content-between","mt-1"],["color","success"],[3,"title"],[1,"container","py-3"],["expand","block","shape","round",3,"click"]],template:function(t,n){1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-refresher",3),e.bIt("ionRefresh",function(c){return n.onIonRefresher(c)}),e.nrm(9,"ion-refresher-content"),e.k0s(),e.DNE(10,y,41,30,"div",4),e.k0s(),e.DNE(11,$,6,3,"ion-footer",5)),2&t&&(e.R7$(3),e.Y8G("defaultHref",n.APP_ROUTE.USER),e.R7$(2),e.JRh(e.bMT(6,4,"UserInfo")),e.R7$(5),e.Y8G("ngIf",n.user),e.R7$(),e.Y8G("ngIf",null==n.user?null:n.user.UserId))},dependencies:[v.bT,s.Jm,s.QW,s.ZB,s.W9,s.M0,s.eU,s.he,s.To,s.Ki,s.BC,s.ai,s.el,p.D9],styles:[".card-info[_ngcontent-%COMP%]{border-top-left-radius:1.5rem;border-top-right-radius:1.5rem}"]}),u})()}];let G=(()=>{var o;class u{}return(o=u).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[U.iI.forChild(N),U.iI]}),u})();var x=d(3890);let J=(()=>{var o;class u{}return(o=u).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[v.MD,b.YN,s.bv,G,x.x]}),u})()}}]);