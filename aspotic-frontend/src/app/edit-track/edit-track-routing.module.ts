import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTrackPage } from './edit-track.page';

const routes: Routes = [
  {
    path: '',
    component: EditTrackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTrackPageRoutingModule {}
