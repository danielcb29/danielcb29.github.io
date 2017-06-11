import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  experience: Array<any> = [
    {
      date: 'Jul 17-Current',
      title: 'Web UI Engineer',
      company: 'Globant, Medellín, Colombia',
      description: [
        'Angular 4 :)'
      ]
    },
    {
      date: 'Jan 17-Jun 17',
      title: 'FrontEnd Engineer',
      company: 'PSL (International), Medellín, Colombia',
      description: [
        'Project GTL - Tablet Management: Inmates tablets configuration management, command and control functionality',
        'UI Stack: AngularJS + Grunt + Typescript + RequireJS + Karma + Jasmine + Bootstrap + HTML5 + LESS',
        'Scrum software Methodology'
      ]
    },
    {
      date: 'Feb 15-Dec 16',
      title: 'FullStack Enginner',
      company: 'Universidad del Valle, Cali, Colombia',
      description: [
        'Project “SIND Coldeportes” a SaaS solution for the Colombian Sport Department (Coldeportes)',
        'Agile and Extreme Programming (XP) Software Methodology',
        'Back Stack: Django with Django-tenant-schemas + Django-rest-framework + PostgreSQL + batch',
        'Front Stack: Jquery, Bootstrap, HTML5/CSS3 for UI.',
        'Multi-tenant model for SaaS architecture.'
      ]
    }
  ];
  education: Array<any> = [
    {
      date: 'Feb 12-Jun 17',
      title: 'B.Sc Computer Science',
      company: 'Universidad del Valle, Cali, Colombia',
      description: [
        'Awarded Academic Scholarships for being at the top of the class',
        'Teaching assistant of Algorithms and Programming, Discrete Math, Introduction to IT and Calculus I courses 2012-2014',
        'Computer Science Study Center (CENESIS) coordinator for student events from 2013 to 2015.'
      ]
    },
    {
      date: 'Sep 15-Jul 16',
      title: 'B.Sc Computer Science',
      company: 'Universidad de Extremadura, Cáceres, Spain',
      description: ['International Exchange Student awared by Pacific Aliance 2015/16 Scholarship']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
