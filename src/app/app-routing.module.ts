import { WhishlistComponent } from './componants/whishlist/whishlist.component';
import { CategorydetailsComponent } from './componants/categorydetails/categorydetails.component';
import { AllordersComponent } from './componants/allorders/allorders.component';

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  // blank
 {path:'',
 canActivate:[authGuard],
 loadComponent:()=>import('./layouts/blank-layout/blank-layout.component')
 .then((m)=>m.BlankLayoutComponent),
children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadComponent:()=>import('./componants/home/home.component').then((m)=>m.default),title:'home'},
  {path:'cart',loadComponent:()=>import('./componants/cart/cart.component').then((m)=>m.CartComponent),title:'cart'},
  {path:'whislist',loadComponent:()=>import('./componants/whishlist/whishlist.component').then((m)=>m.WhishlistComponent),title:'whislist'},
  {path:'products',loadComponent:()=>import('./componants/products/products.component').then((m)=>m.ProductsComponent),title:'products'},
  {path:'productdetails/:id',loadComponent:()=>import('./componants/details/details.component').then((m)=>m.DetailsComponent),title:'details'},
  {path:'brands',loadComponent:()=>import('./componants/brands/brands.component').then((m)=>m.BrandsComponent),title:'brands'},
  {path:'allorders',loadComponent:()=>import('./componants/allorders/allorders.component').then((m)=>m.AllordersComponent),title:'allorders'},
  {path:'forgetPassword',loadComponent:()=>import('./componants/forget-password/forget-password.component').then((m)=>m.ForgetPasswordComponent),title:'forgetPassword'},
  {path:'payment/:id',loadComponent:()=>import('./componants/payment/payment.component').then((m)=>m.PaymentComponent),title:'payment'},
  {path:'categores',loadComponent:()=>import('./componants/categories/categories.component').then((m)=>m.CategoriesComponent),title:'categories'},
  {path:'categorydetails/:id',loadComponent:()=>import('./componants/categorydetails/categorydetails.component').then((m)=>m.CategorydetailsComponent),title:'categorydetails'},
]
},
// auth
{path:'',
loadComponent:()=>import('./layouts/auth-layout/auth-layout.component')
.then((m)=>m.AuthLayoutComponent),
children:[
  {path:'',redirectTo:'login' ,pathMatch:'full'},
  {path:'login',loadComponent:()=>import('./componants/login/login.component').then( (m)=>m.LoginComponent)},
  {path:'register',loadComponent:()=>import('./componants/register/register.component').then( (m)=>m.RegisterComponent)},
  {path:'forget',loadComponent:()=>import('./componants/forget-password/forget-password.component').then((m)=>m.ForgetPasswordComponent),title:'forgetPassword'},
]

},
// notfound
{path:'**',
loadComponent:
()=>import('./componants/notfound/nofound.component').then((m)=>m.NofoundComponent),title:'notFoundComponant'},
];


 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
