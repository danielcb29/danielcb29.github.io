import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';

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
    HiredComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: false}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgORRJRTtWbquUpYBcfO1GfuMmcZrmEHY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
