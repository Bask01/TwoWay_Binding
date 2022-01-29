import { Component, OnInit, Input } from '@angular/core';
import { MyInfo } from '../myClasses/myInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerInfo!: MyInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
