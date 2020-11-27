import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SafetyComponent } from './components/safety/safety.component';
import { HelplinesComponent } from './components/helplines/helplines.component';


const routes: Routes = [
  {path : '' , component : HomepageComponent},
  {path : 'countries' , component :CountriesComponent } ,
  {path : 'home', component: HomeComponent},
  {path : 'safety' ,component: SafetyComponent},
  {path: 'helplines' ,component:HelplinesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
