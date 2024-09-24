"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6485],{6485:(b,p,a)=>{a.r(p),a.d(p,{BillInfoPageModule:()=>j});var u=a(177),v=a(9417),r=a(4742),h=a(7625),c=a(467),I=a(6116),P=a(6539),d=a(8517),B=a(8650),m=a(8833),t=a(4438),R=a(4842);function F(e,s){1&e&&(t.j41(0,"div",8),t.nrm(1,"img",9),t.j41(2,"div",10),t.EFF(3),t.nI1(4,"translate"),t.k0s()()),2&e&&(t.R7$(3),t.JRh(t.bMT(4,1,"DataNotFound")))}function C(e,s){if(1&e){const o=t.RV6();t.qex(0),t.j41(1,"div",11)(2,"div",12),t.bIt("click",function(n){const l=t.eBV(o).$implicit,g=t.XpG();return t.Njj(g.openDetail(n,l))}),t.j41(3,"div",13)(4,"b"),t.EFF(5),t.k0s(),t.j41(6,"ion-chip",14)(7,"ion-label"),t.EFF(8),t.k0s()()(),t.j41(9,"div",15)(10,"small",16),t.EFF(11),t.k0s(),t.j41(12,"span")(13,"b"),t.EFF(14),t.k0s(),t.j41(15,"small"),t.EFF(16),t.k0s()()()()(),t.bVm()}if(2&e){const o=s.$implicit,i=t.XpG();t.R7$(5),t.JRh(o.BillCode),t.R7$(),t.Y8G("color",i.getBillPercentColor(o)),t.R7$(2),t.SpI("",i.getBillPercent(o),"%"),t.R7$(3),t.JRh(i.APP_FUNC_FormatDate(o.CreatedDate)),t.R7$(3),t.SpI("",i.APP_FUNC_FormatMoney(o.AftertaxBillValue),"\u0111"),t.R7$(2),t.SpI(" /",i.APP_FUNC_FormatMoney(o.OrderValue),"\u0111")}}function _(e,s){if(1&e){const o=t.RV6();t.j41(0,"ion-infinite-scroll",17),t.bIt("ionInfinite",function(n){t.eBV(o);const l=t.XpG();return t.Njj(l.onIonInfinite(n))}),t.nrm(1,"ion-infinite-scroll-content"),t.k0s()}}const D=[{path:"",component:(()=>{var e;class s{constructor(i,n,l){this.router=i,this.loadingController=n,this.toastController=l,this.APP_ROUTE=m._,this.APP_FUNC_FormatMoney=d.xi,this.APP_FUNC_FormatDate=d.Rv,this.APP_FUNC_RoundNumber=d.Rw,this.paging={sortfield:null,sorttype:null,page:1,limit:20,loading:!1,active:!0},this.filter={},this.billInfos=[],this.limitLoad=0}openDetail(i,n){var l=this;return(0,c.A)(function*(){var g,f;l.router.navigateByUrl(m._.BILL_INFO_DETAIL.replace(":id",null!==(g=null===(f=n.BillId)||void 0===f?void 0:f.toString())&&void 0!==g?g:""))})()}ngOnInit(){var i=this;(0,c.A)(function*(){(yield(0,P.kU)())&&i.refreshData()})()}onIonRefresher(i){this.filter={},this.refreshData(()=>{i.target.complete()})}onIonInfinite(i){this.loadMore(()=>{i.target.complete()})}pushData(i){1==this.paging.page&&(this.billInfos.length=0),this.billInfos=this.billInfos.concat(i)}refreshData(i){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit(i)}loadMore(i){this.paging.page+=1,this.loadData_Paging_Limit(i)}searchChange(i){this.filter.search=i.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}sortChange(i,n){this.paging.sortfield=i||null,this.paging.sorttype=n||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}loadData_Paging_Limit(i){var n=this;return(0,c.A)(function*(){if(n.limitLoad>0)return void(i&&i());n.limitLoad=300;let l=setInterval(()=>{n.limitLoad-=100,n.limitLoad<=0&&(clearInterval(l),n.loadData_Paging(i))},100)})()}loadData_Paging(i){var n=this;return(0,c.A)(function*(){n.paging.loading=!0,(0,I.Yi)({loadingController:n.loadingController,params:{PageNumber:n.paging.page,PageSize:n.paging.limit},callback:l=>{var g;n.response=l,null!=l&&l.Succeeded?n.pushData(null!==(g=null==l?void 0:l.Data)&&void 0!==g?g:[]):(0,B.cX)(n.toastController,{},l).then(f=>f.present()),n.paging.loading=!1,n.paging.active=!(null==l||!l.HasNextPage),i&&i()}})})()}getBillPercent(i){var n,l;return(0,d.Rw)((null!==(n=i.AftertaxBillValue)&&void 0!==n?n:0)/(null!==(l=i.OrderValue)&&void 0!==l?l:1)*100,1)}getBillPercentColor(i){let n=this.getBillPercent(i);return n<1?"danger":n<10?"medium":n<80?"tertiary":n<=100?"success":"warning"}}return(e=s).\u0275fac=function(i){return new(i||e)(t.rXU(h.Ix),t.rXU(r.Xi),t.rXU(r.K_))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-bill-info"]],decls:15,vars:7,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container py-5 text-center",4,"ngIf"],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container","py-5","text-center"],["src","../../../assets/image/default/no-info.svg"],[1,"text-muted","mt-4"],[1,"col-12","col-lg-6","mb-3"],[1,"card-bill","cursor-pointer",3,"click"],[1,"d-flex","align-items-start","justify-content-between"],[1,"no-opacity",3,"color"],[1,"d-flex","align-items-end","justify-content-between","mt-2"],[1,"text-muted"],[3,"ionInfinite"]],template:function(i,n){1&i&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t.nrm(3,"ion-back-button",1),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.nI1(6,"translate"),t.k0s()()(),t.j41(7,"ion-content")(8,"ion-refresher",2),t.bIt("ionRefresh",function(g){return n.onIonRefresher(g)}),t.nrm(9,"ion-refresher-content"),t.k0s(),t.DNE(10,F,5,3,"div",3),t.j41(11,"div",4)(12,"div",5),t.DNE(13,C,17,6,"ng-container",6),t.k0s()(),t.DNE(14,_,2,0,"ion-infinite-scroll",7),t.k0s()),2&i&&(t.R7$(3),t.Y8G("defaultHref",n.APP_ROUTE.USER),t.R7$(2),t.JRh(t.bMT(6,5,"BillHistory")),t.R7$(5),t.Y8G("ngIf",n.response&&!n.billInfos.length),t.R7$(3),t.Y8G("ngForOf",n.billInfos),t.R7$(),t.Y8G("ngIf",n.paging.active))},dependencies:[u.Sq,u.bT,r.QW,r.ZB,r.W9,r.eU,r.Ax,r.Hp,r.he,r.To,r.Ki,r.BC,r.ai,r.el,R.D9],styles:[".card-bill[_ngcontent-%COMP%]{padding:1rem;border-radius:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast)}.card-bill[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{min-height:1.25rem;padding-top:.25rem;padding-bottom:.25rem}.card-bill[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;line-height:0}"]}),s})()}];let M=(()=>{var e;class s{}return(e=s).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[h.iI.forChild(D),h.iI]}),s})();var y=a(3890);let j=(()=>{var e;class s{}return(e=s).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[u.MD,v.YN,r.bv,M,y.x]}),s})()}}]);