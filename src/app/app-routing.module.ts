import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
const routes: Routes = [
  {
    path:'', pathMatch: 'full',
    redirectTo: 'home',
  }
  ,
  {
    path: 'home',
    component: HomeComponent,
  },{
    path: 'buscar/:text',
    component: ProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
