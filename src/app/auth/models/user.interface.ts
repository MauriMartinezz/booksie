import { BookLoan } from './../../booksie/models/BookLoan.interface';
export interface User {
  identification: number;
  name: string;
  lastName: string;
  email: string;
  username: string;
  phoneNumber?: number;
  location?: string;
  books?: BookLoan[];
  uid?: string;
}
