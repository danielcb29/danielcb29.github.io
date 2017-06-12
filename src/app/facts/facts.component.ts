import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

    years = '2+';
    projectsDone = '5';
    githubProjects = '41';
    communityContributions = '2';

    constructor() { }

    ngOnInit() {
    }

}
