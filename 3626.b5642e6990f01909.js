"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3626],{3626:(F,g,c)=>{c.r(g),c.d(g,{TrackDetailsPageModule:()=>v});var d=c(6895),p=c(433),i=c(650),m=c(1194),s=c(5861),f=c(4133),h=c(5381),t=c(4650),_=c(1468),x=c(7151);function k(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"ion-toolbar")(1,"ion-buttons",4),t._UZ(2,"ion-back-button",5),t.qZA(),t.TgZ(3,"ion-title"),t._uU(4),t.qZA(),t.TgZ(5,"ion-button",6),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.openModal(r.trackId))}),t._uU(6," Add Comment "),t.qZA()()}if(2&o){const n=a.ngIf;t.xp6(4),t.hij(" ",n.name," ")}}function Z(o,a){if(1&o&&(t.TgZ(0,"ion-card-subtitle"),t._uU(1),t.qZA()),2&o){const n=a.$implicit;t.xp6(1),t.hij("Artist: ",n.name," ")}}function T(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"ion-card"),t._UZ(1,"img",7),t.TgZ(2,"ion-grid")(3,"ion-row",8)(4,"ion-col",9)(5,"ion-card-content")(6,"ion-card-title"),t._uU(7),t.qZA(),t.TgZ(8,"ion-card-subtitle"),t._uU(9),t.qZA(),t.TgZ(10,"ion-card-subtitle"),t._uU(11),t.qZA(),t.YNc(12,Z,2,1,"ion-card-subtitle",10),t.qZA()()()(),t.TgZ(13,"div",11)(14,"ion-button",12),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.editTrackModal(r.trackId))}),t._uU(15,"Edit track"),t.qZA()()()}if(2&o){const n=a.ngIf;t.xp6(1),t.s9C("src",n.album.images[0].url,t.LSH),t.xp6(6),t.Oqu(n.name),t.xp6(2),t.hij("Release date: ",n.album.release_date,""),t.xp6(2),t.hij("Album: ",n.album.name,""),t.xp6(1),t.Q6J("ngForOf",n.album.artists)}}function C(o,a){1&o&&(t.TgZ(0,"span",34),t._uU(1,"( "),t._UZ(2,"ion-icon",35),t._uU(3," Your comment) "),t.qZA())}function b(o,a){1&o&&t._UZ(0,"ion-icon",36)}function y(o,a){1&o&&t._UZ(0,"ion-icon",37)}function P(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"ion-card",13)(1,"ion-row")(2,"ion-col",14),t._UZ(3,"img",15),t.qZA(),t.TgZ(4,"ion-col")(5,"ion-card-content")(6,"ion-card-title",16),t._uU(7),t.TgZ(8,"span",17),t._uU(9),t.ALo(10,"date"),t.qZA(),t.YNc(11,C,4,0,"span",18),t.qZA(),t.TgZ(12,"div",19),t.YNc(13,b,1,0,"ion-icon",20),t.YNc(14,y,1,0,"ion-icon",21),t.qZA(),t.TgZ(15,"p",22),t._uU(16),t.qZA(),t.TgZ(17,"span",17),t._UZ(18,"ion-icon",23),t._uU(19),t.qZA(),t.TgZ(20,"div",24),t.NdJ("click",function(){const u=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.deleteComment(l.trackId,u._id))}),t.O4$(),t.TgZ(21,"svg",25),t._UZ(22,"g",26)(23,"g",27),t.TgZ(24,"g",28),t._UZ(25,"path",29)(26,"path",30)(27,"path",31)(28,"path",32)(29,"path",33),t.qZA()()()()()()()}if(2&o){const n=a.$implicit,e=t.oxw();t.xp6(7),t.hij("",n.author," "),t.xp6(2),t.Oqu(t.xi3(10,8,n.createdOn,"yyyy/MM/dd HH:mm")),t.xp6(2),t.Q6J("ngIf",n.userId===e.userIdLogged&&""!==e.userIdLogged),t.xp6(2),t.Q6J("ngForOf",e.getRatingArray(n.rating)),t.xp6(1),t.Q6J("ngForOf",e.getEmptyRatingArray(n.rating)),t.xp6(2),t.Oqu(n.comment),t.xp6(3),t.AsE(" ",n.latitude,", ",n.longitude,"")}}const w=[{path:"",component:(()=>{class o{constructor(n,e,r,u,l,O,A,U){this.platform=n,this.activateRoute=e,this.aspoticServ=r,this.modalController=u,this.authService=l,this.router=O,this.toastController=A,this.alertController=U,this.userId=""}ngOnInit(){this.activateRoute.params.subscribe(n=>{const e=n._id;this.trackId=e,this.track=this.aspoticServ.getTrackById(e),console.log(this.track)}),this.userIdLogged=this.authService.getUserIdFromToken(),this.userId&&this.authService.getUserIdFromToken(),this.authorComment=this.authService.getUsernameFromToken()}showError(n){var e=this;return(0,s.Z)(function*(){(yield e.toastController.create({message:n,duration:3e3,color:"danger",mode:"ios",cssClass:"custom-toast",position:"bottom"})).present()})()}showSuccessMessage(n){var e=this;return(0,s.Z)(function*(){(yield e.toastController.create({message:n,duration:3e3,color:"success",mode:"ios",cssClass:"custom-toast",position:"bottom"})).present()})()}dismiss(){this.modalController.dismiss()}openModal(n){var e=this;return(0,s.Z)(function*(){return yield(yield e.modalController.create({component:f.R,componentProps:{trackId:n}})).present()})()}editTrackModal(n){var e=this;return(0,s.Z)(function*(){return yield(yield e.modalController.create({component:h.i,componentProps:{trackId:n}})).present()})()}getRatingArray(n){return Array(n)}getEmptyRatingArray(n){return Array(5-n)}deleteComment(n,e){var r=this;return(0,s.Z)(function*(){(yield r.warn())&&(r.aspoticServ.deleteComment(n,e).subscribe(()=>{console.log("Comment deleted successfully"),r.showSuccessMessage("Comment deleted successfully"),r.dismiss(),r.platform.ready().then(()=>{window.location.reload()})},l=>{console.error(l),r.showError("There was a problem adding the comment"),r.dismiss()}),location)})()}warn(){var n=this;return(0,s.Z)(function*(){return new Promise(function(){var e=(0,s.Z)(function*(r){yield(yield n.alertController.create({header:"Delete comment",message:"Are you sure that you want to delete this comment?",buttons:[{text:"Cancel",role:"cancel",handler:()=>r(!1)},{text:"Delete",handler:()=>r(!0)}]})).present()});return function(r){return e.apply(this,arguments)}}())})()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(i.t4),t.Y36(m.gz),t.Y36(_.z),t.Y36(i.IN),t.Y36(x.e),t.Y36(m.F0),t.Y36(i.yF),t.Y36(i.Br))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-track-details"]],decls:11,vars:11,consts:[[3,"translucent"],[4,"ngIf"],[3,"fullscreen"],["class","comment-card",4,"ngFor","ngForOf"],["slot","start"],["defaultHref","/tabs/tab2"],["slot","end",1,"custom-btn",3,"click"],[1,"float-child-left","col-size",3,"src"],[1,"float-child-right"],[1,"info-col"],[4,"ngFor","ngForOf"],[1,"card-button"],[1,"custom-btn",3,"click"],[1,"comment-card"],["size","auto"],["src","https://www.shareicon.net/data/2016/05/26/771188_man_512x512.png",1,"custom-img"],[1,"comment-author"],[1,"date","text-black-50"],["class","comment-user",4,"ngIf"],[1,"comment-rating"],["name","star","color","warning",4,"ngFor","ngForOf"],["name","star-outline","color","warning",4,"ngFor","ngForOf"],[1,"comment-text"],["name","location"],[1,"card-delete-button","ion-float-end",3,"click"],["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","stroke","#f50000",1,"svg-icon"],["id","SVGRepo_bgCarrier","stroke-width","0"],["id","SVGRepo_tracerCarrier","stroke-linecap","round","stroke-linejoin","round"],["id","SVGRepo_iconCarrier"],["d","M10 11V17","stroke","#fe5858","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M14 11V17","stroke","#fe5858","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M4 7H20","stroke","#fe5858","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z","stroke","#fe5858","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z","stroke","#fe5858","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"comment-user"],["name","person"],["name","star","color","warning"],["name","star-outline","color","warning"]],template:function(n,e){if(1&n&&(t.TgZ(0,"ion-header",0),t.YNc(1,k,7,1,"ion-toolbar",1),t.ALo(2,"async"),t.qZA(),t.TgZ(3,"ion-content",2),t.YNc(4,T,16,5,"ion-card",1),t.ALo(5,"async"),t.TgZ(6,"ion-card-header")(7,"ion-label"),t._uU(8,"Comments"),t.qZA()(),t.YNc(9,P,30,11,"ion-card",3),t.ALo(10,"async"),t.qZA()),2&n){let r;t.Q6J("translucent",!0),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,5,e.track)),t.xp6(2),t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngIf",t.lcZ(5,7,e.track)),t.xp6(5),t.Q6J("ngForOf",null==(r=t.lcZ(10,9,e.track))?null:r.comments)}},dependencies:[d.sg,d.O5,i.oU,i.YG,i.Sm,i.PM,i.FN,i.Zi,i.tO,i.Dq,i.wI,i.W2,i.jY,i.Gu,i.gu,i.Q$,i.Nd,i.wd,i.sr,i.cs,d.Ov,d.uU],styles:["ion-card[_ngcontent-%COMP%]{border-radius:20px;background:#ffffff}.custom-btn[_ngcontent-%COMP%]{--background: #858BFF;--color: white;--border-radius: 25px;margin-left:10px;text-transform:capitalize;display:flex;justify-content:flex-end;align-items:flex-end;margin-right:15px}.float-container[_ngcontent-%COMP%]{position:relative;width:100%}.float-child-right[_ngcontent-%COMP%]{float:left}.float-child-left[_ngcontent-%COMP%]{float:left;margin-right:10px}.info-col[_ngcontent-%COMP%]{display:table;flex-direction:column}.card-button[_ngcontent-%COMP%]{display:table;margin-top:auto}@media only screen and (max-width: 600px){.col-size[_ngcontent-%COMP%]{width:100%;border-radius:10px;max-width:-moz-fit-content!important;max-width:fit-content!important}.card-button[_ngcontent-%COMP%]{width:100%}.float-child-right[_ngcontent-%COMP%]{float:left}}@media only screen and (min-width: 601px){.col-size[_ngcontent-%COMP%]{height:205px;border-radius:10px;max-width:-moz-fit-content!important;max-width:fit-content!important}.card-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:flex-end;margin-top:auto}}.date[_ngcontent-%COMP%]{font-size:12px;color:#a9a9a9;font-weight:400;padding-right:10px}.comment-user[_ngcontent-%COMP%]{display:inline-flex;font-size:12px;color:red;font-weight:400}.custom-img[_ngcontent-%COMP%]{width:45px!important;margin:10px!important;border-radius:200px!important}.comment-card[_ngcontent-%COMP%]{margin-bottom:10px}.comment-author[_ngcontent-%COMP%]{font-weight:700;font-size:16px;margin-bottom:5px}.comment-rating[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px}.comment-text[_ngcontent-%COMP%]{margin-bottom:10px}svg[_ngcontent-%COMP%]{width:20px;height:20px}.card-delete-button[_ngcontent-%COMP%]{border:1px solid #ff0000;display:flex;padding:.3em;width:auto;cursor:pointer;border-radius:50px;transition:.3s ease-in-out}.card-delete-button[_ngcontent-%COMP%]:hover{border:1px solid #ffcaa6;background-color:#ffcaa6}"]}),o})()}];let M=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(w),m.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,p.u5,i.Pc,M]}),o})()}}]);