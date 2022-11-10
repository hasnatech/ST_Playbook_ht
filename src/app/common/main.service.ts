import { Injectable } from '@angular/core';

declare var TweenMax: any;
declare var ScrollMagic: any;

@Injectable({
  providedIn: 'root'
})
export class MainService {
  controller;
  scene;
  newScene = true;
  constructor() { 
    this.controller = new ScrollMagic.Controller();
    this.newScene = true;
  }

  setScrollMagic(id, tween, duration = 0, offset = 0, pin = null, indicator = "indicator") {
    this.newScene = false;
    //controller.destroy();
					//controller = null;
    //new ScrollMagic.Scene({triggerElement: "#flipcard", duration: 200, offset: -50})
    this.scene = new ScrollMagic.Scene({ triggerElement: id, duration: duration, offset: offset })
      .reverse(false)
      .setTween(tween);
    if (pin != null) {
      this.scene.setPin(pin);
    }

    //this.scene.addIndicators({ name: indicator }); // add indicators (requires plugin)
    this.scene.addTo(this.controller);
    return this.scene;
  }
  destroyScrollMagic(){
    console.log(this.controller )
    if(this.newScene == false){
      console.log("destroyScrollMagic inside")
      this.controller.destroy(true);
      this.scene.destroy(true);
      this.controller = null;
      this.controller = new ScrollMagic.Controller();
      this.newScene = true;
    }
    
    //this.controller = null;
  }
}
