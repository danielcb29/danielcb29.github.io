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

    circularConfig = {
        max: 100,
        color: '52b3d9',
        background: '3a4149',
        responsive: true,
        radius: 140
    }

    circularData = {
        leadership: 80,
        creativity: 90,
        confidence: 100,
        communication: 80,
        english: 90,
        spanish: 100

    }

    constructor() { }

    ngOnInit() {

    }

}
