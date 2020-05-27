import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ben10PageRoutingModule } from './ben10-routing.module';

import { Ben10Page } from './ben10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ben10PageRoutingModule
  ],
  declarations: [Ben10Page]
})
export class Ben10PageModule {}
