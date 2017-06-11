import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';

export const ROUTES: Routes = [
  {path: '', component: AboutComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'works', component: WorksComponent},
  {path: 'contact', component: ContactComponent},
  // {path: '404', component: NotFoundComponent},
  // {path: '**', redirectTo: '404'},

];
