import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EcommerceComponent } from './demo/components/ecommerce/ecommerce.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'ecommerce',
        data: { breadcrumb: 'E-Commerce' },
        loadComponent: () => EcommerceComponent,
      },
      {
        path: '',
        loadChildren: () =>
          import('./components/dashboard/dashboard.routes').then(
            (m) => m.DASHBOARD_ROUTES
          ),
      },
      {
        path: 'uikit',
        data: { breadcrumb: 'UI Kit' },
        loadChildren: () =>
          import('./demo/components/uikit/uikit.routes').then(
            (m) => m.UIKIT_ROUTES
          ),
      },
      // {
      //   path: 'utilities',
      //   data: { breadcrumb: 'Utilities' },
      //   loadChildren: () =>
      //     import('./demo/components/utilities/utilities.module').then(
      //       (m) => m.UtilitiesModule
      //     ),
      // },
      // {
      //   path: 'pages',
      //   data: { breadcrumb: 'Pages' },
      //   loadChildren: () =>
      //     import('./demo/components/pages/pages.module').then(
      //       (m) => m.PagesModule
      //     ),
      // },
      // {
      //   path: 'profile',
      //   data: { breadcrumb: 'User Management' },
      //   loadChildren: () =>
      //     import('./demo/components/profile/profile.module').then(
      //       (m) => m.ProfileModule
      //     ),
      // },
      // {
      //   path: 'documentation',
      //   data: { breadcrumb: 'Documentation' },
      //   loadChildren: () =>
      //     import('./demo/components/documentation/documentation.module').then(
      //       (m) => m.DocumentationModule
      //     ),
      // },
      // {
      //   path: 'blocks',
      //   data: { breadcrumb: 'Prime Blocks' },
      //   loadChildren: () =>
      //     import('./demo/components/primeblocks/primeblocks.module').then(
      //       (m) => m.PrimeBlocksModule
      //     ),
      // },
      // {
      //   path: 'apps',
      //   data: { breadcrumb: 'Apps' },
      //   loadChildren: () =>
      //     import('./demo/components/apps/apps.module').then(
      //       (m) => m.AppsModule
      //     ),
      // },
    ],
  },

  // {
  //   path: 'auth',
  //   data: { breadcrumb: 'Auth' },
  //   loadChildren: () =>
  //     import('./demo/components/auth/auth.module').then((m) => m.AuthModule),
  // },
  // {
  //   path: 'landing',
  //   loadComponent: () =>
  //     import('./components/landing/landing.component').then(
  //       (m) => m.LandingComponent
  //     ),
  // },
  // {
  //   path: 'notfound',
  //   loadComponent: () =>
  //     import('./components/notfound/notfound.component').then(
  //       (m) => m.NotfoundComponent
  //     ),
  // },
  { path: '**', component: NotfoundComponent },
];
