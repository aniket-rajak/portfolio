// import { Component, Inject } from '@angular/core';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterLink, RouterLinkActive, RouterOutlet , RouterModule, Router, ActivatedRoute,  NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [MatButton,RouterLink,RouterLinkActive,RouterOutlet,RouterModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  
  // closeDialog(){
  //   this.dialogRef.close();
  //   console.log('hello')
  // }
  constructor(private router: Router, private route: ActivatedRoute , private dialogRef: MatDialogRef<FeedbackComponent>,) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Scroll to the element with the fragment in the URL
      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
  
  scrollToSection(section: string): void {
    // Navigate to the same route with the fragment
    this.router.navigate([], { fragment: section });
  }

  closeDialog(){
    this.dialogRef.close();
    console.log('hello');
  }

  
 
}
