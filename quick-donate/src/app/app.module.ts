import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_templates/home/home.component';
import { LoginComponent } from './_templates/login/login.component';
import { RegisterComponent } from './_templates/register/register.component';
import { PostCampaignComponent } from './_templates/postcampaign/postcampaign.component';
import { MessagesComponent } from './_templates/messages/messages.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CampaignComponent } from './_templates/campaign/campaign.component';
import { NotFoundComponent } from './_templates/not-found/not-found.component';
import { ModalComponent } from './_templates/modal/modal.component';
import { DonationComponent } from './_templates/donation/donation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PostCampaignComponent,
    MessagesComponent,
    CampaignComponent,
    NotFoundComponent,
    ModalComponent,
    DonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
