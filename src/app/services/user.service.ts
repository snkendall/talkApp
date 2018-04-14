import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { User } from '../classes/AAAuser';

@Injectable()
export class UserService {

  currentUser = null;

  auth: any;

  constructor() {
    this.auth = firebase.auth();
    this.auth().authState.subscribe( userData => {
      this.currentUser = userData;
    });
  }

  authenticated(): boolean {
    return this.currentUser !== null;
  }

  getUser(): User {
    return this.currentUser;
  }

  getName(): any {
    return this.authenticated ? this.currentUser.displayName : '';
  }

  login(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider).then(response => {
      this.currentUser = response.user;
      this.currentUser.score = 0;
    });
    console.log(this.currentUser);
  }

  logOut(): void {
    this.auth.signOut();
    this.currentUser = null;
  }

}
