import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HashTableComponent} from '../admin/hash-table/hash-table.component';
import {StarComponent} from '../admin/star/star.component';

const routes: Routes = [

{path:"star",

loadChildren:()=>import('../admin/admin.module').then(m=>m.AdminModule)
  
}  
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
