import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    latitude = 6.244203;
    longitude = -75.581212;
    minZoom = 14;

    city = 'Medellín'
    country = 'Colombia'

    phone = '(+57) 312 769 34 02';

    email = 'danielc.web@gmail.com';

    skype = '@danielcb29';

    constructor() { }

    ngOnInit() {
    }

}
