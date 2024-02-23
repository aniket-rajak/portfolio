import { Component, ViewChild } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hamburger',
  standalone: true,
  imports: [MatTabsModule,MatSidenavModule,MatIconModule,MatIconButton,MatButtonModule,MatMenuModule,RouterLinkActive, RouterOutlet , RouterModule, ],
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.css'
})
export class HamburgerComponent {

  @ViewChild('drawer') drawer!: MatDrawer;

closeSidenav() {
  this.drawer.close();
}

}
