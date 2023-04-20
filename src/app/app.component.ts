import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  isLogged: boolean = false;
  accountUsername: string = '';

  constructor() {
    this.checkUser();
  }

  checkUser(): void {
    let user_str = localStorage.getItem('userinfo');
    if (user_str === null) {
      return;
    } else {
      let user = JSON.parse(user_str);
      this.accountUsername = user.username;
      this.isLogged = true;
    }
  }

  logout(): void {
    localStorage.clear()
    this.accountUsername = '';
    this.isLogged = false;
  }
}
