import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keypartners',
  templateUrl: './keypartners.component.html',
  styleUrls: ['./keypartners.component.scss']
})
export class KeypartnersComponent implements OnInit {
heading="Key Partners"

items = [
  {
    title: "Global Communications",
    image: "assets/images/key1.jpg",
    link: "#/corporate_affairs"
  },

  {
    title: "Global Learning & Development",
    image: "assets/images/key2.jpg",
 
    link: "#/global_learning_mgmt"
  },
  {
    title: "Global Talent Management",
    image: "assets/images/key3.jpg",
   
    link: "#/global_talent_mgmt"
  },
  {
    title: "Global Inclusion & Diversity",
    image: "assets/images/key4.jpg",
    
    link: "#/global_inclusion_diversity"
  },
  {
    title: "GHRS Talent Performance",
    image: "assets/images/key5.jpg",
    link: "#/global_talent_performance"
  }
]

  constructor() { }

  ngOnInit() {
  }
  

}
