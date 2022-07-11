import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrowsComponent } from './components/arrows/arrows.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { CountryComponent } from './components/country/country.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ArrowsComponent,
         CountryInfoComponent,
         CountryComponent,
         HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
