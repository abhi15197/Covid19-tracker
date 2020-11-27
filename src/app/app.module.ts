import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import {HttpClientModule}  from '@angular/common/http';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component'
import { GoogleChartsModule } from 'angular-google-charts';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HelplinesComponent } from './components/helplines/helplines.component';
import { SafetyComponent } from './components/safety/safety.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    DashboardCardComponent,
    HomepageComponent,
    SafetyComponent,
    HelplinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    GoogleChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
