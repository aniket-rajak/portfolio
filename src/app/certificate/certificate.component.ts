import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [MatStepperModule,MatButtonModule,ReactiveFormsModule,MatInputModule,MatInputModule,],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}
