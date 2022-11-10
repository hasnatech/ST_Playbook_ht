import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-strategic',
  templateUrl: './strategic.component.html',
  styleUrls: ['./strategic.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class StrategicComponent implements OnInit {
  selectedItem;
  heading="Strategic People Transformation"
  items = [
    {
  
      title: "What we do",
      desc:`<p class="para">We help the Enterprises and Functions to prepare for and implement multiple 
      transformational initiatives which have people impacts, thereby looking across the various 
      OD services.</p>
      <p><b>We collaborate with the TMO People Leads to support in capability building programs, 
      initial diagnostics/resourcing of initiative teams as well as other key roles.</p>
      <p>We diagnose, prioritize, measure and align with people changes that drive value and strive 
      minimize business disruption</b> and aim to maintain an umbrella point of view to identify key 
      value add levers and partner with clients to understand the best approach for sustainable 
      change.</p>`
    },
    {
      
    title: "Typical Work",
     desc:`<p><b>Typical Strategic People Transformation work includes Functions Transformations, 
     Strategy and/or Operating Model changes, MADJV and collaborating with the Transformation 
     People Leads. </b></p>
     <p>In addition, <b>we always collaborate with our other OD practice areas</b>
      as these form an essential part in delivering transformations successfully.
     </p>`
     
    },
    {
      title: "With whom do we deliver?",
      desc:`<ul>
      <li>Global OD COE: Overall OD diagnostics supporting enterprise/functions strategy and leads
       transformation people strategy
      </li>
      <li>Regional GHRS OD: Executes and leads regional transformation implementations</li>
      <li>Partners: Enterprise & Function Transformation Leads, TMO People leads and BHRs</li>
      <li>3rd party: Leverage for specialized capabilities (i.e. future of work analysis, external benchmarking) and for strategy, planning
       and implementation support</li>
       </ul>`
    },
    {
   
      title: "Relevant Links",
     desc:`<ul>
     <li><a>Transformation Management Office</a></li>
     <li><a>Reorganization Playbook</a></li>
     <li><a>GHRS Playbook</a></li>
     <li><a>MADJV Playbook</a></li></ul>`
    },
    

  ]
  constructor() { }

  ngOnInit() {
  }

}
