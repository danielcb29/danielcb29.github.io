import { Component, OnInit } from '@angular/core';
import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.tt-fullHeight').height($(window).height());

      $(window).resize(function(){
          $('.tt-fullHeight').height($(window).height());
      });
  }

}
