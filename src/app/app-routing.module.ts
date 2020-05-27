import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ad-astra',
    loadChildren: () => import('./filmes/ad-astra/ad-astra.module').then( m => m.AdAstraPageModule)
  },
  {
    path: 'frozen2',
    loadChildren: () => import('./filmes/frozen2/frozen2.module').then( m => m.Frozen2PageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'rick-morty',
    loadChildren: () => import('./series/rick-morty/rick-morty.module').then( m => m.RickMortyPageModule)
  },
  {
    path: 'ben10',
    loadChildren: () => import('./desenhos/ben10/ben10.module').then( m => m.Ben10PageModule)
  },
  {
    path: 'ursinhos-carinhosos',
    loadChildren: () => import('./desenhos/ursinhos-carinhosos/ursinhos-carinhosos.module').then( m => m.UrsinhosCarinhososPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
