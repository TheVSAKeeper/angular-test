import { Component } from '@angular/core';
import { WeatherForecastListComponent } from "../../common-ui/weather-forecast-list/weather-forecast-list.component";

@Component({
    selector: 'app-weather-forecast-page',
    standalone: true,
    imports: [
        WeatherForecastListComponent
    ],
    templateUrl: './weather-forecast-page.component.html',
    styleUrl: './weather-forecast-page.component.scss'
})
export class WeatherForecastPageComponent
{
}
