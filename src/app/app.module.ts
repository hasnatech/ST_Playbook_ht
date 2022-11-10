import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
//import {MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './component/hero/hero.component';
import { Slide6Component } from './component/slide6/slide6.component';
import { Flip3DComponent } from './component/flip3-d/flip3-d.component';
import { MenuComponent } from './component/menu/menu.component';
import { CardComponent } from './component/card/card.component';
import { VideoPanelComponent } from './component/video-panel/video-panel.component';
import { Slide5Component } from './component/slide5/slide5.component';
import { Slide4Component } from './component/slide4/slide4.component';
import { Slide9Component } from './component/slide9/slide9.component';
import { Slide10Component } from './component/slide10/slide10.component';
import { AboutOdComponent } from './pages/about-od/about-od.component';
import { TMofficeComponent } from './pages/tmoffice/tmoffice.component';
import { TMslide1Component } from './component/tmslide1/tmslide1.component';
import { Tmslide2Component } from './component/tmslide2/tmslide2.component';
import { Tmslide3Component } from './component/tmslide3/tmslide3.component';
import { BlankpageComponent } from './component/blankpage/blankpage.component';
import { How_we_partnerComponent } from './pages/about-od/how_we_partner/how_we_partner.component';
import { Our_ODComponent } from './pages/about-od/our_od/our_od.component';
import { StrategicComponent } from './component/strategic/strategic.component';
import { FaqComponent } from './component/faq/faq.component';
import { GlossaryComponent } from './component/glossary/glossary.component';
import { SearchPipe } from './filterdata.pipe';

import { PracticeComponent } from './component/practice/practice.component';
import { KeypartnersComponent } from './component/keypartners/keypartners.component';
import { CoaffairsComponent } from './component/coaffairs/coaffairs.component';
import { GloballearningComponent } from './component/globallearning/globallearning.component';
import { GlobaltalentComponent } from './component/globaltalent/globaltalent.component';
import { GlobalinclusionComponent } from './component/globalinclusion/globalinclusion.component';
import { SearchComponent } from './pages/search/search.component';
import { ToolkitComponent } from './component/toolkit/toolkit.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { GlobalTalentPerformanceComponent } from './component/global-talent-performance/global-talent-performance.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    Slide6Component,
    Flip3DComponent, MenuComponent, CardComponent, VideoPanelComponent, Slide5Component, Slide4Component,
    How_we_partnerComponent, Our_ODComponent, Slide9Component, Slide10Component, AboutOdComponent,
     TMofficeComponent, TMslide1Component, Tmslide2Component, Tmslide3Component, BlankpageComponent,
      StrategicComponent, FaqComponent, GlossaryComponent, SearchPipe,PracticeComponent, KeypartnersComponent, CoaffairsComponent, GloballearningComponent, GlobaltalentComponent, GlobalinclusionComponent, SearchComponent, ToolkitComponent, BreadcrumbComponent, SummaryComponent, GlobalTalentPerformanceComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
