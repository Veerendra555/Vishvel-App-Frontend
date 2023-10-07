import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    updatePassword:'',
    confirmPassword: '',
    acceptTerms: false,
  };

  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}