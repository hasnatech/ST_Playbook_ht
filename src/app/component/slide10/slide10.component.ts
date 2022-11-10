import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/common/main.service';

declare var TweenMax: any;
declare var ScrollMagic: any;

@Component({
  selector: 'app-slide10',
  templateUrl: './slide10.component.html',
  styleUrls: ['./slide10.component.scss']
})
export class Slide10Component implements OnInit {

myVar=true;
myVar1=true;
myVar2=true;
heading = "How we deliver";
constructor(private service: MainService) { }
speed = 0.5;
ngOnInit() {

      //Hide Scroll Arrow
     var items = document.querySelectorAll('.down_arr');
      var length = items.length;
      var down_arr = items[0];
      var tween1 = TweenMax.fromTo(down_arr, this.speed, { opacity: 1, ease: "power2.out" }, { opacity: 0, ease: "power2.out" });
      var scene = this.service.setScrollMagic("#close_id", tween1, 1, 200);
      scene.reverse(true);

}
/*show(){
  this.myVar=true;
  this.myVar1=false
  this.myVar2=false

}
show1(){
  this.myVar1=true;
  this.myVar=false;
  this.myVar2=false

}
show2(){
  this.myVar2=true;
  this.myVar=false;
  this.myVar1=false
}*/
}
