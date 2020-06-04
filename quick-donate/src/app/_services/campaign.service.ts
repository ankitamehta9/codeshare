import { Injectable, OnInit } from '@angular/core';
import { Campaign } from '../_models/Campaign';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpHeaderResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class CampaignService implements OnInit {
  postCampaignUrl: string;
  getCampaingnsUrl: string;
  user : User;
 

 /* httpOptions = {
    headers : {'Content-Type':  'application/json'} as const,
    observe: 'response' as const,
     // ,'Authorization': 'my-auth-token'
  }; */

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.postCampaignUrl = environment.postCampaign;
    this.getCampaingnsUrl = environment.getCampaigns;
    this.user = JSON.parse(localStorage.getItem('loggedInUser'));
  }

  ngOnInit() {

  }


  createCampaign(campaign: Campaign) {
    return this.http.post<Campaign>(this.postCampaignUrl, campaign, {observe: 'response'}).pipe(
      tap(resp => {
        if (resp.status === 200) {
          this.messageService.set(`Campaign posted successfully`);
        } else {
          this.messageService.set(`Error while posting campaign`);
          console.log(`Post campain API returned ${resp.status}`);
        }
      }),
      catchError(this.messageService.handleErrorMessage<Campaign>(`Campaign posting`))
    );
  }

  /* used by non ngo user - all sorted pending campaigns */
   getAllCampaigns(): Observable<Campaign[]> {
    let reqParams = new HttpParams();
    reqParams = reqParams.append('pickedup', 'N').append('username', this.user.username).append('email', this.user.email).append('usertype', this.user.usertype);
    return this.http.get<Campaign[]>(this.getCampaingnsUrl,{params: reqParams});
  }


  getCampaignsByUser() {
  

  }


}
