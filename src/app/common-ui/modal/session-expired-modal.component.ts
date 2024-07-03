import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { HankoService } from "../../services/hanko.services";

@Component({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    selector: 'app-session-expired-modal',
    standalone: true,
    styleUrls: ['../../app.component.scss'],
    templateUrl: './session-expired-modal.component.html'
})
export class SessionExpiredModalComponent
{
    @ViewChild('modal') public modal?: ElementRef<HTMLDialogElement>;
    public error?: Error;

    public constructor(private hankoService: HankoService, private router: Router)
    {
    }

    public redirectToLogin()
    {
        this.router.navigate(['login']).catch((error) => (this.error = error));
    }

    public show()
    {
        this.modal?.nativeElement.showModal();
    }
}
