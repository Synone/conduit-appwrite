import { enableProdMode, importProvidersFrom } from '@angular/core';

import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            RouterModule.forRoot([
                {
                    path: '',
                    loadComponent: () => import('@nx-conduit/conduit/layout/feature').then((md) => md.LayoutComponent),
                    loadChildren: () => import('@nx-conduit/conduit/layout/feature').then((m) => m.LayoutRoutes),
                },
            ])
        ),
    ],
}).catch((err) => console.error(err));
