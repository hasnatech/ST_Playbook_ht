import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  heading = "Search";
  result;
  data = [
    {
      link: "about",
      title: "Organization Development",
      content: "Whether you’re reimagining your business model, deploying a new strategy, optimizing your culture, future proofing your...",
      keywords: ['OD', 'COE', 'Practice', 'Areas', 'Organization', 'Development', 'Partner', 'Deliver']
    },
    {
      link: "Our_OD",
      title: "Our OD practice Areas",
      content: "OD increases the effectiveness of people in organizations through focusing on organizational change...",
      keywords: ['OD', 'COE', 'Practice', 'Areas', 'Organization', 'Development', 'Design', 'Change', 'Management', 'Culture', 'Leadership', 'Engagement', 'links', 'toolkit', 'templates', 'MADJV', 'Reorganization', 'Strategic', 'People Transformation']
    },
    {
      link: "How_we_partner",
      title: "How we partner",
      content: "The Talent Performance (TP) domain is responsible for overseeing the design and delivery...",
      keywords: ['OD', 'COE', 'Practice', 'Areas', 'Organization', 'Development', 'Partner', 'Deliver', 'BHR', 'business', 'HR', 'Talent', 'Performance', 'GHRS', 'Talent', 'Management', 'Learning', 'Inclusion', 'Diversity', 'Domain', 'TP']
    },
    {
      link: "How_we_deliver",
      title: "How we deliver",
      content: "In delivering our OD services, there is a strong partnership between TCOE OD, GHRS OD as well as BHR and TMO People Leads/BHR, each focusing on different...",
      keywords: ['OD', 'COE', 'Practice', 'Areas', 'Organization', 'Development', 'Partner', 'Deliver', 'BHR', 'business', 'HR', 'Talent', 'Performance', 'GHRS', 'Talent', 'Management', 'Learning', 'Inclusion', 'Diversity', 'Domain', 'TP']
    },
    {
      link: "Strategic_People_Transformation",
      title: "Strategic People Transformation",
      content: "Strategic People Transformation is one of the OD Practice Areas and covers the diagnosis of organizational shifts which have a people impact and is needed...",
      keywords: ['Strategic', 'People Transformation', 'Practice', 'Areas', 'strategy', 'GPS']
    },
    {
      link: "Trans_mgmt_off",
      title: "Transformation Management Office (including underlying pages)",
      content: "The TMO includes our Project Management Office (PMO) and our Business Process Governance (BPG) teams and capabilities, which together drive execution excellence...",
      keywords: ['TMO', 'People Leads', 'OD', 'COE', 'Development', 'Capability', 'Game', 'Plan', 'TO', 'Transformation', 'Office', 'Levers']
    },
    {
      link: "key_partners",
      title: "Partners",
      content: "Strategic People Transformation is one of the OD Practice Areas and covers the diagnosis of organizational shifts which have a people impact and is needed...",
      keywords: ['Corporate', 'affairs', 'global', 'communication', 'learning', 'development', 'talent', 'management', 'inclusion', 'diversity', 'GHRS', 'TP']
    },
    {
      link: "corporate_affairs",
      title: "Global Communications",
      content: "All change projects with external impact should be connected with CA comms resource for external and media relations...",
      keywords: ['Corporate', 'affairs', 'communication', 'relations', 'industrial', 'media', 'change', 'stakeholders internal', 'external', 'narrative', 'global']
    },
    {
      link: "global_learning_mgmt",
      title: "Global Learning & Development",
      content: "New learner-centric design methods and digital learning technologies allow us to deliver high-impact learning experiences...",
      keywords: ['learning', 'global', 'development', 'learner', 'centric', 'digital', 'learning', 'strategy']
    },
    {
      link: "global_talent_mgmt",
      title: "Global Talent Management",
      content: "We are focused on developing and delivering high-quality talent programs, processes, methodologies, and tools...",
      keywords: ['Global', 'talent', 'management', 'reward', 'attract', 'select', 'strategy']
    },
    {
      link: "toolkits_template",
      title: "Toolkits & Templates",
      content: "This section provides a brief overview of the available OD specific toolkits and templates, each tying back to the OD practice areas...",
      keywords: ['OD', 'COE', 'Practice', 'Areas', 'Organization', 'Development', 'Design', 'Change', 'Management', 'Culture', 'Leadership', 'Engagement', 'links', 'toolkit', 'templates', 'MADJV', 'Reorganization', 'Strategic', 'People Transformation', 'DCA', 'driving', 'growth mindset']
    }

  ]

  searchValue;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.searchValue = params['id'] //log the value of id
      console.log(this.searchValue);
      this.searchChange();
    })
  }
  searchChange() {
    console.log(this.searchValue);
    this.result = this.data.filter((item) => {
      /*item.keywords = item.keywords.map(function (e) {
        return e.toUpperCase()
      });
      console.log(item.keywords);
      return (item.keywords.includes(this.searchValue.toUpperCase()));*/
      item['resultKey'] = item.keywords.filter((key) => {
        return (key.toUpperCase().includes(this.searchValue.toUpperCase()));
      });
      console.log(item.keywords);
      var keywordStr = item.keywords.join("").toUpperCase();
      return (keywordStr.includes(this.searchValue.toUpperCase()));
    });
    
    console.log(this.data);
      console.log(this.result);
  }


}
