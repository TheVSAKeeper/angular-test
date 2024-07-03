import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { HankoService } from "../services/hanko.services";

export const authTokenInterceptor: HttpInterceptorFn = (req, next) =>
{
    if (req.url.startsWith('\assets')) return next(req);

    /*const TraceId = Guid.create().toString();
    req = req.clone({setHeaders: {TraceId}})*/

    const token = inject(HankoService).accessToken;
    if (!!token)
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })

    return next(req);
};
