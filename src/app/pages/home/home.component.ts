import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/common/main.service';

declare var TweenMax: any;
declare var ScrollMagic: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  speed = 0.5;

  constructor(private service: MainService) { }

  ngOnInit() {

    

    setTimeout(() => {
      //flipcard
      var items = document.querySelectorAll('.card-panel .card');
      this.fadeUp("#flipcard", items);

      //Need Transformation Support?
      var items = document.querySelectorAll('.card-holder .card');
      //this.fadeUp("#card-trigger", items);

      //Video
      var items = document.querySelectorAll('.video-holder');
      var length = items.length;
      console.log(length);
      for (var i = 0; i < length; i += 1) {
        var elem = document.getElementById("video_" + i);
        var img = elem.querySelectorAll('.img');
        var card = elem.querySelectorAll('.card');
        var tween1 = TweenMax.fromTo(img, this.speed, { x: 100, opacity: 0.5, ease: "power2.out" }, { x: 0, opacity: 1, ease: "power2.out" });
        var tween2 = TweenMax.fromTo(card, this.speed, { x: -100, opacity: 0, ease: "power2.out" }, { x: 0, opacity: 1, ease: "power2.out" });

        this.service.setScrollMagic("#video_" + i, tween1);
        this.service.setScrollMagic("#video_" + i, tween2);
      }

      //Text Item
      var items = document.querySelectorAll('#slide4 .block');
      this.fadeUp("#slide4", items);

      //Hide Scroll Arrow
      var items = document.querySelectorAll('.down_arr');
      var length = items.length;
      var down_arr = items[0];
      var tween1 = TweenMax.fromTo(down_arr, this.speed, { opacity: 1, ease: "power2.out" }, { opacity: 0, ease: "power2.out" });
      var scene = this.service.setScrollMagic("#flipcard", tween1);
      scene.reverse(true);
    

      //Hide Scroll Arrow
      var items = document.querySelectorAll('#down_arr2');
      
      var down_arr = items[0];
      var tween1 = TweenMax.fromTo(down_arr, this.speed, { opacity: 1, ease: "power2.out" }, { opacity: 0, ease: "power2.out" });
      var scene1 = this.service.setScrollMagic("#down_arr2", tween1);
      scene1.reverse(true);

    }, 1000)

}

fadeUp(triggerId, items){
  var length = items.length;
  for (var i = 0; i < length; i += 1) {
    var tween = TweenMax.fromTo(items[i], this.speed, { y: 100, opacity: 0, ease: "power2.out" }, { delay: i * this.speed, y: 0, opacity: 1, ease: "power2.out" });
    this.service.setScrollMagic(triggerId, tween);
  }
}

fadeRight(triggerId, items){
  var length = items.length;
  for (var i = 0; i < length; i += 1) {
    var tween = TweenMax.fromTo(items[i], this.speed, { x: 100, opacity: 0, ease: "power2.out" }, { delay: i * this.speed, x: 0, opacity: 1, ease: "power2.out" });
    this.service.setScrollMagic(triggerId, tween);
  }
}

}
