import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengeTwoModule } from './challenge-two/challenge-two.module';
import { CardComponent } from './card/card.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChallengeTwoModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
