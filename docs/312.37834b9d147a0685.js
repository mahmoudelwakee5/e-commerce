"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[312],{9312:(m,d,c)=>{c.r(d),c.d(d,{WhishlistComponent:()=>D});var l=c(6814),u=c(1120),p=c(8129),t=c(4769),a=c(6968),g=c(2425),o=c(6286);function _(e,h){if(1&e){const i=t.EpF();t.TgZ(0,"i",18),t.NdJ("click",function(){t.CHM(i);const r=t.oxw().$implicit,n=t.oxw(2);return t.KtG(n.addFav(r._id))}),t.qZA()}}function f(e,h){if(1&e){const i=t.EpF();t.TgZ(0,"i",19),t.NdJ("click",function(){t.CHM(i);const r=t.oxw().$implicit,n=t.oxw(2);return t.KtG(n.removeFav(r._id))}),t.qZA()}}function v(e,h){if(1&e&&t._UZ(0,"i",20),2&e){const i=h.$implicit,s=t.oxw().$implicit;t.ekj("rating-color",s.ratingsAverage>=i)}}const C=function(e){return["/productdetails",e]},x=function(){return[1,2,3,4,5]};function T(e,h){if(1&e){const i=t.EpF();t.TgZ(0,"div",4)(1,"div",5),t.YNc(2,_,1,0,"i",6),t.YNc(3,f,1,0,"i",7),t.TgZ(4,"header",8),t._UZ(5,"img",9),t.TgZ(6,"h3",10),t._uU(7),t.ALo(8,"cuttext"),t.qZA(),t.TgZ(9,"h4",11),t._uU(10),t.qZA(),t.TgZ(11,"div",12)(12,"span"),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"p",13),t.YNc(16,v,1,2,"i",14),t.TgZ(17,"span",15),t._uU(18),t.qZA()()()(),t.TgZ(19,"footer")(20,"button",16,17),t.NdJ("click",function(){const n=t.CHM(i).$implicit,O=t.MAs(21),A=t.oxw(2);return t.KtG(A.addProuduct(n._id,O))}),t._uU(22," + Add to Cart "),t.qZA()()()()}if(2&e){const i=h.$implicit,s=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!s.whishListData.includes(i._id)),t.xp6(1),t.Q6J("ngIf",s.whishListData.includes(i._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(17,C,i._id)),t.xp6(1),t.Q6J("src",i.imageCover,t.LSH)("title",i.title)("alt",i.title),t.xp6(2),t.Oqu(t.xi3(8,11,i.title,3)),t.xp6(3),t.Oqu(i.category.name),t.xp6(3),t.Oqu(t.xi3(14,14,i.price,"e\xa3")),t.xp6(3),t.Q6J("ngForOf",t.DdM(19,x)),t.xp6(2),t.hij(" ",i.ratingsAverage,"")}}function E(e,h){if(1&e&&(t.TgZ(0,"section",1)(1,"div",2),t.YNc(2,T,23,20,"div",3),t.qZA()()),2&e){const i=t.oxw();t.xp6(2),t.Q6J("ngForOf",i.products)}}let D=(()=>{class e{constructor(i,s,r,n){this._WhishlistService=i,this._ToastrService=s,this._CartService=r,this._Renderer2=n,this.products=[],this.whishListData=[]}ngOnInit(){this._WhishlistService.getWhishlist().subscribe({next:i=>{console.log(i),this.products=i.data;const s=i.data.map(r=>r._id);this.whishListData=s}})}addProuduct(i,s){this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.addToCart(i).subscribe({next:r=>{console.log(r),this._ToastrService.success(r.message),this._Renderer2.removeAttribute(s,"disabled"),this._CartService.cartNumber.next(r.numOfCartItems)},error:r=>{this._Renderer2.removeAttribute(s,"disabled")}})}addFav(i){this._WhishlistService.addToWhislist(i).subscribe({next:s=>{console.log(s),this._ToastrService.success(s.message),this.whishListData=s.data}})}removeFav(i){this._WhishlistService.removeWhishlist(i).subscribe({next:s=>{console.log(s),this._ToastrService.success(s.message),this.whishListData=s.data;const r=this.products.filter(n=>this.whishListData.includes(n._id));this.products=r}})}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(a.m),t.Y36(g._W),t.Y36(o.N),t.Y36(t.Qsj))};static#i=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-whishlist"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","py-4",4,"ngIf"],[1,"py-4"],[1,"row"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2 py-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2","py-3"],[1,"product","h-100"],["class","fa-regular fa-heart heart",3,"click",4,"ngIf"],["class","fa-solid fa-heart heart fa-2x",3,"click",4,"ngIf"],["role","button",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"h6","small"],[1,"h6","text-main"],[1,"d-flex","align-items-center","justify-content-between","small"],[1,"mb-0"],["class","fas fa-star rating-color",3,"rating-color",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"py-2","main-btn","w-100",3,"click"],["btnAdd",""],[1,"fa-regular","fa-heart","heart",3,"click"],[1,"fa-solid","fa-heart","heart","fa-2x",3,"click"],[1,"fas","fa-star","rating-color"]],template:function(s,r){1&s&&t.YNc(0,E,3,1,"section",0),2&s&&t.Q6J("ngIf",r.products.length>0)},dependencies:[l.ez,l.sg,l.O5,l.H9,u.rH,p.r]})}return e})()},6286:(m,d,c)=>{c.d(d,{N:()=>t});var l=c(5619),u=c(4769),p=c(9862);let t=(()=>{class a{constructor(o){this._HttpClient=o,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new l.X(0)}addToCart(o){return this._HttpClient.post(this.baseUrl+"cart",{productId:o})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(o){return this._HttpClient.delete(this.baseUrl+`cart/${o}`)}updateCartCount(o,_){return this._HttpClient.put(this.baseUrl+`cart/${o}`,{count:_})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(o,_){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${o}?url=http://localhost:4200`,{shoppingAddress:_})}static#t=this.\u0275fac=function(_){return new(_||a)(u.LFG(p.eN))};static#i=this.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);