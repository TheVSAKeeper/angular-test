import { Routes } from '@angular/router';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { accessGuard } from "./auth/access.guard";
import { LayoutComponent } from "./common-ui/layout/layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomePageComponent
            },
            {
                path: 'profile',
                component: ProfilePageComponent
            },
        ],
        canActivate: [accessGuard]
    },
    {
        path: 'login',
        component: LoginPageComponent
    }
];
