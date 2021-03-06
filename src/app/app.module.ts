import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ContactComponent } from './contact/contact.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { IndivProjectComponent } from './indiv-project/indiv-project.component';
import { BackFormComponent } from './back-form/back-form.component';
import { EditProjectComponent } from './edit-project/edit-project.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ProjectListComponent,
    ContactComponent,
    NewProjectComponent,
    IndivProjectComponent,
    BackFormComponent,
    EditProjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
