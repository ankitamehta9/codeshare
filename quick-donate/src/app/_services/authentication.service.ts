import { Injectable, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
// import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {
  url: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService /*private route: ActivatedRoute,
              private router: Router,*/) {
     this.url = environment.auth;
  }
  ngOnInit(): void {
  }

  login(currentUser: User) {
    return this.http.post<User>(this.url, currentUser, this.httpOptions).pipe(
      map(
        user => {
          console.log(user);
          localStorage.setItem('username', currentUser.username);

          // temporary code to get details from user obj, details should be
          // available from jwt token
          const userAsString = JSON.stringify(user);
          localStorage.setItem('loggedInUser', userAsString);

          const tokenStr = 'Bearer ' + user.token;
          localStorage.setItem('token', tokenStr); // token should contain userType,role etc
          return user;
        }
      ),
      catchError(this.messageService.handleErrorMessage<User>(`Login for ${currentUser.username}`))
    );
  }



  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
  }

  isUserLoggedIn() {
    const user = localStorage.getItem('username');
    // console.log(!(user === null))
    return !(user === null);
  }

  loginOld(currentUser: User): void {
    const url = environment.auth;
    this.http.post<User>(url, currentUser, this.httpOptions).pipe(
      catchError(
        this.messageService.handleErrorMessage<User>(`Login for ${currentUser.username}`)
      )
    ).subscribe(user => {
      if (user) {
        const userAsString = JSON.stringify(user);
        localStorage.setItem('loggedInUser', userAsString);
        // sessionStorage.setItem('loggedInUser', userAsString);
        // this.router.navigate(['home', userAsString]);
      }
      // else {
      // this.router.navigate(['login']);
      // }
    });
  }



  

  /* private log(message: string) {
    this.messageService.set(`${message}`);
  }*/

  /* private handleError<T>(operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {
 
       // TODO: send the error to remote logging infrastructure
       console.error(error); // log to console instead
 
       // TODO: better job of transforming error for user consumption
       this.log(`${operation} failed`); // ${error.message}
 
       // Let the app keep running by returning an empty result.
       return of(result as T);
     };
   }*/

}

