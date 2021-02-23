import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPartComponent } from './Nehal-f-p/login-part/login-part.component';
import { PassedComponent } from './Nehal-f-p/passed/passed.component';
import { FormsModule } from '@angular/forms';
import { StartingComponent } from './Nehal-f-p/starting/starting.component';
import { EndingComponent } from './Nehal-f-p/ending/ending.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule}  from '@angular/common/http';
import { SeparatePipe } from './separate.pipe';
import { PageNotFoundComponent } from './Nehal-f-p/page-not-found/page-not-found.component';
import { ImagePartComponent } from './image-part/image-part.component';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {AdminModule} from './admin/admin.module';
// import {CopyPathModule} from './copy-path/copy-path.module';
import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import {NavItemComponent} from './nav-item/nav-item.component';
import { LoginPhaseworkingComponent } from './login-phaseworking/login-phaseworking.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    
    AppComponent,
    LoginPartComponent,
    PassedComponent,
    StartingComponent,
    EndingComponent,
    SeparatePipe,
    PageNotFoundComponent,
    ImagePartComponent,
    NavItemComponent,
    LoginPhaseworkingComponent,
    HomeComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    // AdminModule,
    // CopyPathModule

    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  
 

  ],
  providers: [],
  bootstrap: [AppComponent],

entryComponents:[PassedComponent ]

})
export class AppModule { }
