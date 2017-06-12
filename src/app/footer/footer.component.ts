import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


    personalLinks = {
        linkedin: 'https://www.linkedin.com/in/danielcb29',
        github: 'https://github.com/danielcb29',
        email: 'danielc.web@gmail.com'
    }
    constructor() { }

    ngOnInit() {
    }

}
