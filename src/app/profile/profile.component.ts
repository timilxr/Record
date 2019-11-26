import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  g = 0;

   name; email; photoUrl; token; emailVerified;
   dataModel={
     name: '',
     email: '',
     password: '',
     newpassword: ''
   };

  constructor() { }
  edMail(){
    this.g = 1;
  }
  edPass(){
    this.g = 2;
  }
  edName(){
    this.g = 3;
  }

  nameChange(){
    var user = firebase.auth().currentUser;
user.updateProfile({
  displayName: this.dataModel.name,
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(check => {
  // Update successful.
  alert('Update successful');
  this.name = this.dataModel.name;
}).catch(function(error) {
  // An error happened.
  console.log(error);
  alert('Update not completed');
});
  }
  emailChange(){
    var user = firebase.auth().currentUser;
user.updateEmail(this.dataModel.email).then(check=>{
  // Update successful.
  alert('Update successful');
  this.email = this.dataModel.email;
}).catch(function(error) {
  // An error happened.
  console.log(error);
  alert('Update not completed');
});
  }
  passChange(){
    var user = firebase.auth().currentUser;
user.updatePassword(this.dataModel.newpassword).then(function() {
  // Update successful.
  alert('Update successful');
}).catch(function(error) {
  // An error happened.
  console.log(error);
  alert('Update not completed');
});
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        // User is signed in.
        var user = firebase.auth().currentUser;
        
          this.name = user.displayName;
          this.email = user.email;
          this.photoUrl = user.photoURL;
          this.emailVerified = user.emailVerified;
          this.token = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                           // this value to authenticate with your backend server, if
                           // you have one. Use User.getToken() instead.
        
      } 
    else {
        // User is signed out.
        // ...
        location.assign('');
      }
      // ...
    });
  }

}
