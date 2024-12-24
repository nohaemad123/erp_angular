import { SignInWithoutTenantComponent } from './modules/auth/sign-in-without-tenant/sign-in-without-tenant.component';
import { Route } from '@angular/router';
import { provideTranslocoScope } from '@ngneat/transloco';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from '@shared/layout/layout.component';
import { AuthSignInComponent } from './modules/auth/sign-in/sign-in.component';
import { SignInWithTenantComponent } from './modules/auth/sign-in-with-tenant/sign-in-with-tenant.component';
import { TenantGuard } from '@data/services/guards/tenant.guard';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';

export const appRoutes: Route[] = [

    { path: '', pathMatch: 'full', redirectTo: 'tenantId/example' },

    // Landing routes
    {
        path: 'landing',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {
                path: '',
                loadChildren: () => import('app/modules/landing/home/home.routes'),
                providers: [
                    provideTranslocoScope('auth'),
                ]
            },
        ]
    },
    // sign-in without tenant
    {
        path: 'Sign-In',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {
                path: '',
                // component: SignInWithoutTenantComponent,
                component: AuthSignInComponent,
                providers: [
                    provideTranslocoScope('auth'),
                ]
            },
        ]

    },
    // Admin routes
    {
        path: ':tenantId',
        canActivate:[TenantGuard],
        canActivateChild: [TenantGuard],
        component: LayoutComponent,
        children: [
            { path: 'example', loadChildren: () => import('app/modules/admin/example/example.routes') },
            {
                path:'Dashboard',
                component:DashboardComponent,
                providers:[
                    provideTranslocoScope('dashboard')
                ]
            },
            {
                path: 'Sign-In',
                component: SignInWithTenantComponent,
                data: {
                    layout: 'empty'
                },
                providers: [
                    provideTranslocoScope('auth'),
                ]
            }
        ]
    },

    // Auth routes
    //  {
    //     path: 'sign-in-without-tenant',
    //     component: LayoutComponent,
    //     children: [
    //         {
    //             path: '',
    //         },
    //     ]
    // }
    // { path: '**', redirectTo: 'tenantId/example' },
];
