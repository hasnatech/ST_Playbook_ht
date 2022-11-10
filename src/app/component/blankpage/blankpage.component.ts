import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blankpage',
  templateUrl: './blankpage.component.html',
  styleUrls: ['./blankpage.component.scss']
})
export class BlankpageComponent implements OnInit {

  constructor() { }
  
  heading = "Under construction";

  ngOnInit() {
  }

}
