import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'select',
    loadChildren: () => import('select/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'table-shift-select',
    loadChildren: () =>
      import('table-shift-select/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'table-mouse-row-select',
    loadChildren: () =>
      import('table-mouse-row-select/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
