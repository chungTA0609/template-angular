import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonComponent } from '../button/button.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-layout',
  standalone: true,
  imports: [
    InputTextModule,
    InputTextareaModule,
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './form-layout.component.html',
  styleUrl: './form-layout.component.scss',
})
export class FormLayoutComponent {
  contactControl: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactControl = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      avatar: ['', Validators.required],
      twitter: ['', Validators.required],
      notes: ['', Validators.required],
    });
  }
  ngOnInit() {}
  get firstname() {
    return this.contactControl.get('firstname');
  }
  onSubmit() {
    console.log(this.contactControl.value);
    console.log(this.contactControl);
  }

  checkErrorField(field: string) {
    return (
      this.contactControl.get(field)?.errors &&
      (this.contactControl.get(field)?.dirty ||
        this.contactControl.get(field)?.touched)
    );
  }
}
