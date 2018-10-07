import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { FiveDayWeatherComponent } from './five-day-weather/five-day-weather.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { AppRoutingModule } from './app-routing.module';
import { FormValidationsComponent } from './forms/form-validations/form-validations.component';
import { LoginService } from './login.service';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormValidationsComponent } from './forms/reactive-form-validations/reactive-form-validations.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CustomerComponent } from './forms/customer/customer.component'


@NgModule({
  declarations: [
    AppComponent,
    FiveDayWeatherComponent,
    CurrentWeatherComponent,
    FormValidationsComponent,
    FormsComponent,
    ReactiveFormValidationsComponent,
    LandingPageComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
