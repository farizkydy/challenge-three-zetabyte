import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeTwoComponent } from './challenge-two.component';

const routes: Routes = [
  {
    path: "",
    component: ChallengeTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeTwoRoutingModule { }
