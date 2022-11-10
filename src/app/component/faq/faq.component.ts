import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  heading = "FAQ"
  items = [
    {
      title: "What is the purpose of this playbook?",
      desc: `The Strategic OD Playbook provides high level information regarding Organization’s Organization Development (OD), it provides context on the TMO and how we partner and mainly guides our stakeholders through the relevant contents which has to do with the people side of Strategic People Transformations.
      <p>Within this space it shows what we do, how we do it and who should be doing it – all captured in one place to ensure we Drive People Transformations as consistently as possible.</p>`,

    },

    {
      title: "For whom is this playbook intended?",
      desc: "The playbook addresses to OD practitioners and non-OD practitioners, who are directly as well as indirectly involved in Strategic People Transformation activities and focuses on the People aspect of the transformation. Think about people whom are directly involved with driving the people side of transformations within Organization such as the OD COE and OD GHRS and the People Leads, but also colleagues such as TP consultants, BRMs and other initiative leaders across the organization.",

    },
    {
      title: "How can this playbook support me in my work?",
      desc: "To drive our people transformation initiatives successfully within Organization, the playbook contains elements which provide general information regarding all areas around Organization’s Organization Development, the concept of Strategic People Transformation (and how it ties all practice areas together), and shares information on our current transformation (TMO) and how we tie into this organizational change as a whole. Our main goal is to provide you guidance on our existing practices and relevant tools and links which help you drive transformations in your own area."
    },
    {
      title: "Can I share this playbook with others?",
      desc: "In order to ensure anyone who is driving/engaged in transformations in a uniform and efficient manner, we do encourage you to share the playbook with others (indirectly) involved in transformation/change activities.",

    },
    {
      title: "I need guidance on how to drive people transformation work and/or apply the provided tools, who can support me with this?",
      desc: `To request OD support, contact your BHR/BRM or <a>submit your request via MyHR.</a>`,
      
    },
    {
      title: "How can I access the relevant toolkits and materials in this playbook?",
      desc: `Most materials are embedded under Toolkits & Templates <span>(To add link to page)</span>. In case of broken links to related websites, <a>submit your request via MyHR.</a>`
      
    },


  ]
  constructor() { }

  ngOnInit() {
  }
  selectedtab;
  tab(n) {
    if (this.selectedtab == n) {
      this.selectedtab = -1;
    } else {
      this.selectedtab = n;
    }

  }
  close() {
    this.selectedtab = -1;

  }
}
