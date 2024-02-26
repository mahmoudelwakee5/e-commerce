import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProudectService } from 'src/app/core/services/proudect.service';
import {  Product } from 'src/app/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/interfaces/categories';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { WhishlistService } from 'src/app/core/services/whishlist.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,CuttextPipe ,CarouselModule,RouterLink ,  SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export default class HomeComponent implements OnInit{

  constructor( private _ProudectService:ProudectService ,
    private _CartService:CartService ,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2,
    private _WhishlistService:WhishlistService
    ){}

  products:Product[] =[];
  categories:Category[] =[];
  whishListData:string[] =[];
  term:string =''

  ngOnInit(): void {

    this._ProudectService.getProducts().subscribe(
      {
        next:(response)=>{
          console.log('products', response.data)
          this.products =response.data;
        },
      }); 
      
      
      this._ProudectService.getCategories().subscribe({
        next:(response)=>{
          console.log('cateegoris',response.data)
          this.categories =response.data 
          
        }
      }) 
      
      this._WhishlistService.getWhishlist().subscribe({
        next:(response)=>{
          
          const newData = response.data.map( (item:any)=> item._id  );
    
          this.whishListData =newData;

        }
      })
  }

  

  addProuduct(id:any ,element:HTMLButtonElement):void{

this._Renderer2.setAttribute( element ,'disabled' ,'true')

    this._CartService.addToCart(id).subscribe({
      next:(response) =>{
        console.log(response);
        this._ToastrService.success(response.message )
        this._Renderer2.removeAttribute(element ,'disabled' );
        this._CartService.cartNumber.next(response.numOfCartItems );
      },
      error :(err)=>{
        this._Renderer2.removeAttribute(element ,'disabled' );
      }
    })

  }


  addFav(prodId:string|undefined):void{
    this._WhishlistService.addToWhislist(prodId).subscribe({
      next:(response)=>{
        console.log(response)
        this._ToastrService.success(response.message)
        this.whishListData =response.data;
        this._WhishlistService.whishNumber.next(response.data.length);
      }
    })

  }

  removeFav(prodId:string|undefined):void{
   this._WhishlistService.removeWhishlist(prodId).subscribe({
    next:(response)=>{
      console.log(response);
      this._ToastrService.success(response.message)
      this.whishListData =response.data;
      this._WhishlistService.whishNumber.next(response.data.length);

      

    }
   })
  }

  CategoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:7000,
    autoplaySpeed:1000,

    dots: true,
    navSpeed: 700,
    navText: ['prev', ''],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3 , 
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      }
    },
    nav: false
  }

  mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    navText: ['prev', 'next'],
   items: 1,
    nav: false
  }

}
