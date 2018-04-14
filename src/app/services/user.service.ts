import { Injectable } from '@angular/core';
import { User } from '../classes/AAAuser';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  currentUser = null;

  constructor(private readonly afAuth: AngularFireAuth) {
    afAuth.authState.subscribe( userData => {
      this.currentUser = userData;
    });
  }

  authenticated(): boolean {
    return this.currentUser !== null;
  }

  getUser(): User {
    return this.currentUser;
  }

  get name(): any {
    return this.authenticated ? this.currentUser.displayName : '';
  }

  login(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(response => {
      this.currentUser = response.user;
      this.currentUser.score = 0;
    });
    console.log(this.currentUser);
  }

  logOut(): void {
    this.afAuth.auth.signOut();
    this.currentUser = null;
  }

}
