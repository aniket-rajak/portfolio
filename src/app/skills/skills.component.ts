import { Component } from '@angular/core';
import { HamburgerComponent } from '../hamburger/hamburger.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [HamburgerComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
