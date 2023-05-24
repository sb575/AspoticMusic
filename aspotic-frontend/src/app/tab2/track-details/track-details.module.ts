import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackDetailsPageRoutingModule } from './track-details-routing.module';

import { TrackDetailsPage } from './track-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackDetailsPageRoutingModule
  ],
  declarations: [TrackDetailsPage]
})
export class TrackDetailsPageModule {}
