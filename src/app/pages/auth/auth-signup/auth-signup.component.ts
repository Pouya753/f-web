import {Component} from '@angular/core';
import {signalUpdateFn} from "@angular/core/primitives/signals";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrl: './auth-signup.component.scss'
})
export class AuthSignupComponent {

  signupForm!: FormGroup;

  arry: any[] = []

  constructor() {
    this.initForm();
  }

  initForm() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      password1: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])

    })
  }

  sendData() {
    let object = {
      email: this.signupForm.controls["email"].value,
      password: this.signupForm.controls["password"].value,
      password1: this.signupForm.controls["password1"].value,
      phone:this.signupForm.controls["phone"].value,
      address:this.signupForm.controls["address"].value,
    }
    this.arry.push(object);
    console.log(this.arry);
  }

}
