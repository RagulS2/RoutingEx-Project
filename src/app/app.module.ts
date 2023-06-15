import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cpm1Component } from './cpm1/cpm1.component';
import { Cpm2Component } from './cpm2/cpm2.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
// import DetailcompComponent from './detailcomp/detailcomp.component';
import { Detail1Component } from "./detail1/detail1.component";
import { DetailcompComponent } from "./detailcomp/detailcomp.component";


@NgModule({
  declarations: [
    AppComponent,
    Cpm1Component,
    Cpm2Component,
    Detail1Component,
    DetailcompComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
