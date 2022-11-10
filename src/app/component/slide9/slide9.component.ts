import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes, sequence, state, group } from '@angular/animations';
@Component({
  selector: 'app-slide9',
  templateUrl: './slide9.component.html',
  styleUrls: ['./slide9.component.scss'],
  animations: [
    trigger('animate', [
      state('flyIn', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'translateY(-10%)', opacity: 0 }),
        animate('0.5s')
      ]),
      transition(':leave', [
        animate('0.3s', style({ transform: 'translateY(-10%)', opacity: 0 }))
      ]),
    ])
  ]
})

export class Slide9Component implements OnInit {

  hidden2 = false;
  hidden3 = false;
  current = false
  hidden1: boolean = false
  constructor() { }

  ngOnInit() {
  }
  onResize(event) {
    var elem = document.getElementById("slide9");
    //console.log(elem.offsetWidth);
    var windowSize = event.target.innerWidth; 
    if(windowSize < 1140){
      var per = windowSize/1140;
      //elem.style.transform = "scale(" + per + ")";
    }else
    {
      //elem.style.transform = "scale(1)";
    }
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
