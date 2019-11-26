import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  dataModel={
    email:'',
    password:''
  };
  x;
  display = false;

  constructor() { }

  select1(g){
    this.x = g;
    this.display = !this.display;
  }

  signin(){
    firebase.auth().signInWithEmailAndPassword(this.dataModel.email,this.dataModel.password).catch(function(error) {
      // Handle Errors here.
      
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        // ...
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('user is signed in');
        location.assign('Home56');
      } else {
        // No user is signed in.
      }
    });
  }
  signup(){
    firebase.auth().createUserWithEmailAndPassword(this.dataModel.email,this.dataModel.password).catch(function(error) {
      // Handle Errors here.
      if(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error,error);
      // ...
      }
      else{
        
        // location.assign('Home56');
      }
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        alert('Sign up successful '+ this.dataModel.email);
        location.assign('Home56');
      } else {
        // No user is signed in.
      }
    });
  }

  ngOnInit() {
    
  }

}
