import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  information = {
    name: 'Daniel Correa',
    birth: '29 January 1994',
    city: 'Medellín, Colombia',
    nationality: 'Colombia',
    phone: '+57 312 769 34 02',
    email: 'danielc.web@gmail.com'
  }

  constructor() { }

  ngOnInit() {
  }

}
