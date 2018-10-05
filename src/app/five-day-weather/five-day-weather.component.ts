import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-five-day-weather',
  templateUrl: './five-day-weather.component.html',
  styleUrls: ['./five-day-weather.component.css']
})
export class FiveDayWeatherComponent implements OnInit {
  title:string = "5 day / 3 hour forecast";
  fiveDayreport:{};
  constructor(private weatherService: WeatherService) { }
  
  ngOnInit() {
    this.getFiveDayForecast(this.weatherService.zipCode);
    this.weatherService.zipCodeChanges$.subscribe(
      changedZipCode => {
        this.getFiveDayForecast(changedZipCode);
      }
    );
  }

  getFiveDayForecast(zipCode): void {
    this.weatherService.getFiveDayForecast(zipCode)
    .subscribe((report) => {
      this.fiveDayreport = report;
    });
  }

}
