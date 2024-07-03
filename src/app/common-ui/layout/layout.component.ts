import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SessionExpiredModalComponent } from "../modal/session-expired-modal.component";
import { MatSidenav, MatSidenavContainer } from "@angular/material/sidenav";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [
        RouterOutlet,
        SidebarComponent,
        SessionExpiredModalComponent,
        MatSidenavContainer,
        MatSidenav
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent
{
}
