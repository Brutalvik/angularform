import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  logintext = '';
  clicked = false;
  constructor() { }

  ngOnInit(): void {

  }

/*  // tslint:disable-next-line:typedef
  fetchUser(event: any){
    this.username = event.target.value;
    console.log(this.username);
  }

  // tslint:disable-next-line:typedef
  fetchPassword(event: any){
    this.password = event.target.password;
    console.log(this.password);
  }*/

  // tslint:disable-next-line:typedef
  onLogin() {
    this.clicked = true;
    this.logintext = 'You are now Logged In';
    console.log(this.username, this.password)
    this.username = '';
    this.password = '';
  }

  // tslint:disable-next-line:typedef
  onLogout() {
    this.clicked = false;
    this.logintext = 'You have now successfully Logged Out.';

  }

}
