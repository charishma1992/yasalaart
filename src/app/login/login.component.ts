import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDetails: any;
  constructor() {

    this.loginDetails = {

      email: this.email,
      password: this.password
    }
  }
  email = {
    type: 'text',
    label: 'Email:',
    value: '',
    placeholder: 'enter email'
  }
  password = {
    type: 'password',
    label: 'Password:',
    value: '',
    placeholder: 'enter password'
  }
  ngOnInit() {
  }

}
