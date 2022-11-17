import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ''
  password: string = ''
  email: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  login(): void{
    let user_obj = {
      username: this.username,
      password: this.password,
      email: this.email
    }
    let user_str: string = JSON.stringify(user_obj);
    localStorage.setItem('userinfo', user_str);
  }


}
