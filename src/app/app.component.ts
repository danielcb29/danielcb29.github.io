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

      // $('a[href*=#]').bind('click', function(e){
      //     const anchor = $(window);
      //     $('html, body').stop().animate({
      //         scrollTop: $(anchor.attr('href')).offset().top
      //     }, 1000);
      //     e.preventDefault();
      // });

      $('.tt-fullHeight').height($(window).height());

      $(window).resize(function(){
          $('.tt-fullHeight').height($(window).height());
      });

      // $('.header').sticky({
      //     topSpacing: 0
      // });

      // $('body').scrollspy({
      //     target: '.navbar-custom',
      //     offset: 70
      // })

      $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

      $('.skill-progress').bind('inview', (event, visible, visiblePartX, visiblePartY) => {
          if (visible) {
              $.each($('div.progress-bar'), () => {
                  $(window).css('width', $(window).attr('aria-valuenow') + '%');
              });
              $(window).unbind('inview');
          }
      });

      new WOW({ mobile:  false }).init();
  }

}
