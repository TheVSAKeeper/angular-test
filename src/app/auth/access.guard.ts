import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { HankoService } from "../services/hanko.services";

export const accessGuard: CanActivateFn = (route, state) =>
{
    const hankoService = inject(HankoService);
    const router = inject(Router);

    if (hankoService.isLogon || state.url === '/login')
        return true;

    return router.createUrlTree(['login']);
};
