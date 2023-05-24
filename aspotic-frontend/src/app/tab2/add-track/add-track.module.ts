import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTrackPageRoutingModule } from './add-track-routing.module';

import { AddTrackPage } from './add-track.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTrackPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddTrackPage]
})
export class AddTrackPageModule {}
