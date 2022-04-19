import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcarComponent } from './components/addcar/addcar.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarsComponent } from './components/cars/cars.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'addcar',
    component: AddcarComponent
  },
  {
    path: 'car/:id',
    component: CarDetailsComponent
  },
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: 'home', redirectTo: 'cars', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: ''
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
