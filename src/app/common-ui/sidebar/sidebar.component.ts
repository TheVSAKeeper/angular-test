import { AsyncPipe, JsonPipe, NgForOf, NgOptimizedImage } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ProfileService } from "../../services/profile.service";
import { MatNavList } from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [
        NgForOf,
        AsyncPipe,
        JsonPipe,
        RouterLink,
        RouterLinkActive,
        MatNavList,
        NgOptimizedImage,
        MatIcon
    ], 
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit
{
    profileService = inject(ProfileService)

    me = this.profileService.me

    menuItems = [
        {
            label: 'Главная страница',
            icon: 'home',
            link: ''
        },
        {
            label: 'Профиль',
            icon: 'account_circle',
            link: 'profile'
        },
        {
            label: 'Прогноз погоды',
            icon: 'cloud_circle',
            link: 'weather'
        },
    ]

    ngOnInit()
    {
        //  firstValueFrom(this.profileService.getMe())
    }
}
