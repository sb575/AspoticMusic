"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7151],{7151:(An,Ze,U)=>{U.d(Ze,{e:()=>Sn});var pe=U(529),_e=U(8505),Y=U(5861),j=U(6881),Je=U(2090),Ye=U(4859);const ge="firebasestorage.googleapis.com",me="storageBucket";class d extends Je.ZR{constructor(e,n,s=0){super(Q(e),`Firebase Storage: ${n} (${Q(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Q(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.message=this.customData.serverResponse?`${this._baseMessage}\n${this.customData.serverResponse}`:this._baseMessage}}var h=(()=>{return(t=h||(h={})).UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment",h;var t})();function Q(t){return"storage/"+t}function te(t){return new d(h.INVALID_ARGUMENT,t)}function ke(){return new d(h.APP_DELETED,"The Firebase app was deleted.")}class T{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=T.makeFromUrl(e,n)}catch{return new T(e,"")}if(""===s.path)return s;throw function ut(t){return new d(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)",u=new RegExp("^gs://"+r+"(/(.*))?$","i");function l(b){b.path_=decodeURIComponent(b.path)}const f=n.replace(/[.]/g,"\\."),R=[{regex:u,indices:{bucket:1,path:3},postModify:function o(b){"/"===b.path.charAt(b.path.length-1)&&(b.path_=b.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${f}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:l},{regex:new RegExp(`^https?://${n===ge?"(?:storage.googleapis.com|storage.cloud.google.com)":n}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:l}];for(let b=0;b<R.length;b++){const M=R[b],B=M.regex.exec(e);if(B){let z=B[M.indices.path];z||(z=""),s=new T(B[M.indices.bucket],z),M.postModify(s);break}}if(null==s)throw function at(t){return new d(h.INVALID_URL,"Invalid URL '"+t+"'.")}(e);return s}}class pt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function se(t,e,n,s){if(s<e)throw te(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw te(`Invalid value for '${t}'. Expected ${n} or less.`)}var N=(()=>{return(t=N||(N={}))[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT",N;var t})();class Tt{constructor(e,n,s,r,o,i,u,a,l,c,f,_=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=u,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=f,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const n=(s,r)=>{const o=this.resolve_,i=this.reject_,u=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(u,u.getResponse());!function mt(t){return void 0!==t}(a)?o():o(a)}catch(a){i(a)}else if(null!==u){const a=function ee(){return new d(h.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}();a.serverResponse=u.getErrorText(),i(this.errorCallback_?this.errorCallback_(u,a):a)}else i(r.canceled?this.appDelete_?ke():function Re(){return new d(h.CANCELED,"User canceled the upload/download.")}():function be(){return new d(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}())};this.canceled_?n(0,new X(!1,null,!0)):this.backoffId_=function _t(t,e,n){let s=1,r=null,o=null,i=!1,u=0;function a(){return 2===u}let l=!1;function c(...p){l||(l=!0,e.apply(null,p))}function f(p){r=setTimeout(()=>{r=null,t(g,a())},p)}function _(){o&&clearTimeout(o)}function g(p,...P){if(l)return void _();if(p)return _(),void c.call(null,p,...P);if(a()||i)return _(),void c.call(null,p,...P);let R;s<64&&(s*=2),1===u?(u=2,R=0):R=1e3*(s+Math.random()),f(R)}let m=!1;function y(p){m||(m=!0,_(),!l&&(null!==r?(p||(u=2),clearTimeout(r),f(0)):p||(u=1)))}return f(0),o=setTimeout(()=>{i=!0,y(!0)},n),y}((s,r)=>{if(r)return void s(!1,new X(!1,null,!0));const o=this.connectionFactory_();this.pendingConnection_=o;const i=u=>{null!==this.progressCallback_&&this.progressCallback_(u.loaded,u.lengthComputable?u.total:-1)};null!==this.progressCallback_&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const u=o.getErrorCode()===N.NO_ERROR,a=o.getStatus();if(!u||function Ee(t,e){const n=t>=500&&t<600,r=-1!==[408,429].indexOf(t),o=-1!==e.indexOf(t);return n||r||o}(a,this.additionalRetryCodes_)&&this.retry){const c=o.getErrorCode()===N.ABORT;return void s(!1,new X(!1,null,c))}const l=-1!==this.successCodes_.indexOf(a);s(!0,new X(l,o))})},n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&function gt(t){t(!1)}(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class X{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}class v{constructor(e,n){this._service=e,this._location=n instanceof T?n:T.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new v(e,n)}get root(){const e=new T(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function Oe(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}(this._location.path)}get storage(){return this._service}get parent(){const e=function vt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===e)return null;const n=new T(this._location.bucket,e);return new v(this._service,n)}_throwIfRoot(e){if(""===this._location.path)throw function ft(t){return new d(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function je(t,e){const n=null==e?void 0:e[me];return null==n?null:T.makeFromBucketSpec(n,t)}class ce{constructor(e,n,s,r,o){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=ge,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?T.makeFromBucketSpec(r,this._host):je(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._bucket=null!=this._url?T.makeFromBucketSpec(this._url,e):je(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){se("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){se("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}_getAuthToken(){var e=this;return(0,Y.Z)(function*(){if(e._overrideAuthToken)return e._overrideAuthToken;const n=e._authProvider.getImmediate({optional:!0});if(n){const s=yield n.getToken();if(null!==s)return s.accessToken}return null})()}_getAppCheckToken(){var e=this;return(0,Y.Z)(function*(){const n=e._appCheckProvider.getImmediate({optional:!0});return n?(yield n.getToken()).token:null})()}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new v(this,e)}_makeRequest(e,n,s,r,o=!0){if(this._deleted)return new pt(ke());{const i=function It(t,e,n,s,r,o,i=!0){const u=function ye(t){const e=encodeURIComponent;let n="?";for(const s in t)t.hasOwnProperty(s)&&(n=n+(e(s)+"=")+e(t[s])+"&");return n=n.slice(0,-1),n}(t.urlParams),a=t.url+u,l=Object.assign({},t.headers);return function yt(t,e){e&&(t["X-Firebase-GMPID"]=e)}(l,e),function kt(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(l,n),function wt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(l,o),function Et(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(l,s),new Tt(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}(e,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}makeRequestWithTokens(e,n){var s=this;return(0,Y.Z)(function*(){const[r,o]=yield Promise.all([s._getAuthToken(),s._getAppCheckToken()]);return s._makeRequest(e,n,r,o).getPromise()})()}}const Ge="@firebase/storage";function kn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new ce(n,s,r,e,j.SDK_VERSION)}function he(t){this.message=t}!function wn(){(0,j._registerComponent)(new Ye.wA("storage",kn,"PUBLIC").setMultipleInstances(!0)),(0,j.registerVersion)(Ge,"0.11.2",""),(0,j.registerVersion)(Ge,"0.11.2","esm2017")}(),(he.prototype=new Error).name="InvalidCharacterError";var Ve=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new he("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,s,r=0,o=0,i="";s=e.charAt(o++);~s&&(n=r%4?64*n+s:s,r++%4)?i+=String.fromCharCode(255&n>>(-2*r&6)):0)s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(s);return i};function Z(t){this.message=t}(Z.prototype=new Error).name="InvalidTokenError";const Ke=function En(t,e){if("string"!=typeof t)throw new Z("Invalid token specified");var n=!0===(e=e||{}).header?0:1;try{return JSON.parse(function yn(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return decodeURIComponent(Ve(e).replace(/(.)/g,function(s,r){var o=r.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}catch{return Ve(e)}}(t.split(".")[n]))}catch(s){throw new Z("Invalid token specified: "+s.message)}};var J=U(4650),In=U(1762),Un=U(1205);let Sn=(()=>{class t{constructor(n,s,r){this.http=n,this.afs=s,this.afAuth=r,this.url="http://localhost:3000/api",this.afAuth.authState.subscribe(o=>{o?(this.userData=o,localStorage.setItem("user",JSON.stringify(this.userData)),JSON.parse(localStorage.getItem("user")||"{}")):(localStorage.setItem("user","{}"),JSON.parse(localStorage.getItem("user")||"{}"))})}getAuthToken(){return this.http.get(`${this.url}/token`)}login(n){return this.http.post(`${this.url}/auth/login`,n).pipe((0,_e.b)(s=>{localStorage.setItem("token",s.token)}))}doLogin(n){return new Promise((s,r)=>{this.afAuth.signInWithEmailAndPassword(n.username,n.password).then(o=>s(o),o=>r(o))})}signup(n){return this.http.post(`${this.url}/auth/signup`,n).pipe((0,_e.b)(s=>{localStorage.setItem("token",s.token)}))}createUser(n){return new Promise((s,r)=>{this.afAuth.createUserWithEmailAndPassword(n.username,n.password).then(o=>s(o),o=>r(o))})}getToken(){return localStorage.getItem("token")}getUserIdFromToken(){const n=localStorage.getItem("token");if(!n)return"";const o=Ke(n).sub._id;return console.log(o),o}getUsernameFromToken(){const n=localStorage.getItem("token");if(!n)return"";const o=Ke(n).sub.username;return console.log(o),o}getUser(){const n=localStorage.getItem("token"),s={headers:new pe.WM({"Content-Type":"application/json",Authorization:`Bearer ${n}`})};return this.http.get(`${this.url}/users/me`,s)}signOut(n){return this.http.post(`${this.url}/auth/signout/${n}`,null)}}return t.\u0275fac=function(n){return new(n||t)(J.LFG(pe.eN),J.LFG(In.ST),J.LFG(Un.zQ))},t.\u0275prov=J.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);