import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackDetailsPage } from './track-details.page';

const routes: Routes = [
  {
    path: '',
    component: TrackDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackDetailsPageRoutingModule {}
