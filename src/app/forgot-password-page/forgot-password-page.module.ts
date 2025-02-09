import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPagePageRoutingModule } from './forgot-password-page-routing.module';

import { ForgotPasswordPagePage } from './forgot-password-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    ForgotPasswordPagePageRoutingModule
  ],
  declarations: [ForgotPasswordPagePage]
})
export class ForgotPasswordPagePageModule {}
