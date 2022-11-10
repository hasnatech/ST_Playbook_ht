import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MainService } from 'src/app/common/main.service';

@Component({
  selector: 'app-flip3-d',
  templateUrl: './flip3-d.component.html',
  styleUrls: ['./flip3-d.component.scss'],

})
export class Flip3DComponent implements OnInit {
  selectedtab = [];
  instruction = "Click the icon to learn more."

  items = [
    {
      title: "What is the purpose of this playbook?",
      image: "assets/images/click.png",
      description: "Our central goal is to provide you with a reference resource into the world of Organization Development (OD) and transformation, aided by processes, relevant tools and links to valuable resources that help you drive people transformation."
    },
    {
      title: "How does this playbook support you?",
      image: "assets/images/2men.png",
      description: `<ul>
      <li>It helps to understand the drivers and mechanism for transformation at Organization, our Transformation Management Office (TMO) and how Strategic People Transformation works with the TMO People Leads</li><br>
      <li>It provides context on OD and how we partner with our transformation related colleagues</li><br>
      <li>It clarifies the several OD capability areas and how we work together, with a focus on how Strategic People Transformation ties together the separate practice areas</li><br> 
      </ul>`
    },
    {
      title: "For whom is this Playbook intented?",
      image: "assets/images/chain3.png",
      description: `<p>The playbook addresses OD practitioners and non-OD practitioners, who are (in)directly involved in driving Strategic People Transformation activities and focuses on the People aspect of the transformation.</p>
                    <p>The key user groups are:</p>
                    <ul><li>Talent Performance OD COE & OD GHRs</li><br>
                    <li>TMO People Leads</li><br>
                    <li>Talent COE Partners (e.g. Global Communications, BHR, BRM and TP Partners)</li><br>
                    <li>Organization Transformation Leaders</li>
                    </ul>`
    }

  ]

  constructor(private service: MainService) { }

  ngOnInit() {

  }

  tab(n) {
    /*for (let index = 0; index < this.selectedtab.length; index++) {
      this.selectedtab[index] = false;
    }*/
    if (this.selectedtab[n] == undefined) {
      this.selectedtab[n] = true;
    } else {
      this.selectedtab[n] = !this.selectedtab[n];
    }

  }
  back() {


  }

}
