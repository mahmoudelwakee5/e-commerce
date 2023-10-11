import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProudectService } from 'src/app/core/services/proudect.service';
import { Category } from 'src/app/core/interfaces/categories';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  constructor( private _ProudectService:ProudectService){  }

  categoryData:Category[] =[]
  ngOnInit(): void {
      this._ProudectService.getCategoris().subscribe({
        next:(response)=>{
       this.categoryData =response.data;
        }
      })
  }

}
