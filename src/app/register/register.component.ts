import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = ''
  password: string = ''
  email: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  register(): void{
    let user_obj = {
      username: this.username,
      password: this.password,
      email: this.email
    }
    let user_str: string = JSON.stringify(user_obj);
    localStorage.setItem('userinfo', user_str);
  }

}
