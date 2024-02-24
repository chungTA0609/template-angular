import { Route } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';

export const UIKIT_ROUTES: Route[] = [
  {
    path: 'button',
    component: ButtonComponent,
    data: { breadcrumb: 'Button' },
  },
  {
    path: 'formlayout',
    component: FormLayoutComponent,
    data: { breadcrumb: 'Form Layout' },
  },
];
