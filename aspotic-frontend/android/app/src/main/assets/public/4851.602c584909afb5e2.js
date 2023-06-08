"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(O,x,i)=>{i.r(x),i.d(x,{HomePageModule:()=>y});var m=i(6895),_=i(433),o=i(650),d=i(1194),h=i(5861),u=i(8449),k=i(8391),t=i(4650),r=i(1468);function p(n,l){if(1&n&&(t.TgZ(0,"ion-card-subtitle"),t._uU(1),t.qZA()),2&n){const e=l.$implicit;t.xp6(1),t.Oqu(e.name)}}const f=function(n){return["/track-details",n]};function P(n,l){if(1&n&&(t.TgZ(0,"ion-col",18)(1,"div",19),t._UZ(2,"img",20),t.TgZ(3,"div",21)(4,"ion-card-title"),t._uU(5),t.qZA(),t.YNc(6,p,2,1,"ion-card-subtitle",22),t.TgZ(7,"ion-card-subtitle"),t._uU(8),t.qZA(),t._UZ(9,"div",23),t.qZA()()()),2&n){const e=l.$implicit;t.xp6(2),t.Q6J("src",e.album.images[0].url,t.LSH)("routerLink",t.VKq(6,f,e._id)),t.xp6(3),t.Oqu(e.name),t.xp6(1),t.Q6J("ngForOf",e.album.artists),t.xp6(2),t.AsE("",e.album.name," (",e.album.release_date,")")}}function s(n,l){if(1&n&&(t.TgZ(0,"ion-row"),t.YNc(1,P,10,8,"ion-col",17),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.tracks)}}function M(n,l){1&n&&(t.TgZ(0,"div",24),t._UZ(1,"img",25),t.TgZ(2,"p",26),t._uU(3,"The track list is empty..."),t.qZA()())}const C=[{path:"",component:(()=>{class n{constructor(e,a,g,b){this.aspoticServ=e,this.router=a,this.modalController=g,this.toastController=b,this.searchTerm="",this.tracks=[],this.searchOption="name"}ngOnInit(){this.getTracks()}signIn(){var e=this;return(0,h.Z)(function*(){return yield(yield e.modalController.create({component:u.X})).present()})()}signUp(){var e=this;return(0,h.Z)(function*(){return yield(yield e.modalController.create({component:k.V})).present()})()}showError(e){var a=this;return(0,h.Z)(function*(){(yield a.toastController.create({message:e,duration:3e3,color:"danger",mode:"ios",cssClass:"custom-toast",position:"bottom"})).present()})()}showSuccessMessage(e){var a=this;return(0,h.Z)(function*(){(yield a.toastController.create({message:e,duration:3e3,color:"success",mode:"ios",cssClass:"custom-toast",position:"bottom"})).present()})()}dismiss(){this.modalController.dismiss()}getTracks(){this.aspoticServ.getTracks().subscribe(e=>{console.log(e),this.showSuccessMessage("Tracks obtained successfully"),this.dismiss(),this.tracks=e},e=>{console.error(e),this.showError("There was an error getting the tracks"),this.dismiss()})}searchTracks(){if(this.searchTerm)switch(this.searchOption){case"name":this.aspoticServ.getTracksByName(this.searchTerm).subscribe(e=>{this.tracks=e});break;case"artist":this.aspoticServ.getTracksByArtist(this.searchTerm).subscribe(e=>{this.tracks=e});break;case"date":this.aspoticServ.getTracksByDate(this.searchTerm).subscribe(e=>{this.tracks=e});break;default:this.aspoticServ.getTracks().subscribe(e=>{this.tracks=e})}else this.aspoticServ.getTracks().subscribe(e=>{this.tracks=e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.z),t.Y36(d.F0),t.Y36(o.IN),t.Y36(o.yF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:29,vars:4,consts:[[1,"ion-no-border"],[1,"logo-container"],[1,"custom-title"],["id","signIn","slot","end",1,"custom-btn",3,"click"],["id","signUp","slot","end",1,"custom-btn","add-margin-right",3,"click"],[3,"ngModel","ngModelChange"],["value","name"],["value","artist"],["value","date"],[1,"search-container"],["placeholder","Enter the name of the song","mode","ios",1,"custom",3,"ngModel","ngModelChange","keyup.enter"],[1,"custom-btn",3,"click"],["id","container"],[1,"title-sections"],[1,"cards"],[4,"ngIf","ngIfElse"],["noTracksIllustration",""],["size-lg","2","size-md","6","size-sm","4","size","6",4,"ngFor","ngForOf"],["size-lg","2","size-md","6","size-sm","4","size","6"],[1,"card"],[3,"src","routerLink"],[1,"title"],[4,"ngFor","ngForOf"],[1,"button-space"],[1,"empty-tracks"],["src","../../assets/icon/emptyListTracks.png","alt","Empty Tracks Illustration",1,"empty-image"],[1,"empty-text"]],template:function(e,a){if(1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"div",1)(3,"ion-title",2),t._uU(4,"ASPOTIC"),t.qZA()(),t.TgZ(5,"ion-button",3),t.NdJ("click",function(){return a.signIn()}),t._uU(6," Sign In "),t.qZA(),t.TgZ(7,"ion-button",4),t.NdJ("click",function(){return a.signUp()}),t._uU(8," Sign Up "),t.qZA()()(),t.TgZ(9,"ion-content")(10,"ion-item")(11,"ion-segment",5),t.NdJ("ngModelChange",function(b){return a.searchOption=b}),t.TgZ(12,"ion-segment-button",6),t._uU(13," Search by name "),t.qZA(),t.TgZ(14,"ion-segment-button",7),t._uU(15," artist "),t.qZA(),t.TgZ(16,"ion-segment-button",8),t._uU(17," date "),t.qZA()()(),t.TgZ(18,"div",9)(19,"ion-searchbar",10),t.NdJ("ngModelChange",function(b){return a.searchTerm=b})("keyup.enter",function(){return a.searchTracks()}),t.qZA(),t.TgZ(20,"ion-button",11),t.NdJ("click",function(){return a.searchTracks()}),t._uU(21,"Search"),t.qZA()(),t.TgZ(22,"div",12)(23,"h1",13),t._uU(24,"Track list"),t.qZA(),t.TgZ(25,"ion-grid",14),t.YNc(26,s,2,1,"ion-row",15),t.qZA(),t.YNc(27,M,4,0,"ng-template",null,16,t.W1O),t.qZA()()),2&e){const g=t.MAs(28);t.xp6(11),t.Q6J("ngModel",a.searchOption),t.xp6(8),t.Q6J("ngModel",a.searchTerm),t.xp6(7),t.Q6J("ngIf",a.tracks.length>0)("ngIfElse",g)}},dependencies:[m.sg,m.O5,_.JJ,_.On,o.YG,o.tO,o.Dq,o.wI,o.W2,o.jY,o.Gu,o.Ie,o.Nd,o.VI,o.cJ,o.GO,o.wd,o.sr,o.QI,o.j9,o.YI,d.rH],styles:[".custom-title[_ngcontent-%COMP%]{color:#6e49f2}.cards[_ngcontent-%COMP%]{flex-wrap:wrap;flex-direction:row;justify-content:center;margin-bottom:20px}ion-card[_ngcontent-%COMP%]{width:150px;height:140px;margin:50px;position:relative}ion-card[_ngcontent-%COMP%]:hover   .overlayer[_ngcontent-%COMP%]{visibility:visible}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}ion-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;height:30px;text-align:center;justify-content:center;margin-top:180px}ion-card-title[_ngcontent-%COMP%]{font-size:medium;color:#000;text-align:center;justify-content:center}ion-card-subtitle[_ngcontent-%COMP%]{font-size:small;color:#737373;text-align:center;justify-content:center}ion-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{top:-175px;color:#000;position:relative;font-size:13px;text-decoration:none}ion-fab[_ngcontent-%COMP%]{position:fixed;bottom:16px;right:16px}ion-fab-button[_ngcontent-%COMP%]{font-size:16px}ion-icon[_ngcontent-%COMP%]{text-align:center}.center-btn[_ngcontent-%COMP%]{margin-right:15px}.card.selected[_ngcontent-%COMP%]{border:3px solid #858BFF;box-shadow:4px 4px 10px #858bff!important}.card[_ngcontent-%COMP%]{height:100%;position:relative;border-radius:5%;background-color:#fff;padding-bottom:10px;margin:5px;margin-bottom:10px!important;box-shadow:0 2px 10px #ccc!important;cursor:pointer}img[_ngcontent-%COMP%]{border-radius:5%}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:25px}.page-btn-div[_ngcontent-%COMP%]{color:#fff;float:left;padding:8px 16px;text-decoration:none;background-color:#858bff;border-radius:5px}.page-button[_ngcontent-%COMP%]{background-color:transparent;font-size:20px}ion-searchbar[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:10px}.custom-btn[_ngcontent-%COMP%], .custom-btn-add[_ngcontent-%COMP%]{--background: #858BFF;--color: white;--border-radius: 25px;text-transform:capitalize;margin-top:15px;margin-bottom:15px}.add-margin-right[_ngcontent-%COMP%]{margin-right:15px}ion-searchbar.custom[_ngcontent-%COMP%]{--background: #ffffff;--icon-color: #858BFF;--border-radius: 25px}@media only screen and (max-width: 600px){.search-container[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.custom-btn[_ngcontent-%COMP%]{margin-top:10px;margin-left:10px}}@media only screen and (min-width: 601px){.search-container[_ngcontent-%COMP%]{flex-direction:row;align-items:center}.custom-btn[_ngcontent-%COMP%]{margin-right:15px}}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}ion-spinner[_ngcontent-%COMP%]{transform:scale(3)}ion-segment-button[_ngcontent-%COMP%]{text-transform:capitalize;color:#858bff;--border-radius: 0px}ion-segment-button.segment-button-checked[_ngcontent-%COMP%]{background-color:#858bff!important;color:#fff!important;--color-checked: var(--ion-color-primary, #858BFF) !important;--indicator-box-shadow: none;--indicator-color: var(--color-checked);--indicator-height: 0px}ion-title[_ngcontent-%COMP%]{font-size:20px;font-weight:bolder}.floating-button[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;z-index:9999}@media (max-width: 576px){.floating-button[_ngcontent-%COMP%]{bottom:10px;right:10px}}.custom-floating-btn[_ngcontent-%COMP%]{--background: #858BFF;--color: white;text-transform:capitalize;margin:15px}.button-space[_ngcontent-%COMP%]{height:20px}.button-container[_ngcontent-%COMP%]{position:absolute;bottom:0;margin-bottom:5px;left:50%;transform:translate(-50%)}.logo-container[_ngcontent-%COMP%]{display:flex;align-items:center}.logo-image[_ngcontent-%COMP%]{height:30px;margin-right:10px}.title-sections[_ngcontent-%COMP%]{margin:16px;font-size:large;color:#000;font-weight:700}.empty-tracks[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.empty-image[_ngcontent-%COMP%]{width:100px;height:auto}.empty-text[_ngcontent-%COMP%]{margin-top:10px;font-weight:700}"]}),n})()}];let c=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(C),d.Bz]}),n})(),y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,_.u5,o.Pc,c]}),n})()},1468:(O,x,i)=>{i.d(x,{z:()=>h});var m=i(529),_=i(4004),o=i(4650),d=i(7151);let h=(()=>{class u{constructor(t,r){this.http=t,this.authService=r,this.url="http://webapps.mycnsamastertaii.tech:3000/api"}searchSong(t,r,p){return this.http.get(`${this.url}/search/track/${encodeURI(t)}?offset=${r}&limit=${p}`).pipe((0,_.U)(f=>f.map(s=>{const M={id:s.album.id,name:s.album.name,artists:s.album.artists.map(c=>({id:c.id,name:c.name})),images:s.album.images.map(c=>({height:c.height,url:c.url,width:c.width})),release_date:s.album.release_date,release_date_precision:s.album.release_date_precision,total_tracks:s.album.total_tracks};return s.comments.map(c=>({author:c.author,comment:c.comment,rate:c.rate})),{_id:s._id,name:s.name,duration_ms:s.duration_ms,album:M,comments:[],userId:"",id:s.id,preview_url:s.preview_url}})))}getRecomendations(){return this.http.get(`${this.url}/recomendations`)}createTracks(t){const r={headers:new m.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.post(`${this.url}/tracks`,{tracks:t},r)}createTrack(t){const r={headers:new m.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.post(`${this.url}/track`,t,r)}getTracks(){return this.http.get(`${this.url}/getTracks`)}getTrackById(t){return this.http.get(`${this.url}/tracks/${t}`)}addCommentToTrack(t,r){const p=`${this.url}/tracks/${t}/comments`,f=this.authService.getUserIdFromToken();return r.userId=f,this.http.post(p,r)}deleteTrack(t){const r={headers:new m.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.delete(`${this.url}/track/${t}`,r)}deleteComment(t,r){return this.http.delete(`${this.url}/tracks/${t}/comments/${r}`)}getTracksByArtist(t){return this.http.get(`${this.url}/tracks/searchArtistName/${t}`)}getTracksByName(t){return this.http.get(`${this.url}/tracks/searchTrackName/${t}`)}getTracksByDate(t){return this.http.get(`${this.url}/tracks/searchTrackDate/${t}`)}editTrack(t,r){const p={headers:new m.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.put(`${this.url}/track/${t}`,r,p)}}return u.\u0275fac=function(t){return new(t||u)(o.LFG(m.eN),o.LFG(d.e))},u.\u0275prov=o.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);