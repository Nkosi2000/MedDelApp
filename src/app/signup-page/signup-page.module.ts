import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { IonicModule } from '@ionic/angular';
import { SignupPagePageRoutingModule } from './signup-page-routing.module';
import { SignupPagePage } from './signup-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    SignupPagePageRoutingModule
  ],
  declarations: [SignupPagePage]
})
export class SignupPagePageModule {}
