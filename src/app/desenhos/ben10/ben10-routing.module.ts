import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ben10Page } from './ben10.page';

const routes: Routes = [
  {
    path: '',
    component: Ben10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ben10PageRoutingModule {}
