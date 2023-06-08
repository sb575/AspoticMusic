"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9196],{9196:(Y,p,s)=>{s.r(p),s.d(p,{Tab2PageModule:()=>A});var i=s(650),u=s(6895),g=s(433),m=s(581),d=s(1194),l=s(5861),h=s(783),t=s(4650),f=s(1468),_=s(7151),b=s(4762);function x(n,r){1&n&&(t.TgZ(0,"h1",16),t._uU(1,"Recommendation list"),t.qZA())}function T(n,r){if(1&n&&(t.TgZ(0,"ion-card-subtitle"),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Oqu(e.name)}}function k(n,r){if(1&n&&(t.TgZ(0,"swiper-slide")(1,"div"),t._UZ(2,"img",23),t.TgZ(3,"div",24)(4,"ion-card-subtitle"),t._uU(5),t.qZA(),t.YNc(6,T,2,1,"ion-card-subtitle",22),t.qZA()()()),2&n){const e=r.$implicit;t.xp6(2),t.Q6J("src",e.album.images[0].url,t.LSH),t.xp6(3),t.Oqu(e.name),t.xp6(1),t.Q6J("ngForOf",e.album.artists)}}function P(n,r){if(1&n&&(t.TgZ(0,"div",20)(1,"swiper-container",21),t.YNc(2,k,7,3,"swiper-slide",22),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.recomendations)}}function C(n,r){if(1&n&&(t.TgZ(0,"ion-card-subtitle"),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Oqu(e.name)}}function M(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",31),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.deleteTrack(a))}),t.O4$(),t.TgZ(1,"svg",32),t._UZ(2,"g",33)(3,"g",34),t.TgZ(4,"g",35),t._UZ(5,"path",36)(6,"path",37)(7,"path",38)(8,"path",39)(9,"path",40),t.qZA()()()}}const O=function(n){return["/track-details",n]};function v(n,r){if(1&n&&(t.TgZ(0,"ion-col",26)(1,"div",27),t._UZ(2,"img",28),t.TgZ(3,"div",24)(4,"ion-card-title"),t._uU(5),t.qZA(),t.YNc(6,C,2,1,"ion-card-subtitle",22),t.TgZ(7,"ion-card-subtitle"),t._uU(8),t.qZA(),t._UZ(9,"div",29),t.qZA(),t.YNc(10,M,10,0,"div",30),t.qZA()()),2&n){const e=r.$implicit,o=t.oxw(2);t.xp6(2),t.Q6J("src",e.album.images[0].url,t.LSH)("routerLink",t.VKq(7,O,e._id)),t.xp6(3),t.Oqu(e.name),t.xp6(1),t.Q6J("ngForOf",e.album.artists),t.xp6(2),t.AsE("",e.album.name," (",e.album.release_date,")"),t.xp6(2),t.Q6J("ngIf",e.userId===o.userIdLogged&&""!==o.userIdLogged)}}function w(n,r){if(1&n&&(t.TgZ(0,"ion-row"),t.YNc(1,v,11,9,"ion-col",25),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.tracks)}}function Z(n,r){1&n&&(t.TgZ(0,"div",41),t._UZ(1,"img",42),t.TgZ(2,"p",43),t._uU(3,"The track list is empty..."),t.qZA()())}const y=[{path:"",component:(()=>{class n{constructor(e,o,a,c,S,F,J,z,U){this.platform=e,this.navCtrl=o,this.aspoticServ=a,this.authService=c,this.router=S,this.formBuilder=F,this.modalController=J,this.toastController=z,this.alertController=U,this.tracks=[],this.userId="",this.searchTerm="",this.searchOption="name",this.recomendations=[]}openModal(){var e=this;return(0,l.Z)(function*(){return yield(yield e.modalController.create({component:h.V})).present()})()}onSignOutClick(){const e=this.authService.getUserIdFromToken();this.authService.signOut(e).subscribe(()=>{localStorage.removeItem("token"),this.router.navigate(["/home"])})}ngOnInit(){this.userIdLogged=this.authService.getUserIdFromToken(),this.userId&&this.authService.getUserIdFromToken(),this.getTracks()}getRecomendations(){this.aspoticServ.getRecomendations().subscribe(e=>{this.recomendations=e},e=>{console.error(e)})}getTracks(){this.aspoticServ.getTracks().subscribe(e=>{this.tracks=e},e=>{this.showError("There was an error getting the tracks"),this.dismiss()})}searchTracks(){if(this.searchTerm)switch(this.searchOption){case"name":this.aspoticServ.getTracksByName(this.searchTerm).subscribe(e=>{this.tracks=e});break;case"artist":this.aspoticServ.getTracksByArtist(this.searchTerm).subscribe(e=>{this.tracks=e});break;case"date":this.aspoticServ.getTracksByDate(this.searchTerm).subscribe(e=>{this.tracks=e});break;default:this.aspoticServ.getTracks().subscribe(e=>{this.tracks=e})}else this.aspoticServ.getTracks().subscribe(e=>{this.tracks=e})}showError(e){var o=this;return(0,l.Z)(function*(){(yield o.toastController.create({message:e,duration:3e3,color:"danger",mode:"ios",cssClass:"custom-toast",position:"bottom"})).present()})()}showSuccessMessage(e){var o=this;return(0,l.Z)(function*(){(yield o.toastController.create({message:e,duration:3e3,color:"success",mode:"ios",cssClass:"custom-toast",position:"bottom"})).present()})()}dismiss(){this.modalController.dismiss()}deleteTrack(e){var o=this;return(0,l.Z)(function*(){(yield o.warn())&&o.aspoticServ.deleteTrack(e._id).subscribe(()=>{o.tracks=o.tracks.filter(c=>c!==e),console.log("Track deleted successfully"),o.showSuccessMessage("Track deleted successfully"),o.dismiss()},c=>{console.error("There was an error deleting the track",c),o.showError("There was an error deleting the track"),o.dismiss()})})()}warn(){var e=this;return(0,l.Z)(function*(){return new Promise(function(){var o=(0,l.Z)(function*(a){yield(yield e.alertController.create({header:"Delete track",message:"Are you sure that you want to delete this track?",buttons:[{text:"Cancel",role:"cancel",handler:()=>a(!1)},{text:"Delete",handler:()=>a(!0)}]})).present()});return function(a){return o.apply(this,arguments)}}())})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.t4),t.Y36(i.SH),t.Y36(f.z),t.Y36(_.e),t.Y36(d.F0),t.Y36(g.qu),t.Y36(i.IN),t.Y36(i.yF),t.Y36(i.Br))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tab2"]],decls:29,vars:7,consts:[[3,"fullscreen"],[3,"ngModel","ngModelChange"],["value","name"],["value","artist"],["value","date"],[1,"search-container"],["placeholder","Search track","mode","ios",1,"custom",3,"ngModel","ngModelChange","keyup.enter"],[1,"search-buttons"],[1,"custom-btn",3,"keyup.enter","click"],[1,"custom-btn",3,"click"],["id","container"],["class","title-sections",4,"ngIf"],["class","swiper",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],[1,"custom-floating-btn","floating-button",3,"click"],["name","add"],[1,"title-sections"],[1,"cards"],[4,"ngIf","ngIfElse"],["noTracksIllustration",""],[1,"swiper"],["space-between","8","slides-per-view","4"],[4,"ngFor","ngForOf"],[3,"src"],[1,"title"],["size-lg","2","size-md","6","size-sm","4","size","6",4,"ngFor","ngForOf"],["size-lg","2","size-md","6","size-sm","4","size","6"],[1,"card"],[3,"src","routerLink"],[1,"button-space"],["class","button-container card-delete-button ion-float-end",3,"click",4,"ngIf"],[1,"button-container","card-delete-button","ion-float-end",3,"click"],["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","stroke","#f50000",1,"svg-icon"],["id","SVGRepo_bgCarrier","stroke-width","0"],["id","SVGRepo_tracerCarrier","stroke-linecap","round","stroke-linejoin","round"],["id","SVGRepo_iconCarrier"],["d","M10 11V17","stroke","#fe5858","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M14 11V17","stroke","#fe5858","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M4 7H20","stroke","#fe5858","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z","stroke","#fe5858","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z","stroke","#fe5858","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"empty-tracks"],["src","../../assets/icon/emptyList.png","alt","Empty Tracks Illustration",1,"empty-image"],[1,"empty-text"]],template:function(e,o){if(1&e&&(t._UZ(0,"app-explore-container"),t.TgZ(1,"ion-content",0)(2,"ion-item")(3,"ion-segment",1),t.NdJ("ngModelChange",function(c){return o.searchOption=c}),t.TgZ(4,"ion-segment-button",2),t._uU(5," Search by name "),t.qZA(),t.TgZ(6,"ion-segment-button",3),t._uU(7," artist "),t.qZA(),t.TgZ(8,"ion-segment-button",4),t._uU(9," date "),t.qZA()()(),t.TgZ(10,"div",5)(11,"ion-searchbar",6),t.NdJ("ngModelChange",function(c){return o.searchTerm=c})("keyup.enter",function(){return o.searchTracks()}),t.qZA(),t.TgZ(12,"div",7)(13,"ion-button",8),t.NdJ("keyup.enter",function(){return o.searchTracks()})("click",function(){return o.searchTracks()}),t._uU(14,"Search"),t.qZA(),t.TgZ(15,"ion-button",9),t.NdJ("click",function(){return o.getRecomendations()}),t._uU(16,"Get recommendations"),t.qZA()()(),t.TgZ(17,"div",10),t.YNc(18,x,2,0,"h1",11),t.YNc(19,P,3,1,"div",12),t.TgZ(20,"ion-fab",13)(21,"ion-fab-button",14),t.NdJ("click",function(){return o.openModal()}),t._UZ(22,"ion-icon",15),t.qZA()(),t.TgZ(23,"h1",16),t._uU(24,"Track list"),t.qZA(),t.TgZ(25,"ion-grid",17),t.YNc(26,w,2,1,"ion-row",18),t.qZA(),t.YNc(27,Z,4,0,"ng-template",null,19,t.W1O),t.qZA()()),2&e){const a=t.MAs(28);t.xp6(1),t.Q6J("fullscreen",!0),t.xp6(2),t.Q6J("ngModel",o.searchOption),t.xp6(8),t.Q6J("ngModel",o.searchTerm),t.xp6(7),t.Q6J("ngIf",0!==o.recomendations.length),t.xp6(1),t.Q6J("ngIf",0!==o.recomendations.length),t.xp6(7),t.Q6J("ngIf",o.tracks.length>0)("ngIfElse",a)}},dependencies:[i.YG,i.tO,i.Dq,i.wI,i.W2,i.IJ,i.W4,i.jY,i.gu,i.Ie,i.Nd,i.VI,i.cJ,i.GO,i.QI,i.j9,i.YI,u.sg,u.O5,g.JJ,g.On,b.Z,d.rH],styles:[".custom-title[_ngcontent-%COMP%]{color:#6e49f2}.cards[_ngcontent-%COMP%]{flex-wrap:wrap;flex-direction:row;justify-content:center;margin-bottom:20px}ion-card[_ngcontent-%COMP%]{width:150px;height:140px;margin:50px;position:relative}ion-card[_ngcontent-%COMP%]:hover   .overlayer[_ngcontent-%COMP%]{visibility:visible}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}ion-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;height:30px;text-align:center;justify-content:center;margin-top:180px}ion-card-title[_ngcontent-%COMP%]{font-size:medium;color:#000;text-align:center;justify-content:center}ion-card-subtitle[_ngcontent-%COMP%]{font-size:small;color:#737373;text-align:center;justify-content:center}ion-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{top:-175px;color:#000;position:relative;font-size:13px;text-decoration:none}ion-fab[_ngcontent-%COMP%]{position:fixed;bottom:16px;right:16px}ion-fab-button[_ngcontent-%COMP%]{font-size:16px}ion-icon[_ngcontent-%COMP%]{text-align:center}.center-btn[_ngcontent-%COMP%]{margin-right:15px}.card.selected[_ngcontent-%COMP%]{border:3px solid #858BFF;box-shadow:4px 4px 10px #858bff!important}.card[_ngcontent-%COMP%]{height:100%;position:relative;border-radius:5%;background-color:#fff;padding-bottom:10px;margin:5px;margin-bottom:10px!important;box-shadow:0 2px 10px #ccc!important;cursor:pointer}img[_ngcontent-%COMP%]{border-radius:5%}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:25px}.page-btn-div[_ngcontent-%COMP%]{color:#fff;float:left;padding:8px 16px;text-decoration:none;background-color:#858bff;border-radius:5px}.page-button[_ngcontent-%COMP%]{background-color:transparent;font-size:20px}ion-searchbar[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:10px}.custom-btn[_ngcontent-%COMP%], .custom-btn-add[_ngcontent-%COMP%]{--background: #858BFF;--color: white;--border-radius: 25px;text-transform:capitalize;margin-top:15px;margin-bottom:15px}.add-margin-right[_ngcontent-%COMP%]{margin-right:15px}ion-searchbar.custom[_ngcontent-%COMP%]{--background: #ffffff;--icon-color: #858BFF;--border-radius: 25px}@media only screen and (max-width: 600px){.search-container[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.custom-btn[_ngcontent-%COMP%]{margin-top:10px;margin-left:10px}}@media only screen and (min-width: 601px){.search-container[_ngcontent-%COMP%]{flex-direction:row;align-items:center}.custom-btn[_ngcontent-%COMP%]{margin-right:15px}}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}ion-spinner[_ngcontent-%COMP%]{transform:scale(3)}ion-segment-button[_ngcontent-%COMP%]{text-transform:capitalize;color:#858bff;--border-radius: 0px}ion-segment-button.segment-button-checked[_ngcontent-%COMP%]{background-color:#858bff!important;color:#fff!important;--color-checked: var(--ion-color-primary, #858BFF) !important;--indicator-box-shadow: none;--indicator-color: var(--color-checked);--indicator-height: 0px}ion-title[_ngcontent-%COMP%]{font-size:20px;font-weight:bolder}.floating-button[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;z-index:9999}@media (max-width: 576px){.floating-button[_ngcontent-%COMP%]{bottom:10px;right:10px}}.custom-floating-btn[_ngcontent-%COMP%]{--background: #858BFF;--color: white;text-transform:capitalize;margin:15px}.button-space[_ngcontent-%COMP%]{height:20px}.button-container[_ngcontent-%COMP%]{position:absolute;bottom:0;margin-bottom:5px;left:50%;transform:translate(-50%)}svg[_ngcontent-%COMP%]{width:20px;height:20px}.card-delete-button[_ngcontent-%COMP%]{border:1px solid #ff0000;display:flex;padding:.3em;width:auto;cursor:pointer;border-radius:50px;transition:.3s ease-in-out}.card-delete-button[_ngcontent-%COMP%]:hover{border:1px solid #ffcaa6;background-color:#ffcaa6}.swiper[_ngcontent-%COMP%]{margin:16px}swiper-container[_ngcontent-%COMP%]{width:100%;height:100%}swiper-slide[_ngcontent-%COMP%]{text-align:center;display:flex;justify-content:center;align-items:center}swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;object-fit:cover}.title-sections[_ngcontent-%COMP%]{margin:16px;font-size:large;color:#000;font-weight:700}.search-input[_ngcontent-%COMP%]{flex-grow:1;margin-right:10px}.search-buttons[_ngcontent-%COMP%]{display:flex;gap:10px}.empty-tracks[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.empty-image[_ngcontent-%COMP%]{width:100px;height:auto}.empty-text[_ngcontent-%COMP%]{margin-top:10px;text-align:center;margin-left:20%;margin-right:20%;color:#858bff;font-weight:700}"]}),n})()}];let I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(y),d.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[i.Pc,u.ez,g.u5,m.e,I]}),n})()}}]);