import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SecondpartComponent} from './secondpart/secondpart.component';

const routes: Routes = [

{path:'',

component:SecondpartComponent
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopyPathRoutingModule { }
