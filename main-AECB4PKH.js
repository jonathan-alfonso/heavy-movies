import"./chunk-HGATVPSV.js";import{P as D,S as _,b as A,c as S,d as I,g as F,j as N}from"./chunk-ST6NEHVQ.js";import{Mb as P,Ra as g,Sa as v,Ua as y,V as p,Wa as f,Ya as M,_ as d,_a as C,dc as R,ga as h,na as m,nc as w,ra as c,tb as b,ua as u}from"./chunk-B6LIJLQR.js";var O=[{path:"",loadComponent:()=>import("./chunk-X42DMYPX.js").then(r=>r.HomeComponent)},{path:"movie/:id",loadComponent:()=>import("./chunk-3UVHG233.js").then(r=>r.DetailsComponent)},{path:"**",loadComponent:()=>import("./chunk-X42DMYPX.js").then(r=>r.HomeComponent)}];var B="@",H=(()=>{let e=class e{constructor(t,i,n,s,a){this.doc=t,this.delegate=i,this.zone=n,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=c(y,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-CFQVEW6T.js")).catch(i=>{throw new p(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,i){let n=this.delegate.createRenderer(t,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new l(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let j=a.createRenderer(t,i);s.use(j)}).catch(a=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){v()},e.\u0275prov=h({token:e,factory:e.\u0275fac});let r=e;return r})(),l=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,t,i){this.delegate.insertBefore(e,o,t,i)}removeChild(e,o,t){this.delegate.removeChild(e,o,t)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,t,i){this.delegate.setAttribute(e,o,t,i)}removeAttribute(e,o,t){this.delegate.removeAttribute(e,o,t)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,t,i){this.delegate.setStyle(e,o,t,i)}removeStyle(e,o,t){this.delegate.removeStyle(e,o,t)}setProperty(e,o,t){this.shouldReplay(o)&&this.replay.push(i=>i.setProperty(e,o,t)),this.delegate.setProperty(e,o,t)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,t){return this.shouldReplay(o)&&this.replay.push(i=>i.listen(e,o,t)),this.delegate.listen(e,o,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(B)}};function x(r="animations"){return M("NgAsyncAnimations"),u([{provide:f,useFactory:(e,o,t)=>new H(e,o,t,r),deps:[R,S,C]},{provide:m,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var E={providers:[N(O),x(),A()]};var T=(()=>{let e=class e{constructor(t){this._movieService=t,this.title="ng-movies",this.popularMovies="",this.nowPlayingMovies="",this.topRatedMovies="",this.upcomingMovies=""}ngOnInit(){}getPopularMovies(t){this._movieService.getPopular(t).subscribe(i=>{this.popularMovies=i,this.nowPlayingMovies="",this.topRatedMovies="",this.upcomingMovies=""})}getNowPlayingMovies(t){this._movieService.getNowPlaying(t).subscribe(i=>{this.nowPlayingMovies=i,this.popularMovies="",this.topRatedMovies="",this.upcomingMovies=""})}getTopRatedMovies(t){this._movieService.getTopRated(t).subscribe(i=>{this.topRatedMovies=i,this.popularMovies="",this.nowPlayingMovies="",this.upcomingMovies=""})}getUpcomingMovies(t){this._movieService.getUpcoming(t).subscribe(i=>{this.upcomingMovies=i,this.popularMovies="",this.nowPlayingMovies="",this.topRatedMovies=""})}};e.\u0275fac=function(i){return new(i||e)(g(_))},e.\u0275cmp=d({type:e,selectors:[["app-root"]],standalone:!0,features:[P],decls:1,vars:0,template:function(i,n){i&1&&b(0,"router-outlet")},dependencies:[F,D,w],styles:[".buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.page-content[_ngcontent-%COMP%]{background-color:#303030}"]});let r=e;return r})();I(T,E).catch(r=>console.error(r));
