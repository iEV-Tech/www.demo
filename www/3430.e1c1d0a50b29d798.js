"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3430],{3430:(N,C,c)=>{c.r(C),c.d(C,{ChargerConnectPageModule:()=>U});var y=c(177),f=c(9417),u=c(4742),v=c(7625),l=c(467),k=c(6539),F=c(8833),R=c(8650),M=c(6043),g=c(6013),P=c(5083);class G extends P.E_{constructor(){super(...arguments),this.ERROR_PICK_FILE_CANCELED="pickFiles canceled."}convertHeicToJpeg(r){var i=this;return(0,l.A)(function*(){throw i.unimplemented("Not implemented on web.")})()}pickFiles(r){var i=this;return(0,l.A)(function*(){const t=yield i.openFilePicker(r);if(!t)throw new Error(i.ERROR_PICK_FILE_CANCELED);const n={files:[]};for(const o of t){const a={blob:o,modifiedAt:o.lastModified,mimeType:i.getMimeTypeFromUrl(o),name:i.getNameFromUrl(o),path:void 0,size:i.getSizeFromUrl(o)};null!=r&&r.readData&&(a.data=yield i.getDataFromFile(o)),n.files.push(a)}return n})()}pickImages(r){var i=this;return(0,l.A)(function*(){return i.pickFiles(Object.assign({types:["image/*"]},r))})()}pickMedia(r){var i=this;return(0,l.A)(function*(){return i.pickFiles(Object.assign({types:["image/*","video/*"]},r))})()}pickVideos(r){var i=this;return(0,l.A)(function*(){return i.pickFiles(Object.assign({types:["video/*"]},r))})()}openFilePicker(r){var i=this;return(0,l.A)(function*(){var t;const n=(null===(t=null==r?void 0:r.types)||void 0===t?void 0:t.join(","))||"",o=void 0===(null==r?void 0:r.limit)?0:r.limit;return new Promise(a=>{let d=!1;const m=document.createElement("input");m.type="file",m.accept=n,m.multiple=0===o,m.addEventListener("change",()=>{d=!0;const h=Array.from(m.files||[]);a(h)},{once:!0}),window.addEventListener("focus",(0,l.A)(function*(){yield i.wait(1e3),!d&&a(void 0)}),{once:!0}),m.click()})})()}getDataFromFile(r){return(0,l.A)(function*(){return new Promise((i,t)=>{const n=new FileReader;n.readAsDataURL(r),n.onload=()=>{const d=("string"==typeof n.result?n.result:"").split("base64,")[1]||"";i(d)},n.onerror=o=>{t(o)}})})()}getNameFromUrl(r){return r.name}getMimeTypeFromUrl(r){return r.type}getSizeFromUrl(r){return r.size}wait(r){return(0,l.A)(function*(){return new Promise(i=>setTimeout(i,r))})()}}const I=(0,P.F3)("FilePicker",{web:()=>new G});var S=c(5005),e=c(4438),A=c(3656),j=c(4842);const $=["QrCodeRef"];function E(s,r){if(1&s&&(e.j41(0,"ion-card",15)(1,"ion-card-content")(2,"ion-item")(3,"ion-label",16),e.EFF(4,"Bytes"),e.k0s(),e.nrm(5,"ion-input",17),e.k0s(),e.j41(6,"ion-item")(7,"ion-label",16),e.EFF(8,"Corner Points"),e.k0s(),e.nrm(9,"ion-input",17),e.k0s(),e.j41(10,"ion-item")(11,"ion-label",16),e.EFF(12,"Display Value"),e.k0s(),e.nrm(13,"ion-input",17),e.k0s(),e.j41(14,"ion-item")(15,"ion-label",16),e.EFF(16,"Format"),e.k0s(),e.nrm(17,"ion-input",17),e.k0s(),e.j41(18,"ion-item")(19,"ion-label",16),e.EFF(20,"Raw Value"),e.k0s(),e.nrm(21,"ion-input",17),e.k0s(),e.j41(22,"ion-item")(23,"ion-label",16),e.EFF(24,"Value Type"),e.k0s(),e.nrm(25,"ion-input",17),e.k0s()()(),e.nrm(26,"hr")),2&s){const i=r.$implicit;e.R7$(5),e.Y8G("value",(null==i.bytes?null:i.bytes.toString())||""),e.R7$(4),e.Y8G("value",(null==i.cornerPoints?null:i.cornerPoints.toString())||""),e.R7$(4),e.Y8G("value",i.displayValue),e.R7$(4),e.Y8G("value",i.format),e.R7$(4),e.Y8G("value",i.rawValue),e.R7$(4),e.Y8G("value",i.valueType)}}const B=[{path:"",component:(()=>{var s;class r{constructor(t,n,o,a,d,m,h){var p;this.router=t,this.platform=n,this.loadingController=a,this.toastController=d,this.modalController=m,this.ngZone=h,this.APP_ROUTE=F._,this.barcodeFormat=g.Gi,this.lensFacing=g.Nn,this.formGroup=new f.J3({formats:new f.hs([]),lensFacing:new f.hs(g.Nn.Back),googleBarcodeScannerModuleInstallState:new f.hs(0),googleBarcodeScannerModuleInstallProgress:new f.hs(0)}),this.barcodes=[],this.isSupported=!1,this.isPermissionGranted=!1,this.QrCode=null!==(p=o.snapshot.params.code)&&void 0!==p?p:void 0}ngOnInit(){var t=this;(0,l.A)(function*(){(yield(0,k.kU)())&&t.refreshData()})()}refreshData(){var t=this;return(0,l.A)(function*(){t.QrCode?(0,M.j)({loadingController:t.loadingController,params:{QrCode:t.QrCode},callback:n=>{var o;t.response=n,null!=n&&n.Succeeded?(t.chargingConnector=n.Data,t.router.navigateByUrl(F._.CHARGING_CONNECTOR_DETAIL.replace(":qrcode",null!==(o=t.QrCode)&&void 0!==o?o:""))):(0,R.cX)(t.toastController,{},n).then(a=>a.present())}}):t.checkScan()})()}checkScan(){var t=this;return(0,l.A)(function*(){g.vi.isSupported().then(n=>{t.isSupported=n.supported}),g.vi.checkPermissions().then(n=>{t.isPermissionGranted="granted"===n.camera}),g.vi.removeAllListeners().then(()=>{g.vi.addListener("googleBarcodeScannerModuleInstallProgress",n=>{t.ngZone.run(()=>{console.log("googleBarcodeScannerModuleInstallProgress",n);const{state:o,progress:a}=n;t.formGroup.patchValue({googleBarcodeScannerModuleInstallState:o,googleBarcodeScannerModuleInstallProgress:a})})})})})()}startScan(){var t=this;return(0,l.A)(function*(){var n,o;const a=(null===(n=t.formGroup.get("formats"))||void 0===n?void 0:n.value)||[],d=(null===(o=t.formGroup.get("lensFacing"))||void 0===o?void 0:o.value)||g.Nn.Back,m=yield t.modalController.create({component:S.I,componentProps:{formats:a,lensFacing:d},cssClass:"barcode-scanning-modal",showBackdrop:!1});m.onDidDismiss().then(h=>{var p;const b=null===(p=h.data)||void 0===p?void 0:p.barcode;b&&(t.barcodes=[b])}),m.present()})()}readBarcodeFromImage(){var t=this;return(0,l.A)(function*(){var n,o;const{files:a}=yield I.pickImages({limit:1}),d=null===(n=a[0])||void 0===n?void 0:n.path;if(!d)return;const m=(null===(o=t.formGroup.get("formats"))||void 0===o?void 0:o.value)||[],{barcodes:h}=yield g.vi.readBarcodesFromImage({path:d,formats:m});t.barcodes=h})()}scan(){var t=this;return(0,l.A)(function*(){var n;const o=(null===(n=t.formGroup.get("formats"))||void 0===n?void 0:n.value)||[],{barcodes:a}=yield g.vi.scan({formats:o});t.barcodes=a})()}openSettings(){return(0,l.A)(function*(){yield g.vi.openSettings()})()}installGoogleBarcodeScannerModule(){return(0,l.A)(function*(){yield g.vi.installGoogleBarcodeScannerModule()})()}requestPermissions(){return(0,l.A)(function*(){yield g.vi.requestPermissions()})()}changeQrCode(t){var n=this;return(0,l.A)(function*(){n.QrCode=t.detail.value})()}keyupQrCode(t){var n=this;return(0,l.A)(function*(){var o,a;13!=t.keyCode?null===(o=n.QrCodeRef)||void 0===o||o.setValue(null===(a=t.target)||void 0===a?void 0:a.value):n.submitQrCode()})()}submitQrCode(t){var n=this;return(0,l.A)(function*(){n.QrCode&&n.refreshData()})()}}return(s=r).\u0275fac=function(t){return new(t||s)(e.rXU(v.Ix),e.rXU(A.OD),e.rXU(v.nX),e.rXU(u.Xi),e.rXU(u.K_),e.rXU(u.W3),e.rXU(e.SKi))},s.\u0275cmp=e.VBU({type:s,selectors:[["app-charger-connect"]],viewQuery:function(t,n){if(1&t&&e.GBs($,5),2&t){let o;e.mGM(o=e.lsd())&&(n.QrCodeRef=o.first)}},decls:32,vars:15,consts:[["QrCodeInpRef",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],[1,"h-100","d-flex","flex-column","container","container-connect","py-3"],[1,"flex-grow-1"],["expand","block","shape","round",3,"click","disabled"],["slot","start","src","../../../assets/icon/ion-icon/scan-qr.svg"],[1,"mt-3"],[1,"row","mt-3"],[1,"col"],["mode","ios","lines","none"],["type","number",3,"ionChange","keyup","placeholder"],[1,"col-auto","pl-0"],["mode","ios",3,"click"],["name","chevron-forward-outline"],[1,"ion-no-margin"],["position","fixed"],["type","text","readonly","",3,"value"]],template:function(t,n){if(1&t){const o=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"div",3)(9,"div",4),e.Z7z(10,E,27,6,null,null,e.fX1),e.k0s(),e.j41(12,"div")(13,"ion-button",5),e.bIt("click",function(){return e.eBV(o),e.Njj(n.startScan())}),e.nrm(14,"ion-icon",6),e.j41(15,"ion-label"),e.EFF(16),e.nI1(17,"translate"),e.k0s()()(),e.j41(18,"div",7)(19,"ion-button",5),e.bIt("click",function(){return e.eBV(o),e.Njj(n.scan())}),e.j41(20,"ion-label"),e.EFF(21),e.nI1(22,"translate"),e.k0s()()(),e.j41(23,"div",8)(24,"div",9)(25,"ion-item",10)(26,"ion-input",11,0),e.nI1(28,"translate"),e.bIt("ionChange",function(d){return e.eBV(o),e.Njj(n.changeQrCode(d))})("keyup",function(d){return e.eBV(o),e.Njj(n.keyupQrCode(d))}),e.k0s()()(),e.j41(29,"div",12)(30,"ion-button",13),e.bIt("click",function(d){return e.eBV(o),e.Njj(n.submitQrCode(d))}),e.nrm(31,"ion-icon",14),e.k0s()()()()()}2&t&&(e.R7$(3),e.Y8G("defaultHref",n.APP_ROUTE.CHARGING_SESSION),e.R7$(2),e.JRh(e.bMT(6,7,"ChargerConnect")),e.R7$(5),e.Dyx(n.barcodes),e.R7$(3),e.Y8G("disabled",!n.isSupported),e.R7$(3),e.JRh(e.bMT(17,9,"ScanQR")),e.R7$(3),e.Y8G("disabled",!n.isSupported),e.R7$(2),e.SpI("",e.bMT(22,11,"ScanQR")," - Google Len"),e.R7$(5),e.FS9("placeholder",e.bMT(28,13,"EnterConnectorCode")))},dependencies:[u.Jm,u.QW,u.b_,u.I9,u.W9,u.eU,u.iq,u.$w,u.uz,u.he,u.BC,u.ai,u.su,u.Gw,u.el,j.D9],styles:[".container-connect[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--min-height: 3rem;--border-radius: 1.5rem}.container-connect[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:0;min-height:3rem;min-width:3rem;--border-radius: 1.5rem;--padding-top: 0;--padding-start: 0;--padding-end: 0;--padding-bottom: 0}.container-connect[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}h4[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.25rem;vertical-align:middle;font-size:1.4rem}"]}),r})()}];let T=(()=>{var s;class r{}return(s=r).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[v.iI.forChild(B),v.iI]}),r})();var Q=c(3890),O=c(5788);let U=(()=>{var s;class r{}return(s=r).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[y.MD,f.YN,u.bv,T,Q.x,O.Ph]}),r})()}}]);