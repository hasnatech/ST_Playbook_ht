import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }
  transformY = [];
  dontMove;
  ngOnInit() {


    //document.getElementById("myDIV").style.transform = "rotate(7deg)";

    var slides = document.getElementsByClassName("triangle-div");
    for (var i = 0; i < slides.length; i++) {
      var elem = slides[i];
      //elem['style'].transform = "translateY(" + i * 150 +")";
      //console.log(elem);
      this.transformY[i] = (i * 250) + Math.random() * 250;
    }

    /*anime({
      targets: '.triangle-div',
      translateX: '100%',
      translateY: [function (el) {
        (Math.random() * 1500) + 500
      }, function (el) {
        return (Math.random() * 1500) + "px";
      }],
      duration: function (el) {
        return (Math.random() * 250000) + 250000;
      }
    });


    anime({
      targets: '.triangle',
      rotate: '360deg',
      duration: 250000
    });*/

    this.onResize(null);
    //var parallaxInstance = new Parallax(scene);


    var ths = this;
    
    document.getElementById("hero").addEventListener("mousemove", function (e) {

      if (ths.dontMove == true) {

      } else {
        var x = e.screenX / 50;
        document.getElementById("image_women").style.transform = "translateX(-" + x + "px)";

        var x = e.screenX / 30;
        document.getElementById("content").style.transform = "translateX(" + x + "px)";


        var x = e.screenX / 50;
        document.getElementById("banner").style.transform = " translateX(" + x + "px)";


        var x = e.screenX / 60;
        document.getElementById("tri_1").style.transform = " translateX(" + x + "px)";
        document.getElementById("tri_2").style.transform = " translateX(-" + x + "px)";
        document.getElementById("tri_3").style.transform = " translateX(-" + x + "px)";
      }
    });


  }

  onResize(event) {
    var windowSize = window.innerWidth;
    if (windowSize < 840) {
      this.dontMove = true;
    } else {
      this.dontMove = false;
    }
    console.log(windowSize);
  }
}
