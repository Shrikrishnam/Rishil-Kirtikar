import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { PlaceFitnessTrainerAppointmentComponent } from './Components/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';
import { ViewAppointmentComponent } from './Components/view-appointment/view-appointment.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RestService } from './Services/rest.service';
import { UserService } from './Services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactUsComponent,
    PlaceFitnessTrainerAppointmentComponent,
    ViewAppointmentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [RestService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
