import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.scss'
})
export class AuthLoginComponent {

  loginForm!: FormGroup;

  arry:any[]=[]
  constructor() {
    this.initForm();
  }
  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  sendData() {
    let object = {
      email: this.loginForm.controls["email"].value,
      password: this.loginForm.controls["password"].value,
    }
    this.arry.push(object);
    console.log(this.arry);
  }

}
