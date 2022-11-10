import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tmslide3',
  templateUrl: './tmslide3.component.html',
  styleUrls: ['./tmslide3.component.scss']
})
export class Tmslide3Component implements OnInit {
  heading = "How we support the Capability Development in light of the TMO  ";

  items = [
    {
      title:"Transformational Leadership",
      image:"assets/images/grid2.png",
      desc:"Leading during times of transformation",
      // link:"https://cargillonline.sharepoint.com/sites/TMO_Capability_Building/SitePages/Home.aspx#/"
    },

    {
      title:"Transformation Enabled",
      image:"assets/images/grid3.png",
      desc:"Enablers that will help transform our business",
      // link:"https://cargillonline.sharepoint.com/sites/TMO_Capability_Building/SitePages/Home.aspx#/"
    },
    {
      title:"Transformation Excecution",
      image:"assets/images/grid1.png",
      desc:"Woridng differentiy to achleve our goals",
      // link:"https://cargillonline.sharepoint.com/sites/TMO_Capability_Building/SitePages/Home.aspx#/"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
