import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInVisible = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login(): void {
    console.log('A user is logging in');
    this.signInVisible = false;
    return this.userService.login();
  }

  logOut(): void {
    console.log('The user logged out');
    this.signInVisible = true;
    return this.userService.logOut();
  }

}
