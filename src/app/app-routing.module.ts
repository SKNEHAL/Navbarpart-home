import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EndingComponent } from './Nehal-f-p/ending/ending.component';
import { LoginPartComponent } from './Nehal-f-p/login-part/login-part.component';
import {PageNotFoundComponent} from './Nehal-f-p/page-not-found/page-not-found.component';
import {PassedComponent} from './Nehal-f-p/passed/passed.component';
import {StartingComponent} from './Nehal-f-p/starting/starting.component';

import {LoginPhaseworkingComponent} from './login-phaseworking/login-phaseworking.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
  
{
  path:'Login',

  component:PassedComponent
},

{
  path:'Loginuser',

  component:LoginPhaseworkingComponent
},

{
  path:'home',

  component:HomeComponent
},


{
  path:'StartingComponent',

  component:StartingComponent
},


{
  path:'PassedComponent',

  component:PassedComponent
},


{
  path:'star',

loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
