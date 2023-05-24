import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCommentPageRoutingModule } from './add-comment-routing.module';

import { AddCommentPage } from './add-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCommentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddCommentPage]
})
export class AddCommentPageModule {}
