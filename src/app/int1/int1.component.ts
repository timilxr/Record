import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-int1',
  templateUrl: './int1.component.html',
  styleUrls: ['./int1.component.css']
})
export class Int1Component implements OnInit {

   g = 0;
   name;
   Data = [];
   


  constructor() { }

  calc(x){
    this.Data.splice(0);
    this.g = x;
    firebase.database().ref('users/').once('value', (snapshot) => {

      //let x = snapshot.child;
      snapshot.forEach(childSnapshot=>{
       
        switch (this.g) {
          case 1:
          if(childSnapshot.val().Interest =="foodhub"){
            this.Data.push(childSnapshot.val());
            this.name = childSnapshot.val().Interest;
          }
            break;
          case 2:
            if(childSnapshot.val().Interest == 'smartautos'){
              this.Data.push(childSnapshot.val());
              this.name = childSnapshot.val().Interest;
            }
            break;
            case 3:
            if (childSnapshot.val().Interest =="smartmarket") {
              this.Data.push(childSnapshot.val());
              this.name = childSnapshot.val().Interest;
            }
            break;
            case 4:
            if (childSnapshot.val().Interest =="training") {
              this.Data.push(childSnapshot.val());
              this.name = childSnapshot.val().Interest;
            }
            break;
          default:
            break;
        }
      });
  
      // console.log(this.userData);
    });
  }


  ngOnInit() {
  }

}

