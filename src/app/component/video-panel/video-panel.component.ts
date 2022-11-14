import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-panel',
  templateUrl: './video-panel.component.html',
  styleUrls: ['./video-panel.component.scss']
})
export class VideoPanelComponent implements OnInit {
  items = [
    // {
    //   type: "left",
    //   title: "Welcome to the new Strategic People Transformation Playbook!",
    //   desc: `<p>We are happy to have launched this reviewed playbook and are happy you are here.</p>
    //   <p>Watch Ellen Stewart’s (HR Transformation & OD COE Leader) message for all our playbook visitors.</p>`,
    //   image: "assets/images/video1.png",
    //   button: " Play Video"
    // },
    {
      type: "right",
      title: "Culture HR Update – March 2020: Culture diagnostic takes the pulse",
      desc: "As part of Organization’s strategy refresh, earlier this year HR kicked off a project to understand our current culture better and develop a blueprint for the future. Given how critical culture is to achieving our business goals, this work continues full speed ahead",
      image: "assets/images/video2new.jpg",
      button: "Read more"
    },
    {
      type: "left",
      title: "Project Arch",
      desc: "With the pace of change and amount of digital disruption, the next horizon requires a new type of reimagining that focuses our workforce transformations toward a more customer-centric Organization.",
      image: "assets/images/video3_1.png",
      button: "Read more"
    }
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  readmoreClick(id){
    if(id == 2){
      this.router.navigateByUrl("summary");
    }else if(id == 0){
      console.log(id)
      window.open("https://web.microsoftstream.com/video/70fbd4c7-acc1-40c2-a66f-aff77249c8f4");
    }
  }
}

