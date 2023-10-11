import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProudectService } from 'src/app/core/services/proudect.service';
import { Category } from 'src/app/core/interfaces/categories';

@Component({
  selector: 'app-categorydetails',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.scss']
})
export class CategorydetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute ,private _ProudectService:ProudectService){}
  categoryId:string|null ='';
  categoryDetails:Category = {} as Category;
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(parms)=>{
         this.categoryId=  parms.get('id');
        }
      })

      this._ProudectService.getCategoryDetails( this.categoryId).subscribe({
        next:(response)=>{
          this.categoryDetails =response.data;
        }
      })
  }



}
