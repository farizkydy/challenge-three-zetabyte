import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChallengeTwoRoutingModule } from './challenge-two-routing.module';
import { ChallengeTwoComponent } from './challenge-two.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CardComponent } from '../card/card.component';
import { ModalComponent } from '../modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChallengeTwoComponent,
    CardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ChallengeTwoRoutingModule,
    ModalModule,
    ReactiveFormsModule
  ]
})
export class ChallengeTwoModule { }
