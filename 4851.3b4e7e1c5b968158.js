"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(O,b,i)=>{i.r(b),i.d(b,{HomePageModule:()=>C});var g=i(6895),p=i(433),o=i(650),d=i(1194),h=i(5861),u=i(8449),k=i(8391),t=i(4650),r=i(1468);function m(n,c){if(1&n&&(t.TgZ(0,"ion-card-subtitle"),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.xp6(1),t.Oqu(e.name)}}const f=function(n){return["/track-details",n]};function x(n,c){if(1&n&&(t.TgZ(0,"ion-col",14)(1,"div",15),t._UZ(2,"img",16),t.TgZ(3,"div",17)(4,"ion-card-title"),t._uU(5),t.qZA(),t.YNc(6,m,2,1,"ion-card-subtitle",18),t.TgZ(7,"ion-card-subtitle"),t._uU(8),t.qZA()()()()),2&n){const e=c.$implicit;t.xp6(2),t.Q6J("src",e.album.images[0].url,t.LSH)("routerLink",t.VKq(6,f,e._id)),t.xp6(3),t.Oqu(e.name),t.xp6(1),t.Q6J("ngForOf",e.album.artists),t.xp6(2),t.AsE("",e.album.name," (",e.album.release_date,")")}}const M=[{path:"",component:(()=>{class n{constructor(e,a,l,_){this.aspoticServ=e,this.router=a,this.modalController=l,this.toastController=_,this.searchTerm="",this.tracks=[],this.searchOption="name"}ngOnInit(){this.getTracks()}signIn(){var e=this;return(0,h.Z)(function*(){return yield(yield e.modalController.create({component:u.X})).present()})()}signUp(){var e=this;return(0,h.Z)(function*(){return yield(yield e.modalController.create({component:k.V})).present()})()}showError(e){var a=this;return(0,h.Z)(function*(){(yield a.toastController.create({message:e,duration:3e3,color:"danger",mode:"ios",cssClass:"custom-toast",position:"bottom"})).present()})()}showSuccessMessage(e){var a=this;return(0,h.Z)(function*(){(yield a.toastController.create({message:e,duration:3e3,color:"success",mode:"ios",cssClass:"custom-toast",position:"bottom"})).present()})()}dismiss(){this.modalController.dismiss()}getTracks(){this.aspoticServ.getTracks().subscribe(e=>{console.log(e),this.showSuccessMessage("Tracks obtained successfully"),this.dismiss(),this.tracks=e},e=>{console.error(e),this.showError("There was an error getting the tracks"),this.dismiss()})}searchTracks(){if(this.searchTerm)switch(this.searchOption){case"name":this.aspoticServ.getTracksByName(this.searchTerm).subscribe(e=>{this.tracks=e});break;case"artist":this.aspoticServ.getTracksByArtist(this.searchTerm).subscribe(e=>{this.tracks=e});break;case"date":this.aspoticServ.getTracksByDate(this.searchTerm).subscribe(e=>{this.tracks=e});break;default:this.aspoticServ.getTracks().subscribe(e=>{this.tracks=e})}else this.aspoticServ.getTracks().subscribe(e=>{this.tracks=e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.z),t.Y36(d.F0),t.Y36(o.IN),t.Y36(o.yF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:25,vars:3,consts:[[1,"ion-no-border"],[1,"custom-title"],["slot","end",1,"custom-btn",3,"click"],["slot","end",1,"custom-btn","add-margin-right",3,"click"],[3,"ngModel","ngModelChange"],["value","name"],["value","artist"],["value","date"],[1,"search-container"],["placeholder","Enter the name of the song","mode","ios",1,"custom",3,"ngModel","ngModelChange","keyup.enter"],[1,"custom-btn",3,"click"],["id","container"],[1,"cards"],["size-lg","2","size-md","8","size-sm","4","size","12",4,"ngFor","ngForOf"],["size-lg","2","size-md","8","size-sm","4","size","12"],[1,"card"],[3,"src","routerLink"],[1,"title"],[4,"ngFor","ngForOf"]],template:function(e,a){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),t._uU(3,"ASPOTIC"),t.qZA(),t.TgZ(4,"ion-button",2),t.NdJ("click",function(){return a.signIn()}),t._uU(5," Sign In "),t.qZA(),t.TgZ(6,"ion-button",3),t.NdJ("click",function(){return a.signUp()}),t._uU(7," Sign Up "),t.qZA()()(),t.TgZ(8,"ion-content")(9,"ion-item")(10,"ion-segment",4),t.NdJ("ngModelChange",function(_){return a.searchOption=_}),t.TgZ(11,"ion-segment-button",5),t._uU(12," Search by name "),t.qZA(),t.TgZ(13,"ion-segment-button",6),t._uU(14," artist "),t.qZA(),t.TgZ(15,"ion-segment-button",7),t._uU(16," date "),t.qZA()()(),t.TgZ(17,"div",8)(18,"ion-searchbar",9),t.NdJ("ngModelChange",function(_){return a.searchTerm=_})("keyup.enter",function(){return a.searchTracks()}),t.qZA(),t.TgZ(19,"ion-button",10),t.NdJ("click",function(){return a.searchTracks()}),t._uU(20,"Search"),t.qZA()(),t.TgZ(21,"div",11)(22,"ion-grid",12)(23,"ion-row"),t.YNc(24,x,9,8,"ion-col",13),t.qZA()()()()),2&e&&(t.xp6(10),t.Q6J("ngModel",a.searchOption),t.xp6(8),t.Q6J("ngModel",a.searchTerm),t.xp6(6),t.Q6J("ngForOf",a.tracks))},dependencies:[g.sg,p.JJ,p.On,o.YG,o.tO,o.Dq,o.wI,o.W2,o.jY,o.Gu,o.Ie,o.Nd,o.VI,o.cJ,o.GO,o.wd,o.sr,o.QI,o.j9,o.YI,d.rH],styles:[".custom-title[_ngcontent-%COMP%]{color:#6e49f2}.cards[_ngcontent-%COMP%]{flex-wrap:wrap;flex-direction:row;justify-content:center;margin-bottom:20px}ion-card[_ngcontent-%COMP%]{width:150px;height:140px;margin:50px;position:relative}ion-card[_ngcontent-%COMP%]:hover   .overlayer[_ngcontent-%COMP%]{visibility:visible}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}ion-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;height:30px;text-align:center;justify-content:center;margin-top:180px}ion-card-title[_ngcontent-%COMP%]{font-size:medium;color:#000;text-align:center;justify-content:center}ion-card-subtitle[_ngcontent-%COMP%]{font-size:small;color:#737373;text-align:center;justify-content:center}ion-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{top:-175px;color:#000;position:relative;font-size:13px;text-decoration:none}ion-fab[_ngcontent-%COMP%]{position:fixed;bottom:16px;right:16px}ion-fab-button[_ngcontent-%COMP%]{font-size:16px}ion-icon[_ngcontent-%COMP%]{text-align:center}.center-btn[_ngcontent-%COMP%]{margin-right:15px}.card.selected[_ngcontent-%COMP%]{border:3px solid #858BFF;box-shadow:4px 4px 10px #858bff!important}.card[_ngcontent-%COMP%]{height:100%;position:relative;border-radius:5%;background-color:#fff;padding-bottom:10px;margin:5px;margin-bottom:10px!important;box-shadow:0 2px 10px #ccc!important;cursor:pointer}img[_ngcontent-%COMP%]{border-radius:5%}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:25px}.page-btn-div[_ngcontent-%COMP%]{color:#fff;float:left;padding:8px 16px;text-decoration:none;background-color:#858bff;border-radius:5px}.page-button[_ngcontent-%COMP%]{background-color:transparent;font-size:20px}ion-searchbar[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:10px}.custom-btn[_ngcontent-%COMP%], .custom-btn-add[_ngcontent-%COMP%]{--background: #858BFF;--color: white;--border-radius: 25px;text-transform:capitalize;margin-top:15px;margin-bottom:15px}.add-margin-right[_ngcontent-%COMP%]{margin-right:15px}ion-searchbar.custom[_ngcontent-%COMP%]{--background: #ffffff;--icon-color: #858BFF;--border-radius: 25px}@media only screen and (max-width: 600px){.search-container[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.custom-btn[_ngcontent-%COMP%]{margin-top:10px;margin-left:10px}}@media only screen and (min-width: 601px){.search-container[_ngcontent-%COMP%]{flex-direction:row;align-items:center}.custom-btn[_ngcontent-%COMP%]{margin-right:15px}}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}ion-spinner[_ngcontent-%COMP%]{transform:scale(3)}ion-segment-button[_ngcontent-%COMP%]{text-transform:capitalize;color:#858bff;--border-radius: 0px}ion-segment-button.segment-button-checked[_ngcontent-%COMP%]{background-color:#858bff!important;color:#fff!important;--color-checked: var(--ion-color-primary, #858BFF) !important;--indicator-box-shadow: none;--indicator-color: var(--color-checked);--indicator-height: 0px}ion-title[_ngcontent-%COMP%]{font-size:20px;font-weight:bolder}.floating-button[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;z-index:9999}@media (max-width: 576px){.floating-button[_ngcontent-%COMP%]{bottom:10px;right:10px}}.custom-floating-btn[_ngcontent-%COMP%]{--background: #858BFF;--color: white;text-transform:capitalize;margin:15px}.button-space[_ngcontent-%COMP%]{height:20px}.button-container[_ngcontent-%COMP%]{position:absolute;bottom:0;margin-bottom:5px;left:50%;transform:translate(-50%)}"]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(M),d.Bz]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,p.u5,o.Pc,P]}),n})()},1468:(O,b,i)=>{i.d(b,{z:()=>h});var g=i(529),p=i(4004),o=i(4650),d=i(7151);let h=(()=>{class u{constructor(t,r){this.http=t,this.authService=r,this.url="http://webapps.mycnsamastertaii.tech:3000/api"}searchSong(t,r,m){return this.http.get(`${this.url}/search/track/${encodeURI(t)}?offset=${r}&limit=${m}`).pipe((0,p.U)(f=>f.map(s=>{const M={id:s.album.id,name:s.album.name,artists:s.album.artists.map(n=>({id:n.id,name:n.name})),images:s.album.images.map(n=>({height:n.height,url:n.url,width:n.width})),release_date:s.album.release_date,release_date_precision:s.album.release_date_precision,total_tracks:s.album.total_tracks};return s.comments.map(n=>({author:n.author,comment:n.comment,rate:n.rate})),{_id:s._id,name:s.name,duration_ms:s.duration_ms,album:M,comments:[],userId:""}})))}getRecomendations(){return this.http.get(`${this.url}/recomendations`)}createTracks(t){const r={headers:new g.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.post(`${this.url}/tracks`,{tracks:t},r)}createTrack(t){const r={headers:new g.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.post(`${this.url}/track`,t,r)}getTracks(){return this.http.get(`${this.url}/getTracks`)}getTrackById(t){return this.http.get(`${this.url}/tracks/${t}`)}addCommentToTrack(t,r){const m=`${this.url}/tracks/${t}/comments`,f=this.authService.getUserIdFromToken();return r.userId=f,this.http.post(m,r)}deleteTrack(t){const r={headers:new g.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.delete(`${this.url}/track/${t}`,r)}deleteComment(t,r){return this.http.delete(`${this.url}/tracks/${t}/comments/${r}`)}getTracksByArtist(t){return this.http.get(`${this.url}/tracks/searchArtistName/${t}`)}getTracksByName(t){return this.http.get(`${this.url}/tracks/searchTrackName/${t}`)}getTracksByDate(t){return this.http.get(`${this.url}/tracks/searchTrackDate/${t}`)}editTrack(t,r){const m={headers:new g.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.put(`${this.url}/track/${t}`,r,m)}}return u.\u0275fac=function(t){return new(t||u)(o.LFG(g.eN),o.LFG(d.e))},u.\u0275prov=o.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);