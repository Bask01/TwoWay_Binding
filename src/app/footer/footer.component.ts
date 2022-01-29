import { Component, OnInit, Input } from '@angular/core';
import { MyInfo } from '../myClasses/myInfo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footerInfo!: MyInfo;
  
  constructor() { }

  ngOnInit(): void {
  }

}
