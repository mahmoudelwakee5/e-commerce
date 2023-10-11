import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nofound',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  templateUrl: './nofound.component.html',
  styleUrls: ['./nofound.component.scss']
})
export class NofoundComponent {

}
