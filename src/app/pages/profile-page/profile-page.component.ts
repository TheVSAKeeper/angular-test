import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal, WritableSignal } from '@angular/core';
import { User } from "@teamhanko/hanko-elements";
import { AsyncPipe, JsonPipe, NgForOf } from "@angular/common";
import { SessionExpiredModalComponent } from "../../common-ui/modal/session-expired-modal.component";
import { HankoService } from "../../services/hanko.services";
import { Router } from "@angular/router";
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from "@angular/material/card";
import { MatList, MatListItem } from "@angular/material/list";
import { MatButton } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";
import { MatDivider } from "@angular/material/divider";
import { MatGridList, MatGridTile } from "@angular/material/grid-list";
import { DataRowOutlet } from "@angular/cdk/table";
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
    imports: [
        NgForOf,
        SessionExpiredModalComponent,
        MatCard,
        MatCardContent,
        MatCardHeader,
        JsonPipe,
        MatList,
        MatListItem,
        MatButton,
        MatToolbar,
        MatCardActions,
        MatDivider,
        MatGridTile,
        MatGridList,
        DataRowOutlet,
        FlexLayoutModule,
        AsyncPipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    selector: 'app-profile',
    standalone: true,
    styleUrls: ['./profile-page.component.scss'],
    templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent implements OnInit
{
    public error?: Error;
    public user: WritableSignal<User | null> = signal<User | null>(null);

    public userInfo?: {
        token?: string;
        payload?: JSON;
    };


    public constructor(private hankoService: HankoService, private router: Router)
    {
    }


    public logout()
    {
        this.hankoService.logout().catch((error) => (this.error = error));
    }

    public redirectToLogin()
    {
        this.router.navigate(['login']).catch((error) => (this.error = error));
    }

    public async ngOnInit()
    {
        if (!this.hankoService.client.session.isValid())
        {
            this.redirectToLogin();
        }

        this.user = this.hankoService.user;
    }

    public async getUserInfo()
    {
        this.userInfo = await this.hankoService.getUserInfo();
    }
}
