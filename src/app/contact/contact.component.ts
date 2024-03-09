import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import emailjs from '@emailjs/browser'
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule , 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {


  form = new FormGroup({
    from_name : new FormControl,
    to_name : new FormControl,
    from_email : new FormControl,
    subject : new FormControl,
    message : new FormControl
  })


  async send(){
    emailjs.init('-QekfPnW1HMBvF5E3');
    let response = await emailjs.send("service_cgadh58","template_8rrm9gq",{
    from_name: this.form.value.from_name,
    to_name: 'Aniket',
    from_email: this.form.value.from_email,
    subject: this.form.value.subject,
    message: this.form.value.message,
    });
    alert('Message Send!');
    this.form.reset();
  }
  
}


