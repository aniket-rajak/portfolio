import { Component, OnInit, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FeedbackComponent } from '../about/feedback/feedback.component';
import { ActivatedRoute, NavigationExtras, Router ,RouterLink, RouterLinkActive, RouterOutlet , RouterModule} from '@angular/router';
import { Subscription } from 'rxjs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { HamburgerComponent } from '../hamburger/hamburger.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatToolbarModule,MatDialogModule,RouterLink,RouterLinkActive,RouterOutlet,RouterModule,MatMenuModule,MatSidenavModule,HamburgerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  implements OnInit {

  query_Params_subscribe$ = new Subscription();
  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
      this.route.queryParams.subscribe((params) => {
        if (params['feedback'] === '1') {
          this.openDialog();
        }
      });
    }



openDialog(): void {
   this.dialog.open(FeedbackComponent, {
    height: '400px',
    width: '400px',
    hasBackdrop : true,
    disableClose : true,
  });
}

@ViewChild('drawer') drawer!: MatDrawer;

closeSidenav() {
this.drawer.close();
}

ngOnDestroy(): void {
  this.query_Params_subscribe$ = new Subscription();
}
}
