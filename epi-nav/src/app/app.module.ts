import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NavComponent } from './nav/nav.component';

export const firebaseConfig = {
 apiKey: masterFirebaseConfig.apiKey,
 authDomain: masterFirebaseConfig.authDomain,
 databaseURL: masterFirebaseConfig.databaseURL,
 storageBucket: masterFirebaseConfig.storageBucket
};



@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
