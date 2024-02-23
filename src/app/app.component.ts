import { Component, HostListener ,OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet , RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { slideInAnimation } from './routing-animation';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { MatSidenav } from '@angular/material/sidenav';
import { HamburgerComponent } from './hamburger/hamburger.component';
// import { blinkAnimation} from './routing-animation';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet,MatButtonModule,MatToolbarModule,MatIconModule, RouterLink, RouterLinkActive,RouterModule,MatSidenavModule,MatMenuModule,PreloaderComponent,HamburgerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [slideInAnimation , ],
  
})
export class AppComponent implements OnInit{

  isLoading: boolean = true;
  // hasBackdrop: any;
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 100;
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
