import { inject, Injectable } from '@angular/core';
import { HankoService } from "./hanko.services";

@Injectable({
    providedIn: 'root'
})
export class ProfileService
{
    public me;
    private hankoService = inject(HankoService);

    constructor()
    {
        this.me = this.hankoService.user;
    }

    public getMe()
    {
        return this.hankoService.user;
    }
}
