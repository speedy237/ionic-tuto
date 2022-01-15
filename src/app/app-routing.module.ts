import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'meteo',//change this by 'home'
    pathMatch: 'full'
  },
  {
    path: 'detail-product/:reference',
    loadChildren: () => import('./detail-product/detail-product.module').then( m => m.DetailProductPageModule)
  },
  {
    path: 'update-product/:reference',
    loadChildren: () => import('./update-product/update-product.module').then( m => m.UpdateProductPageModule)
  },
  {
    path: 'new-product',
    loadChildren: () => import('./new-product/new-product.module').then( m => m.NewProductPageModule)
  },
  {
    path: 'meteo',
    loadChildren: () => import('./meteo/meteo.module').then( m => m.MeteoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
