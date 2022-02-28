import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import firebase from 'firebase/compat/app';

import { Router } from '@angular/router';
import { BehaviorSubject, from, Observable } from 'rxjs';
// import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = new BehaviorSubject(this.afAuth.authState);
  user$: Observable<firebase.User | null> = this.user.pipe(
    switchMap((user) => user)
  );

  constructor(
    private readonly router: Router,
    private readonly afAuth: AngularFireAuth,
    private readonly afs: AngularFirestore
  ) {}

  googleLogin(): Observable<firebase.auth.UserCredential> {
    return from(
      this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    );
  }

  logout(): Observable<void> {
    return from(this.afAuth.signOut());
  }
}
