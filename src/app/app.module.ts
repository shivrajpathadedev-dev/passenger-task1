import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { PassengerDashboardComponent } from './component/passenger-dashboard/passenger-dashboard.component';
import { PassengerCardComponent } from './component/passenger-card/passenger-card.component';
import { PassengerCountComponent } from './component/passenger-count/passenger-count.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerDashboardComponent,
    PassengerCardComponent,
    PassengerCountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
