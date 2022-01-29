import { Component, OnInit, Input } from '@angular/core';
import { MyInfo } from '../myClasses/myInfo';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() contentInfo !: MyInfo;
  currentDate = new Date();
  season : string = "Fall";

 
  constructor() { }

  ngOnInit(): void {
  }

    roundBorder () {
      var myimage = document.getElementById("myimg")!
      myimage.style.borderRadius = "70px";
      myimage.style.border = "thick solid purple"
  }

  squareBorder () {
    var myimage = document.getElementById("myimg")! 
    myimage.style.borderRadius = "0px";
    myimage.style.border = "thick double HotPink";  
  }

}
