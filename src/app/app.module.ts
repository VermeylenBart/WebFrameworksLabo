import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';

import {WeatherComponent} from './weather/weather.component';
import { DelijnComponent } from './delijn/delijn.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router'
import { NavComponent } from './nav/nav.component';
import { CalcComponent } from './calc/calc.component';
import { GameComponent } from './game/game.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget'

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DelijnComponent,
    HomeComponent,
    WelcomeComponent,
    NavComponent,
    CalcComponent,
    GameComponent,
    PageNotFoundComponent
  ],
  imports: [
    MDBBootstrapModule,
    RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "calc", component: CalcComponent},
      {path: "game", component: GameComponent},
      {path: "**", component: PageNotFoundComponent}
    ], {useHash: true}),
    AngularWeatherWidgetModule.forRoot({
      key: "3cb0834e1943aa72e4c74433b7edc11b",
      name: WeatherApiName.OPEN_WEATHER_MAP,
      baseUrl: 'http://api.openweathermap.org/data/2.5'
    }),
    BrowserModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
