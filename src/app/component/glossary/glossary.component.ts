import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent implements OnInit {
  heading = "Glossary Page"
  selectedLetter = "All";
  letters = ["All", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  contents = [
    {
      title: "ACI",
      content: `This is a programmatic way to structure a comprehensive deep-dive, set aspirational targets, and install rigorous and targeted project management to quickly change the trajectory of a 
  business’s profitability and effectiveness.  To learn more, click 
  <a>here.</a>`,

    },
    {
      title: "Agile",
      content: "Upper case “A” Agile vs. lower case “a” agile: Lower case agile is a trait, the upper case can be regarded as a group of software development methodologies based on iterative development, where requirements and solutions evolve through collaboration between self-organizing cross-functional teams."
    },
    {
      title: "BHR",
      content: "Business Human Resources"
    },
    {
      title: "BRM",
      content: "Business Relationship Manager"
    },

    {
      title: "CA",
      content: "Corporate Affairs"
    },
    {
      title: "COGS",
      content: "Cost of Goods Sold"
    },
    {
      title: "Commercial Excellence ",
      content: "Commercial Excellence to how we serve customers for the entire commercial (sales, marketing, technical services, strategic pricing) organization."
    },
    {
      title: "CBS",
      content: `Organization Business Services. Read more 
  <a>here.</a>`
    },
    {
      title: "COE",
      content: "Center of Excellence"
    },
    {
      title: "Design Thinking",
      content: `An iterative and human-centered process for problem solving. Read more 
  <a>here.</a>`
    },
    {
      title: "GPS",
      content: `Game Plan for Success. Read more 
  <a>here.</a>`
    },
    {
      title: "GHRS",
      content: "Global Human Resources Solutions"
    },
    {
      title: "IBP",
      content: "Integrated Business Processes"
    },
    {
      title: "L&D",
      content: "Learning & Development"
    },
    {
      title: "LT",
      content: "Leadership Team"
    },
    {
      title: "MADJV",
      content: "Merger Acquisition Divestment Joint Venture"
    },
    {
      title: "Manufacturing Excellence",
      content: "Systematic management of our capital, reliability and prod​uction excellence efforts"
    },
    {
      title: "OD",
      content: "Organization Development"
    },
    {
      title: "Operational Excellence",
      content: "The execution of the business strategy in a more consistently and reliably manner, aiming for lower operational risk, lower operating costs, and increased revenues relative to others/the status quo."
    },
    {
      title: "Program",
      content: "A program refers to multiple projects which are managed and delivered as a single initiative"
    },
    {
      title: "Project",
      content: "A project refers to a specific, singular endeavor to deliver a tangible output."
    },
    {
      title: "RPA",
      content: "Robotics Process Automation"
    },
    {
      title: "SG&A",
      content: "Selling, General & Administrative Expense"
    },
    {
      title: "SLG",
      content: "Senior Leadership Group"
    },
    {
      title: "Stakeholder",
      content: "A person or group of people that has interest or concern in our organization, or in context of the playbook. Transformation."
    },
    {
      title: "TMO",
      content: `Transformation Management Office. Read more <a href="">here.</a>`
    },
    {
      title: "TO",
      content: `Transformation Office. Read more <a href="">here.</a>`
    },
    {
      title: "TP",
      content: "Talent Performance"
    },
    {
      title: "Transformation",
      content: "A fundamental and systemic change and typically includes addressing multiple aspects of how work gets done, such as processes, practices, technologies, skill sets or org structures. As a methodology, ‘transformation’ refers to both ‘what’ as well as ‘how’ a business undertakes a significant change."
    },
    {
      title: "Zero-based work",
      content: "(or Customer-back Zero-Based Redesign) clean sheet org and process design across functions and enterprises."
    },

  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }
  isGetdata(s) {
    if (!s || s.toLowerCase() == 'all') return true;

    s = s.toLowerCase();
    var arr = this.contents.filter(function (item) {
      return (item.title.charAt(0).toLowerCase() == s.toLowerCase());
    });
    return arr.length > 0;
  }
}
