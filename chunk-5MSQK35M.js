import{K as B,L as N,M as j,O as W,P as K,Q as V,R as q,S as A,h as D,i as H,k as z}from"./chunk-A7HGMC7U.js";import{Ab as U,Cb as x,Ib as d,Jb as y,Kb as _,Mb as C,Na as I,Qa as r,Qb as v,Ra as T,Rb as u,T as f,_ as M,gb as S,ib as s,k as P,lc as E,mc as O,nb as k,nc as $,ob as F,pb as h,qb as g,rb as p,sb as a,tb as m,tc as R,wb as L,xb as c}from"./chunk-B6LIJLQR.js";var G=(()=>{let o=class o{constructor(){this.rdInt=1,this.rdCode="",this.landingPic=""}ngOnInit(){this.getLandingPage()}getLandingPage(){switch(this.rdInt=this._randomIntFromInterval(1,7),this.rdInt){case 1:this.rdCode="VrTb1CWL";break;case 2:this.rdCode="JsqD0g5F";break;case 3:this.rdCode="KKp1rMVr";break;case 4:this.rdCode="WtFk85sD";break;case 5:this.rdCode="dk7LW0cM";break;case 6:this.rdCode="3WsDc2wt";break;case 7:this.rdCode="5X1Qx1Lv";break;default:this.rdCode="VrTb1CWL"}this.landingPic=`https://i.postimg.cc/${this.rdCode}/landing${this.rdInt}.jpg`}_randomIntFromInterval(t,n){return Math.floor(Math.random()*(n-t+1)+t)}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=M({type:o,selectors:[["app-landing"]],standalone:!0,features:[C],decls:4,vars:1,consts:[[1,"landing-page"],["src","https://i.postimg.cc/CnqnKxcC/LOGO.png",1,"landing-logo"],[1,"landing-pic",3,"src"]],template:function(n,l){n&1&&(p(0,"div",0),m(1,"app-navbar")(2,"img",1)(3,"img",2),a()),n&2&&(r(3),U("src",l.landingPic,I))},dependencies:[V],styles:[".landing-pic[_ngcontent-%COMP%]{max-height:100vh;width:100%;filter:brightness(50%)}.landing-logo[_ngcontent-%COMP%]{position:absolute;top:25%;left:calc(50% - 300px);z-index:1;height:600px;width:600px;background:bl}"]});let i=o;return i})();var b=(i,o)=>o.id;function X(i,o){if(i&1&&(p(0,"div",6)(1,"a",7),m(2,"img",8),a(),p(3,"a",9),d(4),a(),p(5,"p",10),d(6),v(7,"date"),a()()),i&2){let e=o.$implicit,t=c(3);r(),s("routerLink","/movie/"+e.id)("title",e.title),r(),x("srcset","",t.posterUrl+e.poster_path," 1x, ",t.zoomedUrl+e.poster_path," 2x"),s("ngSrc",t.posterUrl+e.poster_path)("alt",e.title)("height",239)("width",159),r(),s("routerLink","/movie/"+e.id)("title",e.title),r(),_(" ",e.title," "),r(2),y(u(7,12,e.release_date,"dd/MM/yyyy"))}}function Y(i,o){if(i&1&&h(0,X,8,15,"div",11,b),i&2){let e=c(2);g(e.nowPlayingMovies)}}function Z(i,o){if(i&1&&(p(0,"div",6)(1,"a",7),m(2,"img",8),a(),p(3,"a",9),d(4),a(),p(5,"p",10),d(6),v(7,"date"),a()()),i&2){let e=o.$implicit,t=c(3);r(),s("routerLink","/movie/"+e.id)("title",e.title),r(),x("srcset","",t.posterUrl+e.poster_path," 1x, ",t.zoomedUrl+e.poster_path," 2x"),s("ngSrc",t.posterUrl+e.poster_path)("alt",e.title)("height",239)("width",159),r(),s("routerLink","/movie/"+e.id)("title",e.title),r(),_(" ",e.title," "),r(2),y(u(7,12,e.release_date,"dd/MM/yyyy"))}}function ee(i,o){if(i&1&&h(0,Z,8,15,"div",11,b),i&2){let e=c(2);g(e.popularMovies)}}function te(i,o){if(i&1&&(p(0,"div",6)(1,"a",7),m(2,"img",8),a(),p(3,"a",9),d(4),a(),p(5,"p",10),d(6),v(7,"date"),a()()),i&2){let e=o.$implicit,t=c(3);r(),s("routerLink","/movie/"+e.id)("title",e.title),r(),x("srcset","",t.posterUrl+e.poster_path," 1x, ",t.zoomedUrl+e.poster_path," 2x"),s("ngSrc",t.posterUrl+e.poster_path)("alt",e.title)("height",239)("width",159),r(),s("routerLink","/movie/"+e.id)("title",e.title),r(),_(" ",e.title," "),r(2),y(u(7,12,e.release_date,"dd/MM/yyyy"))}}function ie(i,o){if(i&1&&h(0,te,8,15,"div",11,b),i&2){let e=c(2);g(e.upcomingMovies)}}function oe(i,o){if(i&1&&(p(0,"div",6)(1,"button",12),d(2),v(3,"number"),a(),p(4,"a",7),m(5,"img",8),a(),p(6,"a",9),d(7),a(),p(8,"p",10),d(9),v(10,"date"),a()()),i&2){let e=o.$implicit,t=c(3);r(2),_(" ",u(3,13,e.vote_average,"1.1-1")," "),r(2),s("routerLink","/movie/"+e.id)("title",e.title),r(),x("srcset","",t.posterUrl+e.poster_path," 1x, ",t.zoomedUrl+e.poster_path," 2x"),s("ngSrc",t.posterUrl+e.poster_path)("alt",e.title)("height",239)("width",159),r(),s("routerLink","/movie/"+e.id)("title",e.title),r(),_(" ",e.title," "),r(2),y(u(10,16,e.release_date,"dd/MM/yyyy"))}}function ne(i,o){if(i&1&&h(0,oe,11,19,"div",11,b),i&2){let e=c(2);g(e.topRatedMovies)}}function re(i,o){if(i&1&&(p(0,"mat-tab",4)(1,"div",5),S(2,Y,2,0)(3,ee,2,0)(4,ie,2,0)(5,ne,2,0),a()()),i&2){let e=o.$implicit,t=c();s("label",e),r(2),k(2,t.moviesTab==0?2:t.moviesTab==1?3:t.moviesTab==2?4:t.moviesTab==3?5:-1)}}function ae(i,o){i&1&&d(0," Liste vide ")}var Me=(()=>{let o=class o{constructor(t,n){this._movieService=t,this._router=n,this.type="",this.movieTabList=["A l'affiche","Populaires","A venir","Mieux not\xE9s"],this.popularMovies=[],this.nowPlayingMovies=[],this.topRatedMovies=[],this.upcomingMovies=[],this.moviesTab=0,this.posterUrl="https://image.tmdb.org/t/p/w220_and_h330_face/",this.zoomedUrl="https://image.tmdb.org/t/p/w440_and_h330_face/",this.maxMovies=5,this._destroyed$=new P(1)}ngOnInit(){this.getType(),this.getNowPlayingMovies(1)}ngOnDestroy(){this._destroyed$.next(!0),this._destroyed$.complete()}getPopularMovies(t){this._movieService.getPopular(t).pipe(f(this._destroyed$)).subscribe(n=>{this.popularMovies=n.results,this.popularMovies=this.popularMovies.slice(0,7)})}getNowPlayingMovies(t){this._movieService.getNowPlaying(t).pipe(f(this._destroyed$)).subscribe(n=>{this.nowPlayingMovies=n.results,this.nowPlayingMovies=this.nowPlayingMovies.slice(0,7)})}getTopRatedMovies(t){this._movieService.getTopRated(t).pipe(f(this._destroyed$)).subscribe(n=>{this.topRatedMovies=n.results,this.topRatedMovies=this.topRatedMovies.slice(0,7)})}getUpcomingMovies(t){this._movieService.getUpcoming(t).pipe(f(this._destroyed$)).subscribe(n=>{this.upcomingMovies=n.results,this.upcomingMovies.sort((l,w)=>new Date(l.release_date).getTime()-new Date(w.release_date).getTime()),this.upcomingMovies=this.upcomingMovies.slice(0,7)})}tabMoviesChange({index:t}){this.moviesTab=t;let n=["now_playing","popular","upcoming","top_rated"],l=n[t];l&&(l==n[0]?this.getNowPlayingMovies(1):l==n[1]?this.getPopularMovies(1):l==n[2]?this.getUpcomingMovies(1):l==n[3]&&this.getTopRatedMovies(1))}getType(){this.type=this._type()}_type(){return this.type=this._router.url.split("/")[1]}};o.\u0275fac=function(n){return new(n||o)(T(A),T(D))},o.\u0275cmp=M({type:o,selectors:[["app-home"]],standalone:!0,features:[C],decls:9,vars:2,consts:[[1,"container"],[1,"movies-container"],[1,"card-tab"],["mat-stretch-tabs","false","mat-align-tabs","end",3,"selectedIndex","selectedTabChange"],[1,"card-tab",3,"label"],[1,"card-container"],[1,"card"],[3,"routerLink","title"],["loading","lazy",1,"card-poster",3,"ngSrc","srcset","alt","height","width"],[1,"card-title",3,"routerLink","title"],[1,"card-date"],["class","card"],["mat-mini-fab","","color","accent","aria-label","Note",1,"btn-rating"],["class","card-tab",3,"label"]],template:function(n,l){n&1&&(m(0,"app-landing"),p(1,"div",0)(2,"section",1)(3,"div",2)(4,"mat-tab-group",3),L("selectedTabChange",function(J){return l.tabMoviesChange(J)}),h(5,re,6,2,"mat-tab",13,F,!1,ae,1,0),a()(),m(8,"app-footer"),a()()),n&2&&(r(4),s("selectedIndex",l.moviesTab),r(),g(l.movieTabList))},dependencies:[z,H,$,O,E,j,B,N,K,W,G,q,R],styles:[".card-tab[_ngcontent-%COMP%]{margin-bottom:10px}.card-container[_ngcontent-%COMP%]{display:flex;gap:1rem;flex-wrap:wrap;justify-content:start;margin-top:3rem;width:80%;margin:auto}.card[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:159px;margin-top:100px}.card-poster[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.card-title[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-weight:700;margin-top:10px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.card-title[_ngcontent-%COMP%]:hover{color:#4156c4}.card-date[_ngcontent-%COMP%]{color:#fff}.btn-rating[_ngcontent-%COMP%]{top:20px}"]});let i=o;return i})();export{Me as a};
