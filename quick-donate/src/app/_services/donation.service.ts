import { Injectable, OnInit } from '@angular/core';
import { Campaign } from '../_models/Campaign';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpHeaderResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { User } from '../_models/user';
import { Donation } from '../_models/Donation';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  donateUrl: string;
  user: User;

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.donateUrl = environment.donate;
    this.user = JSON.parse(localStorage.getItem('loggedInUser'));
  }

  donate(donation: Donation) {

    let reqParams = new HttpParams();
    reqParams = reqParams.append('username', this.user.username).append('email', this.user.email);
    return this.http.post<Campaign>(this.donateUrl, donation, { params: reqParams, observe: 'response' }).pipe(
      tap(resp => {
        if (resp.status === 200) {
          this.messageService.set(`Thank you for the donation! We will collect it shortly.`);
        } else {
          this.messageService.set(`Error while donating..`);
          console.log(`Donate API returned ${resp.status}`);
        }
      }),
      catchError(this.messageService.handleErrorMessage<Donation>(`Donation posting`))
    );
  }
}
