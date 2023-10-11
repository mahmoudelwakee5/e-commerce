import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProudectService } from 'src/app/core/services/proudect.service';
import { Product } from 'src/app/product';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule ,RouterLink ,CuttextPipe ,NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(
    private _ProudectService:ProudectService ,
    private _CartService:CartService ,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2,

  ){}
  products:Product[] =[];

  pageSize:number =0;
  currentPage:number =1;
  total:number =0;
  ngOnInit(): void {
    this._ProudectService.getProducts().subscribe(
      {
        next:(response)=>{
          console.log('products', response.data)
         this.products =response.data;
         this.pageSize =response.metadata.limit;
         this.currentPage =response.metadata.currentPage;
         this.total = response.results
        },
      }); 
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

      pageChanged(event:any):void{
        this._ProudectService.getProducts(event).subscribe(
          {
            next:(response)=>{
              console.log('products', response.data)
             this.products =response.data;
             this.pageSize =response.metadata.limit;
             this.currentPage =response.metadata.currentPage;
             this.total = response.results
            },
          }); 

      }


}
