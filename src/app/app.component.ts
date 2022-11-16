import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MainService } from './common/main.service';
import { security } from 'ht-security';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playbook';
  homeVisible;
  show_popup = false;
  constructor(private router: Router, private service: MainService) { }

  ngOnInit() : void {
    this.router.events.subscribe((evt) => {
      console.log(this.router.url);
      if (this.router.url == "/" || this.router.url == "/home") {
        this.homeVisible = false;
      } else {
        this.homeVisible = true;
      }
      this.show_popup = false;
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
      this.service.destroyScrollMagic();
    });


  }

  ngAfterViewInit(): void {
    security({
      mode: "development" 
      // mode: "deployment"     
    });
}
  
  goUp() {
    window.scrollTo(0, 0)
  }
  _show_floating;
  scroll($event) {
    console.log($event + " > " + (window.innerHeight / 3));
    if ($event > window.innerHeight / 3) {
      this._show_floating = true;
    } else {
      this._show_floating = false;
    }
  }
  openWindow(url) {
    this.show_popup = false;
    window.open(url, "_blank");
  }
  
}
