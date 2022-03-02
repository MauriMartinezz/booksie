import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { User } from 'src/app/auth/models/user.interface';
import { Book } from 'src/app/booksie/models/Book.interface';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private userCollection!: AngularFirestoreCollection<any>;
  private loansCollection!: AngularFirestoreCollection<any>;
  users!: Observable<any[]>;
  loans!: Observable<any[]>;
  constructor(private readonly firestore: AngularFirestore) {
    this.userCollection = this.firestore.collection('users');
    this.loansCollection = this.firestore.collection('loans');

    this.users = this.userCollection.valueChanges();
    this.loans = this.loansCollection.valueChanges();
  }

  getUsers() {
    return this.users;
  }

  createUser(user: User) {
    if (user) {
      this.userCollection.doc(user.identification.toString()).set(user);
    } else {
      console.error("User doesn't have the correct format");
    }
  }

  getLoans(): Observable<any> {
    return this.loans;
  }

  createLoan(bid: string, identification: string) {
    const path = this.loansCollection.doc(bid);

    if (!this.loansCollection.doc(bid)) {
      this.loansCollection
        .doc(bid)
        .collection('/users')
        .add({ identification });
      path.set({
        bid: bid,
      });
    } else {
      this.loansCollection
        .doc(bid)
        .collection('/users')
        .add({ identification });
    }
  }

  isBookAvailable(book: Book, uid: string): any {}
}
