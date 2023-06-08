import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackDetailsPage } from './track-details.page';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: TrackDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class TrackDetailsPageRoutingModule {}
