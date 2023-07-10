import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { TableComponent } from '../table/table.component';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [CommonModule, TableComponent, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
