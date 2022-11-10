import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
items=[
      {
        title:" Need Transformation Support?",
        image:"assets/images/help1.png",
        description:`Request OD Services <a>here</a> or contact your People Lead, BHR/BRM or Demand Manager`
     },
    {
      title:" More about Organization Development",
      image:"assets/images/info1.png",
      description:` Visit our <a>OD Website</a> and learn more about how we drive transformation`
    }
]
  
  constructor() { }

  ngOnInit() {
  }

}
