import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./pages/home-page/module/home-page.module').then(m => m.HomePageModule)},
//  {path: 'cars-home', loadChildren: () => import('./pages/cars/module/cars.module').then(m => m.CarsModule)}
  {path: '', redirectTo: '/home',  pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
