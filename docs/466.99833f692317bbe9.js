"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[466],{5466:(_,n,e)=>{e.r(n),e.d(n,{CategoriesComponent:()=>l});var c=e(6814),g=e(1120),t=e(4769),a=e(1343);const u=function(o){return["/categorydetails",o]};function r(o,d){if(1&o&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"h3",6),t._uU(4),t.qZA()()()),2&o){const s=d.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(4,u,s._id)),t.xp6(1),t.Q6J("src",s.image,t.LSH)("alt",s.name),t.xp6(2),t.Oqu(s.name)}}let l=(()=>{class o{constructor(s){this._ProudectService=s,this.categoryData=[]}ngOnInit(){this._ProudectService.getCategoris().subscribe({next:s=>{this.categoryData=s.data}})}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(a.r))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-categories"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"my-4"],[1,"row","g-4","justify-content-center"],["class","col-sm-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3"],["role","button",1,"border","border-success","rounded","p-2","shadow",3,"routerLink"],["height","270",1,"w-100",3,"src","alt"],[1,"text-center","text-main"]],template:function(i,m){1&i&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,r,5,6,"div",2),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("ngForOf",m.categoryData))},dependencies:[c.ez,c.sg,g.rH]})}return o})()},1343:(_,n,e)=>{e.d(n,{r:()=>t});var c=e(4769),g=e(9862);let t=(()=>{class a{constructor(r){this._HttpClient=r,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getCategoris(){return this._HttpClient.get(this.baseUrl+"categories")}getProducts(r=1){return this._HttpClient.get(this.baseUrl+`products?page= ${r} `)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getCategoryDetails(r){return this._HttpClient.get(this.baseUrl+`categories/${r}`)}getProducDetails(r){return this._HttpClient.get(this.baseUrl+`products/${r}`)}static#t=this.\u0275fac=function(l){return new(l||a)(c.LFG(g.eN))};static#e=this.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);