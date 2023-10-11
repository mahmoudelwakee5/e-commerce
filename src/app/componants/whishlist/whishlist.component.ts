import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhishlistService } from 'src/app/core/services/whishlist.service';
import { Product } from 'src/app/product';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [CommonModule ,RouterLink ,CuttextPipe],
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent implements OnInit {

  constructor( private _WhishlistService:WhishlistService ,
    private _ToastrService:ToastrService,
    private _CartService:CartService ,
    private _Renderer2:Renderer2,
    ){}

  products:Product[] =[];
  whishListData:string[] =[];

  ngOnInit(): void {
      this._WhishlistService.getWhishlist().subscribe({
        next:(response)=>{
          console.log(response);
          this.products =response.data;
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
          }
        })
    
      }
    
      removeFav(prodId:string|undefined):void{
       this._WhishlistService.removeWhishlist(prodId).subscribe({
        next:(response)=>{
          console.log(response);
          this._ToastrService.success(response.message)
          this.whishListData =response.data;

         const newProductData = this.products.filter( (item:any)=> this.whishListData.includes(item._id))
         
         this.products =newProductData ;
         
          // this._WhishlistService.getWhishlist().subscribe({
          //   next:(response)=>{
          //     this.products =response.data
          //   }
          // })
    
        }
       })
      }



}
