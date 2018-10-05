import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { FiveDayWeatherComponent } from './five-day-weather/five-day-weather.component';
//import { FormValidationsComponent } from './form-validations/form-validations.component';
import { FormsComponent } from './forms/forms.component';



const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'weather', component: CurrentWeatherComponent },
  { path: 'forecast', component: FiveDayWeatherComponent },
  { path: 'form', component: FormsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
