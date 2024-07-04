import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from "../weather-forecast/weather.forecast";
import { WeatherForecastService } from "../../services/weather-forecast.service";
import { WeatherForecastComponent } from "../weather-forecast/weather-forecast.component";
import { MatButton } from "@angular/material/button";

@Component({
    selector: 'app-weather-forecast-list',
    standalone: true,
    imports: [
        WeatherForecastComponent,
        MatButton
    ],
    templateUrl: './weather-forecast-list.component.html',
    styleUrl: './weather-forecast-list.component.scss'
})
export class WeatherForecastListComponent implements OnInit
{
    public forecasts: WeatherForecast[] = [];
    public ruForecasts: WeatherForecast[] = [];

    public constructor(private weatherForecastService: WeatherForecastService)
    {
    }

    public ngOnInit(): void
    {
        this.refreshForecasts();
    }

    public refreshForecasts(): void
    {
        this.weatherForecastService.getForecasts().subscribe(forecasts =>
        {
            this.forecasts = forecasts;
        });

        this.weatherForecastService.getRuForecasts().subscribe(forecasts =>
        {
            this.ruForecasts = forecasts;
        });
    }
}
