import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { EditTrackPage } from './edit-track.page';
import { HttpClientModule } from '@angular/common/http';
import { NavParams } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: EditTrackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class EditTrackPageRoutingModule {}
