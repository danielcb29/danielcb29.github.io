import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
