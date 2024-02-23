import { Component, HostListener ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet , RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { slideInAnimation } from './../routing-animation';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatButtonModule,MatToolbarModule,MatIconModule, RouterLink, RouterLinkActive,RouterModule,MatSidenavModule,MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [slideInAnimation ],
})
export class HeaderComponent implements OnInit {
 

  
  // isSticky;

  // @HostListener('class.open') menuOpen = false;
  // constructor (){}

  ngOnInit(): void {
   
  }

  

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  title = 'add-project';
  showFiller = false;

  menuOpen = false;

  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
 
}
