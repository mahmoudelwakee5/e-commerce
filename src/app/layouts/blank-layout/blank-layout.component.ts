import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBlankComponent } from 'src/app/componants/nav-blank/nav-blank.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/componants/footer/footer.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule,NavBlankComponent,RouterOutlet ,FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent {

  goToUp():void{
    scrollTo(0,0);
  }

}
