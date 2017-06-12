import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Keys
import { googleMapsKey } from './app.keys';

// Dependencies
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';

// Components
import { ROUTES } from './app.routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { HiredComponent } from './hired/hired.component';
import { FactsComponent } from './facts/facts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AboutComponent,
    FooterComponent,
    ResumeComponent,
    SkillsComponent,
    WorksComponent,
    ContactComponent,
    HiredComponent,
    FactsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: false}),
    AgmCoreModule.forRoot({
      apiKey: googleMapsKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
