import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopyPathRoutingModule } from './copy-path-routing.module';
import { SecondpartComponent } from './secondpart/secondpart.component';
import { MasterpartComponent } from './masterpart/masterpart.component';
console.log("copy-path-module is working .....");

@NgModule({
  declarations: [SecondpartComponent, MasterpartComponent],
  imports: [
    CommonModule,     
    CopyPathRoutingModule
  ],

exports:[MasterpartComponent,SecondpartComponent]


})
export class CopyPathModule { }