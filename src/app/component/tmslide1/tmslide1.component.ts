import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/common/main.service';

declare var TweenMax: any;
declare var ScrollMagic: any;

@Component({
  selector: 'app-tmslide1',
  templateUrl: './tmslide1.component.html',
  styleUrls: ['./tmslide1.component.scss']
})
export class TMslide1Component implements OnInit {
  selectedItem;
  heading = "Transformation Management Office";
  description = `<p>Our <b>Transformation Management Office (TMO)</b> is leading the cross-company effort to drive 
  growth by becoming more effective and efficient, building new capabilities and changing how we work so we can 
  successfully serve customers in the future.</p>`
  items = [
    {
      link: "/OD_COE_partners",
      title: "How the OD COE partners with the TMO People Leads",
      image: "assets/images/practice.png",
    },
    {
      link: "/capablity_development",
      title: "How we support the Capability Development in light of the TMO",
      image: "assets/images/chain.png",
    },
    {
      // link: "https://cargillonline.sharepoint.com/sites/cargillconnects/Pages/articleViewer.aspx?articleItemId=5F2D965E-679F-4BA4-8414-03A0036FA8E4&Source=/sites/cargillconnects/Pages/Home.aspx?pageIdOverwrite=https%3A%2F%2Fcargillonline.sharepoint.com%2Fsites%2Fcargillconnects%2Fcorpcomm%2FPages%2F200220_Julian_Chase.aspx",
      title: "Read more about Cargill’s Game Plan for Success and how TMO ties in <u>here</u>",
      image: "assets/images/arrow.png",
    },
  ]
  constructor(private service: MainService) { }
  
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
  tab(n) {
    this.selectedItem == n;
  }
}
