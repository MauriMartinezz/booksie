import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { User } from 'src/app/auth/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private userCollection!: AngularFirestoreCollection<any>;
  items!: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    this.userCollection = this.firestore.collection('users');
    this.items = this.userCollection.valueChanges();
  }

  getUsers() {
    return this.items;
  }

  createUser(user: User) {
    if (user) {
      this.userCollection.add(user);
    } else {
      console.error("User doesn't have the correct format");
    }
  }
}
