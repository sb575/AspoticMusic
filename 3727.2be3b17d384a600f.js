"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3727],{3727:(Q,f,c)=>{c.r(f),c.d(f,{Tab1PageModule:()=>j});var u=c(433),p=c(6895),P=c(581),m=c(1194),h=c(5861),b=c(6090),t=c(4650),C=c(7151),v=c(1468),s=c(650),T=c(4762);function y(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"ion-button",9),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.addSongs())}),t._UZ(1,"ion-icon",10),t._uU(2," Add tracks "),t.qZA()}}function I(n,i){1&n&&t._UZ(0,"ion-spinner",11)}function k(n,i){if(1&n&&(t.TgZ(0,"ion-card-subtitle"),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Oqu(e.name)}}function M(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"ion-col",14)(1,"div",15),t.NdJ("click",function(){const r=t.CHM(e).index,l=t.oxw(2);return t.KtG(l.onTrackSelected(r))}),t._UZ(2,"img",16),t.TgZ(3,"div",17)(4,"ion-card-title"),t._uU(5),t.qZA(),t.YNc(6,k,2,1,"ion-card-subtitle",18),t.TgZ(7,"ion-card-subtitle"),t._uU(8),t.qZA()()()()}if(2&n){const e=i.$implicit,a=i.index,o=t.oxw(2);t.xp6(1),t.ekj("selected",o.selectedTracks[a]),t.xp6(1),t.Q6J("src",e.album.images[0].url,t.LSH),t.xp6(3),t.Oqu(e.name),t.xp6(1),t.Q6J("ngForOf",e.album.artists),t.xp6(2),t.hij("(",e.album.release_date,")")}}function S(n,i){if(1&n&&(t.TgZ(0,"ion-grid",12)(1,"ion-row"),t.YNc(2,M,9,6,"ion-col",13),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.tracks)}}function w(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.prevPage())}),t._UZ(1,"ion-icon",23),t.qZA()}}function L(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.nextPage())}),t._UZ(1,"ion-icon",24),t.qZA()}}function O(n,i){if(1&n&&(t.TgZ(0,"div",19),t.YNc(1,w,2,0,"button",20),t.TgZ(2,"div",21),t._uU(3),t.qZA(),t.YNc(4,L,2,0,"button",20),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",1!==e.page),t.xp6(2),t.Oqu(e.page),t.xp6(1),t.Q6J("ngIf",e.page!==e.totalPages)}}const E=[{path:"",component:(()=>{class n{constructor(e,a,o,r,l){this.authService=e,this.aspoticServ=a,this.router=o,this.modalController=r,this.toastController=l,this.searchTerm="",this.showAddSongsButton=!1,this.tracks=[],this.offset=0,this.loading=!1,this.page=1,this.pageSize=20,this.totalPages=20,this.selectedTracks=[]}ngOnInit(){this.authService.getAuthToken().subscribe(e=>console.log(e),e=>console.error(e))}dismiss(){this.modalController.dismiss()}showError(e){var a=this;return(0,h.Z)(function*(){(yield a.toastController.create({message:e,duration:3e3,color:"danger",mode:"ios",cssClass:"custom-toast",position:"bottom"})).present()})()}showSuccessMessage(e){var a=this;return(0,h.Z)(function*(){(yield a.toastController.create({message:e,duration:3e3,color:"success",mode:"ios",cssClass:"custom-toast",position:"bottom"})).present()})()}setPage(e){this.page=e,this.doSearch()}getCurrentPage(){return this.offset/this.pageSize+1}prevPage(){this.page>1&&(this.page--,this.doSearch())}nextPage(){this.page<this.totalPages&&(this.page++,this.doSearch())}doSearch(){this.loading=!0,this.aspoticServ.searchSong(this.searchTerm,(this.page-1)*this.pageSize,this.pageSize).subscribe(a=>{this.tracks=a.map(o=>({_id:o._id,name:o.name,duration_ms:o.duration_ms,album:{id:o.album.id,name:o.album.name,release_date:o.album.release_date,release_date_precision:o.album.release_date_precision,total_tracks:o.album.total_tracks,artists:o.album.artists.map(r=>({id:r.id,name:r.name})),images:o.album.images.map(r=>({height:r.height,url:r.url,width:r.width}))},id:o.id,preview_url:o.preview_url,comments:[],userId:this.authService.getUserIdFromToken()})),console.log(this.tracks[0])}),this.loading=!1}onTrackSelected(e){this.selectedTracks[e]=!this.selectedTracks[e],this.showAddSongsButton=!this.selectedTracks.every(a=>!a)}addSongs(){var e=this;return(0,h.Z)(function*(){const a=e.tracks.filter((o,r)=>e.selectedTracks[r]);console.log(a);try{const o=yield b.b.getCurrentPosition(),r=o.coords.longitude,l=o.coords.latitude,d=o.coords.accuracy;for(let g of a)g.longitude=r,g.latitude=l,g.accuracy=d;e.aspoticServ.createTracks(a).subscribe(()=>{console.log("Tracks added successfully"),e.showSuccessMessage("Tracks added successfully"),e.dismiss(),e.selectedTracks=[],e.showAddSongsButton=!1},g=>{console.error(g),e.showError("There was a problem saving tracks"),e.dismiss(),e.selectedTracks=[],e.showAddSongsButton=!1})}catch(o){console.error(o),e.showError("There was a problem saving tracks"),e.dismiss()}})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.e),t.Y36(v.z),t.Y36(m.F0),t.Y36(s.IN),t.Y36(s.yF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tab1"]],decls:12,vars:6,consts:[[1,"search-container"],["placeholder","Enter the name of the song","mode","ios",1,"custom",3,"ngModel","ngModelChange","keyup.enter"],[1,"custom-btn",3,"disabled","click"],["class","custom-btn-add","slot","end",3,"click",4,"ngIf"],["id","container"],[1,"spinner-container"],["class","spinner-large","name","bubbles","slot","start","color","primary",4,"ngIf"],["class","cards",4,"ngIf"],["class","pagination",4,"ngIf"],["slot","end",1,"custom-btn-add",3,"click"],["slot","start","name","add-circle"],["name","bubbles","slot","start","color","primary",1,"spinner-large"],[1,"cards"],["size-lg","2","size-md","6","size-sm","4","size","6",4,"ngFor","ngForOf"],["size-lg","2","size-md","6","size-sm","4","size","6"],[1,"card",3,"click"],[3,"src"],[1,"title"],[4,"ngFor","ngForOf"],[1,"pagination"],["class","page-button",3,"click",4,"ngIf"],[1,"page-btn-div"],[1,"page-button",3,"click"],["name","chevron-back-outline"],["name","chevron-forward-outline"]],template:function(e,a){1&e&&(t._UZ(0,"app-explore-container"),t.TgZ(1,"ion-content")(2,"div",0)(3,"ion-searchbar",1),t.NdJ("ngModelChange",function(r){return a.searchTerm=r})("keyup.enter",function(){return a.doSearch()}),t.qZA(),t.TgZ(4,"ion-button",2),t.NdJ("click",function(){return a.doSearch()}),t._uU(5,"Search"),t.qZA(),t.YNc(6,y,3,0,"ion-button",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5),t.YNc(9,I,1,0,"ion-spinner",6),t.qZA(),t.YNc(10,S,3,1,"ion-grid",7),t.qZA(),t.YNc(11,O,5,3,"div",8),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngModel",a.searchTerm),t.xp6(1),t.Q6J("disabled",a.loading),t.xp6(2),t.Q6J("ngIf",a.showAddSongsButton),t.xp6(3),t.Q6J("ngIf",a.loading),t.xp6(1),t.Q6J("ngIf",!a.loading),t.xp6(1),t.Q6J("ngIf",a.tracks.length>0))},dependencies:[s.YG,s.tO,s.Dq,s.wI,s.W2,s.jY,s.gu,s.Nd,s.VI,s.PQ,s.j9,p.sg,p.O5,u.JJ,u.On,T.Z],styles:[".custom-title[_ngcontent-%COMP%]{color:#6e49f2}.cards[_ngcontent-%COMP%]{flex-wrap:wrap;flex-direction:row;justify-content:center;margin-bottom:20px}ion-card[_ngcontent-%COMP%]{width:150px;height:140px;margin:50px;position:relative}ion-card[_ngcontent-%COMP%]:hover   .overlayer[_ngcontent-%COMP%]{visibility:visible}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}ion-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;height:30px;text-align:center;justify-content:center;margin-top:180px}ion-card-title[_ngcontent-%COMP%]{font-size:medium;color:#000;text-align:center;justify-content:center}ion-card-subtitle[_ngcontent-%COMP%]{font-size:small;color:#737373;text-align:center;justify-content:center}ion-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{top:-175px;color:#000;position:relative;font-size:13px;text-decoration:none}ion-fab[_ngcontent-%COMP%]{position:fixed;bottom:16px;right:16px}ion-fab-button[_ngcontent-%COMP%]{font-size:16px}ion-icon[_ngcontent-%COMP%]{text-align:center}.center-btn[_ngcontent-%COMP%]{margin-right:15px}.card.selected[_ngcontent-%COMP%]{border:3px solid #858BFF;box-shadow:4px 4px 10px #858bff!important}.card[_ngcontent-%COMP%]{height:100%;position:relative;border-radius:5%;background-color:#fff;padding-bottom:10px;margin:5px;margin-bottom:10px!important;box-shadow:0 2px 10px #ccc!important;cursor:pointer}img[_ngcontent-%COMP%]{border-radius:5%}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:25px}.page-btn-div[_ngcontent-%COMP%]{color:#fff;float:left;padding:8px 16px;text-decoration:none;background-color:#858bff;border-radius:5px}.page-button[_ngcontent-%COMP%]{background-color:transparent;font-size:20px}ion-searchbar[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:10px}.custom-btn[_ngcontent-%COMP%]{--background: #858BFF;--color: white;--border-radius: 25px;text-transform:capitalize;margin-top:15px;margin-bottom:15px}.custom-btn-add[_ngcontent-%COMP%]{--background: #858BFF;--color: white;--border-radius: 25px;text-transform:capitalize;margin-top:15px;margin-bottom:15px}.add-margin-right[_ngcontent-%COMP%]{margin-right:15px}ion-searchbar.custom[_ngcontent-%COMP%]{--background: #ffffff;--icon-color: #858BFF;--border-radius: 25px}@media only screen and (max-width: 600px){.search-container[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.custom-btn[_ngcontent-%COMP%]{margin-top:10px;margin-left:10px}}@media only screen and (min-width: 601px){.search-container[_ngcontent-%COMP%]{flex-direction:row;align-items:center}.custom-btn[_ngcontent-%COMP%]{margin-right:15px}}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}ion-spinner[_ngcontent-%COMP%]{transform:scale(3)}.custom-floating-btn[_ngcontent-%COMP%]{width:auto;border-radius:4px;padding:0 8px;line-height:normal}.fab-text[_ngcontent-%COMP%]{margin-right:8px}"]}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(E),m.Bz]}),n})();class V{constructor(){this.change=new t.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(i){return null==i.id&&(i.id=this.DEFAULT_ID),this.instances[i.id]?this.updateInstance(i):(this.instances[i.id]=i,!0)}updateInstance(i){let e=!1;for(let a in this.instances[i.id])i[a]!==this.instances[i.id][a]&&(this.instances[i.id][a]=i[a],e=!0);return e}getCurrentPage(i){return this.instances[i]?this.instances[i].currentPage:1}setCurrentPage(i,e){if(this.instances[i]){let a=this.instances[i];e<=Math.ceil(a.totalItems/a.itemsPerPage)&&1<=e&&(this.instances[i].currentPage=e,this.change.emit(i))}}setTotalItems(i,e){this.instances[i]&&0<=e&&(this.instances[i].totalItems=e,this.change.emit(i))}setItemsPerPage(i,e){this.instances[i]&&(this.instances[i].itemsPerPage=e,this.change.emit(i))}getInstance(i=this.DEFAULT_ID){return this.instances[i]?this.clone(this.instances[i]):{}}clone(i){var e={};for(var a in i)i.hasOwnProperty(a)&&(e[a]=i[a]);return e}}let Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[V],imports:[[p.ez]]}),n})(),j=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Pc,p.ez,u.u5,P.e,A,Y]}),n})()}}]);