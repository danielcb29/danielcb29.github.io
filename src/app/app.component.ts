import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import $ from 'jquery/dist/jquery';
import * as WOW from 'wow.js/dist/wow.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {

      // Template configuration
      $('#pre-status').fadeOut();
      $('#tt-preloader').delay(350).fadeOut('slow');

      new WOW({ mobile:  false }).init();
  }

}
