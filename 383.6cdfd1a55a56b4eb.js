"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[383],{6154:(k,h,a)=>{a.r(h),a.d(h,{EditTrackPageModule:()=>r});var c=a(6895),l=a(433),u=a(650),d=a(1194),m=a(5381),s=a(4650);const g=[{path:"",component:m.i}];let t=(()=>{class e{}return e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[d.Bz.forChild(g),d.Bz]}),e})(),r=(()=>{class e{}return e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[c.ez,l.u5,u.Pc,t,l.UX]}),e})()},1468:(k,h,a)=>{a.d(h,{z:()=>m});var c=a(529),l=a(4004),u=a(4650),d=a(7151);let m=(()=>{class s{constructor(t,r){this.http=t,this.authService=r,this.url="http://localhost:3000/api"}searchSong(t,r,e){return this.http.get(`${this.url}/search/track/${encodeURI(t)}?offset=${r}&limit=${e}`).pipe((0,l.U)(i=>i.map(o=>{const T={id:o.album.id,name:o.album.name,artists:o.album.artists.map(n=>({id:n.id,name:n.name})),images:o.album.images.map(n=>({height:n.height,url:n.url,width:n.width})),release_date:o.album.release_date,release_date_precision:o.album.release_date_precision,total_tracks:o.album.total_tracks};return o.comments.map(n=>({author:n.author,comment:n.comment,rate:n.rate})),{_id:o._id,name:o.name,duration_ms:o.duration_ms,album:T,comments:[],userId:""}})))}createTracks(t){const r={headers:new c.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.post(`${this.url}/tracks`,{tracks:t},r)}createTrack(t){const r={headers:new c.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.post(`${this.url}/track`,t,r)}getTracks(){return this.http.get(`${this.url}/getTracks`)}getTrackById(t){return this.http.get(`${this.url}/tracks/${t}`)}addCommentToTrack(t,r){const e=`${this.url}/tracks/${t}/comments`,i=this.authService.getUserIdFromToken();return r.userId=i,this.http.post(e,r)}deleteTrack(t){const r={headers:new c.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.delete(`${this.url}/track/${t}`,r)}deleteComment(t,r){return this.http.delete(`${this.url}/tracks/${t}/comments/${r}`)}getTracksByArtist(t){return this.http.get(`${this.url}/tracks/searchArtistName/${t}`)}getTracksByName(t){return this.http.get(`${this.url}/tracks/searchTrackName/${t}`)}getTracksByDate(t){return this.http.get(`${this.url}/tracks/searchTrackDate/${t}`)}editTrack(t,r){const e={headers:new c.WM({"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`})};return this.http.put(`${this.url}/track/${t}`,r,e)}}return s.\u0275fac=function(t){return new(t||s)(u.LFG(c.eN),u.LFG(d.e))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);