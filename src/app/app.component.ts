import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { HankoService } from "./services/hanko.services";
import { MatButton } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, LoginPageComponent, MatButton, MatToolbar, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit
{
    public title = 'angular-test';

    public constructor(private hankoService: HankoService, private router: Router)
    {
    }

    public ngOnInit(): void
    {
        this.hankoService.updateUser()
    }
}
