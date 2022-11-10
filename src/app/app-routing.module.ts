import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Our_ODComponent } from './pages/about-od/our_od/our_od.component';
import { How_we_partnerComponent } from './pages/about-od/how_we_partner/how_we_partner.component';
import { Slide9Component } from './component/slide9/slide9.component';
import { Slide10Component } from './component/slide10/slide10.component';
import { AboutOdComponent } from './pages/about-od/about-od.component';
import { TMofficeComponent } from './pages/tmoffice/tmoffice.component';
import { TMslide1Component } from './component/tmslide1/tmslide1.component';
import { Tmslide2Component } from './component/tmslide2/tmslide2.component';
import { Tmslide3Component } from './component/tmslide3/tmslide3.component';
import { BlankpageComponent } from './component/blankpage/blankpage.component';
import { StrategicComponent } from './component/strategic/strategic.component';
import { FaqComponent } from './component/faq/faq.component';
import { GlossaryComponent } from './component/glossary/glossary.component';
import { PracticeComponent } from './component/practice/practice.component';
import { KeypartnersComponent } from './component/keypartners/keypartners.component';
import { CoaffairsComponent } from './component/coaffairs/coaffairs.component';
import { GloballearningComponent } from './component/globallearning/globallearning.component';
import { GlobaltalentComponent } from './component/globaltalent/globaltalent.component';
import { GlobalinclusionComponent } from './component/globalinclusion/globalinclusion.component';
import { SearchComponent } from './pages/search/search.component';
import { ToolkitComponent } from './component/toolkit/toolkit.component';
import { SummaryComponent }from './pages/summary/summary.component';
import { GlobalTalentPerformanceComponent } from './component/global-talent-performance/global-talent-performance.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutOdComponent
  },
  {
    path:"management",
    component:TMofficeComponent
  },
  {
    path:"Our_OD",
    component:Our_ODComponent
  },
  {
    path:"How_we_partner",
    component:How_we_partnerComponent
  },
  {
    path:"slide9",
    component:Slide9Component
  },
  {
    path:"How_we_deliver",
    component:Slide10Component
  },
  {
    path:"blank",
    component:BlankpageComponent
  },
  {
    path:"Trans_mgmt_off",
    component:TMslide1Component
  },
  {
    path:"OD_COE_partners",
    component:Tmslide2Component
  },
  {
    path:"capablity_development",
    component:Tmslide3Component
  },
  {
    path:"Strategic_People_Transformation",
    component:StrategicComponent
  },
  {
    path:"faq",
    component:FaqComponent
  },
  {
    path:"glossary_page",
    component:GlossaryComponent
  },
  {
    path:"practice",
    component:PracticeComponent
  },
  {
    path:"key_partners",
    component:KeypartnersComponent
  },
  {
    path:"corporate_affairs",
    component:CoaffairsComponent
  },
  {
    path:"global_learning_mgmt",
    component:GloballearningComponent
  },
  {
    path:"global_talent_mgmt",
    component:GlobaltalentComponent
  },
  {
    path:"global_talent_performance",
    component:GlobalTalentPerformanceComponent
  },
  {
    path:"global_inclusion_diversity",
    component:GlobalinclusionComponent
  },
  {
    path: "toolkits_template",
    component: ToolkitComponent
  },
  {
    path:"search/:id",
    component:SearchComponent
  },
  {
    path:"summary",
    component:SummaryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
