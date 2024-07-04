import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from "@angular/material/card";
import { WeatherForecast } from "./weather.forecast";
import { MatDivider } from "@angular/material/divider";

@Component({
    selector: 'app-weather-forecast',
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatDivider
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './weather-forecast.component.html',
    styleUrl: './weather-forecast.component.scss'
})
export class WeatherForecastComponent
{
    @Input() public forecast!: WeatherForecast;

    public constructor()
    {
    }

    public getDayOfWeek(dayOfWeek: number): string
    {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[dayOfWeek];
    }
}
