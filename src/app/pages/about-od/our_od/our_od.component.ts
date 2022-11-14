import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-our_od',
  templateUrl: './our_od.component.html',
  styleUrls: ['./our_od.component.scss'],
  animations: [
    trigger('animate', [
      state('flyIn', style({ transform: 'translateY(0)', opacity:1 })),
      transition(':enter', [
        style({ transform: 'translateY(10%)', opacity:0 }),
        animate('0.5s 0.3s ease')
      ]),
      transition(':leave', [
        animate('0.1s ease-out', style({ transform: 'translateY(10%)', opacity:0 }))
      ]),
      state('flyIn2', style({ transform: 'translateY(0)', opacity:1 })),
      transition(':enter', [
        style({ transform: 'translateY(-10%)', opacity:0 }),
        animate('0.5s 0.3s ease-in')
      ]),
      transition(':leave', [
        animate('0.1s ease-out', style({ transform: 'translateY(-10%)', opacity:0 }))
      ])
    ])
  ]
})
export class Our_ODComponent implements OnInit {

  selectedItem;
  heading = "Our OD Practice Areas";
  item1 = [
    {
  
      title: "<h3>What we do</h3>",
      desc:`<p><b>We help the Enterprises and Functions to prepare for and implement multiple 
      transformational initiatives which have people impacts, thereby looking across the various 
      OD services.</b></p>
      <p>We collaborate with the TMO People Leads to support in capability building programs, 
      initial diagnostics/resourcing of initiative teams as well as other key roles.</p>
      <p><b>We diagnose, prioritize, measure and align with people changes that drive value and strive 
      minimize business disruption</b> and aim to maintain an umbrella point of view to identify key 
      value add levers and partner with clients to understand the best approach for sustainable 
      change.</b></p>`
    },
    {
      
    title: "<h3>Typical Work</h3>",
     desc:`<p><b>Typical Strategic People Transformation work includes Functions Transformations, 
     Strategy and/or Operating Model changes, MADJV and collaborating with the Transformation 
     People Leads. </b></p>
     <p>In addition, <b>we always collaborate with our other OD practice areas</b>
      as these form an essential part in delivering transformations successfully.
     </p>`
     
    },
    {
       image:"assets/images/transformation.png" 
      },
    {
      title: "<h3>With whom do we deliver?</h3>",
      desc:`<ul>
      <li><b>Global OD COE:</b> Overall OD diagnostics supporting enterprise/functions strategy and leads
       transformation people strategy
      </li>
      <li><b>GHRS OD:</b> Executes and leads regional transformation implementations</li>
      <li><b>Partners:</b> Enterprise & Function Transformation Leads, TMO People leads and BHRs</li>
      <li><b>3rd party:</b> Leverage for specialized capabilities (i.e. future of work analysis, external benchmarking) and for strategy, planning
       and implementation support</li>
       </ul>`
    },
    {
   
     title: "<h3>Relevant Links<h3>",
    //  desc:`<ul>
    //  <li><a href="#/Trans_mgmt_off">Transformation Management Office</a></li>
    //  <li><a href="https://cargill-admin.ancileuperform.com/ucontent/761e38c9926048c59a23191d4b7b024f_en-US/index.html" targrt="_blank">Reorganization Playbook</a></li>
    //  <li><a href="https://sites.cargill.com/sites/MyHR4HR/SiteCollectionDocuments/GHRS-OpEx-Playbook.pdf#search=GHRS%20playbook" targrt="_blank">GHRS Playbook</a></li>
    //  <li><a href="https://sites.cargill.com/sites/MyHR4HR/SiteCollectionDocuments/Cargill_MADJV_HR_PLAYBOOK_FINAL.pdf#search=MADJV playbook" targrt="_blank">MADJV Playbook</a></li></ul>`
    },
    

  ]
  
