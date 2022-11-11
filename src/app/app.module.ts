import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PodborComponent } from './podbor/podbor.component';
import { VuziComponent } from './vuzi/vuzi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PodborComponent,
    VuziComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
