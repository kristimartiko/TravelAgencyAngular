import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { TripComponent } from './trip/trip.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { UsermanagmentComponent } from './admin/usermanagment/usermanagment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddUserComponent } from './admin/usermanagment/add-user/add-user.component';
import { TripsmanagmentComponent } from './admin/tripsmanagment/tripsmanagment.component';
import { AddTripComponent } from './trip/add-trip/add-trip.component';
import { EditTripComponent } from './trip/edit-trip/edit-trip.component';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    LoginComponent,
    TripComponent,
    AdminComponent,
    UsermanagmentComponent,
    AddUserComponent,
    TripsmanagmentComponent,
    AddTripComponent,
    EditTripComponent,
    FlightComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    CommonModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  entryComponents: [
    MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
