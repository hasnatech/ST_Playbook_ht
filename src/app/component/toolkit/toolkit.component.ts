import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolkit',
  templateUrl: './toolkit.component.html',
  styleUrls: ['./toolkit.component.scss']
})
export class ToolkitComponent implements OnInit {

  heading="OD Toolkits & Templates"
  description = `This section provides a brief overview of the available OD specific toolkits and templates, each tying back to the OD practice areas. More information can also be found under the respective 
  <a href="/#/Our_OD">OD practice areas.</a>`
  constructor() { }

  ngOnInit() {
  }

}
