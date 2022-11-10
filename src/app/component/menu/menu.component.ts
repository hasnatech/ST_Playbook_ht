import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MainService } from 'src/app/common/main.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() scroll = new EventEmitter();
  serverName: any;
  

  sticky = false;
  menu_click = false;
  whitelogo;
  logohome;
  issearch;

  constructor(service: MainService, private router: Router) { }
  ngOnInit() {
    var ths = this;
    window.onscroll = function () {
      //console.log(document.documentElement.scrollTop);
      //var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
      ths.scroll.emit(document.body.scrollTop || document.documentElement.scrollTop);
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        ths.sticky = true;
      } else {
        ths.sticky = false;
      }
    };
    this.router.events.subscribe((evt) => {
      if (this.router.url == "/" || this.router.url == "/home") {
        this.whitelogo = false;
        this.logohome = true
      } else {
        this.whitelogo = true;
        this.logohome = false
      }

    });
  }

  search() {
    this.issearch = this.issearch ? false : true;
    setTimeout(()=>{
      (<HTMLInputElement>document.getElementById("searchBox")).focus();
    }, 500)
    
  }
  searchFunc(value) {
    this.serverName = value;
    this.router.navigateByUrl('search/'+value)
    this.issearch = false
  }


}
