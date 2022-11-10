import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how_we_partner',
  templateUrl: './how_we_partner.component.html',
  styleUrls: ['./how_we_partner.component.scss']
})
export class How_we_partnerComponent implements OnInit {
  hidden2 = false;
  hidden3 = false;
  current = false
  hidden1: boolean = false;
  heading = "How we partner";
  constructor() { }

  ngOnInit() {
  }
  onclick1() {
    this.hidden1 = this.hidden1 ? false : true
    this.current = true
    this.hidden2 = false;
    this.hidden3 = false;
  }
  onclick2() {
    this.hidden2 = this.hidden2 ? false : true
    this.hidden1 = false;
    this.hidden3 = false
  }
  onclick3() {
    this.hidden3 = this.hidden3 ? false : true
    this.hidden2 = false;
    this.hidden1 = false
  }

}
