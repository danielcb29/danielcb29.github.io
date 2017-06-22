import { Component, OnInit } from '@angular/core';
import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

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

  }

}
