import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { PrecComponent } from './prec/prec.component';
import { Int1Component } from './int1/int1.component';
import { ProfileComponent } from './profile/profile.component';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCTI32mq_VxQ5Uekd-foAXWgX2Ug_ClkpE",
  authDomain: "practise2-47afa.firebaseapp.com",
  databaseURL: "https://practise2-47afa.firebaseio.com",
  projectId: "practise2-47afa",
  storageBucket: "practise2-47afa.appspot.com",
  messagingSenderId: "565027157994"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    PrecComponent,
    Int1Component,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent},
      {path: 'Home56', component: PrecComponent},
      {path: 'Login', component: LandingComponent},
      {path: 'Profile', component: ProfileComponent},
      {path: 'INTEREST1', component: Int1Component}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
