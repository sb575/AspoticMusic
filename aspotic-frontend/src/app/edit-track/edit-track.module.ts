import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTrackPageRoutingModule } from './edit-track-routing.module';

import { EditTrackPage } from './edit-track.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTrackPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditTrackPage]
})
export class EditTrackPageModule {}
