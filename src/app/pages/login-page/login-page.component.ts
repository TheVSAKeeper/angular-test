import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from "@angular/router";
import { HankoService } from "../../services/hanko.services";

@Component({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    selector: 'app-login',
    standalone: true,
    styleUrls: ['./login-page.component.scss'],
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent
{
    public error?: Error;

    public constructor(private hankoService: HankoService, private router: Router)
    {
    }

    public redirectAfterLogin()
    {
        this.hankoService.updateUser()
            .then(_ => this.router.navigate(['profile'])
                .catch((error) => (this.error = error)));

    }
}
