import { Component } from '@angular/core';
import { MyInfo } from './myClasses/myInfo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'A3bask';

  bio: MyInfo = {
  id : 991618972,
  name : "Kubra Bas",
  username : "bask",
  program : "CP",
  email : "bask@sheridancollege.ca",
  homecountry : "Canada",
  picturename : "girl.jpg"
  
  }
}
