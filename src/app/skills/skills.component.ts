import { Component, OnInit } from '@angular/core';
import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  percent = 68;
  options = {
      easing: 'easeOut', // n
      delay: 3000, // n
      barColor: '#68c3a3',
      trackColor: 'rgba(255,255,255,0.2)',
      scaleColor: false,
      scaleLength: 5,
      // lineCap: 'round',
      lineWidth: 8,
      size: 110,
      // rotate: 140,
      animate: {
          duration: 2000,
          enabled: true
      }
    };

    devSkills = {
        frontEnd: '95%',
        backEnd: '80%',
        sourceControl: '90%',
        dataBase: '70%',
        devOps: '30%',
        iOT: '40%'
    }

  constructor() { }

  ngOnInit() {

      // $('.more-skill').bind('inview', (event, visible, visiblePartX, visiblePartY) => {
      //     if (visible) {
      //         $('.chart').easyPieChart({
      //             easing: 'easeOut',
      //             delay: 3000,
      //             barColor: '#68c3a3',
      //             trackColor: 'rgba(255,255,255,0.2)',
      //             scaleColor: false,
      //             lineWidth: 8,
      //             size: 140,
      //             animate: 2000,
      //             onStep: (from, to, percent) => {
      //                 $('.skill-progress').el.children[0].innerHTML = Math.round(percent);
      //             }

      //         });
      //         $('.skill-progress').unbind('inview');
          // }
      // });
  }

}
