import { Component, OnInit } from '@angular/core';
import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = 'Daniel';
  lastName = 'Correa';
  intro = 'Hello World!, I am';
  description = [
    'Software Engineer passionate about writing code and implementing latest awesome technologies.',
    'Always working with best practices, clean, fast and maintainable code.'
  ]

  personalLinks = {
    linkedin: 'https://www.linkedin.com/in/danielcb29',
    github: 'https://github.com/danielcb29',
    email: 'danielc.web@gmail.com'
  }

  constructor() { }

  ngOnInit() {
    $('.tt-fullHeight').height($(window).height());

      $(window).resize(function(){
          $('.tt-fullHeight').height($(window).height());
      });
  }

}
