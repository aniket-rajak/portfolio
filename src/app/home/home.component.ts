import { Component, OnInit , AfterViewInit, ViewChild   } from '@angular/core';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet , RouterModule, Router, ActivatedRoute,  NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { slideInAnimation } from '../routing-animation';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,RouterLink, RouterLinkActive, RouterOutlet , RouterModule,MatTabsModule,MatSidenavModule,MatIconModule,MatIconButton,MatButtonModule,MatMenuModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [slideInAnimation , ],
})
export class HomeComponent implements OnInit  {
  
  selectedTabIndex: number = 0;

  ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    const index = +params['tab'];
    if (!isNaN(index) && index >= 0 && index < 3) {
      this.selectedTabIndex = index;
    }
  });

}

// @ViewChild('sidenav') sidenav!: MatDrawer;

// ngAfterViewInit(): void {
  
//   this.sidenav.close();
// }

@ViewChild('drawer') drawer!: MatDrawer;

closeSidenav() {
  this.drawer.close();
}
  // constructor(private router: Router, private route: ActivatedRoute) {}

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
  
 
    
      private createUrlWithParams(params: any): string {
        const urlTree = this.route.snapshot.url.reduce((acc, segment) => {
          acc += '/' + segment.path;
          return acc;
        }, '');
        const queryString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
        return `${urlTree}?${queryString}`;
      }
      

  scrollToSection(section: string): void {
    this.router.navigate([], { fragment: section });
  }



  tabChanged(event: any) {
      const queryParams = { tab: event };
      history.replaceState(null, '', this.createUrlWithParams(queryParams));
    }




}
