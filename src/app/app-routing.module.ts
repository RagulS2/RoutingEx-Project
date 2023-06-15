import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cpm1Component } from './cpm1/cpm1.component';
import { Cpm2Component } from './cpm2/cpm2.component';
import {DetailcompComponent} from './detailcomp/detailcomp.component';
import { Detail1Component } from './detail1/detail1.component';

const routes: Routes = [{path:'company',component:Cpm1Component},
{path:'employee',component:Cpm2Component},
{path:'company/:id',component:DetailcompComponent},
{path:'employee/:id',component:Detail1Component},
// {path:'**',component:Cpm2Component},
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
