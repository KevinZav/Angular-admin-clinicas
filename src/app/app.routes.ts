import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: 'admin',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.routing').then(m => m.PagesRoutingModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routing').then(m => m.AuthRoutingModule),
  },
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