  item2 = [
    {
  
      title: "<h3>What we do</h3>",
      desc:`<p>When it comes to leadership, building alignment and engagement across leaders is key in order to create and leverage of organizational momentum. The level of cohesiveness of the group determines the extent to which leadership will be able to drive transformations successfully.</p>
      <p><b>Our methodology helps diagnose issues and identifies opportunities</b> through 
      understanding the predictable stages of team development. We provide <b>frameworks and 
      tools to help build and influence team dynamics, based on models such as the Drexler 
      Sibbet Team Performance Model, Gallup Strengthsfinder and The Table Group.</b></p>`
    },
    {
      
    title: "<h3>Typical Work</h3>",
     desc:`<p><b>Typical Leadership Engagement work includes the Senior Leadership Group Sessions</b> 
     (organized in March/October 2019), <b>Group level team effectiveness</b> after a reorganization or 
     acquisition and <b>Functional Level team interventions,</b> to improve performance in preparation for 
     transformations.</p>
     <p>Note: our work focuses on team performance and excludes performance 
     issues of individual roles.</p>`
     
    },
    {
       image:"assets/images/leadership.png" 
      },
    {
      title: "<h3>With whom do we deliver?</h3>",
      desc:`<ul>
      <li><b>Global OD COE:</b> Strategy, design, and delivery of the Senior Leadership Group (SLG) 
      Engagement Sessions</li>
      <li><b>GHRS OD: Support delivery</b> of SLG sessions. <b>Diagnose and deliver team effectiveness and performance 
      interventions</b> as a part of overall transformation efforts</li>
      <li><b>Partners:</b> Corporate Affairs, Corporate Strategy, L&D, and TMO</li>
      <li><b>3rd party:</b> Ability to augment GHRS OD or provide 
      tailored leadership engagement offerings for senior leader teams</li>
       </ul>`
    },
    {
   
      title: "<h3>Relevant Links<h3>",
  //    desc:`<ul>
  //    <li><a href="https://cargillonline.sharepoint.com/sites/orgdevelopment/Resources/Drexler%20Sibbet%20Team%20Performance%20Model.aspx" targrt="_blank">Drexler Sibbet Team Performance Model</a></li>
  //    <li><a href="https://cargillonline.sharepoint.com/sites/orgdevelopment/Resources/Gallup%20CliftonStrengths.aspx" targrt="_blank">Gallup Strengthsfinder</a></li>
  //    <li><a href="https://cargillonline.sharepoint.com/sites/orgdevelopment/Resources/The%20Table%20Group%20(Lencioni).aspx" targrt="_blank">The Table Group</a></li>
  //  </ul>`
    },
    

  ]

