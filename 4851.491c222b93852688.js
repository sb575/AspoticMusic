"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(O,b,s)=>{s.r(b),s.d(b,{HomePageModule:()=>T});var l=s(6895),p=s(433),o=s(650),m=s(1194),h=s(5861),g=s(8449),M=s(8391),t=s(4650),r=s(1468);function d(n,c){if(1&n&&(t.TgZ(0,"ion-card-subtitle"),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.xp6(1),t.Oqu(e.name)}}const _=function(n){return["/track-details",n]};function C(n,c){if(1&n&&(t.TgZ(0,"ion-col",14)(1,"div",15),t._UZ(2,"img",16),t.TgZ(3,"div",17)(4,"ion-card-title"),t._uU(5),t.qZA(),t.YNc(6,d,2,1,"ion-card-subtitle",18),t.TgZ(7,"ion-card-subtitle"),t._uU(8),t.qZA()()()()),2&n){const e=c.$implicit;t.xp6(2),t.Q6J("src",e.album.images[0].url,t.LSH)("routerLink",t.VKq(6,_,e._id)),t.xp6(3),t.Oqu(e.name),t.xp6(1),t.Q6J("ngForOf",e.album.artists),t.xp6(2),t.AsE("",e.album.name," (",e.album.release_date,")")}}const k=[{path:"",component:(()=>{class n{constructor(e,i,u,f){this.aspoticServ=e,this.router=i,this.modalController=u,this.toastController=f,this.searchTerm="",this.tracks=[],this.searchOption="name"}ngOnInit(){this.getTracks()}signIn(){var e=this;return(0,h.Z)(function*(){return yield(yield e.modalController.create({component:g.X})).present()})()}signUp(){var e=this;return(0,h.Z)(function*(){return yield(yield e.modalController.create({component:M.V})).present()})()}showError(e){var i=this;return(0,h.Z)(function*(){(yield i.toastController.create({message:e,duration:3e3,color:"danger",mode:"ios",cssClass:"custom-toast",position:"bottom"})).present()})()}showSuccessMessage(e){var i=this;return(0,h.Z)(function*(){(yield i.toastController.create({message:e,duration:3e3,color:"success",mode:"ios",cssClass:"custom-toast",position:"bottom"})).present()})()}dismiss(){this.modalController.dismiss()}getTracks(){this.aspoticServ.getTracks().subscribe(e=>{console.log(e),this.showSuccessMessage("Tracks obtained successfully"),this.dismiss(),this.tracks=e},e=>{console.error(e),this.showError("There was an error getting the tracks"),this.dismiss()})}searchTracks(){if(this.searchTerm)switch(this.searchOption){case"name":this.aspoticServ.getTracksByName(this.searchTerm).subscribe(e=>{this.tracks=e});break;case"artist":this.aspoticServ.getTracksByArtist(this.searchTerm).subscribe(e=>{this.tracks=e});break;case"date":this.aspoticServ.getTracksByDate(this.searchTerm).subscribe(e=>{this.tracks=e});break;default:this.aspoticServ.getTracks().subscribe(e=>{this.tracks=e})}else this.aspoticServ.getTracks().subscribe(e=>{this.tracks=e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.z),t.Y36(m.F0),t.Y36(o.IN),t.Y36(o.yF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:27,vars:3,consts:[[1,"ion-no-border"],[1,"custom-title"],["slot","end",1,"custom-btn",3,"click"],["slot","end",1,"custom-btn","add-margin-right",3,"click"],[1,"search-container"],[3,"ngModel","ngModelChange"],["value","name"],["value","artist"],["value","date"],["placeholder","Enter the name of the song","mode","ios",1,"custom",3,"ngModel","ngModelChange"],[1,"custom-btn",3,"click"],["id","container"],[1,"cards"],["size-lg","2","size-md","8","size-sm","4","size","12",4,"ngFor","ngForOf"],["size-lg","2","size-md","8","size-sm","4","size","12"],[1,"card"],[3,"src","routerLink"],[1,"title"],[4,"ngFor","ngForOf"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),t._uU(3,"ASPOTIC"),t.qZA(),t.TgZ(4,"ion-button",2),t.NdJ("click",function(){return i.signIn()}),t._uU(5," Sign In "),t.qZA(),t.TgZ(6,"ion-button",3),t.NdJ("click",function(){return i.signUp()}),t._uU(7," Sign Up "),t.qZA()()(),t.TgZ(8,"ion-content")(9,"div",4)(10,"ion-item")(11,"ion-label"),t._uU(12,"Search by:"),t.qZA(),t.TgZ(13,"ion-select",5),t.NdJ("ngModelChange",function(f){return i.searchOption=f}),t.TgZ(14,"ion-select-option",6),t._uU(15,"Name"),t.qZA(),t.TgZ(16,"ion-select-option",7),t._uU(17,"Artist"),t.qZA(),t.TgZ(18,"ion-select-option",8),t._uU(19,"Date"),t.qZA()()(),t.TgZ(20,"ion-searchbar",9),t.NdJ("ngModelChange",function(f){return i.searchTerm=f}),t.qZA(),t.TgZ(21,"ion-button",10),t.NdJ("click",function(){return i.searchTracks()}),t._uU(22,"Search"),t.qZA()(),t.TgZ(23,"div",11)(24,"ion-grid",12)(25,"ion-row"),t.YNc(26,C,9,8,"ion-col",13),t.qZA()()()()),2&e&&(t.xp6(13),t.Q6J("ngModel",i.searchOption),t.xp6(7),t.Q6J("ngModel",i.searchTerm),t.xp6(6),t.Q6J("ngForOf",i.tracks))},dependencies:[l.sg,p.JJ,p.On,o.YG,o.tO,o.Dq,o.wI,o.W2,o.jY,o.Gu,o.Ie,o.Q$,o.Nd,o.VI,o.t9,o.n0,o.wd,o.sr,o.QI,o.j9,o.YI,m.rH],styles:[".custom-title[_ngcontent-%COMP%]{color:#6e49f2}.cards[_ngcontent-%COMP%]{flex-wrap:wrap;flex-direction:row;justify-content:center;margin-bottom:20px}ion-card[_ngcontent-%COMP%]{width:150px;height:140px;margin:50px;position:relative}ion-card[_ngcontent-%COMP%]:hover   .overlayer[_ngcontent-%COMP%]{visibility:visible}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}ion-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;height:30px;text-align:center;justify-content:center;margin-top:180px}ion-card-title[_ngcontent-%COMP%]{font-size:medium;color:#fff;text-align:center;justify-content:center}ion-card-subtitle[_ngcontent-%COMP%]{font-size:small;color:#ccc;text-align:center;justify-content:center}ion-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{top:-175px;color:#000;position:relative;font-size:13px;text-decoration:none}ion-fab[_ngcontent-%COMP%]{position:fixed;bottom:16px;right:16px}ion-fab-button[_ngcontent-%COMP%]{font-size:16px}ion-icon[_ngcontent-%COMP%]{text-align:center}.center-btn[_ngcontent-%COMP%]{margin-right:15px}.card.selected[_ngcontent-%COMP%]{border:3px solid #858BFF;box-shadow:4px 4px 10px #858bff!important}.card[_ngcontent-%COMP%]{height:100%;border-radius:5%;background-color:#fff;padding-bottom:10px;margin:5px;margin-bottom:10px!important;cursor:pointer}img[_ngcontent-%COMP%]{border-radius:5%}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:25px}.page-btn-div[_ngcontent-%COMP%]{color:#000;float:left;padding:8px 16px;text-decoration:none;background-color:#ddd;border-radius:5px}.page-button[_ngcontent-%COMP%]{background-color:transparent;font-size:20px}ion-icon[_ngcontent-%COMP%]{color:#fff}ion-searchbar[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:10px}.custom-btn[_ngcontent-%COMP%], .custom-btn-add[_ngcontent-%COMP%]{--background: #858BFF;--color: white;--border-radius: 25px;text-transform:capitalize;margin-top:15px;margin-bottom:15px}.add-margin-right[_ngcontent-%COMP%]{margin-right:15px}ion-searchbar.custom[_ngcontent-%COMP%]{--background: #FFFFFF;--icon-color: #858BFF;--clear-button-color: #fff;--border-radius: 25px}ion-searchbar.ios.custom[_ngcontent-%COMP%]{--cancel-button-color: #858BFF}ion-searchbar.md.custom[_ngcontent-%COMP%]{--cancel-button-color: #fff}@media only screen and (max-width: 600px){.search-container[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.custom-btn[_ngcontent-%COMP%]{margin-top:10px;margin-left:10px}}@media only screen and (min-width: 601px){.search-container[_ngcontent-%COMP%]{flex-direction:row;align-items:center}.custom-btn[_ngcontent-%COMP%]{margin-right:15px}}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}ion-spinner[_ngcontent-%COMP%]{transform:scale(3)}"]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(k),m.Bz]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,p.u5,o.Pc,P]}),n})()},1468:(O,b,s)=>{s.d(b,{z:()=>h});var l=s(529),p=s(4004),o=s(4650),m=s(7151);let h=(()=>{class g{constructor(t,r){this.http=t,this.authService=r,this.url="http://localhost:3000/api"}searchSong(t,r,d){return this.http.get(`${this.url}/search/track/${encodeURI(t)}?offset=${r}&limit=${d}`).pipe((0,p.U)(_=>_.map(a=>{const k={id:a.album.id,name:a.album.name,artists:a.album.artists.map(n=>({id:n.id,name:n.name})),images:a.album.images.map(n=>({height:n.height,url:n.url,width:n.width})),release_date:a.album.release_date,release_date_precision:a.album.release_date_precision,total_tracks:a.album.total_tracks};return a.comments.map(n=>({author:n.author,comment:n.comment,rate:n.rate})),{_id:a._id,name:a.name,duration_ms:a.duration_ms,album:k,comments:[],userId:""}})))}createTracks(t){const r={headers:new l.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.post(`${this.url}/tracks`,{tracks:t},r)}createTrack(t){const r={headers:new l.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.post(`${this.url}/track`,t,r)}getTracks(){return this.http.get(`${this.url}/getTracks`)}getTrackById(t){return this.http.get(`${this.url}/tracks/${t}`)}addCommentToTrack(t,r){const d=`${this.url}/tracks/${t}/comments`,_=this.authService.getUserIdFromToken();return r.userId=_,this.http.post(d,r)}deleteTrack(t){const r={headers:new l.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.delete(`${this.url}/track/${t}`,r)}deleteComment(t,r){return this.http.delete(`${this.url}/tracks/${t}/comments/${r}`)}getTracksByArtist(t){return this.http.get(`${this.url}/tracks/searchArtistName/${t}`)}getTracksByName(t){return this.http.get(`${this.url}/tracks/searchTrackName/${t}`)}getTracksByDate(t){return this.http.get(`${this.url}/tracks/searchTrackDate/${t}`)}editTrack(t,r){const d={headers:new l.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.put(`${this.url}/track/${t}`,r,d)}}return g.\u0275fac=function(t){return new(t||g)(o.LFG(l.eN),o.LFG(m.e))},g.\u0275prov=o.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);