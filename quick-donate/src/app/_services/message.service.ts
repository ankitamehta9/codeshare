import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  message: string;

  set(message: string) {
    console.log(message);
    this.message = message;
    setTimeout(() => this.clear(), 3000);
  }
  clear() {
    this.message = '';
  }

  handleErrorMessage<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.set(`${operation} failed`);
     // console.error(error);
     // console.log(`${error.message}`);
      return of(result as T);
    };
  }
}
