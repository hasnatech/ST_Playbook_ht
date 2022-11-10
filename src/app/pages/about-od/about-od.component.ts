import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/common/main.service';

declare var TweenMax: any;
declare var ScrollMagic: any;

@Component({
  selector: 'app-about-od',
  templateUrl: './about-od.component.html',
  styleUrls: ['./about-od.component.scss']
})
export class AboutOdComponent implements OnInit {
 
  heading = "Organization Development";
  description="Whether you’re reimagining your business model, deploying a new strategy, optimizing your culture, future proofing your organization design, or need more effective leadership engagement, <b>Organization Development (OD) is your partner with a unique blend of relevant & innovative solutions that help you accelerate results.<p>"
  items = [
    {
      hover : false,
      link:"/Our_OD",
      title: "Our OD Practice Areas",
      description:"Our OD services are divided into five practice areas. Click here to learn more about these in detail.",
      image: "assets/images/practice.png",
      image_hover: "assets/images/practice_white.png"
    },
    {
      hover : false,
      link:"/How_we_partner",
      title: "How we partner",
      description: "Read more about how we work together with our Talent COE partners and beyond.",
      image: "assets/images/chain.png",
      image_hover: "assets/images/chain_white.png"
    },
    {
      hover : false,
      link:"/How_we_deliver",
      title: "How we deliver",
      description: "Together with our partners we deliver our OD work across the different practice areas, this section this section highlights our key work.",
      image: "assets/images/arrow.png",
      image_hover: "assets/images/arrow_white.png"
    },
  ]
  constructor(private router:Router, private service: MainService) { }
  speed = 0.5;
  ngOnInit() {

        //Hide Scroll Arrow
       var items = document.querySelectorAll('.down_arr');
        var length = items.length;
        var down_arr = items[0];
        var tween1 = TweenMax.fromTo(down_arr, this.speed, { opacity: 1, ease: "power2.out" }, { opacity: 0, ease: "power2.out" });
        var scene = this.service.setScrollMagic("#slide5_card", tween1, 1, 200);
        scene.reverse(true);

  }
  goto(id) {
    this.router.navigateByUrl(id);
  }
}
