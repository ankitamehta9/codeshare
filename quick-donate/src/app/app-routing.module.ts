import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './_templates/home/home.component';
import { LoginComponent } from './_templates/login/login.component';
import { RegisterComponent } from './_templates/register/register.component';
import { PostCampaignComponent } from './_templates/postcampaign/postcampaign.component';
import { CampaignComponent } from './_templates/campaign/campaign.component';
import { NotFoundComponent } from './_templates/not-found/not-found.component';
import { DonationComponent } from './_templates/donation/donation.component';
// import { AuthGuard } from './_guards';


const routes: Routes = [
  { path: '', component: LoginComponent /*canActivate: [AuthGuard]*/ },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'postcampaign', component: PostCampaignComponent},
  { path: 'campaigns', component: CampaignComponent},
  { path: 'donate', component: DonationComponent},
  { path: 'not-found', component: NotFoundComponent, pathMatch: 'full'},
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
