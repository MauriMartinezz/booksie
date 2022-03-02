import { switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';

import { BehaviorSubject, from, Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = new BehaviorSubject(this.afAuth.authState);
  user$: Observable<firebase.User | null> = this.user.pipe(
    switchMap((user) => user)
  );

  public userEmailPassword: User = {
    identification: 0,
    name: '',
    lastName: '',
    email: '',
    username: '',
  };

  constructor(public readonly afAuth: AngularFireAuth) {}

  getCurrentUser(): Promise<any> {
    return this.afAuth.currentUser.then((m: any) => {
      return m.uid;
    });
  }

  googleLogin(): Observable<firebase.auth.UserCredential> {
    return from(
      this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    );
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async register(email: string, password: string): Promise<any> {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async logout(): Promise<any> {
    try {
      await this.afAuth.signOut();
    } catch (e) {
      console.log(e);
    }
  }
}
