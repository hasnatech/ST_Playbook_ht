import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide5',
  templateUrl: './slide5.component.html',
  styleUrls: ['./slide5.component.scss']
})
export class Slide5Component implements OnInit {
  heading = "Organization Development";
  description="Whether you’re reimagining your business model, deploying a new strategy, optimizing your culture, future proofing your organization design, or need more effective leadership engagement, <b>Organization Development (OD) is your partner with a unique blend of relevant & innovative solutions that help you accelerate results.<p>"
  items = [
    {
      link:"/Our_OD",
      title: "Our OD Practice Areas",
      image: "assets/images/practice.png",
    },
    {
      link:"/How_we_partner",
      title: "How we partner",
      image: "assets/images/chain.png",
    },
    {
      link:"/How_we_deliver",
      title: "How we deliver",
      image: "assets/images/arrow.png",
    },
  ]
  constructor() { }

  ngOnInit() {
  }
  goto(id) {
    document.getElementById(id).scrollIntoView();
  }
}
