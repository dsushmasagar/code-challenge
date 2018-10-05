import { Component, OnInit  } from '@angular/core';

import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private weatherService: WeatherService) { };
  zipCode:string;
 
  fiveDayreport:{};
  title = 'angular-challenge';
  
  ngOnInit() {
    this.zipCode = this.weatherService.zipCode;
    this.weatherService.zipCodeChanges$.subscribe(
      changedZipCode => {
        this.zipCode = changedZipCode;
      }
    );
  }

  updateZip($event) {
    if($event.length == 5 && this.zipCode != $event) {
        this.zipCode = $event;
        this.weatherService.changeZipCode(this.zipCode);
    }
  }
}

