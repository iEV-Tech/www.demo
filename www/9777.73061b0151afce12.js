"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9777],{9777:(f,p,t)=>{t.d(p,{x:()=>C});var m=t(467),s=t(8833),u=t(9864),o=t(4438),n=t(7625),_=t(4742),b=t(4842);let C=(()=>{var l;class h{constructor(r,a,c){var i;this.router=r,this.modalController=a,this.toastController=c,this.APP_ROUTE=s._,this.routerUrl=null===(i=r.url)||void 0===i?void 0:i.replace(/^\//,"").replace(/\/$/,"")}ngOnInit(){}presentModalBarcodeScanning(r){var a=this;return(0,m.A)(function*(){(0,u.V)({modalController:a.modalController,toastController:a.toastController})})()}navigateByUrl(r){var a=this;return(0,m.A)(function*(){a.router.navigateByUrl(r)})()}}return(l=h).\u0275fac=function(r){return new(r||l)(o.rXU(n.Ix),o.rXU(_.W3),o.rXU(_.K_))},l.\u0275cmp=o.VBU({type:l,selectors:[["app-footer-tabs"]],decls:27,vars:23,consts:[[1,"px-0"],[3,"click"],["src","../../assets/icon/ion-icon/home.svg"],["src","../../assets/icon/ion-icon/changing-location.svg"],[1,"btn-qrcode",3,"click"],["src","../../assets/icon/ion-icon/scan-qr.svg"],["src","../../assets/icon/ion-icon/charge.svg"],["src","../../assets/icon/ion-icon/person.svg"]],template:function(r,a){1&r&&(o.j41(0,"ion-footer")(1,"ion-tab-bar",0)(2,"ion-tab-button",1),o.bIt("click",function(){return a.navigateByUrl(a.APP_ROUTE.HOME)}),o.nrm(3,"ion-icon",2),o.j41(4,"ion-label"),o.EFF(5),o.nI1(6,"translate"),o.k0s()(),o.j41(7,"ion-tab-button",1),o.bIt("click",function(){return a.navigateByUrl(a.APP_ROUTE.MAP)}),o.nrm(8,"ion-icon",3),o.j41(9,"ion-label"),o.EFF(10),o.nI1(11,"translate"),o.k0s()(),o.j41(12,"ion-tab-button",4),o.bIt("click",function(i){return a.presentModalBarcodeScanning(i)}),o.nrm(13,"ion-icon",5),o.j41(14,"ion-label"),o.EFF(15),o.nI1(16,"translate"),o.k0s()(),o.j41(17,"ion-tab-button",1),o.bIt("click",function(){return a.navigateByUrl(a.APP_ROUTE.CHARGING_SESSION)}),o.nrm(18,"ion-icon",6),o.j41(19,"ion-label"),o.EFF(20),o.nI1(21,"translate"),o.k0s()(),o.j41(22,"ion-tab-button",1),o.bIt("click",function(){return a.navigateByUrl(a.APP_ROUTE.USER)}),o.nrm(23,"ion-icon",7),o.j41(24,"ion-label"),o.EFF(25),o.nI1(26,"translate"),o.k0s()()()()),2&r&&(o.R7$(2),o.HbH(a.routerUrl==a.APP_ROUTE.HOME?"tab-selected":""),o.R7$(3),o.JRh(o.bMT(6,13,"Home")),o.R7$(2),o.HbH(a.routerUrl==a.APP_ROUTE.MAP?"tab-selected":""),o.R7$(3),o.JRh(o.bMT(11,15,"Station")),o.R7$(5),o.JRh(o.bMT(16,17,"ChargerConnect")),o.R7$(2),o.HbH(a.routerUrl==a.APP_ROUTE.CHARGING_SESSION?"tab-selected":""),o.R7$(3),o.JRh(o.bMT(21,19,"Charger")),o.R7$(2),o.HbH(a.routerUrl==a.APP_ROUTE.USER?"tab-selected":""),o.R7$(3),o.JRh(o.bMT(26,21,"User")))},dependencies:[_.M0,_.iq,_.he,_.Jq,_.qW,b.D9],styles:["ion-footer[_ngcontent-%COMP%]{border:0;box-shadow:none}ion-footer[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]{height:6rem;align-items:flex-end;--border: 0;--ion-background-color: transparent;background:transparent url(bg-tab-bar.27b202ed56fd1593.png) top center/auto 100% no-repeat}ion-footer[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{max-width:none;height:auto;--padding-top: .5rem;--padding-end: 0;--padding-bottom: .5rem;--padding-start: 0;--color: var(--ion-color-medium);--background: transparent}ion-footer[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;margin:0}ion-footer[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{height:1rem;margin:.25rem 0 0;line-height:1rem;font-size:.625rem;font-family:Roboto Condensed,Roboto,Inter;font-weight:300;text-transform:uppercase}ion-footer[_ngcontent-%COMP%]   .btn-qrcode[_ngcontent-%COMP%]{align-items:flex-start}ion-footer[_ngcontent-%COMP%]   .btn-qrcode[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding:.5rem;margin:.5rem!important;border-radius:50%;color:#fff;background:#00a45f;box-shadow:0 0 0 .35rem #d6fee6}"]}),h})()},9864:(f,p,t)=>{t.d(p,{V:()=>h});var m=t(467),s=t(6013),u=t(5005),o=t(6539),n=t(8650),_=t(5083),b=t(4962);const l=function(){var e=(0,m.A)(function*(r){(yield r.modalController.create({component:u.I,showBackdrop:!1,cssClass:"ion-modal-scanning barcode-scanning-modal"})).present()});return function(a){return e.apply(this,arguments)}}(),h=e=>{(0,o.kU)().then(function(){var r=(0,m.A)(function*(a){a&&(e=>{["ios","android"].includes(_.Ii.getPlatform())?s.vi.isSupported().then(r=>{r.supported?s.vi.checkPermissions().then(a=>{"granted"==a.camera?e.success():"denied"==a.camera?e.setting("B\u1ea1n \u0111\xe3 t\u1eeb ch\u1ed1i cho ph\xe9p \u1ee9ng d\u1ee5ng m\u1edf Camera!"):"prompt"==a.camera||"prompt-with-rationale"==a.camera?s.vi.requestPermissions().then(c=>{"granted"==c.camera?e.success():"denied"==c.camera?e.setting("B\u1ea1n \u0111\xe3 t\u1eeb ch\u1ed1i cho ph\xe9p \u1ee9ng d\u1ee5ng m\u1edf Camera!"):e.warning("Something is wrong! [#1]")}).catch(c=>{e.warning("Something is wrong! [#2]")}):e.warning("limited"==a.camera?"Something is wrong! [#3]":"Something is wrong! [#5]")}).catch(a=>{e.warning("Something is wrong! [#4]")}):e.warning("Thi\u1ebft b\u1ecb kh\xf4ng h\u1ed7 tr\u1ee3 qu\xe9t m\xe3 QR")}):e.warning("Thi\u1ebft b\u1ecb kh\xf4ng h\u1ed7 tr\u1ee3 qu\xe9t m\xe3 QR")})({success:()=>{l({modalController:e.modalController})},error:c=>{(0,n.cX)(e.toastController,{color:"danger",message:c,duration:1e4}).then(i=>{i.onDidDismiss().then(P=>{l({modalController:e.modalController})}),i.present()})},warning:c=>{(0,n.cX)(e.toastController,{color:"warning",message:c,duration:600}).then(i=>{i.onDidDismiss().then(P=>{l({modalController:e.modalController})}),i.present()})},setting:c=>{e.toastController&&e.toastController.create({color:"medium",message:c,duration:1e4,animated:!0,buttons:[{side:"end",text:"C\xe0i \u0111\u1eb7t",handler:()=>{b.nW.open({optionAndroid:b.RC.ApplicationDetails,optionIOS:b.Vp.App})}},{side:"end",text:"B\u1ecf qua",handler:()=>{l({modalController:e.modalController})}}]}).then(i=>i.present())}})});return function(a){return r.apply(this,arguments)}}())}},4962:(f,p,t)=>{t.d(p,{RC:()=>s,Vp:()=>u,nW:()=>o});var m=t(5083),s=function(n){return n.Accessibility="accessibility",n.Account="account",n.AirplaneMode="airplane_mode",n.Apn="apn",n.ApplicationDetails="application_details",n.ApplicationDevelopment="application_development",n.Application="application",n.AppNotification="app_notification",n.BatteryOptimization="battery_optimization",n.Bluetooth="bluetooth",n.Captioning="captioning",n.Cast="cast",n.DataRoaming="data_roaming",n.Date="date",n.Display="display",n.Dream="dream",n.Home="home",n.Keyboard="keyboard",n.KeyboardSubType="keyboard_subtype",n.Locale="locale",n.Location="location",n.ManageApplications="manage_applications",n.ManageAllApplications="manage_all_applications",n.MemoryCard="memory_card",n.Network="network",n.NfcSharing="nfcsharing",n.NfcPayment="nfc_payment",n.NfcSettings="nfc_settings",n.Print="print",n.Privacy="privacy",n.QuickLaunch="quick_launch",n.Search="search",n.Security="security",n.Settings="settings",n.ShowRegulatoryInfo="show_regulatory_info",n.Sound="sound",n.Storage="storage",n.Sync="sync",n.Usage="usage",n.UserDictionary="user_dictionary",n.VoiceInput="voice_input",n.Wifi="wifi",n.WifiIp="wifi_ip",n.Wireless="wireless",n}(s||{}),u=function(n){return n.About="about",n.App="app",n.AutoLock="autoLock",n.Bluetooth="bluetooth",n.DateTime="dateTime",n.FaceTime="facetime",n.General="general",n.Keyboard="keyboard",n.ICloud="iCloud",n.ICloudStorageBackup="iCloudStorageBackup",n.International="international",n.LocationServices="locationServices",n.Music="music",n.Notes="notes",n.Notifications="notifications",n.Phone="phone",n.Photos="photos",n.ManagedConfigurationList="managedConfigurationList",n.Reset="reset",n.Ringtone="ringtone",n.Sounds="sounds",n.SoftwareUpdate="softwareUpdate",n.Store="store",n.Tracking="tracking",n.Wallpaper="wallpaper",n.WiFi="wifi",n.Tethering="tethering",n.DoNotDisturb="doNotDisturb",n.TouchIdPasscode="touchIdPasscode",n.ScreenTime="screenTime",n.Accessibility="accessibility",n}(u||{});const o=(0,m.F3)("NativeSettings",{web:()=>t.e(1709).then(t.bind(t,1709)).then(n=>new n.NativeSettingsWeb)})}}]);