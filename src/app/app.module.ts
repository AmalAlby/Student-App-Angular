import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudComponent } from './addstud/addstud.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewstudComponent } from './viewstud/viewstud.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchstudComponent } from './searchstud/searchstud.component';

const myroute:Routes=[
  {
    path:"",
    component:AddstudComponent
  },
  {
    path: "view",
    component:ViewstudComponent
  },
  {
    path:"search",
    component:SearchstudComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddstudComponent,
    ViewstudComponent,
    NavbarComponent,
    SearchstudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
