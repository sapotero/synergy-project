import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstStageComponent} from "./stages/first-stage/first-stage.component";
import {SecondStageComponent} from "./stages/second-stage/second-stage.component";
import {ThirdStageComponent} from "./stages/third-stage/third-stage.component";
import {FourthStageComponent} from "./stages/fourth-stage/fourth-stage.component"; // CLI imports router

const routes: Routes = [
  { path: 'stage/first', component: FirstStageComponent },
  { path: 'stage/second', component: SecondStageComponent },
  { path: 'stage/third', component: ThirdStageComponent },
  { path: 'stage/fourth', component: FourthStageComponent },
  { path: '',   redirectTo: 'stage/first', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