  item3 = [
    {
  
      title: "<h3>What we do</h3>",
      desc:`<p>Culture is shared values and beliefs practiced. Our shared mindset 
      influences how we behave, the way we act and the decisions we make. We can intentionally 
      shape our culture to help drive strategy.</p>
      <p><b>When working to change culture, the first step is understanding where we today 
      and what needs to shift.</b> We have a strategy, methodology, approach and tools to 
      diagnose our current culture and optimize it to drive tangible business results.</p>`
    },
    {
      
    title: "<h3>Typical Work</h3>",
     desc:`<p><b>Our Culture OD Practice is engaged in work where reinforcement of a culture of high 
     performance is key</b> and building a strong alignment towards that. We help our organization and people to realign 
     following significant organizational changes (e.g. new strategy, transformation, MADJV) 
     and support integration of multiple organizational cultures in the context of MADJV 
     execution activities.</p>
     <p>Key component for success in our Culture work is that our businesses have a strategy 
     defined, as this is critical for future success.</p>`
     
    },
    {
       image:"assets/images/culture.png" 
      },
    {
      title: "<h3>With whom do we deliver?</h3>",
      desc:`<ul>
      <li><b>Global OD COE:</b> Supports Enterprise or global function wide organizations; will also 
      ensure global approach in projects for business groups spanning multiple regions</li>
      <li><b>GHRS OD:</b> Supports regional business groups / businesses / functional organizations</li>
      <li><b>Partners:  Corporate Affairs, Corporate Strategy, Global Learning & Development, Global Inclusion & Diversity and the Transformation Management Office
      ,</b> NeuroScience Institute & Denison Consulting</li>
       </ul>`
    },
    {
   
      title: "<h3>Relevant Links<h3>",
  //    desc:`<ul>
  //    <li><a href="https://cargillonline.sharepoint.com/sites/orgdevelopment/Resources/Growth%20Mindset%20Culture%20%5bNeuroScience%20Institute%5d.pdf" targrt="_blank">Growth Mindset Culture</a><br>(NeuroScience Institute)</li>
  //    <li><a href="https://www.youtube.com/watch?v=4cBN8xH-5Qw" targrt="_blank">What is organizational culture?</a></li>
  //    <li><a href="https://sites.cargill.com/sites/Understanding_Cargill/Pages/Cargill-Corporate-Values.aspx" targrt="_blank">Cargill Values</a></li>
  //    <li><a href="https://idiinventory.com/" targrt="_blank">Intercultural Development Inventory</a></li>
  //    <li><a href="https://cargillonline.sharepoint.com/sites/UnderstandingCargill/GPS_subsite/advancing_our_culture/SitePages/Home.aspx">Culture work at Cargill</a></li>
  //  </ul>`
    },
  ]
  item4 = [
    {
  
      title: "<h3>What we do</h3>",
      desc:`<p><b>Organization Design looks at structures, processes, systems, metrics, 
      rewards, and people to optimize business performance.</b> We have an organization design strategy, 
      methodology, and tools in place to ensure an holistic approach in designing an organization.</p>
      <p>The focus of Organization Design spans across various activities and is 
      directly involved in activities which have to do with the <b>realignment of people</b> based 
      on a new strategy, to market changes or changes required due to competitive pressure, 
      <b>integration or separation of organizations</b> following MADJV execution activities, as well 
      as in <b>optimizing and existing organization structure</b> to be more effective and efficient.</p>`
    },
    {
      
    title: "<h3>Typical Work</h3>",
     desc:`<p>Some typical Organization Design projects involve <b>Customer-back/zero-based redesign, 
     the integration of newly acquired companies or reorganizing a business that has divested 
     assets/ geographies, enabling a higher level of structural fit</b> between certain businesses and 
     functions (pre or post service migrations), an <b>reorganizations to ensure effective deployment 
     of a new strategy,</b> while optimizing key organization metrics.</p>`
     
    },
    {
       image:"assets/images/org_design.png" 
      },
    {
      title: "<h3>With whom do we deliver?</h3>",
      desc:`<ul>
      <li><b>Global OD COE:</b> Enterprise or global function wide organizations. Also ensures the global 
      approach in projects for business groups spanning multiple regions</li>
      <li><b>GHRS OD:</b> Regional business groups / businesses / functional organizations</li>
      <li><b>BHR:</b> Leads low complexity initiatives</li>
      <li><b>3rd party:</b> Leveraged for specialized capabilities (i.e. future of work analysis, 
        external benchmarking) and for strategy, planning and implementation support</li>
       </ul>`
    },
    {
   
      title: "<h3>Relevant Links<h3>",
  //    desc:`<ul>
  //    <li><a href="https://www.youtube.com/watch?v=41v3PENTEXw" targrt="_blank">What is Organization Design?</a><br>(Kates Kesler – based on Jay Galbraith’s STAR Model)</li>
  //    <li><a href="https://cargillonline.sharepoint.com/sites/orgdevelopment/Pages/Org%20Design%20Toolkit.aspx" targrt="_blank">Organization Design Toolkit</a></li>
  //    <li><a href="https://cargill-admin.ancileuperform.com/ucontent/761e38c9926048c59a23191d4b7b024f_en-US/index.html" targrt="_blank">Reorganization Playbook</a></li>
  //    <li><a href="https://sites.cargill.com/sites/MyHR4HR/SiteCollectionDocuments/Cargill_MADJV_HR_PLAYBOOK_FINAL.pdf#search=MADJV playbook" targrt="_blank">MADJV Playbook</a></li>
  //    <li>Span of Control: <a href="https://cargillonline.sharepoint.com/sites/orgdevelopment/Resources/Span%20of%20Control%20Learning%20Video.aspx" targrt="_blank">Learning Video</a></li>
  //  </ul>`
    },
  ]
  item5 = [
    {
      title: "<h3>What we do</h3>",
      desc:`<p class="para">Change Management provides a structured approach to guide organizational
       changes and individual transitions. At Cargill we leverage the Organization Alignment Model
        to help us plan for organizational changes and manage individual transitions. When our
         methodology is applied, it proactively prepares individuals and teams for their new 
         reality which helps us achieve desired outcomes.</p>
      <p>This practice area also provides support for change leadership which concerns the 
      driving forces, visions and processes that fuel large-scale transformation and is associated
       with putting an engine on the whole change process, and making it go faster, smarter, more
        efficiently</p>`
    },
    {
      
    title: "<h3>Typical Work</h3>",
     desc:`<p>Some typical Change Management work includes activities <b>around creating leadership
      engagement, driving large-scale change initiatives/transformations</b> involving all levels 
      in the organization, <b>building agile change capabilities, minimizing the duration and depth
       of the anticipated performance dip</b> during a change and <b>maximizing the incremental benefits.</b>
     </p>`
     
    },
    {
       image:"assets/images/change.png" 
      },
    {
      title: "<h3>With whom do we deliver?</h3>",
      desc:`<ul>
      <li><b>Global OD COE :</b> Covers enterprise or global function wide organizations. Will also
       ensure global coordination in projects for business groups spanning multiple regions</li>
      <li><b>GHRS OD:</b> Across regional business groups/businesses/functional organizations 
      (initiative-level execution for OD services)</li>
      <li><b>Key partners:</b> TMO People lead, initiative leaders and BHR</li>
      <li><b>3rd party:</b> Leveraged for change delivery capabilities</li>
       </ul>`
    },
    {
   
      title: "<h3>Relevant Links<h3>",
  //     desc:`<ul>
  //    <li><a href="https://cargillonline.sharepoint.com/sites/orgdevelopment/Pages/welcome.aspx" targrt="_blank">Driving Change Approach (DCA) Platform</a></li>
  //    <li><a href="https://cargill-admin.ancileuperform.com/ucontent/761e38c9926048c59a23191d4b7b024f_en-US/index.html" targrt="_blank">Reorganization Playbook</a></li>
  //  </ul>`
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
