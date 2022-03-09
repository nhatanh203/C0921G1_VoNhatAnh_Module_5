import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

class User {
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userForm: FormGroup;
  user: User;

  constructor() {
    this.userForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', [Validators.minLength(6), Validators.required])
    });
  }

  getInfoUser() {
    console.log(this.userForm);
    this.user = Object.assign({}, this.userForm.value);
    console.log(this.user);
  }

  ngOnInit(): void {
  }
}
