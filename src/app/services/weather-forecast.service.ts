import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { WeatherForecast } from "../common-ui/weather-forecast/weather.forecast";

@Injectable({
    providedIn: 'root'
})
export class WeatherForecastService
{
    private apiUrl = 'https://localhost:7003/';

    constructor(private http: HttpClient)
    {
    }

    public getForecasts(): Observable<WeatherForecast[]>
    {
        return this.http.get<WeatherForecast[]>(`${this.apiUrl}weatherforecast`).pipe(
            map(forecasts => forecasts.map(forecast => ({
                ...forecast,
                date: new Date(forecast.date)
            })))
        );
    }

    public getRuForecasts(): Observable<WeatherForecast[]>
    {
        return this.http.get<WeatherForecast[]>(`${this.apiUrl}weatherforecast-two`).pipe(
            map(forecasts => forecasts.map(forecast => ({
                ...forecast,
                date: new Date(forecast.date)
            })))
        );
    }
}
