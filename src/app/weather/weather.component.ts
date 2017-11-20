// Information on: https://krzysztofsaja.github.io/angular-weather-widget/
// API key from: https://home.openweathermap.org/api_keys


import { Component } from '@angular/core';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';


@Component({
  selector: "app-weather",
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
    settings: WeatherSettings = {
      location: {
        cityName: 'Antwerpen'
      },
      backgroundColor: '#000',
      color: '#67ff21',
      showWind: true,
      scale: TemperatureScale.CELCIUS,
      showDetails: true,
      showForecast: true,
      layout: WeatherLayout.NARROW,
      language: 'en'
    };
}