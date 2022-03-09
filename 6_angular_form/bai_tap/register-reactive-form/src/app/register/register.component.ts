import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {User} from '../user';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User;

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('',Validators.email),
      country: new FormControl(),
      age: new FormControl('', this.checkAge18),
      phone: new FormControl('',Validators.pattern('^\\+84\\d{9,10}$')),
      gender: new FormControl(),
      passwordGroup: new FormGroup({
        password: new FormControl('',Validators.minLength(6)),
        passwordConfirm: new FormControl()},this.checkPass)
    });
  }

  ngOnInit(): void {
  }

  getInfoUser() {
    console.log(this.registerForm);
    this.user = Object.assign({}, this.registerForm.value);
    console.log(this.user);
  }

  checkAge18(abstractControl: AbstractControl): any {
    const yearStudent = Number(abstractControl.value.substr(0, 4));
    const currentYear = new Date().getFullYear();
    console.log(currentYear - yearStudent  + ' age (debug)');
    return currentYear - yearStudent >= 18 ? null : {not18: true};
  }
  checkPass(abstractControl: AbstractControl): any {
    console.log(abstractControl.value);
    console.log(abstractControl.value.password);
    console.log(abstractControl.value.passwordConfirm);
    return abstractControl.value.password === abstractControl.value.passwordConfirm ? null : {wrongPassword: true};
  }
}
