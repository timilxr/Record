import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prec',
  templateUrl: './prec.component.html',
  styleUrls: ['./prec.component.css']
})
export class PrecComponent implements OnInit {

  recModel={
    Surname: '',
    Name: '',
    Phone: '',
    Email: '',
    Interest: '',
    Business_Type:'',
    Business_name: ''
  };


  constructor() { }

  Record(){
    firebase.database().ref('users/' ).push(this.recModel, function(error) {
      if (error) {
        // The write failed...
        alert("failed");
      } else {
        // Data saved successfully!
        alert("successful");
      }
    });
    
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('welcome');
      } else {
        // No user is signed in.
        alert('get out');
        location.assign('');
      }
    });
        }

}
