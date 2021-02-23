import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HashTableComponent } from './hash-table/hash-table.component';
import { StarComponent } from './star/star.component';


console.log("admin module");


@NgModule({
  declarations: [HashTableComponent, StarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],

exports:[HashTableComponent,StarComponent ]


})
export class AdminModule { }
