import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrsinhosCarinhososPageRoutingModule } from './ursinhos-carinhosos-routing.module';

import { UrsinhosCarinhososPage } from './ursinhos-carinhosos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrsinhosCarinhososPageRoutingModule
  ],
  declarations: [UrsinhosCarinhososPage]
})
export class UrsinhosCarinhososPageModule {}
